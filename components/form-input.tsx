"use client"

import type React from "react"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  required?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, required, id, ...props }, ref) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <Label htmlFor={inputId} className="text-sm font-medium text-foreground">
          {label}
          {required && (
            <span className="text-red-500 ml-1" aria-label="required">
              *
            </span>
          )}
        </Label>
        <Input
          ref={ref}
          id={inputId}
          className={`focus:ring-cyan-600 focus:border-cyan-600 transition-all duration-200 ${
            error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
          } ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <motion.p
            id={`${inputId}-error`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-600"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </motion.div>
    )
  },
)

FormInput.displayName = "FormInput"

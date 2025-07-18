export interface Artist {
  id: string
  name: string
  categories: string[]
  location: string
  priceRange: string
  image: string
  rating: number
  reviews: number
  bio: string
  languages: string[]
}

export interface Submission {
  id: string
  name: string
  email: string
  categories: string[]
  location: string
  priceRange: string
  status: "pending" | "approved" | "rejected"
  submittedAt: string
}

export const mockArtists: Artist[] = [
  // Singers
  {
  id: "1",
  name: "Arijit Singh",
  categories: ["Singer", "Playback"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,00,000-2,00,000",
  image: "https://imgs.search.brave.com/api9vOjWIDSb4P1rFkMCo_0nni_qLZIJO2vj9TdLDXo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci8xMDQv/NDcyL0hELXdhbGxw/YXBlci1hcmlqaXQt/c2luZ2gtYmxhY2st/YW5kLXdoaXRlLXNp/bmdlci10aHVtYm5h/aWwuanBn",
  rating: 4.9,
  reviews: 1423,
  bio: "One of the most popular playback singers in India, known for soulful ballads and chart-topping hits across Bollywood films. Over a decade of live performances worldwide.",
  languages: ["Hindi", "Bengali", "Urdu"],
},
{
  id: "2",
  name: "Shreya Ghoshal",
  categories: ["Singer", "Playback"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,20,000-2,50,000",
  image: "https://imgs.search.brave.com/IxpfAJijjJFkBZXRx_kqkdF8EfE6e_HwQrfYA-9CmmM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93MC5w/ZWFrcHguY29tL3dh/bGxwYXBlci85NzEv/Mjk5L0hELXdhbGxw/YXBlci1zaHJleWEt/Z2hvc2hhbC1zaHJl/eWEtc2hyZXlhLWdo/b3NoYWwtc2hyZXlh/LXNocmV5YS1zaHJl/eWEtdGh1bWJuYWls/LmpwZw",
  rating: 4.9,
  reviews: 1305,
  bio: "National Award-winning playback singer with a melodious voice. Known for versatility across classical, romantic, and devotional genres in multiple Indian languages.",
  languages: ["Hindi", "Bengali", "Tamil", "Telugu", "Malayalam"],
},
{
  id: "3",
  name: "Jubin Nautiyal",
  categories: ["Singer", "Playback"],
  location: "Dehradun, Uttarakhand",
  priceRange: "₹80,000-1,80,000",
  image: "https://imgs.search.brave.com/jD5C3EIVWcCUkyBbqhNE0nhJ2RaRn6xRO9CSNMEE720/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9sbHl3b29kYmlv/Z3JhcGh5LmluL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAx/L2p1YmluLW5hdXRp/eWFsLTIud2VicA",
  rating: 4.8,
  reviews: 987,
  bio: "Popular for romantic ballads and soulful tracks in Bollywood. Known for live shows that blend emotion, energy, and musical brilliance.",
  languages: ["Hindi", "English", "Garhwali"],
},
{
  id: "4",
  name: "Neha Kakkar",
  categories: ["Singer", "Pop", "Playback"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹90,000-2,00,000",
  image: "https://imgs.search.brave.com/E2WyTt10Qi0GRwV5wbM6qPZ37DBG8qPEzISnKMTl8WM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YxLzJl/L2E5L2YxMmVhOWEy/ZmRjNGU4ZTEzMGFj/NmQxNGU0ZjEyMzMy/LmpwZw",
  rating: 4.7,
  reviews: 1152,
  bio: "Chart-topping pop and playback singer known for her energetic stage performances and hit party anthems. Popular among youth audiences.",
  languages: ["Hindi", "Punjabi", "English"],
},
{
  id: "5",
  name: "Sonu Nigam",
  categories: ["Singer", "Playback", "Classical"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,50,000-3,00,000",
  image: "https://imgs.search.brave.com/JLt5R6Uw2DH8eztqqaMg52i804NBYzNKp7JMGw5bWSU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YTUuYm9sbHl3b29k/aHVuZ2FtYS5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNS8w/NS9LYW5uYWRhLWZp/bG0tcmVtb3Zlcy10/aGUtc29uZy1zdW5n/LWJ5LVNvbnUtTmln/YW0tb3Zlci04MDAt/MzIyeDMyMi5qcGc",
  rating: 4.9,
  reviews: 1620,
  bio: "Legendary Indian singer with a career spanning over three decades. Revered for his classical training, vocal range, and emotive live performances.",
  languages: ["Hindi", "Kannada", "Bengali", "Marathi", "Telugu", "Tamil"],
},


  // DJs
  {
  id: "6",
  name: "DJ Chetas",
  categories: ["DJ", "Bollywood", "Mashups"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,00,000-2,00,000",
  image: "https://imgs.search.brave.com/8gURutIalji-ftlRU5r_0pEXI4uo5d0poKy7qaClRr0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS9h/cnRpc3RzL0RqX0No/ZXRhc18yMDE3MTIw/NzEwMTUzMV81MDB4/NTAwLmpwZw",
  rating: 4.8,
  reviews: 832,
  bio: "Official DJ of many Bollywood hits and weddings. Known for Bollywood mashups, high-energy remixes, and electrifying stage presence.",
  languages: ["Hindi", "English"],
},
{
  id: "7",
  name: "DJ Nyk",
  categories: ["DJ", "Electronic", "House"],
  location: "Delhi, NCR",
  priceRange: "₹80,000-1,50,000",
  image: "https://imgs.search.brave.com/925duJ_VanJ75aMF9QsGuZSu0SqLpEaLhd5Dz5yGfMw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZHJlYW16a3JhZnQu/Y29tL2FkbWluL2Fy/dGlzdFRodW1ibmFp/bEltYWdlLzViZGFm/MDkwNjJmMDVfX0RK/LU5ZSy5qcGc",
  rating: 4.7,
  reviews: 715,
  bio: "Renowned Indian DJ specializing in EDM, House, and Bollywood remixes. Regular performer at clubs and festivals across India and abroad.",
  languages: ["Hindi", "English"],
},
{
  id: "8",
  name: "DJ Suketu",
  categories: ["DJ", "Bollywood", "Remix"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,20,000-2,50,000",
  image: "https://imgs.search.brave.com/ZWrAIx_WnEOILbUm5rKCuIrnOyJu_DliKkIQd3CWNTA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldmVu/dHMucGhvZW5peG1h/bGxvZmFzaWEuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA2L0RKLVN1a2V0/dS0xOTIwWDEwODAu/anBn",
  rating: 4.9,
  reviews: 1045,
  bio: "One of India's top remix DJs with several hit tracks to his name. Brings a mix of retro and modern beats to create unforgettable dance nights.",
  languages: ["Hindi", "English", "Gujarati"],
},
{
  id: "9",
  name: "DJ Paroma",
  categories: ["DJ", "Commercial", "Club"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹70,000-1,50,000",
  image: "https://imgs.search.brave.com/3Cc9wEAaHqpvTnHK0NuOhXT1fLZMcN_hB1OMaiJypDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYXRvbS5pbi9j/ZG4vc2hvcC9maWxl/cy82LjQucG5nP3Y9/MTY5OTEwMTk5MSZ3/aWR0aD01MzM",
  rating: 4.8,
  reviews: 688,
  bio: "Celebrity DJ and fashion icon. Known for spinning upbeat club mixes and electrifying dance music at international venues and weddings.",
  languages: ["English", "Hindi"],
},
{
  id: "10",
  name: "DJ Akhil Talreja",
  categories: ["DJ", "Bollywood", "EDM"],
  location: "Bangalore, Karnataka",
  priceRange: "₹90,000-1,80,000",
  image: "https://imgs.search.brave.com/FYf7G4zewKU3hTM4TCutvnTUPJyXXmfJzsDhz8ge4yE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YXBr/YS1jZG4uenVuYS5p/ZC8wMGJ1dDgvMDRj/NjkzOWRhYzIxZWM4/MTE0OGJiZTk0NTdl/NWY4MzYvdW5pbnRl/cnJ1cHRlZC1ib2xs/eXdvb2QtZXBpc29k/ZS0yLWRqLWFraGls/LXRhbHJlamEuanBn",
  rating: 4.7,
  reviews: 734,
  bio: "Top Bollywood and EDM DJ, popular for his mashups and remixes. Plays at high-end corporate events, clubs, and college fests.",
  languages: ["Hindi", "English", "Kannada"],
},


  // Dancers
  {
  id: "11",
  name: "Shakti Mohan",
  categories: ["Dancer", "Contemporary", "Bollywood"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,00,000-2,00,000",
  image: "https://imgs.search.brave.com/D0jJLEIjZhTUn5A1URcEMHwJwxD-UUJRDnHyiH45PvU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDU5ODQ1/NTQuanBn",
  rating: 4.9,
  reviews: 1320,
  bio: "Renowned contemporary dancer, choreographer, and Dance India Dance winner. Known for graceful moves and expressive storytelling through dance.",
  languages: ["Hindi", "English"],
},
{
  id: "12",
  name: "Punit Pathak",
  categories: ["Dancer", "Hip Hop", "Bollywood"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,20,000-2,50,000",
  image: "https://imgs.search.brave.com/WtgB7LxEpO9SlFIWod6xdTN-3XUJtfHXoS7_huu6cdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBlLzJk/Lzk1LzBlMmQ5NTlj/MzY5OWY2Zjc0ZWE4/NTQ2NWY4NDUzNzYz/LmpwZw",
  rating: 4.8,
  reviews: 980,
  bio: "Famous choreographer and actor, known for high-energy hip-hop and Bollywood performances on stage and screen.",
  languages: ["Hindi", "English", "Marathi"],
},
{
  id: "13",
  name: "Suresh Mukund – Kings United",
  categories: ["Dancer", "Crew", "Hip Hop"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹2,00,000-4,00,000",
  image: "https://imgs.search.brave.com/2SjEXlwUW_-Yh6JQpEImDkFJEa2p3i3NyNsYtwiiZAk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uZXR0/djR1LmNvbS9pbWFn/aW5lLzE0LTA5LTIw/MTgvc3VyZXNoLW11/a3VuZC5qcGc",
  rating: 5.0,
  reviews: 1578,
  bio: "World Dance Champions and choreographers behind India's Got Talent and World of Dance fame. Known for spectacular group formations and cinematic storytelling.",
  languages: ["Hindi", "English"],
},
{
  id: "14",
  name: "Madhuri Dixit Dance Group",
  categories: ["Dancer", "Classical", "Bollywood"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹2,00,000-3,50,000",
  image: "https://imgs.search.brave.com/-Kq5tiQYafGGNmp7lP65mjfbcCDxiR6kuNDXsVnD9g4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/MTM2OTkxMC9waG90/by9tdW1iYWktaW5k/aWEtbWFkaHVyaS1k/aXhpdC1hdC1maWxt/aXN0YW4tc3R1ZGlv/LW9uLWp1bmUtMDMt/MjAxMy1pbi1tdW1i/YWktaW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUd1/ZUpJQmhUQXdCTVpM/TFM5NVA4UlNNOEl5/bUpkQ2hVNVBMWDVo/dTJENHM9",
  rating: 4.9,
  reviews: 1115,
  bio: "Elegant classical and semi-classical dance group trained under Madhuri Dixit’s academy. Famous for live and televised performances.",
  languages: ["Hindi", "Marathi", "English"],
},
{
  id: "15",
  name: "Nrityagram Dance Ensemble",
  categories: ["Dancer", "Classical", "Odissi"],
  location: "Bangalore, Karnataka",
  priceRange: "₹1,50,000-3,00,000",
  image: "https://imgs.search.brave.com/mCXg2rY2aJK_7LU51f_1hFy1IlOKBnOuIJ6YWoAef_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hcnRz/LmR1a2UuZWR1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzEx/LzIwMTgtMDktMjIt/MjAxOC0wOS0yMy1O/cml0eWFncmFtLU5P/QkFER0UtMy5qcGc",
  rating: 4.8,
  reviews: 847,
  bio: "Internationally acclaimed Odissi classical dance ensemble blending tradition with innovation. Frequent performers at global festivals.",
  languages: ["English", "Hindi", "Kannada"],
},


  // Speakers
{
  id: "16",
  name: "Dr. Vivek Bindra",
  categories: ["Speaker", "Motivational", "Business"],
  location: "Delhi, NCR",
  priceRange: "₹3,00,000-5,00,000",
  image: "https://imgs.search.brave.com/qm7dsKee3JzmKjGJXZaONUdlb5jC7ifJhNXzfLyIcA4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGFy/c3VuZm9sZGVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNC9Eci4tVml2/ZWstQmluZHJhLmpw/Zw",
  rating: 4.9,
  reviews: 2150,
  bio: "India’s top business coach and motivational speaker. Known for energetic sessions on leadership, entrepreneurship, and personal transformation.",
  languages: ["Hindi", "English"],
},
{
  id: "17",
  name: "Sandeep Maheshwari",
  categories: ["Speaker", "Inspirational"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹2,50,000-4,50,000",
  image: "https://imgs.search.brave.com/C7CEdMwparG2FuPHp27w8qvqOtwM8e7fbNq9nBMSR8E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YWphYmdqYWIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIw/LzA5L1NhbmRlZXAt/TWFoZXNod2FyaS0y/LTMwMHgzMDAuanBn",
  rating: 5.0,
  reviews: 3500,
  bio: "Inspirational speaker and entrepreneur empowering millions with his life-changing talks and free public seminars.",
  languages: ["Hindi", "English"],
},
{
  id: "18",
  name: "Dr. Radhakrishnan Pillai",
  categories: ["Speaker", "Philosophy", "Leadership"],
  location: "Mumbai, Maharashtra",
  priceRange: "₹1,50,000-3,00,000",
  image: "https://imgs.search.brave.com/CopUOA3KuNaDW77ykwfHOlI0MyyEaq8_n3J4BYm9frk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsbGFsZWFkZXJz/LmNvbS92My93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC9E/ci4tUmFkaGFrcmlz/aG5hbi1QaWxsYWlf/LnBuZw",
  rating: 4.8,
  reviews: 920,
  bio: "Author of 'Corporate Chanakya' and a respected speaker on leadership, ancient Indian wisdom, and management.",
  languages: ["English", "Hindi"],
},
{
  id: "19",
  name: "Priya Kumar",
  categories: ["Speaker", "Motivational", "Author"],
  location: "Bangalore, Karnataka",
  priceRange: "₹2,00,000-3,50,000",
  image: "https://imgs.search.brave.com/EWKMwln6jtLMY2TOEHF0S4eH3uk1Cd1gimBrsA-Dboo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aXVlbWFnLmNvbS9z/ZXB0ZW1iZXIyMDE0/L2lzL2ltYWdlcy9p/dS1lLW1hZ2F6aW5l/LWktYW0td29tYW4t/aS1nZXQtcGFpZC10/by10YWxrLXByaXlh/LWt1bWFyLWltbW9y/dGFsLXBvd2VyZnVs/LXNvdWwtaW5zcGly/YXRpb24tZW50cmVw/cmVuZXVyLXB1Ymxp/Yy1zcGVha2luZy13/cml0aW5nLW1vdGl2/YXRpb25hbC1zcGVh/a2VyLmpwZw",
  rating: 4.7,
  reviews: 780,
  bio: "Award-winning author and motivational speaker known for high-energy, impactful storytelling that inspires transformation.",
  languages: ["English", "Hindi"],
},
{
  id: "20",
  name: "Gaur Gopal Das",
  categories: ["Speaker", "Spiritual", "Motivational"],
  location: "Pune, Maharashtra",
  priceRange: "₹2,00,000-4,00,000",
  image: "https://imgs.search.brave.com/ApzEGpq2G75GWmAAL6f_BMHL-WiNtELgpJnRZsAXsIY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXN0cm9zYWdlLmNv/bS9jZWxlYnJpdHkt/aG9yb3Njb3BlL2lt/Zy9HYXVyLUdvcGFs/LURhcy1ob3Jvc2Nv/cGUuanBn",
  rating: 5.0,
  reviews: 3000,
  bio: "International life coach and monk delivering spiritual, practical, and deeply human talks that blend wisdom and humor.",
  languages: ["Hindi", "English", "Marathi"],
},


  // Comedians
  {
    id: "21",
    name: "Ravi Gupta",
    categories: ["Comedian", "Stand-up"],
    location: "Pune, Maharashtra",
    priceRange: "₹20,000-40,000",
    image: "https://imgs.search.brave.com/F2tiJiwG0PbBijNF9Ybxg4jzviLy4brPpUaM8qFOfV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zb3Np/bWcuc2dwMS5jZG4u/ZGlnaXRhbG9jZWFu/c3BhY2VzLmNvbS9h/cnRpc3QtZ2FsbGVy/eS85ODcwODQ0XzE3/MDE2ODUxODgud2Vi/cA",
    rating: 4.6,
    reviews: 78,
    bio: "Stand-up comedian with clean, family-friendly material in Hindi and English. Perfect for corporate events and celebrations.",
    languages: ["Hindi", "English", "Marathi"],
  },
  {
    id: "22",
    name: "Priyanka Joshi",
    categories: ["Comedian", "Improv"],
    location: "Mumbai, Maharashtra",
    priceRange: "₹25,000-45,000",
    image: "https://imgs.search.brave.com/lp94PCXFu95g-QO1HBxlvYxaiu08D2RQ7md2l6paFeg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icm93/bnBhbnQuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzEy/L1N1cHJpeWFKb3No/aS0yODB4MjgwLndl/YnA",
    rating: 4.5,
    reviews: 56,
    bio: "Improvisational comedian and actress known for her witty observations and interactive comedy shows.",
    languages: ["Hindi", "English", "Gujarati"],
  },

  // Musicians/Bands
  {
    id: "23",
    name: "Fusion Beats Band",
    categories: ["Band", "Fusion"],
    location: "Hyderabad, Telangana",
    priceRange: "₹80,000-1,50,000",
    image: "https://imgs.search.brave.com/l0p3ZKQ2b1nSHZbvrgGC0MMCbrps7Ji8UvF7MxnaDqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS53ZWRtZWdvb2Qu/Y29tL3Jlc2l6ZWQv/MTAwMFgvdXBsb2Fk/cy9tZW1iZXIvMTc3/NDc0Mi8xNjc4Mjgx/MzE1XzIwMjMwMzA2/XzEwNTg0My5qcGc_/Y3JvcD0wLDUyMiwy/MDQ4LDExNTI",
    rating: 4.9,
    reviews: 67,
    bio: "Six-piece fusion band blending Indian classical with contemporary music. Perfect for weddings and cultural festivals.",
    languages: ["Telugu", "Hindi", "English"],
  },
  {
    id: "24",
    name: "Acoustic Souls",
    categories: ["Band", "Acoustic"],
    location: "Kolkata, West Bengal",
    priceRange: "₹35,000-70,000",
    image: "https://imgs.search.brave.com/3JXsC69neYxbl8BXglUA6F6zHeVXyf-KywkgP_P3dXo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ0/NjI3Mjc1MC9waG90/by95b3VuZy1tYW4t/cGxheWluZy10aGUt/c2l0YXItd2l0aC1h/LXlvdW5nLW1hbi1w/bGF5aW5nLWVsZWN0/cmljLWd1aXRhci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/NTg1NzZfX3otYU5F/Tkw1TUhZTGotelhp/SzZLdG04dlFhTmFw/ZGo1RDVadz0",
    rating: 4.7,
    reviews: 89,
    bio: "Acoustic band specializing in unplugged versions of popular songs and original compositions for intimate gatherings.",
    languages: ["Bengali", "Hindi", "English"],
  },

  // Folk Artists
  {
    id: "25",
    name: "Meera Joshi",
    categories: ["Singer", "Folk"],
    location: "Jaipur, Rajasthan",
    priceRange: "₹18,000-35,000",
    image: "https://imgs.search.brave.com/u0m2AjcoLd9foeYoizno-hLAtPMoD_8yITTEZ0k6iqg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEyL2Zm/LzQ1LzEyZmY0NTI4/Njg1NDJiMTMwOWQ4/MGJkM2YzMDk4OWNi/LmpwZw",
    rating: 4.9,
    reviews: 203,
    bio: "Folk singer specializing in Rajasthani folk music, ghazals, and devotional songs with traditional instruments.",
    languages: ["Hindi", "Rajasthani", "English"],
  },
  {
    id: "26",
    name: "Punjab Folk Ensemble",
    categories: ["Band", "Folk"],
    location: "Chandigarh, Punjab",
    priceRange: "₹45,000-90,000",
    image: "https://imgs.search.brave.com/vAJ1BuErXG6c73BtqK8LSD7yZWLfXrdMyX4AEtedjZ4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzIzLzk3Lzkz/LzM2MF9GXzQyMzk3/OTM3NV9DZGFmWE0y/ZWNRVDZkbEVPOW9X/bGVxWnViSjJ0QkJs/RC5qcGc",
    rating: 4.8,
    reviews: 112,
    bio: "Traditional Punjabi folk music group with dhol, tumbi, and other authentic instruments for cultural celebrations.",
    languages: ["Punjabi", "Hindi", "English"],
  },

  // Magicians
  {
    id: "27",
    name: "Magic Mantra - Rohit Agarwal",
    categories: ["Magician", "Illusion"],
    location: "Kolkata, West Bengal",
    priceRange: "₹30,000-60,000",
    image: "https://imgs.search.brave.com/xONEvGqb3mY5cvcFl6A0zhPjnMnhq8IE2aE_ELKAgpc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjF0RWRHallEQUwu/anBn",
    rating: 4.8,
    reviews: 92,
    bio: "Professional magician specializing in stage illusions, close-up magic, and mentalism for corporate and private events.",
    languages: ["Hindi", "English", "Bengali"],
  },
  {
    id: "28",
    name: "Mystique Magic - Ananya Sharma",
    categories: ["Magician", "Kids"],
    location: "Jaipur, Rajasthan",
    priceRange: "₹15,000-30,000",
    image: "https://imgs.search.brave.com/cIyiU8LLymWG_HhgBYrBmcKqgs0zeATr_ikFbuWFqQc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBhL2Fm/L2JlLzBhYWZiZTdm/NzU0MDBiYzQzMzM1/ZTk0MTE4YmQyZDky/LmpwZw",
    rating: 4.6,
    reviews: 78,
    bio: "Children's entertainer and magician specializing in birthday parties and family events with interactive magic shows.",
    languages: ["Hindi", "English", "Rajasthani"],
  },

  // Instrumentalists
  {
    id: "29",
    name: "Sitar Maestro Vikram",
    categories: ["Musician", "Classical"],
    location: "Varanasi, Uttar Pradesh",
    priceRange: "₹40,000-80,000",
    image: "https://imgs.search.brave.com/DIRfSKA9E78YScWLmUwzj4D6B1gZLcTb1Rv_J4RqQfA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ2/ODIwNTEvZXMvZm90/by9pbmRpYW4tc2l0/YXItbWFlc3Ryby1w/YW5kaXQtcmF2aS1z/aGFua2FyLWFuZC1o/aXMtZGF1Z2h0ZXIt/YW5vdXNoa2Etc2hh/bmthci1wZXJmb3Jt/LWF0LXRoZS1kb3Zl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9akhEZ1k3cmJR/WnpFcG9QUjZZNksw/QWRjVGRlWTRTdGpP/eHN0SUh2MXQ1az0",
    rating: 4.9,
    reviews: 87,
    bio: "Classical sitar player trained in the Maihar Gharana tradition. Performs ragas and fusion music for cultural events.",
    languages: ["Hindi", "English", "Sanskrit"],
  },
  {
    id: "30",
    name: "Tabla Virtuoso Amit",
    categories: ["Musician", "Percussion"],
    location: "Mumbai, Maharashtra",
    priceRange: "₹25,000-50,000",
    image: "https://imgs.search.brave.com/kVo3NH_zHSrKkzSUlj4pj4l0FlHwmXlwSIzo0u3nTpE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ucHIu/YnJpZ2h0c3BvdGNk/bi5jb20vZGltczMv/ZGVmYXVsdC9zdHJp/cC9mYWxzZS9jcm9w/LzM0NTl4MjMwNisw/KzAvcmVzaXplLzEx/MDAvcXVhbGl0eS81/MC9mb3JtYXQvanBl/Zy8_dXJsPWh0dHA6/Ly9ucHItYnJpZ2h0/c3BvdC5zMy5hbWF6/b25hd3MuY29tL2M2/LzJjL2I0YzZlYjNm/NGNmMmJiYzk1MDFk/ZjUzMjc3YWIvZ2V0/dHlpbWFnZXMtMTE1/ODA1NDUyNC5qcGc",
    rating: 4.7,
    reviews: 94,
    bio: "Expert tabla player with 20+ years of experience in classical, semi-classical, and fusion music performances.",
    languages: ["Hindi", "English", "Marathi"],
  },

  // Poets/Storytellers
  {
    id: "31",
    name: "Kavita Krishnan",
    categories: ["Poet", "Storyteller"],
    location: "Kochi, Kerala",
    priceRange: "₹20,000-40,000",
    image: "https://imgs.search.brave.com/gDcmOT4_J-aAdI2R6mJoOaUXZkT-me5FQbu-n6NUCb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYzAu/YmxyMS5jZG4uZGln/aXRhbG9jZWFuc3Bh/Y2VzLmNvbS90aHVt/Ym5haWwvMTM3MjMy/LWhlcWNwcmRvaGct/MTU4MjY4NTUwOS5q/cGc",
    rating: 4.8,
    reviews: 65,
    bio: "Contemporary poet and storyteller performing in Malayalam and English. Known for thought-provoking narratives.",
    languages: ["Malayalam", "English", "Hindi"],
  },
  {
    id: "32",
    name: "Shayar Sahil",
    categories: ["Poet", "Shayari"],
    location: "Lucknow, Uttar Pradesh",
    priceRange: "₹15,000-30,000",
    image: "https://imgs.search.brave.com/D1R9D1R1OkwtfCnYBgex-vyrQK4lRThnJXXgV7O9LY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0ySXhOemsy/TmpVdE1qTXlaQzAw/TmpjMkxUaGxNREl0/WTJZelpUTmlORFV6/WkROalhrRXlYa0Zx/Y0djQC5qcGc",
    rating: 4.6,
    reviews: 89,
    bio: "Urdu poet specializing in ghazals, nazms, and contemporary shayari for literary events and cultural gatherings.",
    languages: ["Urdu", "Hindi", "English"],
  },

  // Mime Artists
  {
    id: "33",
    name: "Silent Stories - Raj Mehta",
    categories: ["Mime", "Performance"],
    location: "Delhi, NCR",
    priceRange: "₹12,000-25,000",
    image: "https://imgs.search.brave.com/LKS2qYYSaTAQcHnckmp-55Dv-bC38_sVYxV306GTOD0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXR0/djR1LmNvbS9pbWFn/aW5lLzI5LTAyLTIw/MjAvcmFqLW1laHRh/LmpwZw",
    rating: 4.5,
    reviews: 43,
    bio: "Professional mime artist creating wordless stories through expressive body language and theatrical performances.",
    languages: ["Universal", "Hindi", "English"],
  },

  // Puppeteers
  {
    id: "34",
    name: "Rajasthani Puppet Show",
    categories: ["Puppeteer", "Traditional"],
    location: "Udaipur, Rajasthan",
    priceRange: "₹18,000-35,000",
    image: "https://imgs.search.brave.com/eKDpXf_Kg8L7-6gjGkI1R_NtrveK-4aNRACEsxUPsZQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jOC5h/bGFteS5jb20vY29t/cC9XWFQ5WEEvYS10/cmFkaXRpb25hbC1y/YWphc3RoYW5pLXB1/cHBldC1zaG93LWlu/LWphaXB1ci1yYWph/c3RoYW4taW5kaWEt/V1hUOVhBLmpwZw",
    rating: 4.7,
    reviews: 76,
    bio: "Traditional Rajasthani string puppet show (Kathputli) with folk music and storytelling for cultural events.",
    languages: ["Rajasthani", "Hindi", "English"],
  },
]

export const mockSubmissions: Submission[] = [
  {
    id: "1",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    categories: ["Singer", "Classical"],
    location: "Mumbai, Maharashtra",
    priceRange: "₹25,000-50,000",
    status: "approved",
    submittedAt: "2024-01-15",
  },
  {
    id: "2",
    name: "DJ Arjun Kapoor",
    email: "arjun.kapoor@email.com",
    categories: ["DJ", "Electronic"],
    location: "Goa",
    priceRange: "₹15,000-30,000",
    status: "pending",
    submittedAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Dr. Kavita Menon",
    email: "kavita.menon@email.com",
    categories: ["Speaker", "Motivational"],
    location: "Bangalore, Karnataka",
    priceRange: "₹75,000-1,50,000",
    status: "approved",
    submittedAt: "2024-01-18",
  },
  {
    id: "4",
    name: "Ravi Gupta",
    email: "ravi.gupta@email.com",
    categories: ["Comedian", "Stand-up"],
    location: "Pune, Maharashtra",
    priceRange: "₹20,000-40,000",
    status: "rejected",
    submittedAt: "2024-01-12",
  },
  {
    id: "5",
    name: "Meera Joshi",
    email: "meera.joshi@email.com",
    categories: ["Singer", "Folk"],
    location: "Jaipur, Rajasthan",
    priceRange: "₹18,000-35,000",
    status: "pending",
    submittedAt: "2024-01-22",
  },
  {
    id: "6",
    name: "Fusion Beats Band",
    email: "fusionbeats@email.com",
    categories: ["Band", "Fusion"],
    location: "Hyderabad, Telangana",
    priceRange: "₹80,000-1,50,000",
    status: "approved",
    submittedAt: "2024-01-25",
  },
  {
    id: "7",
    name: "Magic Mantra - Rohit Agarwal",
    email: "rohit.magicmantra@email.com",
    categories: ["Magician", "Illusion"],
    location: "Kolkata, West Bengal",
    priceRange: "₹30,000-60,000",
    status: "pending",
    submittedAt: "2024-01-28",
  },
  {
    id: "8",
    name: "Bharatanatyam Ensemble",
    email: "bharatanatyam.ensemble@email.com",
    categories: ["Dancer", "Classical"],
    location: "Chennai, Tamil Nadu",
    priceRange: "₹40,000-80,000",
    status: "approved",
    submittedAt: "2024-01-30",
  },
]

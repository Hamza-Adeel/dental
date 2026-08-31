export interface ChatbotCTA {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ChatbotResponse {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  actions?: ChatbotCTA[];
}

export interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: ChatbotCTA[];
}

export const INITIAL_WELCOME_MESSAGE: Message = {
  id: "welcome-msg",
  sender: "bot",
  text: "Hi! 👋 Welcome to BrightSmile Dental Clinic. I can help answer some common questions about our clinic, services, appointments, and dental care.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export const QUICK_QUESTIONS: { label: string; text: string }[] = [
  { label: "What services do you offer?", text: "What services do you offer?" },
  { label: "How do I book an appointment?", text: "How do I book an appointment?" },
  { label: "Do you offer emergency dentistry?", text: "Do you offer emergency dentistry?" },
  { label: "What are your opening hours?", text: "What are your opening hours?" },
  { label: "Where are you located?", text: "Where are you located?" },
  { label: "Do you offer dental implants?", text: "Do you offer dental implants?" },
  { label: "Do you offer teeth whitening?", text: "Do you offer teeth whitening?" },
  { label: "Do you accept insurance?", text: "Do you accept insurance?" },
  { label: "Do you treat children?", text: "Do you treat children?" },
  { label: "How can I contact the clinic?", text: "How can I contact the clinic?" }
];

export const CHATBOT_RESPONSES: ChatbotResponse[] = [
  {
    id: "services",
    keywords: ["service", "services", "treatment", "treatments", "offer", "procedure", "procedures", "what do you do", "types of care"],
    question: "What services do you offer?",
    answer: "We offer a wide range of dental services including general dentistry, cosmetic dentistry, dental implants, orthodontics, pediatric dentistry, emergency dentistry, teeth whitening, crowns, bridges, dentures, root canal treatment, and gum care.",
    actions: [
      { label: "View All 12 Services", href: "/services" },
      { label: "Book an Appointment", href: "/book-appointment" }
    ]
  },
  {
    id: "appointments",
    keywords: ["book", "booking", "appointment", "appointments", "schedule", "scheduling", "visit", "reserve", "slot", "see a dentist"],
    question: "How do I book an appointment?",
    answer: "You can request an appointment online through our interactive booking form, or contact our clinic directly by phone. Our patient concierge will promptly confirm your scheduled slot.",
    actions: [
      { label: "Book an Appointment", href: "/book-appointment" },
      { label: "Call +1 (555) 123-4567", href: "tel:+15551234567", isExternal: true }
    ]
  },
  {
    id: "hours",
    keywords: ["hour", "hours", "open", "opening", "time", "times", "schedule", "when are you open", "saturday", "sunday", "weekend", "close"],
    question: "What are your opening hours?",
    answer: "Our clinic is open Monday through Friday from 8:00 AM to 7:00 PM and Saturday from 9:00 AM to 3:00 PM. We are closed on Sunday, with on-call support for acute dental emergencies.",
    actions: [
      { label: "View Location & Hours", href: "/location" }
    ]
  },
  {
    id: "location",
    keywords: ["location", "locate", "address", "where", "directions", "map", "parking", "transit", "subway", "find"],
    question: "Where are you located?",
    answer: "We are located at 123 Smile Avenue, Suite 200, Metro City, NY 10001 (Medical Arts Tower, 2nd Floor). We offer 2 hours of complimentary validated parking in the underground garage.",
    actions: [
      { label: "Get Directions & Transit Info", href: "/location" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  {
    id: "children",
    keywords: ["child", "children", "kid", "kids", "pediatric", "pediatrics", "toddler", "baby teeth", "family"],
    question: "Do you treat children?",
    answer: "Yes! We provide gentle, family-friendly pediatric dental care designed to help children develop positive, healthy oral-health habits in a fear-free, comfortable environment.",
    actions: [
      { label: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
      { label: "Meet Dr. Olivia Taylor", href: "/dentists/dr-olivia-taylor" }
    ]
  },
  {
    id: "emergency",
    keywords: ["emergency", "emergencies", "urgent", "pain", "toothache", "hurt", "bleeding", "broken tooth", "knocked out", "swelling", "abscess", "accident", "trauma"],
    question: "Do you offer emergency dentistry?",
    answer: "Yes! We reserve daily emergency slots for urgent dental concerns such as severe toothaches, broken teeth, dental trauma, knocked-out teeth, and facial swelling. Please call our clinic immediately for same-day triage.",
    actions: [
      { label: "Emergency Dental Care Guide", href: "/emergency-dentistry" },
      { label: "Call Emergency Line", href: "tel:+15551234567", isExternal: true }
    ]
  },
  {
    id: "implants",
    keywords: ["implant", "implants", "missing tooth", "missing teeth", "replace tooth", "all on 4", "titanium"],
    question: "Do you offer dental implants?",
    answer: "Yes. Our clinic offers comprehensive 3D computer-guided dental implant consultations, single/multiple tooth replacements, and full-arch reconstructive care by Dr. Marcus Vance.",
    actions: [
      { label: "Learn About Dental Implants", href: "/services/dental-implants" },
      { label: "Book Implant Consult", href: "/book-appointment?service=dental-implants" }
    ]
  },
  {
    id: "whitening",
    keywords: ["whiten", "whitening", "bleach", "bleaching", "yellow", "stain", "stains", "bright", "brighter"],
    question: "Do you offer teeth whitening?",
    answer: "Yes. We offer in-office 1-hour laser teeth whitening that brightens smiles up to 8 shades lighter safely, as well as customized take-home maintenance whitening trays.",
    actions: [
      { label: "Explore Teeth Whitening", href: "/services/teeth-whitening" },
      { label: "Before & After Results", href: "/before-after" }
    ]
  },
  {
    id: "orthodontics",
    keywords: ["orthodontic", "orthodontics", "invisalign", "aligner", "aligners", "brace", "braces", "straighten", "crooked"],
    question: "Do you offer Invisalign or clear aligners?",
    answer: "Yes. We offer discreet clear aligners and low-profile ceramic braces for teens and adults, directed by our board-certified orthodontic specialist Dr. Elena Rodriguez.",
    actions: [
      { label: "Orthodontics & Clear Aligners", href: "/services/orthodontics" },
      { label: "Book 3D Smile Scan", href: "/book-appointment?service=orthodontics" }
    ]
  },
  {
    id: "veneers",
    keywords: ["veneer", "veneers", "porcelain", "bonding", "smile makeover", "cosmetic"],
    question: "Do you offer veneers and cosmetic smile makeovers?",
    answer: "Yes! Dr. Sarah Mitchell hand-crafts custom porcelain veneers, minimal-prep composite bonding, and full smile makeovers utilizing Digital Smile Design technology.",
    actions: [
      { label: "Cosmetic & Veneers", href: "/services/cosmetic-dentistry" },
      { label: "View Smile Transformations", href: "/before-after" }
    ]
  },
  {
    id: "insurance",
    keywords: ["insurance", "insurances", "ppo", "coverage", "cover", "pay", "payment", "cost", "financing", "carecredit", "fsa", "hsa", "plan", "plans"],
    question: "Do you accept insurance and offer financing?",
    answer: "We work with most major PPO dental insurance plans and file electronic claims on your behalf. We also offer 0% APR interest-free monthly financing through CareCredit and Sunbit.",
    actions: [
      { label: "Insurance & Payments", href: "/insurance-and-payments" },
      { label: "Verify Benefits With Front Desk", href: "/contact" }
    ]
  },
  {
    id: "contact",
    keywords: ["contact", "phone", "call", "email", "number", "talk", "reach", "front desk", "reception"],
    question: "How can I contact the clinic?",
    answer: "You can reach BrightSmile Dental Clinic by phone at +1 (555) 123-4567, by email at hello@brightsmiledental.example, or via our online contact form.",
    actions: [
      { label: "Call +1 (555) 123-4567", href: "tel:+15551234567", isExternal: true },
      { label: "Send a Message", href: "/contact" }
    ]
  },
  {
    id: "cleaning",
    keywords: ["clean", "cleaning", "cleanings", "hygiene", "hygienist", "exam", "checkup", "routine", "how often"],
    question: "How often should I get a dental cleaning?",
    answer: "Most patients benefit from routine professional cleanings and examinations every six months. If managing gum sensitivity or periodontal health, your dentist may suggest visits every 3 to 4 months.",
    actions: [
      { label: "General & Preventive Care", href: "/services/general-dentistry" },
      { label: "Book a Cleaning", href: "/book-appointment?service=general-dentistry" }
    ]
  },
  {
    id: "first-visit",
    keywords: ["first visit", "new patient", "what to expect", "first time", "onboarding", "bring"],
    question: "What should I expect during my first visit?",
    answer: "Your first visit includes low-radiation 3D/HD digital scans, a comprehensive dental and periodontal examination, gentle cleaning, and a one-on-one consultation to discuss your smile goals.",
    actions: [
      { label: "New Patient Resources", href: "/patient-resources" },
      { label: "Book First Visit", href: "/book-appointment" }
    ]
  },
  {
    id: "cost",
    keywords: ["cost", "price", "pricing", "how much", "expensive", "fee", "fees", "quote"],
    question: "How much does dental treatment cost?",
    answer: "Treatment costs vary depending on the procedure, complexity, and insurance coverage. We provide transparent upfront estimates and 0% financing options following your initial clinical evaluation.",
    actions: [
      { label: "Payment & Financing Options", href: "/insurance-and-payments" },
      { label: "Schedule Initial Exam", href: "/book-appointment" }
    ]
  },
  {
    id: "dentists",
    keywords: ["dentist", "dentists", "doctor", "doctors", "specialist", "specialists", "team", "who works there"],
    question: "Who are your dental specialists?",
    answer: "Our team includes Dr. Sarah Mitchell (Cosmetic), Dr. Marcus Vance (Implants & Surgery), Dr. Elena Rodriguez (Orthodontics), Dr. James Chen (Endodontics/Root Canals), and Dr. Olivia Taylor (Pediatric).",
    actions: [
      { label: "Meet Our Dentists", href: "/dentists" }
    ]
  }
];

export const FALLBACK_RESPONSE = {
  text: "I'm a simple clinic assistant and can only answer a few common questions. For more specific questions, please contact our dental team directly.",
  actions: [
    { label: "Contact Front Desk", href: "/contact" },
    { label: "Book an Appointment", href: "/book-appointment" }
  ]
};

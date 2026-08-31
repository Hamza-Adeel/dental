import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";
import DentalChatbot from "@/components/chatbot/DentalChatbot";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BrightSmile Dental Clinic",
    default: "BrightSmile Dental Clinic | Healthy Smiles. Confident Lives."
  },
  description: "Comprehensive, gentle, and modern dental care delivered by experienced specialists in a comfortable, state-of-the-art environment. Book your visit today.",
  keywords: ["Dental Clinic", "Dentist", "Cosmetic Dentistry", "Dental Implants", "Invisalign", "Teeth Whitening", "Pediatric Dentistry", "Emergency Dentist"],
  authors: [{ name: "BrightSmile Dental Team" }],
  openGraph: {
    title: "BrightSmile Dental Clinic | Healthy Smiles. Confident Lives.",
    description: "Experience premium, compassionate dental care. From routine cleanings to advanced dental implants and smile makeovers.",
    type: "website",
    locale: "en_US",
    siteName: "BrightSmile Dental Clinic"
  },
  twitter: {
    card: "summary_large_image",
    title: "BrightSmile Dental Clinic",
    description: "Healthy Smiles. Confident Lives. Modern, comfortable dentistry."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
        <DentalChatbot />
      </body>
    </html>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Globe,
  Share2
} from "lucide-react";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/dental-data";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@") || !newsletterEmail.includes(".")) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }
    setNewsletterError("");
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top Banner / Emergency Care Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 border border-slate-700/60 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white text-lg font-bold">Experiencing a Dental Emergency?</h4>
              <p className="text-slate-400 text-sm">We provide same-day urgent care for trauma, severe pain, and broken teeth.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-rose-600/20"
            >
              <AlertCircle className="w-4 h-4" />
              <span>Call Emergency: {CLINIC_INFO.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
        {/* Column 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center text-slate-950 shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white block leading-tight">
                Bright<span className="text-teal-400">Smile</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest text-slate-400 uppercase block">
                Dental Clinic
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
            Providing patient-centered, evidence-based dentistry in a serene, modern setting. From routine preventive wellness to advanced full-mouth restorations.
          </p>
          
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Subscribe to Oral Health Newsletter
            </div>
            {newsletterSubmitted ? (
              <div className="flex items-center gap-2 text-teal-400 text-sm bg-teal-950/60 border border-teal-800/60 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you for subscribing to dental wellness tips!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 flex-1"
                />
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
            {newsletterError && (
              <p className="text-xs text-rose-400 mt-1.5">{newsletterError}</p>
            )}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h5>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-teal-400 transition-colors">About Our Practice</Link></li>
            <li><Link href="/dentists" className="hover:text-teal-400 transition-colors">Our Dental Specialists</Link></li>
            <li><Link href="/before-after" className="hover:text-teal-400 transition-colors">Before & After Gallery</Link></li>
            <li><Link href="/reviews" className="hover:text-teal-400 transition-colors">Patient Testimonials</Link></li>
            <li><Link href="/gallery" className="hover:text-teal-400 transition-colors">Clinic Tour & Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-teal-400 transition-colors">Oral Health Articles</Link></li>
            <li><Link href="/faqs" className="hover:text-teal-400 transition-colors">Frequently Asked Questions</Link></li>
          </ul>
        </div>

        {/* Column 3: Clinical Services */}
        <div>
          <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h5>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/services/general-dentistry" className="hover:text-teal-400 transition-colors">General Dentistry</Link></li>
            <li><Link href="/services/cosmetic-dentistry" className="hover:text-teal-400 transition-colors">Cosmetic & Veneers</Link></li>
            <li><Link href="/services/dental-implants" className="hover:text-teal-400 transition-colors">Dental Implants</Link></li>
            <li><Link href="/services/orthodontics" className="hover:text-teal-400 transition-colors">Invisalign & Orthodontics</Link></li>
            <li><Link href="/services/teeth-whitening" className="hover:text-teal-400 transition-colors">Laser Teeth Whitening</Link></li>
            <li><Link href="/services/pediatric-dentistry" className="hover:text-teal-400 transition-colors">Pediatric Dentistry</Link></li>
            <li><Link href="/services/emergency-dentistry" className="hover:text-teal-400 transition-colors text-rose-400">Emergency Dental Care</Link></li>
            <li><Link href="/services" className="hover:text-teal-400 text-teal-400 font-semibold transition-colors flex items-center gap-1">All 12 Treatments &rarr;</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Hours */}
        <div>
          <h5 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Clinic Location</h5>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
              <span>{CLINIC_INFO.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-teal-400 transition-colors font-medium text-white">
                {CLINIC_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-teal-400 shrink-0" />
              <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-400 transition-colors">
                {CLINIC_INFO.email}
              </a>
            </li>
            <li className="pt-2 border-t border-slate-800">
              <div className="text-xs font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>Office Hours:</span>
              </div>
              <div className="text-xs text-slate-400 space-y-0.5">
                <p>{CLINIC_INFO.hours.weekdays}</p>
                <p>{CLINIC_INFO.hours.saturday}</p>
                <p className="text-slate-500">{CLINIC_INFO.hours.sunday}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          <p>© {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.</p>
          <p className="mt-0.5 text-slate-600 text-[11px]">
            The information provided on this website is for educational purposes and does not constitute formal medical diagnosis.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-slate-400">
          <Link href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/terms-and-conditions" className="hover:text-teal-400 transition-colors">Terms of Use</Link>
          <span>•</span>
          <Link href="/accessibility" className="hover:text-teal-400 transition-colors">Accessibility Statement</Link>
          <span>•</span>
          <Link href="/insurance-and-payments" className="hover:text-teal-400 transition-colors">Insurance & Financing</Link>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";
import { Accessibility, CheckCircle2, Phone, Mail } from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Accessibility Statement | BrightSmile Dental Clinic",
  description: "Our commitment to ensuring digital and physical accessibility for all patients, adhering to WCAG 2.1 AA guidelines."
};

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    "High-contrast text and UI elements meeting WCAG 2.1 AA standards",
    "Full keyboard navigability for all interactive forms, dropdowns, and modals",
    "Screen-reader friendly semantic HTML structure and ARIA labels",
    "Scalable typography supporting up to 200% browser zoom without loss of functionality",
    "Physical step-free wheelchair access, wide elevators, and accessible treatment operatories"
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
            Inclusive Healthcare
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-sm text-slate-500">
            BrightSmile Dental Clinic is committed to ensuring digital and physical accessibility for all patients.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">Our Commitment</h2>
            <p>
              We believe that everyone deserves equal access to oral health services and digital health resources. We continuously test and improve our website to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA criteria.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Implemented Accessibility Measures</h2>
            <ul className="space-y-2.5">
              {accessibilityFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Feedback & Assistance</h2>
            <p>
              If you experience any difficulty accessing any feature on this website or require accommodations for an in-person dental visit, our concierge team is happy to assist you directly:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl text-xs space-y-1 text-slate-700">
              <p><strong>Accessibility Coordinator</strong></p>
              <p>Phone: <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-teal-700 font-bold">{CLINIC_INFO.phone}</a></p>
              <p>Email: <a href={`mailto:${CLINIC_INFO.email}`} className="text-teal-700 underline">{CLINIC_INFO.email}</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

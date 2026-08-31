import React from "react";
import Link from "next/link";
import { HelpCircle, PhoneCall, Calendar, ArrowRight } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Frequently Asked Questions | BrightSmile Dental Clinic",
  description: "Find clear, honest answers to common dental questions regarding appointments, insurance, teeth whitening, implants, braces, and emergency care."
};

export default function FAQPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Knowledge & Help
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Have questions about your first visit, insurance coverage, cosmetic treatments, or emergency care? Search below or filter by category.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Accordion Component */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <FAQAccordion />
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-lg mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Still Have Unanswered Questions?</h2>
            <p className="text-slate-400 text-sm">
              Our patient concierge team is ready to assist you by phone, email, or in-person consultation.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Front Desk</span>
            </Link>
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

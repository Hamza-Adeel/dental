import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Privacy Policy | BrightSmile Dental Clinic",
  description: "Privacy practices, HIPAA compliance, secure form handling, and patient data protection policies of BrightSmile Dental Clinic."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
            Legal & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: August 2026 • BrightSmile Dental Clinic
          </p>
        </div>
      </section>

      {/* Main Privacy Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Note Box */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-start gap-3 text-xs text-teal-950">
            <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <strong>Patient Notice:</strong> This privacy policy explains how BrightSmile Dental Clinic ("we", "our", or "the Clinic") collects, uses, protects, and handles your personal information across our website and online appointment forms.
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you interact with our website, request an appointment, or contact our clinic, we may collect the following categories of personal information:
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-600">
              <li><strong>Contact Information:</strong> Full name, email address, phone number, and residential zip code.</li>
              <li><strong>Appointment Details:</strong> Preferred appointment date, requested clinical service, doctor preference, and whether you are a new or existing patient.</li>
              <li><strong>Inquiry Notes:</strong> Voluntary non-sensitive comments or dental symptoms you choose to submit in form text areas.</li>
              <li><strong>Technical Data:</strong> Anonymized browser type, IP address, device specifications, and cookie preferences used strictly for site performance.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>We utilize collected information solely for legitimate clinical and operational purposes, including:</p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-600">
              <li>Scheduling, coordinating, and confirming your requested dental appointments.</li>
              <li>Responding directly to your general or treatment inquiries.</li>
              <li>Verifying dental insurance coverage and co-pay estimates prior to visits.</li>
              <li>Improving website accessibility, speed, and user experience.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. HIPAA Confidentiality & Data Security</h2>
            <p>
              BrightSmile Dental Clinic adheres strictly to the Health Insurance Portability and Accountability Act (HIPAA) standards. All online form submissions are encrypted in transit using Transport Layer Security (TLS 1.3). We never sell, rent, or trade your personal or health data to commercial third parties or advertisers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Cookies & Web Analytics</h2>
            <p>
              Our website uses strictly essential cookies required for form navigation and optional anonymized analytics cookies to monitor aggregated page traffic. You can manage or revoke cookie preferences at any time using our Cookie Consent Manager.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Patient Rights</h2>
            <p>You have the right to:</p>
            <ul className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-600">
              <li>Request a copy of your personal data on file.</li>
              <li>Request correction or deletion of outdated contact information.</li>
              <li>Opt out of non-essential email newsletters at any time.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">6. Privacy Inquiries & Contact</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to review your records, please contact our Privacy Officer:
            </p>
            <div className="p-4 bg-slate-50 rounded-2xl text-xs space-y-1 text-slate-700">
              <p><strong>BrightSmile Dental Clinic — Privacy Officer</strong></p>
              <p>123 Smile Avenue, Suite 200, Metro City, NY 10001</p>
              <p>Email: <a href={`mailto:${CLINIC_INFO.email}`} className="text-teal-700 underline">{CLINIC_INFO.email}</a></p>
              <p>Phone: {CLINIC_INFO.phone}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

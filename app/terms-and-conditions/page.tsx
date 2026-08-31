import React from "react";
import Link from "next/link";
import { AlertCircle, FileCheck, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Terms & Conditions | BrightSmile Dental Clinic",
  description: "Terms of use, medical diagnosis disclaimer, appointment scheduling guidelines, and intellectual property rights for BrightSmile Dental Clinic."
};

export default function TermsAndConditionsPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
            Terms of Use
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-slate-500">
            Effective Date: August 2026 • BrightSmile Dental Clinic
          </p>
        </div>
      </section>

      {/* Terms Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Medical Disclaimer Alert */}
          <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3.5 text-xs sm:text-sm text-amber-950">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-900 mb-0.5">Medical & Dental Information Disclaimer</strong>
              The content published on this website (including articles, blogs, before/after transformations, and procedure explanations) is for general educational and informational purposes only. It is not intended as formal dental diagnosis, medical advice, or treatment plans. You must consult a licensed dental professional for a personalized clinical examination.
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using the BrightSmile Dental Clinic website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">2. Online Appointment Requests</h2>
            <p>
              Submitting an online appointment request through this website does not constitute a guaranteed booking until our clinical concierge contacts you via phone or email to confirm date, time slot, and specialist availability.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">3. Cancellation & Rescheduling Policy</h2>
            <p>
              To respect the time of our dental specialists and other patients waiting for care, we request at least <strong>24 hours advance notice</strong> for any appointment cancellations or rescheduling requests.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Intellectual Property</h2>
            <p>
              All text, graphic designs, logos, custom iconography, and photographic assets on this website are the proprietary property of BrightSmile Dental Clinic and may not be reproduced, modified, or distributed without express written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Limitation of Liability</h2>
            <p>
              Under no circumstances shall BrightSmile Dental Clinic, its clinicians, or staff be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use this website.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">6. Contact Information</h2>
            <p>
              For legal inquiries regarding these Terms and Conditions, please contact:
            </p>
            <p className="text-xs text-slate-600">
              BrightSmile Dental Clinic • 123 Smile Avenue, Suite 200, Metro City, NY • {CLINIC_INFO.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

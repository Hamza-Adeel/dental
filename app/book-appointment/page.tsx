"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, Clock, Calendar, CheckCircle2, Phone, Sparkles } from "lucide-react";
import BookingWizard from "@/components/BookingWizard";
import { CLINIC_INFO } from "@/data/dental-data";

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || undefined;
  const preselectedDentist = searchParams.get("dentist") || undefined;

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      {/* Header */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
            Online Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule Your Dental Appointment
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Book in less than two minutes. Select your service, choose your preferred specialist, and select a convenient time slot.
          </p>

          {/* Reassurance pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>HIPAA Compliant & Secure</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>No Upfront Credit Card Required</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
              <Clock className="w-4 h-4 text-teal-600" />
              <span>Prompt Confirmation Within 2 Hours</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Wizard */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8">
        <BookingWizard
          preselectedService={preselectedService}
          preselectedDentist={preselectedDentist}
        />
      </section>

      {/* Phone alternative */}
      <section className="max-w-xl mx-auto px-4 text-center space-y-2">
        <p className="text-xs text-slate-500">
          Prefer to schedule directly with our front desk receptionist?
        </p>
        <a
          href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800"
        >
          <Phone className="w-4 h-4" />
          <span>Call Us at {CLINIC_INFO.phone}</span>
        </a>
      </section>
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="py-24 text-center text-slate-500">Loading booking engine...</div>}>
      <BookingContent />
    </Suspense>
  );
}

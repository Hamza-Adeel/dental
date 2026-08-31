import React from "react";
import Link from "next/link";
import { AlertCircle, Phone, ArrowRight, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

interface EmergencyCalloutProps {
  compact?: boolean;
}

export default function EmergencyCallout({ compact = false }: EmergencyCalloutProps) {
  if (compact) {
    return (
      <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-rose-950">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">Dental Emergency?</span>
            <span className="text-xs text-rose-800">Same-day urgent relief available.</span>
          </div>
        </div>
        <a
          href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
          className="inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call {CLINIC_INFO.phone}</span>
        </a>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-rose-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-rose-900/50 shadow-2xl relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2 space-y-3">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 animate-pulse text-rose-400" />
            <span>Urgent Dental Triage</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dental Emergency? We’re Here to Help.
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Whether you have an excruciating toothache, a knocked-out tooth, severe facial swelling, or a broken restoration, our clinic provides guaranteed same-day pain relief.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-teal-400" /> Mon–Sat Fast-Track Walk-in Slots
            </span>
            <span>•</span>
            <span>After-Hours Emergency Tele-Triage</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center justify-center gap-2.5 bg-rose-600 hover:bg-rose-500 text-white text-base font-bold px-6 py-4 rounded-2xl shadow-xl shadow-rose-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
          <Link
            href="/emergency-dentistry"
            className="inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-3 rounded-2xl border border-slate-700 transition-colors"
          >
            <span>Read Emergency First-Aid Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

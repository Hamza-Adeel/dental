import React from "react";
import Link from "next/link";
import { Award, Users, Calendar, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { DENTISTS_DATA } from "@/data/dental-data";
import DentistCard from "@/components/DentistCard";

export const metadata = {
  title: "Our Dentists | BrightSmile Dental Clinic",
  description: "Meet our board-certified dental specialists, cosmetic artists, implant surgeons, orthodontists, and pediatric dentists."
};

export default function DentistsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Multidisciplinary Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet Our Dental Specialists
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our clinicians combine advanced academic training from top universities with a gentle, patient-first approach. Meet the dedicated team behind your healthiest smile.
            </p>
          </div>
        </div>
      </section>

      {/* Dentists Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DENTISTS_DATA.map((dentist) => (
            <DentistCard key={dentist.id} dentist={dentist} />
          ))}
        </div>
      </section>

      {/* Philosophy & Continuing Education */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Continuous Education</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our dentists complete over 100+ hours of advanced clinical CE annually in digital smile design, 3D implantology, and biomimetic materials.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Collaborative Care</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complex cases are reviewed in multi-specialist clinical conferences to ensure optimal aesthetic and functional outcomes.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white">Gentle Bedside Manner</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We prioritize patient comfort with unhurried consultations, profound painless anesthesia, and transparent guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to Meet With a Specialist?</h2>
        <p className="text-slate-600 text-sm max-w-lg mx-auto">
          Choose your preferred doctor or let us match you with the right specialist based on your dental needs.
        </p>
        <div className="pt-2">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { 
  AlertCircle, 
  Phone, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Activity, 
  ArrowRight,
  HeartPulse
} from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Emergency Dental Care | BrightSmile Dental Clinic",
  description: "Same-day urgent dental appointments for toothache pain relief, knocked-out teeth, broken crowns, dental abscesses, and trauma."
};

export default function EmergencyDentistryPage() {
  const emergencies = [
    {
      title: "Knocked-Out Permanent Tooth (Avulsion)",
      severity: "Immediate Critical (Under 60 Mins)",
      guide: "Pick up the tooth by the top crown ONLY (never touch the root). If dirty, gently rinse with milk or water. Try gently slipping it back into the socket. If not possible, keep it moist in a cup of cold milk or saliva and call us immediately."
    },
    {
      title: "Severe Throbbing Toothache or Abscess",
      severity: "Same-Day Urgent",
      guide: "Rinse with warm salt water and gently floss to remove trapped debris. Take ibuprofen for pain relief (never place aspirin directly on the gum tissue, which causes chemical burns). Call our emergency line for immediate diagnostic imaging."
    },
    {
      title: "Broken, Cracked, or Chipped Tooth",
      severity: "Same-Day Care",
      guide: "Save any broken tooth fragments and keep them moist in clean water. Rinse your mouth with warm water. Apply cold compress to the cheek if swelling is present to reduce inflammation."
    },
    {
      title: "Lost Dental Crown or Filling",
      severity: "Urgent within 24-48 Hours",
      guide: "If a crown falls off, keep it safe. You can apply a tiny dab of dental cement or toothpaste inside the crown to temporarily seat it over the sensitive tooth until our team permanently re-cements it."
    },
    {
      title: "Facial Swelling or Soft-Tissue Trauma",
      severity: "Immediate Care Required",
      guide: "Apply gentle pressure with sterile gauze to control bleeding. Use a cold ice pack wrapped in a cloth on the outside of your face in 15-minute intervals."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Urgent Hero Ribbon */}
      <section className="bg-rose-950 text-white pt-12 pb-16 relative overflow-hidden border-b border-rose-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 animate-pulse text-rose-400" />
              <span>Same-Day Urgent Dental Care</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Dental Emergency? We’re Here to Help.
            </h1>
            <p className="text-base sm:text-lg text-rose-100/90 leading-relaxed">
              Do not suffer through agonizing dental pain or risk permanent tooth loss. Our emergency dental team reserves daily slots to provide immediate pain relief and fast-track repair.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-rose-600/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              <span>Call Emergency Line: {CLINIC_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-rose-200 sm:pl-2">
              <Clock className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Walk-in emergency slots available Monday–Saturday</span>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency First-Aid Triage Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
            First-Aid Protocol
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How to Handle Common Dental Emergencies
          </h2>
          <p className="text-slate-600 text-sm">
            Follow these essential first-aid steps before arriving at our dental clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {emergencies.map((em, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 space-y-3 shadow-xs">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-slate-900 text-base">{em.title}</h3>
                <span className="text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full shrink-0">
                  {em.severity}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {em.guide}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hospital ER Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-3 text-amber-950">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>Important Medical Triage Disclaimer</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            If you are experiencing severe difficulty breathing, difficulty swallowing, continuous heavy bleeding that will not stop after 30 minutes of pressure, or suspected broken facial bones, please call <strong>911</strong> or proceed immediately to the nearest hospital emergency room.
          </p>
        </div>
      </section>

      {/* Emergency Booking Alternative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Need Immediate Help?</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Call us directly or submit an urgent appointment request. We will prioritize your booking for the next available chair.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Clinic Now</span>
            </a>
            <Link
              href="/book-appointment?service=emergency-dentistry"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Submit Urgent Request</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

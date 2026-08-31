import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Navigation, 
  Car, 
  Train, 
  Bus, 
  Accessibility, 
  Clock, 
  Phone, 
  Calendar,
  Building,
  CheckCircle2
} from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Location & Directions | BrightSmile Dental Clinic",
  description: "Find BrightSmile Dental Clinic. Parking directions, public transit lines, building accessibility, and neighborhood landmarks."
};

export default function LocationPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Visiting Our Office
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Location, Directions & Transit
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Conveniently situated in central Metro City with underground validated parking, rapid subway connections, and full wheelchair accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Main Location Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-bold uppercase text-teal-700">Metro City Center</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">123 Smile Avenue, Suite 200</h2>
                <p className="text-xs text-slate-500 mt-0.5">Located on the 2nd floor of the Medical Arts Tower</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                    <Clock className="w-4 h-4 text-teal-600" />
                    <span>Office Hours</span>
                  </div>
                  <p className="text-xs text-slate-600">Mon–Fri: 8:00 AM – 7:00 PM</p>
                  <p className="text-xs text-slate-600">Saturday: 9:00 AM – 3:00 PM</p>
                  <p className="text-[11px] text-slate-400">Sunday: Closed (On-call)</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-900">
                    <Phone className="w-4 h-4 text-teal-600" />
                    <span>Contact Line</span>
                  </div>
                  <p className="text-xs text-slate-900 font-semibold">{CLINIC_INFO.phone}</p>
                  <p className="text-[11px] text-slate-500">{CLINIC_INFO.email}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Neighborhood & Landmarks */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-3">
              <h3 className="text-lg font-bold text-slate-900">Nearby Landmarks</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Directly across from Metro Central Botanical Gardens</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Adjacent to Whole Foods Market & Smile Avenue Plaza</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>2 blocks North of Metro City Grand Station</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Transit & Accessibility */}
          <div className="lg:col-span-6 space-y-6">
            {/* Transit breakdown */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">How to Reach Us</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">By Car & Parking</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Enter the underground parking garage via Smile Avenue. Follow signs to <strong>Level P1 Patient Parking</strong>. Bring your ticket to the front desk for 2 hours complimentary validation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">By Subway / Metro</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Take the Blue or Silver Line to <strong>Central Plaza Station</strong>. Exit towards West Concourse; the Medical Arts Tower is a 3-minute level walk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                    <Accessibility className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Wheelchair & Step-Free Access</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      All building entrances feature zero-grade automatic sliding doors. Express elevators take you directly to Suite 200 with wide operatory doors designed for mobility equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Plan Your Visit to BrightSmile</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Schedule an appointment today and experience modern dentistry tailored to your comfort.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

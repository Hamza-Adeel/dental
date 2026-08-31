import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Accessibility, 
  Navigation, 
  ShieldCheck,
  Calendar,
  AlertCircle
} from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | BrightSmile Dental Clinic",
  description: "Get in touch with BrightSmile Dental Clinic. View our office hours, clinic location, parking directions, and send us a secure message."
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Contact BrightSmile Dental
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We are here to answer your questions, coordinate appointments, and provide prompt emergency dental assistance. Reach out by phone, email, or our secure form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details & Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Clinic Information</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Clinic Address</strong>
                    <span className="text-slate-600">{CLINIC_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Phone & Emergency Line</strong>
                    <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`} className="text-teal-700 font-bold hover:underline block">
                      Main: {CLINIC_INFO.phone}
                    </a>
                    <a href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9+]/g, '')}`} className="text-rose-600 text-xs font-semibold hover:underline block mt-0.5">
                      Emergency: {CLINIC_INFO.emergencyPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Email Inquiries</strong>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-slate-600 hover:text-teal-700">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block mb-1">Office Hours</strong>
                    <div className="space-y-0.5 text-xs text-slate-600">
                      <p>{CLINIC_INFO.hours.weekdays}</p>
                      <p>{CLINIC_INFO.hours.saturday}</p>
                      <p className="text-slate-400">{CLINIC_INFO.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Accessibility Notes */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Visitor Parking & Accessibility</h4>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Complimentary Patient Parking:</strong> Dedicated underground spots labeled "BrightSmile Patient" located in the building garage with 2 hours validated parking.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Accessibility className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>ADA Accessible:</strong> Step-free elevator access directly from parking to Suite 200, wide automatic doors, and wheelchair-accessible treatment operatories.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/location"
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Detailed Directions & Transit Guide</span>
                  <Navigation className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Locator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Clinic Map & Surroundings</h3>
              <p className="text-xs text-slate-500">{CLINIC_INFO.address}</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Stylized Interactive Map Placeholder */}
          <div className="h-80 sm:h-96 w-full rounded-2xl bg-slate-900 relative overflow-hidden flex items-center justify-center text-center p-6 border border-slate-800 shadow-inner">
            <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-25" />
            <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-md shadow-2xl space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <h4 className="font-bold text-white text-base">BrightSmile Dental Clinic</h4>
              <p className="text-xs text-slate-300">123 Smile Avenue, Suite 200, Metro City, NY</p>
              <div className="pt-2">
                <span className="text-[11px] text-teal-400 font-semibold bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                  Valet & Garage Parking Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

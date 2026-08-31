"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  CheckCircle, 
  HelpCircle, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  AlertCircle, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export default function PatientResourcesPage() {
  const [activeTab, setActiveTab] = useState<"new-patients" | "before-visit" | "aftercare" | "education">("new-patients");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (formName: string) => {
    setDownloadSuccess(`Downloading ${formName}...`);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const patientForms = [
    { name: "New Patient Registration Form", size: "184 KB (PDF)", desc: "General contact, demographics, and emergency contact details." },
    { name: "Medical & Dental History Questionnaire", size: "220 KB (PDF)", desc: "Current medications, allergies, and systemic health conditions." },
    { name: "HIPAA Notice of Privacy Practices", size: "145 KB (PDF)", desc: "Overview of how your medical and dental records are safeguarded." },
    { name: "Dental Records Release Request", size: "130 KB (PDF)", desc: "Authorize transfer of prior X-rays from your previous dental office." }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Patient Care Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Patient Resources & Care Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Everything you need for a seamless visit. Access registration forms, appointment preparation checklists, post-procedure recovery instructions, and oral health guides.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="pt-4 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: "new-patients", label: "New Patients" },
              { id: "before-visit", label: "Before Your Visit" },
              { id: "aftercare", label: "Aftercare & Recovery" },
              { id: "education", label: "Dental Education" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shrink-0 ${
                  activeTab === tab.id
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                    : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* TAB 1: New Patients */}
        {activeTab === "new-patients" && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">First Visit</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">What to Expect at Your First Appointment</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your initial comprehensive visit is designed to be thorough, unhurried, and comfortable. Plan for approximately 60 minutes so we can review your full medical history, capture low-dose digital imaging, and create your personalized care plan.
                </p>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">1. Warm Greeting & Digital Registration</h4>
                    <p className="text-xs text-slate-600">Enjoy refreshments in our reception lounge while our concierge verifies your insurance benefits.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">2. 3D Digital Scans & Diagnostic Imaging</h4>
                    <p className="text-xs text-slate-600">Ultra-low radiation digital X-rays and intraoral photographs displayed directly on your chairside monitor.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">3. Periodontal Assessment & Gentle Cleaning</h4>
                    <p className="text-xs text-slate-600">Gentle ultrasonic cleaning and gum health measurement by our registered dental hygienist.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">4. One-on-One Doctor Consultation</h4>
                    <p className="text-xs text-slate-600">Your dentist reviews your scans, discusses your smile goals, and answers every question without rush.</p>
                  </div>
                </div>
              </div>

              {/* What to bring checklist */}
              <div className="space-y-6">
                <div className="bg-teal-50/80 border border-teal-200 rounded-3xl p-6 sm:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-teal-950">What to Bring With You</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-teal-900">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Government-Issued Photo ID</strong> (Driver's License or Passport)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Dental Insurance Card</strong> (or policy subscriber details)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Current Medication List</strong> (including doses and prescription supplements)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Prior Dental X-Rays</strong> (if taken within the last 12 months)</span>
                    </li>
                  </ul>
                </div>

                {/* Patient Forms UI */}
                <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">Downloadable Patient Forms</h3>
                    <span className="text-xs text-slate-400">Print & complete at home</span>
                  </div>

                  {downloadSuccess && (
                    <div className="p-3 bg-teal-50 border border-teal-200 text-teal-800 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span>{downloadSuccess}</span>
                    </div>
                  )}

                  <div className="space-y-2.5">
                    {patientForms.map((form, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-teal-600 shrink-0" />
                          <div>
                            <div className="text-xs font-bold text-slate-900">{form.name}</div>
                            <div className="text-[11px] text-slate-400">{form.size} • {form.desc}</div>
                          </div>
                        </div>
                        <button
                          onClick={() => handleDownload(form.name)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800 p-2 rounded-lg hover:bg-teal-50"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Before Your Visit */}
        {activeTab === "before-visit" && (
          <div className="space-y-8 animate-fade-in max-w-4xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Preparation</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Before Your Appointment</h2>
              <p className="text-slate-600 text-sm mt-1">Simple steps to make your upcoming dental appointment as smooth and comfortable as possible.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center">1</span>
                  <span>Medical History & Medications</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Please disclose all current medications, including blood thinners, bisphosphonates, diabetes treatments, and heart medications, as these influence treatment planning.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center">2</span>
                  <span>Arrival & Punctuality</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Please arrive 10 to 15 minutes before your scheduled appointment time to complete any digital check-in formalities and settle into our reception lounge.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center">3</span>
                  <span>Sedation & Surgery Fasting</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If undergoing IV twilight sedation for wisdom teeth or implant surgery, avoid solid food and liquids for 6 hours prior, and ensure a designated driver accompanies you.
                </p>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center">4</span>
                  <span>Dental Anxiety Support</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Feel free to bring your favorite music playlist. We provide noise-cancelling Bose headphones, streaming tv, memory foam neck pillows, and gentle nitrous oxide comfort.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Aftercare & Recovery */}
        {activeTab === "aftercare" && (
          <div className="space-y-8 animate-fade-in max-w-4xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Post-Op Care</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">General Aftercare Guidelines</h2>
              <p className="text-slate-600 text-sm mt-1">Instructions for common procedures to accelerate recovery and ensure long-lasting results.</p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">After Fillings & Crown Placements</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Avoid chewing until local numbness has completely worn off to avoid biting your cheek or tongue. Mild sensitivity to cold is normal for a few days; if your bite feels uneven or 'high', call us for a quick 2-minute adjustment.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">After Extractions & Wisdom Teeth Surgery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bite gently on the sterile gauze pack for 45 minutes. DO NOT spit forcefully, smoke, or use drinking straws for 48 hours to preserve the healing blood clot and prevent painful dry socket. Stick to cool, soft foods.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">After Professional Teeth Whitening</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Maintain a 'white diet' for 48 hours (avoid coffee, red wine, soy sauce, berries, and tomato sauces) while microscopic enamel pores close. Use the provided desensitizing gel if mild sensitivity arises.
                </p>
              </div>

              {/* When to call clinic alert */}
              <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl space-y-2 text-rose-950">
                <div className="flex items-center gap-2 font-bold text-sm text-rose-800">
                  <AlertCircle className="w-5 h-5 text-rose-600" />
                  <span>When to Contact the Clinic Immediately</span>
                </div>
                <p className="text-xs text-rose-900 leading-relaxed">
                  Call our emergency line if you experience severe persistent bleeding after 4 hours, sudden swelling spreading towards the neck or eye, or high fever above 101°F.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Dental Education */}
        {activeTab === "education" && (
          <div className="space-y-8 animate-fade-in max-w-4xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Oral Hygiene Guidance</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Dental Education Guides</h2>
              <p className="text-slate-600 text-sm mt-1">Evidence-based hygiene habits to preserve your natural smile between dental visits.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Brushing Correctly (The 2x2 Rule)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Brush twice daily for two full minutes using a soft-bristled toothbrush angled at 45 degrees towards the gumline. Avoid aggressive sawing motions that cause enamel abrasion.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Flossing & Interdental Cleaning</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Toothbrushing misses 35% of tooth surface area between tight teeth. Floss daily in a gentle 'C-shape' hugging each tooth, or utilize a water flosser around dental implants and braces.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Managing Tooth Sensitivity</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Sensitivity often stems from exposed root dentin or micro-cracks. Use potassium nitrate desensitizing toothpaste, avoid acidic drinks, and wear a nightguard if grinding teeth.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Protecting Children's Enamel</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Apply a rice-grain sized smear of fluoride toothpaste for toddlers, and a pea-sized amount for children aged 3+. Professional dental sealants protect deep molar grooves by up to 80%.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Have Questions About Your Upcoming Visit?</h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Our friendly patient concierge team is available to assist you with paperwork, insurance pre-authorization, or scheduling.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm px-6 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Contact Front Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

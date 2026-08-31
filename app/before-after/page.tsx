"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Filter } from "lucide-react";
import { BEFORE_AFTER_CASES, BeforeAfterCase } from "@/data/dental-data";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function BeforeAfterPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Smile Makeover",
    "Dental Implants",
    "Teeth Whitening",
    "Orthodontics"
  ];

  const filteredCases = BEFORE_AFTER_CASES.filter((c) => {
    return selectedCategory === "All" || c.category === selectedCategory;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Smile Transformations
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Before & After Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the transformative power of modern cosmetic, restorative, and orthodontic dentistry. Interact with the split slider to compare starting conditions and final smiles.
            </p>
          </div>

          {/* Category Filter */}
          <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 ${
                    isSelected
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredCases.map((caseItem) => (
            <BeforeAfterSlider key={caseItem.id} caseData={caseItem} />
          ))}
        </div>

        {/* Clinical Disclaimer */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center max-w-3xl mx-auto text-xs text-slate-500 leading-relaxed space-y-1">
          <ShieldCheck className="w-5 h-5 text-teal-600 mx-auto mb-1" />
          <p className="font-semibold text-slate-700">Clinical Disclaimer</p>
          <p>
            Individual results may vary. Treatment suitability is determined following a comprehensive clinical examination, 3D imaging, and periodontal assessment by our licensed dental team.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready for Your Own Smile Makeover?</h2>
            <p className="text-teal-100 text-sm">
              Schedule a Digital Smile Design consultation to preview your customized smile transformation before starting.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-white text-teal-900 hover:bg-teal-50 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4 text-teal-700" />
            <span>Book Smile Design Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

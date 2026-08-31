"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle2, Calendar, MessageSquare, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA, CLINIC_INFO } from "@/data/dental-data";
import ReviewCard from "@/components/ReviewCard";

export default function ReviewsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = [
    "All",
    "Dental Implant",
    "Cosmetic",
    "Invisalign",
    "Emergency",
    "Pediatric",
    "Preventive"
  ];

  const filteredReviews = TESTIMONIALS_DATA.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.treatment.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Patient Feedback
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Thousands of Patients
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Read genuine stories from patients who have experienced our gentle approach, transparent communication, and life-changing smile restorations.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                4.9
              </div>
              <div>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-1">
                  Average Rating from 1,200+ Verified Patients
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-teal-800 bg-teal-50 px-3.5 py-2 rounded-xl border border-teal-100 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Independent Review Verification</span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {filterOptions.map((f) => {
              const isSelected = selectedFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 ${
                    isSelected
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {f} Treatments
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((test) => (
            <ReviewCard key={test.id} testimonial={test} />
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience the BrightSmile Difference</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Join thousands of happy patients who trust BrightSmile for their oral health.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your First Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

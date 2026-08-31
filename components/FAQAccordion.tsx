"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";
import { FAQItem, FAQS_DATA } from "@/data/dental-data";

interface FAQAccordionProps {
  initialCategory?: string;
  showSearch?: boolean;
  limit?: number;
}

export default function FAQAccordion({
  initialCategory = "All",
  showSearch = true,
  limit
}: FAQAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "General",
    "Appointments",
    "Treatments",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontics",
    "Pediatric Dentistry",
    "Emergency Care",
    "Payments & Insurance"
  ];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Filters */}
      {showSearch && (
        <div className="space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search dental questions (e.g., insurance, whitening, pain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-start sm:justify-center no-scrollbar">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all shrink-0 ${
                    isSelected
                      ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-3">
        {displayedFaqs.length > 0 ? (
          displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-teal-500 shadow-md ring-1 ring-teal-500/20" : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 font-bold text-xs flex items-center justify-center shrink-0 border border-teal-100">
                      Q
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 animate-fade-in">
                    <div className="text-slate-600 text-sm leading-relaxed pl-10">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-200 p-8">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">No matching questions found</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Can’t find what you’re looking for? Our friendly clinical team is here to answer any questions directly.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-teal-700 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact Our Clinic</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

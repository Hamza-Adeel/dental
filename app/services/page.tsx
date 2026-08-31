"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  AlertCircle,
  Heart,
  Stethoscope,
  Activity,
  Smile,
  Crown,
  Sun
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "@/data/dental-data";
import ServiceCard from "@/components/ServiceCard";
import EmergencyCallout from "@/components/EmergencyCallout";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Preventive",
    "Cosmetic",
    "Restorative",
    "Orthodontics",
    "Pediatric",
    "Emergency",
    "Surgical"
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Clinical Offerings
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Complete Dental Care Under One Roof
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              From preventive cleanings and pediatric care to complex implant surgery and bespoke cosmetic smile makeovers, explore our 12 comprehensive clinical services.
            </p>
          </div>

          {/* Search and Category Filter Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search treatments (e.g. implants, whitening, braces)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shrink-0 ${
                      isSelected
                        ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-200 p-8">
            <Stethoscope className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching services found</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              We couldn't find any treatment matching "{searchQuery}". Clear your search or contact our front desk for custom assistance.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-2 bg-teal-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-teal-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Emergency Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <EmergencyCallout />
      </div>

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <div className="max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Not Sure Which Treatment You Need?</h2>
            <p className="text-slate-400 text-sm">
              Schedule a comprehensive examination and 3D digital scan with our dental team. We will assess your oral health and design a personalized plan.
            </p>
          </div>
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Initial Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

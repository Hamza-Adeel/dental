"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Image as ImageIcon, ZoomIn, Calendar } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/dental-data";
import Lightbox from "@/components/Lightbox";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const categories = ["All", "Clinic", "Treatment Rooms", "Technology", "Team", "Smiles"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Visual Tour
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Clinic & Smile Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Take an interactive photographic tour of our modern reception lounge, sterile treatment suites, advanced 3D scanning tech, and radiant patient smiles.
            </p>
          </div>

          {/* Category Filters */}
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

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 bg-white/90 text-slate-900 p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ZoomIn className="w-4 h-4 text-teal-600" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded-md border border-teal-800/40">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0))}
      />

      {/* Booking CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Experience Our Clinic in Person</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Book a tour or your initial consultation and enjoy modern, serene dental care.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

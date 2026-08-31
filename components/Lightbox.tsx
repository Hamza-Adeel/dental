"use client";

import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/dental-data";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors border border-slate-700 focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        aria-label="Previous Image"
        className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors border border-slate-700 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next Image"
        className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors border border-slate-700 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content */}
      <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        <div className="text-center text-white space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-teal-400">
            {currentItem.category} • {currentIndex + 1} of {items.length}
          </span>
          <h3 className="text-xl font-bold text-white">{currentItem.title}</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">{currentItem.description}</p>
        </div>
      </div>
    </div>
  );
}

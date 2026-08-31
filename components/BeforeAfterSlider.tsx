"use client";

import React, { useState, useRef, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle } from "lucide-react";
import { BeforeAfterCase } from "@/data/dental-data";

interface BeforeAfterSliderProps {
  caseData: BeforeAfterCase;
}

export default function BeforeAfterSlider({ caseData }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Interactive Split Viewer */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-72 sm:h-96 w-full overflow-hidden select-none cursor-ew-resize bg-slate-900"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={caseData.afterImage}
          alt={`After ${caseData.title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-20 bg-teal-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AFTER</span>
        </div>

        {/* BEFORE Image (Clipped by slider percentage) */}
        <div
          style={{ width: `${sliderPosition}%` }}
          className="absolute inset-y-0 left-0 overflow-hidden z-10 border-r-2 border-white shadow-2xl"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}>
            <img
              src={caseData.beforeImage}
              alt={`Before ${caseData.title}`}
              className="absolute inset-0 w-full h-full object-cover filter contrast-[0.95] brightness-95"
            />
          </div>
          <div className="absolute top-4 left-4 z-20 bg-slate-900/80 text-slate-200 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md">
            BEFORE
          </div>
        </div>

        {/* Divider Handle Line & Thumb */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute inset-y-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
        >
          <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl border-2 border-teal-600 flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-teal-700" />
          </div>
        </div>

        {/* Helper Hint */}
        <div className="absolute bottom-3 inset-x-0 flex justify-center z-20 pointer-events-none">
          <span className="bg-black/60 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md">
            Drag slider left & right to compare
          </span>
        </div>
      </div>

      {/* Case Details Card */}
      <div className="p-6 sm:p-7 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            {caseData.category}
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Duration: <strong className="text-slate-800">{caseData.treatmentDuration}</strong>
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">{caseData.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">Treated by <strong className="text-slate-700">{caseData.dentistName}</strong></p>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">{caseData.description}</p>
        </div>

        {/* Treatment Highlights */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {caseData.details.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

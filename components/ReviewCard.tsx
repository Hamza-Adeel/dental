import React from "react";
import { Star, CheckCircle2, Quote } from "lucide-react";
import { Testimonial } from "@/data/dental-data";

interface ReviewCardProps {
  testimonial: Testimonial;
}

export default function ReviewCard({ testimonial }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 flex flex-col justify-between hover-lift transition-all shadow-sm">
      <div className="space-y-4">
        {/* Star Rating & Treatment Tag */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
            {testimonial.treatment}
          </span>
        </div>

        {/* Quote */}
        <p className="text-slate-700 text-sm leading-relaxed italic relative">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-teal-400 font-bold text-xs flex items-center justify-center">
            {testimonial.name[0]}
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>{testimonial.name}</span>
              {testimonial.verified && (
                <span title="Verified Patient" className="inline-flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                </span>
              )}
            </div>
            <div className="text-[10px] text-slate-400">{testimonial.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

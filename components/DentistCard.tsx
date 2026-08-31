import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Award, Star, GraduationCap } from "lucide-react";
import { Dentist } from "@/data/dental-data";

interface DentistCardProps {
  dentist: Dentist;
}

export default function DentistCard({ dentist }: DentistCardProps) {
  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden hover-lift flex flex-col justify-between transition-all">
      <div>
        {/* Photo Container */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
          <img
            src={dentist.image}
            alt={dentist.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-sm flex items-center gap-1 border border-white/50">
            <Award className="w-3 h-3 text-teal-600" />
            <span>{dentist.experienceYears}+ Years Exp</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
            {dentist.degrees}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              {dentist.name}
            </h3>
            <p className="text-xs font-semibold text-teal-700">{dentist.title}</p>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {dentist.bio}
          </p>

          <div className="pt-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Specialized In
            </span>
            <div className="flex flex-wrap gap-1.5">
              {dentist.areasOfExpertise.slice(0, 2).map((area, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4">
        <Link
          href={`/dentists/${dentist.slug}`}
          className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>View Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href={`/book-appointment?dentist=${dentist.id}`}
          className="inline-flex items-center gap-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
        >
          <Calendar className="w-3 h-3" />
          <span>Book Visit</span>
        </Link>
      </div>
    </div>
  );
}

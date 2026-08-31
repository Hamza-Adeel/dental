import React from "react";
import Link from "next/link";
import { Sparkles, Home, Calendar, Stethoscope } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-8 py-20">
      <div className="max-w-lg w-full text-center space-y-6 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
        {/* Visual Icon Badge */}
        <div className="w-20 h-20 rounded-3xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mx-auto shadow-md">
          <Stethoscope className="w-10 h-10 animate-bounce" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Looks Like This Page Needs a Checkup.
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto">
            The page you're looking for may have moved, been renamed, or no longer exists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/book-appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-colors"
          >
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

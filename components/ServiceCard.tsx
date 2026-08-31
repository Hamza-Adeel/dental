import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Stethoscope, ShieldCheck, Heart, AlertCircle, Sun, Activity, Crown, Smile, Shield, FileCheck, SmilePlus } from "lucide-react";
import { ServiceItem } from "@/data/dental-data";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const renderIcon = (name: string) => {
    switch (name) {
      case "Sparkles": return <Sparkles className="w-5 h-5 text-teal-600" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case "Heart": return <Heart className="w-5 h-5 text-teal-600" />;
      case "AlertCircle": return <AlertCircle className="w-5 h-5 text-rose-500" />;
      case "Sun": return <Sun className="w-5 h-5 text-amber-500" />;
      case "Activity": return <Activity className="w-5 h-5 text-teal-600" />;
      case "Crown": return <Crown className="w-5 h-5 text-teal-600" />;
      case "Smile": return <Smile className="w-5 h-5 text-teal-600" />;
      case "Shield": return <Shield className="w-5 h-5 text-teal-600" />;
      case "SmilePlus": return <SmilePlus className="w-5 h-5 text-teal-600" />;
      default: return <Stethoscope className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/80 p-6 flex flex-col justify-between hover-lift transition-all">
      <div className="space-y-4">
        {/* Top Icon & Tag */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            {renderIcon(service.iconName)}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {service.category}
          </span>
        </div>

        {/* Title & Short Description */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
            {service.name}
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
            {service.shortDesc}
          </p>
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 pt-2 border-t border-slate-100">
          {service.benefits.slice(0, 2).map((b, idx) => (
            <li key={idx} className="text-xs text-slate-500 flex items-start gap-2 line-clamp-1">
              <span className="text-teal-500 font-bold shrink-0">✓</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="text-xs font-bold text-teal-700 group-hover:text-teal-800 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href={`/book-appointment?service=${service.id}`}
          className="text-[11px] font-semibold text-slate-500 hover:text-slate-900 hover:underline"
        >
          Book This
        </Link>
      </div>
    </div>
  );
}

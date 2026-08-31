import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Calendar, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Star, 
  Cpu, 
  Smile, 
  Clock, 
  HeartHandshake, 
  Activity, 
  Scan, 
  Check, 
  AlertCircle,
  Microscope,
  Stethoscope
} from "lucide-react";
import { 
  CLINIC_INFO, 
  SERVICES_DATA, 
  DENTISTS_DATA, 
  BEFORE_AFTER_CASES, 
  TESTIMONIALS_DATA 
} from "@/data/dental-data";
import ServiceCard from "@/components/ServiceCard";
import DentistCard from "@/components/DentistCard";
import ReviewCard from "@/components/ReviewCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BookingWizard from "@/components/BookingWizard";
import EmergencyCallout from "@/components/EmergencyCallout";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-50/80 via-cyan-50/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Messaging & CTAs */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-xs">
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Welcome to BrightSmile Dental Clinic
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your Smile Deserves <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-600">Exceptional Care.</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Comprehensive, gentle dentistry delivered by experienced specialists in a calm, modern environment. From routine cleanings to advanced dental implants and smile makeovers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-xl shadow-teal-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book an Appointment</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-sm transition-colors"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-none">Experienced</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Dental Specialists</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-none">3D Digital</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Advanced Tech</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-none">Gentle & Calm</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Patient First Care</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual & Floating Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="BrightSmile modern dental clinic treatment room"
                  className="w-full h-[460px] sm:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                {/* Overlay quote */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                    Patient-Centered Care
                  </span>
                  <p className="text-sm sm:text-base font-semibold mt-1">
                    “The gentlest dental experience I’ve ever had. Truly state-of-the-art.”
                  </p>
                </div>
              </div>

              {/* Desktop Floating Quick-Contact / Appointment Card */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-4 shadow-xl z-20 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Ready to visit?</span>
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-sm font-bold text-slate-900 hover:text-teal-600 transition-colors"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 text-teal-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> New Patients Welcome
                  </span>
                  <Link href="/book-appointment" className="font-semibold text-slate-800 hover:text-teal-600">
                    Book Online &rarr;
                  </Link>
                </div>
              </div>

              {/* Floating Rating Badge */}
              <div className="absolute -top-4 -right-4 bg-white border border-slate-200 rounded-2xl p-3.5 shadow-lg flex items-center gap-2.5 z-20">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">4.9 / 5.0 Rating</div>
                  <div className="text-[10px] text-slate-500">1,200+ Verified Patient Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CLINIC STATISTICS SECTION */}
      <section className="bg-slate-900 text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-400 tracking-tight">
                {CLINIC_INFO.stats.yearsOfExcellence}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2 uppercase tracking-wider">
                Years of Dental Excellence
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-400 tracking-tight">
                {CLINIC_INFO.stats.happyPatients}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2 uppercase tracking-wider">
                Happy Patients Treated
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-400 tracking-tight">
                {CLINIC_INFO.stats.specialistsCount}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2 uppercase tracking-wider">
                Specialist Dentists & Staff
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-teal-400 tracking-tight">
                {CLINIC_INFO.stats.patientRating}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-2 uppercase tracking-wider">
                Average Patient Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPLETE SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Comprehensive Dental Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From preventive hygiene to advanced cosmetic smile designs and restorative surgery, our multidisciplinary team is here to support you at every stage.
          </p>
        </div>

        {/* Services Grid (All 12 Treatments) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md"
          >
            <span>View Full Service Catalog & Procedures</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. FEATURED PREMIUM SERVICES (Implants, Invisalign, Smile Makeovers) */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Specialized Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Specialized Treatments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Discover how our state-of-the-art cosmetic and reconstructive treatments transform smiles with precision and long-term durability.
            </p>
          </div>

          {/* Treatment 1: Dental Implants */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                Permanent Tooth Replacement
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Dental Implants & Full-Arch Restorations
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Restore full chewing power and natural smile aesthetics with titanium dental implants that fuse directly into your jawbone, halting bone loss and preserving youthful facial structure.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>3D computer-guided surgical placement for millimeter accuracy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Up to 98% clinical success rate with natural ceramic crowns</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Permanent solution: never slips or requires messy adhesives</span>
                </li>
              </ul>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/dental-implants"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Explore Dental Implants</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book-appointment?service=dental-implants"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700"
                >
                  Book Implant Consult &rarr;
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                alt="Dental implant treatment consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Treatment 2: Invisalign Clear Aligners */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Clear aligners orthodontic treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md">
                Discreet Orthodontics
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Invisalign & Clear Aligner Therapy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Straighten crowded teeth, close unwanted gaps, and optimize your bite without metal brackets or wires. Removable trays allow you to eat whatever you like and maintain effortless oral hygiene.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Virtually invisible design made from patented SmartTrack material</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>3D digital preview of your final smile before starting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Treatment tailored for busy teens and professionals</span>
                </li>
              </ul>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/orthodontics"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Explore Clear Aligners</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/book-appointment?service=orthodontics"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700"
                >
                  Request 3D Smile Scan &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Treatment 3: Cosmetic Smile Makeovers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
                Aesthetic Artistry
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Cosmetic Porcelain Veneers & Makeovers
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hand-layered porcelain veneers designed to correct stubborn discoloration, uneven tooth proportions, chips, and worn enamel for a dazzling, natural-looking smile.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Custom shade matching tailored to your facial aesthetics</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Stain-resistant lithium disilicate porcelain with natural translucency</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Completed in as few as 2 comfortable appointments</span>
                </li>
              </ul>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services/cosmetic-dentistry"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  <span>Explore Smile Makeovers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/before-after"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-teal-700"
                >
                  View Smile Results &rarr;
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
                alt="Cosmetic smile makeover and veneers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (Split Screen Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Visual with Doctor & Patient */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                alt="BrightSmile dentist consulting with patient"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-800 hidden sm:block">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-teal-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Hospital-Grade Safety</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Strict CDC & OSHA sterilization protocols in every operatory.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Why Choose BrightSmile */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
              The BrightSmile Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Dentistry Designed Around You
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We have reimagined the dental experience from the ground up to be unhurried, transparent, and completely comfortable for patients of all ages.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Experienced Specialists</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Board-certified leaders across cosmetic, implant, and pediatric care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Modern Digital Technology</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">3D scans, low-dose digital X-rays, and optical intraoral cameras.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Stress-Free Comfort</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Memory-foam chairs, noise-cancelling headphones, and warm towels.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Transparent Pricing</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">No surprise bills. Detailed treatment estimates and financing options.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
              >
                <span>Read More About Our Practice & Values</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DENTAL TECHNOLOGY SECTION */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
              Modern Technology. Better Dental Care.
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Advanced Clinical Diagnostics & Comfort
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              By investing in premier digital imaging and precision instruments, we offer faster appointments, less radiation, and predictable aesthetic outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <Scan className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">3D Cone Beam CT</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Millimeter-precise 3-dimensional bone and nerve mapping for computer-guided implant placement.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Digital Optical Scanners</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Say goodbye to gooey impression trays. High-speed optical wands capture full arches in seconds.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Operating Microscopes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                25x surgical magnification enabling micro-endodontics that preserve natural teeth with maximum precision.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Hospital Autoclaves</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-stage autoclave sterilization monitored with digital biologic indicators after every single patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Real Smile Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smile Transformations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Interact with our split-screen slider to see real transformations achieved through cosmetic veneers, whitening, and dental implants.
          </p>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="max-w-3xl mx-auto">
          <BeforeAfterSlider caseData={BEFORE_AFTER_CASES[0]} />
        </div>

        <div className="text-center space-y-2">
          <p className="text-xs text-slate-400 italic">
            * Individual results may vary. Treatment suitability is determined following a comprehensive clinical examination.
          </p>
          <div>
            <Link
              href="/before-after"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 underline"
            >
              <span>View All Before & After Smile Cases</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MEET OUR DENTISTS */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
                Clinical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet Our Dental Team
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Our specialists bring decades of combined clinical training from leading institutions, united by a dedication to compassionate, gentle care.
              </p>
            </div>
            <Link
              href="/dentists"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shrink-0"
            >
              <span>View All 5 Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DENTISTS_DATA.slice(0, 3).map((dentist) => (
              <DentistCard key={dentist.id} dentist={dentist} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. PATIENT REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Thousands of Patients
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 text-sm font-semibold text-slate-700">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span><strong>4.9 / 5.0</strong> from over 1,200+ patient reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.slice(0, 3).map((test) => (
            <ReviewCard key={test.id} testimonial={test} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 underline"
          >
            <span>Read All Verified Patient Reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 10. APPOINTMENT BOOKING SECTION (Interactive Multi-step Wizard) */}
      <section id="book-section" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Online Scheduling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to Take the Next Step?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Request an appointment in less than 2 minutes. Our patient concierge will contact you promptly to finalize your preferred time.
          </p>
        </div>

        <BookingWizard />
      </section>

      {/* 11. EMERGENCY DENTAL TRIAGE CALLOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <EmergencyCallout />
      </div>

      {/* 12. FINAL HOMEPAGE CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-teal-800 via-teal-700 to-cyan-800 rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl relative overflow-hidden space-y-6">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Your Healthiest Smile Starts Here.
            </h2>
            <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
              Whether you’re due for a routine checkup or considering a complete smile transformation, our team is ready to welcome you to the BrightSmile family.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-teal-900 hover:bg-teal-50 font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-5 h-5 text-teal-700" />
              <span>Book an Appointment</span>
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-950/40 hover:bg-teal-950/60 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl border border-teal-400/30 transition-colors"
            >
              <Phone className="w-5 h-5 text-teal-300" />
              <span>Call Our Clinic: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

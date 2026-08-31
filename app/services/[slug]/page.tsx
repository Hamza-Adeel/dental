import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Check, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  HelpCircle,
  Stethoscope,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { SERVICES_DATA, DENTISTS_DATA, CLINIC_INFO } from "@/data/dental-data";
import BookingWizard from "@/components/BookingWizard";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.name} | BrightSmile Dental Clinic`,
    description: service.shortDesc,
  };
}

export default async function IndividualServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related services (same or different category)
  const relatedServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);
  const recommendedDentist = DENTISTS_DATA[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Breadcrumbs & Hero */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-teal-600 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
                {service.category} Dentistry
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {service.fullDesc}
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href={`/book-appointment?service=${service.id}`}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {service.name}</span>
                </Link>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-5 py-3.5 rounded-xl border border-slate-200 shadow-xs transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-teal-600" />
                  <span>Questions? Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-72 sm:h-96">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Key Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Key Benefits */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Key Clinical Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Candidacy & Symptoms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>Who This Treatment is For</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.whoItsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>Signs You May Need Care</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.symptomsReasons.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step Procedure Process */}
            <div className="space-y-6 pt-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">What to Expect</span>
                <h2 className="text-2xl font-bold text-slate-900 mt-1">Step-by-Step Treatment Process</h2>
              </div>

              <div className="space-y-4">
                {service.procedureSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-teal-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery & Aftercare */}
            <div className="bg-teal-50/70 border border-teal-100 rounded-2xl p-6 space-y-2">
              <h3 className="font-bold text-teal-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <span>Recovery & Aftercare Guidelines</span>
              </h3>
              <p className="text-xs sm:text-sm text-teal-950/80 leading-relaxed">
                {service.recovery}
              </p>
            </div>

            {/* Service FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                      <div className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                        <span className="text-teal-600 font-bold">Q:</span>
                        <span>{faq.question}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 pl-5 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar: Recommended Doctor & Quick CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Booking Card */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-lg space-y-4 sticky top-28">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Ready to Schedule?</h4>
                  <p className="text-xs text-slate-500">Book your {service.name} visit</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1.5">
                <div className="flex justify-between">
                  <span>Category</span>
                  <strong className="text-slate-900">{service.category}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Consultation</span>
                  <strong className="text-teal-700">Digital Exam & Scan</strong>
                </div>
                <div className="flex justify-between">
                  <span>Insurance</span>
                  <strong className="text-slate-900">PPO Plans Accepted</strong>
                </div>
              </div>

              <Link
                href={`/book-appointment?service=${service.id}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all"
              >
                <span>Request Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={recommendedDentist.image}
                  alt={recommendedDentist.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold block">Lead Specialist</span>
                  <Link href={`/dentists/${recommendedDentist.slug}`} className="text-xs font-bold text-slate-900 hover:text-teal-600">
                    {recommendedDentist.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 space-y-4">
              <h4 className="font-bold text-slate-900 text-sm">Related Treatments</h4>
              <div className="space-y-2">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/services/${rel.slug}`}
                    className="block p-3 rounded-xl bg-white border border-slate-200 hover:border-teal-400 transition-colors group"
                  >
                    <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">{rel.name}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{rel.shortDesc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

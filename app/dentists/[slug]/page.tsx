import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Languages, 
  Clock, 
  ChevronRight,
  ArrowRight,
  Heart
} from "lucide-react";
import { DENTISTS_DATA, CLINIC_INFO } from "@/data/dental-data";

interface DentistPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DENTISTS_DATA.map((dentist) => ({
    slug: dentist.slug,
  }));
}

export async function generateMetadata({ params }: DentistPageProps) {
  const { slug } = await params;
  const dentist = DENTISTS_DATA.find((d) => d.slug === slug);
  if (!dentist) return { title: "Dentist Not Found" };

  return {
    title: `${dentist.name} (${dentist.degrees}) | BrightSmile Dental Clinic`,
    description: `${dentist.title} - ${dentist.bio.slice(0, 150)}...`,
  };
}

export default async function DentistProfilePage({ params }: DentistPageProps) {
  const { slug } = await params;
  const dentist = DENTISTS_DATA.find((d) => d.slug === slug);

  if (!dentist) {
    notFound();
  }

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header & Bio Hero */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/dentists" className="hover:text-teal-600 transition-colors">Our Dentists</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900 font-semibold">{dentist.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-80 sm:h-96 relative">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-md">
                  {dentist.experienceYears}+ Years Clinical Practice
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3 py-1 rounded-full border border-teal-100 shadow-xs">
                  {dentist.specialty}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                  {dentist.name}, <span className="text-teal-700 font-semibold">{dentist.degrees}</span>
                </h1>
                <p className="text-base font-semibold text-slate-700 mt-1">{dentist.title}</p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {dentist.bio}
              </p>

              {/* Philosophy Quote */}
              <div className="p-4 sm:p-5 bg-teal-50/70 border border-teal-200 rounded-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-1">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Patient Philosophy</span>
                </div>
                <p className="text-slate-800 text-sm italic">
                  "{dentist.philosophy}"
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href={`/book-appointment?dentist=${dentist.id}`}
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with {dentist.name.split(" ")[1]}</span>
                </Link>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>Available: <strong>{dentist.availableDays.join(", ")}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials, Education, Memberships Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Education & Residency */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Education & Training</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {dentist.education.map((edu, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{edu}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Fellowships */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              {dentist.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Memberships & Languages */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Associations & Languages</h3>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">Memberships</span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {dentist.memberships.map((mem, idx) => (
                    <li key={idx}>✓ {mem}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <Languages className="w-4 h-4 text-teal-600" />
                <span>Languages: <strong>{dentist.languages.join(", ")}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Clinical Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Clinical Focus</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Areas of Specialized Expertise</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dentist.areasOfExpertise.map((exp, idx) => (
              <div key={idx} className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

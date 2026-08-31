import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Heart, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Stethoscope, 
  Calendar, 
  ArrowRight,
  Eye,
  Lock,
  Zap
} from "lucide-react";
import { CLINIC_INFO, DENTISTS_DATA } from "@/data/dental-data";
import DentistCard from "@/components/DentistCard";

export const metadata = {
  title: "About Us | BrightSmile Dental Clinic",
  description: "Learn about the mission, values, clinical team, and advanced hospital-grade sterilization standards of BrightSmile Dental Clinic."
};

export default function AboutPage() {
  const clinicValues = [
    {
      title: "Patient First",
      desc: "Every recommendation is guided strictly by your unique oral health goals, comfort, and best interests.",
      icon: Heart
    },
    {
      title: "Integrity & Transparency",
      desc: "Honest diagnoses, clear explanations with digital imaging, and upfront fee transparency with zero hidden costs.",
      icon: Eye
    },
    {
      title: "Clinical Excellence",
      desc: "Continuous post-graduate training, board-certified specialists, and master ceramists using top-tier dental materials.",
      icon: Award
    },
    {
      title: "Compassion & Empathy",
      desc: "We understand dental anxiety and provide gentle, unhurried, listening-first care to put you completely at ease.",
      icon: Sparkles
    },
    {
      title: "Cutting-Edge Innovation",
      desc: "Investing in 3D CBCT imaging, optical digital scanners, and painless laser therapies for superior outcomes.",
      icon: Zap
    },
    {
      title: "Strict Safety & Hygiene",
      desc: "Adherence to hospital-grade CDC and OSHA sterilization standards to protect our patients and clinical staff.",
      icon: ShieldCheck
    }
  ];

  const clinicSpaces = [
    {
      name: "Reception & Wellness Lounge",
      desc: "A boutique-hotel inspired lounge with organic tea, chilled water, and a calming atmosphere that replaces typical waiting room stress.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Private Operatories & Suites",
      desc: "Ergonomic memory-foam dental chairs, ceiling-mounted streaming displays with wireless noise-cancelling headphones, and HEPA air filtration.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "3D Imaging & Diagnostics Lab",
      desc: "In-house low-radiation 3D cone beam CT scanning and digital shade matching stations for instant diagnostic precision.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Hospital Sterilization Suite",
      desc: "A dedicated glass-enclosed sterilization hub with autoclave heat chambers and computerized biological monitoring.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* Hero / Overview */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              About BrightSmile
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              A Modern Dental Experience Built on Trust & Gentle Care.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded with a commitment to humanize healthcare, BrightSmile Dental Clinic brings together world-class clinical specialists, leading-edge technology, and genuine warmth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
              Our Story
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Redefining What a Dental Visit Feels Like
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                BrightSmile Dental Clinic was founded over 15 years ago with a simple yet ambitious vision: to create a dental practice where patients never feel rushed, intimidated, or judged.
              </p>
              <p>
                We recognized that millions of people avoid dental care due to past negative experiences or clinical coldness. By designing a tranquil environment, embracing digital advancements like 3D scanning, and fostering an empathetic clinical team, we transformed dental visits into a restorative, empowering health experience.
              </p>
            </div>

            {/* Mission Callout Box */}
            <div className="p-6 bg-teal-50/70 border border-teal-200 rounded-2xl space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800">Our Mission</h3>
              <p className="text-slate-800 font-semibold text-base italic">
                “To provide compassionate, evidence-based dental care that helps every patient achieve a healthy, confident smile for life.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-64">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                  alt="Doctor consulting with smiling patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md h-52 sm:h-64 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                  alt="Modern clean dental suite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950 px-3.5 py-1.5 rounded-full border border-teal-800">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Values That Guide Every Appointment
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              These six pillars shape our patient relationships, clinical protocols, and daily care standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Clinic & Facilities Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Our Facility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Designed for Comfort, Cleanliness & Precision
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Take a look inside our clinic spaces, engineered with medical-grade ventilation, soothing acoustics, and pristine treatment suites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clinicSpaces.map((space, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-md group">
              <div className="h-60 sm:h-72 w-full overflow-hidden bg-slate-100">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold text-slate-900">{space.name}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{space.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hygiene & Hospital Sterilization Protocols */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-teal-800/60 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Sterilization & Safety Standards</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Uncompromising Patient Safety Protocols
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Your health and safety are paramount. BrightSmile exceeds standard dental guidelines by utilizing pressurized multi-stage autoclave cycles, continuous biological sensor testing, medical-grade water purification lines, and hospital-grade air scrubbers in every operatory.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Visit</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
              Specialist Doctors
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Meet Our Dental Specialists
            </h2>
          </div>
          <Link
            href="/dentists"
            className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
          >
            <span>View All Profiles & Credentials</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DENTISTS_DATA.slice(0, 3).map((dentist) => (
            <DentistCard key={dentist.id} dentist={dentist} />
          ))}
        </div>
      </section>
    </div>
  );
}

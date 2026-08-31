"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Clock, 
  AlertCircle, 
  Menu, 
  X, 
  Calendar, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Smile,
  HeartPulse
} from "lucide-react";
import { CLINIC_INFO, SERVICES_DATA } from "@/data/dental-data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "/services",
      hasDropdown: true 
    },
    { name: "Our Dentists", href: "/dentists" },
    { name: "Before & After", href: "/before-after" },
    { name: "Patient Resources", href: "/patient-resources" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-300">
      {/* Top Information Ribbon */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center flex-wrap gap-x-6 gap-y-1">
            <a 
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-teal-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Call us: <strong className="text-white">{CLINIC_INFO.phone}</strong></span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{CLINIC_INFO.hours.weekdays}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/emergency-dentistry" 
              className="inline-flex items-center gap-1.5 bg-rose-500/15 text-rose-300 border border-rose-500/30 px-2.5 py-0.5 rounded-full hover:bg-rose-500/25 transition-colors font-medium text-[11px]"
            >
              <AlertCircle className="w-3 h-3 text-rose-400 animate-pulse" />
              <span>Emergency Dental Care Available</span>
            </Link>
            <Link 
              href="/location" 
              className="hidden lg:inline-block text-slate-400 hover:text-slate-200 transition-colors"
            >
              Find Clinic
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-200 ${isScrolled ? 'glass-nav bg-white/95 shadow-md py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-tight">
                Bright<span className="text-teal-600">Smile</span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase block">
                Dental Clinic
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive 
                          ? 'text-teal-700 bg-teal-50/80 font-semibold' 
                          : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-teal-600 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Services Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 w-80 bg-white border border-slate-100 rounded-2xl shadow-2xl p-3 transition-all duration-200 ${
                        servicesDropdownOpen ? 'opacity-100 visible translate-y-1' : 'opacity-0 invisible translate-y-2'
                      }`}
                    >
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                        Clinical Treatments
                      </div>
                      <div className="grid grid-cols-1 gap-1 max-h-[380px] overflow-y-auto pr-1">
                        {SERVICES_DATA.slice(0, 8).map((srv) => (
                          <Link
                            key={srv.id}
                            href={`/services/${srv.slug}`}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-teal-50/70 transition-colors group/item"
                          >
                            <div>
                              <div className="text-xs font-semibold text-slate-900 group-hover/item:text-teal-700">
                                {srv.name}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {srv.shortDesc}
                              </div>
                            </div>
                            {srv.popular && (
                              <span className="text-[10px] font-medium bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded-md">
                                Popular
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex justify-between items-center text-xs">
                        <Link 
                          href="/services" 
                          className="font-semibold text-teal-600 hover:text-teal-700"
                        >
                          View All 12 Services &rarr;
                        </Link>
                        <Link 
                          href="/emergency-dentistry" 
                          className="font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" /> Urgent Care
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'text-teal-700 bg-teal-50/80 font-semibold' 
                      : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <Link
              href="/book-appointment"
              className="hidden sm:inline-flex items-center gap-1.5 bg-teal-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-teal-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[100px] bottom-0 bg-white/95 backdrop-blur-xl z-40 overflow-y-auto border-t border-slate-200 p-6 flex flex-col justify-between animate-fade-in shadow-2xl">
          <div className="space-y-2">
            <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase text-slate-400">Navigation Menu</span>
              <span className="text-xs font-medium text-teal-600">{CLINIC_INFO.tagline}</span>
            </div>

            <div className="grid grid-cols-1 gap-1 py-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                      isActive ? 'bg-teal-50 text-teal-800' : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <span className="text-xs text-slate-400">12 Treatments</span>}
                  </Link>
                );
              })}
              <Link
                href="/emergency-dentistry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-rose-600 bg-rose-50/60 hover:bg-rose-50 transition-colors mt-1"
              >
                <span className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Emergency Dentistry
                </span>
                <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-medium">Urgent</span>
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-lg shadow-teal-600/20 text-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book An Appointment</span>
            </Link>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-3 px-4 rounded-xl text-center text-sm"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              <span>Call Us: {CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

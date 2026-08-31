"use client";

import React, { useState } from "react";
import { User, Mail, Phone, Send, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/dental-data";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    consent: true
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim()) errs.message = "Please enter your message or question.";
    if (!formData.consent) errs.consent = "Please agree to our privacy terms.";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-100 shadow-xl text-center animate-fade-in space-y-4">
        <div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to BrightSmile Dental Clinic. One of our patient care coordinators will get back to you within 1 business day.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "", consent: true });
          }}
          className="text-xs font-semibold text-teal-700 hover:text-teal-800 underline pt-2 block mx-auto"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl space-y-5">
      <div>
        <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
        <p className="text-xs text-slate-500 mt-1">
          Have questions regarding treatments, billing, or scheduling? Fill out the form below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="e.g. Michael Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.name ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="email"
              placeholder="michael@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.email ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                errors.phone ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Inquiry Topic */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Inquiry Topic
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full py-2.5 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Appointment Booking">Appointment Scheduling</option>
            <option value="Insurance & Billing">Insurance & Billing</option>
            <option value="Cosmetic Consultation">Cosmetic Smile Consultation</option>
            <option value="Dental Implants">Dental Implants</option>
            <option value="Invisalign & Braces">Invisalign & Orthodontics</option>
            <option value="Feedback">Patient Feedback</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          How can we help you? *
        </label>
        <textarea
          rows={4}
          placeholder="Please describe your question or dental concern..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full p-3 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.message ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
          }`}
        />
        {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
      </div>

      {/* Privacy note & consent */}
      <div>
        <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="w-4 h-4 accent-teal-600 rounded mt-0.5"
          />
          <span>
            I agree to receive communications from BrightSmile Dental. See our{" "}
            <Link href="/privacy-policy" className="text-teal-600 underline">Privacy Policy</Link>.
          </span>
        </label>
        {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-sm font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-teal-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending Message...
          </span>
        ) : (
          <>
            <span>Submit Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
        <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
        <span>Your data is encrypted and never sold to advertisers.</span>
      </div>
    </form>
  );
}

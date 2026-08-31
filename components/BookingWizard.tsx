"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertCircle,
  Stethoscope,
  Info
} from "lucide-react";
import { SERVICES_DATA, DENTISTS_DATA, CLINIC_INFO } from "@/data/dental-data";

interface BookingWizardProps {
  preselectedService?: string;
  preselectedDentist?: string;
  className?: string;
}

export default function BookingWizard({ 
  preselectedService, 
  preselectedDentist,
  className = ""
}: BookingWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(preselectedService || SERVICES_DATA[0].id);
  const [selectedDentist, setSelectedDentist] = useState(preselectedDentist || "any");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientType, setPatientType] = useState<"new" | "existing">("new");
  
  // Patient details
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    agreePrivacy: true
  });

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingReference, setBookingReference] = useState("");

  const timeSlots = [
    "08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM",
    "01:30 PM", "02:30 PM", "03:30 PM", "04:30 PM", "05:30 PM"
  ];

  // Helper to validate current step before proceeding
  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!selectedService) newErrors.service = "Please choose a dental service.";
    }

    if (step === 3) {
      if (!selectedDate) newErrors.date = "Please select your preferred date.";
      if (!selectedTime) newErrors.time = "Please select your preferred appointment time.";
    }

    if (step === 4) {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required.";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
        newErrors.phone = "Please enter a valid phone number.";
      }
      if (!formData.agreePrivacy) {
        newErrors.privacy = "You must agree to the privacy and communication terms.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) {
      setCurrentStep(4);
      return;
    }

    setIsSubmitting(true);
    // Simulate server communication
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = "BS-" + Math.floor(100000 + Math.random() * 900000);
      setBookingReference(ref);
      setIsSuccess(true);
    }, 1200);
  };

  const chosenServiceObj = SERVICES_DATA.find(s => s.id === selectedService) || SERVICES_DATA[0];
  const chosenDentistObj = DENTISTS_DATA.find(d => d.id === selectedDentist);

  // Today for min date input (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split("T")[0];

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-3xl p-8 md:p-12 border border-teal-100 shadow-xl max-w-3xl mx-auto text-center animate-fade-in ${className}`}>
        <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 border border-teal-200 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          Request Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 mb-2">
          Thank You, {formData.fullName.split(" ")[0]}!
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-6">
          Your appointment request has been received. Our patient concierge team will contact you shortly to confirm your scheduled slot.
        </p>

        {/* Appointment summary receipt */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-left max-w-lg mx-auto mb-8 space-y-3 text-sm">
          <div className="flex justify-between items-center pb-3 border-b border-slate-200">
            <span className="text-slate-500 font-medium">Request Reference</span>
            <span className="font-mono font-bold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">{bookingReference}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Service</span>
            <span className="font-semibold text-slate-900">{chosenServiceObj.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Provider</span>
            <span className="font-semibold text-slate-900">{chosenDentistObj ? chosenDentistObj.name : "First Available Specialist"}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Requested Time</span>
            <span className="font-semibold text-slate-900">{selectedDate} at {selectedTime}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500">Patient Status</span>
            <span className="capitalize font-medium text-slate-700">{patientType} Patient</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-200">
            <span className="text-slate-500">Contact Number</span>
            <span className="font-medium text-slate-900">{formData.phone}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
              setFormData({ fullName: "", email: "", phone: "", message: "", agreePrivacy: true });
            }}
            className="text-xs font-semibold text-teal-700 hover:text-teal-800 underline"
          >
            Submit Another Request
          </button>
          <Link
            href="/"
            className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl max-w-4xl mx-auto ${className}`}>
      {/* Progress Steps Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 px-1">
          <span>Step {currentStep} of 5</span>
          <span className="text-teal-600 font-bold">
            {currentStep === 1 && "Select Service"}
            {currentStep === 2 && "Choose Specialist"}
            {currentStep === 3 && "Date & Time"}
            {currentStep === 4 && "Patient Details"}
            {currentStep === 5 && "Review & Submit"}
          </span>
        </div>

        {/* Step Progress Bar */}
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step <= currentStep ? "bg-gradient-to-r from-teal-600 to-teal-500" : "bg-slate-100"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Step Contents */}
      <div className="min-h-[340px]">
        {/* STEP 1: Select Service */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">What service are you looking for?</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Select the dental treatment or general checkup you need.</p>
            </div>
            
            {errors.service && (
              <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errors.service}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[360px] overflow-y-auto pr-1">
              {SERVICES_DATA.map((srv) => {
                const isSelected = selectedService === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(srv.id);
                      setErrors({});
                    }}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? "border-teal-600 bg-teal-50/70 shadow-sm ring-2 ring-teal-500/20"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-white px-2 py-0.5 rounded-md border border-teal-100">
                        {srv.category}
                      </span>
                      {srv.popular && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-sm text-slate-900">{srv.name}</div>
                    <div className="text-xs text-slate-500 line-clamp-2 mt-1">{srv.shortDesc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: Choose Specialist */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Do you have a preferred dentist?</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Select an experienced practitioner or choose the first available opening.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Option: Any Available */}
              <button
                type="button"
                onClick={() => setSelectedDentist("any")}
                className={`text-left p-4 rounded-2xl border transition-all flex items-center gap-4 ${
                  selectedDentist === "any"
                    ? "border-teal-600 bg-teal-50/70 shadow-sm ring-2 ring-teal-500/20"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">First Available Specialist</div>
                  <div className="text-xs text-slate-500">Fastest appointment availability</div>
                </div>
              </button>

              {/* Dentist cards */}
              {DENTISTS_DATA.map((dentist) => {
                const isSelected = selectedDentist === dentist.id;
                return (
                  <button
                    key={dentist.id}
                    type="button"
                    onClick={() => setSelectedDentist(dentist.id)}
                    className={`text-left p-4 rounded-2xl border transition-all flex items-center gap-3.5 ${
                      isSelected
                        ? "border-teal-600 bg-teal-50/70 shadow-sm ring-2 ring-teal-500/20"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <img
                      src={dentist.image}
                      alt={dentist.name}
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-sm text-slate-900">{dentist.name}</div>
                      <div className="text-xs text-teal-700 font-medium">{dentist.specialty}</div>
                      <div className="text-[11px] text-slate-400">{dentist.experienceYears}+ years experience</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 3: Date & Time */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Select your preferred date & time</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">We will accommodate your timing as closely as possible.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    min={todayStr}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setErrors((prev) => ({ ...prev, date: "" }));
                    }}
                    className={`w-full p-3.5 bg-slate-50 border rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.date ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.date && <p className="text-xs text-rose-500 mt-1.5">{errors.date}</p>}

                <div className="mt-4 p-3 bg-teal-50/60 border border-teal-100 rounded-xl text-xs text-teal-800 flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 text-teal-600 mt-0.5" />
                  <span>Clinic hours: Mon-Fri 8:00 AM – 7:00 PM | Sat 9:00 AM – 3:00 PM. Closed Sundays.</span>
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setSelectedTime(slot);
                          setErrors((prev) => ({ ...prev, time: "" }));
                        }}
                        className={`p-2.5 text-xs font-semibold rounded-xl border transition-all text-center ${
                          isSelected
                            ? "border-teal-600 bg-teal-600 text-white shadow-md shadow-teal-600/20"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-400 hover:bg-white"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.time && <p className="text-xs text-rose-500 mt-1.5">{errors.time}</p>}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Patient Details */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Your Contact Details</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">We will only use this information to coordinate your appointment.</p>
            </div>

            {/* Patient Type toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPatientType("new")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-center ${
                  patientType === "new"
                    ? "border-teal-600 bg-teal-50 text-teal-800 ring-2 ring-teal-500/20"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                I am a New Patient
              </button>
              <button
                type="button"
                onClick={() => setPatientType("existing")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all text-center ${
                  patientType === "existing"
                    ? "border-teal-600 bg-teal-50 text-teal-800 ring-2 ring-teal-500/20"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                I am an Existing Patient
              </button>
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
                    placeholder="e.g. Jane Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                      errors.fullName ? "border-rose-400 bg-rose-50/30" : "border-slate-200"
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
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
                    placeholder="jane.doe@example.com"
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
              <div className="sm:col-span-2">
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

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Any specific concerns, symptoms, or requests? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Mild sensitivity on upper molar, would love to discuss whitening options..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Privacy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="w-4 h-4 accent-teal-600 rounded mt-0.5 shrink-0"
                />
                <span>
                  I understand that this form is a request. The BrightSmile team will contact me to confirm the appointment. My information is protected under our <Link href="/privacy-policy" className="text-teal-600 underline">Privacy Policy</Link>.
                </span>
              </label>
              {errors.privacy && <p className="text-xs text-rose-500 mt-1">{errors.privacy}</p>}
            </div>
          </div>
        )}

        {/* STEP 5: Review & Submit */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Review Your Appointment Request</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Please confirm the details below before submitting.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Requested Treatment</span>
                  <span className="font-bold text-slate-900 text-base">{chosenServiceObj.name}</span>
                  <span className="text-xs text-teal-700 block mt-0.5">{chosenServiceObj.category} Care</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Preferred Specialist</span>
                  <span className="font-bold text-slate-900 text-base">{chosenDentistObj ? chosenDentistObj.name : "Any Available Specialist"}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Date & Time</span>
                  <span className="font-bold text-slate-900">{selectedDate || "Not chosen"} at {selectedTime || "Not chosen"}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Patient Status</span>
                  <span className="font-bold text-slate-900 capitalize">{patientType} Patient</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Patient Name</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-400 block">Contact Info</span>
                  <span className="font-bold text-slate-900 block">{formData.phone}</span>
                  <span className="text-xs text-slate-500">{formData.email}</span>
                </div>
              </div>

              {formData.message && (
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-xs font-semibold uppercase text-slate-400 block mb-1">Notes</span>
                  <p className="text-xs text-slate-700 italic bg-white p-3 rounded-lg border border-slate-200">
                    "{formData.message}"
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 bg-teal-50/60 border border-teal-100 rounded-2xl flex items-center gap-3 text-xs text-teal-900">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <span>We adhere to strict HIPAA confidentiality. No personal information is shared with third parties.</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
        {currentStep > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 5 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-6 py-3 rounded-xl shadow-md shadow-teal-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-75"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Request...
              </span>
            ) : (
              <>
                <span>Request Appointment</span>
                <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Percent, 
  Phone, 
  Calendar, 
  HelpCircle,
  FileCheck,
  Building2,
  DollarSign
} from "lucide-react";
import { CLINIC_INFO } from "@/data/dental-data";

export const metadata = {
  title: "Insurance & Payments | BrightSmile Dental Clinic",
  description: "Learn about accepted PPO dental insurance, 0% APR financing with CareCredit, FSA/HSA cards, and affordable in-house membership plans."
};

export default function InsuranceAndPaymentsPage() {
  const financingPartners = [
    {
      name: "CareCredit",
      badge: "0% APR Available",
      desc: "Healthcare financing allowing you to break treatment costs into interest-free 6, 12, or 24-month payment plans.",
      linkText: "Apply with CareCredit"
    },
    {
      name: "Sunbit Financing",
      badge: "90% Approval Rate",
      desc: "Flexible monthly payment solutions with lightning-fast 30-second digital application and no hard credit inquiry.",
      linkText: "Check Sunbit Options"
    },
    {
      name: "Proceed Finance",
      badge: "For Full-Mouth Implants",
      desc: "Specialized long-term low-rate financing designed specifically for major dental implant and full-arch procedures.",
      linkText: "Explore Proceed Plans"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200/80 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Affordability & Financing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Insurance, Payments & Flexible Financing
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We believe exceptional dental care should be accessible, transparent, and manageable. Explore our accepted insurance, flexible payment plans, and in-house wellness options.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Coverage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md">
              Insurance Maximization
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              We Work With Most Major PPO Insurance Plans
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our front-desk billing specialists will verify your dental benefits prior to your appointment, submit all electronic claims on your behalf, and ensure you maximize your annual coverage benefits.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Complimentary Benefit Verification</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We check your co-pays, deductibles, and annual limits before your appointment starts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Hassle-Free Electronic Claims</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We file direct digital claims so you don’t have to deal with endless insurance paperwork.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Out-of-Network Assistance</h4>
                  <p className="text-xs text-slate-500 mt-0.5">If we are out-of-network, we still submit claims to help you receive your direct reimbursement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8 text-teal-400" />
                <div>
                  <h3 className="font-bold text-lg text-white">Accepted PPO Networks</h3>
                  <p className="text-xs text-slate-400">Including all major national dental insurers</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                We accept most standard PPO insurance plans. Because employer plans vary widely, our team will gladly contact your insurance provider on your behalf.
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <span className="text-xs font-semibold text-slate-400 block">Need your coverage verified?</span>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Insurance Check</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Financing Options */}
      <section className="bg-slate-50 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-white px-3.5 py-1.5 rounded-full border border-teal-100 shadow-xs">
              Flexible Payments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              0% APR Monthly Financing Options
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Don’t let financial concerns delay essential oral health care or the smile transformation you desire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {financingPartners.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover-lift transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-slate-900">{partner.name}</h3>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full">
                      {partner.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="text-xs font-bold text-teal-700 hover:text-teal-800 block text-center py-2 bg-slate-50 rounded-xl hover:bg-teal-50 transition-colors"
                  >
                    {partner.linkText} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Accepted Payment Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">Accepted Payment Methods</h3>
          <p className="text-slate-500 text-xs sm:text-sm">We accommodate a variety of seamless digital and traditional payment methods.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <CreditCard className="w-6 h-6 text-teal-600 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-slate-900">Credit / Debit</h4>
            <p className="text-[11px] text-slate-500">Visa, MC, Amex, Discover</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <ShieldCheck className="w-6 h-6 text-teal-600 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-slate-900">HSA & FSA Cards</h4>
            <p className="text-[11px] text-slate-500">Pre-tax healthcare accounts</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <DollarSign className="w-6 h-6 text-teal-600 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-slate-900">Cash & Checks</h4>
            <p className="text-[11px] text-slate-500">Traditional receipted payments</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1">
            <Percent className="w-6 h-6 text-teal-600 mx-auto mb-2" />
            <h4 className="font-bold text-sm text-slate-900">In-House Membership</h4>
            <p className="text-[11px] text-slate-500">Annual savings plan for uninsured</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-center text-xs text-slate-500 max-w-2xl mx-auto">
          <p>
            <strong>Disclaimer:</strong> Insurance coverage varies significantly by individual employer plan and policy tier. Please contact our office or your insurance carrier directly to confirm specific deductible, copay, and annual maximum benefits.
          </p>
        </div>
      </section>
    </div>
  );
}

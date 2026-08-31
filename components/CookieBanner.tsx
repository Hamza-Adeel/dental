"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X, Check, Settings2 } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    // Check if user previously made a cookie choice
    const consent = localStorage.getItem("brightsmile_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("brightsmile_cookie_consent", "all");
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem("brightsmile_cookie_consent", "essential_only");
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "brightsmile_cookie_consent",
      JSON.stringify({ essential: true, analytics: analyticsCookies, marketing: marketingCookies })
    );
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <aside 
        aria-label="Cookie consent banner" 
        className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 bg-slate-950/95 backdrop-blur-xl border border-slate-800 text-white p-5 rounded-2xl shadow-2xl animate-fade-in"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-white">Your Privacy Matters</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              We use cookies to improve your browsing experience, analyze website traffic, and ensure HIPAA-compliant secure form handling.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors text-center"
          >
            Accept All
          </button>
          <button
            onClick={handleRejectNonEssential}
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 px-3 rounded-lg transition-colors text-center"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => setShowPreferences(true)}
            className="w-full text-slate-400 hover:text-slate-200 text-[11px] font-medium py-1 transition-colors flex items-center justify-center gap-1"
          >
            <Settings2 className="w-3 h-3" />
            <span>Manage Preferences</span>
          </button>
        </div>
      </aside>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200 animate-fade-in space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Cookie Preferences</h3>
                <p className="text-xs text-slate-500">Customize what data cookies are active during your visit.</p>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/60">
                <div>
                  <div className="font-semibold text-slate-900 flex items-center gap-2">
                    <span>Strictly Essential Cookies</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded-full">Required</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Necessary for secure form requests, patient appointment routing, and website security.
                  </p>
                </div>
                <div className="text-teal-600 shrink-0 font-bold text-xs mt-1">Always Active</div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-slate-200">
                <div>
                  <div className="font-semibold text-slate-900">Analytics & Performance</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Helps us understand which dental services and educational articles are most helpful to patients.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analyticsCookies}
                  onChange={(e) => setAnalyticsCookies(e.target.checked)}
                  className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
                />
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4 p-3.5 rounded-xl border border-slate-200">
                <div>
                  <div className="font-semibold text-slate-900">Marketing & Local Awareness</div>
                  <p className="text-xs text-slate-500 mt-1">
                    Allows us to display personalized dental promotions and local health resources.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={marketingCookies}
                  onChange={(e) => setMarketingCookies(e.target.checked)}
                  className="w-5 h-5 accent-teal-600 rounded mt-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Reject All Non-Essential
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

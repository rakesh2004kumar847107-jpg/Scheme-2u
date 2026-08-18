import React, { useState } from 'react';
import { X, Calculator, Calendar, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AgeCalculatorModal: React.FC = () => {
  const { language, isAgeCalcOpen, setIsAgeCalcOpen } = useApp();
  const isHindi = language === 'hi';

  const [dob, setDob] = useState('2000-01-01');
  const [cutoffDate, setCutoffDate] = useState('2025-01-01');
  const [category, setCategory] = useState<'UR' | 'OBC' | 'SC_ST' | 'EWS' | 'PWD'>('UR');

  if (!isAgeCalcOpen) return null;

  const calculateAge = () => {
    if (!dob || !cutoffDate) return null;

    const birth = new Date(dob);
    const target = new Date(cutoffDate);

    if (birth > target) return { error: isHindi ? 'जन्म तिथि कट-ऑफ तिथि से पहले होनी चाहिए।' : 'DOB must be before cutoff date.' };

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    let relaxationYears = 0;
    if (category === 'OBC') relaxationYears = 3;
    else if (category === 'SC_ST') relaxationYears = 5;
    else if (category === 'PWD') relaxationYears = 10;

    return {
      years,
      months,
      days,
      relaxationYears,
      totalDays: Math.floor((target.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24))
    };
  };

  const result = calculateAge();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-md p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                {isHindi ? 'सरकारी नौकरी आयु कैलकुलेटर' : 'Govt Job Age Calculator'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHindi ? 'परीक्षा कट-ऑफ तिथि के अनुसार अपनी सटीक आयु जानें' : 'Accurate age calculation as per official exam cutoff dates'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAgeCalcOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {isHindi ? 'अपनी जन्म तिथि (Date of Birth):' : 'Date of Birth (DOB):'}
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {isHindi ? 'आयु गणना की कट-ऑफ तिथि (Age as on Date):' : 'Cutoff / Reference Date:'}
            </label>
            <input
              type="date"
              value={cutoffDate}
              onChange={(e) => setCutoffDate(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              {isHindi ? 'आपकी श्रेणी (Category):' : 'Reservation Category:'}
            </label>
            <select
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-slate-900 dark:text-white"
            >
              <option value="UR">General / UR (No Age Relaxation)</option>
              <option value="EWS">EWS (Standard Norms)</option>
              <option value="OBC">OBC / BC / EBC (+3 Years Relaxation)</option>
              <option value="SC_ST">SC / ST (+5 Years Relaxation)</option>
              <option value="PWD">PwD (+10 Years Relaxation)</option>
            </select>
          </div>
        </div>

        {/* Results Card */}
        {result && !('error' in result) && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <span className="text-[11px] font-extrabold uppercase text-amber-900 dark:text-amber-300 tracking-wider">
              {isHindi ? 'आपकी सटीक आयु' : 'Calculated Exact Age'}
            </span>

            <div className="grid grid-cols-3 gap-2 text-center pt-1">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 shadow-xs">
                <div className="text-xl font-black text-amber-600 dark:text-amber-400">{result.years}</div>
                <div className="text-[10px] font-bold text-slate-500">{isHindi ? 'वर्ष (Years)' : 'Years'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 shadow-xs">
                <div className="text-xl font-black text-amber-600 dark:text-amber-400">{result.months}</div>
                <div className="text-[10px] font-bold text-slate-500">{isHindi ? 'महीने (Months)' : 'Months'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-700 shadow-xs">
                <div className="text-xl font-black text-amber-600 dark:text-amber-400">{result.days}</div>
                <div className="text-[10px] font-bold text-slate-500">{isHindi ? 'दिन (Days)' : 'Days'}</div>
              </div>
            </div>

            {result.relaxationYears > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-semibold pt-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {isHindi
                    ? `${category} श्रेणी हेतु आपको अधिकतम आयु में +${result.relaxationYears} वर्ष की अतिरिक्त छूट प्राप्त है।`
                    : `Eligible for +${result.relaxationYears} Years age relaxation under ${category} category.`}
                </span>
              </div>
            )}
          </div>
        )}

        {result && 'error' in result && (
          <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{result.error}</span>
          </div>
        )}

        <div className="pt-1">
          <button
            onClick={() => setIsAgeCalcOpen(false)}
            className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors cursor-pointer"
          >
            {isHindi ? 'कैलकुलेटर बंद करें' : 'Close Calculator'}
          </button>
        </div>
      </div>
    </div>
  );
};

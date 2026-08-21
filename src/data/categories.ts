import { CategoryInfo, CategoryType } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'jobs',
    labelEn: 'Latest Jobs',
    labelHi: 'सरकारी नौकरी (Jobs)',
    icon: 'Briefcase',
    color: 'blue',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
    badgeText: 'text-blue-600 dark:text-blue-400',
    descriptionEn: 'Explore all Central, State, Banking, Defence, SSC, UPSC & Police Vacancies',
    descriptionHi: 'केंद्र एवं राज्य सरकार की सभी नई सरकारी भर्तियां और अधिसूचनाएं'
  },
  {
    id: 'admit-card',
    labelEn: 'Admit Cards',
    labelHi: 'प्रवेश पत्र (Admit Card)',
    icon: 'FileText',
    color: 'amber',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
    badgeText: 'text-amber-600 dark:text-amber-400',
    descriptionEn: 'Direct download links for Exam Hall Tickets & City Intimation Slips',
    descriptionHi: 'परीक्षा हॉल टिकट एवं परीक्षा शहर पर्ची डाउनलोड करने का सीधा लिंक'
  },
  {
    id: 'results',
    labelEn: 'Results & Merit Lists',
    labelHi: 'परीक्षा परिणाम (Results)',
    icon: 'Award',
    color: 'emerald',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    badgeText: 'text-emerald-600 dark:text-emerald-400',
    descriptionEn: 'Check Cut-off marks, Scorecards, Selection lists & Scorecards',
    descriptionHi: 'कट-ऑफ अंक, मेरिट लिस्ट और परीक्षा परिणाम तुरंत देखें'
  },
  {
    id: 'answer-key',
    labelEn: 'Answer Keys',
    labelHi: 'उत्तर कुंजी (Answer Key)',
    icon: 'CheckSquare',
    color: 'purple',
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800',
    badgeText: 'text-purple-600 dark:text-purple-400',
    descriptionEn: 'Official provisional & final answer keys with objection links',
    descriptionHi: 'विभागीय उत्तर कुंजी और आपत्ति दर्ज करने का सीधा लिंक'
  },
  {
    id: 'scholarships',
    labelEn: 'Scholarships',
    labelHi: 'छात्रवृत्ति (Scholarships)',
    icon: 'GraduationCap',
    color: 'indigo',
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800',
    badgeText: 'text-indigo-600 dark:text-indigo-400',
    descriptionEn: 'Pre/Post Matric, NSP, PM Yasasvi & State Medhashree portals',
    descriptionHi: 'प्री एवं पोस्ट मैट्रिक, राष्ट्रीय छात्रवृत्ति पोर्टल एवं मेधावृत्ति'
  },
  {
    id: 'schemes',
    labelEn: 'Govt Schemes',
    labelHi: 'सरकारी योजनाएं (Schemes)',
    icon: 'Landmark',
    color: 'teal',
    badgeBg: 'bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800',
    badgeText: 'text-teal-600 dark:text-teal-400',
    descriptionEn: 'Central & State flagship welfare schemes for citizens, youth & farmers',
    descriptionHi: 'नागरिकों, युवाओं और किसानों के लिए केंद्र और राज्य की कल्याणकारी योजनाएं'
  },
  {
    id: 'bihar',
    labelEn: 'Bihar Updates',
    labelHi: 'बिहार विशेष (Bihar Updates)',
    icon: 'Compass',
    color: 'rose',
    badgeBg: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800',
    badgeText: 'text-rose-600 dark:text-rose-400',
    descriptionEn: 'BPSC, BSSC, RTPS Bihar, Bihar Police, Udyami Yojana & Kanya Utthan',
    descriptionHi: 'बिहार सरकार की नौकरियां, उद्यमी योजना, कन्या उत्थान एवं RTPS सेवाएं'
  },
  {
    id: 'education',
    labelEn: 'Education & Admission',
    labelHi: 'शिक्षा व प्रवेश (Education)',
    icon: 'BookOpen',
    color: 'cyan',
    badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200 dark:bg-cyan-950/50 dark:text-cyan-300 dark:border-cyan-800',
    badgeText: 'text-cyan-600 dark:text-cyan-400',
    descriptionEn: 'Board Exams (10th/12th), CUET, JEE, NEET, CTET, STET & Counselling',
    descriptionHi: 'बोर्ड परीक्षा अपडेट, प्रवेश परीक्षाएं, काउंसलिंग एवं मॉडल प्रश्न पत्र'
  },
  {
    id: 'university',
    labelEn: 'University Updates',
    labelHi: 'विश्वविद्यालय अपडेट (Universities)',
    icon: 'School',
    color: 'violet',
    badgeBg: 'bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800',
    badgeText: 'text-violet-600 dark:text-violet-400',
    descriptionEn: 'Patna Univ, LNMU, BRABU, Magadh, VKSU, AKU & IGNOU Exam/Admission',
    descriptionHi: 'विश्वविद्यालयों के UG/PG एडमिशन, परीक्षा फॉर्म और परिणाम'
  },
  {
    id: 'central',
    labelEn: 'Central Govt',
    labelHi: 'केंद्र सरकार (Central Govt)',
    icon: 'ShieldCheck',
    color: 'sky',
    badgeBg: 'bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800',
    badgeText: 'text-sky-600 dark:text-sky-400',
    descriptionEn: 'Union Government ministries, official circulars and national initiatives',
    descriptionHi: 'केंद्रीय मंत्रालयों के नए नियम, प्रमाणपत्र एवं राष्ट्रीय योजनाएं'
  },
  {
    id: 'services',
    labelEn: 'Online Services (RTPS/CSC)',
    labelHi: 'ऑनलाइन सेवाएं (Citizen Services)',
    icon: 'Cpu',
    color: 'emerald',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    badgeText: 'text-emerald-600 dark:text-emerald-400',
    descriptionEn: 'Caste, Income, Domicile, Ration Card, Aadhaar, Voter ID & PAN Online',
    descriptionHi: 'जाति, आय, निवास, राशन कार्ड, आधार सुधार और ऑनलाइन पोर्टल सेवाएं'
  },
  {
    id: 'admission',
    labelEn: 'Admissions',
    labelHi: 'प्रवेश (Admission 2026)',
    icon: 'GraduationCap',
    color: 'amber',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
    badgeText: 'text-amber-600 dark:text-amber-400',
    descriptionEn: 'UG/PG, Polytechnic, Paramedical, DElEd, B.Ed, NVS, SAV & Board Admissions',
    descriptionHi: 'यूजी/पीजी, पॉलिटेक्निक, पैरामेडिकल, डीएलएड, बीएड, नवोदय व बोर्ड एडमिशन'
  }
];

export const getCategoryById = (id: CategoryType): CategoryInfo | undefined => {
  return CATEGORIES.find(cat => cat.id === id);
};

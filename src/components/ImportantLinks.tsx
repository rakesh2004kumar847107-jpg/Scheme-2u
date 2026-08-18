import React from 'react';
import { 
  ExternalLink, 
  ShieldCheck, 
  Link as LinkIcon, 
  Landmark, 
  GraduationCap, 
  Briefcase, 
  Cpu, 
  Compass, 
  FileCheck2,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ImportantLinkItem {
  id: string;
  nameEn: string;
  nameHi: string;
  deptEn: string;
  deptHi: string;
  url: string;
  tag: string;
  isBihar?: boolean;
}

export const ImportantLinks: React.FC = () => {
  const { language } = useApp();
  const isHindi = language === 'hi';

  const quickLinks: ImportantLinkItem[] = [
    {
      id: 'rtps',
      nameEn: 'RTPS Bihar (ServicePlus)',
      nameHi: 'RTPS बिहार (जाति/आय/निवास पोर्टल)',
      deptEn: 'General Administration Dept, Bihar',
      deptHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
      url: 'https://serviceonline.bihar.gov.in',
      tag: 'Citizen Services',
      isBihar: true
    },
    {
      id: 'bpsc',
      nameEn: 'BPSC Official Portal',
      nameHi: 'बिहार लोक सेवा आयोग (BPSC)',
      deptEn: 'Bihar Public Service Commission',
      deptHi: 'BPSC आधिकारिक वेबसाइट',
      url: 'https://bpsc.bih.nic.in',
      tag: 'Recruitment',
      isBihar: true
    },
    {
      id: 'pms',
      nameEn: 'Bihar Post Matric Scholarship',
      nameHi: 'बिहार पोस्ट मैट्रिक छात्रवृत्ति पोर्टल',
      deptEn: 'Education Dept, Bihar',
      deptHi: 'शिक्षा विभाग, बिहार सरकार',
      url: 'https://pmsonline.bih.nic.in',
      tag: 'Scholarship',
      isBihar: true
    },
    {
      id: 'medhasoft',
      nameEn: 'Medhasoft (Kanya Utthan)',
      nameHi: 'मेधासॉफ्ट (कन्या उत्थान व छात्रवृत्ति)',
      deptEn: 'Govt of Bihar',
      deptHi: 'मेधासॉफ्ट पोर्टल',
      url: 'https://medhasoft.bih.nic.in',
      tag: 'Girl Incentive',
      isBihar: true
    },
    {
      id: 'pmkisan',
      nameEn: 'PM Kisan Samman Nidhi',
      nameHi: 'पीएम किसान सम्मान निधि',
      deptEn: 'Ministry of Agriculture, India',
      deptHi: 'कृषि मंत्रालय, भारत सरकार',
      url: 'https://pmkisan.gov.in',
      tag: 'Central Scheme'
    },
    {
      id: 'ssc',
      nameEn: 'SSC Official Portal (New)',
      nameHi: 'कर्मचारी चयन आयोग (SSC)',
      deptEn: 'Staff Selection Commission, GoI',
      deptHi: 'एसएससी आधिकारिक पोर्टल',
      url: 'https://ssc.gov.in',
      tag: 'Central Jobs'
    },
    {
      id: 'nsp',
      nameEn: 'National Scholarship Portal',
      nameHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP 2.0)',
      deptEn: 'MeitY & Central Ministries',
      deptHi: 'केंद्रीय छात्रवृत्ति पोर्टल',
      url: 'https://scholarships.gov.in',
      tag: 'National Scholarship'
    },
    {
      id: 'rrb',
      nameEn: 'Railway RRB Recruitment',
      nameHi: 'रेलवे भर्ती बोर्ड (RRB Apply)',
      deptEn: 'Ministry of Railways, India',
      deptHi: 'रेलवे भर्ती बोर्ड',
      url: 'https://rrbapply.gov.in',
      tag: 'Railways'
    },
    {
      id: 'biharbhumi',
      nameEn: 'Bihar Bhumi (Land Records)',
      nameHi: 'बिहार भूमि (दाखिल-खारिज/जमाबंदी)',
      deptEn: 'Revenue & Land Reforms, Bihar',
      deptHi: 'राजस्व एवं भूमि सुधार विभाग',
      url: 'https://biharbhumi.bihar.gov.in',
      tag: 'Land Records',
      isBihar: true
    },
    {
      id: 'digilocker',
      nameEn: 'DigiLocker India',
      nameHi: 'डिजिलॉकर (डिजिटल प्रमाणपत्र)',
      deptEn: 'Ministry of IT, India',
      deptHi: 'डिजिटल इंडिया',
      url: 'https://www.digilocker.gov.in',
      tag: 'Documents'
    },
    {
      id: 'csbc',
      nameEn: 'CSBC Bihar Police Portal',
      nameHi: 'केंद्रीय चयन पर्षद (सिपाही भर्ती)',
      deptEn: 'CSBC, Bihar',
      deptHi: 'बिहार पुलिस भर्ती बोर्ड',
      url: 'https://csbc.bihar.gov.in',
      tag: 'Police Jobs',
      isBihar: true
    },
    {
      id: 'uidai',
      nameEn: 'UIDAI myAadhaar Portal',
      nameHi: 'आधार ऑनलाइन सेवा (myAadhaar)',
      deptEn: 'UIDAI, Govt of India',
      deptHi: 'भारतीय विशिष्ट पहचान प्राधिकरण',
      url: 'https://myaadhaar.uidai.gov.in',
      tag: 'Identity'
    },
    {
      id: 'ayushman',
      nameEn: 'Ayushman Bharat PM-JAY',
      nameHi: 'आयुष्मान भारत (₹5 लाख मुफ्त इलाज)',
      deptEn: 'National Health Authority (NHA)',
      deptHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण',
      url: 'https://beneficiary.nha.gov.in',
      tag: 'Health Care'
    },
    {
      id: 'epds',
      nameEn: 'Bihar EPDS Ration Card',
      nameHi: 'बिहार राशन कार्ड ऑनलाइन (EPDS)',
      deptEn: 'Food & Consumer Protection, Bihar',
      deptHi: 'खाद्य एवं उपभोक्ता संरक्षण विभाग',
      url: 'https://epds.bihar.gov.in',
      tag: 'Ration Card',
      isBihar: true
    },
    {
      id: 'voter',
      nameEn: 'ECI Voters Services Portal',
      nameHi: 'निर्वाचन आयोग (नया वोटर कार्ड व e-EPIC)',
      deptEn: 'Election Commission of India',
      deptHi: 'भारत निर्वाचन आयोग',
      url: 'https://voters.eci.gov.in',
      tag: 'Voter ID'
    },
    {
      id: 'pan',
      nameEn: 'Instant e-PAN & Income Tax',
      nameHi: 'इंस्टेंट ई-पैन व आयकर सेवा (e-Filing)',
      deptEn: 'Income Tax Department, India',
      deptHi: 'आयकर विभाग, भारत सरकार',
      url: 'https://www.incometax.gov.in',
      tag: 'PAN Card'
    },
    {
      id: 'bscc',
      nameEn: 'Bihar Student Credit Card (MNSSBY)',
      nameHi: 'बिहार स्टूडेंट क्रेडिट कार्ड (₹4 लाख शिक्षा लोन)',
      deptEn: 'Education Dept & DRCC Bihar',
      deptHi: 'शिक्षा विभाग, बिहार सरकार (7 निश्चय)',
      url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
      tag: 'Education Loan',
      isBihar: true
    },
    {
      id: 'udyami',
      nameEn: 'Mukhyamantri Udyami Yojana',
      nameHi: 'मुख्यमंत्री उद्यमी योजना (₹10 लाख लोन व अनुदान)',
      deptEn: 'Industries Dept, Bihar',
      deptHi: 'उद्योग विभाग, बिहार सरकार',
      url: 'https://udyami.bihar.gov.in',
      tag: 'Business Loan',
      isBihar: true
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <LinkIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {isHindi ? 'महत्वपूर्ण आधिकारिक सरकारी वेबसाइट्स' : 'Important Official Government Links'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {isHindi 
                  ? 'सभी प्रमुख सरकारी पोर्टल और भर्ती बोर्ड के सीधे लिंक (100% आधिकारिक स्रोत)'
                  : 'Direct, verified gateway to authorized central and state government portals'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800 font-bold self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>{isHindi ? 'सत्यापित .gov.in लिंक' : 'Verified .gov.in Links'}</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {quickLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-3.5 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xs transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1.5">
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                    item.isBihar 
                      ? 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300' 
                      : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                  }`}>
                    {item.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {isHindi ? item.nameHi : item.nameEn}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                  {isHindi ? item.deptHi : item.deptEn}
                </p>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono truncate max-w-[150px]">
                  {item.url.replace('https://', '')}
                </span>
                <span className="font-bold text-blue-600 dark:text-blue-400 group-hover:underline">
                  {isHindi ? 'खोलें' : 'Open'} →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

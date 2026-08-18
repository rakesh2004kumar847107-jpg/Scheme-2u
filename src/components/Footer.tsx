import React, { useState } from 'react';
import { 
  Youtube, 
  Send, 
  Instagram, 
  MessageCircle, 
  Facebook, 
  ShieldCheck, 
  Layers,
  ArrowUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SOCIAL_LINKS } from '../data/social';
import { CATEGORIES } from '../data/categories';
import { PolicyPageType } from '../types';

export const Footer: React.FC = () => {
  const { language, navigateToCategory, navigateToPolicy, navigateToAdmin, showToast } = useApp();
  const isHindi = language === 'hi';
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    showToast(isHindi ? 'धन्यवाद! दैनिक जॉब अलर्ट्स के लिए सब्सक्राइब हो गया।' : 'Subscribed successfully for free daily alerts!');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const policyLinks: { id: PolicyPageType; labelEn: string; labelHi: string }[] = [
    { id: 'about', labelEn: 'About Us', labelHi: 'हमारे बारे में' },
    { id: 'contact', labelEn: 'Contact Us', labelHi: 'संपर्क करें' },
    { id: 'privacy-policy', labelEn: 'Privacy Policy', labelHi: 'गोपनीयता नीति' },
    { id: 'terms', labelEn: 'Terms & Conditions', labelHi: 'नियम एवं शर्तें' },
    { id: 'disclaimer', labelEn: 'Disclaimer', labelHi: 'अस्वीकरण (Disclaimer)' },
    { id: 'cookie-policy', labelEn: 'Cookie Policy', labelHi: 'कुकी नीति' },
    { id: 'editorial-policy', labelEn: 'Editorial Policy', labelHi: 'संपादकीय नीति' },
    { id: 'correction-policy', labelEn: 'Correction Policy', labelHi: 'त्रुटि सुधार नीति' },
    { id: 'dmca', labelEn: 'DMCA Policy', labelHi: 'DMCA नीति' },
    { id: 'sitemap', labelEn: 'HTML Sitemap', labelHi: 'साइटमैप' },
    { id: 'faq', labelEn: 'FAQ', labelHi: 'अक्सर पूछे जाने वाले सवाल' }
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-10 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Top Newsletter & Community Banner */}
        <div className="bg-blue-50/70 dark:bg-slate-900 border border-blue-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-600 text-white tracking-wider">
              {isHindi ? '100% निःशुल्क दैनिक जॉब अलर्ट्स' : 'Free Instant Daily Notifications'}
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
              {isHindi ? 'सरकारी नौकरी व योजना की जानकारी सबसे पहले पाएं' : 'Never Miss a Bihar or Central Govt Job Notification'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl font-medium">
              {isHindi 
                ? 'व्हाट्सएप और टेलीग्राम ग्रुप से जुड़ें तथा सीधे अपने फोन पर एडमिट कार्ड, रिजल्ट और भर्ती की पुष्टि प्राप्त करें।'
                : 'Join over 100,000+ aspirants on our verified WhatsApp & Telegram community for genuine updates.'}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={SOCIAL_LINKS.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Channel</span>
            </a>

            <a
              href={SOCIAL_LINKS.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs shadow-xs transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Channel</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-xs">
                S2U
              </div>
              <div>
                <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Scheme 2 U</span>
                <span className="block text-[10px] text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase">
                  Educational & Govt Info Portal
                </span>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {isHindi 
                ? 'Scheme 2 U भारत व विशेष रूप से बिहार के विद्यार्थियों और नागरिकों के लिए नवीनतम सरकारी नौकरी, एडमिट कार्ड, परीक्षा परिणाम, छात्रवृत्ति एवं सरकारी योजनाओं की प्रामाणिक जानकारी उपलब्ध कराने वाला प्रमुख पोर्टल है।'
                : 'Scheme 2 U is a premier educational portal providing verified, timely information about Government Jobs, Admit Cards, Results, Scholarships, and Central & Bihar State Welfare Schemes.'}
            </p>

            {/* Social Icons with exact links */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                {isHindi ? 'सोशल मीडिया पर फॉलो करें:' : 'Follow Us On Official Handles:'}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={SOCIAL_LINKS.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-600 text-red-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-sky-500 text-sky-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-pink-600 text-pink-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 text-emerald-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 text-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-200 dark:border-slate-700"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
              {isHindi ? 'प्रमुख श्रेणियां' : 'Categories'}
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 8).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => navigateToCategory(c.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium flex items-center gap-1.5 cursor-pointer text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{isHindi ? c.labelHi : c.labelEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal & Trust Policies */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
              {isHindi ? 'नीतियां एवं नियम' : 'Policies & Trust'}
            </h4>
            <ul className="space-y-2">
              {policyLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => navigateToPolicy(link.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium flex items-center gap-1.5 cursor-pointer text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span>{isHindi ? link.labelHi : link.labelEn}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Newsletter & Portal Admin */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 pb-2">
              {isHindi ? 'ईमेल अलर्ट्स' : 'Free Email Alerts'}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              {isHindi 
                ? 'अपना ईमेल दर्ज करें और सप्ताह की शीर्ष 10 नौकरियों का सारांश पाएं:' 
                : 'Get curated weekly job digests delivered straight to your inbox.'}
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-xs focus:outline-hidden focus:border-blue-600"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                {isHindi ? 'सदस्यता लें (Subscribe)' : 'Subscribe Now'}
              </button>
            </form>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={navigateToAdmin}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:hover:text-white font-semibold transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isHindi ? 'कंटेंट मैनेजमेंट एडमिन (Admin)' : 'Content Manager (Admin)'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
          <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isHindi ? 'अस्वीकरण (Disclaimer)' : 'Legal Disclaimer'}</span>
          </div>
          <p className="leading-relaxed font-medium">
            {isHindi
              ? 'Scheme 2 U (scheme2u.com) केवल एक सूचनात्मक व शैक्षणिक मंच है। यह किसी भी सरकारी विभाग या आयोग का आधिकारिक पोर्टल नहीं है। यद्यपि हम सभी जानकारियों को आधिकारिक विज्ञप्तियों से सत्यापित करते हैं, फिर भी अभ्यर्थियों को सलाह दी जाती है कि आवेदन करने से पूर्व संबंधित विभाग की आधिकारिक वेबसाइट (.gov.in / .nic.in) पर दी गई मूल अधिसूचना अवश्य पढ़ें।'
              : 'Scheme 2 U (scheme2u.com) is an independent educational news and informational portal. It is not affiliated with or endorsed by any government entity or commission. While we make every effort to verify information from authentic sources, users are strongly advised to refer to original official notifications.'}
          </p>
        </div>

        {/* Bottom Bar with Copyright & Scroll to Top */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong>Scheme 2 U</strong>. All Rights Reserved. Made for Students & Citizens of India.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-colors cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <span>{isHindi ? 'ऊपर जाएं' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getPolicyContent } from '../data/policies';
import { PolicyPageType } from '../types';
import { SOCIAL_LINKS } from '../data/social';
import { CATEGORIES } from '../data/categories';

interface PolicyPageViewProps {
  pageType: PolicyPageType;
}

export const PolicyPageView: React.FC<PolicyPageViewProps> = ({ pageType }) => {
  const { language, navigateToHome, navigateToPost, posts, showToast } = useApp();
  const isHindi = language === 'hi';
  const policyData = getPolicyContent(pageType);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ state
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0, 1]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(isHindi ? 'आपका संदेश प्राप्त हो गया है!' : 'Your message has been sent successfully!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <button 
          onClick={navigateToHome} 
          className="hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer"
        >
          {isHindi ? 'मुख्य पृष्ठ' : 'Home'}
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {isHindi ? policyData.titleHi : policyData.titleEn}
        </span>
      </nav>

      {/* Back Button */}
      <div>
        <button
          onClick={navigateToHome}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isHindi ? 'मुख्य पृष्ठ पर वापस' : 'Back to Home'}</span>
        </button>
      </div>

      {/* Main Content Card */}
      <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Scheme 2 U Official Information & Policies</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
            {isHindi ? policyData.titleHi : policyData.titleEn}
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Last Updated: {policyData.lastUpdated}
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          {policyData.sections.map((sec, idx) => (
            <section key={idx} className="space-y-2">
              <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-2.5">
                {isHindi ? sec.headingHi : sec.headingEn}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line font-medium">
                {isHindi ? sec.bodyHi : sec.bodyEn}
              </p>
            </section>
          ))}
        </div>

        {/* Contact Us Interactive Form (If on Contact page) */}
        {pageType === 'contact' && (
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 space-y-1">
                <Mail className="w-5 h-5 text-blue-600 mb-1" />
                <strong className="block font-bold text-slate-900 dark:text-white">Email Address</strong>
                <a href="mailto:contact@scheme2u.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  contact@scheme2u.com
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 space-y-1">
                <Send className="w-5 h-5 text-emerald-600 mb-1" />
                <strong className="block font-bold text-slate-900 dark:text-white">Telegram Helpdesk</strong>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
                  @Scheme2UOfficial
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900 space-y-1">
                <MapPin className="w-5 h-5 text-purple-600 mb-1" />
                <strong className="block font-bold text-slate-900 dark:text-white">Headquarters</strong>
                <span className="text-slate-600 dark:text-slate-400">Patna, Bihar - 800001, India</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleContactSubmit} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-4">
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                {isHindi ? 'हमें सीधा संदेश भेजें (Send Direct Message)' : 'Send Direct Inquiry / Message'}
              </h3>

              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>
                    {isHindi
                      ? 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हमारी टीम 24 घंटे में संपर्क करेगी।'
                      : 'Thank you! Your message has been received. Our team will get back to you within 24 hours.'}
                  </span>
                </div>
              ) : (
                <div className="space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Your Full Name*</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe / राहुल कुमार"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Email Address*</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="user@example.com"
                        className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Subject / Topic*</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Correction Request / Advertisement / General Inquiry"
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Message*</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your query in detail..."
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isHindi ? 'संदेश भेजें' : 'Send Message'}</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Comprehensive FAQ Accordion (If on FAQ page) */}
        {pageType === 'faq' && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
            {[
              {
                qEn: 'Are the job and scheme updates on Scheme 2 U official and authentic?',
                qHi: 'क्या Scheme 2 U पर दी गई सभी नौकरियां और योजनाएं 100% आधिकारिक हैं?',
                aEn: 'Yes. All listings on Scheme 2 U are curated directly from authorized Central and State Government notifications, official gazettes, and .gov.in / .nic.in portals. We always provide direct links to the official PDF notification.',
                aHi: 'हाँ, Scheme 2 U पर प्रकाशित सभी जानकारियां केवल आधिकारिक सरकारी गजट, .gov.in व .nic.in पोर्टलों से सत्यापित करने के बाद ही डाली जाती हैं।'
              },
              {
                qEn: 'Does Scheme 2 U charge any fee for application submission or job guidance?',
                qHi: 'क्या Scheme 2 U किसी भी सेवा या नौकरी फॉर्म के लिए कोई शुल्क लेता है?',
                aEn: 'No! Scheme 2 U is a 100% free educational information portal. We NEVER ask for money or payment from students.',
                aHi: 'नहीं! Scheme 2 U पूर्णतः निःशुल्क सूचना सेवा है। हम किसी भी अभ्यर्थी से कोई शुल्क नहीं लेते हैं।'
              },
              {
                qEn: 'How can I get instant alerts for latest Bihar & Central Government schemes?',
                qHi: 'बिहार व केंद्र सरकार की नई योजनाओं का तुरंत अलर्ट कैसे प्राप्त करें?',
                aEn: 'You can join our verified Telegram Channel (@Scheme2UOfficial) or WhatsApp Community using the links provided on our website.',
                aHi: 'आप हमारे आधिकारिक व्हाट्सएप ग्रुप और टेलीग्राम चैनल से जुड़कर प्रतिदिन सबसे पहले अपडेट प्राप्त कर सकते हैं।'
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div key={idx} className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {isHindi ? faq.qHi : faq.qEn}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 font-medium">
                      {isHindi ? faq.aHi : faq.aEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Sitemap Visual Map (If on Sitemap page) */}
        {pageType === 'sitemap' && (
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">Category Directories:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {CATEGORIES.map(c => (
                  <div key={c.id} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-850 font-bold">
                    <span className="text-blue-600 dark:text-blue-400">/{c.id}</span>
                    <p className="text-[11px] text-slate-500">{c.labelEn} ({c.labelHi})</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white mb-2">Active Article URLs ({posts.length}):</h3>
              <div className="space-y-1.5 text-xs">
                {posts.map(p => (
                  <div
                    key={p.id}
                    onClick={() => navigateToPost(p.slug)}
                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-850 hover:bg-blue-50 text-slate-800 dark:text-slate-200 cursor-pointer flex items-center justify-between"
                  >
                    <span className="truncate">{p.titleEn}</span>
                    <span className="text-[10px] text-blue-600 font-mono">/#post/{p.slug}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  );
};

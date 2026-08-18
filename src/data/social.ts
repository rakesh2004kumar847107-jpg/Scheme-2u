export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  icon: string;
  handle: string;
  colorClass: string;
  badgeLabel: string;
  descriptionEn: string;
  descriptionHi: string;
}

export const SOCIAL_LINKS = {
  youtube: {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Scheme2U',
    handle: '@Scheme2U',
    icon: 'Youtube',
    colorClass: 'text-red-600 hover:text-red-700 bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800',
    badgeLabel: 'Subscribe for Video Guides',
    descriptionEn: 'Watch step-by-step video guides on filling forms, scheme eligibility & official updates.',
    descriptionHi: 'फॉर्म भरने की पूरी प्रक्रिया, योजना पात्रता और वीडियो गाइड देखें।'
  },
  telegram: {
    name: 'Telegram',
    url: 'https://t.me/scheme2u',
    handle: '@scheme2u',
    icon: 'Send',
    colorClass: 'text-sky-500 hover:text-sky-600 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800',
    badgeLabel: 'Instant Job & PDF Alerts',
    descriptionEn: 'Get instant notifications & direct PDF notifications before anyone else.',
    descriptionHi: 'सरकारी नौकरी, एडमिट कार्ड और योजना पीडीएफ तुरंत टेलीग्राम पर प्राप्त करें।'
  },
  whatsapp: {
    name: 'WhatsApp Channel',
    url: 'https://whatsapp.com/channel/0029Vb8R8DHAu3aOithF6F0w',
    handle: 'Scheme 2 U Official',
    icon: 'MessageCircle',
    colorClass: 'text-emerald-600 hover:text-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800',
    badgeLabel: 'Join WhatsApp Community',
    descriptionEn: 'Receive direct updates on your phone every morning without spam.',
    descriptionHi: 'रोज सुबह सभी नई सरकारी योजनाओं और भर्तियों की जानकारी पाएं।'
  },
  instagram: {
    name: 'Instagram',
    url: 'https://www.instagram.com/apnabenifits',
    handle: '@apnabenifits',
    icon: 'Instagram',
    colorClass: 'text-pink-600 hover:text-pink-700 bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800',
    badgeLabel: 'Follow on Insta Reels',
    descriptionEn: 'Quick 60-second reels summarizing scheme benefits and eligibility rules.',
    descriptionHi: 'शॉर्ट रील्स के माध्यम से योजनाओं और नौकरियों की त्वरित जानकारी।'
  },
  facebook: {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1SXbpqyznH/ ',
    handle: 'Scheme 2 U Page',
    icon: 'Facebook',
    colorClass: 'text-blue-600 hover:text-blue-700 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800',
    badgeLabel: 'Follow on Facebook',
    descriptionEn: 'Stay updated with Facebook posts, discussion and official releases.',
    descriptionHi: 'फेसबुक पेज पर हमारे साथ जुड़ें और नई जानकारियां पाएं।'
  },
  email: {
    name: 'Email Support',
    url: 'mailto:schemeofficialinfo@gmail.com',
    handle: 'schemeofficialinfo@gmail.com',
    icon: 'Mail',
    colorClass: 'text-amber-600 hover:text-amber-700 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800',
    badgeLabel: 'Official Help Desk',
    descriptionEn: 'For editorial inquiries, grievance corrections, or partnership queries.',
    descriptionHi: 'संपादकीय प्रश्नों, सुधार और सहायता के लिए हमें ईमेल करें।'
  }
};

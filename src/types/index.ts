export type CategoryType = 
  | 'all'
  | 'jobs'
  | 'admit-card'
  | 'results'
  | 'answer-key'
  | 'scholarships'
  | 'schemes'
  | 'education'
  | 'university'
  | 'bihar'
  | 'central'
  | 'services';

export type Language = 'en' | 'hi';

export type ThemeMode = 'light' | 'dark';

export interface CategoryInfo {
  id: CategoryType;
  labelEn: string;
  labelHi: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface ImportantDates {
  applicationStart?: string;
  applicationLastDate?: string;
  feePaymentLastDate?: string;
  correctionWindow?: string;
  admitCardDate?: string;
  examDate?: string;
  answerKeyDate?: string;
  resultDate?: string;
  scholarshipDisbursal?: string;
}

export interface ApplicationFee {
  generalObcEws: string;
  scStPwd: string;
  female: string;
  paymentMode: string;
}

export interface AgeLimit {
  minAge: string;
  maxAge: string;
  asOnDate: string;
  ageRelaxationRule: string;
}

export interface EligibilityItem {
  postName: string;
  totalPosts?: string;
  qualification: string;
  eligibilityEn: string;
  eligibilityHi: string;
}

export interface OfficialLinks {
  applyOnlineUrl?: string;
  officialNotificationPdfUrl?: string;
  officialWebsiteUrl: string;
  syllabusUrl?: string;
  admitCardUrl?: string;
  resultUrl?: string;
  answerKeyUrl?: string;
  directPortalUrl?: string;
}

export interface FaqItem {
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

export interface PostItem {
  id: string;
  slug: string;
  category: CategoryType;
  stateScope: 'Bihar' | 'Central' | 'All India' | 'State Specific';
  titleEn: string;
  titleHi: string;
  shortSummaryEn: string;
  shortSummaryHi: string;
  organizationEn: string;
  organizationHi: string;
  postNameEn: string;
  postNameHi: string;
  totalVacanciesOrAmount?: string;
  isNew?: boolean;
  isHot?: boolean;
  isTrending?: boolean;
  isEndingSoon?: boolean;
  featuredImage?: string;
  lastUpdated: string;
  postedDate: string;
  importantDates: ImportantDates;
  applicationFee?: ApplicationFee;
  ageLimit?: AgeLimit;
  eligibility?: EligibilityItem[];
  requiredDocuments?: {
    en: string[];
    hi: string[];
  };
  selectionProcess?: {
    en: string[];
    hi: string[];
  };
  howToApply: {
    en: string[];
    hi: string[];
  };
  importantInstructions?: {
    en: string[];
    hi: string[];
  };
  officialLinks: OfficialLinks;
  faqs?: FaqItem[];
  tags?: string[];
  contentEn?: string;
  contentHi?: string;
}

export type PolicyPageType = 
  | 'about'
  | 'about-us'
  | 'contact'
  | 'contact-us'
  | 'privacy-policy'
  | 'terms'
  | 'terms-and-conditions'
  | 'disclaimer'
  | 'cookie-policy'
  | 'editorial-policy'
  | 'correction-policy'
  | 'dmca'
  | 'sitemap'
  | 'faq';

export type ActiveView = 
  | { type: 'home' }
  | { type: 'category'; category: CategoryType }
  | { type: 'detail'; slug: string }
  | { type: 'post'; slug: string }
  | { type: 'policy'; slug: string; page?: string }
  | { type: 'admin' }
  | { type: 'search'; query: string }
  | { type: 'bookmarks' };

export interface PolicyPage {
  slug: string;
  titleEn: string;
  titleHi: string;
  lastUpdated: string;
  sections: {
    headingEn: string;
    headingHi: string;
    bodyEn: string;
    bodyHi: string;
  }[];
}


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
  | 'services'
  | 'admission';

export type Language = 'en' | 'hi';

export type ThemeMode = 'light' | 'dark';

export type VerificationStatus = 
  | 'OFFICIAL_VERIFIED'
  | 'PARTIALLY_VERIFIED'
  | 'PENDING_VERIFICATION'
  | 'UNVERIFIED'
  | 'REJECTED';

export type ComputedStatus = 
  | 'UPCOMING'
  | 'LIVE'
  | 'LAST_DATE_NEAR'
  | 'ADMIT_CARD'
  | 'EXAM'
  | 'ANSWER_KEY'
  | 'RESULT'
  | 'COUNSELLING'
  | 'CLOSED'
  | 'UPDATE_PENDING';

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

export interface OfficialSourceRegistry {
  id: string;
  name: string;
  url: string;
  type: 'Govt Department' | 'Recruitment Board' | 'Education Board' | 'University' | 'Scholarship Portal' | 'Gazette';
  organization: string;
  state: 'Bihar' | 'Central' | 'All India' | 'State Specific';
  scope?: string;
  category: CategoryType;
  active: boolean;
  lastChecked: string;
  status: 'ACTIVE' | 'DOWN' | 'PENDING';
  officialDomainVerified: boolean;
}

export interface FieldSourceRef {
  sourceUrl: string;
  sourceName: string;
  verifiedAt: string;
  sourceSnippet?: string;
  isOfficial: boolean;
}

export interface ImportantDates {
  notificationDate?: string;
  applicationStart?: string;
  applicationLastDate?: string;
  feePaymentLastDate?: string;
  correctionWindow?: string;
  correctionStart?: string;
  correctionLastDate?: string;
  admitCardDate?: string;
  examDate?: string;
  answerKeyDate?: string;
  objectionStartDate?: string;
  objectionLastDate?: string;
  resultDate?: string;
  counsellingDate?: string;
  documentVerificationDate?: string;
  scholarshipDisbursal?: string;
}

export interface ApplicationFee {
  generalObcEws?: string;
  generalFee?: string;
  obcFee?: string;
  ewsFee?: string;
  scFee?: string;
  stFee?: string;
  scStPwd?: string;
  female?: string;
  paymentMode?: string;
  feeExemptionNote?: string;
}

export interface AgeLimit {
  minAge?: string;
  maxAge?: string;
  asOnDate?: string;
  ageRelaxationRule?: string;
  categoryRelaxation?: {
    obc?: string;
    scSt?: string;
    pwd?: string;
    female?: string;
  };
}

export interface EligibilityItem {
  postName: string;
  totalPosts?: string;
  qualification: string;
  stream?: string;
  genderEligibility?: string;
  domicileRequirement?: string;
  eligibilityEn: string;
  eligibilityHi: string;
}

export interface VacancyBreakdown {
  ur?: string;
  obc?: string;
  ebc?: string;
  ews?: string;
  sc?: string;
  st?: string;
  female?: string;
  pwd?: string;
  total: string;
}

export interface OfficialLinks {
  applyOnlineUrl?: string;
  officialNotificationPdfUrl?: string;
  officialWebsiteUrl: string;
  admitCardUrl?: string;
  resultUrl?: string;
  answerKeyUrl?: string;
  correctionUrl?: string;
  statusCheckUrl?: string;
  syllabusPdfUrl?: string;
  scoreCardUrl?: string;
}

export interface FaqItem {
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
}

export interface UpdateHistoryItem {
  id: string;
  timestamp: string;
  field: string;
  oldValue: string;
  newValue: string;
  source: string;
  sourceUrl?: string;
  verifiedBy: string;
  notes?: string;
}

export interface ConflictLogItem {
  id: string;
  field: string;
  sourceA: {
    name: string;
    value: string;
    url: string;
  };
  sourceB: {
    name: string;
    value: string;
    url: string;
  };
  detectedAt: string;
  resolutionStatus: 'PENDING' | 'RESOLVED';
  resolvedValue?: string;
  resolutionNotes?: string;
}

export interface PostItem {
  id: string;
  slug: string;
  year: number; // e.g., 2026
  category: CategoryType;
  subcategory?: string;
  stateScope: 'Bihar' | 'Central' | 'All India' | 'State Specific';
  department?: string;
  organizationEn: string;
  organizationHi: string;
  postNameEn: string;
  postNameHi: string;
  titleEn: string;
  titleHi: string;
  shortSummaryEn: string;
  shortSummaryHi: string;

  advertisementNumber?: string;
  notificationNumber?: string;
  notificationDate?: string;

  totalVacanciesOrAmount?: string;
  vacancyBreakdown?: VacancyBreakdown;
  salaryPayScale?: string;

  computedStatus: ComputedStatus;
  verificationStatus: VerificationStatus;
  isDemoData: boolean; // Explicit transparency rule

  isNew?: boolean;
  isHot?: boolean;
  isTrending?: boolean;
  isEndingSoon?: boolean;

  lastUpdated: string;
  postedDate: string;
  lastVerifiedDate: string;

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
  examPattern?: {
    en: string[];
    hi: string[];
  };
  howToApply: {
    en: string[];
    hi: string[];
  };
  howToDownload?: {
    en: string[];
    hi: string[];
  };
  importantInstructions?: {
    en: string[];
    hi: string[];
  };

  officialLinks: OfficialLinks;
  primarySourceName: string;
  primarySourceUrl: string;
  fieldSources?: Record<string, FieldSourceRef>;

  updateHistory?: UpdateHistoryItem[];
  conflictLogs?: ConflictLogItem[];

  faqs?: FaqItem[];
  tags?: string[];
  seoKeywords?: string[];
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

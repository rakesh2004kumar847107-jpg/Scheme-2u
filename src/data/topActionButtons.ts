export interface TopActionButtonItem {
  id: string;
  titleHi: string;
  titleEn: string;
  targetSlug: string;
  directUrl?: string;
  isExternal?: boolean;
  highlightText?: string;
}

export const TOP_ACTION_BUTTONS: TopActionButtonItem[] = [
  {
    id: 'btn-csc-registration',
    titleHi: 'CSC ID REGISTRATION 2026 ऑनलाइन आवेदन करे',
    titleEn: 'CSC ID Registration 2026 Apply Online',
    targetSlug: 'csc-id-registration-2026-online-apply',
    directUrl: 'https://register.csc.gov.in',
    highlightText: 'New 2026'
  },
  {
    id: 'btn-rtps-certificates',
    titleHi: 'जाति, निवास, आय यहाँ से APPLY & DOWNLOAD करे',
    titleEn: 'Apply & Download Caste, Income, Residence Certificate',
    targetSlug: 'rtps-bihar-online-caste-income-residence-ncl-certificate-2026',
    directUrl: 'https://serviceonline.bihar.gov.in',
    highlightText: 'RTPS Bihar'
  },
  {
    id: 'btn-bihar-ration-card',
    titleHi: 'बिहार राशन कार्ड 2026 ऑनलाइन अप्लाई ऐसे करें',
    titleEn: 'Bihar Ration Card 2026 Apply Online Process',
    targetSlug: 'bihar-ration-card-2026-online-apply-epds',
    directUrl: 'https://epds.bihar.gov.in',
    highlightText: 'Smart PDS'
  },
  {
    id: 'btn-post-matric-scholarship',
    titleHi: 'BIHAR POST MATRIC SCHOLARSHIP 2026 APPLY',
    titleEn: 'Bihar Post Matric Scholarship 2026-27 Apply Online',
    targetSlug: 'bihar-post-matric-scholarship-2026-online-apply-portal',
    directUrl: 'https://pmsonline.bih.nic.in',
    highlightText: 'SC/ST/BC/EBC'
  },
  {
    id: 'btn-voter-enumeration',
    titleHi: 'VOTER ENUMERATION 2025/2026 ONLINE APPLY',
    titleEn: 'Voter ID Card Online Apply & Correction 2026',
    targetSlug: 'voter-enumeration-2026-online-apply-voters-eci',
    directUrl: 'https://voters.eci.gov.in',
    highlightText: 'ECI Voters'
  },
  {
    id: 'btn-bihar-election-result',
    titleHi: 'बिहार चुनाव LIVE रिजल्ट 2025/2026 यहाँ से देखे',
    titleEn: 'Bihar Election Live Results 2025/2026 Official Tally',
    targetSlug: 'bihar-vidhan-sabha-chunav-result-2025-2026-live',
    directUrl: 'https://results.eci.gov.in',
    highlightText: 'Live Updates'
  },
  {
    id: 'btn-bihar-universities-admission',
    titleHi: 'बिहार के सभी यूनिवर्सिटी के लिए यहाँ से करे आवेदन',
    titleEn: 'Bihar All Universities UG/PG Admission 2026 Single Portal',
    targetSlug: 'bihar-all-universities-ug-pg-admission-2026-portal',
    directUrl: 'https://state.bihar.gov.in/educationbihar',
    highlightText: 'All Universities'
  },
  {
    id: 'btn-10th-scholarship',
    titleHi: 'BIHAR BOARD 10TH PASS SCHOLARSHIP 2024/2026',
    titleEn: 'Bihar Board Matric 10th Pass ₹10,000 Scholarship Online',
    targetSlug: 'bihar-board-10th-pass-scholarship-2026-medhasoft',
    directUrl: 'https://medhasoft.bih.nic.in',
    highlightText: 'Medhasoft'
  }
];

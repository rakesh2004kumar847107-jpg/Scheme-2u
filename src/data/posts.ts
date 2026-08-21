import { PostItem } from '../types';
import { LATEST_UPDATES_POSTS } from './latestUpdatesPosts';
import { LATEST_JOBS_POSTS } from './latestJobsPosts';
import { YOJANA_SCHEMES_POSTS } from './yojanaSchemesPosts';
import { ADMIT_CARDS_RESULTS_POSTS } from './admitCardsResultsPosts';

const BASE_POSTS: PostItem[] = [
  // 1. BPSC 71st CCE 2026 (Updated Existing Article)
  {
    id: 'bpsc-71st-cce-2026',
    slug: 'bpsc-71st-combined-competitive-exam-2026-online-form',
    year: 2026,
    category: 'bihar',
    subcategory: 'State Civil Services',
    stateScope: 'Bihar',
    department: 'General Administration Dept, Govt of Bihar',
    organizationEn: 'Bihar Public Service Commission (BPSC)',
    organizationHi: 'बिहार लोक सेवा आयोग (BPSC)',
    postNameEn: '71st Integrated Combined Competitive Examination (CCE 2026)',
    postNameHi: '71वीं एकीकृत संयुक्त प्रतियोगी परीक्षा (CCE 2026)',
    titleEn: 'BPSC 71st CCE 2026 Notification, Exam Date, Syllabus & Online Application Form',
    titleHi: 'BPSC 71वीं CCE 2026 आधिकारिक अधिसूचना, परीक्षा तिथि, सिलेबस व ऑनलाइन आवेदन',
    shortSummaryEn: 'Bihar Public Service Commission conducts 71st CCE 2026 for recruitment to SDM, DSP, Revenue Officer, and State Administrative Services across Bihar with updated preliminary exam pattern.',
    shortSummaryHi: 'बिहार लोक सेवा आयोग द्वारा प्रशासनिक सेवा (SDM), पुलिस उपाधीक्षक (DSP), राजस्व अधिकारी व अन्य पदों हेतु 71वीं संयुक्त प्रतियोगी परीक्षा 2026 का आधिकारिक शेड्यूल व आवेदन प्रक्रिया।',
    
    advertisementNumber: 'Advt No. 71/2026-BPSC',
    notificationNumber: 'BPSC/Exam/2026/01',
    notificationDate: '2026-06-15',
    
    totalVacanciesOrAmount: '1,280+ Posts (Provisional)',
    vacancyBreakdown: {
      ur: '512',
      obc: '154',
      ebc: '230',
      ews: '128',
      sc: '204',
      st: '13',
      female: '35% Horizontal Reservation across all categories',
      total: '1280'
    },
    salaryPayScale: 'Level 7 & Level 9 (₹44,900 - ₹1,42,400 + DA, HRA & Medical)',

    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-06-15',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '15/06/2026',
      applicationStart: '01/07/2026',
      applicationLastDate: '31/08/2026',
      feePaymentLastDate: '31/08/2026',
      correctionStart: '01/09/2026',
      correctionLastDate: '07/09/2026',
      admitCardDate: 'October 2026',
      examDate: '15/11/2026 (Preliminary)',
      resultDate: 'December 2026 (Expected)'
    },

    applicationFee: {
      generalFee: '₹600/-',
      obcFee: '₹600/-',
      ewsFee: '₹600/-',
      scFee: '₹150/- (Bihar Domicile)',
      stFee: '₹150/- (Bihar Domicile)',
      female: '₹150/- (All Bihar Female Candidates)',
      scStPwd: '₹150/-',
      paymentMode: 'Online via Net Banking, Debit Card, Credit Card or UPI',
      feeExemptionNote: 'Bihar female and SC/ST candidates receive concession only with valid domicile & caste certificates.'
    },

    ageLimit: {
      minAge: '20, 21 or 22 Years (Post-wise)',
      maxAge: '37 Years (Male UR)',
      asOnDate: '01/08/2026',
      ageRelaxationRule: 'BC/EBC Male & Female: 40 Years; SC/ST: 42 Years; General Female: 40 Years',
      categoryRelaxation: {
        obc: '+3 Years (40 Years Max)',
        scSt: '+5 Years (42 Years Max)',
        female: '+3 Years (40 Years Max for UR Female)',
        pwd: '+10 Years'
      }
    },

    eligibility: [
      {
        postName: 'Administrative, Police & Allied Cadres',
        qualification: 'Bachelor Degree in Any Stream from a recognized University in India',
        eligibilityEn: 'Passed Graduation from any UGC-recognized University.',
        eligibilityHi: 'भारत के किसी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक डिग्री उत्तीर्ण।'
      }
    ],

    requiredDocuments: {
      en: [
        'Aadhaar Card or Photo Identity Proof',
        'Graduation Degree Certificate & Final Marksheet',
        'Matriculation (10th) Certificate for DOB verification',
        'Bihar Domicile Certificate (for fee concession & reservation)',
        'Caste/EWS Certificate issued by Bihar Competent Authority (CO/SDO)',
        'Recent High Resolution Passport Photo & Live Webcam Capture',
        'Scanned Signature in Hindi & English'
      ],
      hi: [
        'आधार कार्ड या फोटो पहचान पत्र',
        'स्नातक डिग्री प्रमाणपत्र एवं अंतिम वर्ष की अंकतालिका',
        'जन्म तिथि सत्यापन हेतु 10वीं का प्रमाणपत्र',
        'बिहार निवास प्रमाण पत्र (आरक्षण एवं शुल्क छूट हेतु)',
        'सक्षम प्राधिकारी (अंचल/अनुमंडल) द्वारा निर्गत जाति / EWS प्रमाण पत्र',
        'हालिया पासपोर्ट साइज फोटो व लाइव वेबकैम फोटो',
        'हिंदी एवं अंग्रेजी में स्पष्ट स्कैन किए गए हस्ताक्षर'
      ]
    },

    selectionProcess: {
      en: [
        'Stage 1: Preliminary Written Examination (Objective, 150 Marks, 2 Hours, Negative Marking: -0.33)',
        'Stage 2: Main Written Examination (Subjective, GS Paper 1, GS Paper 2, Essay & Hindi Qualifying)',
        'Stage 3: Personality Test / Interview (120 Marks)',
        'Stage 4: Document Verification & Medical Examination'
      ],
      hi: [
        'प्रथम चरण: प्रारंभिक लिखित परीक्षा (वस्तुनिष्ठ, 150 अंक, 2 घंटे, नेगेटिव मार्किंग -0.33)',
        'द्वितीय चरण: मुख्य लिखित परीक्षा (वर्णनात्मक, सामान्य अध्ययन 1, 2, निबंध व अनिवार्य हिंदी)',
        'तृतीय चरण: साक्षात्कार (120 अंक)',
        'चतुर्थ चरण: दस्तावेज सत्यापन एवं चिकित्सीय परीक्षण'
      ]
    },

    examPattern: {
      en: [
        'General Studies (Prelims): 150 Questions, 150 Marks, Duration: 2 Hours, Negative Marking 1/3rd (0.33 marks per wrong answer).',
        'Mains GS Paper 1: 300 Marks (3 Hours)',
        'Mains GS Paper 2: 300 Marks (3 Hours)',
        'Mains Essay Paper: 300 Marks (3 Hours)',
        'General Hindi: 100 Marks (Qualifying, 30% needed)'
      ],
      hi: [
        'प्रारंभिक परीक्षा (GS): 150 बहुविकल्पीय प्रश्न, 150 अंक, समय: 2 घंटे, नेगेटिव मार्किंग 1/3 (0.33 अंक)।',
        'मुख्य परीक्षा GS पेपर 1: 300 अंक (3 घंटे)',
        'मुख्य परीक्षा GS पेपर 2: 300 अंक (3 घंटे)',
        'मुख्य परीक्षा निबंध: 300 अंक (3 घंटे)',
        'सामान्य हिंदी: 100 अंक (क्वालिफाइंग, न्यूनतम 30% अनिवार्य)'
      ]
    },

    howToApply: {
      en: [
        'Visit BPSC official online portal at onlinebpsc.bihar.gov.in.',
        'Complete One Time Registration (OTR) with active Mobile Number and Email ID.',
        'Fill academic qualifications, personal details, and post preferences.',
        'Upload scanned documents and capture live webcam photograph.',
        'Pay the online application fee according to category and download the final submitted PDF (Hard Copy).'
      ],
      hi: [
        'BPSC के आधिकारिक पोर्टल onlinebpsc.bihar.gov.in पर जाएं।',
        'सक्रिय मोबाइल नंबर और ईमेल से वन टाइम रजिस्ट्रेशन (OTR) पूरा करें।',
        'शैक्षणिक योग्यता, व्यक्तिगत विवरण एवं पद वरीयता दर्ज करें।',
        'दस्तावेज अपलोड करें एवं लाइव वेबकैम फोटो कैप्चर करें।',
        'अपनी श्रेणी अनुसार शुल्क भुगतान कर फाइनल सबमिटेड आवेदन पत्र डाउनलोड कर सुरक्षित रखें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://onlinebpsc.bihar.gov.in',
      officialNotificationPdfUrl: 'https://www.bpsc.bih.nic.in',
      officialWebsiteUrl: 'https://www.bpsc.bih.nic.in'
    },

    primarySourceName: 'Bihar Public Service Commission Official Portal',
    primarySourceUrl: 'https://www.bpsc.bih.nic.in',
    fieldSources: {
      applicationLastDate: {
        sourceName: 'BPSC Official Exam Calendar 2026',
        sourceUrl: 'https://www.bpsc.bih.nic.in',
        verifiedAt: '2026-08-19',
        isOfficial: true
      },
      examDate: {
        sourceName: 'BPSC Official Exam Schedule',
        sourceUrl: 'https://www.bpsc.bih.nic.in',
        verifiedAt: '2026-08-19',
        isOfficial: true
      }
    },

    updateHistory: [
      {
        id: 'upd-bpsc-1',
        timestamp: '2026-08-19 10:30 IST',
        field: '2026 SEO Content Audit',
        oldValue: 'Partial Syllabus & Summary',
        newValue: 'Full 2026 CCE Exam Pattern, Syllabus, FAQs, and Date Verification',
        source: 'BPSC Official Gazette & Portal',
        sourceUrl: 'https://www.bpsc.bih.nic.in',
        verifiedBy: 'Content Manager 2026 Engine'
      }
    ],

    faqs: [
      {
        questionEn: 'What is the minimum educational qualification for BPSC 71st CCE 2026?',
        questionHi: 'BPSC 71वीं परीक्षा 2026 के लिए न्यूनतम शैक्षणिक योग्यता क्या है?',
        answerEn: 'Candidates must possess a Bachelor Degree (Graduation) in any stream from any recognized Indian university.',
        answerHi: 'उम्मीदवारों के पास भारत के किसी भी मान्यता प्राप्त विश्वविद्यालय से किसी भी संकाय में स्नातक (Graduation) डिग्री होनी चाहिए।'
      },
      {
        questionEn: 'Is there negative marking in BPSC 71st Prelims exam?',
        questionHi: 'क्या BPSC 71वीं प्रारंभिक परीक्षा में नेगेटिव मार्किंग है?',
        answerEn: 'Yes, 1/3rd (0.33 marks) negative marking is deducted for each incorrect answer.',
        answerHi: 'हाँ, प्रत्येक गलत उत्तर के लिए 1/3 (0.33 अंक) की नेगेटिव मार्किंग काटी जाती है।'
      },
      {
        questionEn: 'What is the cutoff date for age calculation in BPSC 2026?',
        questionHi: 'BPSC 2026 में आयु की गणना किस तिथि के आधार पर की जाएगी?',
        answerEn: 'The age will be calculated strictly as on 1st August 2026 (01/08/2026) as per official notification rules.',
        answerHi: 'आयु की गणना आधिकारिक अधिसूचना के अनुसार 1 अगस्त 2026 (01/08/2026) के आधार पर की जाएगी।'
      }
    ],
    tags: ['BPSC 71st', 'Bihar Govt Job', 'Civil Services', 'SDM', 'DSP', '2026 Vacancy'],
    seoKeywords: ['bpsc 71st notification 2026', 'bpsc exam date 2026', 'bihar civil services online form', 'bpsc syllabus 2026 pdf']
  },

  // 2. CSBC Bihar Police Constable 2026 (Updated Existing Article)
  {
    id: 'csbc-bihar-police-constable-2026',
    slug: 'bihar-police-constable-recruitment-2026-notification-admit-card',
    year: 2026,
    category: 'jobs',
    subcategory: 'Police Recruitment',
    stateScope: 'Bihar',
    department: 'Home (Police) Department, Govt of Bihar',
    organizationEn: 'Central Selection Board of Constable (CSBC)',
    organizationHi: 'केन्द्रीय चयन पर्षद (सिपाही भर्ती) CSBC बिहार',
    postNameEn: 'Bihar Police Constable Recruitment 2026',
    postNameHi: 'बिहार पुलिस सिपाही भर्ती 2026',
    titleEn: 'Bihar Police Constable 2026 Written Exam Schedule, City Intimation & Admit Card',
    titleHi: 'बिहार पुलिस सिपाही भर्ती 2026 लिखित परीक्षा तिथि, शहर सूचना व एडमिट कार्ड',
    shortSummaryEn: 'CSBC Bihar publishes the written examination dates and admit card downloading schedule for constable posts across all districts in Bihar.',
    shortSummaryHi: 'केन्द्रीय चयन पर्षद (सिपाही भर्ती) द्वारा बिहार के विभिन्न जिलों में सिपाही पदों की लिखित परीक्षा एवं एडमिट कार्ड का आधिकारिक शेड्यूल जारी किया गया है।',

    advertisementNumber: 'Advt No. 01/2026-CSBC',
    notificationNumber: 'CSBC/Notice/2026/08',
    notificationDate: '2026-07-10',

    totalVacanciesOrAmount: '19,500+ Posts',
    vacancyBreakdown: {
      ur: '7800',
      obc: '2340',
      ebc: '3510',
      ews: '1950',
      sc: '3120',
      st: '195',
      female: '35% Women Reservation Enforced',
      total: '19500'
    },
    salaryPayScale: 'Pay Matrix Level-3 (₹21,700 - ₹69,100)',

    computedStatus: 'ADMIT_CARD',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-07-10',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '10/07/2026',
      applicationStart: '15/07/2026',
      applicationLastDate: '20/08/2026',
      admitCardDate: 'Available for Download',
      examDate: 'September 2026 (Multiple Shifts)'
    },

    applicationFee: {
      generalObcEws: '₹675/-',
      scStPwd: '₹180/-',
      female: '₹180/- (Bihar Female)',
      paymentMode: 'Online Payment Gateway (Debit/Credit/UPI)'
    },

    ageLimit: {
      minAge: '18 Years',
      maxAge: '25 Years (General Male)',
      asOnDate: '01/08/2026',
      ageRelaxationRule: 'BC/EBC Male: 27 Yrs; BC/EBC Female: 28 Yrs; SC/ST: 30 Yrs'
    },

    eligibility: [
      {
        postName: 'Constable (सिपाही)',
        qualification: 'Intermediate (10+2) Pass from recognized Bihar Board or CBSE or equivalent',
        eligibilityEn: 'Passed 12th standard examination.',
        eligibilityHi: 'मान्यता प्राप्त बोर्ड से 12वीं (इंटरमीडिएट) उत्तीर्ण।'
      }
    ],

    requiredDocuments: {
      en: ['10+2 Intermediate Marksheet', '10th Marksheet for DOB', 'Bihar Domicile Certificate', 'Caste Certificate', 'Photo ID'],
      hi: ['12वीं की अंकतालिका', '10वीं का मूल प्रमाणपत्र', 'बिहार निवास प्रमाण पत्र', 'जाति प्रमाण पत्र', 'फोटो पहचान पत्र']
    },

    selectionProcess: {
      en: [
        'Stage 1: OMR-Based Written Examination (100 Questions, 100 Marks, Qualifying in nature - 30% minimum)',
        'Stage 2: Physical Efficiency Test (PET - Running 50 Marks, Shot Put 25 Marks, High Jump 25 Marks)',
        'Stage 3: Document Verification & Medical Fitness Test'
      ],
      hi: [
        'प्रथम चरण: ओएमआर आधारित लिखित परीक्षा (100 प्रश्न, 100 अंक, न्यूनतम 30% क्वालिफाइंग)',
        'द्वितीय चरण: शारीरिक दक्षता परीक्षा (PET - दौड़ 50 अंक, गोला फेंक 25 अंक, ऊंची कूद 25 अंक)',
        'तृतीय चरण: दस्तावेज सत्यापन एवं मेडिकल जांच'
      ]
    },

    examPattern: {
      en: [
        'Written Test: 100 MCQs, 100 Marks, 2 Hours.',
        'Subjects: Hindi, English, Mathematics, Social Science (History, Geo, Civics, Eco), Science (Physics, Chem, Bio), Current Affairs.',
        'Level of Questions: Class 10th (Matriculation) standard.',
        'Final Merit List is prepared STRICTLY based on marks obtained in Physical Efficiency Test (PET).'
      ],
      hi: [
        'लिखित परीक्षा: 100 वस्तुनिष्ठ प्रश्न, 100 अंक, 2 घंटे।',
        'विषय: हिंदी, अंग्रेजी, गणित, सामाजिक विज्ञान (इतिहास, भूगोल, नागरिक शास्त्र, अर्थशास्त्र), विज्ञान, समसामयिकी।',
        'प्रश्नों का स्तर: 10वीं कक्षा (मैट्रिक) स्तर।',
        'अंतिम मेधा सूची केवल शारीरिक दक्षता परीक्षा (PET) में प्राप्त अंकों पर बनेगी।'
      ]
    },

    howToApply: {
      en: [
        'Visit csbc.bihar.gov.in.',
        'Click on Bihar Police Tab and download the Admit Card Link.',
        'Enter Application Registration ID or Roll Number and Date of Birth to download PDF Hall Ticket.'
      ],
      hi: [
        'csbc.bihar.gov.in पर जाएं।',
        'बिहार पुलिस टैब में एडमिट कार्ड लिंक पर क्लिक करें।',
        'पंजीकरण संख्या अथवा रोल नंबर एवं जन्मतिथि दर्ज कर हॉल टिकट डाउनलोड करें।'
      ]
    },

    officialLinks: {
      admitCardUrl: 'https://csbc.bihar.gov.in',
      officialNotificationPdfUrl: 'https://csbc.bihar.gov.in',
      officialWebsiteUrl: 'https://csbc.bihar.gov.in'
    },

    primarySourceName: 'CSBC Bihar Official Website',
    primarySourceUrl: 'https://csbc.bihar.gov.in',
    fieldSources: {
      admitCardDate: {
        sourceName: 'CSBC Official Press Release',
        sourceUrl: 'https://csbc.bihar.gov.in',
        verifiedAt: '2026-08-19',
        isOfficial: true
      }
    },

    faqs: [
      {
        questionEn: 'Is the written test marks counted in final merit list?',
        questionHi: 'क्या लिखित परीक्षा के अंक अंतिम मेरिट सूची में जुड़ते हैं?',
        answerEn: 'No, the written test is only qualifying (minimum 30%). Merit list is prepared strictly based on Physical Test (PET) marks.',
        answerHi: 'नहीं, लिखित परीक्षा केवल क्वालिफाइंग है (न्यूनतम 30%)। अंतिम मेरिट केवल फिजिकल (PET) के 100 अंकों पर बनती है।'
      }
    ],
    tags: ['Bihar Police', 'CSBC Constable', 'Admit Card 2026', '12th Pass Job'],
    seoKeywords: ['bihar police constable admit card 2026', 'csbc exam date 2026', 'bihar police physical test pet', 'csbc 19500 bharti']
  },

  // 3. Medhasoft Bihar Post Matric Scholarship 2026 (Updated Existing Article)
  {
    id: 'medhasoft-bihar-post-matric-2026',
    slug: 'bihar-post-matric-scholarship-2026-online-apply-portal',
    year: 2026,
    category: 'scholarships',
    subcategory: 'State Student Financial Assistance',
    stateScope: 'Bihar',
    department: 'Backward & Extremely Backward Class / SC & ST Welfare Dept Bihar',
    organizationEn: 'Education Department, Government of Bihar',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार (PMS Online Portal)',
    postNameEn: 'Bihar Post Matric Scholarship (PMS 2026)',
    postNameHi: 'बिहार पोस्ट मैट्रिक स्कॉलरशिप 2026',
    titleEn: 'Bihar Post Matric Scholarship 2026 Online Application Form (SC / ST / BC / EBC)',
    titleHi: 'बिहार पोस्ट मैट्रिक छात्रवृत्ति 2026 ऑनलाइन आवेदन फॉर्म (SC/ST/BC/EBC)',
    shortSummaryEn: 'Government of Bihar invites online applications on PMS Online Portal from SC, ST, BC, and EBC students studying in Post-Matric (11th, 12th, ITI, Diploma, Graduation, PG & Professional Courses).',
    shortSummaryHi: 'बिहार सरकार द्वारा 10वीं के बाद (11वीं, 12वीं, स्नातक, आईटीआई, डिप्लोमा, पीजी व तकनीकी पाठ्यक्रमों) में अध्ययनरत SC, ST, BC व EBC छात्र-छात्राओं हेतु छात्रवृत्ति पोर्टल पर आवेदन आमंत्रित किए जा रहे हैं।',

    advertisementNumber: 'PMS-Bihar/2026-27/Scheme',
    notificationDate: '2026-07-01',

    totalVacanciesOrAmount: 'Up to ₹15,000 - ₹4,00,000 per annum based on Course Fee',
    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-07-01',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Active Now',
      applicationLastDate: '30/09/2026',
      scholarshipDisbursal: 'Direct DBT into Aadhaar Seeded Bank Account'
    },

    applicationFee: {
      generalObcEws: '₹0/- (Free)',
      scStPwd: '₹0/- (Free)',
      female: '₹0/- (Free)',
      paymentMode: 'No Application Fee'
    },

    eligibility: [
      {
        postName: 'Post Matric Students (Bihar Domicile)',
        qualification: 'Must be enrolled in 11th, 12th, BA, BSc, BCom, BTech, MBBS, B.Ed, Polytechnic, ITI or PG courses',
        eligibilityEn: 'Permanent resident of Bihar, belonging to SC, ST, BC, or EBC categories, with family annual income not exceeding ₹3,00,000.',
        eligibilityHi: 'बिहार के स्थायी निवासी SC, ST, BC या EBC वर्ग के छात्र जिनकी पारिवारिक वार्षिक आय ₹3,00,000 से कम हो।'
      }
    ],

    requiredDocuments: {
      en: [
        'Aadhaar Card linked with Mobile Number and NPCI-seeded Bank Account',
        'Bihar Domicile Certificate (निवास प्रमाण पत्र)',
        'Caste Certificate (जाति प्रमाण पत्र)',
        'Current Financial Year Income Certificate (आय प्रमाण पत्र)',
        'Bonafide Certificate from Current School / College',
        'Fee Receipt issued by Institution for Current Academic Year',
        'Previous Year Passing Marksheet'
      ],
      hi: [
        'आधार कार्ड (मोबाइल नंबर व NPCI बैंक खाते से लिंक)',
        'बिहार निवास प्रमाण पत्र',
        'जाति प्रमाण पत्र',
        'वर्तमान वित्तीय वर्ष का वैध आय प्रमाण पत्र',
        'संस्थान द्वारा जारी बोनाफाइड सर्टिफिकेट',
        'संस्थान की वर्तमान सत्र की फीस रसीद',
        'पिछली कक्षा की उत्तीर्ण अंकतालिका'
      ]
    },

    howToApply: {
      en: [
        'Go to pmsonline.bih.nic.in or medhasoft.bih.nic.in.',
        'Choose Student Registration (BC/EBC or SC/ST Portal).',
        'Verify Aadhaar details and generate User ID / Password.',
        'Login, fill academic course details, upload Bonafide & Fee Receipt, and submit for Institution verification.'
      ],
      hi: [
        'pmsonline.bih.nic.in या medhasoft.bih.nic.in पर जाएं।',
        'छात्र पंजीकरण (BC/EBC या SC/ST) का चयन करें।',
        'आधार विवरण सत्यापित कर यूजर आईडी व पासवर्ड प्राप्त करें।',
        'लॉगिन कर कोर्स का विवरण भरें, बोनाफाइड व फीस रसीद अपलोड कर सबमिट करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://pmsonline.bih.nic.in',
      officialWebsiteUrl: 'https://medhasoft.bih.nic.in'
    },

    primarySourceName: 'Bihar PMS Online / Medhasoft Official Portal',
    primarySourceUrl: 'https://pmsonline.bih.nic.in',
    faqs: [
      {
        questionEn: 'Can General category students apply for Bihar Post Matric Scholarship?',
        questionHi: 'क्या सामान्य वर्ग के छात्र बिहार पोस्ट मैट्रिक स्कॉलरशिप में आवेदन कर सकते हैं?',
        answerEn: 'No, Bihar PMS Online is strictly for SC, ST, BC, and EBC students. General category students can apply for Central NSP schemes or Bihar Student Credit Card.',
        answerHi: 'नहीं, बिहार पोस्ट मैट्रिक पोर्टल केवल SC, ST, BC और EBC छात्रों हेतु है। सामान्य वर्ग के छात्र नेशनल स्कॉलरशिप पोर्टल (NSP) या बिहार स्टूडेंट क्रेडिट कार्ड योजना का लाभ ले सकते हैं।'
      }
    ],
    tags: ['Bihar Scholarship', 'Post Matric', 'Medhasoft', 'DBT Bihar', '2026 Scheme'],
    seoKeywords: ['bihar post matric scholarship 2026', 'pmsonline bihar nic in', 'medhasoft scholarship status', 'bc ebc scholarship bihar']
  },

  // 4. SSC CGL 2026 (Updated Existing Article)
  {
    id: 'ssc-cgl-2026-notification',
    slug: 'ssc-cgl-2026-notification-exam-dates-tier-1',
    year: 2026,
    category: 'central',
    subcategory: 'Central Govt Officers',
    stateScope: 'Central',
    department: 'Department of Personnel and Training (DoPT), Govt of India',
    organizationEn: 'Staff Selection Commission (SSC)',
    organizationHi: 'कर्मचारी चयन आयोग (SSC Central)',
    postNameEn: 'Combined Graduate Level Examination (SSC CGL 2026)',
    postNameHi: 'संयुक्त स्नातक स्तरीय परीक्षा (SSC CGL 2026)',
    titleEn: 'SSC CGL 2026 Notification, Vacancy Details, Tier-1 Exam Dates & Eligibility',
    titleHi: 'SSC CGL 2026 आधिकारिक नोटिफिकेशन, कुल पद, टियर-1 परीक्षा शेड्यूल व योग्यता',
    shortSummaryEn: 'SSC conducts the annual Combined Graduate Level Examination (CGL 2026) for Inspector, Assistant Section Officer (ASO), Tax Assistant, Sub-Inspector, and Auditor posts in Ministries.',
    shortSummaryHi: 'कर्मचारी चयन आयोग द्वारा भारत सरकार के मंत्रालयों व विभागों में इंस्पेक्टर, सहायक अनुभाग अधिकारी (ASO), टैक्स असिस्टेंट व ऑडिटर पदों पर भर्ती का आधिकारिक विवरण।',

    advertisementNumber: 'SSC/HQ/CGL-2026/Notice',
    notificationDate: '2026-06-24',

    totalVacanciesOrAmount: '14,000+ Posts (Estimated All-India)',
    salaryPayScale: 'Pay Level 4, 5, 6, 7 & 8 (₹25,500 to ₹1,51,100)',

    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-06-24',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '24/06/2026',
      applicationStart: 'Active on ssc.gov.in',
      applicationLastDate: '24/08/2026',
      feePaymentLastDate: '25/08/2026',
      correctionWindow: '28/08/2026 to 30/08/2026',
      examDate: 'September / October 2026 (CBT Tier-1)'
    },

    applicationFee: {
      generalObcEws: '₹100/-',
      scStPwd: '₹0/- (Exempted)',
      female: '₹0/- (Exempted for all Women)',
      paymentMode: 'BHIM UPI, Net Banking, Visa, MasterCard, Maestro, RuPay'
    },

    ageLimit: {
      minAge: '18 to 20 Years',
      maxAge: '27 to 32 Years (Post-dependent)',
      asOnDate: '01/08/2026',
      ageRelaxationRule: 'OBC: +3 Years, SC/ST: +5 Years, PwD: +10 Years'
    },

    eligibility: [
      {
        postName: 'All Graduate Posts (ASO, Inspector, Auditor, TA)',
        qualification: 'Bachelor Degree from a recognized University or equivalent institute in India',
        eligibilityEn: 'Graduation in any discipline.',
        eligibilityHi: 'किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक उत्तीर्ण।'
      }
    ],

    selectionProcess: {
      en: [
        'Tier-1: Computer Based Examination (Objective, 100 Questions, 200 Marks, 1 Hour, Negative Marking: -0.50)',
        'Tier-2: Computer Based Examination (Paper-I: Math, Reasoning, English, General Awareness, Computer Knowledge Module & Data Entry Speed Test DEST)',
        'Document Verification by User Departments'
      ],
      hi: [
        'टियर-1: कंप्यूटर आधारित परीक्षा (100 प्रश्न, 200 अंक, 1 घंटा, नेगेटिव मार्किंग -0.50)',
        'टियर-2: कंप्यूटर आधारित परीक्षा (गणित, रीजनिंग, अंग्रेजी, सामान्य जागरूकता, कंप्यूटर टेस्ट व टाइपिंग टेस्ट DEST)',
        'विभाग द्वारा दस्तावेज सत्यापन'
      ]
    },

    howToApply: {
      en: [
        'Visit official portal ssc.gov.in.',
        'Complete One-Time Registration (OTR) if not already registered.',
        'Fill online form, capture live photograph using official SSC app/webcam, and submit fee.'
      ],
      hi: [
        'आधिकारिक पोर्टल ssc.gov.in पर जाएं।',
        'ओटीआर (OTR) विवरण भरें अथवा लॉगिन करें।',
        'आवेदन फॉर्म भरें, लाइव फोटो कैप्चर करें और शुल्क का भुगतान कर रसीद प्राप्त करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://ssc.gov.in',
      officialNotificationPdfUrl: 'https://ssc.gov.in',
      officialWebsiteUrl: 'https://ssc.gov.in'
    },

    primarySourceName: 'Staff Selection Commission Official Portal',
    primarySourceUrl: 'https://ssc.gov.in',
    faqs: [
      {
        questionEn: 'Is live photo capture mandatory for SSC CGL 2026?',
        questionHi: 'क्या SSC CGL 2026 में लाइव वेबकैम फोटो अनिवार्य है?',
        answerEn: 'Yes, SSC now requires live webcam/mobile app photo capture with proper lighting and no cap/spectacles.',
        answerHi: 'हाँ, कर्मचारी चयन आयोग की नई वेबसाइट पर लाइव फोटो कैप्चर करना अनिवार्य कर दिया गया है।'
      }
    ],
    tags: ['SSC CGL', 'Govt Job 2026', 'Graduate Job', 'Central SSC', 'Inspector Post'],
    seoKeywords: ['ssc cgl 2026 notification', 'ssc cgl tier 1 exam date', 'ssc otr online form', 'ssc vacancy 2026']
  },

  // 5. BSEB Bihar STET 2026 (Updated Existing Article)
  {
    id: 'bseb-bihar-stet-2026',
    slug: 'bihar-stet-2026-answer-key-result-scorecard',
    year: 2026,
    category: 'results',
    subcategory: 'Teacher Eligibility',
    stateScope: 'Bihar',
    department: 'Education Department, Government of Bihar',
    organizationEn: 'Bihar School Examination Board (BSEB)',
    organizationHi: 'बिहार विद्यालय परीक्षा समिति (BSEB पटना)',
    postNameEn: 'Bihar Secondary Teacher Eligibility Test (STET 2026)',
    postNameHi: 'बिहार माध्यमिक शिक्षक पात्रता परीक्षा (STET 2026)',
    titleEn: 'Bihar STET 2026 Official Answer Key, Objection Link & Result Scorecard',
    titleHi: 'बिहार STET 2026 आधिकारिक उत्तर कुंजी (Answer Key), आपत्ति लिंक व रिजल्ट',
    shortSummaryEn: 'BSEB Patna releases the Computer Based Test (CBT) response sheet, provisional answer keys, and score card downloading link for Bihar STET Paper 1 & Paper 2 candidates.',
    shortSummaryHi: 'बिहार विद्यालय परीक्षा समिति द्वारा STET 2026 पेपर-1 (माध्यमिक) एवं पेपर-2 (उच्च माध्यमिक) की प्रोविजनल उत्तर कुंजी व परिणाम स्कोरकार्ड जारी कर दिए गए हैं।',

    advertisementNumber: 'BSEB/STET/Exam-2026',
    notificationDate: '2026-05-10',

    computedStatus: 'RESULT',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-05-10',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      examDate: 'Conducted in CBT Mode',
      answerKeyDate: 'Released Online',
      objectionLastDate: 'Closed',
      resultDate: 'Declared & Available for Scorecard Download'
    },

    eligibility: [
      {
        postName: 'Paper 1 (Class 9-10) & Paper 2 (Class 11-12)',
        qualification: 'B.Ed with Graduation / Post Graduation in concerned subject',
        eligibilityEn: 'Passed B.Ed with requisite subject specialization.',
        eligibilityHi: 'संबंधित विषय में स्नातक/स्नातकोत्तर के साथ B.Ed उत्तीर्ण।'
      }
    ],

    howToApply: {
      en: [
        'Go to biharboardonline.bihar.gov.in or secondary.biharboardonline.com.',
        'Click on Bihar STET 2026 Result Link.',
        'Enter Application Number and Date of Birth (DD-MM-YYYY) to view and download Score Card.'
      ],
      hi: [
        'biharboardonline.bihar.gov.in पर जाएं।',
        'बिहार STET 2026 रिजल्ट लिंक पर क्लिक करें।',
        'आवेदन संख्या एवं जन्मतिथि दर्ज कर अपना स्कोरकार्ड डाउनलोड करें।'
      ]
    },

    officialLinks: {
      resultUrl: 'https://biharboardonline.bihar.gov.in',
      answerKeyUrl: 'https://biharboardonline.bihar.gov.in',
      officialWebsiteUrl: 'https://biharboardonline.bihar.gov.in'
    },

    primarySourceName: 'BSEB Official Portal Patna',
    primarySourceUrl: 'https://biharboardonline.bihar.gov.in',
    faqs: [
      {
        questionEn: 'What is the validity of Bihar STET Certificate?',
        questionHi: 'बिहार STET प्रमाणपत्र की वैधता कितनी होती है?',
        answerEn: 'Bihar STET Certificate is valid for lifetime as per NCTE and Bihar Education Department regulations.',
        answerHi: 'NCTE एवं बिहार शिक्षा विभाग के नियमानुसार STET प्रमाणपत्र की वैधता आजीवन (Lifetime) मान्य है।'
      }
    ],
    tags: ['Bihar STET', 'BSEB Result', 'Teacher Exam', 'Scorecard 2026'],
    seoKeywords: ['bihar stet result 2026', 'bseb stet scorecard download', 'stet answer key biharboardonline']
  },

  // 6. PM Kisan 2026 (Updated Existing Article)
  {
    id: 'pm-kisan-19th-installment-2026',
    slug: 'pm-kisan-samman-nidhi-2026-beneficiary-status-ekyc',
    year: 2026,
    category: 'schemes',
    subcategory: 'Farmer Financial Welfare',
    stateScope: 'Central',
    department: 'Ministry of Agriculture and Farmers Welfare, Govt of India',
    organizationEn: 'PM Kisan Samman Nidhi',
    organizationHi: 'प्रधानमंत्री किसान सम्मान निधि योजना',
    postNameEn: 'PM Kisan 2026 Beneficiary Status & eKYC Update',
    postNameHi: 'पीएम किसान सम्मान निधि 2026 लाभार्थी स्थिति व e-KYC',
    titleEn: 'PM Kisan Samman Nidhi 2026: ₹2,000 Installment Status, Beneficiary List & OTP eKYC',
    titleHi: 'PM किसान सम्मान निधि 2026: ₹2,000 किस्त स्टेटस, लाभार्थी सूची व आधार eKYC',
    shortSummaryEn: 'Check PM Kisan Samman Nidhi ₹2,000 direct benefit transfer (DBT) installment credit status, village-wise beneficiary list, and complete biometric / OTP based e-KYC on official portal.',
    shortSummaryHi: 'पीएम किसान योजना के अंतर्गत पात्र किसान परिवारों को मिलने वाली ₹2,000 की किस्त का बैंक खाता स्थिति, ग्रामवार सूची व आधार eKYC करने की आधिकारिक प्रक्रिया।',

    advertisementNumber: 'DBT-PMKISAN/2026',
    totalVacanciesOrAmount: '₹6,000 per year (in 3 installments of ₹2,000 each)',
    
    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: false,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-01-10',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Continuous Online Scheme',
      scholarshipDisbursal: 'Transferred directly via PFMS / Aadhaar DBT'
    },

    applicationFee: {
      generalObcEws: '₹0/- (Free on Portal)',
      scStPwd: '₹0/- (Free)',
      female: '₹0/- (Free)',
      paymentMode: 'Free of Cost'
    },

    eligibility: [
      {
        postName: 'Small & Marginal Landholding Farmer Families',
        qualification: 'Cultivable agricultural land in applicant or family name',
        eligibilityEn: 'Farmer families having cultivable landholding, Aadhaar-linked active bank account with completed eKYC.',
        eligibilityHi: 'कृषि योग्य भूमि वाले किसान परिवार जिनका आधार व बैंक खाता NPCI से डीबीटी सक्रिय हो।'
      }
    ],

    howToApply: {
      en: [
        'Visit pmkisan.gov.in.',
        'Under Farmers Corner, click on "Beneficiary Status" or "New Farmer Registration".',
        'Enter Registration Number or Aadhaar Number to verify installment credit status.'
      ],
      hi: [
        'pmkisan.gov.in पर जाएं।',
        'Farmers Corner में "Beneficiary Status" अथवा "e-KYC" पर क्लिक करें।',
        'पंजीकरण संख्या या आधार संख्या दर्ज कर स्थिति की जांच करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://pmkisan.gov.in',
      officialWebsiteUrl: 'https://pmkisan.gov.in'
    },

    primarySourceName: 'Ministry of Agriculture Govt of India',
    primarySourceUrl: 'https://pmkisan.gov.in',
    faqs: [
      {
        questionEn: 'How to complete PM Kisan eKYC online?',
        questionHi: 'पीएम किसान eKYC ऑनलाइन कैसे पूरा करें?',
        answerEn: 'Go to pmkisan.gov.in, click on OTP Based eKYC, enter your 12-digit Aadhaar number and submit OTP received on Aadhaar-linked mobile number.',
        answerHi: 'pmkisan.gov.in पर जाकर OTP Based eKYC पर क्लिक करें, 12 अंकों का आधार नंबर दर्ज करें और मोबाइल पर प्राप्त ओटीपी डालकर सबमिट करें।'
      }
    ],
    tags: ['PM Kisan', 'Farmer Scheme', 'DBT', 'eKYC', 'Central Scheme 2026'],
    seoKeywords: ['pm kisan status 2026', 'pm kisan ekyc online', 'pm kisan beneficiary list', 'pm kisan 19th installment date']
  },

  // 7. NEW ARTICLE: BSSC 2nd Inter Level Exam 2026
  {
    id: 'bssc-inter-level-cce-2026',
    slug: 'bssc-2nd-inter-level-exam-date-admit-card-2026',
    year: 2026,
    category: 'bihar',
    subcategory: 'State Clerical & Revenue Cadre',
    stateScope: 'Bihar',
    department: 'General Administration & Revenue Dept, Govt of Bihar',
    organizationEn: 'Bihar Staff Selection Commission (BSSC)',
    organizationHi: 'बिहार कर्मचारी चयन आयोग (BSSC पटना)',
    postNameEn: '2nd Inter Level Combined Competitive Examination (12,199 Posts)',
    postNameHi: 'द्वितीय इंटर स्तरीय संयुक्त प्रतियोगी परीक्षा 2026 (12,199 पद)',
    titleEn: 'BSSC 2nd Inter Level Exam Date 2026, Admit Card & Form Status Check',
    titleHi: 'BSSC द्वितीय इंटर स्तरीय परीक्षा तिथि 2026, एडमिट कार्ड व फॉर्म स्थिति जांच',
    shortSummaryEn: 'Bihar Staff Selection Commission (BSSC) issues important updates for 12,199 Revenue Employee (Rajaswa Karamchari), Panchayat Secretary, and Clerk vacancies.',
    shortSummaryHi: 'बिहार कर्मचारी चयन आयोग द्वारा 12,199 राजस्व कर्मचारी, पंचायत सचिव व क्लर्क पदों हेतु द्वितीय इंटर स्तरीय परीक्षा तिथि व एडमिट कार्ड का आधिकारिक अपडेट।',

    advertisementNumber: 'Advt No. 02/23 (2026 Stage)',
    notificationDate: '2026-07-20',
    totalVacanciesOrAmount: '12,199 Posts',
    vacancyBreakdown: {
      ur: '5064',
      obc: '1249',
      ebc: '1884',
      ews: '1090',
      sc: '1376',
      st: '76',
      female: '35% Reservation for Bihar Women',
      total: '12199'
    },
    salaryPayScale: 'Pay Level-2 & Level-3 (₹19,900 - ₹69,100)',

    computedStatus: 'ADMIT_CARD',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-07-20',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Closed (Registration Phase Complete)',
      correctionWindow: 'Closed',
      admitCardDate: 'To be Released on bssc.bihar.gov.in',
      examDate: 'October / November 2026 (PT Exam Expected)'
    },

    applicationFee: {
      generalObcEws: '₹540/- (During Registration)',
      scStPwd: '₹135/-',
      female: '₹135/- (Bihar Domicile)',
      paymentMode: 'Online Payment Mode'
    },

    ageLimit: {
      minAge: '18 Years',
      maxAge: '37 Years (Male UR)',
      asOnDate: '01/08/2023 (As per original notification rules)',
      ageRelaxationRule: 'BC/EBC: 40 Years, SC/ST: 42 Years, UR Female: 40 Years'
    },

    eligibility: [
      {
        postName: 'Revenue Staff, Panchayat Secretary, LDC',
        qualification: '10+2 (Intermediate) Passed from recognized Board with Computer/Typing proficiency for clerical posts',
        eligibilityEn: 'Passed 12th standard (Intermediate) from any recognized Board in India.',
        eligibilityHi: 'भारत के किसी मान्यता प्राप्त बोर्ड से इंटरमीडिएट (12वीं) उत्तीर्ण।'
      }
    ],

    selectionProcess: {
      en: [
        'Stage 1: Preliminary Written Exam (Objective, 150 Questions, 600 Marks, 2 Hours 15 Minutes, 1/4th Negative Marking)',
        'Stage 2: Main Written Examination',
        'Stage 3: Typing & Computer Proficiency Test (For typing posts)',
        'Stage 4: Document Verification'
      ],
      hi: [
        'प्रथम चरण: प्रारंभिक लिखित परीक्षा (वस्तुनिष्ठ, 150 प्रश्न, 600 अंक, 2 घंटे 15 मिनट, 1/4 नेगेटिव मार्किंग)',
        'द्वितीय चरण: मुख्य परीक्षा',
        'तृतीय चरण: हिंदी/अंग्रेजी टाइपिंग एवं कंप्यूटर टेस्ट (टाइपिंग पदों हेतु)',
        'चतुर्थ चरण: मूल प्रमाणपत्र सत्यापन (DV)'
      ]
    },

    examPattern: {
      en: [
        'General Studies: 50 Questions (200 Marks)',
        'General Science & Mathematics: 50 Questions (200 Marks)',
        'Comprehension / Mental Ability / Reasoning: 50 Questions (200 Marks)',
        'Total: 150 Questions, 600 Marks, 4 Marks for correct answer, 1 mark deduction for wrong answer.'
      ],
      hi: [
        'सामान्य अध्ययन: 50 प्रश्न (200 अंक)',
        'सामान्य विज्ञान एवं गणित: 50 प्रश्न (200 अंक)',
        'मानसिक क्षमता / रीजनिंग: 50 प्रश्न (200 अंक)',
        'कुल: 150 प्रश्न, 600 अंक, प्रत्येक सही उत्तर पर 4 अंक, गलत उत्तर पर 1 अंक कटेगा।'
      ]
    },

    howToApply: {
      en: [
        'Visit official portal bssc.bihar.gov.in.',
        'Navigate to Notice Board tab.',
        'Click on Link for Advt No 02/23 Exam Date / Admit Card.',
        'Enter Registration Number and Password/DOB to download hall ticket.'
      ],
      hi: [
        'bssc.bihar.gov.in पर जाएं।',
        'Notice Board सेक्शन में जाएं।',
        'विज्ञापन संख्या 02/23 एडमिट कार्ड लिंक पर क्लिक करें।',
        'पंजीकरण संख्या और जन्मतिथि डालकर प्रवेश पत्र डाउनलोड करें।'
      ]
    },

    officialLinks: {
      officialNotificationPdfUrl: 'https://bssc.bihar.gov.in',
      officialWebsiteUrl: 'https://bssc.bihar.gov.in',
      admitCardUrl: 'https://bssc.bihar.gov.in'
    },

    primarySourceName: 'BSSC Official Portal Patna',
    primarySourceUrl: 'https://bssc.bihar.gov.in',
    faqs: [
      {
        questionEn: 'How many questions are asked in BSSC Inter Level Prelims?',
        questionHi: 'BSSC इंटर स्तरीय प्रारंभिक परीक्षा में कुल कितने प्रश्न होते हैं?',
        answerEn: 'There are 150 objective multiple-choice questions for 600 marks, with 1 mark negative marking for each incorrect attempt.',
        answerHi: 'कुल 150 बहुविकल्पीय प्रश्न 600 अंकों के होते हैं, जिसमें प्रत्येक गलत उत्तर पर 1 अंक काटा जाता है।'
      }
    ],
    tags: ['BSSC Inter Level', 'Bihar Job 2026', 'Rajaswa Karamchari', 'Panchayat Sachiv', '12th Pass'],
    seoKeywords: ['bssc 2nd inter level exam date 2026', 'bssc inter level admit card', 'bssc 12199 vacancy status', 'bssc syllabus pdf']
  },

  // 8. NEW ARTICLE: BPSSC Bihar Police Sub-Inspector (Daroga) 2026
  {
    id: 'bpssc-bihar-daroga-si-2026',
    slug: 'bihar-police-si-daroga-recruitment-2026-notification-apply',
    year: 2026,
    category: 'jobs',
    subcategory: 'Police Officers',
    stateScope: 'Bihar',
    department: 'Home (Police) Department, Govt of Bihar',
    organizationEn: 'Bihar Police Sub-ordinate Services Commission (BPSSC)',
    organizationHi: 'बिहार पुलिस अवर सेवा आयोग (BPSSC पटना)',
    postNameEn: 'Bihar Police Sub-Inspector (Daroga SI 2026)',
    postNameHi: 'बिहार पुलिस सब इंस्पेक्टर (दारोगा भर्ती 2026)',
    titleEn: 'Bihar Police Daroga SI 2026 Notification, 1,275+ Vacancies, Physical Standards & Apply Online',
    titleHi: 'बिहार पुलिस दारोगा (SI) भर्ती 2026 आधिकारिक नोटिफिकेशन, कुल पद, शारीरिक मानक व आवेदन',
    shortSummaryEn: 'BPSSC announces recruitment of Sub-Inspectors (SI) in Bihar Police. Graduate candidates can apply online for preliminary and physical eligibility tests.',
    shortSummaryHi: 'बिहार पुलिस अवर सेवा आयोग (BPSSC) द्वारा बिहार पुलिस में पुलिस अवर निरीक्षक (दारोगा) पदों हेतु भर्ती प्रक्रिया का आधिकारिक विवरण व शारीरिक दक्षता मापदंड।',

    advertisementNumber: 'Advt No. 02/2026-BPSSC',
    notificationDate: '2026-08-01',
    totalVacanciesOrAmount: '1,275+ Posts (Estimated)',
    salaryPayScale: 'Pay Level-6 (₹35,400 - ₹1,12,400)',

    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-08-01',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '01/08/2026',
      applicationStart: 'Active on bpssc.bihar.gov.in',
      applicationLastDate: '15/09/2026',
      feePaymentLastDate: '15/09/2026',
      examDate: 'November / December 2026 (Prelims CBT/OMR)'
    },

    applicationFee: {
      generalObcEws: '₹700/-',
      scStPwd: '₹400/-',
      female: '₹400/- (Bihar Female)',
      paymentMode: 'Online via Net Banking / Card / UPI'
    },

    ageLimit: {
      minAge: '20 Years',
      maxAge: '37 Years (Male UR)',
      asOnDate: '01/08/2026',
      ageRelaxationRule: 'BC/EBC Male & Female: 40 Years; SC/ST: 42 Years; UR Female: 40 Years'
    },

    eligibility: [
      {
        postName: 'Police Sub-Inspector (पुलिस अवर निरीक्षक)',
        qualification: 'Graduation (Bachelor Degree) in any stream from recognized Indian University',
        eligibilityEn: 'Passed Bachelor Degree from UGC recognized institution.',
        eligibilityHi: 'मान्यता प्राप्त विश्वविद्यालय से किसी भी संकाय में स्नातक डिग्री।'
      }
    ],

    selectionProcess: {
      en: [
        'Stage 1: Preliminary Written Exam (100 Questions, 200 Marks, 2 Hours, Negative Marking 0.2 marks)',
        'Stage 2: Main Written Exam (Paper 1: General Hindi 200 Marks qualifying; Paper 2: General Studies 200 Marks)',
        'Stage 3: Physical Efficiency & Measurement Test (Running, High Jump, Long Jump, Shot Put)',
        'Stage 4: Document Verification & Medical Exam'
      ],
      hi: [
        'प्रथम चरण: प्रारंभिक लिखित परीक्षा (100 प्रश्न, 200 अंक, 2 घंटे, नेगेटिव मार्किंग 0.2 अंक)',
        'द्वितीय चरण: मुख्य लिखित परीक्षा (पेपर 1: सामान्य हिंदी 200 अंक क्वालिफाइंग; पेपर 2: सामान्य अध्ययन 200 अंक)',
        'तृतीय चरण: शारीरिक माप व दक्षता परीक्षा (दौड़, ऊंची कूद, लंबी कूद, गोला फेंक)',
        'चतुर्थ चरण: दस्तावेज सत्यापन व चिकित्सीय परीक्षण'
      ]
    },

    howToApply: {
      en: [
        'Visit bpssc.bihar.gov.in.',
        'Click on Advt 02/2026 Online Application portal.',
        'Register with Mobile & Email, pay application fee, and submit applicant details.'
      ],
      hi: [
        'bpssc.bihar.gov.in पर जाएं।',
        'दारोगा भर्ती ऑनलाइन आवेदन लिंक पर क्लिक करें।',
        'मोबाइल नंबर व ईमेल से रजिस्ट्रेशन करें, शुल्क का भुगतान कर आवेदन पत्र सबमिट करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://bpssc.bihar.gov.in',
      officialNotificationPdfUrl: 'https://bpssc.bihar.gov.in',
      officialWebsiteUrl: 'https://bpssc.bihar.gov.in'
    },

    primarySourceName: 'BPSSC Official Portal Patna',
    primarySourceUrl: 'https://bpssc.bihar.gov.in',
    faqs: [
      {
        questionEn: 'What is the physical height requirement for Bihar Police SI Male candidates?',
        questionHi: 'बिहार पुलिस दारोगा भर्ती में पुरुष अभ्यर्थियों के लिए न्यूनतम ऊंचाई क्या है?',
        answerEn: 'General & BC category male candidates require 165 cm minimum height; EBC, SC & ST male candidates require 160 cm; all female candidates require 155 cm.',
        answerHi: 'सामान्य व पिछड़ा वर्ग (BC) पुरुषों हेतु 165 सेमी, अत्यंत पिछड़ा (EBC), SC व ST पुरुषों हेतु 160 सेमी तथा सभी महिलाओं हेतु 155 सेमी न्यूनतम ऊंचाई अनिवार्य है।'
      }
    ],
    tags: ['Bihar Daroga', 'BPSSC SI', 'Bihar Police 2026', 'Graduate Police Job'],
    seoKeywords: ['bihar police daroga vacancy 2026', 'bpssc si notification 2026', 'bihar daroga physical eligibility', 'bpssc online apply']
  },

  // 9. NEW ARTICLE: Bihar Mukhyamantri Kanya Utthan Yojana 2026
  {
    id: 'bihar-kanya-utthan-yojana-2026',
    slug: 'bihar-mukhyamantri-kanya-utthan-yojana-2026-graduation-apply',
    year: 2026,
    category: 'schemes',
    subcategory: 'Women Education & DBT Incentive',
    stateScope: 'Bihar',
    department: 'Education & Social Welfare Dept, Govt of Bihar',
    organizationEn: 'Education Department, Government of Bihar',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार (Medhasoft)',
    postNameEn: 'Mukhyamantri Kanya Utthan Yojana (Graduation & Inter ₹50,000 / ₹25,000)',
    postNameHi: 'मुख्यमंत्री कन्या उत्थान योजना 2026 (स्नातक व इंटर पास प्रोत्साहन राशि)',
    titleEn: 'Bihar Mukhyamantri Kanya Utthan Yojana 2026: ₹50,000 Graduation & ₹25,000 12th Pass Online Apply',
    titleHi: 'बिहार मुख्यमंत्री कन्या उत्थान योजना 2026: स्नातक उत्तीर्ण ₹50,000 व इंटर पास ₹25,000 ऑनलाइन आवेदन',
    shortSummaryEn: 'Government of Bihar grants ₹50,000 to unmarried/married girls passing Graduation and ₹25,000 to unmarried girls passing Intermediate 12th from Bihar institutions.',
    shortSummaryHi: 'बिहार सरकार द्वारा राज्य के विश्वविद्यालयों से स्नातक उत्तीर्ण छात्राओं को ₹50,000 तथा बिहार बोर्ड से 12वीं उत्तीर्ण अविवाहित छात्राओं को ₹25,000 की डीबीटी प्रोत्साहन राशि।',

    advertisementNumber: 'MKUY-Medhasoft/2026-Scheme',
    notificationDate: '2026-06-01',
    totalVacanciesOrAmount: '₹50,000 (Graduation) / ₹25,000 (12th Pass)',
    
    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-06-01',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Active on medhasoft.bih.nic.in',
      applicationLastDate: '31/10/2026',
      scholarshipDisbursal: 'Direct DBT into Aadhaar Seeded Bank Account'
    },

    applicationFee: {
      generalObcEws: '₹0/- (Free of Cost)',
      scStPwd: '₹0/- (Free)',
      female: '₹0/- (Free)',
      paymentMode: 'No Fee Required'
    },

    eligibility: [
      {
        postName: 'Graduation Pass Incentive (₹50,000)',
        qualification: 'Passed Graduation (BA, BSc, BCom, BTech, etc.) from recognized University in Bihar',
        eligibilityEn: 'Female resident of Bihar who successfully passed graduation degree.',
        eligibilityHi: 'बिहार की निवासी छात्रा जिसने बिहार के किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक उत्तीर्ण किया हो।'
      },
      {
        postName: '12th Intermediate Pass Incentive (₹25,000)',
        qualification: 'Passed 12th Intermediate from BSEB Bihar Board (Unmarried)',
        eligibilityEn: 'Unmarried girl student passing 12th from BSEB.',
        eligibilityHi: 'बिहार बोर्ड (BSEB) से 12वीं उत्तीर्ण अविवाहित छात्रा।'
      }
    ],

    requiredDocuments: {
      en: [
        'Aadhaar Card (Aadhaar number seeded with bank account via NPCI)',
        'Graduation Final Year Marksheet / 12th Marksheet & Admit Card',
        'Bihar Residential (Domicile) Certificate in candidate name',
        'Bank Passbook (Account must be in Bihar only & in candidate single name)',
        'Mobile Number and Email ID for OTP verification'
      ],
      hi: [
        'आधार कार्ड (NPCI से बैंक खाता लिंक अनिवार्य)',
        'स्नातक अंतिम वर्ष की अंकतालिका / 12वीं की मार्कशीट व एडमिट कार्ड',
        'छात्रा के नाम से निर्गत बिहार निवास प्रमाण पत्र',
        'बैंक पासबुक (खाता केवल बिहार में स्थित बैंक में व एकल नाम से होना चाहिए)',
        'ओटीपी सत्यापन हेतु मोबाइल नंबर व ईमेल आईडी'
      ]
    },

    howToApply: {
      en: [
        'Visit medhasoft.bih.nic.in.',
        'Select Mukhyamantri Kanya Utthan Yojana (Graduation or Intermediate portal).',
        'Search Student Name in University/College uploaded list.',
        'Complete registration with Aadhaar & Mobile OTP.',
        'Submit bank account and marksheet details for final DBT processing.'
      ],
      hi: [
        'medhasoft.bih.nic.in पोर्टल पर जाएं।',
        'मुख्यमंत्री कन्या उत्थान योजना (स्नातक या इंटर) लिंक पर क्लिक करें।',
        'विश्वविद्यालय की स्वीकृत सूची में अपना नाम जांचें।',
        'आधार व मोबाइल ओटीपी द्वारा पंजीकरण पूरा करें।',
        'बैंक खाता व मार्कशीट विवरण दर्ज कर फाइनल सबमिट करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://medhasoft.bih.nic.in',
      officialWebsiteUrl: 'https://medhasoft.bih.nic.in'
    },

    primarySourceName: 'Medhasoft Bihar Official Portal',
    primarySourceUrl: 'https://medhasoft.bih.nic.in',
    faqs: [
      {
        questionEn: 'Is joint bank account allowed for Kanya Utthan Yojana?',
        questionHi: 'क्या कन्या उत्थान योजना में संयुक्त (Joint) बैंक खाता मान्य है?',
        answerEn: 'No, only single bank account in the name of the female candidate opened in a bank branch in Bihar is accepted.',
        answerHi: 'नहीं, केवल छात्रा के एकल (Single) नाम से बिहार स्थित बैंक शाखा में खुला खाता ही मान्य होता है।'
      }
    ],
    tags: ['Kanya Utthan', 'Medhasoft', 'Bihar 50000', 'Girl Scholarship 2026', 'DBT Bihar'],
    seoKeywords: ['mukhyamantri kanya utthan yojana 2026', 'medhasoft graduation 50000 apply', 'bihar 12th pass 25000 online form']
  },

  // 10. NEW ARTICLE: SSC GD Constable 2026 (Central Jobs)
  {
    id: 'ssc-gd-constable-2026',
    slug: 'ssc-gd-constable-2026-notification-exam-dates-39481-posts',
    year: 2026,
    category: 'central',
    subcategory: 'Paramilitary Forces (CAPF)',
    stateScope: 'Central',
    department: 'Ministry of Home Affairs (MHA), Govt of India',
    organizationEn: 'Staff Selection Commission (SSC)',
    organizationHi: 'कर्मचारी चयन आयोग (SSC GD)',
    postNameEn: 'Constable (GD) in CAPFs, SSF, Rifleman (GD) in Assam Rifles 2026',
    postNameHi: 'एसएससी जीडी कांस्टेबल भर्ती 2026 (CAPF, SSF, असम राइफल्स 39,481+ पद)',
    titleEn: 'SSC GD Constable 2026 Notification, 39,481+ Vacancies, Exam Date & Online Form',
    titleHi: 'SSC GD कांस्टेबल 2026 आधिकारिक नोटिफिकेशन, 39,481+ पद, परीक्षा तिथि व ऑनलाइन फॉर्म',
    shortSummaryEn: 'SSC conducts GD Constable recruitment for BSF, CISF, CRPF, SSB, ITBP, AR, and SSF forces for 10th pass candidates across India.',
    shortSummaryHi: 'कर्मचारी चयन आयोग द्वारा बीएसएफ, सीआईएसएफ, सीआरपीएफ, एसएसबी, आईटीबीपी व असम राइफल्स में 10वीं पास युवाओं हेतु 39,481+ पदों पर भर्ती अधिसूचना।',

    advertisementNumber: 'SSC/HQ/GD-2026/Notice',
    notificationDate: '2026-08-10',
    totalVacanciesOrAmount: '39,481+ Posts',
    salaryPayScale: 'Pay Level-3 (₹21,700 - ₹69,100)',

    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-08-10',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '10/08/2026',
      applicationStart: 'Active on ssc.gov.in',
      applicationLastDate: '14/10/2026',
      feePaymentLastDate: '15/10/2026',
      examDate: 'January / February 2027 (CBT Computer Exam)'
    },

    applicationFee: {
      generalObcEws: '₹100/-',
      scStPwd: '₹0/- (Exempted)',
      female: '₹0/- (Exempted)',
      paymentMode: 'Online Net Banking / UPI / Cards'
    },

    ageLimit: {
      minAge: '18 Years',
      maxAge: '23 Years',
      asOnDate: '01/01/2026',
      ageRelaxationRule: 'OBC: +3 Years (26 Years Max), SC/ST: +5 Years (28 Years Max)'
    },

    eligibility: [
      {
        postName: 'Constable GD (BSF, CISF, CRPF, SSB, ITBP, SSF, AR)',
        qualification: 'Matriculation (10th Class Pass) from any recognized Board in India',
        eligibilityEn: 'Passed 10th standard.',
        eligibilityHi: 'मान्यता प्राप्त बोर्ड से 10वीं (मैट्रिक) उत्तीर्ण।'
      }
    ],

    selectionProcess: {
      en: [
        'Stage 1: Computer Based Examination (CBE - 80 Questions, 160 Marks, 60 Minutes)',
        'Stage 2: Physical Standard Test (PST) & Physical Efficiency Test (PET)',
        'Stage 3: Detailed Medical Examination (DME) & Document Verification'
      ],
      hi: [
        'प्रथम चरण: कंप्यूटर आधारित परीक्षा (80 प्रश्न, 160 अंक, 60 मिनट, 13 क्षेत्रीय भाषाओं में)',
        'द्वितीय चरण: शारीरिक मानक (PST) एवं शारीरिक दक्षता परीक्षा (PET - 5 किमी दौड़)',
        'तृतीय चरण: मेडिकल जांच (DME) एवं दस्तावेज सत्यापन'
      ]
    },

    howToApply: {
      en: [
        'Visit ssc.gov.in.',
        'Log in with OTR Registration credentials.',
        'Fill GD Constable form, provide CAPF force preferences, capture live webcam photo, and submit application.'
      ],
      hi: [
        'ssc.gov.in पर जाएं।',
        'ओटीआर क्रेडेंशियल्स से लॉगिन करें।',
        'जीडी कांस्टेबल फॉर्म भरें, फोर्सेस की प्राथमिकता चुनें, लाइव फोटो खींचें और सबमिट करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://ssc.gov.in',
      officialNotificationPdfUrl: 'https://ssc.gov.in',
      officialWebsiteUrl: 'https://ssc.gov.in'
    },

    primarySourceName: 'SSC Official Portal',
    primarySourceUrl: 'https://ssc.gov.in',
    faqs: [
      {
        questionEn: 'In how many languages is the SSC GD 2026 exam conducted?',
        questionHi: 'SSC GD 2026 परीक्षा कितनी भाषाओं में आयोजित होगी?',
        answerEn: 'SSC GD exam is conducted in English, Hindi, and 13 Regional languages including Bengali, Gujarati, Marathi, Tamil, Telugu, Urdu, etc.',
        answerHi: 'SSC GD परीक्षा हिंदी, अंग्रेजी के अलावा 13 क्षेत्रीय भाषाओं में आयोजित की जाती है।'
      }
    ],
    tags: ['SSC GD', 'Constable GD', '10th Pass Job', 'BSF CISF CRPF', 'Central 2026'],
    seoKeywords: ['ssc gd constable 2026 notification', 'ssc gd exam date 2026', 'ssc gd 39481 vacancy', 'ssc gd syllabus pdf']
  },

  // 11. NEW ARTICLE: BPSC TRE 4.0 Teacher Recruitment 2026
  {
    id: 'bpsc-tre-4-teacher-recruitment-2026',
    slug: 'bpsc-tre-4-teacher-recruitment-2026-notification-vacancies',
    year: 2026,
    category: 'bihar',
    subcategory: 'School Teacher Cadre',
    stateScope: 'Bihar',
    department: 'Education Department, Government of Bihar',
    organizationEn: 'Bihar Public Service Commission (BPSC)',
    organizationHi: 'बिहार लोक सेवा आयोग (BPSC पटना)',
    postNameEn: 'School Teacher Recruitment Examination (TRE 4.0 / 2026)',
    postNameHi: 'बिहार विद्यालय अध्यापक भर्ती परीक्षा (TRE 4.0 / 2026)',
    titleEn: 'BPSC TRE 4.0 Teacher Recruitment 2026: 87,000+ Vacancies (Class 1-5, 6-8, 9-10, 11-12) Notification & Exam Date',
    titleHi: 'BPSC TRE 4.0 शिक्षक भर्ती 2026: 87,000+ पद (कक्षा 1 से 12) आधिकारिक नोटिफिकेशन व परीक्षा तिथि',
    shortSummaryEn: 'BPSC conducts TRE 4.0 examination for Primary, Middle, Secondary, and Higher Secondary Teacher vacancies across all district schools of Bihar.',
    shortSummaryHi: 'बिहार लोक सेवा आयोग द्वारा राज्य के सरकारी विद्यालयों में प्राथमिक (1-5), मध्य (6-8), माध्यमिक (9-10) व उच्च माध्यमिक (11-12) शिक्षकों के रिक्त पदों पर भर्ती का आधिकारिक विवरण।',

    advertisementNumber: 'Advt No. 28/2026-BPSC',
    notificationDate: '2026-07-25',
    totalVacanciesOrAmount: '87,000+ Posts (Estimated)',
    salaryPayScale: 'Pay Level ₹25,000 to ₹32,000 Basic + DA, HRA, CT & Medical (Gross ₹40,000 - ₹55,000/month)',

    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,
    isTrending: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-07-25',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      notificationDate: '25/07/2026',
      applicationStart: 'Active on onlinebpsc.bihar.gov.in',
      applicationLastDate: '10/09/2026',
      examDate: 'October / November 2026'
    },

    applicationFee: {
      generalObcEws: '₹750/-',
      scStPwd: '₹200/- (Bihar Domicile)',
      female: '₹200/- (Bihar Domicile Female)',
      paymentMode: 'Online Payment Mode'
    },

    ageLimit: {
      minAge: '18 Years (Primary) / 21 Years (Secondary/Higher Secondary)',
      maxAge: '37 Years (Male UR)',
      asOnDate: '01/08/2026',
      ageRelaxationRule: 'BC/EBC: 40 Years, SC/ST: 42 Years, UR Female: 40 Years'
    },

    eligibility: [
      {
        postName: 'Primary Teacher (Class 1-5)',
        qualification: '12th with 50% Marks + 2 Year D.El.Ed + CTET Paper-1 or BTET Paper-1 Qualified',
        eligibilityEn: 'Passed 12th + D.El.Ed + CTET/BTET Paper 1.',
        eligibilityHi: '12वीं (50% अंक) + 2 वर्षीय D.El.Ed + CTET/BTET पेपर-1 उत्तीर्ण।'
      },
      {
        postName: 'Middle Teacher (Class 6-8)',
        qualification: 'Graduation + D.El.Ed or B.Ed + CTET Paper-2 or BTET Paper-2 Qualified',
        eligibilityEn: 'Graduation + B.Ed/D.El.Ed + CTET Paper 2.',
        eligibilityHi: 'स्नातक + B.Ed/D.El.Ed + CTET पेपर-2 उत्तीर्ण।'
      },
      {
        postName: 'Secondary Teacher (Class 9-10)',
        qualification: 'Graduation in concerned subject + B.Ed + STET Paper-1 Qualified',
        eligibilityEn: 'Graduation + B.Ed + STET Paper 1.',
        eligibilityHi: 'संबंधित विषय में स्नातक + B.Ed + बिहार STET पेपर-1 उत्तीर्ण।'
      },
      {
        postName: 'Higher Secondary (Class 11-12)',
        qualification: 'Post Graduation (PG) in concerned subject + B.Ed + STET Paper-2 Qualified',
        eligibilityEn: 'Post Graduation + B.Ed + STET Paper 2.',
        eligibilityHi: 'संबंधित विषय में स्नातकोत्तर (PG) + B.Ed + बिहार STET पेपर-2 उत्तीर्ण।'
      }
    ],

    selectionProcess: {
      en: [
        'Single Stage Written Examination (Objective Multiple Choice Questions)',
        'Part 1: Language Qualifying (Hindi/English - 30 Marks, 30% needed)',
        'Part 2: General Studies (40 Marks)',
        'Part 3: Concerned Subject Specialization (80 Marks)',
        'No Interview. Direct Merit List on Part 2 + Part 3 (120 Marks total).'
      ],
      hi: [
        'एकल चरण वस्तुनिष्ठ लिखित परीक्षा (150 प्रश्न, 150 अंक, 2.5 घंटे)',
        'भाग 1: भाषा क्वालिफाइंग (30 प्रश्न, 30% पासिंग अनिवार्य)',
        'भाग 2: सामान्य अध्ययन (40 प्रश्न)',
        'भाग 3: संबंधित मुख्य विषय (80 प्रश्न)',
        'कोई साक्षात्कार नहीं। मेधा सूची भाग 2 + भाग 3 के 120 अंकों पर बनेगी।'
      ]
    },

    howToApply: {
      en: [
        'Go to onlinebpsc.bihar.gov.in.',
        'Complete registration with CTET/STET roll number and certificates.',
        'Upload required educational qualifications, identity proof, and live webcam capture.',
        'Pay fee and download completed application form.'
      ],
      hi: [
        'onlinebpsc.bihar.gov.in पर जाएं।',
        'CTET/STET अनुक्रमांक व प्रमाणपत्र के साथ रजिस्ट्रेशन करें।',
        'शैक्षणिक अंकपत्र, आवासीय प्रमाण पत्र व लाइव वेबकैम फोटो अपलोड करें।',
        'शुल्क जमा कर फाइनल आवेदन की हार्ड कॉपी डाउनलोड करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://onlinebpsc.bihar.gov.in',
      officialNotificationPdfUrl: 'https://www.bpsc.bih.nic.in',
      officialWebsiteUrl: 'https://www.bpsc.bih.nic.in'
    },

    primarySourceName: 'BPSC Official Website Patna',
    primarySourceUrl: 'https://www.bpsc.bih.nic.in',
    faqs: [
      {
        questionEn: 'Is there any interview in BPSC TRE 4.0 Teacher recruitment?',
        questionHi: 'क्या BPSC शिक्षक भर्ती TRE 4.0 में कोई इंटरव्यू होता है?',
        answerEn: 'No, there is no interview. Selection is made 100% on the basis of written examination marks.',
        answerHi: 'नहीं, शिक्षक भर्ती में कोई साक्षात्कार नहीं होता है। चयन पूर्णतः लिखित परीक्षा (120 अंकों) के प्राप्तांकों के आधार पर होता है।'
      }
    ],
    tags: ['BPSC TRE 4.0', 'Bihar Teacher', 'CTET STET 2026', 'School Teacher 2026'],
    seoKeywords: ['bpsc tre 4 notification 2026', 'bihar teacher vacancy 87000', 'bpsc tre 4 exam date', 'bpsc tre syllabus 2026']
  },

  // 12. NEW ARTICLE: RTPS Bihar (ServicePlus) Certificate Portal 2026
  {
    id: 'rtps-bihar-serviceplus-certificates-2026',
    slug: 'rtps-bihar-online-caste-income-residence-ncl-certificate-2026',
    year: 2026,
    category: 'services',
    subcategory: 'e-Governance & Public Certificates',
    stateScope: 'Bihar',
    department: 'General Administration Department, Govt of Bihar',
    organizationEn: 'Right to Public Services (RTPS Bihar)',
    organizationHi: 'लोक सेवाओं का अधिकार (RTPS बिहार / ServicePlus)',
    postNameEn: 'RTPS Bihar Online Application for Jati, Aay, Niwas, EWS & NCL Certificates',
    postNameHi: 'RTPS बिहार ऑनलाइन जाति, आय, निवास, EWS व Non-Creamy Layer (NCL) प्रमाण पत्र 2026',
    titleEn: 'RTPS Bihar 2026: Apply Online Caste, Income, Residence, NCL & EWS Certificate Download',
    titleHi: 'RTPS बिहार 2026: ऑनलाइन जाति, आय, निवास, NCL व EWS प्रमाण पत्र आवेदन एवं डाउनलोड',
    shortSummaryEn: 'Apply online for Bihar Revenue Officer (CO / SDO / DM Level) Caste, Income, Domicile, Non-Creamy Layer (NCL-BC/EBC), and Economically Weaker Section (EWS) certificates on serviceonline.bihar.gov.in.',
    shortSummaryHi: 'बिहार सरकार के सर्विसप्लस पोर्टल पर राजस्व अधिकारी, अनुमंडल व जिला स्तर से डिजिटल हस्ताक्षरित जाति, आय, निवास, क्रीमीलेयर रहित (NCL) व EWS प्रमाण पत्र बनवाने एवं डाउनलोड करने की संपूर्ण प्रक्रिया।',

    advertisementNumber: 'RTPS-Bihar/e-District-2026',
    notificationDate: '2026-01-01',
    totalVacanciesOrAmount: 'Digital Certificate Issuance in 10-21 Working Days',
    
    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: false,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-01-01',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Available 24x7 Online',
      scholarshipDisbursal: 'Instant Digital PDF Download with QR Code'
    },

    applicationFee: {
      generalObcEws: '₹0/- (Government Portal Free)',
      scStPwd: '₹0/- (Free)',
      female: '₹0/- (Free)',
      paymentMode: 'Free Official Public Service'
    },

    eligibility: [
      {
        postName: 'Residents of Bihar (बिहार के नागरिक)',
        qualification: 'Citizen needing official verified government certificates',
        eligibilityEn: 'Any permanent or temporary resident of Bihar with valid Aadhaar.',
        eligibilityHi: 'बिहार राज्य का कोई भी नागरिक जिसके पास वैध आधार व पहचान पत्र हो।'
      }
    ],

    requiredDocuments: {
      en: [
        'Aadhaar Card (Self Attested with OTP)',
        'Recent Passport Size Photograph',
        'Land Revenue (LPC / Khatiyan / Receipt) for Residence/Income Proof',
        'Self Declaration Form (स्व-घोषणा पत्र)',
        'Parent Caste Proof for Caste & NCL Certificates'
      ],
      hi: [
        'आधार कार्ड (स्व-अभिप्रमाणित या आधार ओटीपी)',
        'हालिया पासपोर्ट साइज फोटो',
        'भूमि की लगान रसीद / खतियान (निवास व आय सत्यापन हेतु)',
        'हस्ताक्षरित स्व-घोषणा पत्र',
        'माता-पिता का जाति प्रमाणपत्र (NCL/जाति प्रमाण पत्र हेतु)'
      ]
    },

    howToApply: {
      en: [
        'Visit serviceonline.bihar.gov.in.',
        'Click on "General Administration Department" services on left sidebar.',
        'Select issuance of Residence (आवासीय), Caste (जाति), Income (आय) or NCL Certificate.',
        'Choose Circle Officer (CO/RO), SDO, or DM level.',
        'Fill Applicant Details, upload Photo & Aadhaar, and submit.',
        'Track Application Status using Application Reference Number and Download PDF certificate once issued.'
      ],
      hi: [
        'serviceonline.bihar.gov.in पर जाएं।',
        'बाएं मेन्यू में "सामान्य प्रशासन विभाग" की सेवाओं पर क्लिक करें।',
        'जाति, आय, निवास या नॉन-क्रीमी लेयर (NCL) प्रमाण पत्र का चयन करें।',
        'राजस्व अधिकारी (RO/CO), अनुमंडल (SDO) या जिला (DM) स्तर चुनें।',
        'विवरण भरें, फोटो व आधार अपलोड कर फॉर्म सबमिट करें।',
        'आवेदन संदर्भ संख्या (Application Reference No) से स्टेटस ट्रैक कर डिजिटल सर्टिफिकेट डाउनलोड करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://serviceonline.bihar.gov.in',
      officialWebsiteUrl: 'https://serviceonline.bihar.gov.in',
      statusCheckUrl: 'https://serviceonline.bihar.gov.in'
    },

    primarySourceName: 'RTPS Bihar ServicePlus Official Portal',
    primarySourceUrl: 'https://serviceonline.bihar.gov.in',
    faqs: [
      {
        questionEn: 'How to download RTPS Bihar certificate after approval?',
        questionHi: 'अनुमोदन के बाद RTPS बिहार प्रमाण पत्र कैसे डाउनलोड करें?',
        answerEn: 'Visit serviceonline.bihar.gov.in, click on "Download Certificate", enter your Application Reference Number and Applicant Name, and download the digital PDF with QR code.',
        answerHi: 'serviceonline.bihar.gov.in पर "Certificate Download" पर क्लिक करें, एप्लीकेशन रेफरेंस नंबर व नाम दर्ज कर क्यूआर कोड वाला डिजिटल प्रमाण पत्र डाउनलोड करें।'
      }
    ],
    tags: ['RTPS Bihar', 'ServicePlus', 'Jati Aay Niwas', 'NCL Certificate', 'Bihar Services 2026'],
    seoKeywords: ['rtps bihar online apply', 'serviceonline bihar gov in', 'bihar jati praman patra online', 'ncl certificate bihar download']
  },

  // 13. NEW ARTICLE: Bihar Student Credit Card (MNSSBY) 2026
  {
    id: 'bihar-student-credit-card-2026',
    slug: 'bihar-student-credit-card-yojana-mnssby-2026-apply-online',
    year: 2026,
    category: 'schemes',
    subcategory: 'Higher Education Loan Assistance',
    stateScope: 'Bihar',
    department: 'Planning & Development Dept, Govt of Bihar (MNSSBY)',
    organizationEn: 'Bihar State Higher Education Finance Corporation',
    organizationHi: 'बिहार राज्य उच्चतर शिक्षा वित्त निगम (MNSSBY)',
    postNameEn: 'Bihar Student Credit Card Scheme (BSCC 2026 - Up to ₹4 Lakh Loan)',
    postNameHi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना 2026 (उच्च शिक्षा हेतु ₹4 लाख तक ऋण)',
    titleEn: 'Bihar Student Credit Card Yojana 2026: ₹4 Lakh Education Loan (1% / 0% Interest) Apply Online',
    titleHi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना 2026: ₹4 लाख तक शिक्षा ऋण (1% / 0% ब्याज) ऑनलाइन आवेदन',
    shortSummaryEn: 'Government of Bihar provides education loan up to ₹4 Lakh at 1% interest rate for girls/transgender/PwD and 4% for boys for 40+ professional and technical courses after 12th.',
    shortSummaryHi: 'बिहार सरकार द्वारा 12वीं के बाद उच्च व तकनीकी शिक्षा (BTech, MBBS, BCA, BBA, MBA, B.Ed, Polytechnic आदि) हेतु ₹4 लाख तक का ब्याज-सब्सिडी युक्त शिक्षा ऋण।',

    advertisementNumber: 'BSCC-MNSSBY/2026-Scheme',
    notificationDate: '2026-01-10',
    totalVacanciesOrAmount: 'Up to ₹4,00,000 Education Loan with Govt Guarantee',
    
    computedStatus: 'LIVE',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-01-10',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Available Throughout the Year',
      scholarshipDisbursal: 'College Fee Transferred Directly to Institution Account'
    },

    applicationFee: {
      generalObcEws: '₹0/- (No Processing Fee)',
      scStPwd: '₹0/- (Free)',
      female: '₹0/- (Free)',
      paymentMode: 'Zero Application Fee'
    },

    eligibility: [
      {
        postName: '12th Intermediate Passed Students in Bihar',
        qualification: 'Passed 12th from Bihar Board/CBSE and enrolled in NAAC/NIRF/Govt recognized college for recognized 40+ courses',
        eligibilityEn: 'Resident of Bihar aged under 25 years with valid admission confirmation.',
        eligibilityHi: 'बिहार के निवासी छात्र जिनकी आयु 25 वर्ष से कम हो तथा मान्यता प्राप्त संस्थान में प्रवेश लिया हो।'
      }
    ],

    requiredDocuments: {
      en: [
        'Aadhaar Card of Applicant and Co-applicant (Parent/Guardian)',
        '10th and 12th Marksheets & Certificates',
        'College Admission Proof / Selection Letter',
        'College Fee Structure (Detailed Brochure from Institution)',
        '2 Passport Size Photos of Student and Parent',
        'Residence Certificate of Bihar'
      ],
      hi: [
        'छात्र एवं सह-आवेदक (माता-पिता) का आधार कार्ड',
        '10वीं एवं 12वीं की अंकतालिका व मूल प्रमाणपत्र',
        'कॉलेज में प्रवेश का प्रमाण / आवंटन पत्र',
        'कॉलेज का आधिकारिक फीस स्ट्रक्चर (विस्तृत विवरण)',
        'छात्र व अभिभावक की पासपोर्ट साइज फोटो',
        'बिहार निवास प्रमाण पत्र'
      ]
    },

    howToApply: {
      en: [
        'Visit 7nishchay-yuvaupmission.bihar.gov.in.',
        'Register as New Applicant with Mobile Number & Aadhaar.',
        'Select Bihar Student Credit Card (BSCC) scheme.',
        'Enter College and Course details with Fee Schedule.',
        'Visit District Registration and Counselling Centre (DRCC) with original documents for verification.'
      ],
      hi: [
        '7nishchay-yuvaupmission.bihar.gov.in पोर्टल पर जाएं।',
        'मोबाइल नंबर व आधार से न्यू एप्लीकेंट रजिस्ट्रेशन करें।',
        'बिहार स्टूडेंट क्रेडिट कार्ड (BSCC) योजना का चयन करें।',
        'कॉलेज व कोर्स की फीस का विवरण दर्ज करें।',
        'दस्तावेज सत्यापन हेतु आवंटित तिथि पर जिला निबंधन एवं परामर्श केंद्र (DRCC) जाएं।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
      officialWebsiteUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in'
    },

    primarySourceName: 'MNSSBY Bihar Govt Official Portal',
    primarySourceUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
    faqs: [
      {
        questionEn: 'What is the interest rate under Bihar Student Credit Card?',
        questionHi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना में ब्याज दर क्या है?',
        answerEn: 'Female, Transgender, and Divyang (PwD) students pay only 1% simple interest. Male students pay 4% simple interest.',
        answerHi: 'छात्राओं, थर्ड जेंडर व दिव्यांग छात्रों हेतु ब्याज दर मात्र 1% तथा पुरुष छात्रों हेतु 4% सरल ब्याज दर है।'
      }
    ],
    tags: ['Student Credit Card', 'MNSSBY Bihar', 'Higher Education Loan', 'DRCC Bihar', '2026 Schemes'],
    seoKeywords: ['bihar student credit card 2026', 'mnssby bihar gov in apply', 'drcc bihar student loan apply', 'bscc 4 lakh loan eligibility']
  },

  // 14. NEW ARTICLE: NTA NEET UG 2026 & Bihar BCECE Medical Admission
  {
    id: 'nta-neet-ug-counseling-admission-2026',
    slug: 'nta-neet-ug-2026-bihar-bcece-mbbs-bds-counseling',
    year: 2026,
    category: 'admission',
    subcategory: 'Medical Entrance & State Counselling',
    stateScope: 'Bihar',
    department: 'Health Dept & Bihar Combined Entrance Competitive Examination Board (BCECEB)',
    organizationEn: 'National Testing Agency (NTA) & BCECEB Bihar',
    organizationHi: 'राष्ट्रीय परीक्षा एजेंसी (NTA) एवं BCECEB बिहार',
    postNameEn: 'NEET UG 2026 & Bihar UGMAC MBBS / BDS Medical Admission Counselling',
    postNameHi: 'नीट यूजी 2026 एवं बिहार UGMAC एमबीबीएस / बीडीएस स्टेट कोटा काउंसलिंग',
    titleEn: 'NEET UG 2026 & Bihar UGMAC MBBS / BDS State Counselling: Seat Matrix, Cutoff & Choice Filling',
    titleHi: 'NEET UG 2026 व बिहार UGMAC एमबीबीएस / बीडीएस स्टेट काउंसलिंग: सीट मैट्रिक्स, कटऑफ व चॉइस फिलिंग',
    shortSummaryEn: 'BCECEB conducts Bihar State Under Graduate Medical Admission Counselling (UGMAC 2026) for 85% state quota seats in PMCH, NMCH, DMCH, JLNMCH, SKMCH, IGIMS, and private medical colleges.',
    shortSummaryHi: 'बिहार संयुक्त प्रवेश प्रतियोगिता परीक्षा पर्षद (BCECEB) द्वारा राज्य के सरकारी व निजी मेडिकल कॉलेजों में एमबीबीएस, बीडीएस एवं बीवीएससी 85% स्टेट कोटा सीटों पर काउंसलिंग का आधिकारिक विवरण।',

    advertisementNumber: 'BCECEB/UGMAC/2026-Medical',
    notificationDate: '2026-08-05',
    totalVacanciesOrAmount: '2,565+ MBBS / BDS Seats across Bihar',
    
    computedStatus: 'COUNSELLING',
    verificationStatus: 'OFFICIAL_VERIFIED',
    isDemoData: false,

    isNew: true,
    isHot: true,

    lastUpdated: '2026-08-19',
    postedDate: '2026-08-05',
    lastVerifiedDate: '2026-08-19',

    importantDates: {
      applicationStart: 'Active on bceceboard.bihar.gov.in',
      applicationLastDate: '30/08/2026',
      resultDate: 'Round 1 Seat Allotment in September 2026'
    },

    applicationFee: {
      generalObcEws: '₹1200/- (Counselling Fee)',
      scStPwd: '₹600/-',
      female: '₹600/- (SC/ST/PwD Female)',
      paymentMode: 'Online via Net Banking / UPI / Cards'
    },

    eligibility: [
      {
        postName: 'MBBS / BDS State Quota Seats',
        qualification: '10+2 with Physics, Chemistry, Biology (PCB) + Qualified NTA NEET UG 2026 Examination',
        eligibilityEn: 'Bihar Domicile candidate who qualified NEET UG with valid All India Rank (AIR).',
        eligibilityHi: 'बिहार के स्थायी निवासी अभ्यर्थी जिन्होंने NEET UG परीक्षा न्यूनतम कटऑफ अंकों के साथ उत्तीर्ण की हो।'
      }
    ],

    howToApply: {
      en: [
        'Visit bceceboard.bihar.gov.in.',
        'Click on Online Portal of UGMAC 2026.',
        'Enter NEET UG Roll Number, Application Number, and Date of Birth to fetch scorecard.',
        'Pay counselling registration fee, fill college preferences (PMCH, NMCH, IGIMS, etc.), and lock choices.'
      ],
      hi: [
        'bceceboard.bihar.gov.in पोर्टल पर जाएं।',
        'UGMAC 2026 ऑनलाइन काउंसलिंग लिंक पर क्लिक करें।',
        'नीट यूजी रोल नंबर व आवेदन संख्या दर्ज कर विवरण सत्यापित करें।',
        'काउंसलिंग शुल्क जमा कर मेडिकल कॉलेज की चॉइस भरें और लॉक करें।'
      ]
    },

    officialLinks: {
      applyOnlineUrl: 'https://bceceboard.bihar.gov.in',
      officialWebsiteUrl: 'https://bceceboard.bihar.gov.in',
      resultUrl: 'https://bceceboard.bihar.gov.in'
    },

    primarySourceName: 'BCECEB Bihar Official Medical Portal',
    primarySourceUrl: 'https://bceceboard.bihar.gov.in',
    faqs: [
      {
        questionEn: 'What is Bihar UGMAC for?',
        questionHi: 'बिहार UGMAC क्या है?',
        answerEn: 'UGMAC is the official counselling conducted by BCECEB for admission into 85% state quota seats in government and private medical and dental colleges of Bihar.',
        answerHi: 'UGMAC बिहार सरकार द्वारा आयोजित आधिकारिक काउंसलिंग है जिसके माध्यम से राज्य के 85% स्टेट कोटा मेडिकल व डेंटल सीटों पर दाखिला होता है।'
      }
    ],
    tags: ['NEET UG 2026', 'Bihar UGMAC', 'MBBS Admission', 'PMCH Patna', 'Medical Counselling'],
    seoKeywords: ['bihar ugmac counselling 2026', 'bceceboard bihar gov in neet', 'bihar mbbs cutoff 2026', 'pmch patna admission status']
  }
];

// Combine all sets ensuring unique IDs with latest posts prioritized
const allPostsList = [
  ...LATEST_UPDATES_POSTS,
  ...LATEST_JOBS_POSTS,
  ...YOJANA_SCHEMES_POSTS,
  ...ADMIT_CARDS_RESULTS_POSTS,
  ...BASE_POSTS
];

const postMap = new Map<string, PostItem>();
for (const p of allPostsList) {
  if (!postMap.has(p.id)) {
    postMap.set(p.id, p);
  }
}

export const INITIAL_POSTS: PostItem[] = Array.from(postMap.values());


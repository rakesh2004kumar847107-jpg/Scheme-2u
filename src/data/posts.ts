import { PostItem } from '../types';

export const INITIAL_POSTS: PostItem[] = [
  // =========================================================================
  // 1. GOVT JOBS & RECRUITMENT (jobs)
  // =========================================================================
  {
    id: 'post-job-bpsc-70th',
    slug: 'bpsc-70th-cce-recruitment-sdm-dsp-officers',
    category: 'jobs',
    stateScope: 'Bihar',
    titleEn: 'BPSC 70th & 71st Combined Competitive Exam (CCE) — 2,035+ Vacancies for SDM, DSP & Block Officers',
    titleHi: 'BPSC 70वीं व 71वीं संयुक्त प्रतियोगिता परीक्षा — SDM, DSP, CO और राजस्व अधिकारी के 2,035+ पदों पर भर्ती',
    shortSummaryEn: 'Bihar Public Service Commission (BPSC) invites online applications for Sub Divisional Magistrate (SDM), Deputy Superintendent of Police (DSP), State Tax Assistant Commissioner, Block Development Officer (BDO), and Revenue Officers.',
    shortSummaryHi: 'बिहार लोक सेवा आयोग (BPSC) द्वारा एसडीएम, डीएसपी, प्रखंड विकास पदाधिकारी, राजस्व अधिकारी सहित 2,035 से अधिक राजपत्रित प्रशासनिक पदों पर सीधी भर्ती।',
    organizationEn: 'Bihar Public Service Commission (BPSC)',
    organizationHi: 'बिहार लोक सेवा आयोग (BPSC)',
    postNameEn: 'Administrative, Police & Revenue Officers (BPSC CCE)',
    postNameHi: 'प्रशासनिक, पुलिस एवं राजस्व अधिकारी (BPSC CCE)',
    totalVacanciesOrAmount: '2,035+ Posts',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-15',
    postedDate: '2024-09-28',
    importantDates: {
      applicationStart: '28 September',
      applicationLastDate: '04 November',
      correctionWindow: 'Available Online (OTR)',
      admitCardDate: 'Available before Prelims Exam',
      examDate: 'Prelims & Mains Scheduled in Multi-Phases',
      resultDate: 'To be announced on BPSC portal'
    },
    applicationFee: {
      generalObcEws: '₹600',
      scStPwd: '₹150',
      female: '₹150 (Bihar Domicile)',
      paymentMode: 'Online Net Banking / Debit Card / UPI'
    },
    ageLimit: {
      minAge: '20, 21 or 22 Years (Post-wise)',
      maxAge: '37 Years (Male General), 40 Years (BC/EBC/Female), 42 Years (SC/ST)',
      asOnDate: '01 August',
      ageRelaxationRule: 'As per Bihar Government Reservation Norms'
    },
    eligibility: [
      {
        postName: 'BPSC Civil Services (Administrative/Police/Revenue)',
        totalPosts: '2,035+ Posts',
        qualification: 'Graduation / Bachelor Degree in Any Discipline',
        eligibilityEn: 'Candidate must possess a Bachelor Degree from any UGC recognized University in India.',
        eligibilityHi: 'भारत के किसी भी मान्यता प्राप्त विश्वविद्यालय से किसी भी विषय में स्नातक (Graduation) उत्तीर्ण।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card / Photo Identity Proof',
        'Graduation Final Marksheet & Degree Certificate',
        'Matriculation (10th) Certificate for Date of Birth verification',
        'Caste / Non-Creamy Layer (NCL) / EWS Certificate (For Bihar Quota)',
        'Bihar Domicile / Residence Certificate',
        'Scanned passport size photograph and signature (English & Hindi)'
      ],
      hi: [
        'आधार कार्ड या वैध फोटो पहचान पत्र',
        'स्नातक (Graduation) की अंतिम अंकतालिका व मूल प्रमाण पत्र',
        'जन्म तिथि प्रमाण हेतु 10वीं का मूल प्रमाण पत्र',
        'जाति / ईडब्ल्यूएस / क्रीमीलेयर रहित प्रमाण पत्र (आरक्षण लाभ हेतु)',
        'बिहार राज्य का मूल निवास प्रमाण पत्र',
        'स्कैन किया हुआ पासपोर्ट फोटो और हस्ताक्षर (हिंदी व अंग्रेजी)'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Visit the official BPSC portal at bpsc.bih.nic.in or onlinebpsc.bihar.gov.in.',
        'Step 2: Complete the One Time Registration (OTR) profile with basic credentials and mobile OTP.',
        'Step 3: Log in to your candidate dashboard and select "70th/71st Combined Competitive Examination".',
        'Step 4: Fill educational qualifications, address, category and select post preferences.',
        'Step 5: Upload scanned photograph, live webcam capture, and signature.',
        'Step 6: Pay the prescribed examination fee via online payment gateway.',
        'Step 7: Download and print the submitted application form for future reference.'
      ],
      hi: [
        'चरण 1: BPSC की आधिकारिक वेबसाइट onlinebpsc.bihar.gov.in पर जाएं।',
        'चरण 2: वन टाइम रजिस्ट्रेशन (OTR) करें और मोबाइल/ईमेल ओटीपी से सत्यापित करें।',
        'चरण 3: लॉगिन करके 70वीं/71वीं संयुक्त प्रतियोगिता परीक्षा के आवेदन लिंक पर क्लिक करें।',
        'चरण 4: अपनी शैक्षणिक योग्यता, पद प्राथमिकताएं एवं व्यक्तिगत विवरण भरें।',
        'चरण 5: लाइव वेबकैम फोटो, पासपोर्ट फोटो व हस्ताक्षर अपलोड करें।',
        'चरण 6: अपनी श्रेणी के अनुसार ऑनलाइन परीक्षा शुल्क का भुगतान करें।',
        'चरण 7: भरे हुए फाइनल आवेदन पत्र का प्रिंट आउट सुरक्षित रख लें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://onlinebpsc.bihar.gov.in/',
      officialNotificationPdfUrl: 'https://bpsc.bih.nic.in/',
      officialWebsiteUrl: 'https://bpsc.bih.nic.in/',
      syllabusUrl: 'https://bpsc.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'What is the educational qualification for BPSC CCE?',
        questionHi: 'BPSC संयुक्त प्रतियोगिता परीक्षा के लिए योग्यता क्या है?',
        answerEn: 'Graduation (Bachelor Degree) in any discipline from a recognized University.',
        answerHi: 'किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक (Graduation) की डिग्री।'
      },
      {
        questionEn: 'Is there any negative marking in BPSC Prelims?',
        questionHi: 'क्या BPSC प्रारंभिक परीक्षा में नेगेटिव मार्किंग होती है?',
        answerEn: 'Yes, 1/3rd (0.33 marks) negative marking is applicable for every incorrect answer.',
        answerHi: 'हां, प्रत्येक गलत उत्तर के लिए 1/3 (0.33 अंक) काटा जाता है।'
      }
    ]
  },
  {
    id: 'post-job-ssc-gd',
    slug: 'ssc-gd-constable-recruitment-bsf-cisf-crpf-ssb-itbp',
    category: 'jobs',
    stateScope: 'Central',
    titleEn: 'SSC GD Constable Recruitment — 39,481 Vacancies in BSF, CISF, CRPF, SSB, ITBP, AR, SSF',
    titleHi: 'SSC GD कांस्टेबल भर्ती — BSF, CISF, CRPF, SSB, ITBP, असम राइफल्स में 39,481 पदों पर 10वीं पास भर्ती',
    shortSummaryEn: 'Staff Selection Commission (SSC) announces recruitment of Constables (General Duty) in Central Armed Police Forces (CAPFs), SSF, and Rifleman in Assam Rifles. 10th pass candidates eligible across India.',
    shortSummaryHi: 'कर्मचारी चयन आयोग (SSC) द्वारा अर्धसैनिक बलों (BSF, CISF, CRPF, SSB, ITBP, असम राइफल्स) में 39,481 सिपाही पदों पर 10वीं पास महिला एवं पुरुष उम्मीदवारों के लिए भर्ती।',
    organizationEn: 'Staff Selection Commission (SSC, Govt of India)',
    organizationHi: 'कर्मचारी चयन आयोग (भारत सरकार)',
    postNameEn: 'Constable (General Duty) in CAPFs & Assam Rifles',
    postNameHi: 'कांस्टेबल जनरल ड्यूटी (जीडी सिपाही भर्ती)',
    totalVacanciesOrAmount: '39,481 Posts',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-18',
    postedDate: '2024-09-05',
    importantDates: {
      applicationStart: '05 September',
      applicationLastDate: '14 October',
      correctionWindow: '05 to 07 November',
      admitCardDate: '10 Days Before CBT Exam',
      examDate: 'Computer Based Examination (CBT)',
      resultDate: 'Published on ssc.gov.in'
    },
    applicationFee: {
      generalObcEws: '₹100',
      scStPwd: '₹0 (Exempted)',
      female: '₹0 (All Female Candidates Exempted)',
      paymentMode: 'BHIM UPI, Net Banking, Visa, MasterCard, RuPay'
    },
    ageLimit: {
      minAge: '18 Years',
      maxAge: '23 Years',
      asOnDate: '01 January',
      ageRelaxationRule: 'SC/ST: 5 Years, OBC: 3 Years, Ex-Servicemen: 3 Years'
    },
    eligibility: [
      {
        postName: 'Constable (GD) in Paramilitary Forces',
        totalPosts: '39,481 Posts',
        qualification: 'Matriculation (10th Class Pass)',
        eligibilityEn: 'Passed 10th Class Examination from a recognized Board / Institution.',
        eligibilityHi: 'किसी भी मान्यता प्राप्त बोर्ड से 10वीं कक्षा (मैट्रिक) उत्तीर्ण।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card / Voter ID / Driving License',
        '10th Class Marksheet & Passing Certificate',
        'Caste Certificate (OBC/SC/ST/EWS Central Format)',
        'Domicile / Permanent Residential Certificate (PRC)',
        'NCC Certificate (A, B, C bonus marks incentive)',
        'Recent digital passport size photograph and signature'
      ],
      hi: [
        'आधार कार्ड या सरकार द्वारा जारी फोटो पहचान पत्र',
        '10वीं कक्षा (मैट्रिक) की अंकतालिका व उत्तीर्ण प्रमाण पत्र',
        'केंद्रीय प्रारूप में जाति प्रमाण पत्र (OBC/SC/ST/EWS)',
        'स्थायी निवास प्रमाण पत्र (डोमिसाइल)',
        'एनसीसी प्रमाण पत्र (यदि लागू हो - बोनस अंक हेतु)',
        'हालिया पासपोर्ट फोटो व डिजिटल हस्ताक्षर'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Visit the new official SSC portal at ssc.gov.in.',
        'Step 2: Complete the One-Time Registration (OTR) with personal details and Aadhaar verification.',
        'Step 3: Navigate to "Apply" and click on "Constable (GD) in Central Armed Police Forces".',
        'Step 4: Choose your exam center preferences and state of domicile.',
        'Step 5: Fill priority order for forces (A: BSF, B: CISF, C: CRPF, D: SSB, E: ITBP, F: Assam Rifles, G: SSF).',
        'Step 6: Capture live photograph using the SSC mobile app / webcam and upload signature.',
        'Step 7: Pay the application fee and take a printout of the final submitted form.'
      ],
      hi: [
        'चरण 1: SSC के नए पोर्टल ssc.gov.in पर जाएं।',
        'चरण 2: वन-टाइम रजिस्ट्रेशन (OTR) पूरा करें।',
        'चरण 3: Apply टैब में जाकर Constable GD भर्ती पर क्लिक करें।',
        'चरण 4: परीक्षा केंद्र के 3 विकल्प और अपने गृह राज्य का चयन करें।',
        'चरण 5: सुरक्षा बलों की प्राथमिकता क्रम (BSF, CISF, CRPF, SSB, ITBP, AR, SSF) भरें।',
        'चरण 6: लाइव फोटो कैप्चर करें और हस्ताक्षर अपलोड करें।',
        'चरण 7: ₹100 का शुल्क (महिला/SC/ST हेतु फ्री) भुगतान कर रसीद डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://ssc.gov.in/',
      officialNotificationPdfUrl: 'https://ssc.gov.in/',
      officialWebsiteUrl: 'https://ssc.gov.in/',
      syllabusUrl: 'https://ssc.gov.in/'
    },
    faqs: [
      {
        questionEn: 'What is the selection process for SSC GD Constable?',
        questionHi: 'SSC GD कांस्टेबल की चयन प्रक्रिया क्या है?',
        answerEn: '1. Computer Based Exam (CBT), 2. Physical Efficiency Test (PET), 3. Physical Standard Test (PST), 4. Detailed Medical Exam (DME).',
        answerHi: '1. कंप्यूटर आधारित परीक्षा (CBT), 2. शारीरिक दक्षता परीक्षा (PET), 3. शारीरिक मानक परीक्षा (PST), 4. मेडिकल जांच व दस्तावेज सत्यापन।'
      }
    ]
  },
  {
    id: 'post-job-rrb-alp',
    slug: 'railway-rrb-alp-assistant-loco-pilot-recruitment',
    category: 'jobs',
    stateScope: 'Central',
    titleEn: 'Railway RRB ALP (Assistant Loco Pilot) Recruitment — 18,799 Vacancies for ITI, Diploma & B.Tech',
    titleHi: 'रेलवे RRB सहायक लोको पायलट (ALP) भर्ती — 18,799 पदों पर ITI, डिप्लोमा और बीटेक पास के लिए सीधी भर्ती',
    shortSummaryEn: 'Railway Recruitment Boards (RRB) announce recruitment for 18,799 Assistant Loco Pilot (ALP) posts across all Railway Zones (ECR, NR, WR, SR, ER, etc.) with CEN 01/2024 revised vacancies.',
    shortSummaryHi: 'भारतीय रेलवे भर्ती बोर्ड द्वारा 18,799 सहायक लोको पायलट (ALP) पदों पर भर्ती। 10वीं के साथ ITI, पॉलिटेक्निक डिप्लोमा या इंजीनियरिंग डिग्री धारक पात्र हैं।',
    organizationEn: 'Ministry of Railways (Railway Recruitment Boards - RRB)',
    organizationHi: 'रेल मंत्रालय, रेलवे भर्ती बोर्ड (RRB)',
    postNameEn: 'Assistant Loco Pilot (ALP) - Level 2 (7th CPC)',
    postNameHi: 'सहायक लोको पायलट (ALP)',
    totalVacanciesOrAmount: '18,799 Posts',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-20',
    postedDate: '2024-01-20',
    importantDates: {
      applicationStart: '20 January',
      applicationLastDate: '19 February',
      correctionWindow: '20 to 29 February',
      admitCardDate: '4 Days Prior to Exam',
      examDate: 'CBT-1, CBT-2 & CBAT (Aptitude Test)',
      resultDate: 'Available Zone-wise on RRB Portals'
    },
    applicationFee: {
      generalObcEws: '₹500 (₹400 refunded after attending CBT-1)',
      scStPwd: '₹250 (Full ₹250 refunded after CBT-1)',
      female: '₹250 (Full ₹250 refunded after CBT-1)',
      paymentMode: 'Online Debit/Credit Card, Internet Banking, UPI'
    },
    ageLimit: {
      minAge: '18 Years',
      maxAge: '33 Years (3 Years COVID Relaxation Granted)',
      asOnDate: '01 July',
      ageRelaxationRule: 'OBC: 3 Years, SC/ST: 5 Years'
    },
    eligibility: [
      {
        postName: 'Assistant Loco Pilot (ALP)',
        totalPosts: '18,799 Posts',
        qualification: 'Matriculation + ITI (NCVT/SCVT) OR 3-Year Engineering Diploma OR B.E./B.Tech',
        eligibilityEn: 'Passed 10th with ITI in relevant trades (Fitter, Electrician, Machinist, Diesel Mech, etc.) OR Diploma/Degree in Mech/Elec/Auto Engineering.',
        eligibilityHi: '10वीं के साथ फिटर, इलेक्ट्रीशियन, डीजल मैकेनिक आदि में ITI या मैकेनिकल/इलेक्ट्रिकल में 3 वर्षीय इंजीनियरिंग डिप्लोमा या डिग्री।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card for biometric authentication',
        '10th Class Passing Certificate',
        'ITI NCVT/SCVT Trade Certificate OR Polytechnic Diploma Certificate',
        'Caste Certificate for Central Govt Services',
        'Scanned Color Photograph (white background) & Signature'
      ],
      hi: [
        'बायोमेट्रिक प्रमाणीकरण हेतु आधार कार्ड',
        '10वीं कक्षा का प्रमाण पत्र',
        'संबंधित ट्रेड में ITI (NCVT/SCVT) या 3 वर्षीय इंजीनियरिंग डिप्लोमा',
        'केंद्रीय प्रारूप में जाति प्रमाण पत्र (आरक्षण एवं मुफ्त रेल पास हेतु)',
        'सफेद बैकग्राउंड में रंगीन फोटो व डिजिटल हस्ताक्षर'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Visit rrbapply.gov.in official common application portal.',
        'Step 2: Create an account and verify mobile number and email ID.',
        'Step 3: Select your preferred Railway Recruitment Board (e.g. RRB Patna, Muzaffarpur, Ranchi, Kolkata, Allahabad).',
        'Step 4: Enter educational and technical ITI/Diploma qualifications.',
        'Step 5: Upload valid passport photo and signature.',
        'Step 6: Pay the application fee and submit the online application.'
      ],
      hi: [
        'चरण 1: रेलवे के आधिकारिक पोर्टल rrbapply.gov.in पर जाएं।',
        'चरण 2: Create an Account पर क्लिक कर मोबाइल/ईमेल से खाता बनाएं।',
        'चरण 3: अपने RRB जोन (जैसे पटना, मुजफ्फरपुर, रांची, कोलकाता आदि) का चयन करें।',
        'चरण 4: ITI/डिप्लोमा ट्रेड एवं शैक्षणिक विवरण भरें।',
        'चरण 5: फोटो व हस्ताक्षर अपलोड करें और ऑनलाइन फीस भुगतान करें।',
        'चरण 6: फॉर्म सबमिट कर फाइनल पीडीएफ सुरक्षित रखें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://www.rrbapply.gov.in/',
      officialNotificationPdfUrl: 'https://www.rrbapply.gov.in/',
      officialWebsiteUrl: 'https://indianrailways.gov.in/',
      syllabusUrl: 'https://www.rrbapply.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Is Eye Vision Medical standard A-1 compulsory for Railway ALP?',
        questionHi: 'क्या रेलवे ALP के लिए A-1 मेडिकल विजन टेस्ट अनिवार्य है?',
        answerEn: 'Yes, 6/6 distance vision without glasses and normal color vision are strictly mandatory.',
        answerHi: 'हां, बिना चश्मे के 6/6 दृष्टि और सामान्य कलर विजन (A-1 मेडिकल मानक) अनिवार्य है।'
      }
    ]
  },
  {
    id: 'post-job-bpsc-tre4',
    slug: 'bihar-bpsc-tre-4-teacher-recruitment-primary-middle-secondary',
    category: 'jobs',
    stateScope: 'Bihar',
    titleEn: 'Bihar BPSC TRE 4.0 Teacher Recruitment — 80,000+ Vacancies for Primary, Middle, High School & 10+2',
    titleHi: 'बिहार BPSC TRE 4.0 शिक्षक भर्ती — प्राथमिक, मध्य, माध्यमिक एवं उच्च माध्यमिक विद्यालयों में 80,000+ पदों पर भर्ती',
    shortSummaryEn: 'Education Department, Govt of Bihar and BPSC announce Teacher Recruitment Examination (TRE 4.0) for Class 1-5, Class 6-8, Class 9-10 (TGT), and Class 11-12 (PGT) teachers in government schools.',
    shortSummaryHi: 'बिहार सरकार के शिक्षा विभाग द्वारा सरकारी विद्यालयों में कक्षा 1 से 12 तक के 80 हजार से अधिक शिक्षकों की भर्ती के लिए BPSC शिक्षक भर्ती परीक्षा (TRE 4.0)।',
    organizationEn: 'Education Department, Bihar & BPSC',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार एवं BPSC',
    postNameEn: 'School Teachers (Class 1-5, 6-8, 9-10, 11-12)',
    postNameHi: 'विद्यालय अध्यापक (कक्षा 1 से 12)',
    totalVacanciesOrAmount: '80,000+ Posts',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-10',
    postedDate: '2024-11-15',
    importantDates: {
      applicationStart: 'Notification Active on BPSC',
      applicationLastDate: 'As notified in official release',
      correctionWindow: 'Available on Candidate Dashboard',
      admitCardDate: '7 Days before Exam Date',
      examDate: 'Single Shift OMR Based Written Exam',
      resultDate: 'District-wise Merit Allocation'
    },
    applicationFee: {
      generalObcEws: '₹750',
      scStPwd: '₹200',
      female: '₹200 (Bihar Resident)',
      paymentMode: 'Online Net Banking / Cards / UPI'
    },
    ageLimit: {
      minAge: '18 Years (Primary) / 21 Years (Middle & Secondary)',
      maxAge: '37 Years (Male General), 40 Years (BC/EBC/Female), 42 Years (SC/ST)',
      asOnDate: '01 August',
      ageRelaxationRule: 'Standard Bihar State Teacher Service Rules'
    },
    eligibility: [
      {
        postName: 'Primary Teacher (Class 1-5)',
        qualification: '12th (50%) + 2-Year D.El.Ed + CTET / BTET Paper 1 Qualified',
        eligibilityEn: 'Senior Secondary with 50% marks, 2-Year Diploma in Elementary Education (D.El.Ed), and CTET/BTET Paper 1 pass.',
        eligibilityHi: 'इंटरमीडिएट (50% अंक) + 2 वर्षीय डी.एल.एड. + सीटीईटी/बीटीईटी पेपर-1 उत्तीर्ण।'
      },
      {
        postName: 'Middle Teacher (Class 6-8)',
        qualification: 'Graduation + B.Ed / D.El.Ed + CTET / BTET Paper 2 Qualified',
        eligibilityEn: 'Bachelor Degree with D.El.Ed / B.Ed and CTET/BTET Paper 2 qualified.',
        eligibilityHi: 'स्नातक + बी.एड./डी.एल.एड. + सीटीईटी/बीटीईटी पेपर-2 उत्तीर्ण।'
      },
      {
        postName: 'Secondary / Higher Secondary (Class 9-12)',
        qualification: 'Graduation / PG + B.Ed + Bihar STET Paper 1 / Paper 2 Qualified',
        eligibilityEn: 'Graduation / Master Degree in relevant subject with B.Ed and Bihar STET pass.',
        eligibilityHi: 'संबंधित विषय में स्नातक/स्नातकोत्तर + बी.एड. + बिहार एसटीईटी (STET) उत्तीर्ण।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card with linked active phone',
        'D.El.Ed / B.Ed Marksheet & Passing Certificate',
        'CTET / Bihar STET Certificate & Scorecard',
        '10th, 12th & Graduation/PG Degree Marksheets',
        'Bihar Domicile & Caste/EWS/NCL Certificate',
        'Live photograph capture and bilingual signature'
      ],
      hi: [
        'आधार कार्ड (सत्यापन हेतु)',
        'डी.एल.एड. या बी.एड. की अंकतालिका व प्रमाण पत्र',
        'CTET या बिहार STET का अंक प्रमाण पत्र',
        'मैट्रिक, इंटर व स्नातक/पीजी की अंकतालिकाएं',
        'बिहार का मूल निवास व जाति/ईडब्ल्यूएस प्रमाण पत्र',
        'लाइव वेबकैम फोटो व हिंदी-अंग्रेजी हस्ताक्षर'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Go to onlinebpsc.bihar.gov.in and click on "BPSC School Teacher Online Application".',
        'Step 2: Enter personal details, address, CTET/STET roll number, and qualification marks.',
        'Step 3: Select post level (Primary, Middle, Secondary, Higher Secondary) and subject.',
        'Step 4: Upload all scanned original documents in PDF format (under 100 KB).',
        'Step 5: Capture live photo and upload signature.',
        'Step 6: Pay the application fee and submit the final form.'
      ],
      hi: [
        'चरण 1: onlinebpsc.bihar.gov.in पर जाएं और TRE आवेदन लिंक चुनें।',
        'चरण 2: अपना व्यक्तिगत विवरण, CTET/STET रोल नंबर व अंक भरें।',
        'चरण 3: विद्यालय स्तर (1-5, 6-8, 9-10, 11-12) और विषय का चयन करें।',
        'चरण 4: सभी मूल प्रमाण पत्रों की पीडीएफ (100 KB से कम) अपलोड करें।',
        'चरण 5: लाइव फोटो व हस्ताक्षर अपलोड कर फीस भुगतान करें और रसीद प्रिंट करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://onlinebpsc.bihar.gov.in/',
      officialNotificationPdfUrl: 'https://bpsc.bih.nic.in/',
      officialWebsiteUrl: 'https://bpsc.bih.nic.in/',
      syllabusUrl: 'https://bpsc.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'Are other state candidates eligible for Bihar Teacher recruitment?',
        questionHi: 'क्या अन्य राज्यों के अभ्यर्थी बिहार शिक्षक भर्ती के लिए आवेदन कर सकते हैं?',
        answerEn: 'Yes, Indian citizens from any state can apply under the Unreserved (UR) category.',
        answerHi: 'हां, भारत का कोई भी नागरिक सामान्य (अनारक्षित) श्रेणी में आवेदन कर सकता है।'
      }
    ]
  },
  {
    id: 'post-job-bssc-inter',
    slug: 'bihar-bssc-2nd-inter-level-combined-competitive-exam',
    category: 'jobs',
    stateScope: 'Bihar',
    titleEn: 'Bihar BSSC 2nd Inter Level Combined Exam — 12,199 Vacancies for Revenue Staff & Panchayat Secretary',
    titleHi: 'बिहार BSSC द्वितीय इंटर स्तरीय संयुक्त परीक्षा — राजस्व कर्मचारी व पंचायत सचिव के 12,199 पदों पर भर्ती',
    shortSummaryEn: 'Bihar Staff Selection Commission (BSSC) conducts 2nd Inter Level Competitive Examination for 12,199 posts including Revenue Employee (Revenue & Land Reforms Dept), Panchayat Secretary (Panchayati Raj), and Clerk posts.',
    shortSummaryHi: 'बिहार कर्मचारी चयन आयोग द्वारा राजस्व कर्मचारी, पंचायत सचिव, कनीय लेखा लिपिक और टाइपिस्ट के 12,199 पदों पर 12वीं पास अभ्यर्थियों के लिए सीधी भर्ती।',
    organizationEn: 'Bihar Staff Selection Commission (BSSC)',
    organizationHi: 'बिहार कर्मचारी चयन आयोग (BSSC)',
    postNameEn: 'Revenue Staff, Panchayat Secretary & Clerks',
    postNameHi: 'राजस्व कर्मचारी, पंचायत सचिव, निम्नवर्गीय लिपिक',
    totalVacanciesOrAmount: '12,199 Posts',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-15',
    postedDate: '2024-01-10',
    importantDates: {
      applicationStart: 'Online Registration Open',
      applicationLastDate: 'Document Upload & Re-verification Closed',
      correctionWindow: 'Completed on BSSC Portal',
      admitCardDate: 'To be issued before Prelims',
      examDate: 'Offline OMR Based Objective Examination',
      resultDate: 'Merit List on bssc.bihar.gov.in'
    },
    applicationFee: {
      generalObcEws: '₹540',
      scStPwd: '₹135',
      female: '₹135 (Bihar Domicile)',
      paymentMode: 'Online Payment Gateway'
    },
    ageLimit: {
      minAge: '18 Years',
      maxAge: '37 Years (Male UR), 40 Years (BC/EBC/Female), 42 Years (SC/ST)',
      asOnDate: '01 August',
      ageRelaxationRule: 'Standard Bihar Govt Norms'
    },
    eligibility: [
      {
        postName: 'Revenue Staff (राजस्व कर्मचारी)',
        totalPosts: '3,559 Posts',
        qualification: '10+2 / Intermediate Passed in any stream',
        eligibilityEn: 'Passed 12th Class (Intermediate) from any recognized Board.',
        eligibilityHi: 'किसी भी संकाय से 12वीं (इंटरमीडिएट) उत्तीर्ण।'
      },
      {
        postName: 'Panchayat Secretary (पंचायत सचिव)',
        totalPosts: '3,532 Posts',
        qualification: '10+2 Intermediate + Basic Computer Knowledge & MS Office',
        eligibilityEn: 'Passed 12th Class with computer operation and MS Office proficiency.',
        eligibilityHi: '12वीं उत्तीर्ण के साथ कंप्यूटर संचालन एवं एमएस ऑफिस ज्ञान।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card',
        '10th & 12th Passing Certificate and Marksheet',
        'Computer Certificate (DCA/ADCA) and Hindi/English Typing Certificate (if applicable)',
        'Caste Certificate / NCL / EWS Certificate',
        'Bihar Domicile Certificate'
      ],
      hi: [
        'आधार कार्ड',
        'मैट्रिक और इंटरमीडिएट की मूल अंकतालिका व प्रमाण पत्र',
        'कंप्यूटर प्रमाण पत्र (DCA/ADCA) एवं हिंदी/अंग्रेजी टाइपिंग सर्टिफिकेट (पद अनुसार)',
        'जाति प्रमाण पत्र / NCL / EWS',
        'बिहार का मूल निवास प्रमाण पत्र'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Visit bssc.bihar.gov.in or onlinebssc.com.',
        'Step 2: Log in using Registration Number and Password.',
        'Step 3: Verify all personal and qualification fields.',
        'Step 4: Download the updated application confirmation slip.'
      ],
      hi: [
        'चरण 1: BSSC के पोर्टल onlinebssc.com पर जाएं।',
        'चरण 2: रजिस्ट्रेशन नंबर और पासवर्ड से लॉगिन करें।',
        'चरण 3: सभी विवरणों की जांच करें और पावती रसीद डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://onlinebssc.com/',
      officialNotificationPdfUrl: 'https://bssc.bihar.gov.in/',
      officialWebsiteUrl: 'https://bssc.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Is typing mandatory for all posts in BSSC Inter Level?',
        questionHi: 'क्या BSSC इंटर लेवल के सभी पदों के लिए टाइपिंग अनिवार्य है?',
        answerEn: 'No, Revenue Staff (3,559 posts) does not require any typing test.',
        answerHi: 'नहीं, राजस्व कर्मचारी के 3,559 पदों के लिए टाइपिंग अनिवार्य नहीं है।'
      }
    ]
  },

  // =========================================================================
  // 2. ADMIT CARDS & HALL TICKETS (admit-card)
  // =========================================================================
  {
    id: 'post-admit-bpsc-70th',
    slug: 'bpsc-70th-prelims-admit-card-exam-center-city-slip',
    category: 'admit-card',
    stateScope: 'Bihar',
    titleEn: 'BPSC 70th Integrated CCE Prelims Admit Card & Exam Center City Slip Download',
    titleHi: 'BPSC 70वीं संयुक्त प्रारंभिक प्रतियोगिता परीक्षा एडमिट कार्ड व एग्जाम सेंटर सिटी स्लिप डाउनलोड',
    shortSummaryEn: 'Bihar Public Service Commission (BPSC) releases official E-Admit Cards and Exam City intimation slip for 70th Integrated Combined (Preliminary) Competitive Examination. Download via candidate login with image upload.',
    shortSummaryHi: 'बिहार लोक सेवा आयोग (BPSC) द्वारा 70वीं संयुक्त (प्रारंभिक) प्रतियोगिता परीक्षा का ई-एडमिट कार्ड और परीक्षा केंद्र शहर विवरण जारी। डैशबोर्ड पर 25 KB का पासपोर्ट फोटो अपलोड कर सीधे डाउनलोड करें।',
    organizationEn: 'Bihar Public Service Commission (BPSC)',
    organizationHi: 'बिहार लोक सेवा आयोग',
    postNameEn: 'BPSC 70th Prelims E-Admit Card',
    postNameHi: 'BPSC 70वीं प्रारंभिक परीक्षा प्रवेश पत्र',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-20',
    postedDate: '2024-11-20',
    importantDates: {
      admitCardDate: 'Available Online on Dashboard',
      examDate: 'Single Shift (12:00 PM to 02:00 PM)',
      resultDate: 'Within 30 Days of Examination'
    },
    howToApply: {
      en: [
        'Step 1: Visit onlinebpsc.bihar.gov.in.',
        'Step 2: Log in with your Username and Password.',
        'Step 3: In your Candidate Dashboard, click on "Admit Card Download".',
        'Step 4: Upload your recent passport-size photograph (25 KB in JPEG/JPG format, 250x250 pixels).',
        'Step 5: Enter the Captcha code and click on "Download Admit Card".',
        'Step 6: Print 2 copies in color on A4 paper and verify Roll Number and Exam Center Code.'
      ],
      hi: [
        'चरण 1: BPSC की आधिकारिक वेबसाइट onlinebpsc.bihar.gov.in पर जाएं।',
        'चरण 2: अपना यूजरनेम (Username) और पासवर्ड दर्ज कर लॉगिन करें।',
        'चरण 3: अभ्यर्थी डैशबोर्ड पर "Admit Card Download" विकल्प पर क्लिक करें।',
        'चरण 4: अपना हालिया 25 KB का पासपोर्ट साइज फोटो (250x250 पिक्सल) अपलोड करें।',
        'चरण 5: कैप्चा कोड भरकर "Download Admit Card" पर क्लिक करें।',
        'चरण 6: A4 साइज पर 2 रंगीन प्रतियां प्रिंट करें तथा परीक्षा केंद्र कोड व रोल नंबर की जांच करें।'
      ]
    },
    officialLinks: {
      admitCardUrl: 'https://onlinebpsc.bihar.gov.in/',
      officialWebsiteUrl: 'https://bpsc.bih.nic.in/',
      officialNotificationPdfUrl: 'https://bpsc.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'What documents to carry to the BPSC exam center?',
        questionHi: 'BPSC परीक्षा केंद्र पर कौन-से दस्तावेज ले जाना अनिवार्य है?',
        answerEn: 'Printed E-Admit Card, Original Photo ID (Aadhaar Card / Voter ID / Passport), and two passport photos.',
        answerHi: 'मुद्रित ई-एडमिट कार्ड, मूल फोटो पहचान पत्र (आधार कार्ड/वोटर कार्ड/पासपोर्ट) और दो पासपोर्ट फोटो।'
      }
    ]
  },
  {
    id: 'post-admit-csbc-police',
    slug: 'csbc-bihar-police-constable-admit-card-written-exam',
    category: 'admit-card',
    stateScope: 'Bihar',
    titleEn: 'CSBC Bihar Police Constable Admit Card — Written Exam Hall Ticket & Center Details (21,391 Posts)',
    titleHi: 'CSBC बिहार पुलिस कांस्टेबल भर्ती एडमिट कार्ड — 21,391 सिपाही पदों की लिखित परीक्षा का हॉल टिकट जारी',
    shortSummaryEn: 'Central Selection Board of Constable (CSBC), Bihar releases E-Admit Cards for 21,391 Constable vacancies in Bihar Police. Download using Registration ID or Mobile Number with Date of Birth.',
    shortSummaryHi: 'केंद्रीय चयन पर्षद (सिपाही भर्ती), बिहार द्वारा 21,391 सिपाही पदों हेतु लिखित परीक्षा का एडमिट कार्ड। अभ्यर्थी रजिस्ट्रेशन आईडी या मोबाइल नंबर और जन्म तिथि से तुरंत डाउनलोड करें।',
    organizationEn: 'Central Selection Board of Constable (CSBC, Bihar)',
    organizationHi: 'केंद्रीय चयन पर्षद (सिपाही भर्ती), बिहार',
    postNameEn: 'CSBC Constable Written Exam Admit Card',
    postNameHi: 'बिहार पुलिस सिपाही लिखित परीक्षा प्रवेश पत्र',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-18',
    postedDate: '2024-07-15',
    importantDates: {
      admitCardDate: 'Available for Download Online',
      examDate: 'Multiple Shifts (OMR Sheet Based Offline)',
      resultDate: 'Scorecard & Physical (PET) List on csbc.bihar.gov.in'
    },
    howToApply: {
      en: [
        'Step 1: Visit csbc.bihar.gov.in official CSBC website.',
        'Step 2: Under Bihar Police tab, click on "Download Admit Card for Written Examination (Advt. No. 01/2023)".',
        'Step 3: Enter your Registration Number OR registered 10-digit Mobile Number.',
        'Step 4: Select your Date of Birth (DD-MM-YYYY) and enter security Captcha.',
        'Step 5: Click Submit and download your Admit Card PDF.'
      ],
      hi: [
        'चरण 1: CSBC की आधिकारिक वेबसाइट csbc.bihar.gov.in पर जाएं।',
        'चरण 2: बिहार पुलिस सेक्शन में "Download Admit Card for Written Exam" लिंक पर क्लिक करें।',
        'चरण 3: अपना रजिस्ट्रेशन नंबर या 10 अंकों का पंजीकृत मोबाइल नंबर दर्ज करें।',
        'चरण 4: जन्म तिथि (DD/MM/YYYY) एवं कैप्चा कोड भरें।',
        'चरण 5: Submit पर क्लिक करके अपना एडमिट कार्ड डाउनलोड करें।'
      ]
    },
    officialLinks: {
      admitCardUrl: 'https://csbc.bihar.gov.in/',
      officialWebsiteUrl: 'https://csbc.bihar.gov.in/',
      officialNotificationPdfUrl: 'https://csbc.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How to get a duplicate admit card if photo is unclear?',
        questionHi: 'यदि एडमिट कार्ड पर फोटो अस्पष्ट है तो क्या करें?',
        answerEn: 'Visit the CSBC office in Patna on designated dates with two photos and application receipt to get a duplicate pass.',
        answerHi: 'निर्धारित तिथि पर पटना स्थित CSBC कार्यालय जाकर दो फोटो व आवेदन रसीद दिखाकर डुप्लीकेट एडमिट कार्ड प्राप्त करें।'
      }
    ]
  },
  {
    id: 'post-admit-ssc-gd',
    slug: 'ssc-gd-constable-cbt-admit-card-application-status',
    category: 'admit-card',
    stateScope: 'Central',
    titleEn: 'SSC GD Constable CBT Admit Card & Application Status — All Regional Portals (CR, ER, NR, WR, SR)',
    titleHi: 'SSC GD कांस्टेबल CBT एडमिट कार्ड व एप्लीकेशन स्टेटस — सभी क्षेत्रीय रीजन (CR, ER, NR, WR) डाउनलोड लिंक',
    shortSummaryEn: 'Staff Selection Commission (SSC) activates Application Status and E-Admit Cards for Constable (GD) in CAPFs & Assam Rifles. Check exam city, shift timings, and roll number.',
    shortSummaryHi: 'कर्मचारी चयन आयोग (SSC) द्वारा GD कांस्टेबल परीक्षा का आवेदन स्टेटस और एडमिट कार्ड सभी रीजनल वेबसाइट्स (जैसे CR पटना/इलाहाबाद, NR दिल्ली आदि) पर जारी।',
    organizationEn: 'Staff Selection Commission (SSC)',
    organizationHi: 'कर्मचारी चयन आयोग',
    postNameEn: 'SSC GD Constable Hall Ticket & City Slip',
    postNameHi: 'SSC GD कांस्टेबल परीक्षा प्रवेश पत्र',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-12',
    postedDate: '2024-12-01',
    importantDates: {
      admitCardDate: 'Active Region-wise (CR, NR, ER, WR)',
      examDate: 'Computer Based Exam (CBT)',
      resultDate: 'Cutoff & Answer Key on ssc.gov.in'
    },
    howToApply: {
      en: [
        'Step 1: Go to ssc.gov.in or your Regional SSC website (e.g. ssc-cr.org for Bihar & UP).',
        'Step 2: Click on "Status / Download Admit Card For Constable (GD) Examination".',
        'Step 3: Enter Registration ID / Roll Number or Candidate Name + Father Name + Date of Birth.',
        'Step 4: Check exam date, shift timing, exam city, and click "Download Admit Card".'
      ],
      hi: [
        'चरण 1: ssc.gov.in या अपने रीजनल पोर्टल (जैसे बिहार/यूपी के लिए ssc-cr.org) पर जाएं।',
        'चरण 2: "Status / Download Admit Card For Constable (GD)" लिंक पर क्लिक करें।',
        'चरण 3: रजिस्ट्रेशन आईडी या नाम, पिता का नाम और जन्म तिथि भरें।',
        'चरण 4: परीक्षा केंद्र का शहर व शिफ्ट देखें और रंगीन एडमिट कार्ड डाउनलोड करें।'
      ]
    },
    officialLinks: {
      admitCardUrl: 'https://ssc.gov.in/',
      officialWebsiteUrl: 'https://ssc.gov.in/',
      officialNotificationPdfUrl: 'https://ssc.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How many days before the exam is the final SSC GD admit card available?',
        questionHi: 'SSC GD का फाइनल एडमिट कार्ड परीक्षा से कितने दिन पहले डाउनलोड होता है?',
        answerEn: 'Exam City status is shown 10-14 days before; the final printable hall ticket is downloadable 4 days before exam date.',
        answerHi: 'परीक्षा शहर 10-14 दिन पहले दिखता है; परीक्षा केंद्र का पूरा पता युक्त एडमिट कार्ड परीक्षा तिथि से 4 दिन पहले डाउनलोड होता है।'
      }
    ]
  },
  {
    id: 'post-admit-bseb-matric-inter',
    slug: 'bseb-bihar-board-10th-12th-annual-exam-admit-card',
    category: 'admit-card',
    stateScope: 'Bihar',
    titleEn: 'BSEB Bihar Board 10th Matric & 12th Inter Final Admit Card — Download School Wise & Student Wise',
    titleHi: 'BSEB बिहार बोर्ड 10वीं मैट्रिक व 12वीं इंटर वार्षिक परीक्षा फाइनल एडमिट कार्ड जारी',
    shortSummaryEn: 'Bihar School Examination Board (BSEB) releases official final admit cards for Matric (Class 10) and Intermediate (Class 12) Annual Board Examinations. Download online or obtain signed copy from school principal.',
    shortSummaryHi: 'बिहार विद्यालय परीक्षा समिति (BSEB) द्वारा 10वीं मैट्रिक और 12वीं इंटर वार्षिक बोर्ड परीक्षा का मूल प्रवेश पत्र जारी। स्कूल/कॉलेज प्रधान द्वारा हस्ताक्षरित एडमिट कार्ड प्राप्त करें।',
    organizationEn: 'Bihar School Examination Board (BSEB, Patna)',
    organizationHi: 'बिहार विद्यालय परीक्षा समिति (BSEB)',
    postNameEn: 'BSEB Matric (10th) & Inter (12th) Final Admit Card',
    postNameHi: 'बिहार बोर्ड मैट्रिक व इंटर वार्षिक परीक्षा एडमिट कार्ड',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-10',
    postedDate: '2025-01-10',
    importantDates: {
      admitCardDate: 'Available on secondary.biharboardonline.com',
      examDate: 'February (Matric & Inter Board Exams)',
      resultDate: 'Announced in March / April'
    },
    howToApply: {
      en: [
        'Step 1: School Principals visit seniorsecondary.biharboardonline.com or secondary.biharboardonline.com.',
        'Step 2: Log in with School User ID and Password.',
        'Step 3: Download student admit cards batch-wise in PDF.',
        'Step 4: Affix official School Seal and Principal Signature before distributing to students.'
      ],
      hi: [
        'चरण 1: विद्यालय प्रधान seniorsecondary.biharboardonline.com या secondary.biharboardonline.com पर जाएं।',
        'चरण 2: स्कूल यूजर आईडी और पासवर्ड से लॉगिन करें।',
        'चरण 3: सभी छात्र-छात्राओं के एडमिट कार्ड पीडीएफ में डाउनलोड करें।',
        'चरण 4: स्कूल की मुहर और प्रधानाध्यापक के हस्ताक्षर करवाकर छात्रों को वितरित करें।'
      ]
    },
    officialLinks: {
      admitCardUrl: 'https://secondary.biharboardonline.com/',
      officialWebsiteUrl: 'https://biharboardonline.bihar.gov.in/',
      officialNotificationPdfUrl: 'https://biharboardonline.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Can students directly download BSEB final admit card without school login?',
        questionHi: 'क्या छात्र बिना स्कूल लॉगिन के सीधे बोर्ड एडमिट कार्ड डाउनलोड कर सकते हैं?',
        answerEn: 'Dummy admit cards can be downloaded by students directly; final exam admit cards must bear the principal signature and school stamp.',
        answerHi: 'डमी एडमिट कार्ड छात्र सीधे डाउनलोड कर सकते हैं; मुख्य परीक्षा का ओरिजिनल एडमिट कार्ड स्कूल मुहर व हस्ताक्षर के साथ ही मान्य होता है।'
      }
    ]
  },

  // =========================================================================
  // 3. RESULTS & MERIT LISTS (results)
  // =========================================================================
  {
    id: 'post-result-bseb-10th-12th',
    slug: 'bseb-bihar-board-10th-matric-12th-inter-annual-result',
    category: 'results',
    stateScope: 'Bihar',
    titleEn: 'BSEB Bihar Board 10th Matric & 12th Inter Annual Board Result — Check Marksheet with Roll Code & Roll No',
    titleHi: 'BSEB बिहार बोर्ड 10वीं मैट्रिक व 12वीं इंटर वार्षिक परीक्षा रिजल्ट — रोल कोड व रोल नंबर से मार्कशीट देखें',
    shortSummaryEn: 'Bihar School Examination Board (BSEB) announces official Annual Board Examination Results for 10th (Matric) and 12th (Intermediate Arts, Science, Commerce). Check subject-wise marks, division, and download marksheet PDF.',
    shortSummaryHi: 'बिहार बोर्ड (BSEB) 10वीं मैट्रिक और 12वीं इंटर का वार्षिक परीक्षा परिणाम आधिकारिक वेबसाइट results.biharboardonline.com पर जारी। रोल कोड और रोल नंबर डालकर तुरंत अपनी मूल मार्कशीट चेक करें।',
    organizationEn: 'Bihar School Examination Board (BSEB)',
    organizationHi: 'बिहार विद्यालय परीक्षा समिति',
    postNameEn: 'BSEB Matric (10th) & Inter (12th) Scorecard & Marksheet',
    postNameHi: 'बिहार बोर्ड मैट्रिक व इंटर वार्षिक रिजल्ट एवं अंकतालिका',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-05',
    postedDate: '2025-03-25',
    importantDates: {
      resultDate: 'Live on results.biharboardonline.com',
      examDate: 'February Annual Board Exams'
    },
    howToApply: {
      en: [
        'Step 1: Visit results.biharboardonline.com or bsebmatric.org.',
        'Step 2: Click on "Annual Secondary (Matric) / Senior Secondary (Inter) Examination Result".',
        'Step 3: Enter your 5-digit Roll Code (e.g. 51001) and Roll Number (e.g. 24010012).',
        'Step 4: Solve the mathematical security captcha (e.g. 15 + 8 = 23).',
        'Step 5: Click "Search Result" or "View Result".',
        'Step 6: Download and print your detailed subject-wise marksheet.'
      ],
      hi: [
        'चरण 1: आधिकारिक रिजल्ट पोर्टल results.biharboardonline.com पर जाएं।',
        'चरण 2: "Annual Secondary (10th) / Senior Secondary (12th) Result" लिंक पर क्लिक करें।',
        'चरण 3: अपना 5 अंकों का रोल कोड और रोल नंबर दर्ज करें।',
        'चरण 4: दिया गया कैप्चा (जैसे 12 + 6 = 18) हल करें।',
        'चरण 5: "View Result" पर क्लिक करके अपना विषयवार अंक और डिवीजन देखें।',
        'चरण 6: मार्कशीट पीडीएफ डाउनलोड करके सुरक्षित प्रिंट निकालें।'
      ]
    },
    officialLinks: {
      resultUrl: 'https://results.biharboardonline.com/',
      officialWebsiteUrl: 'https://biharboardonline.bihar.gov.in/',
      officialNotificationPdfUrl: 'https://biharboardonline.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How to apply for scrutiny/re-checking if unsatisfied with marks?',
        questionHi: 'अंकों से असंतुष्ट होने पर स्क्रूटनी / री-चेकिंग आवेदन कैसे करें?',
        answerEn: 'Apply online on biharboardonline.bihar.gov.in per subject fee of ₹120 within 7 days of result declaration.',
        answerHi: 'रिजल्ट आने के 7 दिनों के भीतर biharboardonline पोर्टल पर ₹120 प्रति विषय शुल्क देकर ऑनलाइन स्क्रूटनी आवेदन करें।'
      }
    ]
  },
  {
    id: 'post-result-ssc-gd',
    slug: 'ssc-gd-constable-written-exam-result-cutoff-merit-list',
    category: 'results',
    stateScope: 'Central',
    titleEn: 'SSC GD Constable Written CBT Result — Category Wise Cutoff Marks & Merit List PDF for PET/PST',
    titleHi: 'SSC GD कांस्टेबल लिखित परीक्षा रिजल्ट — राज्यवार व श्रेणीवार कटऑफ मार्क्स एवं PET शारीरिक जांच मेरit लिस्ट PDF',
    shortSummaryEn: 'Staff Selection Commission (SSC) declares written computer-based examination (CBT) results for Constable (GD) recruitment. Download List 1 (Female), List 2 (Male), and State-wise Cutoff PDF.',
    shortSummaryHi: 'कर्मचारी चयन आयोग (SSC) द्वारा GD सिपाही भर्ती परीक्षा का परिणाम और कटऑफ PDF जारी। शारीरिक दक्षता परीक्षा (PET/PST) के लिए चयनित अभ्यर्थी रोल नंबर से अपना नाम चेक करें।',
    organizationEn: 'Staff Selection Commission (SSC)',
    organizationHi: 'कर्मचारी चयन आयोग',
    postNameEn: 'SSC GD CBT Scorecard & Selected Candidate List',
    postNameHi: 'SSC GD लिखित परीक्षा परिणाम एवं कटऑफ लिस्ट',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-15',
    postedDate: '2024-07-10',
    importantDates: {
      resultDate: 'Published on ssc.gov.in'
    },
    howToApply: {
      en: [
        'Step 1: Visit official SSC portal at ssc.gov.in.',
        'Step 2: Go to the "Result" tab and select "CONSTABLE-GD".',
        'Step 3: Click on the PDF link for "List of Male / Female candidates qualified for PET/PST".',
        'Step 4: Press "Ctrl + F" and search your Roll Number or Name in the merit list.',
        'Step 5: Check write-up notice for category-wise (UR, EWS, OBC, SC, ST) and state-wise cutoff marks.'
      ],
      hi: [
        'चरण 1: SSC की वेबसाइट ssc.gov.in पर जाएं।',
        'चरण 2: Result सेक्शन में जाकर CONSTABLE-GD टैब पर क्लिक करें।',
        'चरण 3: चयनित पुरुष एवं महिला अभ्यर्थियों की मेरिट लिस्ट PDF डाउनलोड करें।',
        'चरण 4: पीडीएफ में Ctrl + F दबाकर अपना रोल नंबर या नाम खोजें।',
        'चरण 5: आधिकारिक नोटिस में अपने राज्य और श्रेणी का कटऑफ अंक देखें।'
      ]
    },
    officialLinks: {
      resultUrl: 'https://ssc.gov.in/',
      officialWebsiteUrl: 'https://ssc.gov.in/',
      officialNotificationPdfUrl: 'https://ssc.gov.in/'
    },
    faqs: [
      {
        questionEn: 'What is the next stage after clearing SSC GD written exam?',
        questionHi: 'SSC GD लिखित परीक्षा पास करने के बाद अगला चरण क्या होता है?',
        answerEn: 'Qualified candidates undergo Physical Efficiency Test (PET - 5 Km race in 24 min for male) and Physical Standard Test (PST).',
        answerHi: 'सफल अभ्यर्थियों को शारीरिक दक्षता परीक्षा (PET - पुरुषों के लिए 24 मिनट में 5 किमी दौड़) एवं शारीरिक नाप-जोख (PST) के लिए बुलाया जाता है।'
      }
    ]
  },

  // =========================================================================
  // 4. ANSWER KEYS & OBJECTION (answer-key)
  // =========================================================================
  {
    id: 'post-ans-ssc-gd',
    slug: 'ssc-gd-constable-official-answer-key-candidate-response-sheet',
    category: 'answer-key',
    stateScope: 'Central',
    titleEn: 'SSC GD Constable Official Answer Key & Candidate Response Sheet — Check Score & Raise Objections',
    titleHi: 'SSC GD कांस्टेबल आधिकारिक उत्तर कुंजी (Answer Key) व रिस्पॉन्स शीट — अंक देखें व आपत्ति दर्ज करें',
    shortSummaryEn: 'Staff Selection Commission (SSC) publishes official tentative Answer Key and Response Sheets for Constable (GD) examination. Log in with Roll Number and Password to calculate score and file objections @ ₹100 per question.',
    shortSummaryHi: 'कर्मचारी चयन आयोग (SSC) द्वारा GD सिपाही भर्ती परीक्षा की उत्तर कुंजी और प्रश्न पत्र जारी। अभ्यर्थी रोल नंबर व पासवर्ड से लॉगिन कर अपने सही/गलत उत्तर जांचें और आपत्ति दर्ज करें।',
    organizationEn: 'Staff Selection Commission (SSC)',
    organizationHi: 'कर्मचारी चयन आयोग',
    postNameEn: 'SSC GD Official Answer Key & Question Paper',
    postNameHi: 'SSC GD आंसर की एवं प्रश्न पत्र',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-05-14',
    postedDate: '2024-04-05',
    importantDates: {
      answerKeyDate: 'Live on SSC Portal',
      correctionWindow: 'Objection Window Open for 5 Days'
    },
    howToApply: {
      en: [
        'Step 1: Visit ssc.gov.in and click on "Uploading of Tentative Answer Key of Constable (GD)".',
        'Step 2: Click on the candidate login link at the bottom of the notification PDF.',
        'Step 3: Enter your Examination Roll Number and Password (as per admit card DOB format).',
        'Step 4: Click "Generate Question Paper & Response Sheet" to view all attempted questions.',
        'Step 5: To challenge any question, click "Raise Objection" and pay ₹100 online per challenged question.'
      ],
      hi: [
        'चरण 1: ssc.gov.in पर जाकर "Tentative Answer Key for Constable (GD)" लिंक खोलें।',
        'चरण 2: नोटिस में दिए गए कैंडिडेट लॉगिन लिंक पर क्लिक करें।',
        'चरण 3: अपना परीक्षा रोल नंबर और पासवर्ड (जन्म तिथि) दर्ज करें।',
        'चरण 4: "Response Sheet" डाउनलोड करें और अपने सही/गलत उत्तरों का मिलान करें।',
        'चरण 5: किसी गलत उत्तर पर आपत्ति दर्ज करने हेतु प्रति प्रश्न ₹100 शुल्क देकर सबमिट करें।'
      ]
    },
    officialLinks: {
      answerKeyUrl: 'https://ssc.gov.in/',
      officialWebsiteUrl: 'https://ssc.gov.in/',
      officialNotificationPdfUrl: 'https://ssc.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How to calculate total marks from SSC GD answer key?',
        questionHi: 'SSC GD आंसर की से कुल अंक कैसे जोड़ें?',
        answerEn: 'Each correct answer = +2 marks; each wrong answer = -0.50 (or 0.25 as per notice) marks.',
        answerHi: 'प्रत्येक सही उत्तर के लिए +2 अंक जोड़ें और गलत उत्तर के लिए निर्धारित नेगेटिव अंक घटाएं।'
      }
    ]
  },
  {
    id: 'post-ans-bpsc-70th',
    slug: 'bpsc-70th-cce-prelims-official-answer-key-booklet-series',
    category: 'answer-key',
    stateScope: 'Bihar',
    titleEn: 'BPSC 70th Integrated CCE Prelims Official Answer Key — Booklet Series A, B, C, D PDF Download',
    titleHi: 'BPSC 70वीं प्रारंभिक परीक्षा आधिकारिक उत्तर कुंजी — बुकलेट सीरीज A, B, C, D डाउनलोड व आपत्ति दर्ज',
    shortSummaryEn: 'Bihar Public Service Commission (BPSC) releases provisional answer keys for General Studies Paper in 70th CCE. Candidates can compare answers with Booklet Series A, B, C, D and submit online objections through dashboard.',
    shortSummaryHi: 'BPSC द्वारा 70वीं संयुक्त (प्रारंभिक) प्रतियोगिता परीक्षा की सामान्य अध्ययन विषय की सभी बुकलेट सीरीज (A, B, C, D) की आंसर की PDF जारी। आपत्ति दर्ज करने का पूरा विवरण।',
    organizationEn: 'Bihar Public Service Commission (BPSC)',
    organizationHi: 'बिहार लोक सेवा आयोग',
    postNameEn: 'BPSC 70th Prelims Answer Key PDF',
    postNameHi: 'BPSC 70वीं आंसर की एवं बुकलेट समाधान',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-25',
    postedDate: '2024-12-15',
    importantDates: {
      answerKeyDate: 'Published on bpsc.bih.nic.in',
      correctionWindow: 'Objection Window on Candidate Dashboard'
    },
    howToApply: {
      en: [
        'Step 1: Visit bpsc.bih.nic.in.',
        'Step 2: Click on "Provisional Answer Key: General Studies (70th Integrated CCE)".',
        'Step 3: Download the PDF containing answers for Series A, Series B, Series C, and Series D.',
        'Step 4: To file objections, log in to onlinebpsc.bihar.gov.in and upload authentic book reference proof.'
      ],
      hi: [
        'चरण 1: BPSC की वेबसाइट bpsc.bih.nic.in पर जाएं।',
        'चरण 2: "Provisional Answer Key: General Studies" पीडीएफ डाउनलोड करें।',
        'चरण 3: अपनी प्रश्न पुस्तिका सीरीज (A, B, C, D) के अनुसार उत्तरों का मिलान करें।',
        'चरण 4: आपत्ति दर्ज करने के लिए onlinebpsc.bihar.gov.in पर लॉगिन करके मानक पुस्तक का प्रमाण संलग्न करें।'
      ]
    },
    officialLinks: {
      answerKeyUrl: 'https://bpsc.bih.nic.in/',
      officialWebsiteUrl: 'https://bpsc.bih.nic.in/',
      officialNotificationPdfUrl: 'https://bpsc.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'Are email objections accepted by BPSC?',
        questionHi: 'क्या BPSC ईमेल या स्पीड पोस्ट से आपत्तियां स्वीकार करता है?',
        answerEn: 'No, objections are strictly accepted only via the online candidate dashboard.',
        answerHi: 'नहीं, आपत्तियां केवल अभ्यर्थी के ऑनलाइन डैशबोर्ड के माध्यम से ही स्वीकार की जाती हैं।'
      }
    ]
  },

  // =========================================================================
  // 5. GOVT SCHEMES (schemes)
  // =========================================================================
  {
    id: 'post-scheme-pm-kisan',
    slug: 'pm-kisan-samman-nidhi-19th-20th-installment-status-ekyc',
    category: 'schemes',
    stateScope: 'Central',
    titleEn: 'PM Kisan Samman Nidhi — 19th & 20th Installment Status, e-KYC & New Farmer Registration (₹6,000/Year)',
    titleHi: 'पीएम किसान सम्मान निधि — 19वीं व 20वीं किस्त ₹2,000 बैंक खाता स्टेटस, ई-केवाईसी व नया किसान पंजीकरण',
    shortSummaryEn: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) provides ₹6,000 annual income support to eligible landholding farmer families in three equal installments of ₹2,000 via Direct Benefit Transfer (DBT). Complete biometric/facial e-KYC to receive funds.',
    shortSummaryHi: 'प्रधानमंत्री किसान सम्मान निधि योजना के तहत देश के किसान परिवारों को हर चार महीने में ₹2,000 (वार्षिक ₹6,000) की आर्थिक सहायता डीबीटी के माध्यम से सीधे बैंक खाते में दी जाती है। स्टेटस चेक व e-KYC की पूरी विधि।',
    organizationEn: 'Ministry of Agriculture and Farmers Welfare, Govt of India',
    organizationHi: 'कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार',
    postNameEn: 'PM Kisan Samman Nidhi (₹2,000 DBT Installment)',
    postNameHi: 'पीएम किसान सम्मान निधि (₹6,000 वार्षिक सहायता)',
    totalVacanciesOrAmount: '₹6,000 / Year (₹2,000 Every 4 Months)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-15',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on pmkisan.gov.in',
      applicationLastDate: 'Permanent Central Scheme',
      scholarshipDisbursal: 'Disbursed in April-July, Aug-Nov & Dec-March'
    },
    applicationFee: {
      generalObcEws: '₹0 (Free / कोई शुल्क नहीं)',
      scStPwd: '₹0 (Free / कोई शुल्क नहीं)',
      female: '₹0 (Free / कोई शुल्क नहीं)',
      paymentMode: '100% Free Government DBT Portal'
    },
    eligibility: [
      {
        postName: 'PM Kisan Beneficiary Farmer',
        qualification: 'Landholding Small & Marginal Farmer Family',
        eligibilityEn: 'Farmer families having cultivable agricultural land in their name with verified land records (Khata/Khesra) and Aadhaar seeded bank account.',
        eligibilityHi: 'जिन किसान परिवारों के नाम पर स्वयं की कृषि योग्य भूमि के दस्तावेज (जमाबंदी/खतियान) दर्ज हैं और बैंक खाता आधार से डीबीटी लिंक है।'
      }
    ],
    requiredDocuments: {
      en: [
        'Aadhaar Card linked with active mobile number',
        'Agricultural Land Record (Jamabandi / Khatian / LPC Copy)',
        'Bank Account Passbook with Aadhaar NPCI DBT Seeding',
        'Self-Declaration Form'
      ],
      hi: [
        'आधार कार्ड (मोबाइल नंबर से लिंक होना चाहिए)',
        'जमीन के दस्तावेज (जमाबंदी, दाखिल-खारिज रसीद या एलपीसी)',
        'बैंक पासबुक (खाता NPCI/Aadhaar DBT से लिंक होना अनिवार्य)',
        'स्व-घोषणा पत्र'
      ]
    },
    howToApply: {
      en: [
        'Step 1: Visit the official PM Kisan portal at pmkisan.gov.in.',
        'Step 2: In "Farmers Corner", click on "New Farmer Registration" (Rural / Urban Farmer).',
        'Step 3: Enter Aadhaar Number, select State, enter Mobile Number, and verify OTP.',
        'Step 4: Enter Land details — District, Sub-District, Block, Village, Survey/Khata Number, Khasra Number, and Area in Hectares.',
        'Step 5: Upload scanned Land Document and click Save.',
        'Step 6: To complete e-KYC, click "e-KYC" in Farmers Corner and authenticate with Aadhaar OTP.'
      ],
      hi: [
        'चरण 1: पीएम किसान के आधिकारिक पोर्टल pmkisan.gov.in पर जाएं।',
        'चरण 2: Farmers Corner में "New Farmer Registration" पर क्लिक करें (ग्रामीण/शहरी किसान चुनें)।',
        'चरण 3: आधार नंबर, राज्य और मोबाइल नंबर डालकर ओटीपी सत्यापित करें।',
        'चरण 4: अपनी जमीन का विवरण — जिला, प्रखंड, गांव, खाता संख्या, खसरा संख्या एवं रकबा भरें।',
        'चरण 5: जमीन की रसीद/दस्तावेज अपलोड कर फॉर्म सबमिट करें।',
        'चरण 6: e-KYC करने के लिए Farmers Corner में "e-KYC" लिंक पर जाकर आधार ओटीपी से तुरंत ई-केवाईसी पूर्ण करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://pmkisan.gov.in/',
      officialWebsiteUrl: 'https://pmkisan.gov.in/',
      directPortalUrl: 'https://pmkisan.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How can I check if my PM Kisan ₹2,000 installment is credited?',
        questionHi: 'पीएम किसान ₹2,000 की किस्त आई या नहीं, कैसे चेक करें?',
        answerEn: 'Go to pmkisan.gov.in, click "Know Your Status", enter Registration Number or Mobile Number to see FTO generated and Bank credit date.',
        answerHi: 'pmkisan.gov.in पर "Know Your Status" पर क्लिक कर अपना रजिस्ट्रेशन नंबर दर्ज करें, जहां FTO स्टेटस और बैंक खाते में जमा होने की तारीख दिखेगी।'
      }
    ]
  },
  {
    id: 'post-scheme-pm-surya-ghar',
    slug: 'pm-surya-ghar-muft-bijli-yojana-rooftop-solar-subsidy',
    category: 'schemes',
    stateScope: 'Central',
    titleEn: 'PM Surya Ghar Muft Bijli Yojana — Rooftop Solar Subsidy up to ₹78,000 & 300 Units Free Electricity',
    titleHi: 'पीएम सूर्य घर मुफ्त बिजली योजना — रूफटॉप सोलर पर ₹78,000 की सरकारी सब्सिडी व 300 यूनिट मुफ्त बिजली',
    shortSummaryEn: 'Ministry of New and Renewable Energy (MNRE) launches PM Surya Ghar Muft Bijli Yojana to install solar panels on 1 Crore households. Get ₹30,000 subsidy for 1 kW, ₹60,000 for 2 kW, and maximum ₹78,000 for 3 kW+ systems.',
    shortSummaryHi: 'केंद्र सरकार की महत्वाकांक्षी योजना जिसके तहत घर की छत पर सोलर पैनल लगाने पर ₹78,000 तक की डायरेक्ट बैंक सब्सिडी मिलती है और हर महीने 300 यूनिट तक मुफ्त बिजली का लाभ प्राप्त होता है।',
    organizationEn: 'Ministry of New & Renewable Energy (MNRE, Govt of India)',
    organizationHi: 'नवीन एवं नवीकरणीय ऊर्जा मंत्रालय, भारत सरकार',
    postNameEn: 'PM Surya Ghar Rooftop Solar Scheme',
    postNameHi: 'पीएम सूर्य घर रूफटॉप सोलर सब्सिडी योजना',
    totalVacanciesOrAmount: '₹78,000 Direct Subsidy + 300 Units Free Power',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-12',
    postedDate: '2024-02-15',
    importantDates: {
      applicationStart: 'Online Registration Open on National Portal',
      applicationLastDate: 'Active Nationwide',
      scholarshipDisbursal: 'Subsidy credited directly to bank within 30 days of net-meter install'
    },
    howToApply: {
      en: [
        'Step 1: Visit pmsuryaghar.gov.in and click on "Apply for Rooftop Solar".',
        'Step 2: Select your State, Electricity Distribution Company (DISCOM, e.g. NBPDCL / SBPDCL in Bihar), and enter Electricity Consumer Account Number (CA Number).',
        'Step 3: Enter Mobile Number and Email ID to complete registration.',
        'Step 4: Log in and submit application for Rooftop Solar with your sanctioned load and roof area.',
        'Step 5: Get technical approval from DISCOM and choose registered vendor to install solar panels.',
        'Step 6: After installation and Net Meter commissioning by DISCOM, upload bank details to receive ₹78,000 subsidy directly in your bank account.'
      ],
      hi: [
        'चरण 1: pmsuryaghar.gov.in पोर्टल पर जाकर "Apply for Rooftop Solar" पर क्लिक करें।',
        'चरण 2: अपना राज्य, बिजली वितरण कंपनी (जैसे बिहार में NBPDCL/SBPDCL) चुनें और बिजली बिल का CA नंबर दर्ज करें।',
        'चरण 3: मोबाइल नंबर दर्ज कर पंजीकरण पूरा करें।',
        'चरण 4: लॉगिन करके सोलर पैनल क्षमता (1kW, 2kW या 3kW) का चयन कर ऑनलाइन आवेदन करें।',
        'चरण 5: डिस्कॉम से अनुमति मिलने पर अधिकृत वेंडर से सोलर पैनल लगवाएं।',
        'चरण 6: नेट मीटर लगने के बाद अपना बैंक खाता अपलोड करें, सब्सिडी की राशि सीधे आपके बैंक में जमा हो जाएगी।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://pmsuryaghar.gov.in/',
      officialWebsiteUrl: 'https://pmsuryaghar.gov.in/',
      directPortalUrl: 'https://pmsuryaghar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'What is the subsidy amount for 3 kW Solar System in PM Surya Ghar?',
        questionHi: 'पीएम सूर्य घर योजना में 3 किलोवाट सोलर पर कितनी सब्सिडी मिलती है?',
        answerEn: 'For 1 kW = ₹30,000, for 2 kW = ₹60,000, and for 3 kW or higher system = ₹78,000 direct subsidy.',
        answerHi: '1 किलोवाट पर ₹30,000, 2 किलोवाट पर ₹60,000 और 3 किलोवाट या अधिक पर अधिकतम ₹78,000 की सीधी सब्सिडी मिलती है।'
      }
    ]
  },
  {
    id: 'post-scheme-bihar-udyami',
    slug: 'mukhyamantri-udyami-yojana-bihar-10-lakh-loan-subsidy',
    category: 'schemes',
    stateScope: 'Bihar',
    titleEn: 'Mukhyamantri Udyami Yojana Bihar — ₹10 Lakh Loan (50% Subsidy / ₹5 Lakh Grant) for SC, ST, EBC, Women & Youth',
    titleHi: 'मुख्यमंत्री उद्यमी योजना बिहार — नया उद्योग लगाने के लिए ₹10 लाख का ऋण (₹5 लाख मुफ्त अनुदान/सब्सिडी)',
    shortSummaryEn: 'Department of Industries, Govt of Bihar offers financial assistance of ₹10 Lakh for setting up new micro and small industrial enterprises. Includes ₹5 Lakh non-refundable grant (50% subsidy) and ₹5 Lakh interest-free/1% loan repayable in 84 installments.',
    shortSummaryHi: 'बिहार सरकार के उद्योग विभाग द्वारा युवाओं, महिलाओं, अनुसूचित जाति/जनजाति व अत्यंत पिछड़ा वर्ग के नागरिकों को नया व्यवसाय व फैक्ट्री लगाने हेतु ₹10 लाख की सहायता, जिसमें ₹5 लाख की छूट (अनुदान) मिलती है।',
    organizationEn: 'Department of Industries, Govt of Bihar',
    organizationHi: 'उद्योग विभाग, बिहार सरकार',
    postNameEn: 'Mukhyamantri Udyami Yojana (SC/ST/EBC/Women/Yuva)',
    postNameHi: 'मुख्यमंत्री उद्यमी योजना (₹10 लाख)',
    totalVacanciesOrAmount: '₹10,00,000 Assistance (₹5,00,000 Subsidy)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-10',
    postedDate: '2024-06-01',
    importantDates: {
      applicationStart: 'Annual Online Registration Window',
      applicationLastDate: 'As per Industries Dept Notice',
      scholarshipDisbursal: 'Disbursed in 3 Phases after Physical Verification'
    },
    howToApply: {
      en: [
        'Step 1: Visit udyami.bihar.gov.in.',
        'Step 2: Click on "Registration" and enter Aadhaar Number, Category (SC/ST/EBC/Mahila/Yuva), and Mobile OTP.',
        'Step 3: Fill personal details, permanent Bihar address, and educational qualifications (10+2 / ITI / Diploma / Degree).',
        'Step 4: Select Project / Business Category (Manufacturing, Service, Agro Processing from 50+ approved projects).',
        'Step 5: Upload Caste Certificate, Residential Certificate, 10th & 12th Marksheets, PAN Card, and Current Bank Account Cancelled Cheque.',
        'Step 6: Submit final application and keep the acknowledgment slip for lottery/selection verification.'
      ],
      hi: [
        'चरण 1: उद्योग विभाग के पोर्टल udyami.bihar.gov.in पर जाएं।',
        'चरण 2: "पंजीकरण" पर क्लिक करके आधार नंबर, श्रेणी और मोबाइल ओटीपी दर्ज करें।',
        'चरण 3: अपनी व्यक्तिगत जानकारी, बिहार का मूल निवास और 12वीं/ITI/डिप्लोमा योग्यता भरें।',
        'चरण 4: अनुमोदित 50+ प्रोजेक्ट्स में से अपने व्यवसाय/उद्योग (विनिर्माण या सेवा क्षेत्र) का चयन करें।',
        'चरण 5: जाति प्रमाण पत्र, निवास प्रमाण पत्र, पैन कार्ड और करंट बैंक खाते का कैंसिल्ड चेक अपलोड करें।',
        'चरण 6: फाइनल सबमिट करें और लॉटरी चयन हेतु पावती सुरक्षित रखें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://udyami.bihar.gov.in/',
      officialWebsiteUrl: 'https://udyami.bihar.gov.in/',
      directPortalUrl: 'https://udyami.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Is a Current Bank Account mandatory for Bihar Udyami Yojana?',
        questionHi: 'क्या मुख्यमंत्री उद्यमी योजना के लिए करंट बैंक खाता जरूरी है?',
        answerEn: 'Yes, after selection, the applicant must have a Current Account in the name of their enterprise to receive project installments.',
        answerHi: 'हां, चयन के पश्चात अपने फर्म/उद्यम के नाम पर करंट बैंक खाता होना अनिवार्य है जिसमें अनुदान की किस्तें भेजी जाती हैं।'
      }
    ]
  },

  // =========================================================================
  // 6. SCHOLARSHIPS (scholarships)
  // =========================================================================
  {
    id: 'post-schol-pms-bihar',
    slug: 'bihar-post-matric-scholarship-pms-online-bc-ebc-sc-st',
    category: 'scholarships',
    stateScope: 'Bihar',
    titleEn: 'Bihar Post Matric Scholarship (PMS Online) — Financial Assistance for BC, EBC, SC & ST Students',
    titleHi: 'बिहार पोस्ट मैट्रिक छात्रवृत्ति (PMS Online) — BC, EBC, SC व ST छात्रों के लिए 11वीं, 12वीं, ITI, ग्रेजुएशन व B.Tech छात्रवृत्ति',
    shortSummaryEn: 'Education Department, Govt of Bihar provides Post Matric Scholarship for BC, EBC, SC, and ST students pursuing post-10th education (Intermediate, ITI, Polytechnic Diploma, Graduation, Post Graduation, B.Tech, Medical, Law) in Bihar or recognized institutions outside Bihar.',
    shortSummaryHi: 'बिहार सरकार के शिक्षा विभाग द्वारा पिछड़ा वर्ग, अत्यंत पिछड़ा वर्ग, अनुसूचित जाति और जनजाति के 10वीं उत्तीर्ण छात्र-छात्राओं को उच्च शिक्षा की फीस व रखरखाव हेतु छात्रवृत्ति।',
    organizationEn: 'Education Department, Govt of Bihar',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार',
    postNameEn: 'Bihar Post Matric Scholarship (PMS Portal)',
    postNameHi: 'बिहार पोस्ट मैट्रिक स्कॉलरशिप (PMS)',
    totalVacanciesOrAmount: 'Full Tuition Fee + ₹2,000 to ₹15,000 / Year Maintenance',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-08',
    postedDate: '2024-01-05',
    importantDates: {
      applicationStart: 'Available on pmsonline.bih.nic.in',
      applicationLastDate: 'Annual Academic Cycle Deadlines',
      scholarshipDisbursal: 'Direct Bank Transfer (DBT) to Student Aadhaar Account'
    },
    howToApply: {
      en: [
        'Step 1: Visit the official portal pmsonline.bih.nic.in.',
        'Step 2: Select your category link — "BC-EBC Students Apply" OR "SC-ST Students Apply".',
        'Step 3: Complete Student Registration with Aadhaar verification and Mobile/Email OTP.',
        'Step 4: Log in and enter personal details, father/mother name, caste, and annual family income (under ₹3 Lakh).',
        'Step 5: Select your Institution/College (State, District, College Name, Course Name, and Admission Year).',
        'Step 6: Upload Bonafide Certificate issued by College and Fee Receipt of the current academic year.',
        'Step 7: Finalize application and track status from Institute verification to District Committee approval.'
      ],
      hi: [
        'चरण 1: आधिकारिक पोर्टल pmsonline.bih.nic.in पर जाएं।',
        'चरण 2: अपनी श्रेणी — "BC-EBC आवेदन" या "SC-ST आवेदन" लिंक पर क्लिक करें।',
        'चरण 3: आधार प्रमाणीकरण और मोबाइल ओटीपी से नया पंजीकरण करें।',
        'चरण 4: लॉगिन करके व्यक्तिगत विवरण, जाति, आवासीय और पारिवारिक आय (3 लाख से कम) भरें।',
        'चरण 5: अपने कॉलेज/संस्थान का नाम, कोर्स (जैसे 12वीं, B.A, B.Sc, B.Tech, ITI आदि) और रोल नंबर चुनें।',
        'चरण 6: कॉलेज द्वारा जारी बोनाफाइड प्रमाण पत्र (Bonafide) और फीस रसीद अपलोड करें।',
        'चरण 7: फाइनल सबमिट करें और रसीद कॉलेज में जमा कराएं।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://pmsonline.bih.nic.in/',
      officialWebsiteUrl: 'https://pmsonline.bih.nic.in/',
      directPortalUrl: 'https://pmsonline.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'Can Bihar students studying outside Bihar apply for Bihar PMS?',
        questionHi: 'क्या बिहार के बाहर पढ़ाई कर रहे बिहार के छात्र इस स्कॉलरशिप के पात्र हैं?',
        answerEn: 'Yes, students studying in recognized government/private institutions outside Bihar can apply if their institution is registered on PMS.',
        answerHi: 'हां, बिहार के बाहर मान्यता प्राप्त संस्थानों में पढ़ने वाले बिहार के छात्र भी ऑनलाइन आवेदन कर सकते हैं।'
      }
    ]
  },
  {
    id: 'post-schol-kanya-utthan',
    slug: 'mukhyamantri-kanya-utthan-yojana-graduation-50000-scholarship',
    category: 'scholarships',
    stateScope: 'Bihar',
    titleEn: 'Mukhyamantri Kanya Utthan Yojana — ₹50,000 Financial Incentive for All Girl Graduates in Bihar (Medhasoft)',
    titleHi: 'मुख्यमंत्री कन्या उत्थान योजना — बिहार के सभी विश्वविद्यालयों से स्नातक (Graduation) पास छात्राओं को ₹50,000 प्रोत्साहन राशि',
    shortSummaryEn: 'Govt of Bihar provides ₹50,000 one-time direct cash incentive to every female student who passes Graduation (B.A., B.Sc., B.Com., B.Tech., etc.) from any recognized University of Bihar to promote higher education and women empowerment.',
    shortSummaryHi: 'बिहार के किसी भी मान्यता प्राप्त विश्वविद्यालय से स्नातक (ग्रेजुएशन) उत्तीर्ण करने वाली सभी छात्राओं को बिहार सरकार द्वारा ₹50,000 की प्रोत्साहन राशि सीधे बैंक खाते में दी जाती है।',
    organizationEn: 'Education Department, Govt of Bihar (Medhasoft Portal)',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार (मेधासॉफ्ट पोर्टल)',
    postNameEn: 'Mukhyamantri Kanya Utthan Yojana (Snataq Pass)',
    postNameHi: 'मुख्यमंत्री कन्या उत्थान योजना (स्नातक प्रोत्साहन ₹50,000)',
    totalVacanciesOrAmount: '₹50,000 Direct Bank Transfer (DBT)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-15',
    postedDate: '2024-01-15',
    importantDates: {
      applicationStart: 'Available on medhasoft.bih.nic.in',
      applicationLastDate: 'Batch-wise Portal Registration',
      scholarshipDisbursal: 'Transferred to student Aadhaar DBT account upon university verification'
    },
    howToApply: {
      en: [
        'Step 1: Visit medhasoft.bih.nic.in portal and click on "Mukhyamantri Kanya Utthan Yojana (Graduation)".',
        'Step 2: Click on "Student Registration" and agree to the declaration guidelines.',
        'Step 3: Select your University Name (e.g. LNMU, PU, BRABU, VKSU, TMBU, BNMU, JP Univ, PPU, etc.).',
        'Step 4: Enter your Graduation University Registration Number and Final Year Marksheet Roll Number.',
        'Step 5: Enter Aadhaar details (Name as per Aadhaar, Gender, DOB, Aadhaar Number) and verify.',
        'Step 6: Enter Mobile and Email to generate User ID and Password via SMS.',
        'Step 7: Log in with received credentials, finalize application and verify Bank Account status.'
      ],
      hi: [
        'चरण 1: मेधासॉफ्ट के आधिकारिक पोर्टल medhasoft.bih.nic.in पर जाएं।',
        'चरण 2: "मुख्यमंत्री कन्या उत्थान योजना (स्नातक)" लिंक पर क्लिक करें।',
        'चरण 3: अपना विश्वविद्यालय (जैसे LNMU, PU, BRABU, VKSU, TMBU, PPU आदि) चुनें।',
        'चरण 4: अपना स्नातक रजिस्ट्रेशन नंबर और अंतिम वर्ष की मार्कशीट का रोल नंबर दर्ज करें।',
        'चरण 5: आधार कार्ड विवरण भरें और OTP से सत्यापित करें।',
        'चरण 6: मोबाइल पर प्राप्त यूजर आईडी व पासवर्ड से लॉगिन करके फाइनल सबमिट करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://medhasoft.bih.nic.in/',
      officialWebsiteUrl: 'https://medhasoft.bih.nic.in/',
      directPortalUrl: 'https://medhasoft.bih.nic.in/'
    },
    faqs: [
      {
        questionEn: 'Can married female graduates apply for Kanya Utthan ₹50,000?',
        questionHi: 'क्या विवाहित छात्राएं भी स्नातक ₹50,000 प्रोत्साहन राशि की पात्र हैं?',
        answerEn: 'Yes, for Graduation level, both married and unmarried female graduates from Bihar are 100% eligible.',
        answerHi: 'हां, स्नातक (Graduation) स्तर पर विवाहित और अविवाहित दोनों छात्राएं पात्र हैं।'
      }
    ]
  },

  // =========================================================================
  // 7. ONLINE CITIZEN SERVICES (services)
  // =========================================================================
  {
    id: 'post-service-rtps',
    slug: 'bihar-rtps-service-plus-online-apply-jati-aay-niwas-ews',
    category: 'services',
    stateScope: 'Bihar',
    titleEn: 'Bihar RTPS Service Plus — Apply Online for Jati, Awasiya, Aay & EWS Certificate & Download PDF',
    titleHi: 'बिहार RTPS सर्विस प्लस — जाति, आवासीय, आय व ईडब्ल्यूएस प्रमाण पत्र ऑनलाइन आवेदन व डाउनलोड',
    shortSummaryEn: 'Service Plus Bihar (serviceonline.bihar.gov.in) offers online issuance of Caste, Residence, Income, EWS, Non-Creamy Layer (NCL) and Character certificates from Block (RO) to SDO and DM level with instant digital download.',
    shortSummaryHi: 'बिहार सरकार के आरटीपीएस पोर्टल के माध्यम से जाति, निवास, आय, EWS और नॉन-क्रीमी लेयर प्रमाण पत्र घर बैठे ऑनलाइन बनाएं और डिजिटल हस्ताक्षरित PDF डाउनलोड करें।',
    organizationEn: 'Department of General Administration, Govt of Bihar',
    organizationHi: 'सामान्य प्रशासन विभाग, बिहार सरकार',
    postNameEn: 'RTPS Online Citizen Certificates (Jati, Awasiya, Aay, EWS, NCL)',
    postNameHi: 'आरटीपीएस ऑनलाइन नागरिक सेवाएं (जाति, आवासीय, आय, EWS, NCL)',
    totalVacanciesOrAmount: '100% Free Online Public Service',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-10',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 Active Online',
      applicationLastDate: 'Permanent Public Service',
      resultDate: 'Issue Delivery within 10 to 14 Working Days'
    },
    howToApply: {
      en: [
        'Step 1: Visit serviceonline.bihar.gov.in official Bihar Service Plus Portal.',
        'Step 2: Under "Online Services", click on "General Administration Department".',
        'Step 3: Select Residential / Caste / Income / EWS / Non-Creamy Layer Certificate.',
        'Step 4: Choose issuing level: Revenue Officer (RO/Block Level), SDO Level, or DM Level.',
        'Step 5: Fill personal details, father/mother name, mobile number, address, and upload photo.',
        'Step 6: Attach scanned identity proof (Aadhaar Card) and submit application.',
        'Step 7: After 10-14 days, click "Download Certificate" and enter Application Number to get verified PDF.'
      ],
      hi: [
        'चरण 1: serviceonline.bihar.gov.in पोर्टल पर जाएं।',
        'चरण 2: "लोक सेवाओं का अधिकार" में "सामान्य प्रशासन विभाग" पर क्लिक करें।',
        'चरण 3: वांछित प्रमाण पत्र (जाति/आय/आवासीय/EWS/NCL) चुनें।',
        'चरण 4: निर्गमन का स्तर (राजस्व अधिकारी RO स्तर या SDO स्तर) चुनें।',
        'चरण 5: व्यक्तिगत विवरण, पता व मोबाइल नंबर भरें तथा फोटो अपलोड करें।',
        'चरण 6: आधार कार्ड संलग्न कर फाइनल सबमिट करें और पावती रसीद सुरक्षित रखें।',
        'चरण 7: 10 से 14 कार्यदिवस बाद "प्रमाण पत्र डाउनलोड करें" लिंक से सीधे पीडीएफ डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://serviceonline.bihar.gov.in/',
      officialWebsiteUrl: 'https://serviceonline.bihar.gov.in/',
      directPortalUrl: 'https://serviceonline.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How to download Bihar RTPS certificate without logging in?',
        questionHi: 'बिना लॉगिन किए बिहार RTPS प्रमाण पत्र कैसे डाउनलोड करें?',
        answerEn: 'Click on "Download Certificate" on the RTPS homepage, enter your Application Reference Number and Name, and click Download.',
        answerHi: 'RTPS होमपेज पर "Download Certificate" पर जाएं, अपना आवेदन क्रमांक (BRCC...) व नाम दर्ज कर तुरंत डाउनलोड करें।'
      }
    ]
  },
  {
    id: 'post-service-bihar-bhumi',
    slug: 'bihar-bhumi-land-records-dakhil-kharij-jamabandi-panji2-lpc',
    category: 'services',
    stateScope: 'Bihar',
    titleEn: 'Bihar Bhumi Land Records — Online Dakhil Kharij (Mutation), Jamabandi Panji 2 & LPC Apply',
    titleHi: 'बिहार भूमि राजस्व पोर्टल — ऑनलाइन दाखिल-खारिज (Mutation), जमाबंदी पंजी 2, LPC व भू-लगान रसीद',
    shortSummaryEn: 'Revenue and Land Reforms Department, Govt of Bihar provides digital portal biharbhumi.bihar.gov.in for Online Mutation (Dakhil Kharij), viewing Jamabandi Panji-2, Land Possession Certificate (LPC), and Online Bhu-Lagan payment.',
    shortSummaryHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार द्वारा जमीन की जमाबंदी देखना, नया दाखिल-खारिज ऑनलाइन आवेदन, एलपीसी (LPC) प्रमाण पत्र और ऑनलाइन लगान रसीद काटने की संपूर्ण डिजिटल सुविधा।',
    organizationEn: 'Revenue & Land Reforms Department, Govt of Bihar',
    organizationHi: 'राजस्व एवं भूमि सुधार विभाग, बिहार सरकार',
    postNameEn: 'Bihar Bhumi Online Land Records (Mutation, LPC, Lagan)',
    postNameHi: 'बिहार भूमि ऑनलाइन राजस्व सेवाएं (दाखिल-खारिज, लगान, LPC)',
    totalVacanciesOrAmount: '100% Online Revenue Portal',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-05',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on biharbhumi.bihar.gov.in',
      applicationLastDate: 'Permanent Public Service',
      resultDate: 'Mutation Order passed within 35-75 days'
    },
    howToApply: {
      en: [
        'Step 1: Visit biharbhumi.bihar.gov.in official portal.',
        'Step 2: Create a citizen user account with mobile number and password.',
        'Step 3: Click on "Online Dakhil Kharij Apply" (ऑनलाइन दाखिल खारिज आवेदन करें).',
        'Step 4: Select District, Circle (Anchal), Mauja, and enter Buyer & Seller details.',
        'Step 5: Enter Land plot details — Khata Number, Khesra (Plot) Number, Rakba (Area), and Boundary (Chauhaddi).',
        'Step 6: Upload scanned PDF of registered sale deed (Kewala/Registry) with self-attested declaration.',
        'Step 7: Submit application and note the Case/Receipt Number to track status.'
      ],
      hi: [
        'चरण 1: biharbhumi.bihar.gov.in पोर्टल पर जाएं।',
        'चरण 2: अपने मोबाइल नंबर से नागरिक लॉगिन खाता बनाएं।',
        'चरण 3: "ऑनलाइन दाखिल खारिज आवेदन करें" पर क्लिक करें।',
        'चरण 4: अपना जिला, अंचल (ब्लॉक) और मौजा चुनें।',
        'चरण 5: क्रेता, विक्रेता और जमीन का खाता, खेसरा, रकबा और चौहद्दी विवरण भरें।',
        'चरण 6: रजिस्ट्री दस्तावेज (केवाला) की पीडीएफ प्रति अपलोड करें।',
        'चरण 7: फाइनल सबमिट करें और दाखिल खारिज वाद संख्या (Case Number) से स्थिति ट्रैक करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://biharbhumi.bihar.gov.in/',
      officialWebsiteUrl: 'https://biharbhumi.bihar.gov.in/',
      directPortalUrl: 'https://biharbhumi.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How can I check Jamabandi (Khatiyan) online in Bihar?',
        questionHi: 'बिहार में अपनी जमीन की ऑनलाइन जमाबंदी कैसे देखें?',
        answerEn: 'Go to biharbhumi.bihar.gov.in, click "Jamabandi Panji Dekhein", select District, Circle, Mauja, and search by Plot/Khata/Raiyat Name.',
        answerHi: 'biharbhumi पोर्टल पर "जमाबंदी पंजी देखें" में जाएं, जिला, अंचल व मौजा चुनकर खाता नंबर या रैयत के नाम से तुरंत जमाबंदी देखें।'
      }
    ]
  },
  {
    id: 'post-service-uidai-aadhaar',
    slug: 'uidai-myaadhaar-portal-online-address-update-pvc-card-download',
    category: 'services',
    stateScope: 'Central',
    titleEn: 'UIDAI myAadhaar Portal — Online Address Update, Free Document Revalidation, PVC Card & E-Aadhaar Download',
    titleHi: 'UIDAI myAadhaar पोर्टल — ऑनलाइन पता सुधार, मुफ्त दस्तावेज सत्यापन, स्मार्ट PVC कार्ड व ई-आधार डाउनलोड',
    shortSummaryEn: 'Unique Identification Authority of India (UIDAI) enables citizens to update residential address online, re-validate identity & address proofs, order official micro-printed Smart PVC Aadhaar Card for ₹50, and download password-protected e-Aadhaar PDF.',
    shortSummaryHi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI) के myAadhaar पोर्टल के माध्यम से घर बैठे आधार कार्ड में पता बदलना, प्लास्टिक पीवीसी कार्ड ₹50 में मंगाना और नया ई-आधार डाउनलोड करने की ऑनलाइन सेवा।',
    organizationEn: 'Unique Identification Authority of India (UIDAI, Govt of India)',
    organizationHi: 'भारतीय विशिष्ट पहचान प्राधिकरण (UIDAI)',
    postNameEn: 'UIDAI myAadhaar Citizen Services',
    postNameHi: 'UIDAI आधार नागरिक ऑनलाइन सेवाएं',
    totalVacanciesOrAmount: 'Central Identity Service',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-15',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Active 24x7 on myaadhaar.uidai.gov.in',
      applicationLastDate: 'Permanent Public Service',
      resultDate: 'PVC Card delivered via Speed Post in 7-10 Days'
    },
    howToApply: {
      en: [
        'Step 1: Visit myaadhaar.uidai.gov.in and click on "Login" with your 12-digit Aadhaar Number and OTP.',
        'Step 2: To download e-Aadhaar: Click "Download Aadhaar" to get password-protected PDF (Password = First 4 letters of Name in CAPITAL + Year of Birth, e.g. RAKE2004).',
        'Step 3: To order PVC Card: Click "Order Aadhaar PVC Card", preview details, pay ₹50 via UPI/Net Banking.',
        'Step 4: To update Address: Click "Address Update", enter new address, upload supporting proof (Voter ID/Electricity Bill/Rent Agreement), and submit.'
      ],
      hi: [
        'चरण 1: myaadhaar.uidai.gov.in पर जाएं और 12 अंकों का आधार नंबर व मोबाइल OTP दर्ज कर लॉगिन करें।',
        'चरण 2: ई-आधार डाउनलोड करने के लिए "Download Aadhaar" पर क्लिक करें (पासवर्ड = नाम के पहले 4 अक्षर बड़े अक्षरों में + जन्म वर्ष, जैसे RAKE2004)।',
        'चरण 3: स्मार्ट PVC प्लास्टिक कार्ड मंगाने के लिए "Order Aadhaar PVC Card" पर क्लिक कर ₹50 का ऑनलाइन भुगतान करें।',
        'चरण 4: पता बदलने के लिए "Address Update" में जाकर नया पता भरें और वैध दस्तावेज अपलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://myaadhaar.uidai.gov.in/',
      officialWebsiteUrl: 'https://uidai.gov.in/',
      directPortalUrl: 'https://myaadhaar.uidai.gov.in/'
    },
    faqs: [
      {
        questionEn: 'What is the password to open downloaded e-Aadhaar PDF file?',
        questionHi: 'डाउनलोड किए गए ई-आधार PDF को खोलने का पासवर्ड क्या होता है?',
        answerEn: 'First 4 characters of your name in CAPITAL letters followed by your 4-digit birth year (e.g., RAMA1998).',
        answerHi: 'आपके नाम के पहले 4 अक्षर अंग्रेजी के बड़े अक्षरों (CAPITAL) में और उसके बाद 4 अंकों का जन्म वर्ष (जैसे RAMA1998)।'
      }
    ]
  },
  {
    id: 'post-service-digilocker',
    slug: 'digilocker-digital-documents-10th-12th-marksheet-dl-rc-download',
    category: 'services',
    stateScope: 'Central',
    titleEn: 'DigiLocker India — 10th & 12th Board Marksheets, Driving License, Vehicle RC & Digital Certificates',
    titleHi: 'डिजिलॉकर इंडिया — 10वीं/12वीं बोर्ड मार्कशीट, ड्राइविंग लाइसेंस, गाड़ी की RC और सभी डिजिटल प्रमाण पत्र',
    shortSummaryEn: 'DigiLocker under Digital India provides citizens with authentic digital access to legally valid documents under IT Act 2000. Access BSEB/CBSE Class 10 & 12 Marksheets, Driving License, Vehicle RC, Ration Card, and PAN Card anywhere.',
    shortSummaryHi: 'डिजिटल इंडिया के अंतर्गत डिजिलॉकर से बिहार बोर्ड (BSEB), सीबीएसई की 10वीं व 12वीं मार्कशीट, ड्राइविंग लाइसेंस, वाहन आरसी व राशन कार्ड की कानूनी रूप से मान्य डिजिटल प्रति सीधे अपने फोन में सुरक्षित रखें।',
    organizationEn: 'Ministry of Electronics & IT (MeitY, Govt of India)',
    organizationHi: 'इलेक्ट्रॉनिक्स एवं सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार',
    postNameEn: 'DigiLocker Digital Document Locker',
    postNameHi: 'डिजिलॉकर सरकारी डिजिटल दस्तावेज सेवा',
    totalVacanciesOrAmount: '100% Free & Legally Valid (IT Act Sec 9A)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-12',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on digilocker.gov.in & App',
      applicationLastDate: 'Permanent Digital Locker'
    },
    howToApply: {
      en: [
        'Step 1: Download DigiLocker App from Google Play Store or visit digilocker.gov.in.',
        'Step 2: Sign up using your Aadhaar Number and 6-digit security PIN.',
        'Step 3: Go to "Search Documents" and type "Bihar School Examination Board" or "Ministry of Road Transport".',
        'Step 4: Enter Roll Code, Roll Number, and Passing Year to fetch your Class 10/12 Marksheet.',
        'Step 5: The digitally signed document is saved in "Issued Documents" with official verification QR code.'
      ],
      hi: [
        'चरण 1: गूगल प्ले स्टोर से DigiLocker ऐप डाउनलोड करें या digilocker.gov.in पर जाएं।',
        'चरण 2: अपना आधार नंबर और 6 अंकों का सिक्योरिटी पिन डालकर साइन अप / लॉगिन करें।',
        'चरण 3: Search Documents में जाकर "Bihar School Examination Board" या "परिवहन विभाग" चुनें।',
        'चरण 4: रोल कोड, रोल नंबर और पासिंग वर्ष दर्ज करें।',
        'चरण 5: आपका मूल डिजिटल प्रमाण पत्र "Issued Documents" में आ जाएगा, जो हर जगह कानूनी रूप से मान्य है।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://www.digilocker.gov.in/',
      officialWebsiteUrl: 'https://www.digilocker.gov.in/',
      directPortalUrl: 'https://www.digilocker.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Is a driving license or RC shown in DigiLocker valid for traffic police?',
        questionHi: 'क्या ट्रैफिक पुलिस चेकिंग में डिजिलॉकर का ड्राइविंग लाइसेंस या RC मान्य है?',
        answerEn: 'Yes, as per Rule 139 of Central Motor Vehicles Rules, DigiLocker digital documents are 100% legally recognized.',
        answerHi: 'हां, मोटर वाहन नियम 139 एवं आईटी एक्ट के तहत डिजिलॉकर में उपलब्ध ड्राइविंग लाइसेंस व आरसी 100% कानूनी रूप से मान्य है।'
      }
    ]
  },
  {
    id: 'post-service-bihar-epds-ration',
    slug: 'bihar-epds-ration-card-online-apply-rcms-download',
    category: 'services',
    stateScope: 'Bihar',
    titleEn: 'Bihar EPDS Ration Card — New Online Ration Card Apply (RCMS), Member Add & Digital RC Download',
    titleHi: 'बिहार राशन कार्ड ऑनलाइन — नया राशन कार्ड आवेदन (RCMS), परिवार का नाम जोड़ना व डिजिटल राशन कार्ड डाउनलोड',
    shortSummaryEn: 'Department of Food and Consumer Protection, Govt of Bihar provides RCMS online facility for applying for new Ration Cards, adding family members, correcting details, and downloading digital Ration Card with One Nation One Ration Card (ONORC) benefits.',
    shortSummaryHi: 'खाद्य एवं उपभोक्ता संरक्षण विभाग, बिहार सरकार द्वारा ऑनलाइन नया राशन कार्ड बनाने, सदस्यों का नाम जोड़ने और अपने गांव/वार्ड की राशन कार्ड लिस्ट डाउनलोड करने की आधिकारिक सेवा।',
    organizationEn: 'Food & Consumer Protection Department, Govt of Bihar',
    organizationHi: 'खाद्य एवं उपभोक्ता संरक्षण विभाग, बिहार सरकार',
    postNameEn: 'Bihar EPDS Ration Card Portal (RCMS)',
    postNameHi: 'बिहार ईपीडीएस राशन कार्ड सेवा',
    totalVacanciesOrAmount: 'Free Ration Support (PMGKAY)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-08',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on epds.bihar.gov.in',
      applicationLastDate: 'Permanent Public Service',
      resultDate: 'Verification by SDO within 30 days'
    },
    howToApply: {
      en: [
        'Step 1: Visit epds.bihar.gov.in official portal.',
        'Step 2: Click on "Apply for Online RC" (RCMS Portal).',
        'Step 3: Register with Head of Family (Female member) mobile number and Aadhaar.',
        'Step 4: Fill address, village, block, FPS dealer name, and add all family members with Aadhaar numbers.',
        'Step 5: Upload combined family photograph, bank passbook, and income/residential certificate.',
        'Step 6: Submit application and track status via SDO / Block Supply Officer verification.'
      ],
      hi: [
        'चरण 1: epds.bihar.gov.in पोर्टल पर जाएं।',
        'चरण 2: "Apply for Online RC" (RCMS) लिंक पर क्लिक करें।',
        'चरण 3: परिवार की मुखिया (महिला) के आधार व मोबाइल नंबर से पंजीकरण करें।',
        'चरण 4: पता, ब्लॉक, डीलर का नाम भरें और परिवार के सभी सदस्यों के नाम व आधार जोड़ें।',
        'चरण 5: संयुक्त पारिवारिक फोटो, बैंक पासबुक व आवासीय प्रमाण पत्र अपलोड करें।',
        'चरण 6: फाइनल सबमिट करें और आवेदन संख्या से स्थिति ट्रैक करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://epds.bihar.gov.in/',
      officialWebsiteUrl: 'https://epds.bihar.gov.in/',
      directPortalUrl: 'https://epds.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How to check Ration Card number and family member names online in Bihar?',
        questionHi: 'बिहार में अपने राशन कार्ड का विवरण व परिवार के सदस्यों का नाम कैसे देखें?',
        answerEn: 'Go to epds.bihar.gov.in, click "RCMS Report", select District, Rural/Urban, Block, Panchayat, and Village to view full list.',
        answerHi: 'epds.bihar.gov.in पर जाकर "RCMS Report" में अपना जिला, ब्लॉक, पंचायत व गांव चुनकर तुरंत पूरी सूची में अपना नाम देखें।'
      }
    ]
  },
  {
    id: 'post-service-eci-voter',
    slug: 'eci-voters-portal-form-6-new-voter-id-e-epic-download',
    category: 'services',
    stateScope: 'Central',
    titleEn: 'ECI Voters Services Portal — Form 6 New Voter Registration, Form 8 Correction & Digital e-EPIC Download',
    titleHi: 'भारत निर्वाचन आयोग वोटर पोर्टल — नया वोटर कार्ड (Form 6), वोटर कार्ड सुधार (Form 8) व डिजिटल e-EPIC डाउनलोड',
    shortSummaryEn: 'Election Commission of India (ECI) provides national portal voters.eci.gov.in for registering new 18+ voters (Form 6), updating address/photo/name (Form 8), and downloading original digital color e-EPIC card.',
    shortSummaryHi: 'भारत निर्वाचन आयोग (ECI) के आधिकारिक पोर्टल के माध्यम से 18 वर्ष पूर्ण कर चुके नए मतदाताओं का नाम जोड़ना, वोटर कार्ड में नाम/पता सुधार करना और रंगीन डिजिटल वोटर आईडी डाउनलोड करना।',
    organizationEn: 'Election Commission of India (ECI)',
    organizationHi: 'भारत निर्वाचन आयोग',
    postNameEn: 'ECI Online Voter ID Services (voters.eci.gov.in)',
    postNameHi: 'निर्वाचन आयोग मतदाता ऑनलाइन सेवाएं',
    totalVacanciesOrAmount: '100% Free Constitutional Service',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-10',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on voters.eci.gov.in',
      applicationLastDate: 'Continuous Electoral Roll Update'
    },
    howToApply: {
      en: [
        'Step 1: Visit voters.eci.gov.in or download ECIs Voter Helpline App.',
        'Step 2: Sign up with Mobile Number and create password.',
        'Step 3: To apply for new Voter ID: Click "Form 6 (Register as a new elector)", select State, District, and Assembly Constituency.',
        'Step 4: Enter personal details, relative name, upload passport photo, and attach Age Proof & Address Proof.',
        'Step 5: Submit application to receive reference ID for tracking.',
        'Step 6: To download digital Voter ID: Click "E-EPIC Download", enter EPIC number/Reference number and OTP to get color PDF.'
      ],
      hi: [
        'चरण 1: voters.eci.gov.in पोर्टल पर जाएं या Voter Helpline ऐप डाउनलोड करें।',
        'चरण 2: मोबाइल नंबर और पासवर्ड से साइन अप/लॉगिन करें।',
        'चरण 3: नए वोटर कार्ड के लिए "Form 6" पर क्लिक कर अपना राज्य, जिला व विधानसभा क्षेत्र चुनें।',
        'चरण 4: अपना नाम, जन्म तिथि, पासपोर्ट फोटो, आयु प्रमाण व निवास प्रमाण पत्र अपलोड करें।',
        'चरण 5: फॉर्म सबमिट कर रेफरेंस नंबर सुरक्षित रखें (BLO द्वारा सत्यापन के बाद कार्ड डाक से घर आएगा)।',
        'चरण 6: डिजिटल वोटर कार्ड डाउनलोड करने के लिए "E-EPIC Download" पर जाकर तुरंत रंगीन PDF डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://voters.eci.gov.in/',
      officialWebsiteUrl: 'https://eci.gov.in/',
      directPortalUrl: 'https://voters.eci.gov.in/'
    },
    faqs: [
      {
        questionEn: 'How can an 18-year-old Indian citizen get a voter card delivered to home?',
        questionHi: '18 वर्ष की आयु होने पर नया वोटर कार्ड घर पर कैसे प्राप्त करें?',
        answerEn: 'Fill Form 6 on voters.eci.gov.in; after BLO field verification and ERO approval, the physical plastic card is delivered via Speed Post at zero cost.',
        answerHi: 'voters.eci.gov.in पर फॉर्म 6 भरें; बीएलओ (BLO) सत्यापन के बाद नया प्लास्टिक वोटर कार्ड डाक द्वारा पूरी तरह मुफ्त घर भेजा जाता है।'
      }
    ]
  },
  {
    id: 'post-service-incometax-pan',
    slug: 'instant-epan-income-tax-efiling-nsdl-pan-apply-link',
    category: 'services',
    stateScope: 'Central',
    titleEn: 'Instant e-PAN & Income Tax Portal — 10-Minute Free e-PAN Apply, Form 49A & PAN-Aadhaar Link',
    titleHi: 'इंस्टेंट ई-पैन व आयकर पोर्टल — 10 मिनट में मुफ्त डिजिटल पैन कार्ड बनाएं, नया प्लास्टिक पैन कार्ड व आधार लिंक',
    shortSummaryEn: 'Income Tax Department of India provides Instant e-PAN facility using Aadhaar OTP within 10 minutes at zero fee. Also apply for physical PVC PAN Card (Form 49A) via NSDL / Protean and link PAN with Aadhaar.',
    shortSummaryHi: 'आयकर विभाग के e-Filing पोर्टल (incometax.gov.in) के माध्यम से बिना किसी शुल्क के सिर्फ आधार ओटीपी से 10 मिनट में डिजिटल पैन कार्ड बनाएं, फिजिकल प्लास्टिक कार्ड मंगाएं व पैन-आधार लिंक करें।',
    organizationEn: 'Income Tax Department, Govt of India',
    organizationHi: 'आयकर विभाग, भारत सरकार',
    postNameEn: 'Instant e-PAN & PAN Card Services',
    postNameHi: 'तत्काल ई-पैन एवं पैन कार्ड सेवाएं',
    totalVacanciesOrAmount: '100% Free Instant e-PAN (Physical Card ₹50)',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-14',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on incometax.gov.in',
      applicationLastDate: 'Permanent Public Service',
      resultDate: 'e-PAN generated in 10 Minutes'
    },
    howToApply: {
      en: [
        'Step 1: Visit incometax.gov.in and click on "Instant e-PAN" under Quick Links.',
        'Step 2: Click on "Get New e-PAN", enter your 12-digit Aadhaar Number, and agree to the terms.',
        'Step 3: Enter the 6-digit OTP received on your Aadhaar-linked mobile number.',
        'Step 4: Validate Aadhaar details (Name, DOB, Gender, Address, Photo).',
        'Step 5: Submit application; within 10 minutes, click "Check Status/ Download e-PAN" to download your digitally signed PAN PDF.'
      ],
      hi: [
        'चरण 1: incometax.gov.in पर जाएं और Quick Links में "Instant e-PAN" पर क्लिक करें।',
        'चरण 2: "Get New e-PAN" चुनें और अपना 12 अंकों का आधार नंबर दर्ज करें।',
        'चरण 3: आधार से जुड़े मोबाइल नंबर पर प्राप्त 6 अंकों का OTP दर्ज करें।',
        'चरण 4: आधार विवरण (नाम, जन्म तिथि, फोटो) की पुष्टि करें।',
        'चरण 5: सबमिट करें; 10 मिनट बाद "Download e-PAN" पर जाकर अपना डिजिटल पैन कार्ड डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://www.incometax.gov.in/',
      officialWebsiteUrl: 'https://www.incometax.gov.in/',
      directPortalUrl: 'https://www.incometax.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Is Instant e-PAN legally valid for bank accounts and official use?',
        questionHi: 'क्या Instant e-PAN बैंक खाता खोलने और सभी सरकारी कार्यों में मान्य है?',
        answerEn: 'Yes, e-PAN has the exact same legal validity as a physical laminated PAN card under IT Act.',
        answerHi: 'हां, आयकर अधिनियम के तहत Instant e-PAN की कानूनी मान्यता सामान्य प्लास्टिक पैन कार्ड के बिल्कुल बराबर है।'
      }
    ]
  },
  {
    id: 'post-service-ayushman-bharat',
    slug: 'ayushman-bharat-pmjay-5-lakh-health-card-apply-download',
    category: 'services',
    stateScope: 'Central',
    titleEn: 'Ayushman Bharat PM-JAY — ₹5 Lakh Free Cashless Treatment Card Apply & Download Online (Beneficiary Portal)',
    titleHi: 'आयुष्मान भारत PM-JAY — ₹5 लाख मुफ्त इलाज आयुष्मान कार्ड ऑनलाइन आवेदन, ई-केवाईसी व डाउनलोड',
    shortSummaryEn: 'National Health Authority (NHA) provides ₹5,00,000 annual cashless hospitalization coverage per family across empaneled public & private hospitals in India. Expanded coverage for all senior citizens aged 70+ irrespective of income.',
    shortSummaryHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण द्वारा प्रति परिवार प्रति वर्ष ₹5 लाख का मुफ्त कैशलेस इलाज। राशन कार्ड धारकों और 70 वर्ष से अधिक उम्र के सभी वरिष्ठ नागरिकों के लिए आयुष्मान कार्ड बनाने व डाउनलोड करने की सुविधा।',
    organizationEn: 'National Health Authority (NHA, Govt of India)',
    organizationHi: 'राष्ट्रीय स्वास्थ्य प्राधिकरण, भारत सरकार',
    postNameEn: 'Ayushman Bharat Golden Health Card (PM-JAY)',
    postNameHi: 'आयुष्मान भारत गोल्डन कार्ड (₹5 लाख मुफ्त इलाज)',
    totalVacanciesOrAmount: '₹5,00,000 / Year Free Health Treatment',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-15',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available 24x7 on beneficiary.nha.gov.in',
      applicationLastDate: 'Permanent National Health Scheme'
    },
    howToApply: {
      en: [
        'Step 1: Visit beneficiary.nha.gov.in or download Ayushman App from Play Store.',
        'Step 2: Log in as "Beneficiary" using your Mobile Number and OTP.',
        'Step 3: Select State (e.g. Bihar), Scheme (PMJAY), District, and Search by (Ration Card Family ID / Aadhaar Number).',
        'Step 4: View list of family members; click on "e-KYC" next to eligible member.',
        'Step 5: Complete Aadhaar OTP or Face Authentication and capture live selfie photo.',
        'Step 6: Upon approval, click "Download Card" to get the official Ayushman Bharat PVC format PDF.'
      ],
      hi: [
        'चरण 1: beneficiary.nha.gov.in पोर्टल पर जाएं या Ayushman App डाउनलोड करें।',
        'चरण 2: "Beneficiary" विकल्प चुनकर मोबाइल नंबर व OTP से लॉगिन करें।',
        'चरण 3: अपना राज्य (जैसे बिहार), स्कीम (PMJAY), जिला और राशन कार्ड या आधार नंबर से खोजें।',
        'चरण 4: परिवार के सदस्यों के नाम के आगे "e-KYC" बटन पर क्लिक करें।',
        'चरण 5: आधार ओटीपी या फेस ऑथेंटिकेशन करें और अपनी लाइव सेल्फी फोटो लें।',
        'चरण 6: सत्यापन के पश्चात "Download Card" पर क्लिक कर अपना ₹5 लाख का आयुष्मान कार्ड डाउनलोड करें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://beneficiary.nha.gov.in/',
      officialWebsiteUrl: 'https://nha.gov.in/',
      directPortalUrl: 'https://beneficiary.nha.gov.in/'
    },
    faqs: [
      {
        questionEn: 'Are senior citizens above 70 years eligible for Ayushman card without a ration card?',
        questionHi: 'क्या 70 वर्ष से अधिक उम्र के वरिष्ठ नागरिकों को बिना राशन कार्ड के आयुष्मान कार्ड मिलेगा?',
        answerEn: 'Yes, under Ayushman Vay Vandana, all senior citizens aged 70+ get a distinct ₹5 Lakh cover using Aadhaar authentication.',
        answerHi: 'हां, 70 वर्ष या उससे अधिक आयु के सभी बुजुर्गों को आय सीमा के बिना आधार सत्यापन द्वारा ₹5 लाख का अलग आयुष्मान कार्ड प्रदान किया जाता है।'
      }
    ]
  },
  {
    id: 'post-service-bihar-bscc',
    slug: 'bihar-student-credit-card-mnssby-4-lakh-education-loan',
    category: 'services',
    stateScope: 'Bihar',
    titleEn: 'Bihar Student Credit Card (MNSSBY) — Up to ₹4 Lakh Higher Education Loan at 0-1% Interest (DRCC Portal)',
    titleHi: 'बिहार स्टूडेंट क्रेडिट कार्ड (MNSSBY) — उच्च शिक्षा (B.Tech, Medical, BCA, B.Sc) हेतु ₹4 लाख तक का शिक्षा ऋण',
    shortSummaryEn: 'Mukhyamantri Nishchay Swayam Sahayata Bhatta Yojana (MNSSBY) provides education loan up to ₹4 Lakh at 0% interest for female/transgender/divyang and 1% for male students for pursuing higher education after 12th pass.',
    shortSummaryHi: 'बिहार सरकार के 7 निश्चय के तहत 12वीं पास छात्र-छात्राओं को बीटेक, मेडिकल, बीबीए, बीसीए, पॉलिटेक्निक, नर्सिंग व सामान्य स्नातक के लिए बिना गारंटी ₹4 लाख तक का शिक्षा लोन।',
    organizationEn: 'Education Department, Govt of Bihar (DRCC)',
    organizationHi: 'शिक्षा विभाग, बिहार सरकार (DRCC)',
    postNameEn: 'Bihar Student Credit Card Scheme (BSCC)',
    postNameHi: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना',
    totalVacanciesOrAmount: 'Up to ₹4,00,000 Education Loan',
    isNew: true,
    isHot: true,
    isTrending: true,
    featuredImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: '2026-06-12',
    postedDate: '2024-01-01',
    importantDates: {
      applicationStart: 'Available on 7nishchay-yuvaupmission.bihar.gov.in',
      applicationLastDate: 'Active throughout Academic Year',
      scholarshipDisbursal: 'College fee transferred directly to Institute Account'
    },
    howToApply: {
      en: [
        'Step 1: Visit 7nishchay-yuvaupmission.bihar.gov.in.',
        'Step 2: Click "New Applicant Registration" and enter name, mobile number, and email.',
        'Step 3: Select Scheme as "Bihar Student Credit Card (BSCC)".',
        'Step 4: Enter 10th and 12th Roll Code, Roll Number, and Board Name.',
        'Step 5: Enter College Admission details, Course fee structure, and Co-applicant (Father/Guardian) details.',
        'Step 6: Submit application online and visit your District Registration and Counselling Centre (DRCC) with original documents for verification.'
      ],
      hi: [
        'चरण 1: 7nishchay-yuvaupmission.bihar.gov.in पोर्टल पर जाएं।',
        'चरण 2: "New Applicant Registration" पर क्लिक कर मोबाइल व ईमेल दर्ज करें।',
        'चरण 3: योजना में "Bihar Student Credit Card (BSCC)" का चयन करें।',
        'चरण 4: 10वीं और 12वीं का रोल कोड, रोल नंबर व प्राप्तांक भरें।',
        'चरण 5: कॉलेज का एडमिशन विवरण, फीस स्ट्रक्चर और सह-आवेदक (माता-पिता) का विवरण भरें।',
        'चरण 6: ऑनलाइन आवेदन के बाद मूल दस्तावेजों के साथ अपने जिले के DRCC केंद्र पर जाकर सत्यापन कराएं।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
      officialWebsiteUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/',
      directPortalUrl: 'https://www.7nishchay-yuvaupmission.bihar.gov.in/'
    },
    faqs: [
      {
        questionEn: 'When does the student start repaying the Bihar Student Credit Card loan?',
        questionHi: 'बिहार स्टूडेंट क्रेडिट कार्ड का लोन कब वापस चुकाना शुरू करना होता है?',
        answerEn: 'Repayment starts 1 year after completing the course or 6 months after getting a job, whichever is earlier, in easy EMIs.',
        answerHi: 'कोर्स पूरा होने के 1 वर्ष बाद या नौकरी मिलने के 6 महीने बाद (जो भी पहले हो) आसान किस्तों (EMIs) में चुकाना होता है।'
      }
    ]
  }
];

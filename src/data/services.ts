export type Prep =
  'abdomen' | 'pelvis' | 'combined' | 'dating' | 'none' | 'msk';
export const preparation: Record<Prep, string[]> = {
  abdomen: [
    'Do not eat or drink for 6 hours before the appointment, except plain water.',
    'Take prescribed medication as normal. If you have diabetes, check preparation with your doctor.',
  ],
  pelvis: [
    'A full bladder is required. Empty your bladder 1 hour before the appointment, then drink 3–4 glasses (approximately 800 mL) of water.',
    'If your bladder is not full 10 minutes before the scan, drink more water. If it becomes uncomfortably full, you may release a small amount.',
    'Take prescribed medication as normal. If you have diabetes, check preparation with your doctor.',
  ],
  combined: [
    'Do not eat or drink for 6 hours before the appointment, except plain water.',
    'A full bladder is also required. Empty your bladder 1 hour before the appointment, then drink 3–4 glasses (approximately 800 mL) of water.',
    'If your bladder is not full 10 minutes before the scan, drink more water. If uncomfortably full, you may release a small amount.',
    'Take prescribed medication as normal. If you have diabetes, check preparation with your doctor.',
  ],
  dating: [
    'For a dating scan before 10 weeks, attend with a full bladder. Empty your bladder 1 hour before the appointment, then drink 3–4 glasses (approximately 800 mL) of water.',
    'If your bladder is not full 10 minutes before the scan, drink more water. If uncomfortably full, you may release a small amount.',
    'Follow any individual instructions given with your appointment.',
  ],
  none: [
    'No special preparation is listed for this examination. Follow any individual instructions given with your appointment.',
  ],
  msk: [
    'No special preparation is required. Wear clothing that allows easy access to the area being examined.',
    'For a shoulder scan, a loose top or singlet is helpful. For a knee scan, wear shorts or loose trousers.',
  ],
};

const scanBasics =
  'Warm gel is applied to your skin and the sonographer moves a small handheld probe over the area. Ultrasound uses sound waves, not radiation.';
const duration =
  'Most examinations take around 30 minutes, although times vary with the type of examination.';

export const categories = [
  {
    slug: 'pregnancy',
    name: 'Pregnancy ultrasound',
    short: 'Pregnancy',
    image: 'pregnancy',
    intro:
      'Diagnostic ultrasound care through the stages of your pregnancy, with clear information and a personal approach.',
    detail:
      'From an early dating scan to growth and wellbeing examinations, find the scan requested by your midwife or referring clinician.',
    expect: [
      scanBasics,
      'Early in pregnancy, an internal (transvaginal) scan can sometimes give clearer images. The sonographer will explain why and will only proceed with your consent.',
      duration,
      'You are welcome to bring one adult support person to share the appointment with you.',
    ],
    referral:
      'Diagnostic pregnancy scans require a referral from your midwife (LMC), GP or specialist.',
  },
  {
    slug: 'general',
    name: 'General ultrasound',
    short: 'General',
    image: 'general',
    intro: 'Abdominal, pelvic and renal examinations, close to home.',
    detail:
      'Find information about your requested examination, the cost and how to prepare. Your referral helps us arrange the appropriate scan.',
    expect: [
      scanBasics,
      'You may be asked to change position or take and hold a deep breath so that organs can be seen more clearly.',
      'For some pelvic examinations, an internal (transvaginal) scan can give clearer images. The sonographer will explain why and will only proceed with your consent.',
      duration,
    ],
    referral:
      'A referral from your GP, specialist, nurse practitioner or another registered New Zealand health professional is required.',
  },
  {
    slug: 'musculoskeletal',
    name: 'Musculoskeletal ultrasound',
    short: 'Musculoskeletal',
    image: 'msk',
    intro:
      'Ultrasound examinations for joints, muscles, tendons and soft tissues.',
    detail:
      'We accept referrals for a range of musculoskeletal examinations. Contact us about your referral and any ACC patient contribution.',
    expect: [
      scanBasics,
      'Because ultrasound shows tendons and muscles as they move, you may be asked to move the joint or point to where it is sore.',
      duration,
    ],
    referral:
      'A referral is required. We accept musculoskeletal referrals from GPs, specialists, sport and exercise physicians, physiotherapists, chiropractors, osteopaths, podiatrists and nurse practitioners. If your injury is covered by ACC, please include your claim number. A patient contribution may apply.',
  },
  {
    slug: 'small-parts',
    name: 'Small parts ultrasound',
    short: 'Small parts',
    image: 'smallParts',
    intro:
      'Focused examinations of the thyroid, breast, scrotum and superficial soft tissues.',
    detail:
      'Personal, professional care for your requested examination. Our reception team can help you choose the appropriate appointment.',
    expect: [
      scanBasics,
      'The examination is focused on the area described in your referral. Please let the sonographer know if anything is tender.',
      duration,
    ],
    referral:
      'A referral from your GP, specialist, nurse practitioner or another registered New Zealand health professional is required.',
  },
  {
    slug: 'vascular',
    name: 'Vascular ultrasound',
    short: 'Vascular',
    image: 'vascular',
    intro: 'Vascular examinations including DVT and carotid ultrasound.',
    detail:
      'Please contact reception if you are unsure which vascular appointment matches your referral.',
    expect: [
      scanBasics,
      'Doppler ultrasound is used to assess blood flow. You may hear a whooshing sound from the machine; this is normal.',
      duration,
    ],
    referral:
      'A referral from your GP, specialist, nurse practitioner or another registered New Zealand health professional is required.',
  },
] as const;
export type CategorySlug = (typeof categories)[number]['slug'];
export interface Service {
  slug: string;
  category: CategorySlug;
  name: string;
  description: string;
  assesses: string;
  reasons: string[];
  price: number;
  priceNote?: string;
  prep: Prep;
  booking?: string;
  enquire?: boolean;
  pregnancyEligible?: boolean;
  nonDiagnostic?: boolean;
  urgentNote?: string;
}

const mskRegions = {
  Shoulder: [
    'Pain when lifting or reaching with the arm',
    'Suspected rotator cuff tendon injury or tear',
    'Bursitis or shoulder impingement',
  ],
  Elbow: [
    'Tennis elbow or golfer’s elbow',
    'Tendon or ligament injury around the elbow',
    'Swelling or a lump near the joint',
  ],
  Wrist: [
    'Wrist or hand tendon pain and swelling',
    'A ganglion or other lump',
    'Symptoms of nerve compression, such as carpal tunnel syndrome',
  ],
  Knee: [
    'Pain or swelling around the front or back of the knee',
    'Tendon or ligament injury outside the joint',
    'A lump behind the knee, such as a Baker’s cyst',
  ],
  Ankle: [
    'An ankle sprain or ligament injury',
    'Achilles tendon pain or injury',
    'Swelling or tendon problems around the ankle and foot',
  ],
} as const;

export const services: Service[] = [
  {
    slug: 'dating',
    category: 'pregnancy',
    name: 'Dating ultrasound',
    description:
      'An early pregnancy examination requested by your midwife or referring clinician.',
    assesses:
      'A dating scan confirms that the pregnancy is in the uterus, checks the number of babies and the heartbeat, and measures your baby to estimate how many weeks pregnant you are and your due date.',
    reasons: [
      'Confirming and dating an early pregnancy',
      'Uncertain dates or an irregular cycle',
      'Checking an early pregnancy when your midwife or doctor requests it',
    ],
    price: 80,
    prep: 'dating',
    booking: '1st-trimester-dating-ultrasound',
    pregnancyEligible: true,
  },
  {
    slug: 'nuchal-translucency',
    category: 'pregnancy',
    name: 'Nuchal translucency (NT)',
    description:
      'A pregnancy examination arranged through your midwife or referring clinician. Please check the appropriate appointment timing with your referrer.',
    assesses:
      'The NT scan measures the fluid at the back of your baby’s neck and checks early development. Combined with a blood test, it forms part of first-trimester screening.',
    reasons: [
      'First-trimester screening, usually between 11 and 14 weeks',
      'Confirming dates and the number of babies',
    ],
    price: 90,
    prep: 'none',
    booking: 'nuchal-translucency-ultrasound',
    pregnancyEligible: true,
  },
  {
    slug: 'anatomy',
    category: 'pregnancy',
    name: 'Anatomy ultrasound',
    description:
      'The 20-week anatomy examination. Please contact reception to confirm current availability before making plans.',
    assesses:
      'A detailed check of your baby’s development, including the brain, heart, spine, organs and limbs, as well as growth, the placenta and amniotic fluid.',
    reasons: ['The routine mid-pregnancy anatomy scan, around 18–20 weeks'],
    price: 90,
    prep: 'none',
    enquire: true,
    pregnancyEligible: true,
  },
  {
    slug: 'growth',
    category: 'pregnancy',
    name: 'Growth ultrasound',
    description:
      'A pregnancy growth examination requested by your midwife or referring clinician.',
    assesses:
      'A growth scan measures your baby’s size and checks the amniotic fluid, your baby’s position and, where requested, blood flow.',
    reasons: [
      'Checking growth later in pregnancy',
      'Your bump measures larger or smaller than expected',
      'Monitoring advised because of your health or a previous pregnancy',
    ],
    price: 80,
    prep: 'none',
    booking: '3rd-trimester-growth-ultrasound',
    pregnancyEligible: true,
  },
  {
    slug: 'wellbeing',
    category: 'pregnancy',
    name: 'Post-date / wellbeing ultrasound',
    description:
      'An examination requested by your maternity care provider. Contact reception to arrange the scan and confirm timing.',
    assesses:
      'A wellbeing scan checks your baby’s movements, the amniotic fluid and your baby’s position, and may include blood-flow measurements.',
    reasons: [
      'Your pregnancy continues beyond your due date',
      'Additional monitoring advised by your midwife or doctor',
    ],
    price: 80,
    prep: 'none',
    pregnancyEligible: true,
    urgentNote:
      'If you notice reduced or changed baby movements, contact your midwife or maternity unit straight away. Do not wait for a scheduled scan.',
  },
  {
    slug: 'gender',
    category: 'pregnancy',
    name: 'Gender scan',
    description:
      'Contact reception to discuss this scan, appointment timing and what is included.',
    assesses:
      'A non-diagnostic scan focused on finding out your baby’s sex. It is not a medical examination and does not replace your diagnostic pregnancy scans.',
    reasons: ['Finding out whether you are having a boy or a girl'],
    price: 170,
    prep: 'none',
    nonDiagnostic: true,
  },
  {
    slug: '3d-4d',
    category: 'pregnancy',
    name: '3D / 4D scan',
    description:
      'A non-diagnostic pregnancy scan. Contact reception to confirm availability and suitability. This does not replace your diagnostic pregnancy examinations.',
    assesses:
      'A non-diagnostic scan that creates three-dimensional still and moving images of your baby’s face and features. Image quality depends on your baby’s position.',
    reasons: ['Seeing your baby in 3D / 4D and sharing the images with family'],
    price: 300,
    prep: 'none',
    enquire: true,
    nonDiagnostic: true,
  },
  {
    slug: 'growth-and-3d-4d',
    category: 'pregnancy',
    name: 'Growth + 3D / 4D',
    description:
      'A combined appointment option. Please contact reception to confirm availability, referral requirements and what is included.',
    assesses:
      'A diagnostic growth scan, measuring your baby’s size, fluid and position, combined with non-diagnostic 3D / 4D images in the same appointment.',
    reasons: [
      'A growth scan has been requested and you would also like 3D / 4D images',
    ],
    price: 320,
    prep: 'none',
    enquire: true,
  },
  {
    slug: 'abdominal',
    category: 'general',
    name: 'Abdominal ultrasound',
    description:
      'A diagnostic examination of the abdomen, based on your clinician’s referral.',
    assesses:
      'An upper abdominal scan looks at the liver, gallbladder, bile ducts, pancreas, spleen, kidneys and the abdominal aorta.',
    reasons: [
      'Abdominal pain or discomfort',
      'Suspected gallstones',
      'Abnormal liver blood tests',
    ],
    price: 320,
    prep: 'abdomen',
    booking: 'upper-abdomen-gallbladderultrasound',
  },
  {
    slug: 'pelvic',
    category: 'general',
    name: 'Pelvic ultrasound',
    description:
      'A diagnostic pelvic examination based on your referral. Our team will explain the examination and discuss any questions with you.',
    assesses:
      'A pelvic scan looks at the bladder and, where relevant, the uterus and ovaries.',
    reasons: [
      'Pelvic pain',
      'Heavy, irregular or painful periods',
      'Checking for cysts or fibroids',
    ],
    price: 320,
    prep: 'pelvis',
  },
  {
    slug: 'renal-tract',
    category: 'general',
    name: 'Renal tract ultrasound',
    description:
      'A diagnostic renal tract examination requested by your referring clinician.',
    assesses:
      'A renal tract scan looks at the kidneys and bladder, and may include how well the bladder empties.',
    reasons: [
      'Recurrent urinary tract infections',
      'Blood in the urine',
      'Abnormal kidney function tests or suspected kidney stones',
    ],
    price: 300,
    prep: 'pelvis',
  },
  {
    slug: 'abdomen-and-pelvis',
    category: 'general',
    name: 'Abdomen & pelvis ultrasound',
    description:
      'A combined abdominal and pelvic examination. Please follow both the fasting and full-bladder preparation instructions.',
    assesses:
      'A combined scan of the upper abdominal organs (liver, gallbladder, pancreas, spleen and kidneys) and the pelvic organs and bladder.',
    reasons: [
      'Abdominal or pelvic pain where both areas need assessment',
      'Symptoms your clinician wants to investigate more broadly',
    ],
    price: 450,
    prep: 'combined',
    booking: 'abdomen-and-pelvis-ultrasound',
  },
  {
    slug: 'inguinal-groin',
    category: 'general',
    name: 'Inguinal / groin ultrasound',
    description:
      'A focused groin examination based on the details in your referral.',
    assesses:
      'A focused scan of the groin, looking for a hernia or assessing a lump. You may be asked to cough, strain or stand during the scan.',
    reasons: ['A lump or swelling in the groin', 'Suspected inguinal hernia'],
    price: 300,
    prep: 'none',
    booking: 'groin-hernia',
  },
  {
    slug: 'abdomen-and-inguinal',
    category: 'general',
    name: 'Abdomen & inguinal ultrasound',
    description:
      'A combined abdominal and groin examination requested by your clinician.',
    assesses:
      'A combined scan of the upper abdominal organs and the groin, including a check for hernia.',
    reasons: [
      'Abdominal symptoms together with a groin lump or suspected hernia',
    ],
    price: 450,
    prep: 'abdomen',
  },
  ...(Object.keys(mskRegions) as (keyof typeof mskRegions)[]).map((name) => ({
    slug: name.toLowerCase(),
    category: 'musculoskeletal' as const,
    name: `${name} ultrasound`,
    description: `A focused musculoskeletal examination of the ${name.toLowerCase()}, based on your clinician’s referral.`,
    assesses: `A ${name.toLowerCase()} scan looks at the tendons, ligaments, muscles, bursae and soft tissues around the joint. Ultrasound can show these structures while they move.`,
    reasons: [...mskRegions[name]],
    price: 250,
    priceNote: 'one region · two regions $375',
    prep: 'msk' as const,
    booking: `${name.toLowerCase()}-ultrasound`,
  })),
  {
    slug: 'thyroid',
    category: 'small-parts',
    name: 'Thyroid ultrasound',
    description:
      'A focused diagnostic thyroid examination requested by your referring clinician.',
    assesses:
      'A thyroid scan measures the thyroid gland in the neck and looks at any nodules, and may include the nearby salivary glands or lymph nodes.',
    reasons: [
      'A lump or swelling in the neck',
      'Abnormal thyroid blood tests',
      'Follow-up of known thyroid nodules',
    ],
    price: 300,
    prep: 'none',
    booking: 'thyroid-or-salivary-gland-ultrasound',
  },
  {
    slug: 'soft-tissue',
    category: 'small-parts',
    name: 'Soft tissue / lump ultrasound',
    description:
      'An examination of a superficial lump or soft tissue area identified in your referral.',
    assesses:
      'A focused scan of a lump or area of concern just beneath the skin, to help show its size and what it is made of.',
    reasons: [
      'A new or changing lump',
      'Follow-up of a known lump',
      'Swelling or tenderness in the soft tissues',
    ],
    price: 300,
    prep: 'none',
    booking: 'lumps-bumps-and-soft-tissue-ultrasound',
  },
  {
    slug: 'scrotal',
    category: 'small-parts',
    name: 'Scrotal ultrasound',
    description:
      'A diagnostic scrotal examination with a personal, professional approach. Contact reception with any questions before your visit.',
    assesses:
      'A scrotal scan looks at the testes, epididymis and surrounding structures.',
    reasons: [
      'A lump or swelling',
      'Ongoing discomfort or pain',
      'Follow-up of a known finding',
    ],
    price: 300,
    prep: 'none',
    urgentNote:
      'Sudden, severe testicular pain needs urgent medical attention. Go to your nearest emergency department rather than waiting for a scan.',
  },
  {
    slug: 'breast',
    category: 'small-parts',
    name: 'Breast ultrasound',
    description:
      'A referred breast examination. Contact reception to confirm whether your referral is for one or both sides.',
    assesses:
      'A breast scan looks at the breast tissue and, where requested, the lymph nodes in the armpit.',
    reasons: [
      'A breast lump or area of concern',
      'Further assessment after a mammogram',
      'Follow-up of a known finding',
    ],
    price: 300,
    priceNote: 'one side · both sides $400',
    prep: 'none',
    booking: 'breast-and-axilla-ultrasound',
  },
  {
    slug: 'dvt',
    category: 'vascular',
    name: 'DVT ultrasound',
    description:
      'A referred vascular examination. Contact reception to arrange the appointment and confirm whether one or both limbs are requested.',
    assesses:
      'A DVT scan checks the deep veins of the leg or arm for a blood clot (deep vein thrombosis).',
    reasons: [
      'Pain, swelling or tenderness in the leg or arm',
      'Suspected blood clot after surgery, travel or reduced mobility',
    ],
    price: 300,
    priceNote: 'one limb · both limbs $450',
    prep: 'none',
    urgentNote:
      'If you have chest pain or sudden shortness of breath, call 111 immediately.',
  },
  {
    slug: 'carotid',
    category: 'vascular',
    name: 'Carotid ultrasound',
    description: 'A carotid vascular examination requested by your clinician.',
    assesses:
      'A carotid Doppler scan looks at the arteries in your neck that supply blood to the brain, checking for narrowing or plaque.',
    reasons: [
      'Assessment after a transient ischaemic attack (TIA) or stroke',
      'A sound (bruit) heard by your doctor over the neck',
      'Monitoring known narrowing of the arteries',
    ],
    price: 400,
    prep: 'none',
    booking: 'carotid-doppler',
    urgentNote:
      'If you have sudden facial drooping, arm weakness or speech difficulty, call 111 immediately.',
  },
  {
    slug: 'other-vascular',
    category: 'vascular',
    name: 'Other vascular ultrasound',
    description:
      'Contact reception with your referral so we can confirm the examination, availability and price.',
    assesses:
      'Other vascular examinations assess blood flow in the arteries or veins, such as venous studies of the legs.',
    reasons: [
      'Varicose veins or venous symptoms',
      'Circulation concerns identified by your clinician',
    ],
    price: 400,
    priceNote: 'from · confirm with reception',
    prep: 'none',
  },
];
export const serviceUrl = (service: Service) =>
  `/services/${service.category}/${service.slug}/`;
export const bookingUrl = (service: Service) =>
  service.booking
    ? `https://tidycal.com/hobus/${service.booking}`
    : '/contact/';
export const lowestPrice = (predicate: (service: Service) => boolean) =>
  Math.min(...services.filter(predicate).map((s) => s.price));

export const pricingGroups = (
  [
    'general',
    'small-parts',
    'musculoskeletal',
    'vascular',
    'pregnancy',
  ] as CategorySlug[]
).map((slug) => ({
  name: categories.find((c) => c.slug === slug)!.name,
  rows:
    slug === 'musculoskeletal'
      ? [
          [
            'One region',
            `$${services.find((s) => s.category === slug)!.price}`,
          ],
          ['Two regions', '$375'],
        ]
      : services
          .filter((s) => s.category === slug)
          .flatMap((s) => {
            if (s.slug === 'breast')
              return [
                ['Breast — one side', `$${s.price}`],
                ['Breast — both sides', '$400'],
              ];
            if (s.slug === 'dvt')
              return [
                ['DVT — one limb', `$${s.price}`],
                ['DVT — both limbs', '$450'],
              ];
            return [
              [
                s.name,
                `${s.slug === 'other-vascular' ? 'From ' : ''}$${s.price}`,
              ],
            ];
          }),
}));

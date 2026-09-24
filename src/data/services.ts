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
  },
  {
    slug: 'general',
    name: 'General ultrasound',
    short: 'General',
    image: 'general',
    intro: 'Abdominal, pelvic and renal examinations, close to home.',
    detail:
      'Find information about your requested examination, the cost and how to prepare. Your referral helps us arrange the appropriate scan.',
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
  },
  {
    slug: 'vascular',
    name: 'Vascular ultrasound',
    short: 'Vascular',
    image: 'vascular',
    intro: 'Vascular examinations including DVT and carotid ultrasound.',
    detail:
      'Please contact reception if you are unsure which vascular appointment matches your referral.',
  },
] as const;
export type CategorySlug = (typeof categories)[number]['slug'];
export interface Service {
  slug: string;
  category: CategorySlug;
  name: string;
  description: string;
  price: number;
  priceNote?: string;
  prep: Prep;
  booking?: string;
  enquire?: boolean;
  pregnancyEligible?: boolean;
}
export const services: Service[] = [
  {
    slug: 'dating',
    category: 'pregnancy',
    name: 'Dating ultrasound',
    description:
      'An early pregnancy examination requested by your midwife or referring clinician.',
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
    price: 80,
    prep: 'none',
    pregnancyEligible: true,
  },
  {
    slug: 'gender',
    category: 'pregnancy',
    name: 'Gender scan',
    description:
      'Contact reception to discuss this scan, appointment timing and what is included.',
    price: 170,
    prep: 'none',
  },
  {
    slug: '3d-4d',
    category: 'pregnancy',
    name: '3D / 4D scan',
    description:
      'A non-diagnostic pregnancy scan. Contact reception to confirm availability and suitability. This does not replace your diagnostic pregnancy examinations.',
    price: 300,
    prep: 'none',
    enquire: true,
  },
  {
    slug: 'growth-and-3d-4d',
    category: 'pregnancy',
    name: 'Growth + 3D / 4D',
    description:
      'A combined appointment option. Please contact reception to confirm availability, referral requirements and what is included.',
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
    price: 320,
    prep: 'pelvis',
  },
  {
    slug: 'renal-tract',
    category: 'general',
    name: 'Renal tract ultrasound',
    description:
      'A diagnostic renal tract examination requested by your referring clinician.',
    price: 300,
    prep: 'pelvis',
  },
  {
    slug: 'abdomen-and-pelvis',
    category: 'general',
    name: 'Abdomen & pelvis ultrasound',
    description:
      'A combined abdominal and pelvic examination. Please follow both the fasting and full-bladder preparation instructions.',
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
    price: 450,
    prep: 'abdomen',
  },
  ...(['Shoulder', 'Elbow', 'Wrist', 'Knee', 'Ankle'] as const).map((name) => ({
    slug: name.toLowerCase(),
    category: 'musculoskeletal' as const,
    name: `${name} ultrasound`,
    description: `A focused musculoskeletal examination of the ${name.toLowerCase()}, based on your clinician’s referral.`,
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
    price: 300,
    prep: 'none',
  },
  {
    slug: 'breast',
    category: 'small-parts',
    name: 'Breast ultrasound',
    description:
      'A referred breast examination. Contact reception to confirm whether your referral is for one or both sides.',
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
    price: 300,
    priceNote: 'one limb · both limbs $450',
    prep: 'none',
  },
  {
    slug: 'carotid',
    category: 'vascular',
    name: 'Carotid ultrasound',
    description: 'A carotid vascular examination requested by your clinician.',
    price: 400,
    prep: 'none',
    booking: 'carotid-doppler',
  },
  {
    slug: 'other-vascular',
    category: 'vascular',
    name: 'Other vascular ultrasound',
    description:
      'Contact reception with your referral so we can confirm the examination, availability and price.',
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

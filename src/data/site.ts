import { lowestPrice } from './services';

export const site = {
  name: 'Hobsonville Ultrasound',
  formerName: 'Body 2 Baby Ultrasound',
  url: 'https://hobus.co.nz',
  phone: '09 869 3328',
  tel: 'tel:+6498693328',
  email: 'reception@hobus.co.nz',
  address:
    'Hobson Centre, Level 1, 124 Hobsonville Road, Hobsonville, Auckland',
  directions:
    'https://www.google.com/maps/place/Hobsonville+Ultrasound/@-36.7973592,174.6289795,14.66z/data=!3m1!5s0x6d0d3f0769ef2cb7:0xc751503cef3387e8!4m6!3m5!1s0x6d0d3fa81cd8f021:0x4758d763c15efba!8m2!3d-36.7977876!4d174.648825!16s%2Fg%2F11vx5jg8lf?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D',
  mapEmbed:
    'https://www.google.com/maps?output=embed&q=-36.7977876,174.648825&z=17',
  googleReviews:
    'https://www.google.com/search?q=hobsonville+ultrasound&hl=en-NZ&gl=nz',
  openingHours: [
    { days: 'Monday – Friday', hours: '9:30 am – 6:30 pm' },
    { days: 'Saturday', hours: '9:00 am – 12:00 pm' },
  ],
  // Referrer links show on the referrers page once the client supplies them.
  referral: {
    eReferral: '',
    form: '',
    pacs: '',
  },
};

interface FaqLink {
  label: string;
  href: string;
}
export interface Faq {
  question: string;
  answer: string;
  links?: FaqLink[];
  home?: boolean;
}

const privateFrom = lowestPrice((s) => !s.pregnancyEligible);
const pregnancyFrom = lowestPrice((s) => !!s.pregnancyEligible);

export const faqs: Faq[] = [
  {
    question: 'Where is Hobsonville Ultrasound located?',
    answer:
      'We are on Level 1 of the Hobson Centre, 124 Hobsonville Road, Hobsonville, above Unichem Pharmacy at Woolworths. Free visitor parking is available.',
    links: [
      { label: 'Get directions', href: site.directions },
      { label: 'Contact and location', href: '/contact/' },
    ],
    home: true,
  },
  {
    question: 'What ultrasound examinations do you offer?',
    answer:
      'We provide pregnancy, general (abdominal, pelvic and renal), musculoskeletal, small parts (thyroid, breast, scrotal and soft tissue) and vascular (DVT and carotid) ultrasound.',
    links: [{ label: 'View our services', href: '/services/' }],
    home: true,
  },
  {
    question: 'Do I need a referral for an ultrasound?',
    answer:
      'Yes. A referral from a registered New Zealand health professional is required for diagnostic ultrasound. Please send a copy or clear photo of your referral before your appointment, or bring it with you. If you are unsure whether your referral is suitable, contact reception.',
    links: [
      { label: 'Patient information', href: '/patient-information/' },
      { label: 'Information for referrers', href: '/referrers/' },
    ],
    home: true,
  },
  {
    question: 'How much does an ultrasound cost?',
    answer: `Prices are listed for every examination. Private examinations start from $${privateFrom}. Eligible NZ maternity scans start from $${pregnancyFrom}, or $30 with a Community Services Card. ACC-funded examinations may have a patient contribution.`,
    links: [{ label: 'View all prices', href: '/pricing/' }],
    home: true,
  },
  {
    question: 'Can I book an ultrasound online?',
    answer:
      'Yes. Choose the examination on your referral and book online. For a few examinations, we ask you to contact reception so we can confirm availability first.',
    links: [{ label: 'Book an ultrasound', href: '/book-online/' }],
    home: true,
  },
  {
    question: 'How long does an ultrasound examination take?',
    answer:
      'Most ultrasound examinations take around 30 minutes, although times vary with the type of examination. Please arrive on time and allow time to complete any preparation.',
    links: [
      { label: 'How to prepare', href: '/patient-information/' },
      { label: 'Appointment policy', href: '/appointment-policy/' },
    ],
    home: true,
  },
  {
    question: 'When will my ultrasound report be available?',
    answer:
      'Your images are reviewed by our reporting radiologist, and the report is sent to your referring doctor or health professional once it is complete. Your referrer will discuss the results and any next steps with you.',
    links: [{ label: 'After your scan', href: '/patient-information/#after' }],
    home: true,
  },
  {
    question: 'Do you offer pregnancy ultrasound?',
    answer:
      'Yes. We offer dating, nuchal translucency (NT), anatomy, growth and wellbeing scans, as well as gender and 3D / 4D scans.',
    links: [{ label: 'Pregnancy ultrasound', href: '/services/pregnancy/' }],
    home: true,
  },
  {
    question: 'How should I prepare for my scan?',
    answer:
      'Preparation depends on the examination. Some scans require a full bladder or fasting; others need no special preparation. Check your service page and appointment instructions, or contact us before your visit.',
    links: [{ label: 'Preparation guide', href: '/patient-information/' }],
  },
  {
    question: 'Can I bring someone with me?',
    answer:
      'You may bring one adult support person. Please avoid bringing children where possible. If this is unavoidable, one child may attend with another responsible adult to supervise them.',
    links: [{ label: 'Appointment policy', href: '/appointment-policy/' }],
  },
  {
    question: 'Can I get a copy of my images?',
    answer:
      'Images can be shared by a secure email link for $10 per study where they are not included in the scan price. Please ask reception. Report requests can be emailed to reception@hobus.co.nz.',
  },
  {
    question: 'What if I need to cancel?',
    answer:
      'Please give at least 24 hours’ notice by phone, voicemail or by replying to your confirmation text. Late cancellations or missed appointments may incur a $50 fee. Emergencies are considered individually.',
    links: [{ label: 'Appointment policy', href: '/appointment-policy/' }],
  },
  {
    question: 'Is this the former Body 2 Baby Ultrasound?',
    answer:
      'Yes. Body 2 Baby Ultrasound is now Hobsonville Ultrasound, with the same ownership, team, services and clinical focus. Our new name reflects our location and the full range of diagnostic ultrasound care we provide.',
    links: [{ label: 'About us', href: '/about/' }],
  },
];

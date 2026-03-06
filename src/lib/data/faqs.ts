export interface Faq {
  question: string
  answer: string
  category: string
}

export const faqs: Faq[] = [
  {
    category: 'General',
    question: 'What areas do you serve?',
    answer:
      'We currently serve the San Francisco Bay Area, including Palo Alto, Menlo Park, Mountain View, San Jose, Sunnyvale, Cupertino, Los Altos, and surrounding cities.',
  },
  {
    category: 'General',
    question: 'What types of gardens do you offer?',
    answer:
      'We specialize in two types: garden beds (raised beds or in-ground plantings for yards) and container gardens (perfect for patios, balconies, and entryways). Both are fully customized to your preferences.',
  },
  {
    category: 'General',
    question: 'Do I need any gardening experience?',
    answer:
      'Absolutely not! GardenForAll is designed for everyone — from complete beginners to experienced gardeners who simply want more help. We guide you through every step.',
  },
  {
    category: 'Pricing',
    question: 'How much does it cost?',
    answer:
      'Pricing varies based on the size of your space, number of plants, and services selected. Container gardens typically start around $150–$400, while garden beds vary more widely. You\'ll receive a detailed quote after your consultation at no obligation.',
  },
  {
    category: 'Pricing',
    question: 'Is there a fee for the initial consultation?',
    answer:
      'No — your initial design consultation is completely free. We\'ll learn about your space, preferences, and goals before providing any quote.',
  },
  {
    category: 'Installation',
    question: 'How long does installation take?',
    answer:
      'Most container garden installs are completed in a single visit (2–4 hours). Garden bed installations typically take 1–2 days depending on size and scope.',
  },
  {
    category: 'Installation',
    question: 'Do you handle soil preparation and bed construction?',
    answer:
      'Yes. For garden beds, we handle everything including soil amendment, raised bed construction (if needed), and planting. We bring all materials — you don\'t need to source anything.',
  },
  {
    category: 'Maintenance',
    question: 'Do you offer ongoing maintenance?',
    answer:
      'Yes! We offer optional monthly maintenance plans that include watering, pruning, fertilizing, and seasonal replanting. Ask us about maintenance options during your consultation.',
  },
  {
    category: 'Maintenance',
    question: 'What happens if my plants don\'t survive?',
    answer:
      'We stand behind our work. If any plants don\'t thrive within 30 days of installation under normal conditions, we\'ll replace them at no cost.',
  },
]

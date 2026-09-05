export type LegalKind = 'terms' | 'privacy' | 'refund' | 'cookies'

export type LegalSection = {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalDoc = {
  kind: LegalKind
  label: string
  slug: string
  effectiveDate: string
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
}

const effectiveDate = '5 September 2026'

export const legalDocs: Record<LegalKind, LegalDoc> = {
  terms: {
    kind: 'terms',
    label: 'Terms & Conditions',
    slug: '/terms',
    effectiveDate,
    eyebrow: 'Terms & Conditions',
    title: 'The rules of the road.',
    intro:
      'These Terms & Conditions ("Terms") govern access to and use of Regulars (the "Service"), a WhatsApp-based customer engagement and retention platform operated by Wayne E Solutions ("we", "us", "our"), accessible at regulars-rust.vercel.app. The Service helps local businesses ("Business Users") stay connected with their customers ("End Customers") through reminders and messages sent via WhatsApp. By accessing or using the Service, you agree to be bound by these Terms.',
    sections: [
      {
        heading: '1. Who these Terms apply to',
        paragraphs: ['These Terms apply to two categories of users:'],
        bullets: [
          "Business Users — cafés, restaurants, salons, studios and other local businesses that sign up for Regulars to engage their customers.",
          "End Customers — individuals who scan a Regulars QR code at a Business User's location and thereby opt in to receive WhatsApp messages from that business through the Service.",
        ],
      },
      {
        heading: '2. Description of the Service',
        paragraphs: [
          "Regulars allows a Business User to collect a customer's WhatsApp number (typically via an in-store QR code scan) and send that customer relevant reminders and messages — such as visit reminders, offers, or follow-ups — through WhatsApp. Wayne E Solutions provides the underlying technology and does not control the specific content of messages sent by individual Business Users, except where such content violates these Terms or applicable law.",
        ],
      },
      {
        heading: '3. Eligibility and account registration',
        paragraphs: [
          'To register as a Business User, you must be at least 18 years old and authorised to act on behalf of the business you represent. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate and current business information at all times.',
        ],
      },
      {
        heading: '4. Business User obligations',
        paragraphs: ['As a Business User, you agree to:'],
        bullets: [
          "Only collect an End Customer's WhatsApp number and consent through fair, transparent means (such as a clearly displayed QR code).",
          'Send messages that are relevant, respectful, and consistent with the purpose the End Customer consented to.',
          "Not use the Service to send spam, unsolicited marketing to numbers that have not opted in, misleading content, or any communication prohibited under applicable law, including India's IT Act 2000, TRAI regulations on commercial communication, and WhatsApp's own Business Policy.",
          'Comply with all applicable data protection and consumer protection laws in respect of your End Customers.',
          'Not use the Service for any unlawful, fraudulent, defamatory, or harmful purpose.',
        ],
      },
      {
        heading: '5. End Customer consent',
        paragraphs: [
          "By scanning a Regulars QR code or otherwise opting in at a Business User's premises, an End Customer consents to receive WhatsApp messages from that specific business through the Service. An End Customer may opt out of receiving further messages at any time by replying \"STOP\" (or an equivalent instruction) on WhatsApp, or by requesting removal directly from the Business User or from Wayne E Solutions at support@wayneesolutions.com.",
        ],
      },
      {
        heading: '6. Fees and subscription',
        paragraphs: [
          'Access to Regulars for Business Users may be offered on a free-trial, subscription, or usage basis, as communicated at the time of sign-up or renewal. Applicable fees, billing cycles, and payment terms will be presented to the Business User before any charge is made. Continued use of a paid plan after a price change constitutes acceptance of the revised pricing, subject to prior notice.',
        ],
      },
      {
        heading: '7. Third-party services',
        paragraphs: [
          "Regulars relies on WhatsApp's messaging infrastructure (via WhatsApp Business/WhatsApp Cloud API or equivalent) and other third-party service providers to operate. Your use of the Service is also subject to WhatsApp's own terms of service. We are not responsible for outages, restrictions, or policy changes imposed by WhatsApp or other third parties that affect the Service.",
        ],
      },
      {
        heading: '8. Intellectual property',
        paragraphs: [
          "All rights, title, and interest in the Regulars platform, including its software, design, branding, and underlying technology, belong to Wayne E Solutions. Nothing in these Terms grants a Business User or End Customer any ownership rights in the Service, other than a limited, non-exclusive, non-transferable right to use it as intended.",
        ],
      },
      {
        heading: '9. Suspension and termination',
        paragraphs: [
          'We may suspend or terminate access to the Service, with or without notice, if a Business User violates these Terms, misuses End Customer data, engages in spam or unlawful conduct, or fails to pay applicable fees. A Business User may stop using the Service at any time; certain obligations (such as data handling and confidentiality) survive termination.',
        ],
      },
      {
        heading: '10. Disclaimers',
        paragraphs: [
          'The Service is provided on an "as is" and "as available" basis. While we aim for high reliability, we do not guarantee that the Service will be uninterrupted, error-free, or that message delivery via WhatsApp will always succeed, as this depends in part on third-party infrastructure outside our control.',
        ],
      },
      {
        heading: '11. Limitation of liability',
        paragraphs: [
          'To the maximum extent permitted by law, Wayne E Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from use of, or inability to use, the Service, including loss of business, revenue, or data. Our aggregate liability for any claim relating to the Service shall not exceed the fees paid by the Business User in the three (3) months preceding the claim.',
        ],
      },
      {
        heading: '12. Indemnity',
        paragraphs: [
          'Business Users agree to indemnify and hold harmless Wayne E Solutions from any claims, damages, or expenses arising from their use of the Service, including claims brought by End Customers relating to the content or manner of messages sent by the Business User.',
        ],
      },
      {
        heading: '13. Changes to these Terms',
        paragraphs: [
          'We may update these Terms from time to time to reflect changes in the Service or applicable law. Material changes will be notified to Business Users in advance where practicable. Continued use of the Service after changes take effect constitutes acceptance of the updated Terms.',
        ],
      },
      {
        heading: '14. Governing law and jurisdiction',
        paragraphs: [
          'These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Ludhiana, Punjab, India.',
        ],
      },
      {
        heading: '15. Contact us',
        paragraphs: ['For any questions regarding these Terms, please contact us at support@wayneesolutions.com.'],
      },
    ],
  },

  privacy: {
    kind: 'privacy',
    label: 'Privacy Policy',
    slug: '/privacy',
    effectiveDate,
    eyebrow: 'Privacy',
    title: 'Your information, treated with care.',
    intro:
      'This Privacy Policy explains how Wayne E Solutions ("we", "us", "our") collects, uses, shares, and protects information in connection with Regulars (the "Service"), available at regulars-rust.vercel.app. It applies to Business Users who use the Service and to End Customers whose information is processed through it.',
    sections: [
      {
        heading: '1. Information we collect',
        paragraphs: ['From Business Users, we collect:'],
        bullets: [
          'Business name, contact details, and login credentials.',
          'Billing and subscription information (processed via our payment partners).',
          'Usage data related to how the Service is used (e.g., messages sent, features used).',
        ],
      },
      {
        heading: '',
        paragraphs: ['From End Customers, we collect, on behalf of the relevant Business User:'],
        bullets: [
          'WhatsApp number, typically captured via a QR code scan at the point of sale.',
          'Name, if voluntarily provided during sign-up or conversation.',
          'Message interaction data (e.g., replies, delivery and read status) needed to operate the reminder service.',
        ],
      },
      {
        heading: '2. How we use information',
        paragraphs: ['We use the information collected to:'],
        bullets: [
          'Operate and provide the Service, including sending WhatsApp reminders on behalf of Business Users.',
          'Maintain Business User accounts and process billing.',
          'Improve, secure, and troubleshoot the Service.',
          'Communicate with Business Users about their account, updates, or support requests.',
          'Comply with legal obligations and enforce our Terms & Conditions.',
        ],
      },
      {
        heading: '',
        paragraphs: ['We do not sell End Customer personal information to third parties.'],
      },
      {
        heading: '3. Role of Business Users as data controllers',
        paragraphs: [
          "Where a Business User collects an End Customer's WhatsApp number and consent, the Business User acts as the data controller for that End Customer relationship, and Wayne E Solutions acts as a service provider/processor that enables message delivery on the Business User's behalf. End Customers with questions about how a specific business uses their information should contact that business directly, or reach out to us at support@wayneesolutions.com and we will assist in routing the request.",
        ],
      },
      {
        heading: '4. Sharing of information',
        paragraphs: ['We may share information with:'],
        bullets: [
          'WhatsApp/Meta and messaging infrastructure providers, solely to deliver messages.',
          'Cloud hosting, analytics, and payment processing providers who help us operate the Service, under appropriate confidentiality and data protection obligations.',
          'Law enforcement or regulators, where required by law or to protect our rights, users, or the public.',
          'A successor entity, in the event of a merger, acquisition, or sale of assets, subject to the same privacy commitments described here.',
        ],
      },
      {
        heading: '5. Data retention',
        paragraphs: [
          'We retain Business User and End Customer information for as long as necessary to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. End Customer contact information is retained until the End Customer opts out, the Business User removes it, or it is no longer needed for the purpose it was collected.',
        ],
      },
      {
        heading: '6. Data security',
        paragraphs: [
          'We implement reasonable technical and organisational measures, including access controls and encryption in transit, to protect information against unauthorised access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: '7. End Customer rights',
        paragraphs: ['An End Customer may, at any time:'],
        bullets: [
          'Opt out of receiving messages by replying "STOP" on WhatsApp or requesting removal from the Business User.',
          'Request access to, correction of, or deletion of their personal information by contacting the relevant Business User or support@wayneesolutions.com.',
        ],
      },
      {
        heading: '8. Business User rights',
        paragraphs: [
          'A Business User may access, update, or request deletion of their account information by logging into their account or contacting us at support@wayneesolutions.com. Certain information may be retained as required for legal, accounting, or fraud-prevention purposes.',
        ],
      },
      {
        heading: "9. Children's privacy",
        paragraphs: [
          'The Service is intended for use by businesses and their adult customers. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected such information, we will take steps to delete it.',
        ],
      },
      {
        heading: '10. International data transfers',
        paragraphs: [
          'Our infrastructure and service providers may process data in locations outside India. Where this occurs, we take reasonable steps to ensure such transfers are subject to appropriate safeguards consistent with applicable data protection law.',
        ],
      },
      {
        heading: '11. Changes to this Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. Material changes will be communicated to Business Users, and the "Effective Date" above will be updated accordingly.',
        ],
      },
      {
        heading: '12. Contact us',
        paragraphs: ['For questions or requests regarding this Privacy Policy, please contact us at support@wayneesolutions.com.'],
      },
    ],
  },

  refund: {
    kind: 'refund',
    label: 'Refund Policy',
    slug: '/refund',
    effectiveDate,
    eyebrow: 'Refund Policy',
    title: 'How refunds work.',
    intro:
      'This Refund Policy applies to paid subscriptions and services purchased by Business Users through Regulars (the "Service"), operated by Wayne E Solutions. It does not apply to End Customers, who do not pay for the Service.',
    sections: [
      {
        heading: '1. Free trials',
        paragraphs: [
          'Where a free trial is offered, no payment is collected during the trial period. You may cancel at any time before the trial ends to avoid being charged. If you do not cancel, your subscription will convert to a paid plan as communicated at sign-up.',
        ],
      },
      {
        heading: '2. Subscription billing',
        paragraphs: [
          'Paid plans are billed in advance on a recurring basis (monthly, quarterly, or annually, as selected at sign-up). By subscribing, you authorise us to charge the applicable fees to your chosen payment method at the start of each billing cycle.',
        ],
      },
      {
        heading: '3. Cancellations',
        paragraphs: [
          'You may cancel your subscription at any time from your account settings or by writing to support@wayneesolutions.com. Cancellation stops future billing but does not automatically entitle you to a refund for the current billing period already paid for; access to the Service will continue until the end of the current paid period.',
        ],
      },
      {
        heading: '4. Eligibility for refunds',
        paragraphs: ['We evaluate refund requests on a case-by-case basis. You may be eligible for a full or partial refund if:'],
        bullets: [
          'You were charged in error or duplicate (e.g., a technical billing glitch).',
          'The Service was materially unavailable or non-functional for a significant part of your billing period due to a fault on our end, and the issue was not resolved within a reasonable time after being reported.',
          'You cancel a new subscription within 7 days of the initial charge and have made minimal to no use of the Service.',
        ],
      },
      {
        heading: '',
        paragraphs: [
          "Refunds are generally not provided for partial-month usage after this period, dissatisfaction with results that depend on the Business User's own use of the Service (such as message content or customer response rates), or for add-on usage already consumed (e.g., messages already sent).",
        ],
      },
      {
        heading: '5. How to request a refund',
        paragraphs: [
          'To request a refund, email support@wayneesolutions.com with your business name, registered email, and the reason for your request. We aim to respond within 5–7 business days. Approved refunds are processed to the original payment method within 7–14 business days, depending on your bank or payment provider.',
        ],
      },
      {
        heading: '6. Non-refundable items',
        paragraphs: [],
        bullets: [
          'Onboarding, setup, or one-time customisation fees, once work has commenced.',
          'Third-party costs already incurred on your behalf (e.g., WhatsApp Business API conversation charges).',
        ],
      },
      {
        heading: '7. Changes to this Policy',
        paragraphs: ['We may update this Refund Policy from time to time. The updated policy will apply to charges made after the effective date of the change.'],
      },
      {
        heading: '8. Contact us',
        paragraphs: ['For billing or refund queries, contact support@wayneesolutions.com.'],
      },
    ],
  },

  cookies: {
    kind: 'cookies',
    label: 'Cookie Policy',
    slug: '/cookies',
    effectiveDate,
    eyebrow: 'Cookies',
    title: 'How we use cookies.',
    intro:
      'This Cookie Policy explains how Wayne E Solutions uses cookies and similar tracking technologies on the Regulars website at regulars-rust.vercel.app (the "Site"). It should be read together with our Privacy Policy.',
    sections: [
      {
        heading: '1. What are cookies',
        paragraphs: [
          'Cookies are small text files placed on your device when you visit a website. They help the website function properly, remember your preferences, and understand how visitors use the site. Similar technologies, such as local storage and pixels, may be used for the same purposes.',
        ],
      },
      {
        heading: '2. Types of cookies we use',
        paragraphs: [
          'Strictly necessary cookies — these cookies are essential for the Site to function, for example enabling secure log-in for Business Users and maintaining session state. The Site may not work properly without them.',
          'Performance and analytics cookies — these cookies help us understand how visitors interact with the Site (e.g., pages visited, time spent, referral source) so we can improve its performance and content. Data collected is generally aggregated and used for internal analysis.',
          'Functionality cookies — these cookies remember choices you make on the Site (such as display preferences) to provide a more personalised experience on return visits.',
        ],
      },
      {
        heading: '3. Third-party cookies',
        paragraphs: [
          'We may use third-party services (such as hosting, analytics, or booking/demo-scheduling tools) that place their own cookies on your device when you use the Site. These third parties are responsible for their own cookie practices, and we encourage you to review their respective policies.',
        ],
      },
      {
        heading: '4. Managing cookies',
        paragraphs: [
          'Most web browsers allow you to control cookies through their settings, including blocking or deleting cookies. Please note that disabling certain cookies, particularly strictly necessary ones, may affect the functionality of the Site, such as your ability to log in.',
        ],
      },
      {
        heading: '5. Changes to this Policy',
        paragraphs: [
          'We may update this Cookie Policy from time to time to reflect changes in the technologies we use or for legal reasons. The "Effective Date" at the top of this page indicates when it was last updated.',
        ],
      },
      {
        heading: '6. Contact us',
        paragraphs: ['If you have questions about our use of cookies, please contact us at support@wayneesolutions.com.'],
      },
    ],
  },
}

export const legalNav: { label: string; href: string }[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Cookie Policy', href: '/cookies' },
]

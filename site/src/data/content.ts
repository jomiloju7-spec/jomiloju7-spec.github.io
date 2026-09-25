// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SITE CONTENT
// ---------------------------------------------------------------------------
// Edit the values below to update the site — everything on the page reads
// from this file. Sourced from Oluwajomiloju's CV. A few fields (resume PDF,
// live project demos) are still placeholders — search this file for
// "placeholder" to find them.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Oluwajomiloju Dare-Esan',
  shortName: 'Jomiloju',
  tagline: 'Chemical Engineering Undergraduate · Sustainable Process Engineering',
  location: 'Lagos, Nigeria',
  email: 'jomilojudareesan7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jomidareesan',
  github: 'https://github.com/jomiloju7-spec',
  // Drop resume.pdf into /public (site/public/resume.pdf) — it is currently
  // a placeholder link and the button will 404 until the file is added.
  resumeUrl: '/resume.pdf',
  statusBadges: ['CNN Voices From the South Fellow', 'Based in Lagos, Nigeria'],
};

export const nav = [
  { label: 'Home', href: '/#hero' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'All Projects', href: '/projects' },
];

export const hero = {
  eyebrow: "Hi, I'm",
  headline: profile.name,
  subhead: profile.tagline,
  description:
    'Chemical Engineering undergraduate at the University of Lagos with a focus on environmental engineering and sustainable industrial practice — from material selection in production settings to process optimization. Currently a CNN Voices From the South journalism fellow, reporting on the stories behind that work.',
};

export const experience = [
  {
    role: 'Voices From the South Fellow — Sharing Stories Affecting the World',
    org: 'CNN (Cable News Network), United States',
    period: '11/2025 — Present',
    summary:
      'Selected from over 10,800 applicants across 129 countries for a three-month journalism fellowship. Completed CNN Academy Hub coursework in storytelling, journalistic ethics, breaking news coverage and field reporting, and applied rigorous ethical frameworks to fact-driven environmental reporting.',
    placeholder: false,
  },
  {
    role: 'Head of Design',
    org: 'Protean Designs',
    period: '01/2023 — Present',
    summary:
      'Gained foundational experience in archival research and records management within the Nigerian institutional context.',
    placeholder: false,
  },
  {
    role: 'Media Team Volunteer',
    org: 'The Industry Discourse (TID 5.0)',
    period: 'July 2026',
    summary:
      'Supported the media team through photography, videography and content creation for social platforms — including real-time session coverage and promotional material to boost event visibility.',
    placeholder: false,
  },
];

// Certifications, awards, fellowships and hackathon results — grouped as one
// achievements grid.
export const certifications = [
  { name: 'Cybersecurity Defense Analyst Pathway Exam', issuer: 'Cisco Networking Academy', year: '2026', placeholder: false },
  { name: 'AWS AI Practitioner Challenge', issuer: 'Udacity', year: '2026', placeholder: false },
  { name: 'USAII Global AI Hackathon — Finalist, Graduate Track', issuer: 'United States Artificial Intelligence Institute', year: '2026', placeholder: false },
  { name: 'Frontier Engineering Challenge', issuer: 'Micro1', year: '2026', placeholder: false },
  { name: 'CNN "Voices of the South" Fellowship', issuer: 'CNN', year: '2025', placeholder: false },
  { name: 'Food Product Development Training', issuer: 'Nestlé', year: '2025', placeholder: false },
  { name: 'Solution Creation Training', issuer: 'Nestlé', year: '2025', placeholder: false },
  { name: 'Full-Tuition Scholarship', issuer: 'The Esan Family Trust Fund', year: '2025 & 2026', placeholder: false },
  { name: 'Virtual Assistant Course Completion', issuer: 'ALX', year: '2024', placeholder: false },
  { name: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', year: '2024', placeholder: false },
  { name: 'Full-Tuition Scholarship', issuer: 'The Oyefeso Family', year: '2023', placeholder: false },
];

export const aboutQA = [
  {
    q: 'What pulled you toward chemical engineering?',
    a: "An interest in environmental engineering and sustainable industrial practice — I wanted a career that applies engineering principles to reducing environmental impact and supporting cleaner production systems, not just running a process for its own sake.",
  },
  {
    q: 'How does a CNN journalism fellowship fit alongside an engineering degree?',
    a: "As part of CNN's Voices From the South fellowship, I learned to apply the same rigor I use in the lab to reporting: accuracy, fact-driven research and objective storytelling — this time aimed at environmental stories instead of lab data.",
  },
  {
    q: 'What keeps you busy outside coursework?',
    a: "I lead design work at Protean Designs, where I've picked up archival research and records management in a Nigerian institutional context, and I'm active with AIChE and NSChE at Unilag.",
  },
  {
    q: "What's something you're currently learning?",
    a: 'Working through the Cisco Cybersecurity Defense Analyst pathway and the AWS AI Practitioner challenge — both 2026 certifications in progress alongside my coursework.',
  },
];

export const skills = [
  {
    group: 'Programming Languages',
    items: ['Python', 'JavaScript', 'HTML/CSS', 'JSON', 'React Native'],
  },
  {
    group: 'Data Analytics',
    items: ['Excel', 'SQL', 'R', 'Tableau'],
  },
  {
    group: 'Tools & Platforms',
    items: ['Flask', 'Git/GitHub', 'APIs', 'Command Line', 'Canva', 'Strapi'],
  },
  {
    group: 'Database Management',
    items: ['Microsoft Access', 'Excel', 'Google Sheets'],
  },
  {
    group: 'Project Management',
    items: ['Microsoft Office Suite', 'Google Workspace', 'Confluence', 'Asana', 'Slack', 'Monday.com'],
  },
  {
    group: 'Media Processing',
    items: ['Audacity', 'HandBrake', 'SilverFast'],
  },
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: string;
  tech: string[];
  github?: string;
  live?: string;
  featured: boolean;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'repo-audit',
    title: 'Repo Audit',
    description:
      'A local Python tool for auditing repository health and technical due diligence, built on a LangGraph workflow with repository analysis tooling.',
    role: 'Builder',
    year: '2026',
    tech: ['Python', 'LangChain', 'LangGraph', 'Google Gemini', 'GitPython', 'Radon', 'Bandit'],
    github: 'https://github.com/jomiloju7-spec',
    featured: true,
    placeholder: false,
  },
];

export const education = [
  {
    degree: 'Bachelor of Science, Chemical Engineering',
    school: 'University of Lagos, Nigeria',
    period: '09/2023 — 07/2028',
    notes: 'Coursework includes process dynamics and fluid flow measurement, presented at Unilag in 2026 (dynamic response of a mercury-in-glass thermometer; discharge-rate measurement via venturi meter, orifice plate and rotameter).',
    placeholder: false,
  },
];

export const contact = {
  heading: "Let's talk",
  blurb:
    "Have a role, project or question in mind? I'd like to hear from you — the form below and the links here all reach me directly.",
  closing: "Thanks for stopping by — I'm looking forward to hearing from you.",
  // Static-friendly contact form: plug a Formspree (or similar) endpoint ID
  // in here. Until it's set, the form falls back to a mailto: link so it
  // still works. See README "Contact form" section for setup steps.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '',
};

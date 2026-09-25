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
  tagline: 'Chemical Engineering Undergraduate · Sustainable Process Engineer',
  location: 'Lagos, Nigeria',
  email: 'jomilojudareesan7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jomidareesan',
  github: 'https://github.com/jomiloju7-spec',
  // Drop resume.pdf into /public (site/public/resume.pdf) — it is currently
  // a placeholder link and the button will 404 until the file is added.
  resumeUrl: '/resume.pdf',
};

// Small credibility badges shown in the Hero, each with a brand mark.
// "mark" selects which icon renders — see CredentialBadge component.
export const credentialBadges = [
  { label: "CNN Academy Fellow '25", mark: 'cnn' as const },
  { label: 'Graduating 2028', mark: 'unilag' as const },
];

export const nav = [
  { label: 'Home', href: '/#hero' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Education', href: '/#education' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  eyebrow: "Hi, I'm",
  headline: profile.name,
  subhead: profile.tagline,
  description:
    'Chemical Engineering undergraduate at the University of Lagos with a focus on environmental engineering and sustainable industrial practice — from material selection in production settings to process optimization.',
};

export const experience = [
  {
    role: 'Voices From the South Fellow — Sharing Stories Affecting the World',
    org: 'CNN (Cable News Network), United States',
    period: '06/2025 — 11/2025',
    summary:
      'Selected from over 10,800 applicants across 129 countries for a three-month journalism fellowship. Completed CNN Academy Hub coursework in storytelling, journalistic ethics, breaking news coverage and field reporting, and applied rigorous ethical frameworks to fact-driven environmental reporting.',
    placeholder: false,
  },
  {
    role: 'Head of Design',
    org: 'Protean Designs',
    period: '01/2023 — Present',
    summary:
      'Lead graphic design for the studio — brand identity and marketing materials for clients, plus social media graphics and digital content across platforms.',
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

// Straight certifications and training only — hackathons have their own
// section below.
export const certifications = [
  { name: 'Cybersecurity Defense Analyst Pathway Exam', issuer: 'Cisco Networking Academy', year: '2026', placeholder: false },
  { name: 'AWS AI Practitioner Challenge', issuer: 'Udacity', year: '2026', placeholder: false },
  { name: 'CNN "Voices of the South" Fellowship', issuer: 'CNN', year: '2025', placeholder: false },
  { name: 'Food Product Development Training', issuer: 'Nestlé', year: '2025', placeholder: false },
  { name: 'Solution Creation Training', issuer: 'Nestlé', year: '2025', placeholder: false },
  { name: 'Virtual Assistant Course Completion', issuer: 'ALX', year: '2024', placeholder: false },
  { name: 'Data Analytics Essentials', issuer: 'Cisco Networking Academy', year: '2024', placeholder: false },
];

export const hackathons = [
  { name: 'USAII Global AI Hackathon — Finalist, Graduate Track', issuer: 'United States Artificial Intelligence Institute', year: '2026', placeholder: false },
  { name: 'Frontier Engineering Challenge', issuer: 'Micro1', year: '2026', placeholder: false },
];

export const aboutQA = [
  {
    q: 'What pulled you toward chemical engineering?',
    a: "An interest in environmental engineering and sustainable industrial practice — I wanted a career that applies engineering principles to reducing environmental impact and supporting cleaner production systems, not just running a process for its own sake.",
  },
  {
    q: 'What was the CNN Voices From the South fellowship like?',
    a: "I was one of a small group picked from over 10,800 applicants across 129 countries for the three-month fellowship. Through the CNN Academy Hub I worked on storytelling, journalistic ethics and field reporting, and learned to bring the same fact-driven rigor from engineering into environmental reporting.",
  },
  {
    q: 'What do you do outside your coursework?',
    a: "I lead graphic design at Protean Designs — brand identity, marketing materials and social content for clients. I'm also active in AIChE and NSChE at Unilag, a Cowrywise Ambassador, and I volunteered on the media team covering The Industry Discourse (TID 5.0).",
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
    placeholder: false,
  },
];

export const contact = {
  heading: "Let's talk",
  blurb: "Have a role, project or question in mind? These links reach me directly.",
  closing: "Thanks for stopping by — I'm looking forward to hearing from you.",
};

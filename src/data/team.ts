export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  profession: string;
  credentials: string[];
  bio: string;
  email: string;
  phone: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'aminu-lawan',
    name: "Aminu Lawan Shu'aibu",
    title: 'Architect / Engineer',
    role: 'Head of Architectural Design & Construction',
    profession: 'Architectural Engineering',
    credentials: ['ARCON Registered'],
    bio: "Over 8 years of lead experience in residential layout design, structural planning, and urban estate development across Northern Nigeria.",
    email: 'aminu.lawan@muhalliestates.com',
    phone: '+234 816 060 4450',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'abdussamad-jibril',
    name: 'Abdussamad Jibril',
    title: 'Civil Engineer',
    role: 'Lead Structural & Site Engineer',
    profession: 'Civil & Structural Engineering',
    credentials: ['B.Eng. Civil Engineering'],
    bio: 'Specializes in reinforced concrete structures, commercial plaza foundations, soil testing, and on-site quality assurance.',
    email: 'abdussamad.jibril@muhalliestates.com',
    phone: '+234 704 449 1274',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 'mubarak-isyaku',
    name: 'Mubarak Isyaku',
    title: 'Analyst / Marketing Officer',
    role: 'Chief Strategy & Investment Officer',
    profession: 'Real Estate Finance & Market Analysis',
    credentials: ['Certified Analyst'],
    bio: 'Drives off-plan valuation, rental yield modeling, investor relations, and property acquisition strategy.',
    email: 'mubarak.isyaku@muhalliestates.com',
    phone: '+234 704 449 1274',
    socials: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 'mustapha-yusuf-azore',
    name: 'Mustapha Yusuf Azore',
    title: 'Software Engineer / Tech Officer',
    role: 'Chief Technology Officer (CTO)',
    profession: 'Software Engineering & Digital Systems',
    credentials: ['B.Sc. Computer Science', 'Full-Stack Systems Specialist'],
    bio: 'Leads digital infrastructure, property management technology, client portal systems, and web platforms for Muhalli.',
    email: 'mustapha.azore@muhalliestates.com',
    phone: '+234 706 111 0002',
    socials: {
      linkedin: 'https://linkedin.com/in/dev-azore',
      twitter: 'https://twitter.com/dev_azore',
    },
  },
];

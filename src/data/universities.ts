export interface University {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  country: string;
  countryCode: string;
  founded: string;
  students: string;
  description: string;
  longDescription: string;
  programs: string[];
  ranking: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  website?: string;
  campus: string;
  intakes: string[];
  tuitionFrom: string;
  acceptanceRate: string;
  internationalStudents: string;
  highlights: string[];
  facilities: string[];
  requirements: {
    undergraduate: string[];
    postgraduate: string[];
  };
  popularPrograms: {
    name: string;
    level: string;
    duration: string;
    tuition: string;
  }[];
}

export const COUNTRIES = [
  { code: "all", name: "All Countries", flag: "🌍" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "UK", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
];

export const UNIVERSITIES: University[] = [
  {
    id: 1,
    slug: "city-university-malaysia",
    name: "City University Malaysia",
    shortName: "CityU",
    city: "Petaling Jaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1984",
    students: "12,000+",
    description:
      "A premier private university offering industry-relevant programs in business, engineering, and creative arts.",
    longDescription:
      "City University Malaysia is a leading private higher education institution recognized for its industry-focused curriculum and strong graduate employability. Located in the heart of Petaling Jaya, the university offers a vibrant student life and access to Malaysia's largest business district. With over 40 years of academic excellence, City University has produced thousands of graduates who hold leadership positions across global industries.",
    programs: ["Business", "Engineering", "IT", "Design"],
    ranking: "Top 50 Malaysia",
    featured: true,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://city.edu.my",
    campus: "Petaling Jaya Main Campus",
    intakes: ["January", "May", "September"],
    tuitionFrom: "RM 25,000/year",
    acceptanceRate: "78%",
    internationalStudents: "2,500+",
    highlights: [
      "MQA accredited programs",
      "Industry-linked curriculum",
      "Strong graduate employability",
      "Modern campus facilities",
      "Active student community",
    ],
    facilities: [
      "Modern Library",
      "Computer Labs",
      "Engineering Workshops",
      "Sports Complex",
      "Student Hostels",
      "Cafeteria",
    ],
    requirements: {
      undergraduate: [
        "High school diploma or equivalent",
        "Minimum CGPA 2.5 or equivalent",
        "IELTS 5.5 or TOEFL 46",
        "Valid passport",
      ],
      postgraduate: [
        "Bachelor's degree with CGPA 2.75",
        "IELTS 6.0 or TOEFL 60",
        "Letters of recommendation",
        "Statement of purpose",
      ],
    },
    popularPrograms: [
      { name: "Bachelor of Business Administration", level: "Undergraduate", duration: "3 Years", tuition: "RM 28,000/year" },
      { name: "Bachelor of Software Engineering", level: "Undergraduate", duration: "4 Years", tuition: "RM 32,000/year" },
      { name: "Master of Business Administration", level: "Postgraduate", duration: "1.5 Years", tuition: "RM 35,000/year" },
      { name: "Diploma in Graphic Design", level: "Diploma", duration: "2.5 Years", tuition: "RM 22,000/year" },
    ],
  },
  {
    id: 2,
    slug: "inti-international-university",
    name: "INTI International University",
    shortName: "INTI",
    city: "Nilai",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1986",
    students: "17,000+",
    description:
      "Part of the Laureate International Universities network with strong industry partnerships and global recognition.",
    longDescription:
      "INTI International University is one of Malaysia's most prestigious private universities, part of the global Laureate International Universities network spanning over 25 countries. INTI is renowned for its dual award programs with top universities in the UK, USA, and Australia, offering students globally recognized qualifications without leaving Malaysia.",
    programs: ["Business", "Engineering", "Hospitality", "Health Sciences"],
    ranking: "QS 5-Star Rated",
    featured: true,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://newinti.edu.my",
    campus: "Nilai Main Campus, Subang Jaya, Penang",
    intakes: ["January", "April", "August"],
    tuitionFrom: "RM 32,000/year",
    acceptanceRate: "72%",
    internationalStudents: "3,800+",
    highlights: [
      "QS 5-Star Rated University",
      "Laureate International Network",
      "Dual award programs",
      "98% graduate employability",
      "Industry partnerships with 200+ companies",
    ],
    facilities: [
      "Smart Classrooms",
      "Innovation Hub",
      "Research Centers",
      "Sports Arena",
      "On-campus Residence",
      "Health Clinic",
    ],
    requirements: {
      undergraduate: [
        "STPM/A-Level/Foundation",
        "Minimum CGPA 2.5",
        "IELTS 5.5 or equivalent",
        "Valid passport",
      ],
      postgraduate: [
        "Bachelor's degree with CGPA 2.75",
        "IELTS 6.0",
        "Work experience (for MBA)",
        "Research proposal (for PhD)",
      ],
    },
    popularPrograms: [
      { name: "Bachelor of Engineering (Mechanical)", level: "Undergraduate", duration: "4 Years", tuition: "RM 38,000/year" },
      { name: "Bachelor in Hospitality Management", level: "Undergraduate", duration: "3 Years", tuition: "RM 34,000/year" },
      { name: "Master of Business Administration", level: "Postgraduate", duration: "1 Year", tuition: "RM 42,000/year" },
      { name: "Foundation in Science", level: "Foundation", duration: "1 Year", tuition: "RM 18,000/year" },
    ],
  },
  {
    id: 3,
    slug: "university-of-cyberjaya",
    name: "University of Cyberjaya",
    shortName: "UoC",
    city: "Cyberjaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "2005",
    students: "8,500+",
    description:
      "Leading institution for medical, pharmacy, and health sciences education in Malaysia's tech hub.",
    longDescription:
      "University of Cyberjaya is a leading specialist university in medical and health sciences, located in Malaysia's premier technology city. The university is known for its state-of-the-art medical simulation centers, teaching hospital affiliations, and rigorous health sciences programs that produce world-class healthcare professionals.",
    programs: ["Medicine", "Pharmacy", "Health Sciences", "Psychology"],
    ranking: "Top Medical School",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://cyberjaya.edu.my",
    campus: "Cyberjaya Main Campus",
    intakes: ["February", "September"],
    tuitionFrom: "RM 45,000/year",
    acceptanceRate: "55%",
    internationalStudents: "1,200+",
    highlights: [
      "MQA & MMC recognized medical programs",
      "Teaching hospital affiliations",
      "State-of-the-art simulation labs",
      "Research-focused curriculum",
      "Clinical placement guaranteed",
    ],
    facilities: [
      "Simulation Hospital",
      "Anatomy Lab",
      "Pharmacy Lab",
      "Research Center",
      "Medical Library",
      "Clinical Skills Center",
    ],
    requirements: {
      undergraduate: [
        "STPM/A-Level with strong science background",
        "Minimum 3B's in Biology, Chemistry, Physics",
        "IELTS 6.0",
        "Medical entrance interview",
      ],
      postgraduate: [
        "Bachelor's in relevant field with CGPA 3.0",
        "IELTS 6.5",
        "Research proposal",
        "Professional license (if applicable)",
      ],
    },
    popularPrograms: [
      { name: "Bachelor of Medicine & Surgery (MBBS)", level: "Undergraduate", duration: "5 Years", tuition: "RM 65,000/year" },
      { name: "Bachelor of Pharmacy", level: "Undergraduate", duration: "4 Years", tuition: "RM 48,000/year" },
      { name: "Bachelor of Psychology", level: "Undergraduate", duration: "3 Years", tuition: "RM 32,000/year" },
      { name: "Master of Public Health", level: "Postgraduate", duration: "1.5 Years", tuition: "RM 38,000/year" },
    ],
  },
  {
    id: 4,
    slug: "segi-university",
    name: "SEGi University & Colleges",
    shortName: "SEGi",
    city: "Kota Damansara",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1977",
    students: "25,000+",
    description:
      "One of Malaysia's largest private higher education providers with 5 campuses nationwide.",
    longDescription:
      "SEGi University & Colleges is one of Malaysia's pioneering and largest private higher education providers, with a 47-year legacy of academic excellence. With 5 campuses across the country, SEGi serves over 25,000 students through partnerships with prestigious universities in the UK, Australia, and the USA.",
    programs: ["Business", "Engineering", "Medicine", "Education"],
    ranking: "QS 5-Star University",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://segi.edu.my",
    campus: "Kota Damansara (Main), 4 satellite campuses",
    intakes: ["January", "May", "September"],
    tuitionFrom: "RM 22,000/year",
    acceptanceRate: "75%",
    internationalStudents: "4,500+",
    highlights: [
      "47 years of academic legacy",
      "5 campuses across Malaysia",
      "Partnerships with 25+ global universities",
      "QS 5-Star rated",
      "Affordable tuition fees",
    ],
    facilities: [
      "Multiple Campus Locations",
      "Modern Lecture Halls",
      "Computer Labs",
      "Library",
      "Sports Facilities",
      "Student Lounges",
    ],
    requirements: {
      undergraduate: [
        "SPM/O-Level with 5 credits",
        "STPM/A-Level/Foundation",
        "IELTS 5.5",
        "Valid passport",
      ],
      postgraduate: [
        "Bachelor's degree CGPA 2.5+",
        "IELTS 6.0",
        "Work experience preferred",
        "Statement of intent",
      ],
    },
    popularPrograms: [
      { name: "Bachelor of Accounting & Finance", level: "Undergraduate", duration: "3 Years", tuition: "RM 28,000/year" },
      { name: "Bachelor of Education (TESL)", level: "Undergraduate", duration: "4 Years", tuition: "RM 26,000/year" },
      { name: "Master of Business Administration", level: "Postgraduate", duration: "1.5 Years", tuition: "RM 32,000/year" },
      { name: "Diploma in Early Childhood Education", level: "Diploma", duration: "2.5 Years", tuition: "RM 18,000/year" },
    ],
  },
  {
    id: 5,
    slug: "asia-pacific-university",
    name: "Asia Pacific University",
    shortName: "APU",
    city: "Kuala Lumpur",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1993",
    students: "13,000+",
    description:
      "Premier university for technology and innovation with strong tech industry connections.",
    longDescription:
      "Asia Pacific University (APU) is Malaysia's premier institution for technology and innovation, recognized as a Premier Digital Tech Institution by the Malaysia Digital Economy Corporation. APU's award-winning campus in TPM (Technology Park Malaysia) provides students unmatched access to the tech industry, with over 13,000 students from 130+ countries.",
    programs: ["IT", "Computing", "Business", "Engineering"],
    ranking: "Premier Digital Tech",
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://apu.edu.my",
    campus: "Technology Park Malaysia (TPM)",
    intakes: ["February", "May", "September", "November"],
    tuitionFrom: "RM 35,000/year",
    acceptanceRate: "68%",
    internationalStudents: "5,200+",
    highlights: [
      "Premier Digital Tech Institution",
      "Students from 130+ countries",
      "Award-winning iconic campus",
      "Strong tech industry connections",
      "Dual UK degree available",
    ],
    facilities: [
      "Iconic Tech Campus",
      "Cyber Security Lab",
      "Game Design Studio",
      "AI & Data Center",
      "Innovation Hub",
      "Student Residence",
    ],
    requirements: {
      undergraduate: [
        "STPM/A-Level with Mathematics",
        "Foundation programs accepted",
        "IELTS 5.5 minimum",
        "Computer literacy",
      ],
      postgraduate: [
        "Bachelor's in IT/Computing field",
        "IELTS 6.0",
        "Portfolio (for design programs)",
        "Programming background",
      ],
    },
    popularPrograms: [
      { name: "BSc (Hons) Computer Science", level: "Undergraduate", duration: "3 Years", tuition: "RM 42,000/year" },
      { name: "BSc (Hons) Cyber Security", level: "Undergraduate", duration: "3 Years", tuition: "RM 44,000/year" },
      { name: "BA (Hons) Digital Marketing", level: "Undergraduate", duration: "3 Years", tuition: "RM 38,000/year" },
      { name: "MSc Data Analytics", level: "Postgraduate", duration: "1 Year", tuition: "RM 48,000/year" },
    ],
  },
  {
    id: 6,
    slug: "taylors-university",
    name: "Taylor's University",
    shortName: "Taylor's",
    city: "Subang Jaya",
    country: "Malaysia",
    countryCode: "MY",
    founded: "1969",
    students: "14,000+",
    description:
      "Ranked #1 private university in Malaysia and Southeast Asia by QS World University Rankings.",
    longDescription:
      "Taylor's University is the #1 private university in Malaysia and Southeast Asia according to the QS World University Rankings 2024. With over 55 years of academic excellence, Taylor's is renowned globally for its hospitality and tourism programs, ranked #16 worldwide. The lakeside campus in Subang Jaya is one of the most beautiful in Asia.",
    programs: ["Hospitality", "Business", "Design", "Engineering"],
    ranking: "#1 Private Malaysia",
    featured: true,
    image: "/placeholder.svg?height=600&width=1200",
    gallery: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    website: "https://taylors.edu.my",
    campus: "Lakeside Campus, Subang Jaya",
    intakes: ["March", "August"],
    tuitionFrom: "RM 42,000/year",
    acceptanceRate: "62%",
    internationalStudents: "4,000+",
    highlights: [
      "#1 Private University in Malaysia",
      "Top 16 Globally for Hospitality",
      "QS World University Rankings 2024",
      "Stunning lakeside campus",
      "Industry-linked programs",
    ],
    facilities: [
      "Iconic Lakeside Campus",
      "Culinary Studios",
      "Mock Hotel",
      "Design Workshops",
      "Library Tower",
      "Student Life Center",
    ],
    requirements: {
      undergraduate: [
        "STPM/A-Level/Foundation/IB",
        "Strong academic record",
        "IELTS 6.0 minimum",
        "Interview (selected programs)",
      ],
      postgraduate: [
        "Bachelor's degree CGPA 3.0+",
        "IELTS 6.5",
        "Industry experience preferred",
        "Research proposal (for PhD)",
      ],
    },
    popularPrograms: [
      { name: "Bachelor in Hospitality Management", level: "Undergraduate", duration: "3 Years", tuition: "RM 52,000/year" },
      { name: "Bachelor of Culinary Arts", level: "Undergraduate", duration: "3 Years", tuition: "RM 56,000/year" },
      { name: "Bachelor of Architecture", level: "Undergraduate", duration: "3 Years", tuition: "RM 48,000/year" },
      { name: "Master of Business Administration", level: "Postgraduate", duration: "1.5 Years", tuition: "RM 58,000/year" },
    ],
  },
];

export function getUniversityById(id: string | number): University | undefined {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  return UNIVERSITIES.find((u) => u.id === numId || u.slug === String(id));
}

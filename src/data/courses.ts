// /history timeline data. Each Phase becomes a card; term-based phases also
// pull their classes from /data/classes.csv (by CSV `year`).
//
// To edit content, change this file. The page is dumb iteration over phases.

export interface CourseExtras {
  courseUrl?: string;
  facultyUrl?: string;
  paperUrl?: string;
  notesUrl?: string;
  facultyDisplay?: string; // override CSV faculty surname with full name
}

export interface AuditedCourse {
  year: string;
  class_code?: string;
  name: string;
  school: string;
  faculty: string;
  facultyDisplay?: string;
  courseUrl?: string;
  facultyUrl?: string;
  paperUrl?: string;
  notesUrl?: string;
}

export interface PhaseLink {
  label: string;
  href: string;
  note?: string; // short trailing description rendered muted next to the link
}

export interface TestScore {
  label: string;
  score: string;
}

export interface Phase {
  id: string;
  // Sortable timestamp-ish key. Format: "YYYY-MM" where MM bucket maps a term:
  //   01 = early year, 04 = spring, 06 = summer, 09 = fall.
  // Used for descending sort — bigger = newer.
  sortKey: string;
  kindLabel: string;       // small badge: "Division II", "Research", "High School"
  title: string;           // e.g. "Semester 4"
  subtitle?: string;       // e.g. "Spring 2026 · Hampshire College"
  term?: string;           // CSV `year` for term-based phases (e.g. "2026S")
  description?: string;
  // Single prominent link rendered as a bold callout near the top of the card —
  // for the marquee artifact of a phase (e.g. a Div reflection essay).
  featuredLink?: PhaseLink;
  links?: PhaseLink[];
  bullets?: string[];
  // High-school / non-transcript content:
  awards?: string[];
  testScores?: TestScore[];
  apExams?: string[];      // standalone AP exam list (separate from senior-year transcript)
}

// Reverse-chronological is the default render order; phases sort descending by sortKey.
export const phases: Phase[] = [
  {
    id: 'div2-s4',
    sortKey: '2026-04',
    kindLabel: 'Division II',
    title: 'Semester 4',
    subtitle: 'Spring 2026 · Hampshire College',
    term: '2026S',
    featuredLink: {
      label: 'Div II Reflection Essay (PDF) →',
      href: '/notes/div2-reflection-essay.pdf',
    },
  },
  {
    id: 'div2-s3',
    sortKey: '2025-09',
    kindLabel: 'Division II',
    title: 'Semester 3',
    subtitle: 'Fall 2025 · Hampshire College',
    term: '2025F',
  },
  {
    id: 'ceet-reu',
    sortKey: '2025-06',
    kindLabel: 'Summer Research',
    title: 'CEET REU',
    subtitle: 'Summer 2025 · UMass Amherst',
    description:
      'Computing for the End of the World (CEET) REU with Amir Houmansadr. ' +
      'Extracted ~1 month of RIPE Atlas ping-latency measurements into ' +
      'node × node × timestamp tensors, then trained a transformer-based ' +
      'sequence predictor on the resulting traces.',
    links: [
      {
        label: 'ping-ingest',
        href: 'https://github.com/zontasticality/ping-ingest',
        note: 'Parallel pipeline (DuckDB) that converts raw RIPE Atlas .json.bz2 dumps into time-sorted, ZSTD-compressed Parquet, then aggregates/samples them into training-ready datasets.',
      },
      {
        label: 'ping-llm',
        href: 'https://github.com/zontasticality/ping-llm',
        note: 'Decoder-only GPT-style Transformer (RoPE, ReLU², logit softcap, Muon + AdamW) with a custom byte-level tokenizer for IPs, RTTs, and timestamps. Trained on Modal via a grain + ArrayRecord data pipeline.',
      },
    ],
  },
  {
    id: 'div2-s2',
    sortKey: '2025-04',
    kindLabel: 'Division II',
    title: 'Semester 2',
    subtitle: 'Spring 2025 · Hampshire College',
    term: '2025S',
  },
  {
    id: 'div2-s1',
    sortKey: '2024-09',
    kindLabel: 'Division II',
    title: 'Semester 1',
    subtitle: 'Fall 2024 · Hampshire College',
    term: '2024F',
  },
  {
    id: 'div1-s2',
    sortKey: '2024-04',
    kindLabel: 'Division I',
    title: 'Semester 2',
    subtitle: 'Spring 2024 · Hampshire College',
    term: '2024S',
  },
  {
    id: 'div1-s1',
    sortKey: '2023-09',
    kindLabel: 'Division I',
    title: 'Semester 1',
    subtitle: 'Fall 2023 · Hampshire College',
    term: '2023F',
  },
  {
    id: 'highschool',
    sortKey: '2018-09',
    kindLabel: 'High School',
    title: 'Charter School of Wilmington',
    subtitle: '2018 – 2022',
    awards: [
      'Computer Science Excellence Award',
      '2nd Honors (Senior Year)',
    ],
    testScores: [
      { label: 'SAT', score: '1580 · essay 3' },
      { label: 'GPA', score: '4.135 cumulative' },
    ],
    apExams: [
      'AP Calculus AB',
      'AP Statistics',
      'AP Physics C: Electricity & Magnetism',
      'AP Physics C: Mechanics',
    ],
  },
];

// URL extras for graded courses (mined from CVs).
// Key format: `${year}:${class_code}` exactly as in classes.csv.
export const courseExtras: Record<string, CourseExtras> = {
  '2026S:COMPSCI-513': {
    courseUrl: 'https://people.cs.umass.edu/~marius/class/cs513-sp26/',
    facultyUrl: 'https://people.cs.umass.edu/~marius/',
    facultyDisplay: 'Marius Minea',
  },
  '2025F:COSC-456': {
    courseUrl: 'https://www.amherst.edu/academiclife/departments/courses/2526F/COSC/COSC-456-2526F',
    facultyDisplay: 'Graph visualization seminar',
  },
  '2025S:COSC-345': {
    courseUrl: 'https://www.amherst.edu/academiclife/departments/courses/2425S/COSC/COSC-345-2425S',
    facultyUrl: 'https://www.amherst.edu/people/facstaff/hwu',
    facultyDisplay: 'Andrew Wu',
  },
  '2025S:MATH-690STJ': {
    courseUrl: 'https://www.fivecolleges.edu/courses/UM/2025/SPRING/MATH/690STJ/01',
    facultyUrl: 'https://people.math.umass.edu/~rovelli/',
    facultyDisplay: 'Martina Rovelli',
  },
  '2025S:COMPSCI-891M': {
    courseUrl: 'https://theory.cs.umass.edu/seminar',
    facultyUrl: 'https://people.cs.umass.edu/~yzick/publication.html',
    facultyDisplay: 'Yair Zick et al.',
  },
  '2025S:INST-0200': {
    paperUrl: 'https://drive.google.com/file/d/1CcK1jgpPdrj7LI_lZDUK5ImDRsO6fXwf/view?usp=sharing',
    facultyDisplay: 'Kenneth Mulder',
  },
  '2025S:NS-0259': {
    facultyDisplay: 'Kenneth Mulder',
  },
  '2024F:SPP-208': {
    courseUrl: 'https://www.fivecolleges.edu/courses/UM/2024/FALL/COMM/208/01',
    facultyDisplay: 'Ethan Zuckerman',
  },
  '2024F:COMPSCI-446': { facultyDisplay: 'James Allan' },
  '2024F:COMPSCI-H446': { facultyDisplay: 'James Allan' },
  '2024F:COSC-311': { facultyDisplay: 'John Rager' },
  '2024F:NS-0242': { facultyDisplay: 'Kenneth Mulder' },
  '2024S:COMPSCI-320': { facultyDisplay: 'Yuriy Brun' },
  '2024S:COMPSCI-250': { facultyDisplay: 'David Barrington' },
  '2024S:COMPSCI-240': { facultyDisplay: 'Mark Wilson' },
  '2023F:COMPSCI-220': {
    facultyDisplay: 'Marius Minea',
    facultyUrl: 'https://people.cs.umass.edu/~marius/',
  },
  '2023F:COMPSCI-230': { facultyDisplay: 'Meng-Chieh Chiu' },
  '2023F:INST-0300': { facultyDisplay: 'Kenneth Mulder' },
  '2026S:INST-0300': {
    facultyDisplay: 'Kenneth Mulder',
    notesUrl: '/notes/category-theory-for-agi.pdf',
  },
};

// Audited / shadowed courses — not on the transcript.
export const auditedCourses: AuditedCourse[] = [
  {
    year: '2026S',
    name: 'Artificial Intelligence Alignment',
    school: 'UMass',
    faculty: 'Niekum',
    facultyDisplay: 'Scott Niekum',
    facultyUrl: 'https://people.cs.umass.edu/~sniekum/',
    courseUrl: 'https://people.cs.umass.edu/~sniekum/classes/LFH-S2/desc.php',
    notesUrl: '/notes/cs690s-ai-alignment.pdf',
  },
  {
    year: '2025F',
    name: 'UMass AI Safety Reading Group',
    school: 'UMass',
    faculty: '',
  },
  {
    year: '2025S',
    name: 'Artificial Intelligence',
    school: 'UMass',
    faculty: 'Zick',
    facultyDisplay: 'Yair Zick',
    facultyUrl: 'https://people.cs.umass.edu/~yzick/publication.html',
  },
  {
    year: '2024F',
    name: 'Advanced Information Assurance',
    school: 'UMass',
    faculty: 'Houmansadr',
    facultyDisplay: 'Amir Houmansadr',
  },
  {
    year: '2024F',
    name: 'Algorithms, Game Theory, and Fairness',
    school: 'UMass',
    faculty: 'Zick',
    facultyDisplay: 'Yair Zick',
    facultyUrl: 'https://people.cs.umass.edu/~yzick/publication.html',
  },
  {
    year: '2024F',
    name: 'Introduction to Topology',
    school: 'Hampshire College',
    faculty: 'Mulder',
    facultyDisplay: 'Kenneth Mulder',
  },
  {
    year: '2024S',
    name: 'Fixing Social Media',
    school: 'UMass',
    faculty: 'Zuckerman',
    facultyDisplay: 'Ethan Zuckerman',
    facultyUrl: 'https://ethanzuckerman.com/',
  },
  {
    year: '2023F',
    name: 'Distributed Computing & Systems',
    school: 'UMass',
    faculty: 'Venkataramani',
    facultyDisplay: 'Arun Venkataramani',
    facultyUrl: 'https://people.cs.umass.edu/~arun/publications.html',
  },
  {
    year: '2023F',
    name: 'Network Security & Privacy',
    school: 'UMass',
    faculty: 'Gao',
    facultyDisplay: 'Lixin Gao',
  },
];

// History page data — education timeline, course URL extras, audited classes.
// Transcript classes themselves live in /data/classes.csv (parsed at build time).
// To add a link to a graded class, key by `${year}:${class_code}`.

export interface CourseExtras {
  courseUrl?: string;
  facultyUrl?: string;
  paperUrl?: string;
  facultyDisplay?: string; // override CSV faculty surname with a full name
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
}

export interface EducationEntry {
  span: string;
  what: string;
  where?: string;
  whereUrl?: string;
  note?: string;
}

// Education timeline — newest first.
export const education: EducationEntry[] = [
  { span: 'Summer 2025', what: 'CEET REU', where: 'UMass Amherst', note: 'with Amir Houmansadr' },
  { span: '2023 – present', what: 'BA Computer Science', where: 'Hampshire College' },
  { span: '2023', what: 'Software Fellowship', where: 'FUTO', whereUrl: 'https://www.futo.org/fellows/' },
  { span: '2018 – 2022', what: 'High School', where: 'Charter School of Wilmington' },
];

// URL extras for graded courses (mined from CVs).
// Key format: `${year}:${class_code}` exactly as it appears in classes.csv.
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
  '2024F:COMPSCI-446': {
    facultyDisplay: 'James Allan',
  },
  '2024F:COMPSCI-H446': {
    facultyDisplay: 'James Allan',
  },
  '2024F:COSC-311': {
    facultyDisplay: 'John Rager',
  },
  '2024F:NS-0242': {
    facultyDisplay: 'Kenneth Mulder',
  },
  '2024S:COMPSCI-320': {
    facultyDisplay: 'Yuriy Brun',
  },
  '2024S:COMPSCI-250': {
    facultyDisplay: 'David Barrington',
  },
  '2024S:COMPSCI-240': {
    facultyDisplay: 'Mark Wilson',
  },
  '2023F:COMPSCI-220': {
    facultyDisplay: 'Marius Minea',
    facultyUrl: 'https://people.cs.umass.edu/~marius/',
  },
  '2023F:COMPSCI-230': {
    facultyDisplay: 'Meng-Chieh Chiu',
  },
  '2023F:INST-0300': {
    facultyDisplay: 'Kenneth Mulder',
  },
  '2026S:INST-0300': {
    facultyDisplay: 'Kenneth Mulder',
  },
};

// Audited / shadowed courses — not on the transcript, but part of the academic record.
export const auditedCourses: AuditedCourse[] = [
  {
    year: '2026S',
    name: 'Artificial Intelligence Alignment',
    school: 'UMass',
    faculty: 'Niekum',
    facultyDisplay: 'Scott Niekum',
    facultyUrl: 'https://people.cs.umass.edu/~sniekum/',
    courseUrl: 'https://people.cs.umass.edu/~sniekum/classes/LFH-S2/desc.php',
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

// Ordering of academic terms (newest first). Used to sort term sections.
export const termOrder = [
  '2026S', '2025F', '2025S', '2024F', '2024S', '2023F',
];

export function termLabel(t: string): string {
  const year = t.slice(0, 4);
  const season = t.slice(4);
  if (season === 'S') return `Spring ${year}`;
  if (season === 'F') return `Fall ${year}`;
  return t;
}

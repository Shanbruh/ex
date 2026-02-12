import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: 'from-blue-500 to-cyan-500',
    chapters: [
      { id: 'p1', title: 'Kinematics', description: 'Motion in one and two dimensions.', url: 'https://www.physicsclassroom.com/class/1DKin' },
      { id: 'p2', title: 'Newton\'s Laws', description: 'Forces and laws of motion.', url: 'https://www.physicsclassroom.com/class/newtlaws' },
      { id: 'p3', title: 'Work & Energy', description: 'Calculation of work and energy forms.', url: 'https://www.physicsclassroom.com/class/energy' }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '🧪',
    color: 'from-emerald-500 to-teal-500',
    chapters: [
      { id: 'c1', title: 'Atomic Structure', description: 'Models of the atom.', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/02%3A_Atoms_Molecules_and_Ions/2.03%3A_The_Modern_View_of_Atomic_Structure' },
      { id: 'c2', title: 'Chemical Bonding', description: 'Ionic and covalent bonds.', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/08%3A_Basic_Concepts_of_Chemical_Bonding' }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    color: 'from-purple-500 to-pink-500',
    chapters: [
      { id: 'm1', title: 'Calculus I', description: 'Limits and Derivatives.', url: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx' },
      { id: 'm2', title: 'Linear Algebra', description: 'Matrices and vectors.', url: 'https://prajwalsouza.github.io/Linear-Algebra-Playground/' }
    ]
  },
  {
    id: 'urdu',
    name: 'Urdu',
    icon: '✍️',
    color: 'from-orange-500 to-red-500',
    chapters: [
      { id: 'u1', title: 'Ghazaliat', description: 'Classical Urdu poetry.', url: 'https://www.rekhta.org/ghazals' }
    ]
  },
  {
    id: 'islamiat',
    name: 'Islamiat',
    icon: '🕌',
    color: 'from-green-500 to-emerald-600',
    chapters: [
      { id: 'i1', title: 'Quranic Studies', description: 'Tafseer and meaning.', url: 'https://quran.com' }
    ]
  }
];

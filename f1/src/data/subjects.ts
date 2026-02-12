import { Subject } from '../types';

export const subjects: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: 'from-blue-600 to-cyan-400',
    chapters: [
      { id: 'p1', title: 'Motion in a Straight Line', description: 'Understanding displacement, velocity, and acceleration.', url: 'https://www.physicsclassroom.com/class/1DKin' },
      { id: 'p2', title: 'Laws of Motion', description: 'Dynamics, friction, and Newton\'s fundamental principles.', url: 'https://www.physicsclassroom.com/class/newtlaws' },
      { id: 'p3', title: 'Work, Energy & Power', description: 'The conservation of energy and mechanical work principles.', url: 'https://www.physicsclassroom.com/class/energy' },
      { id: 'p4', title: 'Oscillations', description: 'Periodic motion and simple harmonic systems.', url: 'https://www.physicsclassroom.com/class/waves' }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '🧪',
    color: 'from-emerald-600 to-teal-400',
    chapters: [
      { id: 'c1', title: 'Modern Atomic Theory', description: 'Quantum numbers, electron configuration, and atomic models.', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/02%3A_Atoms_Molecules_and_Ions' },
      { id: 'c2', title: 'Molecular Bonding', description: 'VSEPR theory, hybridization, and intermolecular forces.', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/08%3A_Basic_Concepts_of_Chemical_Bonding' },
      { id: 'c3', title: 'Thermodynamics', description: 'Enthalpy, entropy, and Gibbs free energy in reactions.', url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/19%3A_Chemical_Thermodynamics' }
    ]
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    icon: '📐',
    color: 'from-indigo-600 to-purple-400',
    chapters: [
      { id: 'm1', title: 'Differential Calculus', description: 'Mastering limits, continuity, and basic differentiation.', url: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx' },
      { id: 'm2', title: 'Vector Algebra', description: 'Operations on vectors and their geometric applications.', url: 'https://prajwalsouza.github.io/Linear-Algebra-Playground/' },
      { id: 'm3', title: 'Probability', description: 'Conditional probability and distribution functions.', url: 'https://onlinestatbook.com/2/probability/probability.html' }
    ]
  },
  {
    id: 'english',
    name: 'English',
    icon: '📚',
    color: 'from-orange-600 to-amber-400',
    chapters: [
      { id: 'e1', title: 'Grammar Essentials', description: 'Advanced syntax and common grammatical patterns.', url: 'https://prowritingaid.com/grammar-guide' },
      { id: 'e2', title: 'Literature Review', description: 'Analyzing themes in classical and modern literature.', url: 'https://www.sparknotes.com/lit/' }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: '🌿',
    color: 'from-green-600 to-lime-400',
    chapters: [
      { id: 'b1', title: 'Cell Biology', description: 'Structure and function of the fundamental unit of life.', url: 'https://www.khanacademy.org/science/biology/structure-of-a-cell' },
      { id: 'b2', title: 'Genetics', description: 'Mendelian inheritance and DNA replication processes.', url: 'https://www.khanacademy.org/science/biology/gene-genetics' }
    ]
  }
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  year: number;
  icon: string;
  color: "primary" | "tertiary" | "secondary";
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "java-snake-game",
    title: "Java Snake Game",
    description:
      "A classic Snake game implementation focusing on object-oriented programming principles and state management.",
    longDescription:
      "A fully functional Snake game built using Java Swing framework. The project demonstrates core OOP concepts including encapsulation, inheritance, and polymorphism. Features include a responsive game loop, collision detection, score tracking with high score persistence, and smooth rendering using double buffering techniques.",
    technologies: ["Java", "Swing", "Game Dev"],
    github: "#",
    demo: "#",
    featured: true,
    year: 2026,
    icon: "Gamepad2",
    color: "primary",
    highlights: [
      "Implemented game loop and collision detection",
      "Score tracking and high score persistence",
      "Smooth rendering with double buffering",
      "Responsive keyboard controls",
    ],
  },
  {
    id: "chess-game",
    title: "Chess Game",
    description:
      "A fully functional terminal-based chess game demonstrating complex logic and data structures.",
    longDescription:
      "A comprehensive chess game implemented in C++ that supports all standard chess rules including castling, en passant, and pawn promotion. The game features a terminal-based UI with Unicode chess piece rendering, valid move generation for all piece types, and check/checkmate detection algorithms.",
    technologies: ["C++", "OOP", "Algorithms"],
    github: "#",
    demo: "#",
    featured: true,
    year: 2025,
    icon: "Crown",
    color: "tertiary",
    highlights: [
      "Valid move generation for all piece types",
      "Check and checkmate detection algorithms",
      "Support for castling and en passant",
      "Unicode-based terminal rendering",
    ],
  },
  {
    id: "moving-solar-panel",
    title: "Moving Solar Panel System",
    description:
      "A hardware-software integration project designing a solar panel system that tracks light for optimal energy capture.",
    longDescription:
      "An innovative IoT-based solar panel tracking system that automatically adjusts panel orientation based on sunlight direction. The project combines hardware sensors (LDR, servo motors) with software algorithms to maximize energy capture efficiency. Includes real-time monitoring and data logging capabilities.",
    technologies: ["Hardware", "IoT", "Sensors"],
    github: "#",
    featured: true,
    year: 2024,
    icon: "Sun",
    color: "secondary",
    highlights: [
      "Light tracking algorithm implementation",
      "Improved energy efficiency metrics",
      "Real-time monitoring dashboard",
      "Sensor calibration and optimization",
    ],
  },
  {
    id: "blockchain-fundamentals",
    title: "Blockchain Fundamentals Project",
    description:
      "A foundational exploration into blockchain technology, demonstrating core concepts of decentralized ledgers.",
    longDescription:
      "An educational project that implements core blockchain concepts from scratch. Features include block creation with SHA-256 hashing, proof-of-work consensus mechanism, transaction validation, and a simulated peer-to-peer network. The project serves as a comprehensive learning tool for understanding distributed ledger technology.",
    technologies: ["Blockchain", "Cryptography", "Web3"],
    github: "#",
    featured: true,
    year: 2023,
    icon: "Coins",
    color: "primary",
    highlights: [
      "Basic block creation and hashing",
      "Proof of concept network simulation",
      "Transaction validation system",
      "SHA-256 cryptographic hashing",
    ],
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
);

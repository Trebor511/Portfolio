export const projects = [
  {
    id: 1,
    slug: "moms-kitchen",
    title: "Mom's Kitchen",
    category: "Game Development",
    summary:
      "A modular cooking and production-management game built with a C++-first Unreal Engine architecture.",
    role: "Solo Gameplay Programmer",
    engine: "Unreal Engine 5.6",
    status: "In Development",
    technologies: ["C++", "Blueprints", "Unreal Engine"],
    featured: true,

    media: {
      type: "video",
      src: "/media/moms-kitchen/demo.mp4",
      poster: null,
      alt: "Gameplay demonstration from Mom's Kitchen",
    },

    overview:
      "Mom's Kitchen is a cooking and production-management game built around modular workstations, inventory systems, gardening, and food production.",

    responsibilities: [
      "Designed the project's C++-first gameplay architecture.",
      "Built the inventory and item interaction systems.",
      "Created reusable workstation foundations.",
      "Connected C++ gameplay logic with Blueprint-based user interfaces.",
    ],

    challenges: [
      {
        title: "Reusable workstation architecture",
        description:
          "The project needed several workstation types with shared behavior while still allowing each station to provide its own gameplay and minigame logic.",
      },
      {
        title: "Inventory and interaction integration",
        description:
          "Items, tools, garden plots, and workstations needed to communicate through reusable interfaces rather than direct dependencies.",
      },
    ],

    results: [
      "Created a reusable base for future cooking stations.",
      "Established a scalable item and inventory architecture.",
      "Reduced duplication by separating shared systems from station-specific logic.",
    ],
  },



  {
    id: 2,
    slug: "pixelcution",
    title: "Pixelcution",
    category: "Game Development",
    summary:
      "A team-developed action game featuring player combat, gameplay systems, and collaborative development.",
    role: "Gameplay Programmer",
    engine: "Unity",
    status: "Completed",
    technologies: ["C#", "Unity", "Team Development"],
    featured: true,
    media: {
      type: "video",
      src: "/media/pixelcution/demo.mp4",
      poster: null,
      alt: "Gameplay demonstration from Pixelcution",
    },
    overview:
      "Additional project information will be added as this case study is expanded.",

    responsibilities: [
      "Implemented gameplay and technical systems for the project.",
    ],

    challenges: [
      {
        title: "Project development",
        description:
          "This section will document the project's most important technical challenge.",
      },
    ],

    results: [
      "Completed the primary project requirements.",
    ],
  },
  {
    id: 3,
    slug: "level-renderer",
    title: "Level Renderer",
    category: "Graphics Programming",
    summary:
      "A runtime level-rendering project focused on file parsing, scene generation, transformations, and graphics programming.",
    role: "Graphics Programmer",
    engine: "Custom Engine",
    status: "Completed",
    technologies: ["C++", "Vulkan", "File Parsing"],
    featured: true,
    media: {
      type: "video",
      src: "/media/level-renderer/demo.mp4",
      poster: null,
      alt: "Runtime rendering demonstration from Level Renderer",
    },

    overview:
      "Additional project information will be added as this case study is expanded.",

    responsibilities: [
      "Implemented gameplay and technical systems for the project.",
    ],

    challenges: [
      {
        title: "Project development",
        description:
          "This section will document the project's most important technical challenge.",
      },
    ],

    results: [
      "Completed the primary project requirements.",
    ],
  },
];
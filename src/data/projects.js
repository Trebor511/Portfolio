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
      poster: "/media/moms-kitchen/poster.webp",
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
      poster: "/media/pixelcution/poster.webp",
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
      poster: "/media/level-renderer/poster.webp",
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

  {
    id: 4,
    slug: "devyn-in-space",
    title: "Devyn in Space",
    category: "Game Development",
    summary:
      "A first-person wave shooter featuring modular weapons, enemy archetypes, upgrades, boss battles, and multiple combat arenas.",
    role: "Lead Developer and Gameplay Programmer",
    engine: "Unity 2022",
    status: "Completed",
    technologies: ["C#", "Unity", "Enemy AI", "Team Development"],
    featured: false,

    media: {
      type: "video",
      src: "/media/devyn-in-space/demo.mp4",
      poster: "/media/devyn-in-space/poster.webp",
      alt: "Gameplay demonstration from Devyn in Space",
    },

    overview:
      "Devyn in Space is a first-person wave-based shooter developed by a six-person team. The completed game includes four weapons, four standard enemy types, two boss encounters, multiple combat arenas, and an upgrade shop used between waves.",

    responsibilities: [
      "Served as lead developer for a six-person development team.",
      "Guided technical decisions and organized the overall code structure.",
      "Designed and implemented the enemy wave system.",
      "Contributed to the modular weapon and upgrade systems.",
      "Designed all four combat levels and both boss arenas.",
      "Implemented environmental mechanics including ladders, damaging platforms, disappearing platforms, health pickups, and weapon pickups.",
    ],

    challenges: [
      {
        title: "Readable enemy variety",
        description:
          "Designed melee, juggernaut, swarm, and ranged enemy archetypes with distinct combat roles so that crowded waves remained understandable to the player.",
      },
      {
        title: "Progressive wave structure",
        description:
          "Built progression, escalation, and completion rules that increased difficulty while preserving opportunities for upgrades between encounters.",
      },
    ],

    results: [
      "Completed a fully playable wave-based shooter.",
      "Delivered four combat levels and two dedicated boss arenas.",
      "Integrated weapons, enemy AI, upgrades, saving, and wave progression into one complete experience.",
    ],

    links: {
      repository:
        "https://github.com/Kold-Lopez/The-Game-Group-Project/tree/main/The%20Game%20Group%20Project%20X",
      video: "https://www.youtube.com/watch?v=1iMtDv4wJgQ",
      playableBuild: "https://thecyansage.itch.io/devyn-in-space",
    },
  },

  {
    id: 5,
    slug: "conways-game-of-life",
    title: "Conway's Game of Life",
    category: "Software Development",
    summary:
      "An interactive .NET cellular-automata application with simulation controls, file persistence, configurable behavior, and a complete Windows Forms interface.",
    role: "Software Developer",
    engine: ".NET Windows Forms",
    status: "Completed",
    technologies: ["C#", ".NET", "Windows Forms", "File I/O"],
    featured: false,

    media: {
      type: "video",
      src: "/media/conway/demo.mp4",
      poster: "/media/conway/poster.webp",
      alt: "Conway's Game of Life application demonstration",
    },

    overview:
      "This implementation of Conway's Game of Life is an interactive Windows Forms application that simulates cellular automata while providing controls for universe configuration, simulation speed, rendering, saving, loading, and persistent user settings.",

    responsibilities: [
      "Implemented interactive cell-grid rendering.",
      "Created start, pause, step, clear, and randomization controls.",
      "Built saving and loading for universe data.",
      "Added configurable universe dimensions and simulation timing.",
      "Implemented finite and toroidal boundary behavior.",
      "Created persistent application settings for size, speed, display options, and colors.",
    ],

    challenges: [
      {
        title: "Simulation state synchronization",
        description:
          "Kept the grid, generation counter, living-cell count, timer, menus, toolbar controls, and HUD synchronized as the simulation changed.",
      },
      {
        title: "Persistent configuration",
        description:
          "Created a settings workflow that preserved user-selected dimensions, colors, timing, boundary behavior, and display preferences between sessions.",
      },
    ],

    results: [
      "Completed all required basic and advanced application features.",
      "Built a responsive interface around an algorithmic simulation.",
      "Strengthened skills in event-driven programming, file I/O, state management, and desktop UI development.",
    ],

    links: {
      repository: "https://github.com/Trebor511/GameofLife-CodeDemo",
      video: null,
      playableBuild: null,
    },
  },

  {
    id: 6,
    slug: "rotating-cube",
    title: "Rotating Cube",
    category: "Graphics Programming",
    summary:
      "A custom C++ renderer that plots and animates 3D cube geometry using manual transformations, perspective projection, and line-drawing algorithms.",
    role: "Graphics Programmer",
    engine: "Custom Renderer",
    status: "Completed",
    technologies: ["C++", "CMake", "Linear Algebra", "Rasterization"],
    featured: false,

    media: {
      type: "video",
      src: "/media/rotating-cube/demo.mp4",
      poster: "/media/rotating-cube/poster.webp",
      alt: "Rotating Cube graphics demonstration",
    },

    overview:
      "Rotating Cube is a C++ computer-graphics project that began with foundational line-drawing algorithms and expanded into a real-time animated 3D cube. Its vertices, edges, transformations, projection, and pixel rendering were implemented without a game engine.",

    responsibilities: [
      "Implemented DDA and Bresenham-style line-drawing logic.",
      "Defined cube vertices and edge connectivity manually.",
      "Applied rotation matrices across multiple axes.",
      "Converted 3D coordinates into 2D screen positions using perspective projection.",
      "Built a continuous update-and-render loop.",
      "Configured the application using CMake.",
    ],

    challenges: [
      {
        title: "Manual 3D transformation",
        description:
          "Implemented rotation and perspective behavior using vectors, matrices, coordinate-space conversion, and projected screen positions.",
      },
      {
        title: "Rendering without an engine",
        description:
          "Created the visual output using custom line drawing, pixel plotting, and per-frame updates rather than relying on a prebuilt rendering system.",
      },
    ],

    results: [
      "Produced a smoothly animated real-time 3D cube.",
      "Demonstrated practical understanding of matrices, projection, and coordinate spaces.",
      "Established the rendering foundation later expanded by the Level Renderer project.",
    ],

    links: {
      repository: "https://github.com/Trebor511/RotatingCube-CodeDemo",
      video: null,
      playableBuild: null,
    },
  },

  {
    id: 7,
    slug: "concentrate",
    title: "Concentrate!",
    category: "Graphics Programming",
    summary:
      "A retro arcade game built without a traditional engine using Vulkan, C++, a custom sprite renderer, and FLECS entity-component architecture.",
    role: "Gameplay and Graphics Programmer",
    engine: "Custom Vulkan Framework",
    status: "Completed",
    technologies: ["C++", "Vulkan", "FLECS", "ECS"],
    featured: false,

    media: {
      type: "video",
      src: "/media/concentrate/demo.mp4",
       poster: "/media/concentrate/poster.webp",
      alt: "Gameplay demonstration from Concentrate!",
    },

    overview:
      "Concentrate! is a retro arcade game inspired by Tapper and created without Unity, Unreal Engine, or another traditional game engine. It extends the Level Renderer foundation into a complete game using Vulkan rendering and FLECS entity-component architecture.",

    responsibilities: [
      "Implemented the Vulkan rendering pipeline and sprite-rendering foundation.",
      "Built entities and components for the player, drinks, patrons, and game systems.",
      "Created player movement and drink-serving mechanics.",
      "Implemented patron behavior, scoring, failure states, and game-loop logic.",
      "Built spawn timing, escalating difficulty, and resource-management systems.",
      "Managed GPU and CPU synchronization within the custom framework.",
    ],

    challenges: [
      {
        title: "Engine-free gameplay architecture",
        description:
          "Built the rendering, input, update, entity, and gameplay systems without relying on the services of a traditional game engine.",
      },
      {
        title: "ECS-driven behavior",
        description:
          "Separated entities, data, and systems through FLECS so gameplay behavior could remain organized and efficient.",
      },
    ],

    results: [
      "Converted a graphics renderer into a fully playable arcade game.",
      "Implemented a complete custom sprite and gameplay framework.",
      "Developed practical experience with Vulkan, ECS design, memory handling, and synchronization.",
    ],

    links: {
      repository: "https://github.com/Trebor511/Concentrate--CodeDemo",
      video: "https://www.youtube.com/watch?v=V_uVH5sprgg",
      playableBuild: null,
    },
  },
];
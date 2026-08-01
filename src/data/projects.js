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
    "A fast-paced first-person action shooter built in Unreal Engine 4.27, featuring modular weapons, enemy archetypes, procedural dungeon generation, and roguelite progression.",

  role: "Lead Developer and Gameplay Programmer",
  engine: "Unreal Engine 4.27",
  status: "Completed",

  technologies: [
    "C++",
    "Unreal Engine",
    "Perforce",
    "Procedural Generation",
  ],

  featured: true,

  media: {
    type: "video",
    src: "media/pixelcution/demo.mp4",
    poster: "media/pixelcution/poster.webp",
    alt:
      "Pixelcution gameplay featuring combat against robotic enemies",
  },

  overview:
    "Pixelcution is a fast-paced first-person action shooter developed in Unreal Engine 4.27 by a five-person team, with me serving as lead developer. The game combines a dynamic weapon system, several enemy archetypes, procedurally generated dungeon rooms, and a roguelite-inspired relic progression system. As lead developer, I coordinated the technical direction, guided feature implementation, and contributed several of the project's central gameplay systems.",

  responsibilities: [
    "Served as lead developer for a five-person development team.",
    "Coordinated technical direction and helped guide feature implementation.",
    "Implemented the complete player movement system, including directional movement, jumping, and dashing.",
    "Developed all player weapons, including firing behavior, ammunition, reload mechanics, recoil, animations, and effects.",
    "Built the player controller and refined the overall combat feel.",
    "Designed the tutorial stage and central hub area.",
    "Helped create and tune melee, caster, and grenadier enemy behavior.",
    "Implemented health, stamina, weapon, and relic pickups.",
    "Collaborated with the team using Perforce version control.",
  ],

  challenges: [
    {
      title: "Flexible weapon architecture",
      description:
        "The project needed several weapons with different firing behavior while sharing ammunition, reload, input, animation, and combat foundations. The resulting system supported a pistol, assault rifle, shotgun, grenades, and an RPG.",
    },
    {
      title: "Procedural dungeon generation",
      description:
        "The dungeon system assembled modular rooms at runtime to create combat arenas, relic rooms, and navigable paths while maintaining a readable progression through each run.",
    },
    {
      title: "Distinct enemy archetypes",
      description:
        "Swordsmen pressured the player at close range, flying magic casters introduced ranged and vertical threats, and grenadiers created dangerous projectile zones whose bombs could be shot out of the air.",
    },
    {
      title: "Responsive combat feel",
      description:
        "Movement, dashing, jumping, weapon handling, pickups, HUD feedback, and enemy pressure needed to work together to create a responsive action experience.",
    },
  ],

  results: [
    "Delivered a completed action shooter with multiple weapons, enemy archetypes, progression systems, and procedurally generated dungeon content.",
    "Created a player-combat foundation supporting movement, jumping, dashing, weapon switching, ammunition, and reload behavior.",
    "Integrated relic upgrades that improved mobility, damage output, and survivability between runs.",
    "Implemented supporting systems including a shop, pickups, fog-of-war minimap, health and stamina displays, ammunition information, reload feedback, and scoring.",
    "Helped coordinate feature delivery across a five-person development team.",
  ],

  links: {
    repository:
      "https://github.com/Trebor511/Pixelcution-CodeDemo",
    video:
      "https://www.youtube.com/watch?v=8wpWHFE2NiM",
    playableBuild:
      "https://kablr-productions.itch.io/pixelcution",
  },
},

  {
  id: 3,
  slug: "level-renderer",
  title: "Level Renderer",
  category: "Graphics Programming",

  summary:
    "A real-time C++ level renderer that imports custom scene data, reconstructs Blender-authored levels, and renders multiple transformed 3D models at runtime.",

  role: "Graphics Programmer",
  engine: "Custom Gateware Renderer",
  status: "Completed",

  technologies: [
    "C++",
    "Gateware",
    "Blender",
    "h2bParser",
    "File Parsing",
  ],

  featured: true,

  media: {
    type: "video",
    src: "media/level-renderer/demo.mp4",
    poster: "media/level-renderer/poster.webp",
    alt:
      "Level Renderer demonstrating a dynamically loaded 3D scene",
  },

  overview:
    "Level Renderer is a C++ graphics-programming project developed as an extension of my Rotating Cube renderer. The goal was to evolve the original renderer into a functional real-time level loader capable of importing custom scene data, reading object transforms, and efficiently rendering multiple 3D models. Levels were authored in Blender and exported through a purpose-built pipeline that allowed the scene to be reconstructed inside the renderer.",

  responsibilities: [
    "Created a custom text-based level-description format.",
    "Implemented a parser that reads model filenames, positions, rotations, and scaling data.",
    "Integrated h2bParser to load mesh information from exported .h2b files.",
    "Built a Blender-to-engine workflow for exporting transform data.",
    "Applied translation, rotation, and scaling matrices using Gateware math utilities.",
    "Created an object-oriented system for storing and rendering multiple models.",
    "Implemented scene generation by iteratively parsing level data at runtime.",
    "Built world, view, and projection transformation pipelines.",
  ],

  challenges: [
    {
      title: "Blender-to-engine reconstruction",
      description:
        "Transform information authored in Blender needed to be exported in a predictable format and then interpreted correctly by the renderer so that position, rotation, and scale matched the original scene.",
    },
    {
      title: "Custom runtime level parsing",
      description:
        "The renderer needed to read model identifiers and transform values from a text-based level file, construct the appropriate model instances, and generate the scene dynamically.",
    },
    {
      title: "Managing multiple mesh instances",
      description:
        "The original rotating-cube project rendered a limited scene. The level renderer required a scalable structure for storing, transforming, and drawing several models efficiently.",
    },
    {
      title: "Transformation pipeline",
      description:
        "World, view, and projection matrices had to be combined correctly so imported objects appeared in the intended position and orientation in the rendered scene.",
    },
  ],

  results: [
    "Expanded a basic renderer into a reusable real-time level-loading system.",
    "Successfully reconstructed Blender-authored scenes from exported transform data.",
    "Integrated custom file parsing, mesh loading, model management, and matrix transformations.",
    "Strengthened practical knowledge of graphics programming, file I/O, 3D mathematics, engine architecture, and real-time rendering workflows.",
  ],

  links: {
    repository:
      "https://github.com/Trebor511/LevelRenderer-CodeDemo",
    video: null,
    playableBuild: null,
  },
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
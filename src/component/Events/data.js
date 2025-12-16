

const eventsData = [
  {
    id: 1,
    title: "GRID GRAB",
    start: "2025-09-26T09:00:00",
    end: "2025-09-26T17:00:00",
    description: "Buissness Monopoly Event. A highly successful business and finance simulation event that challenged participants' strategic planning and resource management skills over a full day of intense competition.",
    category: "FUN-BUISSNESS EVENT",
    images: [
      "./assets/gridgrab1.jpg",
      "./assets/gridgrab2.jpg"
    ],
  },
  {
    id: 2,
    title: "TWIN CONTROL STUDIO",
    start: "2025-09-27T18:00:00",
    end: "2025-09-27T18:00:00",
    description: "Hands-on session covering advanced Twin Control Studio App. Bring your laptops and be ready to code! This is a multi-hour session designed for intermediate to advanced developers.",
    category: "workshop",
    images: [
      "./assets/twin1.jpg",
      "./assets/twin2.jpg"
    ],
  },
  {
    id: 3,
    title: "ENERVISION",
    start: "2025-09-22T10:00:00",
    end: "2025-09-22T12:00:00",
    description: "A Electronic Based Hackathon focusing on innovative energy solutions. Teams will compete to develop prototypes that address real-world energy challenges. Prizes for best innovation, sustainability, and presentation.",
    category: "Hackathon",
    images: [
      "./assets/enervision1.jpg",
      "./assets/enervision2.jpg"
    ],
  },
  {
    id: 4,
    title: "Solar ShowDown",
    start: "2025-12-20T19:00:00",
    end: "2025-12-20T23:00:00",
    description: "Car Racing Event powered entirely by Solar Energy. Teams design, build, and race solar-powered vehicles in a thrilling competition that tests speed, efficiency, and engineering prowess.",
    category: "Solar Race Event",
    images: ["./assets/solarshowdown.png"],
  },

  {
    id: 5,
    title: "CURAGEN",
    start: "2025-10-24T10:00:00",
    end: "2025-10-25T24:00:00",
    description: "Solar Based Quiz Competition. A two-day quiz competition focusing on solar energy, sustainability, and environmental science. Teams will answer questions, solve puzzles, and complete challenges to win exciting prizes.",
    category: "Quiz Competition",
    images: ["./assets/curagen1.jpg", "./assets/curagen2.jpg"],
  },

  {
    id: 6,
    title: "YANTRA",
    start: "2025-02-03T10:00:00",
    end: "2025-02-03T16:00:00",
    description: "solar based bidaton event. A high-energy hackathon where participants develop innovative solar-powered solutions to real-world problems. Teams will brainstorm, prototype, and present their ideas to a panel of expert judges.",
    category: "BIDATON EVENT",
    images: ["./assets/bidaton1.jpg", "./assets/bidaton2.jpg"],
  },

  {
    id: 7,
    title: "CODETHON",
    start: "2025-03-28T8:00:00",
    end: "2025-03-28T19:30:00",
    description: "embedded c with ai codethon event. A coding marathon focused on embedded C programming with AI applications. Participants will tackle a series of challenges that test their coding skills, problem-solving abilities, and creativity in integrating AI with embedded systems.",
    category: "coding event",
    images: ["./assets/codethon1.jpg", "./assets/codethon2.jpg"],
  },



  {
    id: 8,
    title: "GEN AI MOTION",
    start: "2025-04-04T08:00:00",
    end: "2025-04-04T13:00:00",
    description: "guest lecture on generative ai and its applications in motion graphics. An insightful session led by industry experts exploring the transformative impact of generative AI on motion graphics design and production.",
    category: "Guest Lecture",
    images: ["./assets/gen ai1.png", "./assets/gen ai2.jpg"],
  },


  {
    id: 9,
    title: "CAREER CANVAS",
    start: "2025-04-04T19:00:00",
    end: "2025-04-04T23:00:00",
    description: "CARRER CANVAS IN SOLAR ENERGY INDUSTRY. A comprehensive workshop designed to guide participants through the various career opportunities within the solar energy sector, featuring expert talks, resume building sessions, and networking opportunities.",
    category: "online workshop",
    images: ["./assets/career canvas1.png", "./assets/career canvas2.jpg"],
  },

  {
    id: 10,
    title: "THE COMIC MUSE",
    start: "2025-02-27T14:00:00",
    end: "2025-02-27T19:00:00",
    description: "SOlar Based Comic Creation Workshop. A creative workshop where participants learn the art of comic creation with a focus on solar energy themes, guided by professional comic artists and writers.",
    category: "comic workshop",
    images: ["./assets/comic1.jpg"],
  },

  {
    id: 11,
    title: "SOLAR STUDIO",
    start: "2025-05-27T19:00:00",
    end: "2025-05-27T22:00:00",
    description: "solar studio poster making in figma. A hands-on workshop teaching participants how to create compelling posters using Figma, centered around solar energy awareness and advocacy.",
    category: "online poster making in figma",
    images: ["./assets/solar studio1.jpg", "./assets/solar studio2.jpg"],
  },

  {
    id: 12,
    title: "SDG TALKS",
    start: "2024-10-07T10:00:00",
    end: "2024-10-07T12:00:00",
    description: "sOLAR BASED GUEST LECTURE ON SUSTAINABLE DEVELOPMENT GOALS. An engaging talk focusing on the role of solar energy in achieving the United Nations Sustainable Development Goals (SDGs), featuring insights from leading experts in the field.",
    category: "guest lecture",
    images: ["./assets/sdg1.png", "./assets/sdg2.jpg"],
  },

  {
    id: 13,
    title: "ENGINEERING FOR TOMORROW",
    start: "2024-09-15T10:00:00",
    end: "2024-09-15T13:00:00",
    description: "ENGINEERING DAY COLLAB WITRH VIT RATIONALS. A collaborative event celebrating engineering innovations and achievements, featuring guest lectures, project showcases, and networking opportunities with VIT Rationals.",
    category: "vit ratio",
    images: ["./assets/engineers day1.jpg", "./assets/engineers day2.jpg"],
  },

  {
    id: 14,
    title: "CASA EVENT",
    start: "2024-08-07T14:00:00",
    end: "2024-08-07T15:00:00",
    description: "CASA EVENT GUEST LECTURE ON SOLAR BASED MEDICAL TECHNOLOGIES. An informative session exploring the advancements in solar-powered medical technologies and their impact on healthcare delivery in remote and underserved areas.",
    category: "GUEST LECTURE",
    images: ["./assets/casa1.jpg"],
  },

  {
    id: 15,
    title: "CASA Breaking the Silence",
    start: "2025-10-15T10:00:00",
    end: "2025-10-15T12:00:00",
    description: "CASA BREAKING THE SILENCE GUEST LECTURE ON SOLAR BASED MEDICAL TECHNOLOGIES. An informative session exploring the advancements in solar-powered medical technologies and their impact on healthcare delivery in remote and underserved areas.",
    category: "GUEST LECTURE",
    images: ["./assets/CASA2.jpg"],
  },





];

export default eventsData;
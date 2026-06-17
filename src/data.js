// ─────────────────────────────────────────────────────────────
//  Ratnanjali Aerospace — site content & assets
//  All copy is original. Images are free-for-commercial-use
//  Unsplash CDN links (swap for your own product photos anytime).
// ─────────────────────────────────────────────────────────────

const U = "https://images.unsplash.com/";

export const IMG = {
  hero: "/src/assets/images/hero.png",
  droneCloseup:
    U + "photo-1508444845599-5c89863b1c44?auto=format&fit=crop&w=1200&q=80",
  quad: U + "photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=800&q=80",
  field:
    U + "photo-1713952160156-bb59cac789a9?auto=format&fit=crop&w=1200&q=80",
  spray:
    U + "photo-1713952152768-5f28b8093166?auto=format&fit=crop&w=1200&q=80",
  engineer:
    U + "photo-1720071702672-d18c69cb475c?auto=format&fit=crop&w=1400&q=80",
  aerial1: U + "photo-1559770968-53924e9b32de?auto=format&fit=crop&w=1200&q=80",
  aerial2:
    U + "photo-1476385822777-70eabacbd41f?auto=format&fit=crop&w=1200&q=80",
};

export const NAV = [
  "Home",
  "Drones",
  "Solutions",
  "Technology",
  "Company",
  "Careers",
  "Contact",
];

export const CAPABILITIES = [
  {
    icon: "drone",
    title: "Indigenous Technology Development",
    text: "Developing advanced unmanned aerial systems through indigenous research, engineering innovation, and next-generation aerospace technologies.",
  },
  {
    icon: "focus",
    title: "Custom UAV Platform Engineering",
    text: "Designing mission-specific aerial platforms tailored to payload requirements, endurance objectives, operational environments, and specialized.",
  },
  {
    icon: "puzzle",
    title: "Aerospace Manufacturing Excellence",
    text: "Transforming innovative concepts into flight-ready systems through precision manufacturing, system integration, testing, and quality-driven engineering.",
  },
  {
    icon: "blocks",
    title: "Mission Systems Integration",
    text: "Integrating avionics, sensors, communication systems, payloads, and autonomous technologies into aerospace solutions built for real-world operations.",
  },
];

export const SERVICES = [
  {
    no: "01",
    icon: "pen",
    title: "Drone Design & Engineering",
    text: "In-house R&D, aerodynamics, avionics and custom airframes — from CAD concept to flight-ready prototype.",
    points: [
      "Airframe & aerodynamic design",
      "Flight-control & avionics",
      "Rapid prototyping",
    ],
    img: "engineer",
  },
  {
    no: "02",
    icon: "factory",
    title: "Precision Manufacturing",
    text: "Quality-controlled production lines, composite fabrication and scalable assembly built for reliability at volume.",
    points: [
      "Composite fabrication",
      "Quality assurance & testing",
      "Scalable production",
    ],
    img: "quad",
  },
  {
    no: "03",
    icon: "radar",
    title: "Aerial Services & Operations",
    text: "Turn-key flight operations — inspection, mapping, surveillance and precision agriculture, flown by certified pilots.",
    points: [
      "Inspection & monitoring",
      "Survey & mapping",
      "Certified pilot training",
    ],
    img: "spray",
  },
];

export const FLEET = [
  {
    name: "HAWK-EYE 9X",
    role: "Strategic Reconnaissance Drone",
    range: "45 km",
    flight: "120 min",
    payload: "15 kg",
    img: "quad",
  },
  {
    name: "HAWK-EYE 6X",
    role: "Tactical Surveillance Drone",
    range: "32 km",
    flight: "95 min",
    payload: "9 kg",
    img: "droneCloseup",
  },
  {
    name: "HAWK-EYE 12X",
    role: "Heavy-Lift Cargo Drone",
    range: "60 km",
    flight: "140 min",
    payload: "25 kg",
    img: "hero",
  },
];

export const TECH_FEATURES = [
  {
    title: "AI Flight Core",
    text: "Onboard neural compute for obstacle mapping, target tracking and adaptive route planning.",
  },
  {
    title: "Encrypted Datalink",
    text: "AES-256 secured telemetry and video with frequency-hopping resistance to jamming.",
  },
  {
    title: "Modular Payload Bay",
    text: "Hot-swap EO/IR, LiDAR, multispectral and delivery modules in under sixty seconds.",
  },
  {
    title: "Swarm Coordination",
    text: "Mesh-networked fleets that share intelligence and cover ground as one system.",
  },
];

export const INDUSTRIES = [
  {
    name: "Defense & Security",
    text: "ISR, border patrol and tactical support.",
    img: "droneCloseup",
  },
  {
    name: "Agriculture",
    text: "Crop health, spraying and yield mapping.",
    img: "field",
  },
  {
    name: "Energy & Utilities",
    text: "Power line, solar and turbine inspection.",
    img: "aerial2",
  },
  {
    name: "Infrastructure",
    text: "Bridges, towers and construction surveys.",
    img: "aerial1",
  },
  {
    name: "Mining",
    text: "Stockpile volumes and terrain modelling.",
    img: "spray",
  },
  {
    name: "Surveying & Mapping",
    text: "Photogrammetry and 3D LiDAR capture.",
    img: "hero",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Consult & Design",
    text: "We scope the mission and engineer an airframe around it.",
  },
  {
    no: "02",
    title: "Prototype & Test",
    text: "Rapid prototypes are flight-tested against real conditions.",
  },
  {
    no: "03",
    title: "Manufacture",
    text: "Production lines build to spec with full quality control.",
  },
  {
    no: "04",
    title: "Deploy",
    text: "We integrate, train your team and launch operations.",
  },
  {
    no: "05",
    title: "Support",
    text: "Maintenance, upgrades and 24/7 mission support.",
  },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Drones Delivered" },
  { value: 1.2, suffix: "M+", label: "Flight Hours Logged", decimals: 1 },
  { value: 45, suffix: "+", label: "Countries Served" },
  { value: 99.6, suffix: "%", label: "Mission Success Rate", decimals: 1 },
];

export const TESTIMONIALS = [
  {
    quote:
      "Ratnanjali took our inspection programme from weeks to days. Their drones simply do not miss a fault.",
    name: "A. Mehta",
    role: "Head of Operations, GridPower Utilities",
  },
  {
    quote:
      "From custom design to delivery, the engineering quality is on another level. A true defense-grade partner.",
    name: "Col. R. Banerjee",
    role: "Procurement Lead, National Defence Wing",
  },
  {
    quote:
      "The mapping accuracy transformed how we plan sites. Reliable hardware, brilliant support team.",
    name: "S. Iyer",
    role: "Director, Apex Surveying Co.",
  },
];

export const FOOTER = {
  columns: [
    {
      title: "Company",
      links: ["About Us", "Careers", "Newsroom", "Sustainability"],
    },
    {
      title: "Solutions",
      links: ["Defense", "Agriculture", "Energy", "Surveying"],
    },
    {
      title: "Drones",
      links: ["Hawk-Eye 9X", "Hawk-Eye 6X", "Hawk-Eye 12X", "Custom Builds"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Case Studies", "Support", "Contact"],
    },
  ],
  address: "Ratnanjali Aerospace Pvt. Ltd.\nAhmedabad, Gujarat, India",
  email: "hello@ratnanjali.aero",
  phone: "+91 79 0000 0000",
};

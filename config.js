import { theme } from "./theme.js";

// CONTENT CUSTOMIZATION
// Edit this file to update website text, images, links, buttons, team members,
// projects, testimonials, navigation, contact information, and footer content.
// Image paths should point to files in /public/images.
// Logo and favicon paths should point to files in /public/logo.
// Colors are sourced from theme.js so one theme edit updates the full site.

const siteConfig = {
  siteName: "AstraForge Robotics",
  siteDescription:
    "A premium robotics and intelligent automation studio building adaptive machines, autonomy software, and connected industrial technology.",
  siteUrl: "https://example.com",

  // Replace these files in /public/logo or update the paths below.
  logo: "/logo/logo.svg",
  favicon: "/logo/favicon.svg",

  // Required color keys. Change actual values in theme.js.
  primaryColor: theme.colors.primary,
  secondaryColor: theme.colors.secondary,
  accentColor: theme.colors.accent,

  navigationLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],

  heroTitle: "Robotics Systems for the Next Industrial Era",
  heroSubtitle:
    "We design intelligent robots, perception stacks, and connected automation platforms that help ambitious teams move from prototype to production.",
  heroImage: "/images/hero-robotics-lab.svg",
  heroVideo: "", // Optional: add a video file such as /images/hero-loop.mp4.
  openGraphImage: "/images/hero-robotics-lab.svg",
  backgroundImages: {
    hero: "/images/background-circuit.svg",
    contact: "/images/background-circuit.svg"
  },
  heroButtons: [
    { label: "Explore Projects", href: "#projects", icon: "ArrowRight" },
    { label: "Book a Demo", href: "#contact", icon: "CalendarDays" }
  ],

  about: {
    eyebrow: "About the company",
    title: "Precision hardware meets calm, production-grade software.",
    overview:
      "AstraForge Robotics is a multidisciplinary technology company focused on practical robotics for manufacturing, inspection, logistics, and field operations.",
    mission:
      "Our mission is to make robotics reliable enough for daily work and simple enough for teams to adopt without slowing down operations.",
    vision:
      "We envision a future where intelligent machines amplify skilled people, improve safety, and make advanced automation accessible to more industries.",
    stats: [
      { value: "42+", label: "robotic prototypes shipped" },
      { value: "18 ms", label: "edge perception latency" },
      { value: "99.7%", label: "inspection model uptime" },
      { value: "12", label: "industry deployments" }
    ]
  },

  features: [
    {
      icon: "Bot",
      title: "Autonomous Robotics",
      description:
        "Mobile and fixed robotic systems with navigation, manipulation, sensing, and safety logic built for real environments."
    },
    {
      icon: "BrainCircuit",
      title: "AI Perception",
      description:
        "Computer vision, sensor fusion, and edge AI pipelines for inspection, tracking, classification, and decision support."
    },
    {
      icon: "Cpu",
      title: "Embedded Intelligence",
      description:
        "Low-latency control systems, telemetry, firmware integration, and hardware-aware software for robotics products."
    },
    {
      icon: "Network",
      title: "Connected Operations",
      description:
        "Dashboards, fleet orchestration, remote diagnostics, and secure cloud workflows for distributed robotics programs."
    },
    {
      icon: "ShieldCheck",
      title: "Safety by Design",
      description:
        "Human-aware motion planning, observability, fail-safe routines, and validation practices for dependable deployment."
    },
    {
      icon: "Factory",
      title: "Industrial Automation",
      description:
        "Automation cells, quality-control stations, and custom robotics integrations tuned for measurable business outcomes."
    }
  ],

  projects: [
    {
      title: "Autonomous Assembly Arm",
      category: "Robotics",
      image: "/images/project-autonomous-arm.svg",
      description:
        "A vision-guided robotic arm for flexible small-batch assembly with adaptive gripping and real-time quality checks.",
      technologies: ["ROS 2", "Stereo Vision", "Edge AI", "Python"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Sentinel Vision Stack",
      category: "AI",
      image: "/images/project-vision-stack.svg",
      description:
        "An edge-deployed inspection platform that identifies defects and anomalies across fast-moving production lines.",
      technologies: ["TensorRT", "Next.js", "IoT", "PostgreSQL"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    },
    {
      title: "Micro Drone Swarm",
      category: "Autonomy",
      image: "/images/project-micro-drone.svg",
      description:
        "A compact multi-agent drone system for facility scans, mapping, and rapid situational awareness.",
      technologies: ["SLAM", "C++", "Telemetry", "WebRTC"],
      demoLink: "https://example.com",
      githubLink: "https://github.com"
    }
  ],

  gallery: [
    {
      title: "Prototype lab",
      image: "/images/gallery-lab-floor.svg",
      alt: "Robotics prototype lab with illuminated workstations"
    },
    {
      title: "Control bench",
      image: "/images/gallery-prototype-bench.svg",
      alt: "Robotics control hardware and sensor modules"
    },
    {
      title: "Sensor array",
      image: "/images/gallery-sensor-array.svg",
      alt: "Robotics sensor array with camera and lidar modules"
    },
    {
      title: "Autonomy test",
      image: "/images/gallery-autonomy-test.svg",
      alt: "Autonomous robot moving through a test grid"
    }
  ],

  teamMembers: [
    {
      name: "Mira Chen",
      position: "Chief Robotics Architect",
      photo: "/images/team-mira-chen.svg",
      socials: [
        { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
        { label: "GitHub", href: "https://github.com", icon: "Github" }
      ]
    },
    {
      name: "Elias Hart",
      position: "AI Systems Lead",
      photo: "/images/team-elias-hart.svg",
      socials: [
        { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
        { label: "X", href: "https://x.com", icon: "Twitter" }
      ]
    },
    {
      name: "Nadia Rahman",
      position: "Product Engineering Director",
      photo: "/images/team-nadia-rahman.svg",
      socials: [
        { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
        { label: "Email", href: "mailto:hello@example.com", icon: "Mail" }
      ]
    }
  ],

  testimonials: [
    {
      quote:
        "AstraForge helped us turn a fragile lab prototype into a reliable robotic workflow our operators actually trust.",
      name: "Jordan Lee",
      position: "VP Operations, Northline Manufacturing",
      photo: "/images/testimonial-jordan-lee.svg",
      rating: 5
    },
    {
      quote:
        "The team brought rare depth across mechanical systems, AI, and product thinking. The deployment felt polished from day one.",
      name: "Priya Sato",
      position: "Director of Innovation, HelioGrid",
      photo: "/images/testimonial-priya-sato.svg",
      rating: 5
    },
    {
      quote:
        "Their inspection platform gave us better visibility, faster reporting, and a measurable reduction in rework.",
      name: "Marcus Hale",
      position: "Quality Lead, Aerion Components",
      photo: "/images/testimonial-marcus-hale.svg",
      rating: 5
    }
  ],

  contactEmail: "hello@astraforge.ai",
  contactPhone: "+1 (555) 014-8820",
  contactAddress: "1200 Innovation Drive, Austin, TX 78701",
  contact: {
    title: "Build the robotics program your team can scale.",
    subtitle:
      "Tell us about your automation goals, prototype needs, or production constraints. We will respond with a practical next step.",
    mapLabel: "AstraForge Robotics HQ"
  },

  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "GitHub", href: "https://github.com", icon: "Github" },
    { label: "X", href: "https://x.com", icon: "Twitter" },
    { label: "YouTube", href: "https://youtube.com", icon: "Youtube" }
  ],

  footerLinks: [
    { label: "Projects", href: "#projects" },
    { label: "Capabilities", href: "#features" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],
  footer: {
    copyright: "© 2026 AstraForge Robotics. All rights reserved.",
    newsletterTitle: "Stay close to the frontier.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "Subscribe"
  }
};

export default siteConfig;

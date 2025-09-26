export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  repo?: string
  demo?: string
  image: string
}

export const projects: Project[] = [
  {
    slug: "fixlit-smart-lighting",
    title: "FixLit – Smart Lighting Control System",
    description:
      "Energy-saving IoT solution using ESP32-CAM and OpenCV for automated lighting with app-based presets and ambient detection.",
    tech: ["ESP32-CAM", "OpenCV", "IoT", "Mobile App"],
    demo: "https://fixlit.netlify.app",
    repo: "https://github.com/Slavik2475/Fixlit",
    image: "/smart-lighting-iot.jpg",
  },
  {
    slug: "alumni-website",
    title: "Alumni Website Development",
    description:
      "Dynamic website for Electronics Engineering batch of 1999 with profiles, search, and event management.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Angular"],
    demo: "https://ee-batch1999.vercel.app/",
    repo: "https://github.com/ManglamX/EE_Batch1999",
    image: "/alumni-website.jpg",
  },
  {
    slug: "alcohol-detection-prevention",
    title: "Alcohol Detection and Accident Prevention",
    description:
      "Safety system with automated motor shutdown on alcohol detection, Firebase logging, and email alerts.",
    tech: ["Arduino", "ESP32", "Firebase", "Email Alerts"],
    demo: "https://drive.google.com/file/d/1UC8FUfdTYsdqpWJV1scYbbeI6nCRlFEG/view",
    repo: "https://github.com/ManglamX/Accident-Prevention",
    image: "/alcohol-detection-system.jpg",
  },
  {
    slug: "bluetooth-robot-car",
    title: "Bluetooth-Controlled Robotic Car",
    description:
      "Arduino Uno and ESP32-based robotic vehicle with Bluetooth connectivity and wireless control interface.",
    tech: ["Arduino", "ESP32", "Bluetooth", "IoT"],
    demo: undefined,
    repo: undefined,
    image: "/bluetooth-robot-car.jpg",
  },
  {
    slug: "voice-controlled-lighting",
    title: "Voice-Controlled Lighting Automation",
    description:
      "Automated project room lighting system with voice command integration and mobile app backup controls.",
    tech: ["Voice Control", "ESP32", "Mobile App", "IoT"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Voxon",
    image: "/voice-lighting-automation.jpg",
  },
  {
    slug: "waste-classification-system",
    title: "AI-Powered Waste Classification System",
    description:
      "Waste-classification system using a ResNet50 model to identify items (plastic, metal, paper, etc.) and map them to recyclable, compostable, or non-recyclable categories. It uses generative AI (Gemini API) to give recycling suggestions and decomposition times, stores classification history, and produces automated PDF reports.",
    tech: ["ResNet50", "Gemini API", "Generative AI", "PDF Reports"],
    demo: "https://drive.google.com/drive/folders/1oyzeUu4Ili1kv6Sn3LUl9RVOXoZ3wpjt",
    repo: "https://github.com/ManglamX/Wasteclassificationproject",
    image: "/Waste-classification.png",
  },
  {
    slug: "climate-change-education",
    title: "Climate Change Education Platform",
    description:
      "An interactive education website featuring cache-based automated learning podcast module generation with quizzes, and gamified content like mini-games and animations (e.g., Carbon Footprint Simulator). Includes a progress tracker, infographics, explainer videos, badges with Ecopoints, and a community hub for sharing ideas and hosting virtual events.",
    tech: ["Web Development", "Gamification", "Podcasts", "Community Hub"],
    demo: undefined,
    repo: "https://github.com/ManglamX/Climate-Change-Education-App",
    image: "/climate-change.png",
  },
]
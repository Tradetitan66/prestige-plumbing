export const site = {
  name: "Prestige Plumbing Heating Ltd",
  tagline: "No problems. Only solutions.",
  baseLocation: "Penicuik, Midlothian",
  areas: ["Penicuik", "Edinburgh", "Midlothian", "Surrounding areas"],
  phoneDisplay: "07761 845314",
  phoneHref: "tel:07761845314",
  whatsappNumber: "447761845314",
  whatsappHref: "https://wa.me/447761845314",
  email: "prestigequery@outlook.com",
  socials: {
    instagram: "https://www.instagram.com/prestigecontract5/",
    facebook:
      "https://www.facebook.com/prestigecontract/photos?locale=en_GB",
    yell: "https://www.yell.com/biz/prestige-plumbing-heating-ltd-penicuik-10927691/",
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  enquire: string;
}

export const services: Service[] = [
  {
    icon: "siren",
    title: "Emergency Plumbing",
    description:
      "Leaks, burst pipes and urgent plumbing problems.",
    enquire:
      "Hi Prestige, I'm looking for urgent help with an emergency plumbing problem.",
  },
  {
    icon: "wrench",
    title: "Plumbing Repairs",
    description:
      "Taps, toilets, sinks, pipes and everyday plumbing repairs.",
    enquire:
      "Hi Prestige, I'm looking for help with a plumbing repair.",
  },
  {
    icon: "radiator",
    title: "Heating & Radiators",
    description:
      "Radiator installations, repairs and heating improvements.",
    enquire:
      "Hi Prestige, I'm looking for help with heating or a radiator.",
  },
  {
    icon: "shower",
    title: "Bathrooms & Showers",
    description:
      "Bathroom plumbing, showers, toilets and installations.",
    enquire:
      "Hi Prestige, I'm looking for help with a bathroom or shower.",
  },
  {
    icon: "tap",
    title: "Taps & Kitchen Plumbing",
    description:
      "Tap upgrades, sinks and kitchen plumbing.",
    enquire:
      "Hi Prestige, I'm looking for help with taps or kitchen plumbing.",
  },
  {
    icon: "droplet",
    title: "Leaks & Drainage",
    description:
      "Leak detection, blocked sinks, toilets and drainage problems.",
    enquire:
      "Hi Prestige, I'm looking for help with a leak or drainage problem.",
  },
];

export interface Project {
  id: string;
  before: string;
  after: string;
  caption: string;
  beforeAlt: string;
  afterAlt: string;
}

export const projects: Project[] = [
  {
    id: "p1",
    before: "/images/projects/before-1.jpg",
    after: "/images/projects/after-1.jpg",
    caption: "Project before & after",
    beforeAlt: "Before photo of a Prestige Plumbing Heating project",
    afterAlt: "After photo showing the completed Prestige Plumbing Heating project",
  },
  {
    id: "p2",
    before: "/images/projects/before-2.jpg",
    after: "/images/projects/after-2.jpg",
    caption: "Project before & after",
    beforeAlt: "Before photo of a Prestige Plumbing Heating project",
    afterAlt: "After photo showing the completed Prestige Plumbing Heating project",
  },
  {
    id: "p3",
    before: "/images/projects/before-3.jpg",
    after: "/images/projects/after-3.jpg",
    caption: "Project before & after",
    beforeAlt: "Before photo of a Prestige Plumbing Heating project",
    afterAlt: "After photo showing the completed Prestige Plumbing Heating project",
  },
  {
    id: "p4",
    before: "/images/projects/before-4.jpg",
    after: "/images/projects/after-4.jpg",
    caption: "Project before & after",
    beforeAlt: "Before photo of a Prestige Plumbing Heating project",
    afterAlt: "After photo showing the completed Prestige Plumbing Heating project",
  },
  {
    id: "p5",
    before: "/images/projects/before-5.jpg",
    after: "/images/projects/after-5.jpg",
    caption: "Project before & after",
    beforeAlt: "Before photo of a Prestige Plumbing Heating project",
    afterAlt: "After photo showing the completed Prestige Plumbing Heating project",
  },
];

export const sampleProjects: { src: string; alt: string }[] = [
  {
    src: "/images/projects/sample-1.jpg",
    alt: "Finished plumbing installation completed by Prestige Plumbing Heating",
  },
  {
    src: "/images/projects/sample-2.jpg",
    alt: "Finished plumbing installation completed by Prestige Plumbing Heating",
  },
  {
    src: "/images/projects/sample-3.jpg",
    alt: "Finished plumbing installation completed by Prestige Plumbing Heating",
  },
];

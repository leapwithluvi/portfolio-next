import { profile } from "./profile";
import { skills } from "./techstack";
import { socials } from "./socials";

/**
 * DATA - Contact JSON
 * Dynamically linked to techstack.ts and profile.ts to ensure data consistency.
 */
const getSocial = (name: string) => socials.find(s => s.name === name)?.href || "";
const getUsername = (name: string) => {
  const href = getSocial(name);
  if (name === "Email") return href.replace("mailto:", "");
  return href.split("/").pop() || "";
}

export const contactJsonData = {
  name: profile.name,
  role: profile.title,
  status: "Available for Projects",
  location: profile.location.country,
  contact: {
    email: getUsername("Email"),
    github: getUsername("GitHub"),
    linkedin: getUsername("LinkedIn"),
    instagram: getUsername("Instagram"),
    x: getUsername("X")
  },
  // Dynamically generated from techstack.ts
  stack: skills.reduce((acc: any, skill) => {
    const key = skill.title.toLowerCase().replace("-", "").replace(" & ", "_").replace(" ", "_");
    acc[key] = skill.skills;
    return acc;
  }, {})
};

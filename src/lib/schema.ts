// Structured data (schema.org JSON-LD) so search engines and AI tools can tell who Evans is and what each page is.
import { profile } from "../data/profile";
import { essayUrl, type Essay } from "./writing";

const site = "https://evns.fyi";
const personId = `${site}/#person`;

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: profile.name,
    url: `${site}/`,
    image: `${site}/icon-512.png`,
    jobTitle: "Software Engineer",
    description: profile.description,
    email: `mailto:${profile.contact.email}`,
    knowsAbout: ["AI agent safety", "Authorization", "Audit logging", "Payments", "Compliance", "Distributed systems"],
    sameAs: profile.links.map((l) => l.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "evns.fyi",
    url: `${site}/`,
    author: { "@id": personId },
  };
}

export function articleSchema(essay: Essay) {
  const url = `${site}${essayUrl(essay)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: essay.data.title,
    description: essay.data.description,
    datePublished: essay.data.date.toISOString(),
    url,
    mainEntityOfPage: url,
    image: `${site}/og/writing/${essay.id}.png`,
    author: { "@type": "Person", "@id": personId, name: profile.name, url: `${site}/` },
  };
}

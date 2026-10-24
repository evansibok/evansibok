// Everything the home page says lives here, so updating the site means editing data, not markup.

export interface Link {
  label: string;
  href: string;
}

export interface NowItem {
  title: string;
  body: string;
  // Shown as a small code card; lines are highlighted as TOML.
  snippet?: string;
  links: Link[];
}

export interface Role {
  when: string;
  company: string;
  // Extra context after the name, e.g. "(now ApeBond)".
  companyNote?: string;
  title: string;
  summary: string;
}

export const profile = {
  name: "Evans Ibok",
  role: "Software engineer · Systems, AI infrastructure & product",
  description:
    "Evans Ibok builds systems that prove what happened and stop what shouldn't: compliance and permissions around money, and guardrails for AI agents.",
  thesis: {
    before: "I build systems that ",
    highlight: "prove what happened and stop what shouldn't",
    after:
      ". For years that meant compliance and permissions around money. Now it means guardrails for AI agents.",
  },
  links: [
    { label: "GitHub", href: "https://github.com/evansibok" },
    { label: "LinkedIn", href: "https://linkedin.com/in/evansibok" },
    { label: "X", href: "https://x.com/iamevns" },
  ] satisfies Link[],

  now: [
    {
      title: "Building Nanny",
      body: "Nanny is an open-source authorization and audit layer for AI agents. You declare which tools an agent may call and under what rules. If it tries anything else, Nanny stops the run and records why. No soft warnings, no negotiation.",
      snippet: `# nanny.toml
[tools]
allowed = ["web_search", "save_findings"]

[tools.web_search]
max_calls = 30
reads_untrusted = true`,
      links: [
        { label: "docs.nanny.run", href: "https://docs.nanny.run" },
        { label: "github.com/nanny-run/nanny", href: "https://github.com/nanny-run/nanny" },
      ],
    },
  ] satisfies NowItem[],

  work: [
    {
      when: "2024",
      company: "Afriex",
      title: "Software Engineer",
      summary:
        "Lead engineer on the admin platform the compliance and operations teams run on. Got the B2B dashboard off the ground, shipped its audit logging, and worked across payouts and deposits infrastructure.",
    },
    {
      when: "2022 – 2024",
      company: "Chuffleback",
      title: "Lead Engineer",
      summary:
        "Owned the architecture of a crypto payroll product for global teams, from React to Postgres, and led planning, delivery and mentorship.",
    },
    {
      when: "2021 – 2022",
      company: "ApeSwap",
      companyNote: "(now ApeBond)",
      title: "Frontend Developer",
      summary: "Built the staking flows behind a ~15% lift in purchases, and the UI kit used across the product.",
    },
    {
      when: "2020",
      company: "Hydrogen HR",
      title: "Frontend Developer",
      summary: "Shipped production UI in React and Redux.",
    },
  ] satisfies Role[],

  stack: "TypeScript, Rust, Python, React, Node, NestJS, GraphQL, PostgreSQL.",
  trainedAt:
    "Bloom Institute of Technology (formerly Lambda School), full-stack web development and computer science, 2019 – 2020.",

  contact: {
    pitch: "Building agents, or something that needs a hard line around what it may do? I'd like to hear about it.",
    email: "evans@evns.fyi",
  },

  elsewhere: "Away from the keyboard: books, poetry, fantasy series, anime, music, and time in nature.",
};

import type { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: <span>test</span>,
  project: {
    link: "https://github.com/team-falkor",
  },
  chat: {
    link: "https://falkor.moe/discord",
  },
  docsRepositoryBase: "https://github.com/team-falkor/docs/tree/master",
};
export default config;

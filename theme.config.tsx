import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <img
        src="/icon.png"
        style={{ height: "28px", width: "28px", objectFit: "contain" }}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Falkor Docs</span>
    </>
  ),
  project: {
    link: "https://github.com/team-falkor",
  },
  chat: {
    link: "https://falkor.moe/discord",
  },
  docsRepositoryBase: "https://github.com/team-falkor/docs/tree/master",
  color: {
    hue: 271,
    saturation: 100,
  },
};
export default config;

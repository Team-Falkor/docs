import { useRouter } from "next/router";
import { useConfig, type DocsThemeConfig } from "nextra-theme-docs";

// Utility to clean and format the route
const formatRouteTitle = (path: string) => {
  const cleanPath = path.replace(/\//g, " ").trim(); // Remove slashes
  return cleanPath
    ? cleanPath
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" ")
    : "Home"; // Default to "Home" for the root path
};

const config: DocsThemeConfig = {
  gitTimestamp: false,
  logo: (
    <>
      <img
        src="/icon.png"
        style={{ height: "28px", width: "28px", objectFit: "contain" }}
      />
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>
        Falkor Documentation
      </span>
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
  footer: {
    content: "Made with ❤️ by team-falkor",
  },
  head() {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();

    // Determine page title, falling back to the formatted route if no frontMatter.title exists
    const pageTitle = frontMatter.title || formatRouteTitle(asPath);

    const description = `Falkor documentation. Falkor is an open-source launcher that allows you to browse games, explore upcoming releases, and find the best deals with built-in IsThereAnyDeal integration to compare prices (please note, purchases are made through your default browser, not within the app). Designed to be flexible and expandable, Falkor’s core functionality is enhanced by community-created providers, giving users the power to customize and extend the app in countless ways.`;

    return (
      <>
        <title>{`${pageTitle} - Falkor Documentation`}</title>
        <meta
          property="og:title"
          content={`${pageTitle} - Falkor Documentation`}
        />
        {/* Set favicon */}
        <link rel="icon" href="/icon.png" type="image/png" />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        <meta name="twitter:card" content="summary_large_image" />
      </>
    );
  },
};

export default config;

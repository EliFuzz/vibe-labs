import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config: Config = {
  title: "Vibe Labs",
  tagline: "Vibe Labs",
  favicon: "img/favicon.ico",
  url: "https://EliFuzz.github.io",
  baseUrl: "/vibe-labs/",
  projectName: "EliFuzz.github.io",
  organizationName: "EliFuzz",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "main",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/EliFuzz/vibe-labs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Vibe Labs",
      logo: {
        alt: "Vibe Labs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          sidebarId: "study",
          label: "🎓 Study",
          position: "left",
          items: [
            {
              sidebarId: "education",
              type: "docSidebar",
              label: "📖 Education",
            },
          ],
        },
        {
          href: "https://github.com/EliFuzz",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
      options: {
        fontfamily:
          "'JetBrains Mono', 'Fira Code Medium', 'Source Code Pro', monospace",
        fontSize: 18,
      },
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia: {
      apiKey: "3dbee5934fa4d4493ea733d307a9ad4e",
      appId: "H7KSU6B104",
      contextualSearch: false,
      indexName: "vibe-labs",
    },
  } satisfies Preset.ThemeConfig,
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [],
};

export default config;

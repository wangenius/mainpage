import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const theme = {
  // Replace with your project's social card
  // image: "img/docusaurus-social-card.jpg",
  navbar: {
    title: "矩 阵 时 间",
    logo: {
      alt: "My Site Logo",
      src: "img/logo.png",
    },
    items: [
      {
        type: "docSidebar",
        sidebarId: "tutorialSidebar",
        position: "right",
        label: "知识库",
      },

      { to: "/blog", label: "博客", position: "right" },
      {
        href: "https://github.com/facebook/docusaurus",
        label: "GitHub",
        position: "right",
      },
    ],
  },
  docs: {
    sidebar: {
      autoCollapseCategories: true,
    },
  },
  footer: {
    style: "light",
    links: [
      {
        title: "知识库",
        items: [
          {
            label: "简介",
            to: "/docs/intro",
          },
          {
            label: "Rust",
            to: "/docs/rust",
          },
        ],
      },
      {
        title: "社区",
        items: [
          {
            label: "微博",
            href: "https://weibo.com/u/6320492937",
          },
          {
            label: "Bilibili",
            href: "https://space.bilibili.com/247967944",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/docusaurus",
          },
        ],
      },
      {
        title: "More",
        items: [
          {
            label: "Blog",
            to: "/blog",
          },
          {
            label: "GitHub",
            href: "https://github.com/facebook/docusaurus",
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} Docup, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;

// noinspection JSUnusedGlobalSymbols
export default {
  title: "矩阵时间",
  tagline:
    "故事的开始是一个有限但维数很大的矩阵空间。每一次的选择，矩阵空间都会做一次降维折叠，直到空间湮灭，主体消散。而折叠路径串起的大小传奇，将作为整个宇宙的岁月史书中，某个角落的蒙尘日志。日志的主人公形象是光线在躯壳和意识之间的反射，当一个环节发生变故，就会像日出后的雪人一样令人唏嘘的不见。那就把左矩阵刻录下来，叠成教训的谱，将歌声传向每一个开放的终端。",
  url: "https://wangenius.github.io", // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wangenius", // Usually your GitHub org/{username}.
  projectName: "docup", // Usually your repo name.
  // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // routeBasePath:"/",
          sidebarPath: "./sidebars.ts", // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true, // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: theme,
} satisfies Config;

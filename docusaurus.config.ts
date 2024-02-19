import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import path from 'path';

const theme = {
  colorMode:{
    disableSwitch:true,
    respectPrefersColorScheme: false,

  },
  giscus: {
    repo: 'wangenius/wangenius.github.io',
    repoId: 'R_kgDOLSHkiw',
    category: 'General',
    categoryId: 'DIC_kwDOLSHki84CdVYI',
  },
  navbar: {
    title: "panovista",
    logo: {
      alt: "logo",
      src: "img/panorama.svg",
    },
    hideOnScroll:true,
    items: [
      {
        type: "docSidebar",
        sidebarId: "tutorialSidebar",
        position: "right",
        label: "知识库",
      },
      { to: "/blog", label: "博客", position: "right" },
      {
        href: "https://github.com/wangenius/wangenius.github.io",
        label: "GitHub",
        position: "right",
      }
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
          }, {
            label: "操作系统基础",
            to: "/docs/操作系统基础",
          }, {
            label: "算法和数据结构",
            to: "/docs/算法和数据结构",
          },
          {
            label: "Rust",
            to: "/docs/rust",
          },
         
          {
            label: "数据库",
            to: "/docs/数据库",
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
            label: "bilibili",
            href: "https://space.bilibili.com/247967944",
          },
        ],
      },
      {
        title: "更多",
        items: [
          {
            label: "博客",
            to: "/blog",
          },
          {
            label: "GitHub",
            href: "https://github.com/wangenius",
          },
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} WANGENIUS, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.oneDark,
    additionalLanguages:['rust','powershell','toml'],
    defaultLanguage:"rust"
  },
} satisfies Preset.ThemeConfig;

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Panovista",
  tagline:
    "故事的开始是一个有限但维数很大的矩阵空间。每一次的选择，矩阵空间都会做一次降维折叠，直到空间湮灭，主体消散。而折叠路径串起的大小传奇，将作为整个宇宙的岁月史书中，某个角落的蒙尘日志。日志的主人公形象是光线在躯壳和意识之间的反射，当一个环节发生变故，就会像日出后的雪人一样令人唏嘘的不见。那就把左矩阵刻录下来，叠成教训的谱，将歌声传向每一个开放的终端。",
  url: "https://wangenius.github.io", // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  favicon: "img/panorama.ico", // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wangenius", // Usually your GitHub org/{username}.
  projectName: "wangenius.github.io", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // clientModules: [require.resolve('./src/clientModules/routeModules.ts')],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    async function myPlugin() {
      // noinspection JSUnusedGlobalSymbols
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    }
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // routeBasePath:"/",
          sidebarPath: "./sidebars.ts", // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/wangenius/wangenius.github.io/tree/master/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true, // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/wangenius/wangenius.github.io/tree/master/",
        },

        theme: {
          customCss: "./src/css/custom.scss",
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
  themeConfig: theme,
} satisfies Config;

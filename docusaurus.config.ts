import { themes as prismThemes,type PrismTheme } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import path from 'path';


const prism = {
  ...prismThemes.github,
  styles: [
    ...prismThemes.github.styles,
    {
      types: ['title'],
      style: {
        color: '#0550AE',
        fontWeight: 'bold',
        
      },
    },
    {
      types: ['parameter'],
      style: {
        color: '#953800',
      },
    },
    {
      types: ['boolean', 'rule', 'color', 'number', 'constant', 'property'],
      style: {
        color: '#005CC5',
      },
    },
    {
      types: ['atrule', 'tag'],
      style: {
        color: '#22863A',
      },
    },
    {
      types: ['script'],
      style: {
        color: '#24292E',
      },
    },
    {
      types: ['operator', 'unit', 'rule'],
      style: {
        color: '#D73A49',
      },
    },
    {
      types: ['font-matter', 'string', 'attr-value'],
      style: {
        color: '#C6105F',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#116329',
      },
    },
    {
      types: ['attr-name'],
      style: {
        color: '#0550AE',
      },
    },
    {
      types: ['keyword'],
      style: {
        color: '#CF222E',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#8250DF',
      },
    },
    {
      types: ['selector'],
      style: {
        color: '#6F42C1',
      },
    },
    {
      types: ['variable'],
      style: {
        color: '#E36209',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#6B6B6B',
      },
    },
  ],
} satisfies PrismTheme;


const theme = {
  colorMode:{
    disableSwitch:true,
    respectPrefersColorScheme: false,
    defaultMode:"light"
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
      src: "img/panovista.png",
    },
    hideOnScroll:true,
    items: [
      {
        type: "docSidebar",
        sidebarId: "repository",
        position: "right",
        label: "Repository",
        icon:"/img/box.svg"
      },
      {
        type: 'docSidebar',
        position: 'right',
        sidebarId: 'portfolio',
        label: 'Portfolio',
      },
      { to: "/blog", label: "Vista", position: "right" },
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
    style: "dark",
    links: [
      {
        title: "知识库",
        items: [
          {
            label: "简介",
            to: "/docs/repository/简介",
          }, {
            label: "操作系统基础",
            to: "/docs/repository/操作系统基础",
          }, {
            label: "算法和数据结构",
            to: "/docs/repository/算法和数据结构",
          },
          {
            label: "Rust",
            to: "/docs/repository/rust",
          },
         
          {
            label: "数据库",
            to: "/docs/repository/数据库",
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
          {
            label: "知乎",
            href: "https://www.zhihu.com/people/wangenius",
          },
          {
            label: "GitHub",
            href: "https://github.com/wangenius",
          },
        ],
      },
      {
        title: "更多",
        items: [
          {
            label: "关于我",
            to: "/docs/repository/关于我",
          },
          {
            label: "博客",
            to: "/blog",
          },
          {
            label: "项目计划",
            to: "/docs/repository/项目计划",
          },
          {
            label: "讨论",
            href: "https://github.com/wangenius/wangenius.github.io/discussions",
          },
          {
            label: "FAQ",
            href: "https://github.com/wangenius/wangenius.github.io/issues",
          },
        
        ],
      },
    ],
    copyright: `Copyright © ${new Date().getFullYear()} 吕麓弥章, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prism,
    additionalLanguages:['toml','powershell','json','bash'],
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
  favicon: "img/panovista.svg", // GitHub pages deployment config.
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
    [
      'docusaurus-plugin-module-alias',
      {
          alias: {
              '@': path.resolve(__dirname, 'src'),
              '@components':path.resolve(__dirname,"./src/components")
          },
      },
  ],
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

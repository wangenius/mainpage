import { themes as prismThemes,type PrismTheme } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import path from 'path';

/**
 * 主题 
 */
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
        color: '#1750EB',
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
        color: 'rgb(216, 60, 8)',
      },
    },
    {
      types: ['font-matter', 'string', 'attr-value'],
      style: {
        color: '#067D17',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: '#008080',
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
        color: '#0033B3',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#00627A',
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
        color: '#8C8C8C',
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
  mermaid: {
    theme: {light: 'forest'}
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
        type: "dropdown",
        position: "right",
        label: "DSA",
        items:[  {
          type: "docSidebar",
          sidebarId: "ds",
          label: "算法和数据结构",
        },
          {
            type: "docSidebar",
            sidebarId: "leetcode",
            label: "leetcode刷题",
          },
        
        ]
      },
      {
        type: "dropdown",
        label:"计算机原理",
        position:"right",
        items:[
          {
            type: "docSidebar",
            sidebarId: "co",
            label: "组成原理"
          },
          {
            type: "docSidebar",
            sidebarId: "db",
            label: "数据库"
          },
          {
            type: "docSidebar",
            sidebarId: "os",
            label: "操作系统"
          },
           {
            type: "docSidebar",
            sidebarId: "web",
            label: "计算机网络"
          },
           {
            type: "docSidebar",
            sidebarId: "git",
            label: "Git"
          },
           {
            type: "docSidebar",
            sidebarId: "se",
            label: "软件工程"
          },
        ]
      },
      {
        type: "dropdown",
        label:"AI",
        position:"right",
        items:[
           {
            type: "docSidebar",
            sidebarId: "ml",
            label: "机器学习"
          }
        ]
      },
      {
        type: "dropdown",
        label:"语言",
        position:"right",
        items:[
          {
            type: "docSidebar",
            sidebarId: "cpp",
            label: "C++"
          },
          {
            type: "docSidebar",
            sidebarId: "python",
            label: "Python"
          },
          {
            type: "docSidebar",
            sidebarId: "rust",
            label: "Rust"
          },
          {
            type: "docSidebar",
            sidebarId: "ts",
            label: "TypeScript"
          },
          {
            type: "docSidebar",
            sidebarId: "compile",
            label: "编译原理"
          }
       
        ]
      },
      {
        type: "dropdown",
        position: "right",
        label:"更多",
        items:[
          {
            type: "docSidebar",
            sidebarId: "math",
            label: "数学"
          },
          {
            type: "docSidebar",
            sidebarId: "tools",
            label: "工具和工作流"
          }
        ]
      },
      {
        type: 'docSidebar',
        position: 'right',
        sidebarId: 'opus',
        label: '作品集',
      },
      { to: "/blog", label: "博客", position: "right" },
      
      {
        type: 'docSidebar',
        position: 'right',
        sidebarId: 'about',
        label: '关于',
      },  {
        href: "https://github.com/wangenius/wangenius.github.io",
        label: "GitHub",
        position: "right",
      }
    ],
  },
  docs: {
    sidebar: {
      // autoCollapseCategories: true,
    },
  },
  footer: {
    style: "dark",
    links: [
      {
        title: "知识库",
        items: [
          {
            label: "致明日的舞",
            to: "/docs/about/致明日的舞",
          }, {
            label: "操作系统基础",
            to: "/docs/cs/os/概述",
          }, {
            label: "数据结构",
            to: "/docs/dsa/ds/概述",
          },
          {
            label: "Rust",
            to: "/docs/lang/rust/概述",
          },
         
          {
            label: "数据库",
            to: "/docs/cs/db/概述",
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
            to: "/docs/about/关于我",
          },
          {
            label: "博客",
            to: "/blog",
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
    additionalLanguages:['toml','powershell','json','bash','python'],
    defaultLanguage:"text"
  },
} satisfies Preset.ThemeConfig;


export default {
  title: "Panovista",
  tagline:
    "故事的开始是一个有限但维数很大的矩阵空间。每一次的选择，矩阵空间都会做一次降维折叠，直到空间湮灭，主体消散。而折叠路径串起的大小传奇，将作为整个宇宙的岁月史书中，某个角落的蒙尘日志。日志的主人公形象是光线在躯壳和意识之间的反射，当一个环节发生变故，就会像日出后的雪人一样令人唏嘘的不见。那就把左矩阵刻录下来，叠成教训的谱，将歌声传向每一个开放的终端。",
  url: "https://wangenius.github.io",
  baseUrl: "/",
  favicon: "img/panovista.svg",
  organizationName: "wangenius",
  projectName: "wangenius.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
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
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/wangenius/wangenius.github.io/tree/master/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/wangenius/wangenius.github.io/tree/master/",
        },

        theme: {
          customCss: ["./src/css/custom.scss","./src/css/const.scss"],
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
  markdown: {
    mermaid: true,
  }
} satisfies Config;

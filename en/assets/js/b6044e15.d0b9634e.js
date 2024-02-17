"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[7476],{3464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(4848),s=n(8453);const o={},c=void 0,i={id:"rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",title:"\u503c\u548c\u7c7b\u578b",description:"\u5728 Rust \u4e2d\uff0c\u6bcf\u4e00\u4e2a\u503c\u90fd\u5c5e\u4e8e\u67d0\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\uff0c\u8fd9\u544a\u8bc9 Rust \u5b83\u88ab\u6307\u5b9a\u4e3a\u4f55\u79cd\u6570\u636e\uff0c\u4ee5\u4fbf\u660e\u786e\u6570\u636e\u5904\u7406\u65b9\u5f0f\u3002\u6211\u4eec\u5c06\u770b\u5230\u4e24\u7c7b\u6570\u636e\u7c7b\u578b\u5b50\u96c6\uff1a\u6807\u91cf\uff08scalar\uff09\u548c\u590d\u5408\uff08compound\uff09\u3002",source:"@site/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b.md",sourceDirName:"rust/\u5bf9\u8c61",slug:"/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",permalink:"/en/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ed3\u6784\u4f53",permalink:"/en/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u7ed3\u6784\u4f53"},next:{title:"\u53d8\u91cfvariable",permalink:"/en/docs/rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e"}},a={},u=[];function d(e){const t={code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["\u5728 Rust \u4e2d\uff0c\u6bcf\u4e00\u4e2a\u503c\u90fd\u5c5e\u4e8e\u67d0\u4e00\u4e2a",(0,r.jsx)(t.strong,{children:"\u6570\u636e\u7c7b\u578b"}),"\uff0c\u8fd9\u544a\u8bc9 Rust \u5b83\u88ab\u6307\u5b9a\u4e3a\u4f55\u79cd\u6570\u636e\uff0c\u4ee5\u4fbf\u660e\u786e\u6570\u636e\u5904\u7406\u65b9\u5f0f\u3002\u6211\u4eec\u5c06\u770b\u5230\u4e24\u7c7b\u6570\u636e\u7c7b\u578b\u5b50\u96c6\uff1a\u6807\u91cf\uff08scalar\uff09\u548c\u590d\u5408\uff08compound\uff09\u3002"]}),"\n",(0,r.jsxs)(t.p,{children:["Rust \u662f ",(0,r.jsx)(t.strong,{children:"\u9759\u6001\u7c7b\u578b"}),"\uff08",(0,r.jsx)(t.em,{children:"statically typed"}),"\uff09\u8bed\u8a00\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u7f16\u8bd1\u65f6\u5c31\u5fc5\u987b\u77e5\u9053\u6240\u6709\u53d8\u91cf\u7684\u7c7b\u578b\u3002\u6839\u636e\u503c\u53ca\u5176\u4f7f\u7528\u65b9\u5f0f\uff0c\u7f16\u8bd1\u5668\u901a\u5e38\u53ef\u4ee5\u63a8\u65ad\u51fa\u6211\u4eec\u60f3\u8981\u7528\u7684\u7c7b\u578b\u3002\u5f53\u591a\u79cd\u7c7b\u578b\u5747\u6709\u53ef\u80fd\u65f6\uff0c\u6bd4\u5982\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"parse"})," \u5c06 ",(0,r.jsx)(t.code,{children:"String"})," \u8f6c\u6362\u4e3a\u6570\u5b57\u65f6\uff0c\u5fc5\u987b\u589e\u52a0\u7c7b\u578b\u6ce8\u89e3\uff0c\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Rust",children:'let guess: u32 = "42".parse().expect("Not a number!");//correct\nlet guess = "42".parse().expect("Not a number!");//error\n/**\nerror[E0282]: type annotations needed\n --\x3e src/main.rs:2:9\n  |\n2 |     let guess = "42".parse().expect("Not a number!");\n  |         ^^^^^\n  |         |\n  |         cannot infer type for `_`\n  |         consider giving `guess` a type\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(6540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[5664],{1772:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=t(7624),r=t(2172);const c={},o="",i={id:"rust/IO",title:"IO",description:"\u672c\u7ae0\u65e2\u662f\u4e00\u4e2a\u76ee\u524d\u6240\u5b66\u7684\u5f88\u591a\u6280\u80fd\u7684\u6982\u62ec\uff0c\u4e5f\u662f\u4e00\u4e2a\u66f4\u591a\u6807\u51c6\u5e93\u529f\u80fd\u7684\u63a2\u7d22\u3002\u6211\u4eec\u5c06\u6784\u5efa\u4e00\u4e2a\u4e0e\u6587\u4ef6\u548c\u547d\u4ee4\u884c\u8f93\u5165/\u8f93\u51fa\u4ea4\u4e92\u7684\u547d\u4ee4\u884c\u5de5\u5177\u6765\u7ec3\u4e60\u73b0\u5728\u4e00\u4e9b\u4f60\u5df2\u7ecf\u638c\u63e1\u7684 Rust \u6280\u80fd\u3002",source:"@site/docs/rust/IO.md",sourceDirName:"rust",slug:"/rust/IO",permalink:"/docs/rust/IO",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/IO.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"std",permalink:"/docs/rust/\u6a21\u5757\u7cfb\u7edf/std"},next:{title:"Axum",permalink:"/docs/rust/Rust/Axum"}},l={},d=[];function h(s){const e={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"\u672c\u7ae0\u65e2\u662f\u4e00\u4e2a\u76ee\u524d\u6240\u5b66\u7684\u5f88\u591a\u6280\u80fd\u7684\u6982\u62ec\uff0c\u4e5f\u662f\u4e00\u4e2a\u66f4\u591a\u6807\u51c6\u5e93\u529f\u80fd\u7684\u63a2\u7d22\u3002\u6211\u4eec\u5c06\u6784\u5efa\u4e00\u4e2a\u4e0e\u6587\u4ef6\u548c\u547d\u4ee4\u884c\u8f93\u5165/\u8f93\u51fa\u4ea4\u4e92\u7684\u547d\u4ee4\u884c\u5de5\u5177\u6765\u7ec3\u4e60\u73b0\u5728\u4e00\u4e9b\u4f60\u5df2\u7ecf\u638c\u63e1\u7684 Rust \u6280\u80fd\u3002"}),"\n",(0,n.jsxs)(e.p,{children:["Rust \u7684\u8fd0\u884c\u901f\u5ea6\u3001\u5b89\u5168\u6027\u3001\u5355\u4e8c\u8fdb\u5236\u6587\u4ef6\u8f93\u51fa\u548c\u8de8\u5e73\u53f0\u652f\u6301\u4f7f\u5176\u6210\u4e3a\u521b\u5efa\u547d\u4ee4\u884c\u7a0b\u5e8f\u7684\u7edd\u4f73\u9009\u62e9\uff0c\u6240\u4ee5\u6211\u4eec\u7684\u9879\u76ee\u5c06\u521b\u5efa\u4e00\u4e2a\u6211\u4eec\u81ea\u5df1\u7248\u672c\u7684\u7ecf\u5178\u547d\u4ee4\u884c\u5de5\u5177\uff1a",(0,n.jsx)(e.code,{children:"grep"}),"\u3002grep \u662f \u201c",(0,n.jsx)(e.strong,{children:"G"}),"lobally search a ",(0,n.jsx)(e.strong,{children:"R"}),"egular ",(0,n.jsx)(e.strong,{children:"E"}),"xpression and ",(0,n.jsx)(e.strong,{children:"P"}),"rint.\u201d \u7684\u9996\u5b57\u6bcd\u7f29\u5199\u3002",(0,n.jsx)(e.code,{children:"grep"})," \u6700\u7b80\u5355\u7684\u4f7f\u7528\u573a\u666f\u662f\u5728\u7279\u5b9a\u6587\u4ef6\u4e2d\u641c\u7d22\u6307\u5b9a\u5b57\u7b26\u4e32\u3002\u4e3a\u6b64\uff0c",(0,n.jsx)(e.code,{children:"grep"})," \u83b7\u53d6\u4e00\u4e2a\u6587\u4ef6\u540d\u548c\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\uff0c\u63a5\u7740\u8bfb\u53d6\u6587\u4ef6\u5e76\u627e\u5230\u5176\u4e2d\u5305\u542b\u5b57\u7b26\u4e32\u53c2\u6570\u7684\u884c\uff0c\u7136\u540e\u6253\u5370\u51fa\u8fd9\u4e9b\u884c\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u5c55\u793a\u5982\u4f55\u8ba9\u6211\u4eec\u7684\u547d\u4ee4\u884c\u5de5\u5177\u5229\u7528\u5f88\u591a\u547d\u4ee4\u884c\u5de5\u5177\u4e2d\u7528\u5230\u7684\u7ec8\u7aef\u529f\u80fd\u3002\u8bfb\u53d6\u73af\u5883\u53d8\u91cf\u6765\u4f7f\u5f97\u7528\u6237\u53ef\u4ee5\u914d\u7f6e\u5de5\u5177\u7684\u884c\u4e3a\u3002\u6253\u5370\u5230\u6807\u51c6\u9519\u8bef\u63a7\u5236\u6d41\uff08",(0,n.jsx)(e.code,{children:"stderr"}),"\uff09 \u800c\u4e0d\u662f\u6807\u51c6\u8f93\u51fa\uff08",(0,n.jsx)(e.code,{children:"stdout"}),"\uff09\uff0c\u4f8b\u5982\u8fd9\u6837\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u5c06\u6210\u529f\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6587\u4ef6\u4e2d\u7684\u540c\u65f6\u4ecd\u7136\u5728\u5c4f\u5e55\u4e0a\u663e\u793a\u9519\u8bef\u4fe1\u606f\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u4e00\u4f4d Rust \u793e\u533a\u7684\u6210\u5458\uff0cAndrew Gallant\uff0c\u5df2\u7ecf\u521b\u5efa\u4e86\u4e00\u4e2a\u529f\u80fd\u5b8c\u6574\u4e14\u975e\u5e38\u5feb\u901f\u7684 ",(0,n.jsx)(e.code,{children:"grep"})," \u7248\u672c\uff0c\u53eb\u505a ",(0,n.jsx)(e.code,{children:"ripgrep"}),"\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u6211\u4eec\u7684 ",(0,n.jsx)(e.code,{children:"grep"})," \u7248\u672c\u5c06\u975e\u5e38\u7b80\u5355\uff0c\u672c\u7ae0\u5c06\u6559\u4f1a\u4f60\u4e00\u4e9b\u5e2e\u52a9\u7406\u89e3\u50cf ",(0,n.jsx)(e.code,{children:"ripgrep"})," \u8fd9\u6837\u771f\u5b9e\u9879\u76ee\u7684\u80cc\u666f\u77e5\u8bc6\u3002"]}),"\n",(0,n.jsxs)(e.p,{children:["\u6211\u4eec\u7684 ",(0,n.jsx)(e.code,{children:"grep"})," \u9879\u76ee\u5c06\u4f1a\u7ed3\u5408\u4e4b\u524d\u6240\u5b66\u7684\u4e00\u4e9b\u5185\u5bb9\uff1a"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u4ee3\u7801\u7ec4\u7ec7\uff08\u4f7f\u7528 ",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch07-00-managing-growing-projects-with-packages-crates-and-modules.html",children:"\u7b2c\u4e03\u7ae0"})," \u5b66\u4e60\u7684\u6a21\u5757\uff09"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["vector \u548c\u5b57\u7b26\u4e32\uff08",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch08-00-common-collections.html",children:"\u7b2c\u516b\u7ae0"}),"\uff0c\u96c6\u5408\uff09"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u9519\u8bef\u5904\u7406\uff08",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch09-00-error-handling.html",children:"\u7b2c\u4e5d\u7ae0"}),"\uff09"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u5408\u7406\u7684\u4f7f\u7528 trait \u548c\u751f\u547d\u5468\u671f\uff08",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch10-00-generics.html",children:"\u7b2c\u5341\u7ae0"}),"\uff09"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:["\u6d4b\u8bd5\uff08",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch11-00-testing.html",children:"\u7b2c\u5341\u4e00\u7ae0"}),"\uff09"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.p,{children:["\u53e6\u5916\u8fd8\u4f1a\u7b80\u8981\u7684\u8bb2\u5230\u95ed\u5305\u3001\u8fed\u4ee3\u5668\u548c trait \u5bf9\u8c61\uff0c\u4ed6\u4eec\u5206\u522b\u4f1a\u5728 ",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch13-00-functional-features.html",children:"\u7b2c\u5341\u4e09\u7ae0"})," \u548c ",(0,n.jsx)(e.a,{href:"https://rust.bootcss.com/ch17-00-oop.html",children:"\u7b2c\u5341\u4e03\u7ae0"})," \u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u3002"]}),"\n",(0,n.jsx)(e.h1,{id:""})]})}function u(s={}){const{wrapper:e}={...(0,r.M)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},2172:(s,e,t)=>{t.d(e,{I:()=>i,M:()=>o});var n=t(1504);const r={},c=n.createContext(r);function o(s){const e=n.useContext(c);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:o(s.components),n.createElement(c.Provider,{value:e},s.children)}}}]);
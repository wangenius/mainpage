"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4672],{8304:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(4848),i=t(8453);const a={title:"abort&unwind",sidebar_position:2,slug:"abort&unwind"},s="abort&unwind",o={id:"lang/rust/\u9519\u8bef\u5904\u7406/abort&unwind",title:"abort&unwind",description:"\u4e0a\u4e00\u8282\u8bf4\u660e\u4e86\u9519\u8bef\u5904\u7406\u673a\u5236 panic \u3002\u53ef\u4ee5\u6839\u636e\u6050\u614c\u8bbe\u7f6e\u6709\u6761\u4ef6\u5730\u7f16\u8bd1\u4e0d\u540c\u7684\u4ee3\u7801\u8def\u5f84\u3002\u5f53\u524d\u53ef\u7528\u7684\u503c\u4e3a unwind \u548c abort \u3002",source:"@site/docs/lang/rust/\u9519\u8bef\u5904\u7406/abort&unwind.mdx",sourceDirName:"lang/rust/\u9519\u8bef\u5904\u7406",slug:"/lang/rust/\u9519\u8bef\u5904\u7406/abort&unwind",permalink:"/en/docs/lang/rust/\u9519\u8bef\u5904\u7406/abort&unwind",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u9519\u8bef\u5904\u7406/abort&unwind.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"abort&unwind",sidebar_position:2,slug:"abort&unwind"},sidebar:"rust",previous:{title:"panic",permalink:"/en/docs/lang/rust/\u9519\u8bef\u5904\u7406/panic"},next:{title:"option&unwrap",permalink:"/en/docs/lang/rust/\u9519\u8bef\u5904\u7406/option&unwrap"}},u={},d=[];function c(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"abortunwind",children:"abort&unwind"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u4e00\u8282\u8bf4\u660e\u4e86\u9519\u8bef\u5904\u7406\u673a\u5236 panic \u3002\u53ef\u4ee5\u6839\u636e\u6050\u614c\u8bbe\u7f6e\u6709\u6761\u4ef6\u5730\u7f16\u8bd1\u4e0d\u540c\u7684\u4ee3\u7801\u8def\u5f84\u3002\u5f53\u524d\u53ef\u7528\u7684\u503c\u4e3a unwind \u548c abort \u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u524d\u9762\u7684\u67e0\u6aac\u6c34\u793a\u4f8b\u7684\u57fa\u7840\u4e0a\uff0c\u6211\u4eec\u660e\u786e\u4f7f\u7528\u6050\u614c\u7b56\u7565\u6765\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u884c\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'fn drink(beverage: &str) {\n    // You shouldn\'t drink too much sugary beverages.\n    if beverage == "lemonade" {\n        if cfg!(panic = "abort") {\n            println!("This is not your party. Run!!!!");\n        } else {\n            println!("Spit it out!!!!");\n        }\n    } else {\n        println!("Some refreshing {} is all I need.", beverage);\n    }\n}\n\nfn main() {\n    drink("water");\n    drink("lemonade");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u662f\u53e6\u4e00\u4e2a\u91cd\u70b9\u5173\u6ce8\u91cd\u5199 drink() \u5e76\u663e\u5f0f\u4f7f\u7528 unwind \u5173\u952e\u5b57\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'#[cfg(panic = "unwind")]\nfn ah() {\n    println!("Spit it out!!!!");\n}\n\n#[cfg(not(panic = "unwind"))]\nfn ah() {\n    println!("This is not your party. Run!!!!");\n}\n\nfn drink(beverage: &str) {\n    if beverage == "lemonade" {\n        ah();\n    } else {\n        println!("Some refreshing {} is all I need.", beverage);\n    }\n}\n\nfn main() {\n    drink("water");\n    drink("lemonade");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528 abort \u6216 unwind \u4ece\u547d\u4ee4\u884c\u8bbe\u7f6e\u6050\u614c\u7b56\u7565\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"rustc  lemonade.rs -C panic=abort\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>o});var r=t(6540);const i={},a=r.createContext(i);function s(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);
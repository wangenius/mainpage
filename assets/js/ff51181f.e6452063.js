"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3991],{3965:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(4848),t=s(8453);const i={},l="\u53d8\u91cfvariable",c={id:"rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e",title:"\u53d8\u91cfvariable",description:"By default, variables are immutable.",source:"@site/docs/rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e.md",sourceDirName:"rust/\u5bf9\u8c61",slug:"/rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e",permalink:"/docs/rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/\u5bf9\u8c61/\u53d8\u91cf\u548c\u58f0\u660e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ed3\u6784\u4f53",permalink:"/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u7ed3\u6784\u4f53"},next:{title:"panic!",permalink:"/docs/rust/\u5bf9\u8c61/\u9519\u8bef\u5904\u7406"}},a={},o=[];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u53d8\u91cfvariable",children:"\u53d8\u91cfvariable"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"By default, variables are immutable."}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n  //\u9ed8\u8ba4\u4e0d\u53ef\u53d8\n    let x = 5;\n  //\u53ef\u53d8\u58f0\u660e\n    let mut y = 0;\n    println!("The value of x is: {x}");\n    x = 6;\n    println!("The value of x is: {x}");\n}//\u4e0d\u53ef\u7f16\u8bd1\n'})}),"\n",(0,r.jsx)(e.h1,{id:"\u5e38\u91cfconstant",children:"\u5e38\u91cfconstant"}),"\n",(0,r.jsx)(e.p,{children:"\u5e38\u91cf\u548c\u4e0d\u53ef\u53d8\u53d8\u91cf\u7684\u533a\u522b\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5e38\u91cf\u4e0d\u80fd\u4f7f\u7528",(0,r.jsx)(e.code,{children:"mut"}),"\uff0c\u603b\u662f\u4e0d\u53ef\u53d8"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"const"}),"\u5173\u952e\u5b57"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:["\u5fc5\u987b\u6ce8\u660e",(0,r.jsx)(e.code,{children:"type"})]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5e38\u91cf\u53ef\u4ee5\u5728\u4efb\u4f55\u4f5c\u7528\u57df\u4e2d\u58f0\u660e\uff0c\u5305\u62ec\u5168\u5c40\u4f5c\u7528\u57df\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5e38\u91cf\u53ea\u80fd\u88ab\u8bbe\u7f6e\u4e3a\u5e38\u91cf\u8868\u8fbe\u5f0f\uff0c\u800c\u4e0d\u53ef\u4ee5\u662f\u5176\u4ed6\u4efb\u4f55\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u8ba1\u7b97\u51fa\u7684\u503c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:"const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;\n//\u7f16\u8bd1\u5668\u80fd\u591f\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u4e00\u7ec4\u6709\u9650\u7684\u64cd\u4f5c\uff0c\u8fd9\u4f7f\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4ee5\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u9a8c\u8bc1\u7684\u65b9\u5f0f\u5199\u51fa\u6b64\u503c\u3002\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u58f0\u660e\u5b83\u7684\u4f5c\u7528\u57df\u4e4b\u4e2d\uff0c\u5e38\u91cf\u5728",(0,r.jsx)(e.strong,{children:"\u6574\u4e2a\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d"}),"\u90fd\u6709\u6548\uff0c\u6b64\u5c5e\u6027\u4f7f\u5f97\u5e38\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u591a\u5904\u4ee3\u7801\u4f7f\u7528\u7684\u5168\u5c40\u8303\u56f4\u7684\u503c\uff0c\u4f8b\u5982\u4e00\u4e2a\u6e38\u620f\u4e2d\u6240\u6709\u73a9\u5bb6\u53ef\u4ee5\u83b7\u53d6\u7684\u6700\u9ad8\u5206\u6216\u8005\u5149\u901f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u904d\u5e03\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u786c\u7f16\u7801\u503c\u58f0\u660e\u4e3a\u5e38\u91cf\uff0c\u80fd\u5e2e\u52a9\u540e\u6765\u7684\u4ee3\u7801\u7ef4\u62a4\u4eba\u5458\u4e86\u89e3\u503c\u7684\u610f\u56fe\u3002\u5982\u679c\u5c06\u6765\u9700\u8981\u4fee\u6539\u786c\u7f16\u7801\u503c\uff0c\u4e5f\u53ea\u9700\u4fee\u6539\u6c47\u805a\u4e8e\u4e00\u5904\u7684\u786c\u7f16\u7801\u503c\u3002"}),"\n",(0,r.jsx)(e.h1,{id:"\u9690\u85cfshadowing",children:"\u9690\u85cfshadowing"}),"\n",(0,r.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a\u4e0e\u4e4b\u524d\u53d8\u91cf\u540c\u540d\u7684\u65b0\u53d8\u91cf\u79f0\u4e3a\u7b2c\u4e00\u4e2a\u53d8\u91cf\u88ab\u7b2c\u4e8c\u4e2a",(0,r.jsx)(e.strong,{children:"\u9690\u85cf"}),"\u4e86\u3002\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u201c\u906e\u853d\u201d\u4e86\u7b2c\u4e00\u4e2a\u53d8\u91cf\uff0c\u6b64\u65f6\u4efb\u4f55\u4f7f\u7528\u8be5\u53d8\u91cf\u540d\u7684\u884c\u4e3a\u4e2d\u90fd\u4f1a\u89c6\u4e3a\u662f\u5728\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53d8\u91cf\uff0c\u76f4\u5230\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u81ea\u5df1\u4e5f\u88ab\u9690\u85cf\u6216\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u7ed3\u675f\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n    let x = 5;\n    let x = x + 1;//shadowing\n    {\n        let x = x * 2;//shadowing\n        println!("The value of x in the inner scope is: {x}");\n    }\n    println!("The value of x is: {x}");\n}\n/**\n$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31s\n     Running `target/debug/variables`\nThe value of x in the inner scope is: 12\nThe value of x is: 6\n*/\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u9690\u85cf\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u6539\u53d8\u503c\u7684\u7c7b\u578b\u3002",(0,r.jsx)(e.code,{children:"mut"}),"\u4e0d\u80fd\u6539\u53d8\u503c\u7684\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:'let spaces = "   ";//&str\u7c7b\u578b\nlet spaces = spaces.len();//usize\u7c7b\u578b \u6b63\u786e\n\nlet mut spaces = "   ";\nspaces = spaces.len();\n/**\n$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\nerror[E0308]: mismatched types\n --\x3e src/main.rs:3:14\n  |\n2 |     let mut spaces = "   ";\n  |                      ----- expected due to this value\n3 |     spaces = spaces.len();\n  |              ^^^^^^^^^^^^ expected `&str`, found `usize`\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `variables` due to previous error\n\n'})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var r=s(6540);const t={},i=r.createContext(t);function l(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);
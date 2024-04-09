"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[6999],{7438:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(4848),r=s(8453);const i={title:"\u53d8\u91cf\u548c\u5e38\u91cf",sidebar_position:1,slug:"\u53d8\u91cf\u548c\u5e38\u91cf"},l="\u53d8\u91cf\u548c\u5e38\u91cf",c={id:"lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u53d8\u91cf\u548c\u5e38\u91cf",title:"\u53d8\u91cf\u548c\u5e38\u91cf",description:"\u53d8\u91cfvariable",source:"@site/docs/lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u53d8\u91cf\u548c\u5e38\u91cf.mdx",sourceDirName:"lang/rust/\u53d8\u91cf\u548c\u58f0\u660e",slug:"/lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u53d8\u91cf\u548c\u5e38\u91cf",permalink:"/en/docs/lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u53d8\u91cf\u548c\u5e38\u91cf",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u53d8\u91cf\u548c\u5e38\u91cf.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u53d8\u91cf\u548c\u5e38\u91cf",sidebar_position:1,slug:"\u53d8\u91cf\u548c\u5e38\u91cf"},sidebar:"rust",previous:{title:"\u7f16\u8bd1",permalink:"/en/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u7f16\u8bd1"},next:{title:"\u58f0\u660e",permalink:"/en/docs/lang/rust/\u53d8\u91cf\u548c\u58f0\u660e/\u58f0\u660e"}},a={},o=[{value:"\u53d8\u91cfvariable",id:"\u53d8\u91cfvariable",level:2},{value:"\u5e38\u91cfconstant",id:"\u5e38\u91cfconstant",level:2},{value:"\u9690\u85cfshadowing",id:"\u9690\u85cfshadowing",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u53d8\u91cf\u548c\u5e38\u91cf",children:"\u53d8\u91cf\u548c\u5e38\u91cf"}),"\n",(0,t.jsx)(e.h2,{id:"\u53d8\u91cfvariable",children:"\u53d8\u91cfvariable"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd8\u53ef\u4ee5\u901a\u8fc7 const \u548c static \u5173\u952e\u5b57\u521b\u5efa\u5e38\u91cf\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728 Rust \u4e2d\uff0c\u6bcf\u4e00\u4e2a\u503c\u90fd\u5c5e\u4e8e\u67d0\u4e00\u4e2a",(0,t.jsx)(e.strong,{children:"\u6570\u636e\u7c7b\u578b"}),"\uff0c\u8fd9\u544a\u8bc9 Rust \u5b83\u88ab\u6307\u5b9a\u4e3a\u4f55\u79cd\u6570\u636e\uff0c\u4ee5\u4fbf\u660e\u786e\u6570\u636e\u5904\u7406\u65b9\u5f0f\u3002\u6211\u4eec\u5c06\u770b\u5230\u4e24\u7c7b\u6570\u636e\u7c7b\u578b\u5b50\u96c6\uff1a\u6807\u91cf\uff08scalar\uff09\u548c\u590d\u5408\uff08compound\uff09\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["Rust \u662f ",(0,t.jsx)(e.strong,{children:"\u9759\u6001\u7c7b\u578b"}),"\uff08",(0,t.jsx)(e.em,{children:"statically typed"}),"\uff09\u8bed\u8a00\uff0c\u4e5f\u5c31\u662f\u8bf4\u5728\u7f16\u8bd1\u65f6\u5c31\u5fc5\u987b\u77e5\u9053\u6240\u6709\u53d8\u91cf\u7684\u7c7b\u578b\u3002\u6839\u636e\u503c\u53ca\u5176\u4f7f\u7528\u65b9\u5f0f\uff0c\u7f16\u8bd1\u5668\u901a\u5e38\u53ef\u4ee5\u63a8\u65ad\u51fa\u6211\u4eec\u60f3\u8981\u7528\u7684\u7c7b\u578b\u3002\u5f53\u591a\u79cd\u7c7b\u578b\u5747\u6709\u53ef\u80fd\u65f6\uff0c\u6bd4\u5982\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"parse"})," \u5c06 ",(0,t.jsx)(e.code,{children:"String"})," \u8f6c\u6362\u4e3a\u6570\u5b57\u65f6\uff0c\u5fc5\u987b\u589e\u52a0\u7c7b\u578b\u6ce8\u89e3\uff0c\u50cf\u8fd9\u6837\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'let guess: u32 = "42".parse().expect("Not a number!");//correct\nlet guess = "42".parse().expect("Not a number!");//error\n/**\nerror[E0282]: type annotations needed\n --\x3e src/main.rs:2:9\n  |\n2 |     let guess = "42".parse().expect("Not a number!");\n  |         ^^^^^\n  |         |\n  |         cannot infer type for `_`\n  |         consider giving `guess` a type\n*/\n'})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"By default, variables are immutable."}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n  //\u9ed8\u8ba4\u4e0d\u53ef\u53d8\n    let x = 5;\n  //\u53ef\u53d8\u58f0\u660e\n    let mut y = 0;\n    println!("The value of x is: {x}");\n    x = 6;\n    println!("The value of x is: {x}");\n}//\u4e0d\u53ef\u7f16\u8bd1\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5e38\u91cfconstant",children:"\u5e38\u91cfconstant"}),"\n",(0,t.jsx)(e.p,{children:"Rust \u6709\u4e24\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u5e38\u91cf\uff0c\u53ef\u4ee5\u5728\u4efb\u4f55\u8303\u56f4\uff08\u5305\u62ec\u5168\u5c40\u8303\u56f4\uff09\u4e2d\u58f0\u660e\u3002\u4e24\u8005\u90fd\u9700\u8981\u663e\u5f0f\u7c7b\u578b\u6ce8\u91ca\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"const \uff1a\u4e0d\u53ef\u66f4\u6539\u7684\u503c\uff08\u5e38\u89c1\u60c5\u51b5\uff09\u3002"}),"\n",(0,t.jsx)(e.li,{children:"static \uff1a\u5177\u6709 'static \u751f\u547d\u5468\u671f\u7684\u53ef\u80fd\u53ef\u53d8\u53d8\u91cf\u3002\u9759\u6001\u751f\u547d\u5468\u671f\u662f\u63a8\u65ad\u51fa\u6765\u7684\uff0c\u4e0d\u5fc5\u6307\u5b9a\u3002\u8bbf\u95ee\u6216\u4fee\u6539\u53ef\u53d8\u9759\u6001\u53d8\u91cf\u662f unsafe \u3002"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5e38\u91cf\u548c\u4e0d\u53ef\u53d8\u53d8\u91cf\u7684\u533a\u522b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5e38\u91cf\u4e0d\u80fd\u4f7f\u7528",(0,t.jsx)(e.code,{children:"mut"}),"\uff0c\u603b\u662f\u4e0d\u53ef\u53d8"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"const"}),"\u5173\u952e\u5b57"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u5fc5\u987b\u6ce8\u660e",(0,t.jsx)(e.code,{children:"type"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5e38\u91cf\u53ef\u4ee5\u5728\u4efb\u4f55\u4f5c\u7528\u57df\u4e2d\u58f0\u660e\uff0c\u5305\u62ec\u5168\u5c40\u4f5c\u7528\u57df\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5e38\u91cf\u53ea\u80fd\u88ab\u8bbe\u7f6e\u4e3a\u5e38\u91cf\u8868\u8fbe\u5f0f\uff0c\u800c\u4e0d\u53ef\u4ee5\u662f\u5176\u4ed6\u4efb\u4f55\u53ea\u80fd\u5728\u8fd0\u884c\u65f6\u8ba1\u7b97\u51fa\u7684\u503c\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:"const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;\n//\u7f16\u8bd1\u5668\u80fd\u591f\u5728\u7f16\u8bd1\u65f6\u8ba1\u7b97\u4e00\u7ec4\u6709\u9650\u7684\u64cd\u4f5c\uff0c\u8fd9\u4f7f\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u4ee5\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u9a8c\u8bc1\u7684\u65b9\u5f0f\u5199\u51fa\u6b64\u503c\u3002\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u58f0\u660e\u5b83\u7684\u4f5c\u7528\u57df\u4e4b\u4e2d\uff0c\u5e38\u91cf\u5728",(0,t.jsx)(e.strong,{children:"\u6574\u4e2a\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u4e2d"}),"\u90fd\u6709\u6548\uff0c\u6b64\u5c5e\u6027\u4f7f\u5f97\u5e38\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u591a\u5904\u4ee3\u7801\u4f7f\u7528\u7684\u5168\u5c40\u8303\u56f4\u7684\u503c\uff0c\u4f8b\u5982\u4e00\u4e2a\u6e38\u620f\u4e2d\u6240\u6709\u73a9\u5bb6\u53ef\u4ee5\u83b7\u53d6\u7684\u6700\u9ad8\u5206\u6216\u8005\u5149\u901f\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u904d\u5e03\u4e8e\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u786c\u7f16\u7801\u503c\u58f0\u660e\u4e3a\u5e38\u91cf\uff0c\u80fd\u5e2e\u52a9\u540e\u6765\u7684\u4ee3\u7801\u7ef4\u62a4\u4eba\u5458\u4e86\u89e3\u503c\u7684\u610f\u56fe\u3002\u5982\u679c\u5c06\u6765\u9700\u8981\u4fee\u6539\u786c\u7f16\u7801\u503c\uff0c\u4e5f\u53ea\u9700\u4fee\u6539\u6c47\u805a\u4e8e\u4e00\u5904\u7684\u786c\u7f16\u7801\u503c\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u9690\u85cfshadowing",children:"\u9690\u85cfshadowing"}),"\n",(0,t.jsxs)(e.p,{children:["\u5b9a\u4e49\u4e00\u4e2a\u4e0e\u4e4b\u524d\u53d8\u91cf\u540c\u540d\u7684\u65b0\u53d8\u91cf\u79f0\u4e3a\u7b2c\u4e00\u4e2a\u53d8\u91cf\u88ab\u7b2c\u4e8c\u4e2a",(0,t.jsx)(e.strong,{children:"\u9690\u85cf"}),"\u4e86\u3002\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u201c\u906e\u853d\u201d\u4e86\u7b2c\u4e00\u4e2a\u53d8\u91cf\uff0c\u6b64\u65f6\u4efb\u4f55\u4f7f\u7528\u8be5\u53d8\u91cf\u540d\u7684\u884c\u4e3a\u4e2d\u90fd\u4f1a\u89c6\u4e3a\u662f\u5728\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53d8\u91cf\uff0c\u76f4\u5230\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u81ea\u5df1\u4e5f\u88ab\u9690\u85cf\u6216\u7b2c\u4e8c\u4e2a\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u7ed3\u675f\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n    let x = 5;\n    let x = x + 1;//shadowing\n    {\n        let x = x * 2;//shadowing\n        println!("The value of x in the inner scope is: {x}");\n    }\n    println!("The value of x is: {x}");\n}\n/**\n$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.31s\n     Running `target/debug/variables`\nThe value of x in the inner scope is: 12\nThe value of x is: 6\n*/\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u9690\u85cf\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\uff0c\u53ef\u4ee5\u6539\u53d8\u503c\u7684\u7c7b\u578b\u3002",(0,t.jsx)(e.code,{children:"mut"}),"\u4e0d\u80fd\u6539\u53d8\u503c\u7684\u7c7b\u578b\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'let spaces = "   ";//&str\u7c7b\u578b\nlet spaces = spaces.len();//usize\u7c7b\u578b \u6b63\u786e\n\nlet mut spaces = "   ";\nspaces = spaces.len();\n/**\n$ cargo run\n   Compiling variables v0.1.0 (file:///projects/variables)\nerror[E0308]: mismatched types\n --\x3e src/main.rs:3:14\n  |\n2 |     let mut spaces = "   ";\n  |                      ----- expected due to this value\n3 |     spaces = spaces.len();\n  |              ^^^^^^^^^^^^ expected `&str`, found `usize`\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `variables` due to previous error\n\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
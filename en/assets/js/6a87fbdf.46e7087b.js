"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1793],{87343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=t(74848),i=t(28453);const s={},a=void 0,l={id:"language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/\u8fed\u4ee3\u5668",title:"\u8fed\u4ee3\u5668",description:"\u5b9e\u73b0\u4e86 Iterator trait \u7684\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u5728 Rust \u4e2d\u88ab\u89c6\u4e3a\u8fed\u4ee3\u5668",source:"@site/docs/language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/\u8fed\u4ee3\u5668.md",sourceDirName:"language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305",slug:"/language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/\u8fed\u4ee3\u5668",permalink:"/en/docs/language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/\u8fed\u4ee3\u5668",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/\u8fed\u4ee3\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u95ed\u5305",permalink:"/en/docs/language/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u95ed\u5305/"}},c={},o=[{value:"\u6d88\u8d39\u8005\u9002\u914d\u5668",id:"\u6d88\u8d39\u8005\u9002\u914d\u5668",level:6},{value:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",id:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",level:6}];function d(e){const n={code:"code",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5b9e\u73b0\u4e86 Iterator trait \u7684\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u5728 Rust \u4e2d\u88ab\u89c6\u4e3a\u8fed\u4ee3\u5668"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"pub trait Iterator {\n    type Item;\n    fn next(&mut self) -> Option<Self::Item>;\n    // \u65b9\u6cd5with default implementations elided\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u96c6\u5408\u7c7b\u578b\uff0c\u4f8b\u5982 Vector\u3001Array\u3001HashSet\u3001HashMap, \u5b57\u7b26\u4e32 String \u7c7b\u578b\u867d\u7136\u4e0d\u662f\u8fed\u4ee3\u5668\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7.iter() \u548c .into_iter() \u65b9\u6cd5\uff0c\u751f\u6210\u8fed\u4ee3\u5668\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"into_iter \u4f1a\u593a\u8d70\u6240\u6709\u6743"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"iter \u662f\u501f\u7528"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"iter_mut \u662f\u53ef\u53d8\u501f\u7528"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_iter = arr.iter(); // \u501f\u7528\n    for v in arr_iter{\n        println!("{}", v) // v\u5c31\u662f\u501f\u7528\u6bcf\u4e00\u4e2a\u5143\u7d20\n    }\n}\nfn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_into_inter = arr.into_iter(); // \u5143\u7d20\u6240\u6709\u6743\u8f6c\u79fb\n    for v in arr_into_inter{\n        println!("{}", v) //\n    }\n}\nfn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_mut_iter = arr.iter_mut(); // \u53ef\u53d8\u501f\u7528\n         for v in arr_mut_iter{\n        *v += 1; // \u4fee\u6539\u501f\u7528\u5143\u7d20\u7684\u503c\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h6,{id:"\u6d88\u8d39\u8005\u9002\u914d\u5668",children:"\u6d88\u8d39\u8005\u9002\u914d\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ea\u8981\u8fed\u4ee3\u5668\u4e0a\u7684\u67d0\u4e2a\u65b9\u6cd5 ",(0,r.jsx)(n.code,{children:"A"})," \u5728\u5176\u5185\u90e8\u8c03\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"next"})," \u65b9\u6cd5\uff0c\u90a3\u4e48 ",(0,r.jsx)(n.code,{children:"A"})," \u5c31\u88ab\u79f0\u4e3a",(0,r.jsx)(n.strong,{children:"\u6d88\u8d39\u6027\u9002\u914d\u5668"}),"\uff1a\u56e0\u4e3a ",(0,r.jsx)(n.code,{children:"next"})," \u65b9\u6cd5\u4f1a\u6d88\u8017\u6389\u8fed\u4ee3\u5668\u4e0a\u7684\u5143\u7d20\uff0c\u6240\u4ee5\u65b9\u6cd5 ",(0,r.jsx)(n.code,{children:"A"})," \u7684\u8c03\u7528\u4e5f\u4f1a\u6d88\u8017\u6389\u8fed\u4ee3\u5668\u4e0a\u7684\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\nlet arr_ter = arr.iter();\nlet s:i32 = arr_ter.sum(); // \u4f1a\u628a\u8fed\u4ee3\u5668\u4e2d\u7684\u6240\u6709\u5143\u7d20\u76f8\u52a0\uff0c\u6267\u884csum\u540e\uff0c\u4f1a\u8f6c\u79fb\u6240\u6709\u7684\u5143\u7d20\u6240\u6709\u6743\n"})}),"\n",(0,r.jsx)(n.h6,{id:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",children:"\u8fed\u4ee3\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u8fed\u4ee3\u5668\u6709\u4e9b\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\uff0c\u65b9\u4fbf\u94fe\u5f0f\u8c03\u7528\uff0c\u7ed3\u5c3e\u4e00\u5b9a\u8981\u6709\u6d88\u8d39\u8005\u9002\u914d\u5668\u8fd4\u56de\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"let v1: Vec<i32> = vec![1, 2, 3];\nlet v2: Vec<_> = v1.iter().map(|x| x + 1).collect();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
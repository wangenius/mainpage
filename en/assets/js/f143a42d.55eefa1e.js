"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4170],{74704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var s=t(74848),l=t(28453);const c={},r=void 0,a={id:"language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b",title:"\u6807\u91cf\u7c7b\u578b",description:"Rust \u6807\u91cf\u7c7b\u578b\u90fd\u662f\u901a\u8fc7\u81ea\u52a8\u62f7\u8d1d\u7684\u65b9\u5f0f\u6765\u8d4b\u503c\u7684\u3002",source:"@site/docs/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b.md",sourceDirName:"language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",slug:"/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b",permalink:"/en/docs/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"Hash",permalink:"/en/docs/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash"},next:{title:"\u6cdb\u578b",permalink:"/en/docs/language/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b"}},i={},o=[{value:"\u6574\u6570int",id:"\u6574\u6570int",level:3},{value:"\u5e03\u5c14bool",id:"\u5e03\u5c14bool",level:3},{value:"\u6d6e\u70b9float",id:"\u6d6e\u70b9float",level:3},{value:"\u5b57\u7b26char",id:"\u5b57\u7b26char",level:3},{value:"&amp;T",id:"t",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Rust \u6807\u91cf\u7c7b\u578b\u90fd\u662f\u901a\u8fc7\u81ea\u52a8\u62f7\u8d1d\u7684\u65b9\u5f0f\u6765\u8d4b\u503c\u7684\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6574\u6570int",children:"\u6574\u6570int"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"fn main() {\n    let x:i32 = -32;\n    let y:u32 = 45;\n    let z:i64 = -3332;\n    let t:isize = 43;//\u5927\u5c0f\u4e0e\u8ba1\u7b97\u673a\u67b6\u6784\u76f8\u540c\n    let r:usize = 143;//\u5927\u5c0f\u4e0e\u8ba1\u7b97\u673a\u67b6\u6784\u76f8\u540c\n    //\u6574\u5f62\u5b57\u9762\u503c\n    let a = 0xff;\n    let b = 98_22;\n    let c = 0b1111_0000;\n    let d = b'A';//\u8868\u793achar A\u7684Unicode\u7f16\u7801 \u8f93\u51fa\u7528decimal\u8868\u793a\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5e03\u5c14bool",children:"\u5e03\u5c14bool"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b63\u5982\u5176\u4ed6\u5927\u90e8\u5206\u7f16\u7a0b\u8bed\u8a00\u4e00\u6837\uff0cRust \u4e2d\u7684\u5e03\u5c14\u7c7b\u578b\u6709\u4e24\u4e2a\u53ef\u80fd\u7684\u503c\uff1a",(0,s.jsx)(n.code,{children:"true"})," \u548c ",(0,s.jsx)(n.code,{children:"false"}),"\u3002Rust \u4e2d\u7684\u5e03\u5c14\u7c7b\u578b\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"bool"})," \u8868\u793a\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"fn main() {\n    let t = true;\n\n    let f: bool = false; // \u663e\u5f0f\u6307\u5b9a\u7c7b\u578b\u6ce8\u89e3\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6d6e\u70b9float",children:"\u6d6e\u70b9float"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"fn main() {\n    let x = 2.0; // f64 \u53cc\u7cbe\u5ea6\n\n    let y: f32 = 3.0; // f32 \u5355\u7cbe\u5ea6\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b57\u7b26char",children:"\u5b57\u7b26char"}),"\n",(0,s.jsxs)(n.p,{children:["\u76ee\u524d\u4e3a\u6b62\u53ea\u4f7f\u7528\u5230\u4e86\u6570\u5b57\uff0c\u4e0d\u8fc7 Rust \u4e5f\u652f\u6301\u5b57\u6bcd\u3002Rust \u7684 ",(0,s.jsx)(n.code,{children:"char"})," \u7c7b\u578b\u662f\u8bed\u8a00\u4e2d\u6700\u539f\u751f\u7684\u5b57\u6bcd\u7c7b\u578b\uff0c\u5982\u4e0b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528\u5b83\u3002\uff08\u6ce8\u610f ",(0,s.jsx)(n.code,{children:"char"})," \u7531\u5355\u5f15\u53f7\u6307\u5b9a\uff0c\u4e0d\u540c\u4e8e\u5b57\u7b26\u4e32\u4f7f\u7528\u53cc\u5f15\u53f7\u3002\uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"fn main() {\n    let c = 'z';\n    let z = '\u2124';\n    let heart_eyed_cat = '\ud83d\ude3b';\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Rust \u7684 ",(0,s.jsx)(n.code,{children:"char"})," \u7c7b\u578b\u7684\u5927\u5c0f\u4e3a\u56db\u4e2a\u5b57\u8282(four bytes)\uff0c\u5e76\u4ee3\u8868\u4e86\u4e00\u4e2a Unicode \u6807\u91cf\u503c\uff08Unicode Scalar Value\uff09\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u53ef\u4ee5\u6bd4 ASCII \u8868\u793a\u66f4\u591a\u5185\u5bb9\u3002\u5728 Rust \u4e2d\uff0c\u62fc\u97f3\u5b57\u6bcd\uff08Accented letters\uff09\uff0c\u4e2d\u6587\u3001\u65e5\u6587\u3001\u97e9\u6587\u7b49\u5b57\u7b26\uff0cemoji\uff08\u7ed8\u6587\u5b57\uff09\u4ee5\u53ca\u96f6\u957f\u5ea6\u7684\u7a7a\u767d\u5b57\u7b26\u90fd\u662f\u6709\u6548\u7684 ",(0,s.jsx)(n.code,{children:"char"})," \u503c\u3002Unicode \u6807\u91cf\u503c\u5305\u542b\u4ece ",(0,s.jsx)(n.code,{children:"U+0000"})," \u5230 ",(0,s.jsx)(n.code,{children:"U+D7FF"})," \u548c ",(0,s.jsx)(n.code,{children:"U+E000"})," \u5230 ",(0,s.jsx)(n.code,{children:"U+10FFFF"})," \u5728\u5185\u7684\u503c\u3002\u4e0d\u8fc7\uff0c\u201c\u5b57\u7b26\u201d \u5e76\u4e0d\u662f\u4e00\u4e2a Unicode \u4e2d\u7684\u6982\u5ff5\uff0c\u6240\u4ee5\u4eba\u76f4\u89c9\u4e0a\u7684 \u201c\u5b57\u7b26\u201d \u53ef\u80fd\u4e0e Rust \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"char"})," \u5e76\u4e0d\u7b26\u5408\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"t",children:"&T"}),"\n",(0,s.jsx)(n.p,{children:"\u6bd4\u5982&str\uff0c&[T]\u7b49"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const l={},c=s.createContext(l);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3712],{91564:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var s=e(74848),r=e(28453);const i={title:"\u6cdb\u578b",sidebar_position:2,slug:"\u6cdb\u578b"},o="\u6cdb\u578b",a={id:"lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",title:"\u6cdb\u578b",description:"Rust \u662f\u5728\u7f16\u8bd1\u671f\u4e3a\u6cdb\u578b\u5bf9\u5e94\u7684\u591a\u4e2a\u7c7b\u578b\uff0c\u751f\u6210\u5404\u81ea\u7684\u4ee3\u7801\uff0c(\u76f8\u5f53\u4e8e\u7f16\u8bd1\u5668\u5e2e\u4f60\u5199\u4e86\u591a\u4efd\u4ee3\u7801)\uff0c\u56e0\u6b64\u635f\u5931\u4e86\u7f16\u8bd1\u901f\u5ea6\u548c\u589e\u5927\u4e86\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u5bf9\u6027\u80fd\u4e0d\u5f71\u54cd\u3002",source:"@site/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b.mdx",sourceDirName:"lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",slug:"/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6cdb\u578b",sidebar_position:2,slug:"\u6cdb\u578b"},sidebar:"rust",previous:{title:"\u503c\u548c\u7c7b\u578b",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/"},next:{title:"\u590d\u5408\u7c7b\u578b",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/"}},c={},u=[];function l(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u6cdb\u578b",children:"\u6cdb\u578b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'fn add<T>(a:T, b:T)->T{ \n    a+b  // \u7f16\u8bd1\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u4e0d\u662f\u6240\u6709\u7684\u7c7b\u578b\u90fd\u80fd\u76f8\u52a0\uff0c\u9700\u8981\u4f7f\u7528trait\u5bf9T\u8fdb\u884c\u9650\u5236,\u6211\u4eec\u79f0\u4e4b\u4e3a\u7279\u5f81\u7ea6\u675f\n}\n\nstruct Point<T,U> { // struct\u4e2d\u4f7f\u7528\u6cdb\u578b\n    x: T,\n    y: U,\n}\nimpl<T,U> Point<T,U> { // \u7ed9\u6cdb\u578bstruct\u6dfb\u52a0method\n    fn new(x: T, y: U) -> Point<T,U> {\n        Point {\n            x,\n            y\n        }\n    }\n}\nfn main() {\n  let res = add(1,2); // \u5bf9a\u8d4b\u503c\u65f6\uff0cT\u5c31\u88ab\u786e\u5b9a\u4e3a\u6574\u6570\u7c7b\u578b\n  print!("a+b={}", res);\n}\n'})}),"\n",(0,s.jsx)(t.h1,{id:"\u6027\u80fd",children:"\u6027\u80fd"}),"\n",(0,s.jsx)(t.p,{children:"Rust \u662f\u5728\u7f16\u8bd1\u671f\u4e3a\u6cdb\u578b\u5bf9\u5e94\u7684\u591a\u4e2a\u7c7b\u578b\uff0c\u751f\u6210\u5404\u81ea\u7684\u4ee3\u7801\uff0c(\u76f8\u5f53\u4e8e\u7f16\u8bd1\u5668\u5e2e\u4f60\u5199\u4e86\u591a\u4efd\u4ee3\u7801)\uff0c\u56e0\u6b64\u635f\u5931\u4e86\u7f16\u8bd1\u901f\u5ea6\u548c\u589e\u5927\u4e86\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u5bf9\u6027\u80fd\u4e0d\u5f71\u54cd\u3002"})]})}function d(n={}){const{wrapper:t}={...(0,r.R)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}},28453:(n,t,e)=>{e.d(t,{R:()=>o,x:()=>a});var s=e(96540);const r={},i=s.createContext(r);function o(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);
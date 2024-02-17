"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[3953],{6517:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=e(4848),s=e(8453);const o={},i="\u6027\u80fd",c={id:"rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",title:"\u6cdb\u578b",description:"Rust \u662f\u5728\u7f16\u8bd1\u671f\u4e3a\u6cdb\u578b\u5bf9\u5e94\u7684\u591a\u4e2a\u7c7b\u578b\uff0c\u751f\u6210\u5404\u81ea\u7684\u4ee3\u7801\uff0c(\u76f8\u5f53\u4e8e\u7f16\u8bd1\u5668\u5e2e\u4f60\u5199\u4e86\u591a\u4efd\u4ee3\u7801)\uff0c\u56e0\u6b64\u635f\u5931\u4e86\u7f16\u8bd1\u901f\u5ea6\u548c\u589e\u5927\u4e86\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u5bf9\u6027\u80fd\u4e0d\u5f71\u54cd\u3002",source:"@site/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b.md",sourceDirName:"rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b",slug:"/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",permalink:"/en/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6cdb\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6807\u91cf\u7c7b\u578b",permalink:"/en/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b"},next:{title:"\u7ed3\u6784\u4f53",permalink:"/en/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u7ed3\u6784\u4f53"}},u={},a=[];function d(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'fn add<T>(a:T, b:T)->T{ \n    a+b  // \u7f16\u8bd1\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u4e0d\u662f\u6240\u6709\u7684\u7c7b\u578b\u90fd\u80fd\u76f8\u52a0\uff0c\u9700\u8981\u4f7f\u7528trait\u5bf9T\u8fdb\u884c\u9650\u5236,\u6211\u4eec\u79f0\u4e4b\u4e3a\u7279\u5f81\u7ea6\u675f\n}\n\nstruct Point<T,U> { // struct\u4e2d\u4f7f\u7528\u6cdb\u578b\n    x: T,\n    y: U,\n}\nimpl<T,U> Point<T,U> { // \u7ed9\u6cdb\u578bstruct\u6dfb\u52a0method\n    fn new(x: T, y: U) -> Point<T,U> {\n        Point {\n            x,\n            y\n        }\n    }\n}\nfn main() {\n  let res = add(1,2); // \u5bf9a\u8d4b\u503c\u65f6\uff0cT\u5c31\u88ab\u786e\u5b9a\u4e3a\u6574\u6570\u7c7b\u578b\n  print!("a+b={}", res);\n}\n'})}),"\n",(0,r.jsx)(n.h1,{id:"\u6027\u80fd",children:"\u6027\u80fd"}),"\n",(0,r.jsx)(n.p,{children:"Rust \u662f\u5728\u7f16\u8bd1\u671f\u4e3a\u6cdb\u578b\u5bf9\u5e94\u7684\u591a\u4e2a\u7c7b\u578b\uff0c\u751f\u6210\u5404\u81ea\u7684\u4ee3\u7801\uff0c(\u76f8\u5f53\u4e8e\u7f16\u8bd1\u5668\u5e2e\u4f60\u5199\u4e86\u591a\u4efd\u4ee3\u7801)\uff0c\u56e0\u6b64\u635f\u5931\u4e86\u7f16\u8bd1\u901f\u5ea6\u548c\u589e\u5927\u4e86\u6700\u7ec8\u751f\u6210\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u5bf9\u6027\u80fd\u4e0d\u5f71\u54cd\u3002"})]})}function l(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,r.jsx)(n,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>i,x:()=>c});var r=e(6540);const s={},o=r.createContext(s);function i(t){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),r.createElement(o.Provider,{value:n},t.children)}}}]);
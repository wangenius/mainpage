"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[6374],{173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var s=t(4848),r=t(8453);const i={},l=void 0,o={id:"rust/Rust",title:"Rust",description:"\u4e00\u4e2a HTTP Server \u5185\u90e8\u5305\u62ec\u5f88\u591a\u90e8\u5206\uff1a\u534f\u8bae\u5b9e\u73b0\uff08h1\u3001h2\u3001\u538b\u7f29\u7b49\uff09\u3001\u8fde\u63a5\u72b6\u6001\u7ba1\u7406\uff08keepalive\uff09\u3001\u8bf7\u6c42\u5206\u53d1\u3001\u4e2d\u95f4\u4ef6\u3001\u4e1a\u52a1\u903b\u8f91\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u5168\u90e8\u81ea\u884c\u5b9e\u73b0\uff0c\u4f46\u5176\u5b9e\u9664\u4e86\u4e1a\u52a1\u903b\u8f91\u4e4b\u5916\u7684\u90e8\u5206\u90fd\u662f\u8f83\u4e3a\u901a\u7528\u7684\u80fd\u529b\u3002\u6211\u4eec\u5c06\u8fd9\u4e9b\u901a\u7528\u80fd\u529b\u4e0e\u7528\u6237\u7684\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\uff0c\u5373 HTTP \u6846\u67b6\u3002",source:"@site/docs/rust/Rust.mdx",sourceDirName:"rust",slug:"/rust/",permalink:"/en/docs/rust/",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/Rust.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PowerShell",permalink:"/en/docs/Windows/Powershell"},next:{title:"\u6a21\u5757\u7cfb\u7edf",permalink:"/en/docs/rust/\u6a21\u5757\u7cfb\u7edf/"}},d={},u=[{value:"cross-rs",id:"cross-rs",level:2},{value:"Handler\u62bd\u8c61",id:"handler\u62bd\u8c61",level:2},{value:"\u7b80\u5355\u8def\u7531",id:"\u7b80\u5355\u8def\u7531",level:3},{value:"\u7528\u6237\u63a5\u53e3",id:"\u7528\u6237\u63a5\u53e3",level:3},{value:"\u5171\u4eab\u72b6\u6001",id:"\u5171\u4eab\u72b6\u6001",level:2},{value:"\u8def\u7531",id:"\u8def\u7531",level:2},{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",level:2}];function c(e){const n={h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4e00\u4e2a HTTP Server \u5185\u90e8\u5305\u62ec\u5f88\u591a\u90e8\u5206\uff1a\u534f\u8bae\u5b9e\u73b0\uff08h1\u3001h2\u3001\u538b\u7f29\u7b49\uff09\u3001\u8fde\u63a5\u72b6\u6001\u7ba1\u7406\uff08keepalive\uff09\u3001\u8bf7\u6c42\u5206\u53d1\u3001\u4e2d\u95f4\u4ef6\u3001\u4e1a\u52a1\u903b\u8f91\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u5168\u90e8\u81ea\u884c\u5b9e\u73b0\uff0c\u4f46\u5176\u5b9e\u9664\u4e86\u4e1a\u52a1\u903b\u8f91\u4e4b\u5916\u7684\u90e8\u5206\u90fd\u662f\u8f83\u4e3a\u901a\u7528\u7684\u80fd\u529b\u3002\u6211\u4eec\u5c06\u8fd9\u4e9b\u901a\u7528\u80fd\u529b\u4e0e\u7528\u6237\u7684\u4e1a\u52a1\u903b\u8f91\u89e3\u8026\uff0c\u5373 HTTP \u6846\u67b6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e Rust \u751f\u6001\u4e2d hyper \u5df2\u7ecf\u63d0\u4f9b\u4e86\u8f83\u4e3a\u5b8c\u5907\u7684 HTTP \u534f\u8bae\u5b9e\u73b0\uff0c\u57fa\u4e8e hyper \u5b9e\u73b0 HTTP \u6846\u67b6\u5c31\u53ea\u9700\u8981\u63d0\u4f9b\u5305\u62ec\u8def\u7531\u3001\u5171\u4eab\u72b6\u6001\u3001\u4e2d\u95f4\u4ef6\u7b49\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u4ece HTTP \u6846\u67b6\u7684\u8bbe\u8ba1\u89d2\u5ea6\uff0c\u4ee5\u65b0\u7248\u672c Axum \u4f5c\u4e3a\u4f8b\u5b50\uff0c\u5206\u6790 Rust \u4e0b HTTP \u6846\u67b6\u5982\u4f55\u63d0\u4f9b\u5408\u7406\u62bd\u8c61\u4e0e\u7c7b\u578b\u7ea6\u675f\u3002\u57fa\u4e8e Rust \u5f3a\u5927\u7684\u7c7b\u578b\u7cfb\u7edf\uff0c\u6211\u4eec\u53ef\u4ee5\u5199\u51fa\u9ad8\u6548\u4e14\u6b63\u786e\u7684\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"cross-rs",children:"cross-rs"}),"\n",(0,s.jsx)(n.h2,{id:"handler\u62bd\u8c61",children:"Handler\u62bd\u8c61"}),"\n",(0,s.jsx)(n.h3,{id:"\u7b80\u5355\u8def\u7531",children:"\u7b80\u5355\u8def\u7531"}),"\n",(0,s.jsx)(n.h3,{id:"\u7528\u6237\u63a5\u53e3",children:"\u7528\u6237\u63a5\u53e3"}),"\n",(0,s.jsx)(n.h2,{id:"\u5171\u4eab\u72b6\u6001",children:"\u5171\u4eab\u72b6\u6001"}),"\n",(0,s.jsx)(n.h2,{id:"\u8def\u7531",children:"\u8def\u7531"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6",children:"\u4e2d\u95f4\u4ef6"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
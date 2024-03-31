"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3397],{2652:(r,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var n=e(4848),s=e(8453);const d={title:"array",sidebar_position:1.5,slug:"array"},c="array",i={id:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array",title:"array",description:"array \u662f\u56fa\u5b9a\u5927\u5c0f\u7684\u987a\u5e8f\u5bb9\u5668\uff0c\u5b83\u4eec\u4fdd\u5b58\u4e86\u4e00\u4e2a\u4ee5\u4e25\u683c\u7684\u7ebf\u6027\u987a\u5e8f\u6392\u5217\u7684\u7279\u5b9a\u6570\u91cf\u7684\u5143\u7d20\u3002",source:"@site/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array.mdx",sourceDirName:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL",slug:"/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/array.mdx",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{title:"array",sidebar_position:1.5,slug:"array"},sidebar:"cpp",previous:{title:"\u6807\u51c6\u5e93",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u6807\u51c6\u5e93"},next:{title:"vector",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/vector"}},l={},a=[];function h(r){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...r.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"array",children:"array"}),"\n",(0,n.jsx)(t.p,{children:"array \u662f\u56fa\u5b9a\u5927\u5c0f\u7684\u987a\u5e8f\u5bb9\u5668\uff0c\u5b83\u4eec\u4fdd\u5b58\u4e86\u4e00\u4e2a\u4ee5\u4e25\u683c\u7684\u7ebf\u6027\u987a\u5e8f\u6392\u5217\u7684\u7279\u5b9a\u6570\u91cf\u7684\u5143\u7d20\u3002"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u65b9\u6cd5"}),(0,n.jsx)(t.th,{children:"\u542b\u4e49"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"begin"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u7684\u7406\u8bba\u5143\u7d20\u7684\u8fed\u4ee3\u5668"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rbegin"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u53cd\u5411\u8fed\u4ee3\u5668"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"rend"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u4e00\u4e2a\u53cd\u5411\u8fed\u4ee3\u5668\uff0c\u6307\u5411\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u7684\u7406\u8bba\u5143\u7d20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cbegin"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5e38\u91cf\u8fed\u4ee3\u5668\uff08const_iterator\uff09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"cend"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u7684\u7406\u8bba\u5143\u7d20\u7684\u5e38\u91cf\u8fed\u4ee3\u5668\uff08const_iterator\uff09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"crbegin"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668\uff08const_reverse_iterator\uff09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"crend"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e4b\u524d\u7684\u7406\u8bba\u5143\u7d20\u7684\u5e38\u91cf\u53cd\u5411\u8fed\u4ee3\u5668\uff08const_reverse_iterator\uff09"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"size"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6570\u7ec4\u5bb9\u5668\u4e2d\u5143\u7d20\u7684\u6570\u91cf"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_size"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6570\u7ec4\u5bb9\u5668\u53ef\u5bb9\u7eb3\u7684\u6700\u5927\u5143\u7d20\u6570"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"empty"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u6570\u7ec4\u5bb9\u5668\u662f\u5426\u4e3a\u7a7a"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"operator[]"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u5bb9\u5668\u4e2d\u7b2c n\uff08\u53c2\u6570\uff09\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"at"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u5bb9\u5668\u4e2d\u7b2c n\uff08\u53c2\u6570\uff09\u4e2a\u4f4d\u7f6e\u7684\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"front"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u5bf9\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"back"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u5bf9\u5bb9\u5668\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u5f15\u7528"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"\u8fd4\u56de\u6307\u5411\u5bb9\u5668\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u6307\u9488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fill"}),(0,n.jsx)(t.td,{children:"\u7528 val\uff08\u53c2\u6570\uff09\u586b\u5145\u6570\u7ec4\u6240\u6709\u5143\u7d20"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"swap"}),(0,n.jsx)(t.td,{children:"\u901a\u8fc7 x\uff08\u53c2\u6570\uff09\u7684\u5185\u5bb9\u4ea4\u6362\u6570\u7ec4\u7684\u5185\u5bb9"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"get\uff08array\uff09"}),(0,n.jsxs)(t.td,{children:["\u5f62\u5982 ",(0,n.jsx)(t.code,{children:"std::get<0>(myarray)"}),"\uff1b\u4f20\u5165\u4e00\u4e2a\u6570\u7ec4\u5bb9\u5668\uff0c\u8fd4\u56de\u6307\u5b9a\u4f4d\u7f6e\u5143\u7d20\u7684\u5f15\u7528"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"relational operators (array)"}),(0,n.jsxs)(t.td,{children:["\u5f62\u5982 ",(0,n.jsx)(t.code,{children:"arrayA > arrayB"}),"\uff1b\u4f9d\u6b64\u6bd4\u8f83\u6570\u7ec4\u6bcf\u4e2a\u5143\u7d20\u7684\u5927\u5c0f\u5173\u7cfb"]})]})]})]})]})}function x(r={}){const{wrapper:t}={...(0,s.R)(),...r.components};return t?(0,n.jsx)(t,{...r,children:(0,n.jsx)(h,{...r})}):h(r)}},8453:(r,t,e)=>{e.d(t,{R:()=>c,x:()=>i});var n=e(6540);const s={},d=n.createContext(s);function c(r){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof r?r(t):{...t,...r}}),[t,r])}function i(r){let t;return t=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:c(r.components),n.createElement(d.Provider,{value:t},r.children)}}}]);
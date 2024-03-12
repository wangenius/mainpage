"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[9154],{32372:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=t(74848),i=t(28453);const r={title:"queue",sidebar_position:4,slug:"queue"},c="queue",d={id:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/queue",title:"queue",description:"queues are a type of container adaptor, specifically designed to operate in a FIFO context (first-in first-out), where elements are inserted into one end of the container and extracted from the other.",source:"@site/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/queue.mdx",sourceDirName:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668",slug:"/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/queue",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/queue",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/queue.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"queue",sidebar_position:4,slug:"queue"},sidebar:"cpp",previous:{title:"stack",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/stack"},next:{title:"deque",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/deque"}},l={},o=[{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"\u8d4b\u503c",id:"\u8d4b\u503c",level:3},{value:"\u5b58\u53d6",id:"\u5b58\u53d6",level:3},{value:"\u5927\u5c0f\u64cd\u4f5c",id:"\u5927\u5c0f\u64cd\u4f5c",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"queue",children:"queue"}),"\n",(0,s.jsx)(n.p,{children:"queues are a type of container adaptor, specifically designed to operate in a FIFO context (first-in first-out), where elements are inserted into one end of the container and extracted from the other."}),"\n",(0,s.jsx)(n.p,{children:'queues are implemented as containers adaptors, which are classes that use an encapsulated object of a specific container class as its underlying container, providing a specific set of member functions to access its elements. Elements are pushed into the "back" of the specific container and popped from its "front".'}),"\n",(0,s.jsx)(n.p,{children:"The underlying container may be one of the standard container class template or some other specifically designed container class. This underlying container shall support at least the following operations:\nqueue \u662f\u4e00\u79cd\u5148\u8fdb\u5148\u51fa(First In First Out, FIFO)\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u6709\u4e24\u4e2a\u51fa\u53e3\uff0cqueue\u5bb9\u5668\u5141\u8bb8\u4ece\u4e00\u7aef\u65b0\u589e\u5143\u7d20\uff0c\u4ece\u53e6\u4e00\u7aef\u79fb\u9664\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"success",children:(0,s.jsx)(n.p,{children:"\u53ea\u6709queue\u7684\u9876\u7aef\u5143\u7d20\uff0c\u624d\u6709\u673a\u4f1a\u88ab\u5916\u754c\u53bb\u7528\u3002queue\u4e0d\u63d0\u4f9b\u904d\u5386\u529f\u80fd\uff0c\u4e5f\u4e0d\u63d0\u4f9b\u8fed\u4ee3\u5668\u3002"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"empty"}),"\n",(0,s.jsx)(n.li,{children:"size"}),"\n",(0,s.jsx)(n.li,{children:"front,"}),"\n",(0,s.jsx)(n.li,{children:"back"}),"\n",(0,s.jsx)(n.li,{children:"push_back"}),"\n",(0,s.jsx)(n.li,{children:"pop_front"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"member function"}),(0,s.jsx)(n.th,{children:"definition"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"(constructor)"}),(0,s.jsx)(n.td,{children:"Construct queue"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"empty"}),(0,s.jsx)(n.td,{children:"Test whether container is empty"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"size"}),(0,s.jsx)(n.td,{children:"Return size"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"front"}),(0,s.jsx)(n.td,{children:"Access next element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"back"}),(0,s.jsx)(n.td,{children:"Access last element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"push"}),(0,s.jsx)(n.td,{children:"Insert element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"emplace"}),(0,s.jsx)(n.td,{children:"Construct and insert element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pop"}),(0,s.jsx)(n.td,{children:"Remove next element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"swap"}),(0,s.jsx)(n.td,{children:"Swap contents"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,s.jsx)(n.h3,{id:"\u8d4b\u503c",children:"\u8d4b\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"queue<T> queT; // queue\u5bf9\u8c61\u7684\u9ed8\u8ba4\u6784\u9020\u51fd\u6570\u5f62\u5f0f\uff0c\u91c7\u7528\u6a21\u7248\u7c7b\u5b9e\u73b0\nqueue(const queue& que); // \u62f7\u8d1d\u6784\u9020\u51fd\u6570\n\nqueue& operator=(const queue& que); // \u91cd\u8f7d\u8d4b\u503c\u64cd\u4f5c\u7b26\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b58\u53d6",children:"\u5b58\u53d6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void push(T elem); // \u5f80\u961f\u5c3e\u6dfb\u52a0\u5143\u7d20\nvoid pop(); // \u4ece\u961f\u5934\u79fb\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\nT& back(); // \u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u5143\u7d20\nT& front(); // \u8fd4\u56de\u7b2c\u4e00\u4e2a\u5143\u7d20\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5927\u5c0f\u64cd\u4f5c",children:"\u5927\u5c0f\u64cd\u4f5c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"bool empty(); // \u5224\u65ad\u961f\u5217\u662f\u5426\u4e3a\u7a7a\nint size(); // \u8fd4\u56de\u961f\u5217\u7684\u5927\u5c0f\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
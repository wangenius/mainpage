"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[2330],{54281:(n,e,p)=>{p.r(e),p.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=p(74848),r=p(28453);const s={title:"map",sidebar_position:7,slug:"map"},i="map",a={id:"lang/cpp/STL/\u5bb9\u5668/map",title:"map",description:"std\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3amap\u7684\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811(\u7ea2\u9ed1\u6811)",source:"@site/docs/lang/cpp/STL/\u5bb9\u5668/map.mdx",sourceDirName:"lang/cpp/STL/\u5bb9\u5668",slug:"/lang/cpp/STL/\u5bb9\u5668/map",permalink:"/docs/lang/cpp/STL/\u5bb9\u5668/map",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/STL/\u5bb9\u5668/map.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"map",sidebar_position:7,slug:"map"},sidebar:"cpp",previous:{title:"priority_queue",permalink:"/docs/lang/cpp/STL/\u5bb9\u5668/priority_queue"},next:{title:"set",permalink:"/docs/lang/cpp/STL/\u5bb9\u5668/set"}},o={},c=[{value:"unordered_map",id:"unordered_map",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"map",children:"map"}),"\n",(0,t.jsx)(e.p,{children:"std\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3amap\u7684\u5e73\u8861\u4e8c\u53c9\u641c\u7d22\u6811(\u7ea2\u9ed1\u6811)"}),"\n",(0,t.jsx)(e.p,{children:"\u4e5f\u88ab\u79f0\u4e3a\u5173\u8054\u6570\u7ec4\u6216\u5b57\u5178."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'map<string,int> phone_book{\n    {"xiao ming",123},\n        {"li yuan fang",223},\n    {"liu bai",339547674124}\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"map\u652f\u6301\u4e0b\u6807\u64cd\u4f5c, \u7ed9\u5b9a\u4e0b\u6807\u503c\u5e94\u8be5\u662fmap\u7684\u7b2c\u4e00\u4e2a\u7c7b\u578b(\u79f0\u4e3a\u5173\u952e\u5b57key),\u5f97\u5230\u7684\u7ed3\u679c\u662f\u4e0e\u5173\u952e\u5b57\u5173\u8054\u7684\u503c(map\u7684\u503c\u6216\u8005\u6620\u5c04\u7c7b\u578b)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"int get_num(const string& s){\n    return phone_book[s];\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6362\u53e5\u8bdd,\u5bf9map\u8fdb\u884c\u4e0b\u6807\u64cd\u4f5c\u672c\u8d28\u4e0a\u662f\u8fdb\u884c\u4e00\u6b21\u641c\u7d22, \u5982\u679c\u672a\u80fd\u627e\u5230key,\u5219\u5411map\u63d2\u5165\u4e00\u4e2a\u65b0\u5143\u7d20."}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u907f\u514d\u8bb2\u4e00\u4e2a\u65e0\u6548\u7535\u8bdd\u53f7\u7801\u6dfb\u52a0\u5230\u7535\u8bdd\u7c3f\u4e2d,\u5c31\u5e94\u8be5\u4f7f\u7528find()\u548cinsert()\u6765\u4ee3\u66ff",(0,t.jsx)(e.code,{children:"[]"}),";"]}),"\n",(0,t.jsx)(e.p,{children:"\u7528\u4e8e\u9700\u8981\u6839\u636e\u5173\u952e\u5b57\u6765\u8bbf\u95ee\u5143\u7d20\u7684\u573a\u5408\u3002\u5bb9\u5668\u4e2d\u6bcf\u4e2a\u5143\u7d20\u662f\u4e00\u4e2apair\u7ed3\u6784\u7c7b\u578b\uff0c\u8be5\u7ed3\u6784\u6709\u4e24\u4e2a\u6210\u5458\uff1afirst\u548csecond\uff0c\u5173\u952e\u5b57\u5bf9\u5e94first\uff0c\u503c\u5bf9\u5e94second\uff0c\u5143\u7d20\u662f\u6839\u636e\u5176\u5173\u952e\u5b57\u6392\u5e8f\u7684\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8emap\uff0c\u4e0d\u540c\u5143\u7d20\u7684\u5173\u952e\u5b57\u4e0d\u80fd\u76f8\u540c\uff1b"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8emultimap\uff0c\u4e0d\u540c\u5143\u7d20\u7684\u5173\u952e\u5b57\u53ef\u4ee5\u76f8\u540c\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5b83\u4eec\u5728\u5934\u6587\u4ef6map\u4e2d\u5b9a\u4e49\uff0c\u5e38\u5e38\u7528\u67d0\u79cd\u4e8c\u53c9\u6811\u6765\u5b9e\u73b0\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6709\u65f6\u5019\u6211\u4eec\u4e0d\u9700\u8981\u6392\u5e8f\uff0c\u6240\u4ee5\u5728C++11\u6807\u51c6\u4e2d\u65b0\u589e\u52a0\u4e86unordered_map"}),"\n",(0,t.jsx)(e.p,{children:"\u548cunordered_multimap\u5bb9\u5668\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"unordered_map",children:"unordered_map"}),"\n",(0,t.jsx)(e.p,{children:"\u641c\u7d22map\u7684\u65f6\u95f4\u4ee3\u4ef7\u662fo(log n), n\u662fmap\u4e2d\u5143\u7d20\u7684\u6570\u76ee. \u901a\u5e38\u60c5\u51b5\u4e0b\u8fd9\u6837\u7684\u6027\u80fd\u975e\u5e38\u597d."}),"\n",(0,t.jsx)(e.p,{children:"unordered_map\u662f\u54c8\u5e0c\u8868."})]})}function l(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,p)=>{p.d(e,{R:()=>i,x:()=>a});var t=p(96540);const r={},s=t.createContext(r);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);
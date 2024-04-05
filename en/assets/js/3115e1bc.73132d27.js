"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[8198],{2995:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=n(4848),o=n(8453);const r={title:"\u56de\u6587\u4e32",sidebar_position:3,slug:"\u56de\u6587\u4e32"},i="\u56de\u6587\u4e32",l={id:"dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32",title:"\u56de\u6587\u4e32",description:"\u5982\u679c\u5728\u5c06\u6240\u6709\u5927\u5199\u5b57\u7b26\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u7b26\u3001\u5e76\u79fb\u9664\u6240\u6709\u975e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u4e4b\u540e\uff0c\u77ed\u8bed\u6b63\u7740\u8bfb\u548c\u53cd\u7740\u8bfb\u90fd\u4e00\u6837\u3002\u5219\u53ef\u4ee5\u8ba4\u4e3a\u8be5\u77ed\u8bed\u662f\u4e00\u4e2a \u56de\u6587\u4e32 \u3002",source:"@site/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32.mdx",sourceDirName:"dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173",slug:"/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32",permalink:"/en/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u56de\u6587\u4e32",sidebar_position:3,slug:"\u56de\u6587\u4e32"},sidebar:"leetcode",previous:{title:"search",permalink:"/en/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/search"},next:{title:"TopK",permalink:"/en/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK"}},c={},a=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\u56de\u6587\u4e32",children:"\u56de\u6587\u4e32"}),"\n",(0,s.jsx)(t.p,{children:"\u5982\u679c\u5728\u5c06\u6240\u6709\u5927\u5199\u5b57\u7b26\u8f6c\u6362\u4e3a\u5c0f\u5199\u5b57\u7b26\u3001\u5e76\u79fb\u9664\u6240\u6709\u975e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u4e4b\u540e\uff0c\u77ed\u8bed\u6b63\u7740\u8bfb\u548c\u53cd\u7740\u8bfb\u90fd\u4e00\u6837\u3002\u5219\u53ef\u4ee5\u8ba4\u4e3a\u8be5\u77ed\u8bed\u662f\u4e00\u4e2a \u56de\u6587\u4e32 \u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5b57\u6bcd\u548c\u6570\u5b57\u90fd\u5c5e\u4e8e\u5b57\u6bcd\u6570\u5b57\u5b57\u7b26\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s\uff0c\u5982\u679c\u5b83\u662f \u56de\u6587\u4e32 \uff0c\u8fd4\u56de true \uff1b\u5426\u5219\uff0c\u8fd4\u56de false \u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cpp",children:"class Solution\n{\npublic:\n    bool isPalindrome(string s)\n    {\n        int left = -1, right = s.size();\n        while (left < right)\n        {\n            ++left, --right;\n            while (left < right && !isalnum(s[left]))\n            {\n                left++;\n            }\n            while (left < right && !isalnum(s[right]))\n            {\n                right--;\n            }\n            if (!(tolower(s[left]) == tolower(s[right])))\n            {\n                return false;\n            }\n        };\n        return true;\n    }\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
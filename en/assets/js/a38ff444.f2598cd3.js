"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[2235],{1488:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=t(74848),s=t(28453);const r={},o="\u52a8\u6001\u89c4\u5212",c={id:"dsa/leetcode/\u52a8\u6001\u89c4\u5212",title:"\u52a8\u6001\u89c4\u5212",description:"\u722c\u697c\u68af",source:"@site/docs/dsa/leetcode/\u52a8\u6001\u89c4\u5212.mdx",sourceDirName:"dsa/leetcode",slug:"/dsa/leetcode/\u52a8\u6001\u89c4\u5212",permalink:"/en/docs/dsa/leetcode/\u52a8\u6001\u89c4\u5212",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u52a8\u6001\u89c4\u5212.mdx",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",next:{title:"\u516c\u5171\u5b57\u6bb5",permalink:"/en/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u516c\u5171\u5b57\u6bb5"}},d={},l=[{value:"\u722c\u697c\u68af",id:"\u722c\u697c\u68af",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u52a8\u6001\u89c4\u5212",children:"\u52a8\u6001\u89c4\u5212"}),"\n",(0,i.jsx)(e.h2,{id:"\u722c\u697c\u68af",children:"\u722c\u697c\u68af"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5b9e\u662f\u4e00\u79cd\u6570\u5b66\u5f52\u7eb3\u6cd5."}),"\n",(0,i.jsxs)(e.admonition,{title:"\u9898\u76ee 70",type:"success",children:[(0,i.jsx)(e.p,{children:"\u5047\u8bbe\u4f60\u6b63\u5728\u722c\u697c\u68af\u3002\u9700\u8981 n \u9636\u4f60\u624d\u80fd\u5230\u8fbe\u697c\u9876\u3002"}),(0,i.jsx)(e.p,{children:"\u6bcf\u6b21\u4f60\u53ef\u4ee5\u722c 1 \u6216 2 \u4e2a\u53f0\u9636\u3002\u4f60\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\u53ef\u4ee5\u722c\u5230\u697c\u9876\u5462\uff1f"})]}),"\n",(0,i.jsx)(e.p,{children:"\u8bbe\u8df3\u4e0a n \u7ea7\u53f0\u9636\u6709 f(n) \u79cd\u8df3\u6cd5\u3002\u5728\u6240\u6709\u8df3\u6cd5\u4e2d\uff0c\u9752\u86d9\u7684\u6700\u540e\u4e00\u6b65\u53ea\u6709\u4e24\u79cd\u60c5\u51b5\uff1a \u8df3\u4e0a 111 \u7ea7\u6216 222 \u7ea7\u53f0\u9636\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f53\u4e3a 1 \u7ea7\u53f0\u9636\uff1a \u5269 n-1 \u4e2a\u53f0\u9636\uff0c\u6b64\u60c5\u51b5\u5171\u6709 f(n-1) \u79cd\u8df3\u6cd5\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5f53\u4e3a 2 \u7ea7\u53f0\u9636\uff1a \u5269 n-2 \u4e2a\u53f0\u9636\uff0c\u6b64\u60c5\u51b5\u5171\u6709 f(n-2) \u79cd\u8df3\u6cd5\u3002\n\u5373 f(n) \u4e3a\u4ee5\u4e0a\u4e24\u79cd\u60c5\u51b5\u4e4b\u548c\uff0c\u5373 f(n)=f(n-1)+f(n-2)\uff0c\u4ee5\u4e0a\u9012\u63a8\u6027\u8d28\u4e3a\u6590\u6ce2\u90a3\u5951\u6570\u5217\u3002\u56e0\u6b64\uff0c\u672c\u9898\u53ef\u8f6c\u5316\u4e3a \u6c42\u6590\u6ce2\u90a3\u5951\u6570\u5217\u7684\u7b2c n \u9879\uff0c\u533a\u522b\u4ec5\u5728\u4e8e\u521d\u59cb\u503c\u4e0d\u540c\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u9752\u86d9\u8df3\u53f0\u9636\u95ee\u9898\uff1a f(0)=1 , f(1)=1 , f(2)=2.\n\u6590\u6ce2\u90a3\u5951\u6570\u5217\u95ee\u9898\uff1a f(0)=0 , f(1)=1 , f(2)=1."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="answer"',children:"int climbStairs(int n){\n    if(n == 0) return 0;\n    if(n == 1) return 1;\n    if(n == 2) return 2;\n    int p[2] = {1,2};\n    for(int i = 3;i <= n;++i)\n        p[1 - i%2] = p[0] + p[1];\n    if(p[0] > p[1]) return p[0];\n    return p[1];\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var i=t(96540);const s={},r=i.createContext(s);function o(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
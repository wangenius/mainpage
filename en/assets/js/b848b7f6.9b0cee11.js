"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1080],{3153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(4848),s=n(8453);const r={},c=void 0,i={id:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6768\u8f89\u4e09\u89d2",title:"\u6768\u8f89\u4e09\u89d2",description:"",source:"@site/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6768\u8f89\u4e09\u89d2.mdx",sourceDirName:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173",slug:"/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6768\u8f89\u4e09\u89d2",permalink:"/en/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6768\u8f89\u4e09\u89d2",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6768\u8f89\u4e09\u89d2.mdx",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",permalink:"/en/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"},next:{title:"\u6700\u5c0f\u6808",permalink:"/en/docs/dsa/leetcode/\u6808\u76f8\u5173/\u6700\u5c0f\u6808"}},a={},d=[];function u(e){const t={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-cpp",children:"  vector<vector<int>> generate(int numRows) {\n    vector<vector<int>> res(numRows);\n    for (int i = 0; i < numRows; ++i) {\n      res[i].resize(i + 1);\n      // \u7b2ci+1\u6392\n      for (int j = 0; j <= i; ++j)\n        res[i][j] = j == 0 || j == i ? 1 : res[i - 1][j - 1] + res[i - 1][j];\n    }\n    return res;\n  };\n"})})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var o=n(6540);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
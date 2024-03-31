"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4820],{1811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(4848),r=t(8453);const s={title:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",sidebar_position:4,slug:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"},i="\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",c={id:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u4e2d\u5fc3\u4e0b\u6807",title:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",description:"",source:"@site/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u4e2d\u5fc3\u4e0b\u6807.mdx",sourceDirName:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173",slug:"/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",permalink:"/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u4e2d\u5fc3\u4e0b\u6807.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",sidebar_position:4,slug:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"},sidebar:"leetcode",previous:{title:"\u6570\u7ec4\u64cd\u4f5c",permalink:"/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6570\u7ec4\u64cd\u4f5c"},next:{title:"\u5feb\u4e50\u6570",permalink:"/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u5feb\u4e50\u6570"}},a={},d=[];function u(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807",children:"\u5bfb\u627e\u6570\u7ec4\u7684\u4e2d\u5fc3\u4e0b\u6807"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"int pivotIndex(vector<int> &nums){\n    if (nums.size() == 1)\n        return 0;\n    int anchor = 0;\n    int left = 0, right = -nums[0];\n    for (auto i : nums)\n        right = right + i;\n\n    if (left == right)\n        return anchor;\n    while (anchor < nums.size() - 1)\n    {\n        left = left + nums[anchor];\n        anchor++;\n        right = right - nums[anchor];\n        if (left == right)\n            return anchor;\n    }\n\n    return -1;\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
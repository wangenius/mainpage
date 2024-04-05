"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3175],{5385:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const o={title:"TopK",sidebar_position:1,slug:"TopK"},r="TopK",a={id:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK",title:"TopK",description:"\u8bbe\u8ba1\u4e00\u4e2a\u627e\u5230\u6570\u636e\u6d41\u4e2d\u7b2c k \u5927\u5143\u7d20\u7684\u7c7b\uff08class\uff09\u3002\u6ce8\u610f\u662f\u6392\u5e8f\u540e\u7684\u7b2c k \u5927\u5143\u7d20\uff0c\u4e0d\u662f\u7b2c k \u4e2a\u4e0d\u540c\u7684\u5143\u7d20\u3002",source:"@site/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK.mdx",sourceDirName:"dsa/leetcode/\u6570\u7ec4\u76f8\u5173",slug:"/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK",permalink:"/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/TopK.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"TopK",sidebar_position:1,slug:"TopK"},sidebar:"leetcode",previous:{title:"\u56de\u6587\u4e32",permalink:"/docs/dsa/leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/\u56de\u6587\u4e32"},next:{title:"\u6570\u7ec4\u64cd\u4f5c",permalink:"/docs/dsa/leetcode/\u6570\u7ec4\u76f8\u5173/\u6570\u7ec4\u64cd\u4f5c"}},c={},l=[];function p(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"topk",children:"TopK"}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u8ba1\u4e00\u4e2a\u627e\u5230\u6570\u636e\u6d41\u4e2d\u7b2c k \u5927\u5143\u7d20\u7684\u7c7b\uff08class\uff09\u3002\u6ce8\u610f\u662f\u6392\u5e8f\u540e\u7684\u7b2c k \u5927\u5143\u7d20\uff0c\u4e0d\u662f\u7b2c k \u4e2a\u4e0d\u540c\u7684\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bf7\u5b9e\u73b0 KthLargest \u7c7b\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"KthLargest(int k, int[] nums) \u4f7f\u7528\u6574\u6570 k \u548c\u6574\u6570\u6d41 nums \u521d\u59cb\u5316\u5bf9\u8c61\u3002\nint add(int val) \u5c06 val \u63d2\u5165\u6570\u636e\u6d41 nums \u540e\uff0c\u8fd4\u56de\u5f53\u524d\u6570\u636e\u6d41\u4e2d\u7b2c k \u5927\u7684\u5143\u7d20\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://leetcode.cn/problems/kth-largest-element-in-a-stream/solutions/44721/703-shu-ju-liu-zhong-de-di-kda-yuan-su-liang-chong",children:"https://leetcode.cn/problems/kth-largest-element-in-a-stream/solutions/44721/703-shu-ju-liu-zhong-de-di-kda-yuan-su-liang-chong"}),"\n\u601d\u8def\u4e00\uff1amultiset\n\u5229\u7528 set \u81ea\u52a8\u6392\u5e8f\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class KthLargest {\n    int K;\n    multiset<int> st;\npublic:\n    KthLargest(int k, vector<int>& nums) {\n        for (int n : nums) {\n            st.insert(n);\n            if (st.size() > k) st.erase(st.begin());\n        }       \n        K = k;\n\n    }\n    \n    int add(int val) {\n        st.insert(val);\n        if (st.size() > K) st.erase(st.begin());\n        return *st.begin();\n    }\n};\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u601d\u8def\u4e8c\uff1a\u5806\n",(0,s.jsx)(e.code,{children:"priority_queue<Type, Container, Functional>"}),"\nType \u4e3a\u6570\u636e\u7c7b\u578b\uff0c Container \u4e3a\u4fdd\u5b58\u6570\u636e\u7684\u5bb9\u5668\uff0cFunctional \u4e3a\u5143\u7d20\u6bd4\u8f83\u65b9\u5f0f\u3002\n\u5982\u679c\u4e0d\u5199\u540e\u4e24\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u5bb9\u5668\u9ed8\u8ba4\u7528\u7684\u662f vector\uff0c\u6bd4\u8f83\u65b9\u5f0f\u9ed8\u8ba4\u7528 ",(0,s.jsx)(e.code,{children:"operator<"}),"\uff0c\u4e5f\u5c31\u662f\u4f18\u5148\u961f\u5217\u662f\u5927\u9876\u5806\uff0c\u961f\u5934\u5143\u7d20\u6700\u5927\uff0c\u672c\u9898\u4e3a\u5c0f\u9876\u5806\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"class KthLargest {\n    int K;\n    priority_queue<int, vector<int>, greater<int>> pq;\npublic:\n    KthLargest(int k, vector<int>& nums) {\n        for (int n : nums) {\n            pq.push(n);\n            if (pq.size() > k) pq.pop();\n        }\n        K = k;\n    }\n\n    int add(int val) {\n        pq.push(val);\n        if (pq.size() > K) pq.pop();\n        return pq.top();\n    }\n};\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);
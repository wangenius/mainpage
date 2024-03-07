"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1973],{12191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var i=t(74848),r=t(28453);const s={title:"\u67e5\u627e\u6cd5",sidebar_position:1,slug:"\u67e5\u627e\u6cd5"},o="\u67e5\u627e\u6cd5",l={id:"repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u4e8c\u5206\u67e5\u627e\u6cd5",title:"\u67e5\u627e\u6cd5",description:"\u4e8c\u5206\u67e5\u627e\u6cd5",source:"@site/docs/repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u4e8c\u5206\u67e5\u627e\u6cd5.mdx",sourceDirName:"repository/Leetcode/\u6570\u7ec4\u76f8\u5173",slug:"/repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u67e5\u627e\u6cd5",permalink:"/en/docs/repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u67e5\u627e\u6cd5",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u4e8c\u5206\u67e5\u627e\u6cd5.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67e5\u627e\u6cd5",sidebar_position:1,slug:"\u67e5\u627e\u6cd5"},sidebar:"repository",previous:{title:"search",permalink:"/en/docs/repository/Leetcode/\u5b57\u7b26\u4e32\u76f8\u5173/search"},next:{title:"\u6570\u7ec4\u64cd\u4f5c",permalink:"/en/docs/repository/Leetcode/\u6570\u7ec4\u76f8\u5173/\u6570\u7ec4\u64cd\u4f5c"}},c={},u=[{value:"\u4e8c\u5206\u67e5\u627e\u6cd5",id:"\u4e8c\u5206\u67e5\u627e\u6cd5",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u67e5\u627e\u6cd5",children:"\u67e5\u627e\u6cd5"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e8c\u5206\u67e5\u627e\u6cd5",children:"\u4e8c\u5206\u67e5\u627e\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"\u7ed9\u5b9a\u4e00\u4e2a\u6392\u5e8f\u6570\u7ec4\u548c\u4e00\u4e2a\u76ee\u6807\u503c\uff0c\u5728\u6570\u7ec4\u4e2d\u627e\u5230\u76ee\u6807\u503c\uff0c\u5e76\u8fd4\u56de\u5176\u7d22\u5f15\u3002\u5982\u679c\u76ee\u6807\u503c\u4e0d\u5b58\u5728\u4e8e\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u5b83\u5c06\u4f1a\u88ab\u6309\u987a\u5e8f\u63d2\u5165\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u5fc5\u987b\u4f7f\u7528\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log n) \u7684\u7b97\u6cd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="self"',children:"using namespace std;\n#include <algorithm>\n#include <array>\n#include <bitset>\n#include <climits>\n#include <deque>\n#include <functional>\n#include <iostream>\n#include <list>\n#include <queue>\n#include <stack>\n#include <tuple>\n#include <unordered_map>\n#include <unordered_set>\n#include <utility>\n#include <vector>\n\nclass Solution\n{\npublic:\n    int searchInsert(vector<int> &nums, int target)\n    {\n        int right = nums.size() - 1;\n        int left = 0;\n        int n = (left + right) / 2;\n        while (left < right)\n        {\n            if (left == right - 1) break;\n            if (nums[n] > target)\n                right = n;\n            if (nums[n] < target)\n                left = n;\n            n = (left + right) / 2;\n            if (nums[n] == target)\n                return n;\n        }\n        if (nums[right] == target)\n            return right;\n        if (nums[left] == target)\n            return left;\n        if (nums[right] < target)\n            return right + 1;\n        if (nums[left] > target)\n            return left;\n        return left + 1;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="simple"',children:"int searchInsert(vector<int> &nums, int target)\n{\n    int left=-1,right=nums.size(); //left\u548cright\u76f4\u63a5\u5c06\u6269\u5c55\u4e0b\u6807\u5168\u90e8\u5305\u542b\u8fdb\u6765\n    while(left + 1!=right) //\u5982\u679cleft\u5e76\u4e0d\u76f8\u90bb\n    {\n        int mid=(left+right)/2; //\u53d6\u4e2d\u95f4\u503c\n        if(nums[mid]>=target) //\u4e2d\u95f4\u503c\u5927\u4e8e\u7b49\u4e8e\u67e5\u8be2\u503c\uff0c\u5219\u53f3\u6307\u9488\u5de6\u79fb\u5230\u4e2d\u95f4\u6307\u9488\n            right=mid;\n        else \n            left=mid; //\u5426\u5219\u5de6\u6307\u9488\u53f3\u79fb\u5230\u4e2d\u95f4\u6307\u9488\u3002\n        //\u6b64\u65f6\u53ef\u4ee5\u77e5\u9053right\u4e00\u5b9a\u5728\u6700\u540e\u53ef\u4ee5\u6210\u4e3a\u7ed3\u679c\u4f4d\u7f6e\u3002\u56e0\u4e3aleft\u548cright\u6307\u9488\u6700\u540e\u4e00\u5b9a\u76f8\u90bb\uff0c\u4e14n\u6307\u9488\u4e00\u5b9a\u548cleft\u6307\u9488\u91cd\u5408\u3002\n        //left\u6307\u9488\u6307\u5411\u4e0d\u4f1a\u548ctarget\u76f8\u7b49\uff0c\u6545\u4e0d\u7ba1\u662f\u63d2\u5165\u4f4d\u7f6e\u8fd8\u662f\u76f8\u7b49\u4f4d\u7f6e\uff0c\u90fd\u662fright\u6307\u9488\u4f4d\u7f6e\n    }\n    return right;\n\n}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
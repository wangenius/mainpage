"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4898],{8903:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=i(4848),t=i(8453);const s={title:"priority_queue",sidebar_position:6,slug:"priority_queue"},p="priority_queue",c={id:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/priority_queue",title:"priority_queue",description:"\u5c31\u662f\u5806\u3002 \u4f46\u65e0\u6cd5\u4efb\u610f\u5220\u9664\u4e00\u4e2a\u6570\u3002",source:"@site/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/priority_queue.mdx",sourceDirName:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL",slug:"/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/priority_queue",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/priority_queue",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/priority_queue.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"priority_queue",sidebar_position:6,slug:"priority_queue"},sidebar:"cpp",previous:{title:"deque",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/deque"},next:{title:"map",permalink:"/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/map"}},o={},l=[{value:"\u5e38\u7528\u51fd\u6570",id:"\u5e38\u7528\u51fd\u6570",level:2},{value:"push()",id:"push",level:3},{value:"top()",id:"top",level:3},{value:"pop()",id:"pop",level:3},{value:"empty()",id:"empty",level:3},{value:"size()",id:"size",level:3},{value:"priority queue \u5185\u5143\u7d20\u4f18\u5148\u7ea7\u7684\u8bbe\u7f6e",id:"priority-queue-\u5185\u5143\u7d20\u4f18\u5148\u7ea7\u7684\u8bbe\u7f6e",level:2},{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e",level:3}];function u(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"priority_queue",children:"priority_queue"}),"\n",(0,r.jsx)(n.p,{children:"\u5c31\u662f\u5806\u3002 \u4f46\u65e0\u6cd5\u4efb\u610f\u5220\u9664\u4e00\u4e2a\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5b83\u4e0equeue\u7684\u64cd\u4f5c\u7c7b\u4f3c\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\uff1a\u6bcf\u6b21\u589e\u52a0/\u5220\u9664\u5143\u7d20\u4e4b\u540e\uff0c\u5b83\u5c06\u5bf9\u5143\u7d20\u4f4d\u7f6e\u8fdb\u884c\u8c03\u6574\uff0c\u4f7f\u5f97\u5934\u90e8\u5143\u7d20\u603b\u662f\u6700\u5927\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6bcf\u6b21\u5220\u9664\u64cd\u4f5c\u603b\u662f\u628a\u6700\u5927\uff08\u4f18\u5148\u7ea7\u6700\u9ad8\uff09\u7684\u5143\u7d20\u53bb\u6389\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5934\u6587\u4ef6queue\u4e2d\u5b9a\u4e49\uff0c\u53ef\u57fa\u4e8edeque\u548cvector\u6765\u5b9e\u73b0\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5934\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"#include <queue>"}),"\u3002\n\u58f0\u660e\n",(0,r.jsx)(n.code,{children:"priority_queue< typename > name;"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'\u548c\u961f\u5217\u4e0d\u4e00\u6837\u7684\u662f\uff0c\u4f18\u5148\u961f\u5217\u6ca1\u6709 front() \u51fd\u6570\u4e0e back() \u51fd\u6570\uff0c\u800c\u53ea\u80fd\u901a\u8fc7 top() \u51fd\u6570\u6765\u8bbf\u95ee\u961f\u9996\u5143\u7d20\uff08\u4e5f\u53ef\u4ee5\u79f0\u4e3a\u5806\u9876\u5143\u7d20\uff09\uff0c\u4e5f\u5c31\u662f\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u5143\u7d20\u3002\n\n\u793a\u4f8b\u5982\u4e0b\uff1a\n\n#include <stdio.h>\n#include <queue>\nusing namespace std;\nint main()\n{\n    priority_queue<int> q;\n    q.push(3);\n    q.push(4);\n    q.push(1);\n    printf("%d\\n",q.top());\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e38\u7528\u51fd\u6570",children:"\u5e38\u7528\u51fd\u6570"}),"\n",(0,r.jsx)(n.h3,{id:"push",children:"push()"}),"\n",(0,r.jsx)(n.p,{children:"push(x) \u5c06\u4ee4 x \u5165\u961f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(logN)\uff0c\u5176\u4e2d N \u4e3a\u5f53\u524d\u4f18\u5148\u961f\u5217\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"top",children:"top()"}),"\n",(0,r.jsx)(n.p,{children:"top() \u53ef\u4ee5\u83b7\u5f97\u961f\u9996\u5143\u7d20\uff08\u5373\u5806\u9876\u5143\u7d20\uff09\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(1) \u3002"}),"\n",(0,r.jsx)(n.h3,{id:"pop",children:"pop()"}),"\n",(0,r.jsx)(n.p,{children:"pop() \u4ee4\u961f\u9996\u5143\u7d20\uff08\u5373\u5806\u9876\u5143\u7d20\uff09\u51fa\u961f\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(logN)\uff0c\u5176\u4e2d N \u4e3a\u5f53\u524d\u4f18\u5148\u961f\u5217\u4e2d\u7684\u5143\u7d20\u4e2a\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <stdio.h>\n#include <queue>\nusing namespace std;\nint main()\n{\n    priority_queue<int> q;\n    q.push(3);\n    q.push(4);\n    q.push(1);\n    printf("%d\\n",q.top());\n    q.pop();\n    printf("%d\\n",q.top());\n    return 0;\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"4\n3\n"})}),"\n",(0,r.jsx)(n.h3,{id:"empty",children:"empty()"}),"\n",(0,r.jsx)(n.p,{children:"empty() \u68c0\u6d4b\u4f18\u5148\u961f\u5217\u662f\u5426\u4e3a\u7a7a\uff0c\u8fd4\u56de true \u5219\u7a7a\uff0c\u8fd4\u56de false \u5219\u975e\u7a7a\u3002\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(1)\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"size",children:"size()"}),"\n",(0,r.jsx)(n.p,{children:"size() \u8fd4\u56de\u4f18\u5148\u961f\u5217\u5185\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(1)\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"priority-queue-\u5185\u5143\u7d20\u4f18\u5148\u7ea7\u7684\u8bbe\u7f6e",children:"priority queue \u5185\u5143\u7d20\u4f18\u5148\u7ea7\u7684\u8bbe\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u4f55\u5b9a\u4e49\u4f18\u5148\u961f\u5217\u5185\u5143\u7d20\u7684\u4f18\u5148\u7ea7\u662f\u8fd0\u7528\u597d\u4f18\u5148\u961f\u5217\u7684\u5173\u952e\uff0c\u4e0b\u9762\u5206\u522b\u4ecb\u7ecd\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff08\u4f8b\u5982 int\u3001double\u3001char\uff09\u4e0e\u7ed3\u6784\u4f53\u7c7b\u578b\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e\u65b9\u6cd5\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e",children:"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5904\u6307\u7684\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5c31\u662f int \u578b\u3001double \u578b\u3001char \u578b\u7b49\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4f18\u5148\u961f\u5217\u5bf9\u5b83\u4eec\u7684\u4f18\u5148\u7ea7\u8bbe\u7f6e\u4e00\u822c\u662f\u5927\u9876\u5806\uff0c\u56e0\u6b64\u961f\u9996\u5143\u7d20\u5c31\u662f\u4f18\u5148\u961f\u5217\u5185\u5143\u7d20\u6700\u5927\u7684\u90a3\u4e2a\uff08\u5982\u679c char \u578b\uff0c\u5219\u662f\u5b57\u5178\u5e8f\u6700\u5927\u7684\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u57fa\u672c\u6570\u636e\u7c7b\u578b\u6765\u8bf4\uff0c\u4e0b\u9762\u4e24\u79cd\u4f18\u5148\u961f\u5217\u7684\u5b9a\u4e49\u662f\u7b49\u4ef7\u7684\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"priority_queue<int> q;\npriority_queue<int,vector<int>,less<int>> q;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0\uff0c\u7b2c\u4e8c\u79cd\u5b9a\u4e49\u65b9\u5f0f\u7684\u5c16\u62ec\u53f7\u5185\u591a\u51fa\u4e86\u4e24\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e00\u4e2a\u662f ",(0,r.jsx)(n.code,{children:"vector<int>"}),"\uff0c\u53e6\u4e00\u4e2a\u662f ",(0,r.jsx)(n.code,{children:"less<int>"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"vector<int>"}),"\uff08\u4e5f\u5c31\u662f\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff09\u586b\u5199\u7684\u662f\u6765\u627f\u8f7d\u5e95\u5c42\u6570\u636e\u7ed3\u6784\u5806\uff08heap\uff09\u7684\u5bb9\u5668\uff0c\u5982\u679c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f double \u578b\u6216 char \u578b\uff0c\u5219\u6b64\u5904\u53ea\u9700\u8981\u586b\u5199 ",(0,r.jsx)(n.code,{children:"vector<double>"})," \u6216 ",(0,r.jsx)(n.code,{children:"vector<char>"}),"\uff1b"]}),"\n",(0,r.jsxs)(n.p,{children:["\u800c\u7b2c\u4e09\u4e2a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"less<int>"})," \u5219\u662f\u5bf9\u7b2c\u4e00\u4e2a\u53c2\u6570\u7684\u6bd4\u8f83\u7c7b\uff0c",(0,r.jsx)(n.code,{children:"less<int>"})," \u8868\u793a\u6570\u5b57\u5927\u7684\u4f18\u5148\u7ea7\u8d8a\u5927\uff0c\u800c ",(0,r.jsx)(n.code,{children:"greater<int>"})," \u8868\u793a\u6570\u5b57\u5c0f\u7684\u4f18\u5148\u7ea7\u8d8a\u5927\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5982\u679c\u60f3\u8ba9\u4f18\u5148\u961f\u5217\u603b\u662f\u628a\u6700\u5c0f\u7684\u5143\u7d20\u653e\u5728\u961f\u9996\uff0c\u53ea\u9700\u8fdb\u884c\u5982\u4e0b\u5b9a\u4e49\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"priority_queue<int,vector<int>,greater<int>> q;\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u600e\u4e48\u8bb0",type:"success",children:(0,r.jsx)(n.p,{children:"greater\u8868\u793a\u5927\u591a\u6570\u90fd\u6bd4\u90a3\u4e00\u4e2a\u5927, \u6240\u4ee5\u662f\u5c0f\u9876\u5806"})}),"\n",(0,r.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"struct cmp\n{ //\u8fd9\u4e2a\u6bd4\u8f83\u8981\u7528\u7ed3\u6784\u4f53\u8868\u793a\n    bool operator()(int &a, int &b) const\n    {\n        return a > b;\n    }\n};\n\npriority_queue<int,vector<int>,cmp> q;    //\u4f7f\u7528\u81ea\u5b9a\u4e49\u6bd4\u8f83\u65b9\u6cd5\npriority_queue<int> pq;\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>p,x:()=>c});var r=i(6540);const t={},s=r.createContext(t);function p(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:p(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
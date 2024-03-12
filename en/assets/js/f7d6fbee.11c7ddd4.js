"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[2686],{79161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=t(74848),i=t(28453);const r={title:"set",sidebar_position:8,slug:"set"},l="set",c={id:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/set",title:"set",description:"set multiset",source:"@site/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/set.mdx",sourceDirName:"lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668",slug:"/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/set",permalink:"/en/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/set",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/set.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"set",sidebar_position:8,slug:"set"},sidebar:"cpp",previous:{title:"map",permalink:"/en/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u5bb9\u5668/map"},next:{title:"\u8fed\u4ee3\u5668",permalink:"/en/docs/lang/cpp/\u6807\u51c6\u5e93\u548cSTL/\u8fed\u4ee3\u5668"}},a={},p=[{value:"set",id:"set-1",level:2},{value:"multiset",id:"multiset",level:2},{value:"\u7b97\u6cd5",id:"\u7b97\u6cd5",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:2},{value:"\u91cd\u8f7d\u7b49\u53f7\u64cd\u4f5c\u7b26",id:"\u91cd\u8f7d\u7b49\u53f7\u64cd\u4f5c\u7b26",level:3},{value:"\u63d2\u5165\u548c\u5220\u9664",id:"\u63d2\u5165\u548c\u5220\u9664",level:3},{value:"\u67e5\u627e",id:"\u67e5\u627e",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"set",children:"set"}),"\n",(0,s.jsx)(n.p,{children:"set multiset"}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u4eec\u5206\u522b\u662fmap\u548cmultimap\u7684\u7279\u4f8b\uff0c\u6bcf\u4e2a\u5143\u7d20\u53ea\u6709\u5173\u952e\u5b57\u800c\u6ca1\u6709\u503c\uff0c\u6216\u8005\u8bf4\uff0c\u5173\u952e\u5b57\u4e0e\u503c\u5408\u4e00\u4e86\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5934\u6587\u4ef6set\u4e2d\u5b9a\u4e49\u3002"}),"\n",(0,s.jsx)(n.p,{children:"C++11\u6807\u51c6\u4e2d\u589e\u52a0\u4e86unordered_set\u548cunordered_multiset\u5bb9\u5668\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"set-1",children:"set"}),"\n",(0,s.jsx)(n.p,{children:"set\u7684\u7279\u6027\u662f\uff0c\u6240\u6709\u7684\u5bb9\u5668\u90fd\u4f1a\u6839\u636e\u5143\u7d20\u81ea\u8eab\u7684\u952e\u503c\u8fdb\u884c\u81ea\u52a8\u88ab\u6392\u5e8f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"set\u7684\u5143\u7d20\u4e0d\u50cfmap\u90a3\u6837\u53ef\u4ee5\u540c\u65f6\u62e5\u6709\u5b9e\u503c\u548c\u952e\u503c\uff0cset\u7684\u5143\u7d20\u65e2\u662f\u5b9e\u503c\u53c8\u662f\u952e\u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"set\u4e0d\u5141\u8bb8\u4e24\u4e2a\u5143\u7d20\u6709\u76f8\u540c\u7684\u952e\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u4e0d\u53ef\u4ee5\u901a\u8fc7set\u7684\u8fed\u4ee3\u5668\u6539\u53d8set\u5143\u7d20\u7684\u503c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u56e0\u4e3a\u5176\u5143\u7d20\u503c\u5c31\u662f\u952e\u503c\uff0c\u4efb\u610f\u6539\u53d8\u4f1a\u4e25\u91cd\u7834\u574fset\u7684\u7ec4\u7ec7"}),"\n",(0,s.jsx)(n.p,{children:"\u6362\u53e5\u8bdd\u8bf4\uff0cset\u7684iterator\u662f\u4e00\u79cdconst_iterator"}),"\n",(0,s.jsx)(n.p,{children:"set\u548clist\u62e5\u6709\u67d0\u4e9b\u76f8\u540c\u7684\u6027\u8d28\uff0c\u5f53\u5bf9\u5bb9\u5668\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\u6216\u8005\u5220\u9664\u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u9664\u4e86\u88ab\u5220\u9664\u7684\u5143\u7d20\u4e4b\u5916\uff0c\u64cd\u4f5c\u4e4b\u524d\u7684\u6240\u6709\u8fed\u4ee3\u5668\uff0c\u64cd\u4f5c\u4e4b\u540e\u4ecd\u7136\u6709\u6548\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"multiset",children:"multiset"}),"\n",(0,s.jsx)(n.p,{children:"multiset\u7279\u6027\u53ca\u7528\u6cd5\u548cset\u5b8c\u5168\u76f8\u540c\uff0c\u552f\u4e00\u7684\u5dee\u522b\u5728\u4e8e\u5b83\u5141\u8bb8\u952e\u503c\u91cd\u590d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"set\u548cmultiset\u7684\u5e95\u5c42\u5b9e\u73b0\u662f\u7ea2\u9ed1\u6811\uff0c\u7ea2\u9ed1\u6811\u4e3a\u5e73\u8861\u4e8c\u53c9\u6811\u7684\u4e00\u79cd"}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\uff0cmultiset\u548cset\u5171\u7528\u4e00\u4e2a\u5934\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7b97\u6cd5",children:"\u7b97\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="\u904d\u5386"',children:"for (set<T>::iterator it = s.begin(); it != s.end(); it++)\n{\n  \tcout << *it << endl;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"set<T> st; // set \u9ed8\u8ba4\u6784\u9020\u51fd\u6570\nmultiset<T> mst; // multiset \u9ed8\u8ba4\u6784\u9020\u51fd\u6570\nset(const set& st); // \u62f7\u8d1d\u6784\u9020\u51fd\u6570\n\nset& operator=(const set& st); // \u91cd\u8f7d\u7b49\u53f7\u64cd\u4f5c\u7b26\n\nswap(st); // \u4ea4\u6362\u4e24\u4e2a\u96c6\u5408\u5bb9\u5668\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u91cd\u8f7d\u7b49\u53f7\u64cd\u4f5c\u7b26",children:"\u91cd\u8f7d\u7b49\u53f7\u64cd\u4f5c\u7b26"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int size(); // \u8fd4\u56de\u5bb9\u5668\u4e2d\u5143\u7d20\u7684\u6570\u76ee\nbool empty(); // \u5224\u65ad\u5bb9\u5668\u662f\u5426\u4e3a\u7a7a\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u63d2\u5165\u548c\u5220\u9664",children:"\u63d2\u5165\u548c\u5220\u9664"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"pair<iterator, bool> insert(T elem); \n// \u5728\u5bb9\u5668\u4e2d\u63d2\u5165\u5143\u7d20\uff0c\u8fd4\u56de\u63d2\u5165\u4f4d\u7f6e\u7684\u8fed\u4ee3\u5668\uff08\u4e0d\u6210\u529f\u5219\u8fd4\u56deend()\uff09\u548c\u662f\u5426\u63d2\u5165\u6210\u529f\n// \u5982\u679c\u662fmultiset\uff0c\u5219\u8fd4\u56de\u503c\u53ea\u6709iterator\nclear(); // \u6e05\u9664\u6240\u6709\u5143\u7d20\niterator erase(pos); // \u5220\u9664pos\u8fed\u4ee3\u5668\u6240\u6307\u7684\u5143\u7d20\uff0c\u8fd4\u56de\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\niterator erase(beg, end); // \u5220\u9664\u533a\u95f4[beg, end)\u5185\u7684\u6240\u6709\u5143\u7d20\uff0c\u8fd4\u56de\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u8fed\u4ee3\u5668\nerase(T elem); // \u5220\u9664\u5bb9\u5668\u4e2d\u503c\u4e3aelem\u7684\u5143\u7d20\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="\u63d2\u5165\u4e4b\u524d\u53ef\u4ee5\u6307\u5b9a\u6392\u5e8f\u89c4\u5219"',children:"//\u5229\u7528\u4eff\u51fd\u6570 \u6307\u5b9aset\u5bb9\u5668\u7684\u6392\u5e8f\u89c4\u5219\nclass MyCompare\n{\npublic:\n    bool operator()(int v1, int v2)\n    {\n        return v1 > v2;\n    }\n};\n\nset<int, MyCompare> s;\n\n//\u6a21\u7248\u7c7b\u4e5f\u662f\u53ef\u4ee5\u6709\u9ed8\u8ba4\u503c\u7684\uff0c\u7b2c\u4e8c\u4e2a\u6a21\u7248\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u4e3aless\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u7684\u6570\u636e\u7c7b\u578b\u9700\u8981\u6307\u51fa\u6392\u5e8f\u89c4\u5219\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u91cd\u8f7d\u5c0f\u4e8e\u64cd\u4f5c\u7b26\u7684\u65b9\u5f0f\u6307\u51fa\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u67e5\u627e",children:"\u67e5\u627e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"iterator find(T key); \n// \u67e5\u627e\u952ekey\u662f\u5426\u5b58\u5728\uff0c\u82e5\u5b58\u5728\uff0c\u8fd4\u56de\u8be5\u952e\u7684\u5143\u7d20\u7684\u8fed\u4ee3\u5668\uff1b\u82e5\u4e0d\u5b58\u5728\uff0c\u8fd4\u56deset.end();\nint count(T key);\n// \u67e5\u627e\u952ekey\u7684\u5143\u7d20\u4e2a\u6570\niterator lower_bound(T keyElem);\n// \u8fd4\u56de\u7b2c\u4e00\u4e2akey>=keyElem\u5143\u7d20\u7684\u8fed\u4ee3\u5668\niterator upper_bound(T keyElem);\n// \u8fd4\u56de\u7b2c\u4e00\u4e2akey>keyElem\u5143\u7d20\u7684\u8fed\u4ee3\u5668\npair<iterator, iterator> equal_range(T keyElem);\n// \u8fd4\u56de\u5bb9\u5668\u4e2dkey\u4e0ekeyElem\u4e0a\u76f8\u7b49\u7684\u4e24\u4e2a\u4e0a\u4e0b\u9650\u8fed\u4ee3\u5668\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u5b58\u5728\u8fd4\u56de\u7684\u90fd\u662fobj.end()"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",metastring:'title="\u5bf9\u7ec4\u7684\u6784\u9020\u548c\u4f7f\u7528"',children:"//\u6784\u9020\npair<T1, T2> p(k, v);\n//\u53e6\u4e00\u79cd\u6784\u9020\u65b9\u5f0f\npair<T1, T2> p = make_pair(k, v);\n//\u4f7f\u7528\ncout << p.first << p.second << endl;\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
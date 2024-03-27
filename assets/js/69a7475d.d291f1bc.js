"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[8876],{51560:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var l=n(74848),i=n(28453);const a={title:"\u4e8c\u53c9\u6392\u5e8f\u6811",sidebar_position:2,slug:"\u4e8c\u53c9\u6392\u5e8f\u6811"},r="\u4e8c\u53c9\u6392\u5e8f\u6811",c={id:"dsa/ds/\u6811/\u4e8c\u53c9\u6392\u5e8f\u6811",title:"\u4e8c\u53c9\u6392\u5e8f\u6811",description:"\u53c8\u53eb\u4e8c\u53c9\u641c\u7d22\u6811BST",source:"@site/docs/dsa/ds/\u6811/\u4e8c\u53c9\u6392\u5e8f\u6811.mdx",sourceDirName:"dsa/ds/\u6811",slug:"/dsa/ds/\u6811/\u4e8c\u53c9\u6392\u5e8f\u6811",permalink:"/docs/dsa/ds/\u6811/\u4e8c\u53c9\u6392\u5e8f\u6811",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/ds/\u6811/\u4e8c\u53c9\u6392\u5e8f\u6811.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u4e8c\u53c9\u6392\u5e8f\u6811",sidebar_position:2,slug:"\u4e8c\u53c9\u6392\u5e8f\u6811"},sidebar:"ds",previous:{title:"\u4e8c\u53c9\u6811",permalink:"/docs/dsa/ds/\u6811/\u4e8c\u53c9\u6811"},next:{title:"\u54c8\u592b\u66fc\u6811",permalink:"/docs/dsa/ds/\u6811/\u54c8\u592b\u66fc\u6811"}},t={},d=[{value:"\u666e\u901a\u6392\u5e8f\u6811",id:"\u666e\u901a\u6392\u5e8f\u6811",level:2},{value:"\u67e5\u627e\u7ed3\u70b9",id:"\u67e5\u627e\u7ed3\u70b9",level:3},{value:"\u63d2\u5165\u7ed3\u70b9",id:"\u63d2\u5165\u7ed3\u70b9",level:3},{value:"\u5220\u9664\u7ed3\u70b9",id:"\u5220\u9664\u7ed3\u70b9",level:3},{value:"\u5e73\u8861\u4e8c\u53c9\u6811AVL",id:"\u5e73\u8861\u4e8c\u53c9\u6811avl",level:2},{value:"\u63d2\u5165",id:"\u63d2\u5165",level:3},{value:"\u5220\u9664",id:"\u5220\u9664",level:3},{value:"\u7ea2\u9ed1\u6811RBT",id:"\u7ea2\u9ed1\u6811rbt",level:2},{value:"\u63d2\u5165",id:"\u63d2\u5165-1",level:3}];function h(e){const s={admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"\u4e8c\u53c9\u6392\u5e8f\u6811",children:"\u4e8c\u53c9\u6392\u5e8f\u6811"}),"\n",(0,l.jsx)(s.p,{children:"\u53c8\u53eb\u4e8c\u53c9\u641c\u7d22\u6811BST"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5bf9\u4e8e\u6839\u8282\u70b9\uff0c\u5de6\u5b50\u6811\u4e2d\u6240\u6709\u8282\u70b9\u7684\u503c < \u6839\u8282\u70b9\u7684\u503c < \u53f3\u5b50\u6811\u4e2d\u6240\u6709\u8282\u70b9\u7684\u503c"}),"\n",(0,l.jsx)(s.li,{children:"BST\u7684\u6240\u6709\u5b50\u6811\u90fd\u662fBST."}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u666e\u901a\u6392\u5e8f\u6811",children:"\u666e\u901a\u6392\u5e8f\u6811"}),"\n",(0,l.jsx)(s.h3,{id:"\u67e5\u627e\u7ed3\u70b9",children:"\u67e5\u627e\u7ed3\u70b9"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",metastring:'title="\u67e5\u627e"',children:"/* \u67e5\u627e\u8282\u70b9 */\nTreeNode *search(TreeNode *root, int num) {\n    TreeNode *node = root;\n    // \u5faa\u73af\u67e5\u627e\uff0c\u8d8a\u8fc7\u53f6\u8282\u70b9\u540e\u8df3\u51fa\n    while (node != nullptr) {\n        // \u76ee\u6807\u8282\u70b9\u5728 node \u7684\u53f3\u5b50\u6811\u4e2d\n        if (node->val < num)\n            node = node->right;\n        // \u76ee\u6807\u8282\u70b9\u5728 node \u7684\u5de6\u5b50\u6811\u4e2d\n        else if (node->val > num)\n            node = node->left;\n        // \u627e\u5230\u76ee\u6807\u8282\u70b9\uff0c\u8df3\u51fa\u5faa\u73af\n        else\n            break;\n    }\n    // \u8fd4\u56de\u76ee\u6807\u8282\u70b9\n    return node;\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u63d2\u5165\u7ed3\u70b9",children:"\u63d2\u5165\u7ed3\u70b9"}),"\n",(0,l.jsx)(s.p,{children:"\u4e8c\u53c9\u641c\u7d22\u6811\u4e0d\u5141\u8bb8\u5b58\u5728\u91cd\u590d\u8282\u70b9\uff0c\u5426\u5219\u5c06\u8fdd\u53cd\u5176\u5b9a\u4e49\u3002\u56e0\u6b64\uff0c\u82e5\u5f85\u63d2\u5165\u8282\u70b9\u5728\u6811\u4e2d\u5df2\u5b58\u5728\uff0c\u5219\u4e0d\u6267\u884c\u63d2\u5165\uff0c\u76f4\u63a5\u8fd4\u56de\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u5220\u9664\u7ed3\u70b9",children:"\u5220\u9664\u7ed3\u70b9"}),"\n",(0,l.jsx)(s.p,{children:"\u5148\u641c\u7d22\u627e\u5230\u76ee\u6807\u7ed3\u70b9\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u82e5\u662f\u88ab\u5220\u9664\u7684\u7ed3\u70b9z\u662f\u53f6\u8282\u70b9\uff0c\u5219\u76f4\u63a5\u5220\u9664\uff0c\u4e0d\u4f1a\u7834\u574f\u4e8c\u53c9\u6392\u5e8f\u6811\u7684\u6027\u8d28\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u82e5\u7ed3\u70b9z\u53ea\u6709\u4e00\u68f5\u5de6\u5b50\u6811\u6216\u53f3\u5b50\u6811\uff0c\u5219\u8ba9z\u7684\u5b50\u6811\u79f0\u4e3az\u7236\u8282\u70b9\u7684\u5b50\u6811\uff0c\u66ff\u4ee3z\u7684\u4f4d\u7f6e"}),"\n",(0,l.jsx)(s.li,{children:"\u82e5\u7ed3\u70b9z\u6709\u5de6\u3001\u53f3\u4e24\u68f5\u5b50\u6811\uff0c\u5219\u4ee4z\u7684\u76f4\u63a5\u540e\u7ee7\uff08\u6216\u76f4\u63a5\u524d\u9a71\uff09\u66ff\u4ee3z\uff0c\u7136\u540e\u4ece\u4e8c\u53c9\u6392\u5e8f\u6811\u4e2d\u5220\u53bb\u8fd9\u4e2a\u76f4\u63a5\u540e\u7ee7\uff08\u6216\u76f4\u63a5\u524d\u9a71\uff09\uff0c\u8fd9\u6837\u5c31\u8f6c\u6362\u6210\u4e86\u7b2c\u4e00\u6216\u7b2c\u4e8c\u79cd\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u4e8c\u53c9\u6392\u5e8f\u6811\u7684\u4e2d\u5e8f\u904d\u5386\u6709\u5e8f: \u5176\u4e2d\u5728\u5bfb\u627e\u76f4\u63a5\u524d\u9a71\u548c\u76f4\u63a5\u540e\u7ee7\u65f6\u8fdb\u884c\u4e2d\u5e8f\u904d\u5386\uff0c\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u9012\u589e\u7684\u6709\u5e8f\u5e8f\u5217\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u7528\u53f3\u5b50\u6811\u6700\u5c0f\u7684\u503c\u6765\u66ff\u4ee3\u88ab\u5220\u9664\u7684\u503c\uff08\u6700\u5de6\u4e0b\uff09"}),"\n",(0,l.jsx)(s.admonition,{title:"\u76f8\u4f3c\u7ee7\u627f\u7b97\u6cd5",type:"success",children:(0,l.jsx)(s.p,{children:"\u88ab\u5220\u9664\u8282\u70b9\u7684\u76f4\u63a5\u524d\u9a71\u6216\u76f4\u63a5\u540e\u7ee7\u4ee3\u66ff\u88ab\u5220\u9664\u8282\u70b9\uff0c\u7136\u540e\u5220\u9664\u88ab\u5220\u9664\u8282\u70b9\u7684\u76f4\u63a5\u524d\u9a71\u6216\u76f4\u63a5\u540e\u7ee7\u3002"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",metastring:'title="delete the node"',children:"int delete(int num){\n  search(num) -> val = nearestNode(search(num)) --\x3e val;\n  nearestNode\n}\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6570\u7ec4\u4e0e\u641c\u7d22\u6811\u7684\u6548\u7387\u5bf9\u6bd4"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{}),(0,l.jsx)(s.th,{children:"\u65e0\u5e8f\u6570\u7ec4"}),(0,l.jsx)(s.th,{children:"\u4e8c\u53c9\u641c\u7d22\u6811"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u67e5\u627e\u5143\u7d20"}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"log"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsxs)(s.span,{className:"mop",children:["lo",(0,l.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u63d2\u5165\u5143\u7d20"}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord",children:"1"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"log"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsxs)(s.span,{className:"mop",children:["lo",(0,l.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"\u5220\u9664\u5143\u7d20"}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})}),(0,l.jsx)(s.td,{children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"O"}),(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mi,{children:"log"}),(0,l.jsx)(s.mo,{children:"\u2061"}),(0,l.jsx)(s.mi,{children:"n"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"O(\\log n)"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,l.jsx)(s.span,{className:"mopen",children:"("}),(0,l.jsxs)(s.span,{className:"mop",children:["lo",(0,l.jsx)(s.span,{style:{marginRight:"0.01389em"},children:"g"})]}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,l.jsx)(s.span,{className:"mclose",children:")"})]})})]})})]})]})]}),"\n",(0,l.jsx)(s.h2,{id:"\u5e73\u8861\u4e8c\u53c9\u6811avl",children:"\u5e73\u8861\u4e8c\u53c9\u6811AVL"}),"\n",(0,l.jsx)(s.p,{children:"\u5e73\u8861\u56e0\u5b50\uff1a\u5de6\u9ad8\u5ea6-\u53f3\u9ad8\u5ea6"}),"\n",(0,l.jsx)(s.p,{children:"\u5e73\u8861\u4e8c\u53c9\u6811\u662f\u5e73\u8861\u56e0\u5b50\u7684\u7edd\u5bf9\u503c\u4e0d\u5927\u4e8e1\u7684\u4e8c\u53c9\u6392\u5e8f\u6811\u3002"}),"\n",(0,l.jsx)(s.admonition,{title:"\u65cb\u8f6c",type:"success",children:(0,l.jsx)(s.p,{children:"\u65cb\u8f6c\u64cd\u4f5c\u662f\u591a\u6570\u5e73\u8861\u6811\u80fd\u591f\u7ef4\u6301\u5e73\u8861\u7684\u5173\u952e\uff0c\u5b83\u80fd\u5728\u4e0d\u6539\u53d8\u4e00\u68f5\u5408\u6cd5 BST \u4e2d\u5e8f\u904d\u5386\u7ed3\u679c\u7684\u60c5\u51b5\u4e0b\u6539\u53d8\u5c40\u90e8\u8282\u70b9\u7684\u6df1\u5ea6\u3002"})}),"\n",(0,l.jsx)(s.h3,{id:"\u63d2\u5165",children:"\u63d2\u5165"}),"\n",(0,l.jsxs)(s.p,{children:["\u6211\u79f0\u4e4b\u4e3a",(0,l.jsx)(s.strong,{children:"\u4e2d\u95f4\u6d3e\u8d3f\u8d42\u7b97\u6cd5"}),"\u3002"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:n(1862).A+"",width:"1600",height:"1600"})}),"\n",(0,l.jsx)(s.p,{children:"\u987e\u540d\u601d\u4e49\uff0c\u4e00\u4f46\u63d2\u5165\u7834\u574f\u4e86\u5e73\u8861\uff0c\u90a3\u4e48\u653f\u5c40\u5c31\u5012\u5411\u4e86\u52bf\u529b\u5927\u7684\u4e00\u65b9\uff0c\u4f46\u6700\u597d\u7684\u7ed3\u5c40\u5c31\u662f\u9009\u62e9\u4e00\u4e2a\u4e2d\u95f4\u6d3e\uff08\u9700\u8981\u627e\u5230\u5931\u8861\u70b9\u548c\u5b83\u7684\u5b50\u6811\uff09\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u81ea\u5e95\u5411\u4e0a\u6267\u884c\u65cb\u8f6c\u64cd\u4f5c\uff0c\u4f7f\u6240\u6709\u5931\u8861\u8282\u70b9\u6062\u590d\u5e73\u8861\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u5220\u9664\u8fc7\u7a0b\uff1a\u76f8\u4f3c\u7ee7\u627f\u7b97\u6cd5\uff08\u6267\u884cBST\u7684\u5220\u9664\u64cd\u4f5c\uff09"}),"\n",(0,l.jsx)(s.li,{children:"\u5e73\u8861\u8fc7\u7a0b\uff1a\u4e2d\u95f4\u6d3e\u8d3f\u8d42\u7b97\u6cd5 + \u56de\u6eaf\uff08AVL\u5e73\u8861\u9700\u8981\uff09"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u7ea2\u9ed1\u6811rbt",children:"\u7ea2\u9ed1\u6811RBT"}),"\n",(0,l.jsx)(s.p,{children:'\u81ea\u5e73\u8861\u7684\u4e8c\u53c9\u641c\u7d22\u6811\uff0c\u6bcf\u4e2a\u8282\u70b9\u989d\u5916\u5b58\u50a8\u4e86\u4e00\u4e2a color \u5b57\u6bb5 ("RED" or "BLACK")\uff0c\u7528\u4e8e\u786e\u4fdd\u6811\u5728\u63d2\u5165\u548c\u5220\u9664\u65f6\u4fdd\u6301\u5e73\u8861\u3002'}),"\n",(0,l.jsx)(s.p,{children:"\u7279\u70b9\uff1a"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u8282\u70b9\u4e3a\u7ea2\u8272\u6216\u8005\u9ed1\u8272"}),"\n",(0,l.jsx)(s.li,{children:"\u7aef\u8282\u70b9\uff08\u6ca1\u6709\u4fe1\u606f\uff09\u4e3a\u9ed1\u8272"}),"\n",(0,l.jsx)(s.li,{children:"\u7ea2\u8272\u4e0d\u80fd\u8fde\u63a5\u7ea2\u8272"}),"\n",(0,l.jsx)(s.li,{children:"\u4ece\u6839\u8282\u70b9\u5230\u7aef\u8282\u70b9\u7684\u6bcf\u6761\u8def\u5f84\u90fd\u5177\u6709\u76f8\u540c\u6570\u91cf\u7684\u9ed1\u8272\u8282\u70b9"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",metastring:'title="\u5b9a\u4e49"',children:"template <typename Key, typename Value, typename Compare = std::less<Key>>\nclass RBTreeMap {\n  // \u6392\u5e8f\u51fd\u6570\n  Compare compare = Compare();\n\n  // \u8282\u70b9\u7ed3\u6784\u4f53\n  struct Node {\n    ...\n  };\n\n  // \u6839\u8282\u70b9\u6307\u9488\n  Node* root = nullptr;\n  // \u8bb0\u5f55\u7ea2\u9ed1\u6811\u4e2d\u5f53\u524d\u7684\u8282\u70b9\u4e2a\u6570\n  size_t count = 0;\n};\n"})}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"Identifier"}),(0,l.jsx)(s.th,{children:"Type"}),(0,l.jsx)(s.th,{children:"Description"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"left"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Node *"})}),(0,l.jsx)(s.td,{children:"\u5de6\u5b50\u8282\u70b9\u6307\u9488"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"right"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Node *"})}),(0,l.jsx)(s.td,{children:"\u53f3\u5b50\u8282\u70b9\u6307\u9488"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"parent"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Node *"})}),(0,l.jsx)(s.td,{children:"\u7236\u8282\u70b9\u6307\u9488"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"color"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"enum { BLACK, RED }"})}),(0,l.jsx)(s.td,{children:"\u989c\u8272\u679a\u4e3e"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"key"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Key"})}),(0,l.jsx)(s.td,{children:"\u8282\u70b9\u952e\u503c\uff0c\u5177\u6709\u552f\u4e00\u6027\u548c\u53ef\u6392\u5e8f\u6027"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"value"}),(0,l.jsx)(s.td,{children:(0,l.jsx)(s.code,{children:"Value"})}),(0,l.jsx)(s.td,{children:"\u8282\u70b9\u5185\u50a8\u5b58\u7684\u503c"})]})]})]}),"\n",(0,l.jsx)(s.admonition,{title:"\u6ce8\u610f",type:"success",children:(0,l.jsx)(s.p,{children:"\u7531\u4e8e\u7ea2\u9ed1\u6811\u662f\u7531 B \u6811\u884d\u751f\u800c\u6765\uff08\u53d1\u660e\u65f6\u7684\u6700\u521d\u7684\u540d\u5b57 symmetric binary B-tree \u8db3\u4ee5\u8bc1\u660e\u8fd9\u70b9\uff09\uff0c\u5e76\u975e\u76f4\u63a5\u7531\u5e73\u8861\u4e8c\u53c9\u6811\u5916\u52a0\u9650\u5236\u6761\u4ef6\u63a8\u5bfc\u800c\u6765\uff0c\u63d2\u5165\u64cd\u4f5c\u7684\u540e\u7eed\u7ef4\u62a4\u548c\u5220\u9664\u64cd\u4f5c\u7684\u540e\u7eed\u7ef4\u62a4\u4e2d\u90e8\u5206\u5bf9\u64cd\u4f5c\u7684\u89e3\u91ca\u4f5c\u7528\u4ec5\u662f\u5e2e\u52a9\u7406\u89e3\uff0c\u5e76\u4e0d\u80fd\u5c06\u5176\u4f5c\u4e3a\u8be5\u64cd\u4f5c\u7684\u539f\u7406\u63a8\u5bfc\u548c\u8bc1\u660e\u3002"})}),"\n",(0,l.jsx)(s.h3,{id:"\u63d2\u5165-1",children:"\u63d2\u5165"}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"\u7531\u4e8e\u8be5\u90e8\u5206\u65cb\u8f6c\u64cd\u4f5ccase\u592a\u591a\uff0c\u6240\u4ee5\u4e3a\u4e86\u7b80\u5355\u5e94\u5bf9\uff0c\u521b\u9020\u4e86\u4e00\u4e2a\u6a21\u578b\u53bb\u8f85\u52a9\u64cd\u4f5c\u3002\u6211\u628a\u5b83\u547d\u540d\u4e3a\u6c11\u4e3b\u9769\u547d\u7b97\u6cd5\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u4e24\u515a\u6c11\u4e3b\u7b97\u6cd5\uff1a\n\u6574\u4e2a\u7ea2\u9ed1\u6811\u4ee3\u8868\u653f\u575b\u3002\u4e00\u4e2a\u8282\u70b9\u4ee3\u8868\u4e00\u4e2a\u4eba\u7269\u3002\u4eba\u7269\u5206\u4e24\u79cd\uff1a\u7ea2\u8272\uff08\u5728\u91ce\u515a/\u6ca1\u6709\u8bdd\u8bed\u6743\uff09\uff0c\u9ed1\u8272\uff08\u6267\u653f\u515a/\u62e5\u6709\u8bdd\u8bed\u6743\uff09\u3002\n\u603b\u7edf\uff1a\u6839\u8282\u70b9\u3002\n\u540c\u50da\uff1a\u4f60\u7684\u5144\u5f1f\u8282\u70b9\u3002\n\u4e0a\u5c42\u9886\u5bfc\uff1a\u4f60\u7684\u6700\u8fd1\u7684\u9ed1\u8272\u8282\u70b9\u3002\n\u4e0a\u5c42\u90e8\u95e8\uff1a\u4f60\u7684\u4e0a\u5c42\u548c\u4ed6\u7684\u540c\u50da\uff0c\u5373\u9ad8\u5c42\u7684\u4e0b\u5c5e\u3002\n\u4e0b\u5c5e\uff1a\u5b50\u8282\u70b9\u3002\n\u4f60\uff1a\u6700\u4e3a\u4e09\u7ea7\u6700\u4e0b\u5c42\u7684\u4e00\u7ea7\u3002\n\u526f\u603b\u7edf\uff1a\u8001\u677f\u7684\u4e24\u4e2a\u5b50\u8282\u70b9\u3002\n\u9ad8\u5c42\uff1a\u4e0a\u5c42\u7684\u4e0a\u5c42\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u9996\u5148\u6709\u51e0\u4e2a\u9700\u8981\u660e\u786e\u7684\uff1a"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u4f60\u53ea\u80fd\u901a\u8fc7\u5728\u91ce\u515a\u7684\u8eab\u4efd\u8fdb\u5165\u653f\u575b\u3002\uff08\u8fd9\u53ef\u80fd\u662f\u67d0\u79cd\u89c4\u5b9a\uff09"}),"\n",(0,l.jsx)(s.li,{children:"\u5728\u91ce\u515a\u4e0d\u80fd\u592a\u8fd1\uff08\u76f4\u63a5\u8fde\u63a5\uff09\uff0c\u5426\u5219\u5728\u91ce\u515a\u529b\u91cf\u592a\u96c6\u4e2d\uff0c\u5c31\u4f1a\u53cd\u6297\u4e0a\u53f0\uff0c\u751a\u81f3\u6574\u4e2a\u653f\u575b\u52a8\u8361\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u6211\u4eec\u73b0\u5728\u5047\u8bbe\u4f60\u662f\u5728\u91ce\u515a\uff08\u6211\u4eec\u53ea\u662f\u4ee5\u4f60\u4e3a\u4e2d\u5fc3\u5206\u6790\u3002\u5176\u5b9e\u5982\u679c\u4f60\u662f\u6267\u653f\u515a\u9635\u8425\uff0c\u90a3\u653f\u575b\u662f\u7a33\u5b9a\u7684\uff0c\u4e0d\u4f1a\u53d1\u751f\u52a8\u8361\uff09\uff0c\u6709\u51e0\u79cd\u60c5\u51b5\uff1a"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u4f60\u7684\u4e0a\u5c42\u662f\u6267\u653f\u515a\uff0c\u90a3\u4e48\u4f60\u7684\u5728\u91ce\u515a\u8eab\u4efd\u5c31\u4e0d\u4f1a\u6709\u7ffb\u8eab\u7684\u673a\u4f1a\u3002\uff08\u4f60\u5982\u679c\u662f\u526f\u603b\u7edf\uff0c\u90a3\u603b\u7edf\u4e00\u5b9a\u662f\u6267\u653f\u515a\u3002\u56e0\u4e3a\u4e0d\u5b58\u5728\u6267\u653f\u515a\u65e2\u4e0d\u662f\u603b\u7edf\u4e5f\u4e0d\u662f\u526f\u603b\u7edf\u7684\u60c5\u51b5\u3002\uff09"}),"\n",(0,l.jsxs)(s.li,{children:["\u5982\u679c\u4f60\u7684\u4e0a\u5c42\u662f\u5728\u91ce\u515a\uff0c\u90a3\u4e48\uff1a","\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u4f60\u7684\u4e0a\u5c42\u90e8\u95e8\u90fd\u662f\u5728\u91ce\u515a\uff0c\u90a3\u9ad8\u5c42\u76f4\u63a5\u88ab\u67b6\u7a7a\uff08\u8f6c\u7ea2\uff09\uff0c\u4f60\u7684\u4e0a\u5c42\u9886\u5bfc\u53ef\u4ee5\u76f4\u63a5\u593a\u6743\u3002\uff08\u8f6c\u9ed1\uff09\uff08\u9700\u8981\u9012\u5f52\u7ef4\u62a4\u4e0a\u5c42\u90e8\u95e8\uff09"}),"\n",(0,l.jsx)(s.li,{children:"\u5982\u679c\u4f60\u7684\u4e0a\u5c42\u90e8\u95e8\u5206\u5c5e\u4e24\u515a\uff0c\u90a3\u4e48\u4f60\u548c\u4f60\u7684\u9886\u5bfc\u4e2d\u8ddd\u79bb\u9ad8\u5c42\u8fd1\u7684\u4eba\uff0c\u88ab\u9009\u4e3e\u4e0a\u4f4d\u6267\u653f\uff0c\u539f\u9ad8\u5c42\u4e0b\u53f0\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},1862:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/1711025818170-11902f13f67ed8d6b0c85592e92512a5.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var l=n(96540);const i={},a=l.createContext(i);function r(e){const s=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(a.Provider,{value:s},e.children)}}}]);
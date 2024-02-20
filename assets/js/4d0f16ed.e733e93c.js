"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[9595],{3714:(n,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>x});var l=i(4848),e=i(8453);const c={},r="\u8fd0\u884c\u73af\u5883",d={id:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf",title:"OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf",description:"- \u7cfb\u7edf\u5185\u6838\uff08Kernel\uff09",source:"@site/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf.mdx",sourceDirName:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840",slug:"/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/OS\u8fd0\u884c\u73af\u5883\u548c\u4e2d\u65ad\u7cfb\u7edf.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5206\u533a\u5206\u914d",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/M-Cache\u7cfb\u7edf\u548c\u5185\u5b58\u7a7a\u95f4\u7ba1\u7406/\u5185\u5b58\u7a7a\u95f4\u5206\u914d\u548c\u7ba1\u7406"},next:{title:"\u7a0b\u5e8f\u88c5\u5165",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/"}},h={},x=[{value:"\u4e2d\u65ad\u5224\u4f18",id:"\u4e2d\u65ad\u5224\u4f18",level:2},{value:"\u4e2d\u65ad\u8fc7\u7a0b",id:"\u4e2d\u65ad\u8fc7\u7a0b",level:2}];function j(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,e.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7cfb\u7edf\u5185\u6838\uff08Kernel\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u5176\u5b9e\u4e5f\u662f\u4e00\u7ec4\u7a0b\u5e8f\uff0c\u8fd9\u7ec4\u7a0b\u5e8f\u91cd\u70b9\u5728\u4e8e\u7ba1\u7406\u8ba1\u7b97\u673a\u7684\u6240\u6709\u6d3b\u52a8\u4ee5\u53ca\u9a71\u52a8\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u786c\u4ef6"}),"\n",(0,l.jsx)(s.p,{children:"\u6bd4\u5982\uff0c\u4f60\u7684\u5185\u6838\u4e0d\u652f\u6301 TCP/IP \u534f\u8bae\uff0c\u90a3\u4e48\u65e0\u8bba\u4f60\u8d2d\u4e70\u4ec0\u4e48\u7f51\u5361\u90fd\u4e0d\u80fd\u652f\u6301\u4e0a\u7f51\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7cfb\u7edf\u8c03\u7528\uff08System Call\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u6240\u6709\u7684\u786c\u4ef6\u7531\u5185\u6838\u7ba1\u7406\uff0c\u90a3\u4e48\u5f00\u53d1\u7a0b\u5e8f\u5c31\u7531\u53c2\u8003\u786c\u4ef6\u51fd\u6570\u53d8\u4e3a\u53c2\u8003\u5185\u6838\u529f\u80fd\uff0c \u6240\u4ee5\u64cd\u4f5c\u7cfb\u7edf\u901a\u5e38\u90fd\u4f1a\u63d0\u4f9b\u4e00\u6574\u7ec4\u5f00\u53d1\u63a5\u53e3\u7ed9\u5de5\u7a0b\u5e08\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u90a3\u4e48\u64cd\u4f5c\u7cfb\u7edf\u7684\u89d2\u8272\u5c31\u5206\u4e3a\u4ee5\u4e0b\u51e0\u4e2a\uff1a"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u786c\u4ef6"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5185\u6838\uff1a\u4e3b\u8981\u7ba1\u7406\u786c\u4ef6\uff0c\u63d0\u4f9b\u5408\u7406\u7684\u8ba1\u7b97\u673a\u7cfb\u7edf\u8d44\u6e90\u5206\u914d\uff08CPU\u3001\u5185\u5b58\u4f7f\u7528\u8d44\u6e90\u7b49\uff09"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7cfb\u7edf\u8c03\u7528"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5e94\u7528\u7a0b\u5e8f"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u64cd\u4f5c\u7cfb\u7edf\u5c31\u662f\u5185\u6838\u548c\u7cfb\u7edf\u8c03\u7528"}),"\n",(0,l.jsx)(s.p,{children:"\u4e3a\u4e86\u4fdd\u62a4\u5185\u6838\uff0c\u63d0\u4f9b\u4e86\u4e00\u6574\u7ec4\u5f00\u53d1\u63a5\u53e3\uff0c\u8fd9\u5c31\u662f\u7cfb\u7edf\u8c03\u7528\u5c42\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u6838\u5c42\u76f4\u63a5\u53c2\u8003\u786c\u4ef6\u89c4\u683c\u5199\u6210\uff0c\u6240\u4ee5\u540c\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7a0b\u5e8f\u4e0d\u80fd\u591f\u5728\u4e0d\u4e00\u6837\u7684\u786c\u4ef6\u67b6\u6784\u4e0b\u8fd0\u884c"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u64cd\u4f5c\u7cfb\u7edf\u53ea\u662f\u5728\u7ba1\u7406\u6574\u4e2a\u786c\u4ef6\u8d44\u6e90\uff1a\u6240\u4ee5\u9700\u8981\u5404\u79cd\u5e94\u7528\u7a0b\u5e8f\u6765\u9a71\u52a8\u5b83\u5de5\u4f5c"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u90fd\u662f\u53c2\u8003\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a5\u53e3\uff0c\u6240\u4ee5\u4e0d\u80fd\u5938\u64cd\u4f5c\u7cfb\u7edf\uff1a\u5982 win \u4e0a\u7684\u7a0b\u5e8f\u4e0d\u80fd\u518d linux \u4e0a\u8fd0\u884c"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5185\u6838\u529f\u80fd"}),"\n",(0,l.jsx)(s.p,{children:"\u5185\u6838\u4e3b\u8981\u8d1f\u8d23\u8ba1\u7b97\u673a\u7cfb\u7edf\u76f8\u5173\u7684\u8d44\u6e90\u5206\u914d\u4e0e\u7ba1\u7406\uff0c\u6700\u91cd\u8981\u7684\u5c31\u662f CPU \u4e0e\u5185\u5b58\u4e86\uff0c\u6240\u4ee5\u81f3\u5c11\u6709\u4ee5\u4e0b\u51e0\u4e2a\u529f\u80fd\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7cfb\u7edf\u8c03\u7528\u63a5\u53e3\uff08System call interface\uff09"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7a0b\u5e8f\u7ba1\u7406\uff08Process control\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u5982\u591a\u4efb\u52a1\u73af\u5883\u4e0b\uff0c\u9700\u8981\u7ba1\u7406 CPU \u4ec0\u4e48\u65f6\u5019\u6267\u884c\u54ea\u4e2a\u4efb\u52a1\u7684\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5185\u5b58\u7ba1\u7406\uff08Memory management\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u5185\u5b58\u5f88\u91cd\u8981\uff0c\u5f53\u5185\u5b58\u4e0d\u8db3\u65f6\uff0c\u5185\u6838\u4e00\u822c\u90fd\u4f1a\u63d0\u4f9b\u865a\u62df\u5185\u5b58\u7684\u529f\u80fd\uff0c\u4f7f\u7528\u5185\u5b58\u4ea4\u6362\uff08Swap\uff09\u529f\u80fd"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u6587\u4ef6\u7cfb\u7edf\uff08Filesystem management\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u4f8b\u5982\u6570\u636e\u7684\u8f93\u5165\u8f93\u51fa\uff08I/O\uff09\u7b49\u5de5\u4f5c"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u8bbe\u5907\u9a71\u52a8\uff08Device driver\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u786c\u4ef6\u7684\u7ba1\u7406\u662f\u5185\u6838\u4e3b\u8981\u5de5\u4f5c\u4e4b\u4e00\uff0c\u9a71\u52a8\u7a0b\u5e8f\u5c31\u662f\u9700\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u73b0\u5728\u6709\u53ef\u52a0\u8f7d\u6a21\u5757\u529f\u80fd\uff0c \u53ef\u4ee5\u5c06\u9a71\u52a8\u7a0b\u5e8f\u7f16\u5199\u6210\u6a21\u5757\uff0c\u5c31\u4e0d\u9700\u8981\u91cd\u65b0\u7f16\u8bd1\u5185\u6838\u4e86\uff08\u540e\u9762\u4f1a\u8bb2\u5230\uff09"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h1,{id:"\u8fd0\u884c\u73af\u5883",children:"\u8fd0\u884c\u73af\u5883"}),"\n",(0,l.jsxs)(s.p,{children:["\u521a\u5f00\u673a\u662f\u5185\u6838\u6001\uff0c\u7136\u540e\u64cd\u4f5c\u7cfb\u7edf\u4e3b\u52a8\u8ba9\u51fa",(0,l.jsx)(s.code,{children:"cpu"}),"\u4f7f\u7528\u6743"]}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5185\u6838\u6001\u2192\u7528\u6237\u6001\uff1a\u4e2d\u65ad\u8fd4\u56de\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7528\u6237\u6001\u2192\u5185\u6838\u6001\uff1a\u4e2d\u65ad\u5f15\u53d1\uff0c\u786c\u4ef6\u81ea\u52a8\u5b8c\u6210\u53d8\u6001\u529f\u80fd\uff0c\u64cd\u4f5c\u7cfb\u7edf\u5c06\u91cd\u65b0\u593a\u56deCPU\u4f7f\u7528\u6743\u3002\u7528\u6237\u5806\u6808\u5207\u6362\u4e3a\u7cfb\u7edf\u5806\u6808\uff0c\u8fd9\u4e2a\u7cfb\u7edf\u5806\u6808\u4e5f\u662f\u5c5e\u4e8e\u8be5\u8fdb\u7a0b\u7684\u3002"}),"\n",(0,l.jsxs)(s.ol,{start:"3",children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7cfb\u7edf\u8c03\u7528\uff1a\u4e2d\u65ad\u6765\u5b9e\u73b0"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5f02\u5e38\uff1a\u7f3a\u9875\u7b49"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"IO\u8bbe\u5907\u4e2d\u65ad"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5185\u6838\u5305\u62ec\uff1a\u65f6\u949f\u7ba1\u7406",(0,l.jsx)(s.code,{children:"CLK"}),"\uff0c\u4e2d\u65ad\u673a\u5236",(0,l.jsx)(s.code,{children:"INT"}),"\uff0c\u539f\u8bed",(0,l.jsx)(s.code,{children:"Atomic Operation"}),"\uff0c\u7cfb\u7edf\u63a7\u5236\u7684\u72b6\u6001\u4fe1\u606f\u7684\u6570\u636e\u7ed3\u6784\uff08",(0,l.jsx)(s.code,{children:"JCB"}),"\u3001",(0,l.jsx)(s.code,{children:"PCB"}),"\u3001",(0,l.jsx)(s.code,{children:"DCB"}),"\u3001\u94fe\u8868\u3001\u6d88\u606f\u961f\u5217\u3001\u7f13\u51b2\u533a\u3001\u7a7a\u95f2\u533a\u767b\u8bb0\u8868\u3001\u5185\u5b58\u5206\u914d\u8868\u7b49\uff09"]}),"\n",(0,l.jsx)(s.p,{children:"\u7279\u6743\u6307\u4ee4\uff1a\u4ec5\u5141\u8bb8\u5185\u6838\u4f7f\u7528\u3002"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"IO\u8bbe\u5907"}),"\u542f\u52a8\u3001\u6d4b\u8bd5\u3001\u63a7\u5236\u6307\u4ee4"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u8bbf\u95ee\u7a0b\u5e8f\u72b6\u6001",(0,l.jsx)(s.code,{children:"PSW"}),"\u6307\u4ee4"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5b58\u53d6\u7279\u6b8a\u5bc4\u5b58\u5668\u6307\u4ee4:",(0,l.jsx)(s.strong,{children:"\u4e2d\u65ad\u5bc4\u5b58\u5668\u3001\u65f6\u949f\u5bc4\u5b58\u5668"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"\u539f\u8bed"}),":\u8fdb\u7a0b\u63a7\u5236\u7528\u7684\u7a0b\u5e8f\u6bb5\uff0c\u6267\u884c\u671f\u95f4\u4e0d\u5141\u8bb8\u4e2d\u65ad\uff0c\u5b83\u662f\u4e00\u4e2a\u4e0d\u53ef\u5206\u5272\u7684\u57fa\u672c\u5355\u4f4d\u3002\u901a\u8fc7\u5173\u4e2d\u65ad\u6307\u4ee4\u548c\u5f00\u4e2d\u65ad\u6307\u4ee4\u5b9e\u73b0\u539f\u8bed\u7684\u539f\u5b50\u6027\uff0c\u6267\u884c\u671f\u95f4\u4e0d\u4f1a\u88ab\u4e2d\u65ad\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h1,{id:"\u4e2d\u65ad",children:"\u4e2d\u65ad"}),"\n",(0,l.jsx)(s.p,{children:"\u8ba9\u64cd\u4f5c\u7cfb\u7edf\u593a\u56deCPU\u4f7f\u7528\u6743\u7684\u552f\u4e00\u9014\u5f84\uff0c\u6ca1\u6709\u4e2d\u65ad\u5c31\u6ca1\u6709\u5e76\u53d1\uff0c\u6ca1\u6709\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u4e00\u5b9a\u662f\u5185\u6838\u7a0b\u5e8f\uff0c\u4e0d\u53ef\u5c4f\u853d\u4e2d\u65ad\u548c\u5185\u90e8\u5f02\u5e38\u5728\u5173\u4e2d\u65ad\u6a21\u5f0f\u4e0b\u4e5f\u4f1a\u88ab\u54cd\u5e94\u3002\u673a\u5236\uff1a\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u4e00\u5b9a\u662f\u5185\u6838\u7a0b\u5e8f"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5185\u4e2d\u65ad\uff08\u5f02\u5e38\uff09\uff1a\u548c\u5f53\u524d\u6267\u884c\u7684\u6307\u4ee4\u6709\u5173\uff0c\u6765\u81ea",(0,l.jsx)(s.strong,{children:"\u4e3b\u673a"}),"\u5185\u90e8\u3002\u5730\u5740\u975e\u6cd5\u6821\u9a8c\u9519\u8bef\u975e\u6cd5\u6307\u4ee4"]}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u9677\u5165",(0,l.jsx)(s.code,{children:"trap"}),"\u8f6f\u4e2d\u65ad\uff1a\u7a0b\u5e8f\u60f3\u8981\u5185\u6838\u670d\u52a1\uff0c\u4e3b\u52a8\u5c06CPU\u63a7\u5236\u6743\u8fd8\u7ed9\u5185\u6838\uff0c\u7cfb\u7edf\u8c03\u7528\u901a\u8fc7\u9677\u5165\u6307\u4ee4\u5b8c\u6210"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u6545\u969c",(0,l.jsx)(s.code,{children:"fault"}),"\u7f3a\u9875\u4e2d\u65ad\uff1a\u9519\u8bef\u6761\u4ef6\u5f15\u8d77\uff0c\u5185\u6838\u53ef\u4fee\u590d\uff0c\u4f1a\u8fd4\u56de\u63a7\u5236\u6743\uff0c\u6545\u969c\u5904\u7406\u540e\u8fd4\u56de\u5f53\u524d\u6307\u4ee4"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u7ec8\u6b62",(0,l.jsx)(s.code,{children:"abort"}),"\uff1a\u786c\u4ef6\u81f4\u547d\u9519\u8bef\u5f15\u8d77\uff0c\u5185\u6838\u65e0\u6cd5\u4fee\u590d\uff0c\u4e0d\u4f1a\u8fd4\u56de\u63a7\u5236\u6743\u9664\u6570\u4e3a\u96f6\u81ea\u884c\u4e2d\u65ad"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5916\u4e2d\u65ad\uff1a\u5916\u4e2d\u65ad\u53ef\u4ee5\u53d1\u751f\u5728\u7528\u6237\u6001\u3002\u4e2d\u65ad\u7684\u65ad\u70b9\u662f\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740\uff0c\u548c\u5f02\u5e38\u7684\u65ad\u70b9\u4e0d\u540c\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u65f6\u949f\u4e2d\u65ad\uff1a\u7531\u65f6\u949f\u90e8\u4ef6\u53d1\u6765\u7684\u4e2d\u65ad\u4fe1\u53f7\uff0c\u5b9e\u73b0\u7a0b\u5e8f\u5e76\u53d1\u8fd0\u884c"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"IO\u4e2d\u65ad\uff1a\u7531\u8f93\u5165\u8f93\u51fa\u8bbe\u5907\u53d1\u6765\u4e2d\u65ad\u4fe1\u53f7"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u6307\u4ee4\u4e2d\u65ad\u548c\u7f3a\u9875\u4e2d\u65ad\u7684\u533a\u522b\uff1f"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u6307\u4ee4\u4e2d\u65ad\u5468\u671f\u7ed3\u675f\u540e\u6267\u884c\u4e0b\u4e00\u6761\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u7f3a\u9875\u4e2d\u65ad\u7ed3\u675f\u540e\u8bbf\u95ee\u5f53\u524d\u9875"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u6e90\uff1a\u53d1\u51fa\u4e2d\u65ad\u8bf7\u6c42\u7684IO\u8bbe\u5907\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u8bbe\u5907\u7f16\u7801\u5668\uff08\u4e2d\u65ad\u5411\u91cf\u5730\u5740\u5f62\u6210\u90e8\u4ef6\uff09\uff1aIO\u8bbe\u5907\u4e00\u4f46\u54cd\u5e94\u4e86IO\u4e2d\u65ad\uff0c\u5c31\u8981\u6682\u505c\u73b0\u884c\u7a0b\u5e8f\uff0c\u8f6c\u53bb\u6267\u884c\u8be5\u8bbe\u5907\u7684\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u3002\u4e0d\u540c\u8bbe\u5907\u6709\u4e0d\u540c\u7684\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\uff0c\u6bcf\u4e2a\u670d\u52a1\u7a0b\u5e8f\u90fd\u6709\u4e00\u4e2a\u5165\u53e3\u5730\u5740\uff0cCPU\u5fc5\u987b\u627e\u5230\u8fd9\u4e2a\u5165\u53e3\u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\uff1a\u6bcf\u4e2a\u4e2d\u65ad\u6e90\u90fd\u6709\u5bf9\u5e94\u7684\u5904\u7406\u7a0b\u5e8f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u5411\u91cf\uff1a\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u7684\u5165\u53e3\u5730\u5740\u79f0\u4e3a\u4e2d\u65ad\u5411\u91cf\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u5411\u91cf\u8868\uff1a\u6240\u6709\u4e2d\u65ad\u5411\u91cf\u6784\u6210\u4e00\u4e2a\u8868\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u5411\u91cf\u5730\u5740\uff1a\u4e2d\u65ad\u5411\u91cf\u8868\u6bcf\u4e2a\u8868\u9879\u6240\u5728\u7684\u5185\u5b58\u5730\u5740\u6216\u8868\u9879\u7684\u7d22\u5f15\u503c\uff0c\u79f0\u4e3a\u5411\u91cf\u5730\u5740\u6216\u4e2d\u65ad\u7c7b\u578b\u53f7\u3002\u6bcf\u4e2a\u4e2d\u65ad\u90fd\u6709\u552f\u4e00\u7684\u7c7b\u578b\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u4e2d\u65ad\u8bf7\u6c42\u6807\u8bb0\u89e6\u53d1\u5668",(0,l.jsx)(s.code,{children:"INTR"}),"\u4e2d\u65ad\u6e90\u5411CPU\u63d0\u51fa\u4e2d\u65ad\u8bf7\u6c42\uff1a",(0,l.jsx)(s.code,{children:"INTR = 1"}),"\u4e2d\u65ad\u6e90\u6709\u8bf7\u6c42\u3002",(0,l.jsx)(s.code,{children:"INTR"}),"\u53ef\u5c4f\u853d\u4e2d\u65ad\uff0c",(0,l.jsx)(s.code,{children:"NMI"}),"\u4e0d\u53ef\u5c4f\u853d\u4e2d\u65ad\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u4e2d\u65ad\u89e6\u53d1\u5668",(0,l.jsx)(s.code,{children:"EINT"}),"CPU\u54cd\u5e94\u4e2d\u65ad\u6761\u4ef6\uff1a\u5f00\u4e2d\u65ad\u6307\u4ee4\u7f6e1\uff0c\u5173\u4e2d\u65ad\u6307\u4ee4\u7f6e0\uff0c\u5c4f\u853d\u53ef\u5c4f\u853d\u4e2d\u65ad\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5c4f\u853d\u5b57\u89e6\u53d1\u5668",(0,l.jsx)(s.code,{children:"MASK"}),"\uff1a\u6bcf\u4e2a\u4e2d\u65ad\u6e90\u4e00\u4e2a",(0,l.jsx)(s.code,{children:"MASK"}),"\uff0c1\u8868\u793a\u5c4f\u853d\u8be5\u4e2d\u65ad\u8bf7\u6c42\uff0c\u6240\u6709\u89e6\u53d1\u5668\u7ec4\u6210\u5c4f\u853d\u5b57\u5bc4\u5b58\u5668\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e2d\u65ad\u5224\u4f18",children:"\u4e2d\u65ad\u5224\u4f18"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u786c\u4ef6\u5411\u91cf\u6cd5\u8f6f\u4ef6\u5b9e\u73b0\uff08\u6309\u4f18\u5148\u7ea7\u67e5\u8be2\u5404\u4e2d\u65ad\u6e90\u662f\u5426\u6709\u4e2d\u65ad\u8bf7\u6c42\uff0c\u8f6c\u5411\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u5165\u53e3\u5730\u5740\uff09\uff1aCPU\u54cd\u5e94\u4e2d\u65ad\u65f6\uff0c\u5229\u7528\u786c\u4ef6\u4ea7\u751f\u5411\u91cf\u5730\u5740\uff0c\u518d\u7531\u5411\u91cf\u5730\u5740\u627e\u5230\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u5165\u53e3\u5730\u5740\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"CPU\u54cd\u5e94\u4e2d\u65ad\uff0c\u53ea\u8981\u5c06\u5411\u91cf\u5730\u5740\u9001\u81f3PC\uff0c\u6267\u884c\u8fd9\u6761\u6307\u4ee4\uff0c\u4fbf\u53ef\u65e0\u6761\u4ef6\u5730\u8f6c\u5411\u67d0\u670d\u52a1\u7a0b\u5e8f\u7684\u5165\u53e3"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5411\u91cf\u5730\u5740\u8868"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u54cd\u5e94\u4f18\u5148\u7ea7\u548c\u5904\u7406\u4f18\u5148\u7ea7"}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u65e0\u5c4f\u853d\u6280\u672f\u6761\u4ef6\u4e0b\uff0cCPU\u7406\u8bba\u4e0a\u6267\u884c\u4e2d\u65ad\u7684\u987a\u5e8f"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5728\u5c4f\u853d\u6280\u672f\u7684\u52a0\u6301\u4e0b",(0,l.jsx)(s.code,{children:"MASK"}),"\uff0cCPU\u5b9e\u9645\u6267\u884c\u4e2d\u65ad\u7684\u987a\u5e8f"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u4e2d\u65ad\u8fc7\u7a0b",children:"\u4e2d\u65ad\u8fc7\u7a0b"}),"\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u9690\u6307\u4ee4\u4e0d\u5c5e\u4e8e\u7cfb\u7edf\u6307\u4ee4\uff0c\u5b83\u662fCPU\u5728\u4e2d\u65ad\u5468\u671f\u5185\u7531\u786c\u4ef6\u81ea\u52a8\u5b8c\u6210\u7684\u4e00\u6761\u6307\u4ee4\u3002"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u4e2d\u65ad\u6e90\u53d1\u51fa\u4e2d\u65ad\u8bf7\u6c42\uff0c",(0,l.jsx)(s.code,{children:"INTR = 1"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u54cd\u5e94\u5224\u4f18"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["CPU\u54cd\u5e94\u4e2d\u65ad\uff1a\u5f53",(0,l.jsx)(s.code,{children:"EINT=1"}),"\u65f6\uff0c\u5728\u6307\u4ee4\u6267\u884c\u5468\u671f\u7ed3\u675f\u540e\uff0c\u67e5\u8be2\u4e2d\u65ad\u3002\u786c\u4ef6\u5f15\u5bfc\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5173\u4e2d\u65ad\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4fdd\u5b58\u65ad\u70b9"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u5bfb\u5740\uff1a\u8bc6\u522b\u4e2d\u65ad\u6e90\u83b7\u5f97\u4e2d\u65ad\u7c7b\u578b\u53f7"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u7a0b\u5e8f"}),"\n"]}),"\n",(0,l.jsx)(s.li,{}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u4fdd\u5b58\u73b0\u573a\u548c",(0,l.jsx)(s.code,{children:"MASK"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5f00\u4e2d\u65ad\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u6267\u884c\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5173\u4e2d\u65ad\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u6062\u590d\u73b0\u573a\u548c",(0,l.jsx)(s.code,{children:"MASK"})]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5f00\u4e2d\u65ad\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u8fd4\u56de"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u7a0b\u5e8f\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u65b0\u7684\u4e2d\u65ad\u8bf7\u6c42\uff1f"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e0d\u7406\uff0c\u5173\u4e2d\u65ad"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u4e2d\u65ad\u5d4c\u5957\uff1a\u63d0\u524d\u8bbe\u7f6e\u5f00\u4e2d\u65ad\u6307\u4ee4\uff0c\u65b0\u7684\u4f18\u5148\u7ea7\u8981\u9ad8\u3002"}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u5c4f\u853d\u6280\u672f"}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,l.jsx)(s,{...n,children:(0,l.jsx)(j,{...n})}):j(n)}},8453:(n,s,i)=>{i.d(s,{R:()=>r,x:()=>d});var l=i(6540);const e={},c=l.createContext(e);function r(n){const s=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function d(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),l.createElement(c.Provider,{value:s},n.children)}}}]);
"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[4156],{5458:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=s(4848),l=s(8453);const r={},c=void 0,d={id:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a7\u5236\u65b9\u5f0f",title:"IO\u63a7\u5236\u65b9\u5f0f",description:"\u7a0b\u5e8f\u67e5\u8be2\u65b9\u5f0f",source:"@site/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a7\u5236\u65b9\u5f0f.mdx",sourceDirName:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406",slug:"/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a7\u5236\u65b9\u5f0f",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a7\u5236\u65b9\u5f0f",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a7\u5236\u65b9\u5f0f.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IO\u63a5\u53e3",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u63a5\u53e3"},next:{title:"\u7528\u6237\u5c42\u8f6f\u4ef6",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/"}},t={},h=[{value:"\u7a0b\u5e8f\u67e5\u8be2\u65b9\u5f0f",id:"\u7a0b\u5e8f\u67e5\u8be2\u65b9\u5f0f",level:3},{value:"\u7a0b\u5e8f\u4e2d\u65ad\u65b9\u5f0f",id:"\u7a0b\u5e8f\u4e2d\u65ad\u65b9\u5f0f",level:3},{value:"DMA\u65b9\u5f0f",id:"dma\u65b9\u5f0f",level:3},{value:"\u901a\u9053",id:"\u901a\u9053",level:3}];function x(n){const e={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"\u7a0b\u5e8f\u67e5\u8be2\u65b9\u5f0f",children:"\u7a0b\u5e8f\u67e5\u8be2\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u5b8c\u5168\u8f6f\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u7531CPU\u901a\u8fc7\u7a0b\u5e8f\u5faa\u73af\u68c0\u6d4bIO\u8bbe\u5907\u662f\u5426\u5c31\u7eea\uff0c\u4ece\u800c\u63a7\u5236IO\u8bbe\u5907\u88ab\u548c\u4e3b\u673a\u4ea4\u6362\u4fe1\u606f"}),"\n",(0,i.jsx)(e.h3,{id:"\u7a0b\u5e8f\u4e2d\u65ad\u65b9\u5f0f",children:"\u7a0b\u5e8f\u4e2d\u65ad\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"\u7a0b\u5e8f\u5b9e\u73b0\u6570\u636e\u4f20\u9001\uff0c\u4f46\u4e2d\u65ad\u5904\u7406\u9700\u8981\u786c\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"CPU\u63a5\u53e3\u4e0d\u4ec5\u5728\u786c\u4ef6\u65b9\u9762\u9700\u8981\u589e\u52a0\u76f8\u5e94\u7684\u7535\u8def\uff0c\u800c\u4e14\u5728\u8f6f\u4ef6\u65b9\u9762\u8fd8\u5fc5\u987b\u7f16\u5740\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"IO\u4e2d\u65ad\u5904\u7406\u8fc7\u7a0b"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["CPU\u542f\u52a8IO\u8bbe\u5907\uff0c",(0,i.jsx)(e.code,{children:"device_staus=0"}),"\uff0c",(0,i.jsx)(e.code,{children:"B=1"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u63a5\u53e3\u542f\u52a8\u8f93\u5165\u8bbe\u5907\u5f00\u59cb\u5de5\u4f5c"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8f93\u5165\u8bbe\u5907\u5c06\u6570\u636e\u9001\u5165\u6570\u636e\u7f13\u5b58\u5668"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u8f93\u5165\u8bbe\u5907\u5411\u63a5\u53e3\u53d1\u51fa\u8bbe\u5907\u5de5\u4f5c\u7ed3\u675f\uff0c\u5c06",(0,i.jsx)(e.code,{children:"D=1"}),"\uff0c",(0,i.jsx)(e.code,{children:"B=0"}),".\u8bbe\u5907\u51c6\u5907\u5c31\u7eea"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u4ee4\u6267\u884c\u9636\u6bb5\u7ed3\u675f\u65f6\uff0cCPU\u53d1\u51fa\u4e2d\u65ad\u67e5\u8be2\u4fe1\u53f7"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"INTR=1"}),"\u6807\u5fd7\u8bbe\u5907\u5411CPU\u53d1\u51fa\u4e2d\u65ad\u8bf7\u6c42\uff0c\u4e0e\u6b64\u540c\u65f6",(0,i.jsx)(e.code,{children:"INTR"}),"\u9001\u81f3\u6392\u961f\u5668\u8fdb\u884c\u4e2d\u65ad\u5224\u4f18"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["CPU\u5141\u8bb8\u4e2d\u65ad",(0,i.jsx)(e.code,{children:"EINT=1"}),"\uff0c\u8bbe\u5907\u6709\u88ab\u6392\u961f\u9009\u4e2d\uff0c\u5373\u8fdb\u5165\u4e2d\u65ad\u54cd\u5e94\u9636\u6bb5\uff0c\u7531\u4e2d\u65ad\u54cd\u5e94\u4fe1\u53f7",(0,i.jsx)(e.code,{children:"INTA"}),"\u5c06\u6392\u961f\u5668\u9001\u81f3\u7f16\u7801\u5668\u5f62\u6210\u5411\u91cf\u5730\u5740"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5411\u91cf\u5730\u5740\u9001\u81f3",(0,i.jsx)(e.code,{children:"PC"}),"\uff0c\u4f5c\u4e3a\u4e0b\u4e00\u6761\u6307\u4ee4\u7684\u5730\u5740"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5411\u91cf\u5730\u5740\u4e2d\u5b58\u653e\u7684\u662f\u4e00\u6761\u65e0\u6761\u4ef6\u8f6c\u79fb\u6307\u4ee4\uff0c\u8fd9\u6761\u6307\u4ee4\u7ed3\u675f\u540e\u65e0\u6761\u4ef6\u8f6c\u81f3\u8bbe\u5907\u7684\u670d\u52a1\u7a0b\u5e8f\u5165\u53e3\u5730\u5740\uff0c\u5f00\u59cb\u6267\u884c\u4e2d\u65ad\u670d\u52a1\u5c42\u7a0b\u5e8f\uff0c\u8fdb\u5165\u4e2d\u65ad\u670d\u52a1\u9636\u6bb5\uff0c\u901a\u8fc7\u8f93\u5165\u6307\u4ee4\u5c06\u6570\u636e\u7f13\u51b2\u5b58\u50a8\u5668\u7684\u8f93\u5165\u6570\u636e\u9001\u81f3CPU\u7684\u901a\u7528\u5bc4\u5b58\u5668\uff0c\u518d\u5b58\u5165\u4e3b\u5b58\u7684\u76f8\u5173\u5355\u5143\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u7684\u6700\u540e\u4e00\u6761\u6307\u4ee4\u662f\u4e2d\u65ad\u8fd4\u56de\u6307\u4ee4\uff0c\u5f53\u5176\u6267\u884c\u7ed3\u675f\u65f6\uff0c\u4e2d\u65ad\u8fd4\u56de\u81f3\u6e90\u7a0b\u5e8f\u7684\u65ad\u70b9\u5904\uff0c\u81f3\u6b64\u4e00\u4e2a\u5b8c\u6210\u7684\u7a0b\u5e8f\u4e2d\u65ad\u5904\u7406\u7684\u8fc7\u7a0b\u5ba3\u544a\u7ed3\u675f\u3002\u4e2d\u65ad\u8fd4\u56de\u6307\u4ee4\u4e0d\u7b49\u4e8e\u65e0\u6761\u4ef6\u8f6c\u79fb\u6307\u4ee4\uff0c\u8fd8\u9700\u8981\u6062\u590d\u5bc4\u5b58\u5668\u73b0\u573a."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"dma\u65b9\u5f0f",children:"DMA\u65b9\u5f0f"}),"\n",(0,i.jsx)(e.p,{children:"Direct Memory Access\u5b8c\u5168\u786c\u4ef6"}),"\n",(0,i.jsx)(e.p,{children:"\u76f4\u63a5\u5185\u5b58\u8bbf\u95ee\uff0c\u5b8c\u5168\u7531\u786c\u4ef6\u8fdb\u884c\u6210\u7ec4\u4fe1\u606f\u4f20\u9001\u7684\u63a7\u5236\u65b9\u5f0f\u3002\u7ecf\u5e38\u7528\u4e8e\u78c1\u76d8\u3001\u663e\u5361\u3001\u58f0\u5361\u3001\u7f51\u5361\u7b49\u9ad8\u901f\u8bbe\u5907\u3002IO\u76f4\u63a5\u4e0e\u4e3b\u5b58\u4ea4\u6362\u4fe1\u606f\uff0c\u4e0d\u5360\u7528CPU\uff0c\u65e0\u9700\u8c03\u7528\u4e2d\u65ad\u7a0b\u5e8f\uff08\u4e2d\u65ad\u7684\u4f5c\u7528\u4ec5\u9650\u4e8e\u6545\u969c\u548c\u6b63\u5e38\u4f20\u9001\u7ed3\u675f\u65f6\u7684\u5904\u7406\uff09\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u5b58\u4e2d\u5f00\u8f9f\u4e13\u7528\u7f13\u51b2\u533a\u3001\u53ca\u65f6\u4f9b\u7ed9\u548c\u63a5\u6536\u5916\u8bbe\u7684\u6570\u636e"}),"\n",(0,i.jsx)(e.p,{children:"DMA\u63a7\u5236\u5668\uff1a\u5fc5\u987b\u5177\u6709\u63a7\u5236\u7cfb\u7edf\u603b\u7ebf\u7684\u80fd\u529b\uff0c\u5305\u62ec\u547d\u4ee4\u5bc4\u5b58\u5668\uff0c\u5185\u5b58\u5730\u5740\u5bc4\u5b58\u5668\uff0c\u6570\u636e\u5bc4\u5b58\u5668\uff0c\u6570\u636e\u8ba1\u6570\u5668"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"DMA"}),"\u5728\u4f20\u9001\u5f00\u59cb\u524d\u8981\u901a\u8fc7\u7a0b\u5e8f\u8fdb\u884c\u9884\u5904\u7406\uff0c\u6570\u636e\u4f20\u8f93\u7ed3\u675f\u540e\u8981\u901a\u8fc7\u4e2d\u65ad\u65b9\u5f0f\u8fdb\u884c\u540e\u5904\u7406\u3002 CPU\u5bf9DMA\u8bf7\u6c42\u7684\u54cd\u5e94\u53ef\u4ee5\u53d1\u751f\u5728\u4efb\u4f55\u4e00\u4e2a\u673a\u5668\u5468\u671f\u7ed3\u675f\u65f6\u3002"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9884\u5904\u7406\uff1aCPU\u5b8c\u6210\u4e00\u4e9b\u5fc5\u8981\u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u6d4b\u8bd5IO\u8bbe\u5907\u72b6\u6001\uff0c\u521d\u59cb\u5316DMA\u63a7\u5236\u5668\u4e2d\u6709\u5173\u5bc4\u5b58\u5668\u3001\u8bbe\u7f6e\u4f20\u9001\u65b9\u5411\uff0c\u542f\u52a8\u8bbe\u5907\u7b49\uff0c\u7136\u540eCPU\u8fd4\u56de\u6267\u884c\u539f\u6765\u7a0b\u5e8f\u3002IO\u8bbe\u5907\u51c6\u5907\u597d\u53d1\u9001\u6570\u636e\u6216\u63a5\u53d7\u6570\u636e\u540e\uff0cIO\u8bbe\u5907\u5411DMA\u63a7\u5236\u5668\u53d1\u51faDMA\u8bf7\u6c42\uff0c\u5728\u7531DMA\u63a7\u5236\u5668\u60f3CPU\u53d1\u9001\u603b\u7ebf\u8bf7\u6c42\uff0c\u7528\u4ee5\u4f20\u8f93\u6570\u636e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6570\u636e\u4f20\u8f93\uff1a\u5355\u4f4d\u53ef\u4ee5\u662f\u5b57\u8282\u3001\u5b57\u3001\u5757\u3002\u6570\u636e\u4f20\u8f93\u9636\u6bb5\u5b8c\u5168\u7531DMA\u63a7\u5236"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u540e\u5904\u7406\uff1aDMA\u63a7\u5236\u5668\u5411CPU\u53d1\u51fa\u7ec8\u7aef\u8bf7\u6c42\uff0c\u6267\u884c\u4e2d\u65ad\u670d\u52a1\u7a0b\u5e8f\u505aDMA\u7ed3\u675f\u5904\u7406\uff0c\u5305\u62ec\u6821\u9a8c\u9001\u5165\u4e3b\u5b58\u7684\u6570\u636e\u662f\u5426\u6b63\u786e\uff0c\u6d4b\u8bd5\u4f20\u9001\u8fc7\u7a0b\u662f\u5426\u51fa\u9519\uff08\u51fa\u9519\u5219\u8f6c\u5411\u8bca\u65ad\u7a0b\u5e8f\uff09\uff0c\u51b3\u5b9a\u662f\u5426\u7ee7\u7eed\u4f7f\u7528DMA\u4f20\u9001\u5176\u4ed6\u6570\u636e\u7b49"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5468\u671f\u632a\u7528"})}),"\n",(0,i.jsx)(e.p,{children:"\u6307\u5229\u7528CPU\u4e0d\u8bbf\u95ee\u5b58\u50a8\u5668\u7684\u90a3\u4e9b\u5468\u671f\u6765\u5b9e\u73b0DMA\u64cd\u4f5c\uff0c\u6b64\u65f6DMA\u53ef\u4ee5\u4f7f\u7528\u603b\u7ebf\u800c\u4e0d\u7528\u901a\u77e5CPU\u4e5f\u4e0d\u4f1a\u59a8\u788dCPU\u7684\u5de5\u4f5c\u3002\u5468\u671f\u632a\u7528\u5e76\u4e0d\u51cf\u6162CPU\u7684\u64cd\u4f5c\uff0c\u4f46\u53ef\u80fd\u9700\u8981\u590d\u6742\u7684\u65f6\u5e8f\u7535\u8def\uff0c\u800c\u4e14 \u6570\u636e\u4f20\u9001\u8fc7\u7a0b\u662f\u4e0d\u8fde\u7eed\u7684\u548c\u4e0d\u89c4\u5219\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u8fd9\u79cd\u65b9\u6cd5\u4e2d\uff0c\u6bcf\u5f53IO\u8bbe\u5907\u53d1\u51faDMA\u8bf7\u6c42\u65f6\uff0cIO\u8bbe\u5907\u4fbf\u632a\u7528\u6216\u7a83\u53d6\u603b\u7ebf\u5360\u7528\u6743\u4e00\u4e2a\u6216\u51e0\u4e2a\u4e3b\u5b58\u5468\u671f\uff0c\u800cDMA\u4e0d\u8bf7\u6c42\u65f6\uff0cCPU\u4ecd\u7ee7\u7eed\u8bbf\u95ee\u4e3b\u5b58\u3002\u4e0eCPU\u6682\u505c\u8bbf\u5b58\u7684\u65b9\u5f0f\u76f8\u6bd4\uff0c\u5b83\u65e2\u5b9e\u73b0\u4e86I/O\u4f20\u9001\uff0c\u53c8\u8f83\u597d\u5730\u53d1\u6325\u4e86\u4e3b\u5b58\u4e0eCPU\u7684\u6548\u7387\uff0c\u662f\u4e00\u79cd\u5e7f\u6cdb\u91c7\u7528\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"IO\u8bbe\u5907\u8981\u6c42DMA\u4f20\u9001\u4f1a\u9047\u5230\u4e09\u79cd\u60c5\u51b5\uff0c\u4e00\u79cd\u662f\u6b64\u65f6CPU\u4e0d\u9700\u8bbf\u95ee\u4e3b\u5b58(\u5982CPU\u6b63\u5728\u6267\u884c\u4e58\u6cd5\u6307\u4ee4\uff0c\u7531\u4e8e\u4e58\u6cd5\u6307\u4ee4\u6267\u884c\u65f6\u95f4\u8f83\u957f\uff0c\u6b64\u65f6CPU\u4e0d\u9700\u8bbf\u95ee\u4e3b\u5b58)\uff0c\u6545IO\u8bbe\u5907\u8bbf\u5b58\u4e0eCPU\u4e0d\u53d1\u751f\u51b2\u7a81\u3002\u7b2c\u4e8c\u79cd\u60c5\u51b5\u662fIO\u8bbe\u5907\u8981\u6c42DMA\u4f20\u9001\u65f6\uff0cCPU\u6b63\u5728\u8bbf\u5b58\uff0c\u6b64\u65f6\u5fc5\u987b\u5f85 \u5b58\u53d6\u5468\u671f\u7ed3\u675f\u65f6\u523b\uff0cCPU\u624d\u80fd\u5c06\u603b\u7ebf\u5360\u6709\u6743\u8ba9\u51fa\u3002\u7b2c\u4e09\u79cd\u60c5\u51b5\u662fIO\u8bbe\u5907\u8981\u6c42\u8bbf\u5b58\u65f6\uff0cCPU\u4e5f\u8981\u6c42\u8bbf\u5b58\uff0c\u8fd9\u5c31\u51fa\u73b0\u4e86\u8bbf\u5b58\u51b2\u7a81\u3002\u6b64\u523b\uff0cIO\u8bbf\u5b58\u4f18\u5148\u4e8eCPU\u8bbf\u5b58\uff0c\u56e0\u4e3aIO\u4e0d\u7acb\u5373\u8bbf\u5b58\u5c31\u53ef\u80fd\u4e22\u5931\u6570\u636e\uff0c\u8fd9\u65f6IO\u8981\u7a83\u53d6\u4e00\u4e8c\u4e2a\u5b58\u53d6\u5468\u671f\uff0c\u610f\u5473\u7740CPU\u5728\u6267\u884c\u8bbf\u5b58\u6307\u4ee4\u8fc7\u7a0b\u4e2d\u63d2\u5165\u4e86DMA\u8bf7\u6c42\uff0c\u5e76\u632a\u7528\u4e86\u4e00\u4e8c\u4e2a\u5b58\u53d6\u5468\u671f\uff0c\u4f7fCPU\u5ef6\u7f13\u4e86\u4e00\u4e8c\u4e2a\u5b58\u53d6\u5468\u671f\u518d\u8bbf\u5b58\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e94\u8be5\u6307\u51fa\uff0cIO\u8bbe\u5907\u6bcf\u632a\u7528\u4e00\u4e2a\u4e3b\u5b58\u5468\u671f\u90fd\u8981\u7533\u8bf7\u603b\u7ebf\u63a7\u5236\u6743\u3001\u5efa\u7acb\u603b\u7ebf\u63a7\u5236\u6743\u548c\u5f52\u8fd8\u603b\u7ebf\u63a7\u5236\u7ea7\u6743\u3002\u56e0\u6b64\uff0c\u5c3d\u7ba1\u4f20\u9001\u4e00\u4e2a\u5b57\u5bf9\u4e3b\u5b58\u800c\u8a00\u53ea\u5360\u7528\u4e00\u4e2a\u4e3b\u5b58\u5468\u671f\uff0c\u4f46\u5bf9DMA\u63a5\u53e3\u800c\u8a00\uff0c\u5b9e\u8d28\u4e0a\u8981\u53602\u20145\u4e2a\u4e3b\u5b58\u5468\u671f(\u7531\u903b\u8f91\u7ebf\u8def\u7684\u5ef6\u8fdf\u7279\u6027\u800c\u5b9a)\u3002\u56e0\u6b64\u5468\u671f\u632a\u7528\u7684\u65b9\u6cd5\u6bd4\u8f83\u9002\u5408\u4e8eI/O\u8bbe\u5907\u7684\u8bfb\u5199\u5468\u671f\u5927\u4e8e\u4e3b\u5b58\u5468\u671f\u7684\u60c5\u51b5\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u901a\u9053",children:"\u901a\u9053"}),"\n",(0,i.jsx)(e.p,{children:"\u8f6f\u786c\u7ed3\u5408"}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u6765\u8d1f\u8d23\u7ba1\u7406IO\u8bbe\u5907\u4ee5\u53ca\u5b9e\u73b0\u4e3b\u5b58\u548cIO\u8bbe\u5907\u4e4b\u95f4\u4ea4\u6362\u4fe1\u606f\u7684\u90e8\u4ef6\uff0c\u53ef\u4ee5\u89c6\u4e3a\u4e00\u79cd\u5177\u6709\u7279\u6b8a\u529f\u80fd\u7684\u5904\u7406\u5668\u3002\u901a\u9053\u6709\u4e13\u95e8\u7684\u901a\u9053\u6307\u4ee4\uff0c\u80fd\u72ec\u7acb\u7684\u6267\u884c\u7528\u901a\u9053\u6307\u4ee4\u6240\u7f16\u5199\u7684\u8f93\u5165\u8f93\u51fa\u7a0b\u5e8f\uff0c\u4f46\u4e0d\u662f\u4e00\u4e2a\u5b8c\u5168\u72ec\u7acb\u7684\u5904\u7406\u5668\uff0c\u4f9d\u636eCPU\u7684IO\u6307\u4ee4\u8fdb\u884c\u542f\u52a8\u3001\u505c\u6b62\u6216\u6539\u53d8\u5de5\u4f5c\u72b6\u6001\uff0c\u662f\u4ece\u5c5e\u4e8eCPU\u7684\u4e00\u4e2a\u4e13\u7528\u5904\u7406\u5668\u3002\u901a\u9053\u6307\u4ee4\uff1a\u901a\u9053\u63a7\u5236\u5b57\uff0c\u5bf9\u5177\u6709\u901a\u9053\u7684IO\u7cfb\u7edf\u4e13\u95e8\u8bbe\u7f6e\u7684\u6307\u4ee4\u3002\u662f\u901a\u9053\u7528\u4e8e\u6267\u884cIO\u64cd\u4f5c\u7684\u6307\u4ee4\uff0c\u53ef\u4ee5\u7531\u7ba1\u7406\u7a0b\u5e8f\u5b58\u653e\u5728\u4e3b\u5b58\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\uff0c\u7531\u901a\u9053\u4ece\u4e3b\u5b58\u4e2d\u53d6\u51fa\u5e76\u6267\u884c\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5b57\u8282\u591a\u8def\u901a\u9053"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6570\u636e\u9009\u62e9\u901a\u9053"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6570\u636e\u591a\u8def\u901a\u9053"}),"\n"]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var i=s(6540);const l={},r=i.createContext(l);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
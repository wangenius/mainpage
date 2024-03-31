"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1096],{3619:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>t});var s=i(4848),r=i(8453);const l={title:"\u7f16\u8bd1",sidebar_position:2,slug:"\u7f16\u8bd1"},c="\u7f16\u8bd1",a={id:"lang/compile/\u7f16\u8bd1",title:"\u7f16\u8bd1",description:"source code\uff1a",source:"@site/docs/lang/compile/\u7f16\u8bd1.mdx",sourceDirName:"lang/compile",slug:"/lang/compile/\u7f16\u8bd1",permalink:"/en/docs/lang/compile/\u7f16\u8bd1",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/compile/\u7f16\u8bd1.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u7f16\u8bd1",sidebar_position:2,slug:"\u7f16\u8bd1"},sidebar:"compile",previous:{title:"\u6982\u8ff0",permalink:"/en/docs/lang/compile/\u6982\u8ff0"},next:{title:"\u81ea\u52a8\u673a",permalink:"/en/docs/lang/compile/\u81ea\u52a8\u673a"}},d={},t=[{value:"scanning",id:"scanning",level:2},{value:"parsing",id:"parsing",level:2},{value:"Static analysis",id:"static-analysis",level:2},{value:"\u4e2d\u95f4\u7801Intermediate representations",id:"\u4e2d\u95f4\u7801intermediate-representations",level:2},{value:"\u4f18\u5316Optimization",id:"\u4f18\u5316optimization",level:2},{value:"\u4ee3\u7801\u751f\u6210code generation",id:"\u4ee3\u7801\u751f\u6210code-generation",level:2},{value:"\u865a\u62df\u673aVirtual machine",id:"\u865a\u62df\u673avirtual-machine",level:2},{value:"\u8fd0\u884c\u65f6runtime",id:"\u8fd0\u884c\u65f6runtime",level:2},{value:"\u6377\u5f84\u548c\u5907\u9009\u8def\u7ebf",id:"\u6377\u5f84\u548c\u5907\u9009\u8def\u7ebf",level:2},{value:"\u5355\u904d\u7f16\u8bd1\u5668",id:"\u5355\u904d\u7f16\u8bd1\u5668",level:3},{value:"\u6811\u904d\u5386\u89e3\u91ca\u5668",id:"\u6811\u904d\u5386\u89e3\u91ca\u5668",level:3},{value:"\u8f6c\u8bd1\u5668",id:"\u8f6c\u8bd1\u5668",level:3},{value:"\u5373\u65f6\u7f16\u8bd1",id:"\u5373\u65f6\u7f16\u8bd1",level:3}];function o(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u7f16\u8bd1",children:"\u7f16\u8bd1"}),"\n",(0,s.jsx)(e.p,{children:"source code\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"int num = ( max + min ) / 2;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"scanning",children:"scanning"}),"\n",(0,s.jsx)(e.p,{children:"\u7b2c\u4e00\u6b65\u662f\u626b\u63cf\uff0c\u4e5f\u5c31\u662f\u6240\u8c13\u7684\u8bcd\u6cd5\u5206\u6790 ( lexing \u6216\u8005\u5f3a\u8c03\u5199\u6cd5 lexical analysis )\u3002\u626b\u63cf\u548c\u8bcd\u6cd5\u5206\u6790\u7684\u610f\u601d\u76f8\u8fd1\u3002\u6211\u559c\u6b22\u8bcd\u6cd5\u5206\u6790\u8fd9\u4e2a\u63cf\u8ff0\uff0c\u56e0\u4e3a\u8fd9\u542c\u8d77\u6765\u50cf\u662f\u4e00\u4e2a\u90aa\u6076\u7684\u8d85\u7ea7\u5927\u574f\u86cb\u4f1a\u505a\u7684\u4e8b\u60c5\uff0c\u4f46\u6211\u8fd8\u662f\u7528\u626b\u63cf\uff0c\u56e0\u4e3a\u5b83\u4f3c\u4e4e\u66f4\u5e38\u89c1\u4e00\u4e9b\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u626b\u63cf\u5668(\u8bcd\u6cd5\u89e3\u6790\u5668)\u63a5\u6536\u7ebf\u6027\u5b57\u7b26\u6d41\uff0c\u5e76\u5c06\u5b83\u4eec\u5207\u5206\u6210\u4e00\u7cfb\u5217\u66f4\u7c7b\u4f3c\u4e8e\u201c\u5355\u8bcd\u201d\u7684\u4e1c\u897f\u3002\u5728\u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u8fd9\u4e9b\u8bcd\u7684\u6bcf\u4e00\u4e2a\u90fd\u88ab\u79f0\u4e3a\u8bcd\u6cd5\u5355\u5143\u3002\u6709\u4e9b\u8bcd\u6cd5\u5355\u5143\u662f\u5355\u4e2a\u5b57\u7b26\uff0c\u6bd4\u5982",(0,s.jsx)(e.code,{children:"{"}),"\u548c ",(0,s.jsx)(e.code,{children:","}),'\u3002\u5176\u4ed6\u7684\u53ef\u80fd\u662f\u51e0\u4e2a\u5b57\u7b26\u957f\u7684\uff0c\u6bd4\u5982\u6570\u5b57\uff08123\uff09\u3001\u5b57\u7b26\u4e32\u5b57\u5143\uff08"hi!"\uff09\u548c\u6807\u8bc6\u7b26\uff08min\uff09\u3002']}),"\n",(0,s.jsx)(e.p,{children:"\u6e90\u6587\u4ef6\u4e2d\u7684\u4e00\u4e9b\u5b57\u7b26\u5b9e\u9645\u4e0a\u6ca1\u6709\u4efb\u4f55\u610f\u4e49\u3002\u7a7a\u683c\u901a\u5e38\u662f\u65e0\u5173\u7d27\u8981\u7684\uff0c\u800c\u6ce8\u91ca\uff0c\u4ece\u5b9a\u4e49\u5c31\u80fd\u770b\u51fa\u6765\uff0c\u4f1a\u88ab\u53d8\u6210\u8bed\u8a00\u5ffd\u7565\u3002\u626b\u63cf\u5668\u901a\u5e38\u4f1a\u4e22\u5f03\u8fd9\u4e9b\u5b57\u7b26\uff0c\u7559\u4e0b\u4e00\u4e2a\u5e72\u51c0\u7684\u6709\u610f\u4e49\u7684\u8bcd\u6cd5\u5355\u5143\u5e8f\u5217\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5206\u89e3\u6210\uff1a"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"int"})," ",(0,s.jsx)(e.code,{children:"num"})," ",(0,s.jsx)(e.code,{children:"="})," ",(0,s.jsx)(e.code,{children:"("})," ",(0,s.jsx)(e.code,{children:"max"})," ",(0,s.jsx)(e.code,{children:"+"})," ",(0,s.jsx)(e.code,{children:"min"})," ",(0,s.jsx)(e.code,{children:")"})," ",(0,s.jsx)(e.code,{children:"/"})," ",(0,s.jsx)(e.code,{children:"2"})," ",(0,s.jsx)(e.code,{children:";"})]}),"\n",(0,s.jsx)(e.h2,{id:"parsing",children:"parsing"}),"\n",(0,s.jsx)(e.p,{children:"\u8bed\u6cd5\u5206\u6790"}),"\n",(0,s.jsx)(e.p,{children:"The next step is parsing. This is where our syntax gets a grammar\u2014the ability to compose larger expressions and statements out of smaller parts. Did you ever diagram sentences in English class? If so, you\u2019ve done what a parser does, except that English has thousands and thousands of \u201ckeywords\u201d and an overflowing cornucopia of ambiguity. Programming languages are much simpler.\n\u4e0b\u4e00\u6b65\u662f\u89e3\u6790\u3002 \u8fd9\u5c31\u662f\u6211\u4eec\u4ece\u53e5\u6cd5\u4e2d\u5f97\u5230\u8bed\u6cd5\u7684\u5730\u65b9\u2014\u2014\u8bed\u6cd5\u80fd\u591f\u5c06\u8f83\u5c0f\u7684\u90e8\u5206\u7ec4\u6210\u8f83\u5927\u7684\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5\u3002\u4f60\u5728\u82f1\u8bed\u8bfe\u4e0a\u505a\u8fc7\u8bed\u6cd5\u56fe\u89e3\u5417\uff1f\u5982\u679c\u6709\uff0c\u4f60\u5c31\u505a\u4e86\u89e3\u6790\u5668\u6240\u505a\u7684\u4e8b\u60c5\uff0c\u533a\u522b\u5728\u4e8e\uff0c\u82f1\u8bed\u4e2d\u6709\u6210\u5343\u4e0a\u4e07\u7684\u201c\u5173\u952e\u5b57\u201d\u548c\u5927\u91cf\u7684\u6b67\u4e49\uff0c\u800c\u7f16\u7a0b\u8bed\u8a00\u8981\u7b80\u5355\u5f97\u591a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u6790\u5668\u5c06\u6241\u5e73\u7684\u8bcd\u6cd5\u5355\u5143\u5e8f\u5217\u8f6c\u5316\u4e3a\u6811\u5f62\u7ed3\u6784\uff0c\u6811\u5f62\u7ed3\u6784\u80fd\u66f4\u597d\u5730\u53cd\u6620\u8bed\u6cd5\u7684\u5d4c\u5957\u672c\u8d28\u3002\u8fd9\u4e9b\u6811\u6709\u4e24\u4e2a\u4e0d\u540c\u7684\u540d\u79f0:\u89e3\u6790\u6811\u6216\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u8fd9\u53d6\u51b3\u4e8e\u5b83\u4eec\u4e0e\u6e90\u8bed\u8a00\u7684\u8bed\u6cd5\u7ed3\u6784\u6709\u591a\u63a5\u8fd1\u3002\u5728\u5b9e\u8df5\u4e2d\uff0c\u8bed\u8a00\u9ed1\u5ba2\u901a\u5e38\u79f0\u5b83\u4eec\u4e3a\u201c\u8bed\u6cd5\u6811\u201d\u3001\u201cAST\u201d\uff0c\u6216\u8005\u5e72\u8106\u76f4\u63a5\u8bf4\u201c\u6811\u201d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u89e3\u6790\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\u6709\u7740\u60a0\u4e45\u800c\u4e30\u5bcc\u7684\u5386\u53f2\uff0c\u5b83\u4e0e\u4eba\u5de5\u667a\u80fd\u754c\u6709\u7740\u5bc6\u5207\u7684\u8054\u7cfb\u3002\u4eca\u5929\u7528\u4e8e\u89e3\u6790\u7f16\u7a0b\u8bed\u8a00\u7684\u8bb8\u591a\u6280\u672f\u6700\u521d\u88ab\u4eba\u5de5\u667a\u80fd\u7814\u7a76\u4eba\u5458\u7528\u4e8e\u89e3\u6790\u4eba\u7c7b\u8bed\u8a00\uff0c\u4eba\u5de5\u667a\u80fd\u7814\u7a76\u4eba\u5458\u8bd5\u56fe\u901a\u8fc7\u8fd9\u4e9b\u6280\u672f\u8ba9\u8ba1\u7b97\u673a\u80fd\u4e0e\u6211\u4eec\u5bf9\u8bdd\u3002\n\u4e8b\u5b9e\u8bc1\u660e\uff0c\u4eba\u7c7b\u8bed\u8a00\u5bf9\u4e8e\u53ea\u80fd\u5904\u7406\u50f5\u5316\u8bed\u6cd5\u7684\u89e3\u6790\u5668\u6765\u8bf4\u592a\u6df7\u4e71\u4e86\uff0c\u4f46\u9762\u5bf9\u7f16\u7a0b\u8bed\u8a00\u8fd9\u79cd\u7b80\u5355\u7684\u4eba\u9020\u8bed\u6cd5\u65f6\uff0c\u89e3\u6790\u5668\u8868\u73b0\u5f97\u5341\u5206\u5408\u9002\u3002\u5509\uff0c\u53ef\u60dc\u6211\u4eec\u8fd9\u4e9b\u6709\u7f3a\u9677\u7684\u4eba\u7c7b\u5728\u4f7f\u7528\u8fd9\u4e9b\u7b80\u5355\u7684\u8bed\u6cd5\u65f6\uff0c\u4ecd\u7136\u4f1a\u4e0d\u505c\u5730\u51fa\u9519\uff0c\u56e0\u6b64\u89e3\u6790\u5668\u7684\u5de5\u4f5c\u8fd8\u5305\u62ec\u901a\u8fc7\u62a5\u544a\u8bed\u6cd5\u9519\u8bef\u8ba9\u6211\u4eec\u77e5\u9053\u51fa\u9519\u4e86\u3002"}),"\n",(0,s.jsx)(e.mermaid,{value:'graph TB;\n    A[num] --\x3e B["/"] --\x3e C[+];\n    C --\x3e D[max];\n    C --\x3e E[min];\n    B --\x3e F[2];'}),"\n",(0,s.jsx)(e.h2,{id:"static-analysis",children:"Static analysis"}),"\n",(0,s.jsx)(e.p,{children:"\u9759\u6001\u5206\u6790"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6240\u6709\u5b9e\u73b0\u4e2d\uff0c\u524d\u4e24\u4e2a\u9636\u6bb5\u90fd\u975e\u5e38\u76f8\u4f3c\u3002 \u73b0\u5728\uff0c\u6bcf\u79cd\u8bed\u8a00\u7684\u4e2a\u6027\u5316\u7279\u5f81\u5f00\u59cb\u53d1\u6325\u4f5c\u7528\u3002 \u81f3\u6b64\uff0c\u6211\u4eec\u77e5\u9053\u4e86\u4ee3\u7801\u7684\u8bed\u6cd5\u7ed3\u6784\uff08\u8bf8\u5982\u54ea\u4e9b\u8868\u8fbe\u5f0f\u5d4c\u5957\u5728\u5176\u4ed6\u8868\u8fbe\u5f0f\u4e2d\uff09\u4e4b\u7c7b\u7684\u4e1c\u897f\uff0c\u4f46\u662f\u6211\u4eec\u77e5\u9053\u7684\u4e5f\u5c31\u4ec5\u9650\u4e8e\u6b64\u4e86\u3002\n\u5728a + b\u8fd9\u6837\u7684\u8868\u8fbe\u5f0f\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u6211\u4eec\u8981\u628aa\u548cb\u76f8\u52a0\uff0c\u4f46\u6211\u4eec\u4e0d\u77e5\u9053\u8fd9\u4e9b\u540d\u5b57\u6307\u7684\u662f\u4ec0\u4e48\u3002\u5b83\u4eec\u662f\u5c40\u90e8\u53d8\u91cf\u5417\uff1f\u5168\u5c40\u53d8\u91cf\uff1f\u5b83\u4eec\u5728\u54ea\u91cc\u88ab\u5b9a\u4e49\uff1f\n\u5927\u591a\u6570\u8bed\u8a00\u6240\u505a\u7684\u7b2c\u4e00\u70b9\u5206\u6790\u53eb\u505a\u7ed1\u5b9a\u6216\u51b3\u8bae\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6807\u8bc6\u7b26\uff0c\u6211\u4eec\u90fd\u8981\u627e\u51fa\u5b9a\u4e49\u8be5\u540d\u79f0\u7684\u5730\u65b9\uff0c\u5e76\u5c06\u4e24\u8005\u8fde\u63a5\u8d77\u6765\u3002\u8fd9\u5c31\u662f\u4f5c\u7528\u57df\u7684\u4f5c\u7528\u2014\u2014\u5728\u8fd9\u4e2a\u6e90\u4ee3\u7801\u533a\u57df\u4e2d\uff0c\u67d0\u4e2a\u540d\u5b57\u53ef\u4ee5\u7528\u6765\u5f15\u7528\u67d0\u4e2a\u58f0\u660e\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u8bed\u8a00\u662f\u9759\u6001\u7c7b\u578b\u7684\uff0c\u8fd9\u5c31\u662f\u6211\u4eec\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u7684\u65f6\u673a\u3002\u4e00\u65e6\u6211\u4eec\u77e5\u9053\u4e86a\u548cb\u7684\u58f0\u660e\u4f4d\u7f6e\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u5f04\u6e05\u695a\u5b83\u4eec\u7684\u7c7b\u578b\u3002\u7136\u540e\u5982\u679c\u8fd9\u4e9b\u7c7b\u578b\u4e0d\u652f\u6301\u76f8\u52a0\uff0c\u6211\u4eec\u5c31\u4f1a\u62a5\u544a\u4e00\u4e2a\u7c7b\u578b\u9519\u8bef[2]\u3002\n\u6df1\u5438\u4e00\u53e3\u6c14\u3002 \u6211\u4eec\u5df2\u7ecf\u5230\u8fbe\u4e86\u5c71\u9876\uff0c\u5e76\u5bf9\u7528\u6237\u7684\u7a0b\u5e8f\u6709\u4e86\u5168\u9762\u7684\u4e86\u89e3\u3002\u4ece\u5206\u6790\u4e2d\u53ef\u89c1\u7684\u6240\u6709\u8bed\u4e49\u4fe1\u606f\u90fd\u9700\u8981\u5b58\u50a8\u5728\u67d0\u4e2a\u5730\u65b9\u3002\u6211\u4eec\u53ef\u4ee5\u628a\u5b83\u5b58\u50a8\u5728\u51e0\u4e2a\u5730\u65b9\uff1a\n\u901a\u5e38\uff0c\u5b83\u4f1a\u88ab\u76f4\u63a5\u5b58\u50a8\u5728\u8bed\u6cd5\u6811\u672c\u8eab\u7684\u5c5e\u6027\u4e2d\u2014\u2014\u5c5e\u6027\u662f\u8282\u70b9\u4e2d\u7684\u989d\u5916\u5b57\u6bb5\uff0c\u8fd9\u4e9b\u5b57\u6bb5\u5728\u89e3\u6790\u65f6\u4e0d\u4f1a\u521d\u59cb\u5316\uff0c\u4f46\u5728\u7a0d\u540e\u4f1a\u8fdb\u884c\u586b\u5145\u3002\n\u6709\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5c06\u6570\u636e\u5b58\u50a8\u5728\u5916\u90e8\u7684\u67e5\u627e\u8868\u4e2d\u3002 \u901a\u5e38\uff0c\u8be5\u8868\u7684\u5173\u952e\u5b57\u662f\u6807\u8bc6\u7b26\uff0c\u5373\u53d8\u91cf\u548c\u58f0\u660e\u7684\u540d\u79f0\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u79f0\u5176\u4e3a\u7b26\u53f7\u8868\uff0c\u5e76\u4e14\u5176\u4e2d\u4e0e\u6bcf\u4e2a\u952e\u5173\u8054\u7684\u503c\u544a\u8bc9\u6211\u4eec\u8be5\u6807\u8bc6\u7b26\u6240\u6307\u7684\u662f\u4ec0\u4e48\u3002\n\u6700\u5f3a\u5927\u7684\u8bb0\u5f55\u5de5\u5177\u662f\u5c06\u6811\u8f6c\u5316\u4e3a\u4e00\u4e2a\u5168\u65b0\u7684\u6570\u636e\u7ed3\u6784\uff0c\u66f4\u76f4\u63a5\u5730\u8868\u8fbe\u4ee3\u7801\u7684\u8bed\u4e49\u3002\u8fd9\u662f\u4e0b\u4e00\u8282\u7684\u5185\u5bb9\u3002\n\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6240\u6709\u5185\u5bb9\u90fd\u88ab\u89c6\u4e3a\u5b9e\u73b0\u7684\u524d\u7aef\u3002 \u4f60\u53ef\u80fd\u4f1a\u731c\u81f3\u6b64\u4ee5\u540e\u662f\u540e\u7aef\uff0c\u5176\u5b9e\u5e76\u4e0d\u662f\u3002 \u5728\u8fc7\u53bb\u7684\u5e74\u4ee3\uff0c\u5f53\u201c\u524d\u7aef\u201d\u548c\u201c\u540e\u7aef\u201d\u88ab\u521b\u9020\u51fa\u6765\u65f6\uff0c\u7f16\u8bd1\u5668\u8981\u7b80\u5355\u5f97\u591a\u3002 \u540e\u6765\uff0c\u7814\u7a76\u4eba\u5458\u5728\u4e24\u4e2a\u534a\u90e8\u4e4b\u95f4\u5f15\u5165\u4e86\u65b0\u9636\u6bb5\u3002 \u5a01\u5ec9\xb7\u6c83\u5c14\u592b\uff08William Wulf\uff09\u548c\u4ed6\u7684\u540c\u4f34\u6ca1\u6709\u653e\u5f03\u65e7\u672f\u8bed\uff0c\u800c\u662f\u65b0\u6dfb\u52a0\u4e86\u4e00\u4e2a\u8ff7\u4eba\u4f46\u6709\u70b9\u81ea\u76f8\u77db\u76fe\u7684\u540d\u79f0\u201c\u4e2d\u7aef\u201d\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4e2d\u95f4\u7801intermediate-representations",children:"\u4e2d\u95f4\u7801Intermediate representations"}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u628a\u7f16\u8bd1\u5668\u770b\u6210\u662f\u4e00\u6761\u6d41\u6c34\u7ebf\uff0c\u6bcf\u4e2a\u9636\u6bb5\u7684\u5de5\u4f5c\u662f\u628a\u4ee3\u8868\u7528\u6237\u4ee3\u7801\u7684\u6570\u636e\u7ec4\u7ec7\u8d77\u6765\uff0c\u4f7f\u4e0b\u4e00\u9636\u6bb5\u7684\u5b9e\u73b0\u66f4\u52a0\u7b80\u5355\u3002\u7ba1\u9053\u7684\u524d\u7aef\u662f\u9488\u5bf9\u7a0b\u5e8f\u6240\u4f7f\u7528\u7684\u6e90\u8bed\u8a00\u7f16\u5199\u7684\u3002\u540e\u7aef\u5173\u6ce8\u7684\u662f\u7a0b\u5e8f\u8fd0\u884c\u7684\u6700\u7ec8\u67b6\u6784\u3002"}),"\n",(0,s.jsx)(e.p,{children:'\u5728\u4e2d\u95f4\u9636\u6bb5\uff0c\u4ee3\u7801\u53ef\u80fd\u88ab\u5b58\u50a8\u5728\u4e00\u4e9b\u4e2d\u95f4\u4ee3\u7801\uff08intermediate representation\uff0c \u4e5f\u53ebIR\uff09\u4e2d\uff0c\u8fd9\u4e9b\u4e2d\u95f4\u4ee3\u7801\u4e0e\u6e90\u6587\u4ef6\u6216\u76ee\u7684\u6587\u4ef6\u5f62\u5f0f\u90fd\u6ca1\u6709\u7d27\u5bc6\u7684\u8054\u7cfb\uff08\u56e0\u6b64\u53eb\u4f5c "\u4e2d\u95f4"\uff09\u3002\u76f8\u53cd\uff0cIR\u5145\u5f53\u4e86\u8fd9\u4e24\u79cd\u8bed\u8a00\u4e4b\u95f4\u7684\u63a5\u53e3[3]\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u53ef\u4ee5\u8ba9\u4f60\u66f4\u8f7b\u677e\u5730\u652f\u6301\u591a\u79cd\u6e90\u8bed\u8a00\u548c\u76ee\u6807\u5e73\u53f0\u3002\u5047\u8bbe\u4f60\u60f3\u5728x86\u3001ARM\u3001SPARC \u5e73\u53f0\u4e0a\u5b9e\u73b0Pascal\u3001C\u548cFortran\u7f16\u8bd1\u5668\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u9700\u8981\u5199\u4e5d\u4e2a\u5b8c\u6574\u7684\u7f16\u8bd1\u5668\uff1aPascal\u2192x86\uff0cC\u2192ARM\uff0c\u4ee5\u53ca\u5176\u4ed6\u5404\u79cd\u7ec4\u5408[4]\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u5171\u4eab\u7684\u4e2d\u95f4\u4ee3\u7801\u53ef\u4ee5\u5927\u5927\u51cf\u5c11\u8fd9\u79cd\u60c5\u51b5\u3002\u4f60\u4e3a\u6bcf\u4e2a\u4ea7\u751fIR\u7684\u6e90\u8bed\u8a00\u5199\u4e00\u4e2a\u524d\u7aef\u3002\u7136\u540e\u4e3a\u6bcf\u4e2a\u76ee\u6807\u5e73\u53f0\u5199\u4e00\u4e2a\u540e\u7aef\u3002\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u6df7\u642d\u8d77\u6765\uff0c\u5f97\u5230\u6bcf\u4e00\u79cd\u7ec4\u5408\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5e0c\u671b\u5c06\u4ee3\u7801\u8f6c\u5316\u4e3a\u67d0\u79cd\u8bed\u4e49\u66f4\u52a0\u660e\u786e\u7684\u5f62\u5f0f\uff0c\u8fd8\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u539f\u56e0\u662f\u3002\u3002\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4f18\u5316optimization",children:"\u4f18\u5316Optimization"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u65e6\u6211\u4eec\u7406\u89e3\u4e86\u7528\u6237\u7a0b\u5e8f\u7684\u542b\u4e49\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u7531\u5730\u7528\u53e6\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u8bed\u4e49\u4f46\u5b9e\u73b0\u6548\u7387\u66f4\u9ad8\u7684\u7a0b\u5e8f\u6765\u4ea4\u6362\u5b83\u2014\u2014\u6211\u4eec\u53ef\u4ee5\u5bf9\u5b83\u8fdb\u884c\u4f18\u5316\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u662f\u5e38\u91cf\u6298\u53e0\uff1a\u5982\u679c\u67d0\u4e2a\u8868\u8fbe\u5f0f\u6c42\u503c\u5f97\u5230\u7684\u59cb\u7ec8\u662f\u5b8c\u5168\u76f8\u540c\u7684\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u8fdb\u884c\u6c42\u503c\uff0c\u5e76\u7528\u5176\u7ed3\u679c\u66ff\u6362\u8be5\u8868\u8fbe\u5f0f\u7684\u4ee3\u7801\u3002 \u5982\u679c\u7528\u6237\u8f93\u5165\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"pennyArea = 3.14159 * (0.75 / 2) * (0.75 / 2);"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5728\u7f16\u8bd1\u5668\u4e2d\u5b8c\u6210\u6240\u6709\u7684\u7b97\u672f\u8fd0\u7b97\uff0c\u5e76\u5c06\u4ee3\u7801\u66f4\u6539\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.p,{children:"pennyArea = 0.4417860938;"}),"\n",(0,s.jsx)(e.p,{children:"\u4f18\u5316\u662f\u7f16\u7a0b\u8bed\u8a00\u4e1a\u52a1\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u8bb8\u591a\u8bed\u8a00\u9ed1\u5ba2\u628a\u4ed6\u4eec\u7684\u6574\u4e2a\u804c\u4e1a\u751f\u6daf\u90fd\u82b1\u5728\u4e86\u8fd9\u91cc\uff0c\u7aed\u5c3d\u6240\u80fd\u5730\u4ece\u4ed6\u4eec\u7684\u7f16\u8bd1\u5668\u4e2d\u6324\u51fa\u6bcf\u4e00\u70b9\u6027\u80fd\uff0c\u4ee5\u4f7f\u4ed6\u4eec\u7684\u57fa\u51c6\u6d4b\u8bd5\u901f\u5ea6\u63d0\u9ad8\u767e\u5206\u4e4b\u51e0\u3002\u6709\u7684\u65f6\u5019\u8fd9\u4e5f\u4f1a\u53d8\u6210\u4e00\u79cd\u75f4\u8ff7, \u65e0\u6cd5\u81ea\u62d4\u3002\n\u6211\u4eec\u5728\u672c\u4e66\u4e2d\u901a\u5e38\u4f1a\u8df3\u8fc7\u8fd9\u4e9b\u68d8\u624b\u95ee\u9898\u3002\u4ee4\u4eba\u60ca\u8bb6\u7684\u662f\u8bb8\u591a\u6210\u529f\u7684\u8bed\u8a00\u53ea\u6709\u5f88\u5c11\u7684\u7f16\u8bd1\u671f\u4f18\u5316\u3002 \u4f8b\u5982\uff0cLua\u548cCPython\u751f\u6210\u6ca1\u600e\u4e48\u4f18\u5316\u8fc7\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u5176\u5927\u90e8\u5206\u6027\u80fd\u5de5\u4f5c\u96c6\u4e2d\u5728\u8fd0\u884c\u65f6\u4e0a[5]\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u4ee3\u7801\u751f\u6210code-generation",children:"\u4ee3\u7801\u751f\u6210code generation"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5df2\u7ecf\u5c06\u6240\u6709\u53ef\u4ee5\u60f3\u5230\u7684\u4f18\u5316\u5e94\u7528\u5230\u4e86\u7528\u6237\u7a0b\u5e8f\u4e2d\u3002 \u6700\u540e\u4e00\u6b65\u662f\u5c06\u5176\u8f6c\u6362\u4e3a\u673a\u5668\u53ef\u4ee5\u5b9e\u9645\u8fd0\u884c\u7684\u5f62\u5f0f\u3002 \u6362\u53e5\u8bdd\u8bf4\uff0c\u751f\u6210\u4ee3\u7801\uff08\u6216\u4ee3\u7801\u751f\u6210\uff09\uff0c\u8fd9\u91cc\u7684\u201c\u4ee3\u7801\u201d\u901a\u5e38\u662f\u6307CPU\u8fd0\u884c\u7684\u7c7b\u4f3c\u4e8e\u6c47\u7f16\u7684\u539f\u59cb\u6307\u4ee4\uff0c\u800c\u4e0d\u662f\u4eba\u7c7b\u53ef\u80fd\u60f3\u8981\u9605\u8bfb\u7684\u201c\u6e90\u4ee3\u7801\u201d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u540e\uff0c\u6211\u4eec\u5230\u4e86\u540e\u7aef\uff0c\u4ece\u5c71\u7684\u53e6\u4e00\u4fa7\u5f00\u59cb\u5411\u4e0b\u3002 \u4ece\u73b0\u5728\u5f00\u59cb\uff0c\u968f\u7740\u6211\u4eec\u8d8a\u6765\u8d8a\u63a5\u8fd1\u4e8e\u601d\u7ef4\u7b80\u5355\u7684\u673a\u5668\u53ef\u4ee5\u7406\u89e3\u7684\u4e1c\u897f\uff0c\u6211\u4eec\u5bf9\u4ee3\u7801\u7684\u8868\u793a\u53d8\u5f97\u8d8a\u6765\u8d8a\u539f\u59cb\uff0c\u5c31\u50cf\u9006\u5411\u8fdb\u5316\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u9700\u8981\u505a\u4e00\u4e2a\u51b3\u5b9a\u3002 \u6211\u4eec\u662f\u4e3a\u771f\u5b9eCPU\u8fd8\u662f\u865a\u62dfCPU\u751f\u6210\u6307\u4ee4\uff1f \u5982\u679c\u6211\u4eec\u751f\u6210\u771f\u5b9e\u7684\u673a\u5668\u4ee3\u7801\uff0c\u5219\u4f1a\u5f97\u5230\u4e00\u4e2a\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u5c06\u5176\u76f4\u63a5\u52a0\u8f7d\u5230\u82af\u7247\u4e0a\u3002 \u539f\u751f\u4ee3\u7801\u5feb\u5982\u95ea\u7535\uff0c\u4f46\u751f\u6210\u5b83\u9700\u8981\u5927\u91cf\u5de5\u4f5c\u3002 \u5f53\u4eca\u7684\u4f53\u7cfb\u7ed3\u6784\u5305\u542b\u5927\u91cf\u6307\u4ee4\uff0c\u590d\u6742\u7684\u7ba1\u7ebf\u548c\u8db3\u591f\u585e\u6ee1\u4e00\u67b6747\u884c\u674e\u8231\u7684\u5386\u53f2\u5305\u88b1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528\u82af\u7247\u7684\u8bed\u8a00\u4e5f\u610f\u5473\u7740\u4f60\u7684\u7f16\u8bd1\u5668\u662f\u4e0e\u7279\u5b9a\u7684\u67b6\u6784\u76f8\u7ed1\u5b9a\u7684\u3002\u5982\u679c\u4f60\u7684\u7f16\u8bd1\u5668\u4ee5x86\u673a\u5668\u4ee3\u7801\u4e3a\u76ee\u6807\uff0c\u90a3\u4e48\u5b83\u5c31\u65e0\u6cd5\u5728ARM\u8bbe\u5907\u4e0a\u8fd0\u884c\u3002\u8ffd\u6714\u5230\u4e0a\u4e16\u7eaa60\u5e74\u4ee3\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784 \u201c\u5bd2\u6b66\u7eaa\u5927\u7206\u53d1\u201d \u671f\u95f4\uff0c\u8fd9\u79cd\u7f3a\u4e4f\u53ef\u79fb\u690d\u6027\u7684\u60c5\u51b5\u662f\u4e00\u4e2a\u771f\u6b63\u7684\u969c\u788d[6]\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4e13\u5bb6\u5f00\u59cb\u8ba9\u4ed6\u4eec\u7684\u7f16\u8bd1\u5668\u751f\u6210\u865a\u62df\u673a\u4ee3\u7801\uff0c\u5305\u62ecBCPL\u7684\u8bbe\u8ba1\u8005Martin Richards\u4ee5\u53caPascal\u8bbe\u8ba1\u8005Niklaus Wirth\u3002\u4ed6\u4eec\u4e0d\u662f\u4e3a\u771f\u6b63\u7684\u82af\u7247\u7f16\u5199\u6307\u4ee4\uff0c\u800c\u662f\u4e3a\u4e00\u4e2a\u5047\u8bbe\u7684\u3001\u7406\u60f3\u5316\u7684\u673a\u5668\u7f16\u5199\u4ee3\u7801\u3002Wirth\u79f0\u8fd9\u79cdp-code\u4e3a\u201c\u53ef\u79fb\u690d\u4ee3\u7801\u201d\uff0c\u4f46\u4eca\u5929\uff0c\u6211\u4eec\u901a\u5e38\u79f0\u5b83\u4e3a\u5b57\u8282\u7801\uff0c\u56e0\u4e3a\u6bcf\u6761\u6307\u4ee4\u901a\u5e38\u90fd\u662f\u4e00\u4e2a\u5b57\u8282\u957f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e9b\u5408\u6210\u6307\u4ee4\u7684\u8bbe\u8ba1\u662f\u4e3a\u4e86\u66f4\u7d27\u5bc6\u5730\u6620\u5c04\u5230\u8bed\u8a00\u7684\u8bed\u4e49\u4e0a\uff0c\u800c\u4e0d\u5fc5\u4e0e\u4efb\u4f55\u4e00\u4e2a\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784\u7684\u7279\u6027\u548c\u5b83\u79ef\u7d2f\u7684\u5386\u53f2\u9519\u8bef\u7ed1\u5b9a\u5728\u4e00\u8d77\u3002\u4f60\u53ef\u4ee5\u628a\u5b83\u60f3\u8c61\u6210\u8bed\u8a00\u5e95\u5c42\u64cd\u4f5c\u7684\u5bc6\u96c6\u4e8c\u8fdb\u5236\u7f16\u7801\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u865a\u62df\u673avirtual-machine",children:"\u865a\u62df\u673aVirtual machine"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u7f16\u8bd1\u5668\u4ea7\u751f\u4e86\u5b57\u8282\u7801\uff0c\u4f60\u7684\u5de5\u4f5c\u8fd8\u6ca1\u6709\u7ed3\u675f\u3002\u56e0\u4e3a\u6ca1\u6709\u82af\u7247\u53ef\u4ee5\u89e3\u6790\u8fd9\u4e9b\u5b57\u8282\u7801\uff0c\u56e0\u6b64\u4f60\u8fd8\u9700\u8981\u8fdb\u884c\u7ffb\u8bd1\u3002\u540c\u6837\uff0c\u4f60\u6709\u4e24\u4e2a\u9009\u62e9\u3002\u4f60\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u76ee\u6807\u4f53\u7cfb\u7ed3\u6784\u7f16\u5199\u4e00\u4e2a\u5c0f\u578b\u7f16\u8bd1\u5668\uff0c\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u4e3a\u8be5\u673a\u5668\u7684\u672c\u673a\u4ee3\u7801[7]\u3002\u4f60\u4ecd\u7136\u9700\u8981\u9488\u5bf9\u4f60\u652f\u6301\u7684\u6bcf\u4e2a\u82af\u7247\u505a\u4e00\u4e9b\u5de5\u4f5c\uff0c\u4f46\u6700\u540e\u8fd9\u4e2a\u9636\u6bb5\u975e\u5e38\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u652f\u6301\u7684\u6240\u6709\u673a\u5668\u4e0a\u91cd\u590d\u4f7f\u7528\u7f16\u8bd1\u5668\u6d41\u6c34\u7ebf\u7684\u5176\u4f59\u90e8\u5206\u3002\u4f60\u57fa\u672c\u4e0a\u662f\u628a\u4f60\u7684\u5b57\u8282\u7801\u4f5c\u4e3a\u4e00\u79cd\u4e2d\u95f4\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u7f16\u5199\u865a\u62df\u673a\uff08VM\uff09[8]\uff0c\u8be5\u7a0b\u5e8f\u53ef\u5728\u8fd0\u884c\u65f6\u6a21\u62df\u652f\u6301\u865a\u62df\u67b6\u6784\u7684\u865a\u62df\u82af\u7247\u3002\u5728\u865a\u62df\u673a\u4e2d\u8fd0\u884c\u5b57\u8282\u7801\u6bd4\u63d0\u524d\u5c06\u5176\u7ffb\u8bd1\u6210\u672c\u5730\u4ee3\u7801\u8981\u6162\uff0c\u56e0\u4e3a\u6bcf\u6761\u6307\u4ee4\u6bcf\u6b21\u6267\u884c\u65f6\u90fd\u5fc5\u987b\u5728\u8fd0\u884c\u65f6\u6a21\u62df\u3002\u4f5c\u4e3a\u56de\u62a5\uff0c\u4f60\u5f97\u5230\u7684\u662f\u7b80\u5355\u6027\u548c\u53ef\u79fb\u690d\u6027\u3002\u7528\u6bd4\u5982\u8bf4C\u8bed\u8a00\u5b9e\u73b0\u4f60\u7684\u865a\u62df\u673a\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728\u4efb\u4f55\u6709C\u7f16\u8bd1\u5668\u7684\u5e73\u53f0\u4e0a\u8fd0\u884c\u4f60\u7684\u8bed\u8a00\u3002\u8fd9\u5c31\u662f\u6211\u4eec\u5728\u672c\u4e66\u4e2d\u6784\u5efa\u7684\u7b2c\u4e8c\u4e2a\u89e3\u91ca\u5668\u7684\u5de5\u4f5c\u539f\u7406\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u8fd0\u884c\u65f6runtime",children:"\u8fd0\u884c\u65f6runtime"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u7ec8\u4e8e\u5c06\u7528\u6237\u7a0b\u5e8f\u9524\u70bc\u6210\u53ef\u4ee5\u6267\u884c\u7684\u5f62\u5f0f\u3002\u6700\u540e\u4e00\u6b65\u662f\u8fd0\u884c\u5b83\u3002\u5982\u679c\u6211\u4eec\u5c06\u5176\u7f16\u8bd1\u4e3a\u673a\u5668\u7801\uff0c\u6211\u4eec\u53ea\u9700\u544a\u8bc9\u64cd\u4f5c\u7cfb\u7edf\u52a0\u8f7d\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u8fd0\u884c\u4e86\u3002\u5982\u679c\u6211\u4eec\u5c06\u5b83\u7f16\u8bd1\u6210\u5b57\u8282\u7801\uff0c\u6211\u4eec\u9700\u8981\u542f\u52a8VM\u5e76\u5c06\u7a0b\u5e8f\u52a0\u8f7d\u5230\u5176\u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:'\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u9664\u4e86\u6700\u57fa\u672c\u7684\u5e95\u5c42\u8bed\u8a00\u5916\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u6211\u4eec\u7684\u8bed\u8a00\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u63d0\u4f9b\u4e00\u4e9b\u670d\u52a1\u3002\u4f8b\u5982\uff0c\u5982\u679c\u8bed\u8a00\u81ea\u52a8\u7ba1\u7406\u5185\u5b58\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5783\u573e\u6536\u96c6\u5668\u53bb\u56de\u6536\u672a\u4f7f\u7528\u7684\u6bd4\u7279\u4f4d\u3002\u5982\u679c\u6211\u4eec\u7684\u8bed\u8a00\u652f\u6301\u7528 "instance of "\u6d4b\u8bd5\u6211\u4eec\u62e5\u6709\u4ec0\u4e48\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u4e00\u4e9b\u8868\u793a\u65b9\u6cd5\u6765\u8ddf\u8e2a\u6267\u884c\u8fc7\u7a0b\u4e2d\u6bcf\u4e2a\u5bf9\u8c61\u7684\u7c7b\u578b\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709\u8fd9\u4e9b\u4e1c\u897f\u90fd\u662f\u5728\u8fd0\u884c\u65f6\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u5b83\u88ab\u6070\u5f53\u5730\u79f0\u4e3a\uff0c\u8fd0\u884c\u65f6\u3002\u5728\u4e00\u4e2a\u5b8c\u5168\u7f16\u8bd1\u7684\u8bed\u8a00\u4e2d\uff0c\u5b9e\u73b0\u8fd0\u884c\u65f6\u7684\u4ee3\u7801\u4f1a\u76f4\u63a5\u63d2\u5165\u5230\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\u3002\u6bd4\u5982\u8bf4\uff0c\u5728Go\u4e2d\uff0c\u6bcf\u4e2a\u7f16\u8bd1\u540e\u7684\u5e94\u7528\u7a0b\u5e8f\u90fd\u6709\u81ea\u5df1\u7684\u4e00\u4efdGo\u7684\u8fd0\u884c\u65f6\u526f\u672c\u76f4\u63a5\u5d4c\u5165\u5176\u4e2d\u3002\u5982\u679c\u8bed\u8a00\u662f\u5728\u89e3\u91ca\u5668\u6216\u865a\u62df\u673a\u5185\u8fd0\u884c\uff0c\u90a3\u4e48\u8fd0\u884c\u65f6\u5c06\u9a7b\u7559\u4e8e\u865a\u62df\u673a\u4e2d\u3002\u8fd9\u4e5f\u5c31\u662fJava\u3001Python\u548cJavaScript\u7b49\u5927\u591a\u6570\u8bed\u8a00\u5b9e\u73b0\u7684\u5de5\u4f5c\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6377\u5f84\u548c\u5907\u9009\u8def\u7ebf",children:"\u6377\u5f84\u548c\u5907\u9009\u8def\u7ebf"}),"\n",(0,s.jsx)(e.h3,{id:"\u5355\u904d\u7f16\u8bd1\u5668",children:"\u5355\u904d\u7f16\u8bd1\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e9b\u7b80\u5355\u7684\u7f16\u8bd1\u5668\u5c06\u89e3\u6790\u3001\u5206\u6790\u548c\u4ee3\u7801\u751f\u6210\u4ea4\u7ec7\u5728\u4e00\u8d77\uff0c\u8fd9\u6837\u5b83\u4eec\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u89e3\u6790\u5668\u4e2d\u751f\u6210\u8f93\u51fa\u4ee3\u7801\uff0c\u800c\u65e0\u9700\u5206\u914d\u4efb\u4f55\u8bed\u6cd5\u6811\u6216\u5176\u4ed6IR\u3002\u8fd9\u4e9b\u5355\u904d\u7f16\u8bd1\u5668\u9650\u5236\u4e86\u8bed\u8a00\u7684\u8bbe\u8ba1\u3002\u4f60\u6ca1\u6709\u4e2d\u95f4\u6570\u636e\u7ed3\u6784\u6765\u5b58\u50a8\u7a0b\u5e8f\u7684\u5168\u5c40\u4fe1\u606f\uff0c\u4e5f\u4e0d\u4f1a\u91cd\u65b0\u8bbf\u95ee\u4efb\u4f55\u4e4b\u524d\u89e3\u6790\u8fc7\u7684\u4ee3\u7801\u90e8\u5206\u3002 \u8fd9\u610f\u5473\u7740\uff0c\u4e00\u65e6\u4f60\u770b\u5230\u67d0\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5c31\u9700\u8981\u8db3\u591f\u7684\u77e5\u8bc6\u6765\u6b63\u786e\u5730\u5bf9\u5176\u8fdb\u884c\u7f16\u8bd1[9]\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Pascal\u548cC\u8bed\u8a00\u5c31\u662f\u56f4\u7ed5\u8fd9\u4e2a\u9650\u5236\u800c\u8bbe\u8ba1\u7684\u3002\u5728\u5f53\u65f6\uff0c\u5185\u5b58\u975e\u5e38\u73cd\u8d35\uff0c\u4e00\u4e2a\u7f16\u8bd1\u5668\u53ef\u80fd\u8fde\u6574\u4e2a\u6e90\u6587\u4ef6\u90fd\u65e0\u6cd5\u5b58\u653e\u5728\u5185\u5b58\u4e2d\uff0c\u66f4\u4e0d\u7528\u8bf4\u6574\u4e2a\u7a0b\u5e8f\u4e86\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48Pascal\u7684\u8bed\u6cd5\u8981\u6c42\u7c7b\u578b\u58f0\u660e\u8981\u5148\u51fa\u73b0\u5728\u4e00\u4e2a\u5757\u4e2d\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u5728C\u8bed\u8a00\u4e2d\uff0c\u4f60\u4e0d\u80fd\u5728\u5b9a\u4e49\u51fd\u6570\u7684\u4ee3\u7801\u4e0a\u9762\u8c03\u7528\u51fd\u6570\uff0c\u9664\u975e\u4f60\u6709\u4e00\u4e2a\u660e\u786e\u7684\u524d\u5411\u58f0\u660e\uff0c\u544a\u8bc9\u7f16\u8bd1\u5668\u5b83\u9700\u8981\u77e5\u9053\u4ec0\u4e48\uff0c\u4ee5\u4fbf\u751f\u6210\u8c03\u7528\u540e\u9762\u51fd\u6570\u7684\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u6811\u904d\u5386\u89e3\u91ca\u5668",children:"\u6811\u904d\u5386\u89e3\u91ca\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e9b\u7f16\u7a0b\u8bed\u8a00\u5728\u5c06\u4ee3\u7801\u89e3\u6790\u4e3aAST\u540e\u5c31\u5f00\u59cb\u6267\u884c\u4ee3\u7801\uff08\u53ef\u80fd\u5e94\u7528\u4e86\u4e00\u70b9\u9759\u6001\u5206\u6790\uff09\u3002\u4e3a\u4e86\u8fd0\u884c\u7a0b\u5e8f\uff0c\u89e3\u91ca\u5668\u6bcf\u6b21\u90fd\u4f1a\u904d\u5386\u8bed\u6cd5\u6811\u7684\u4e00\u4e2a\u5206\u652f\u548c\u53f6\u5b50\uff0c\u5e76\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u8ba1\u7b97\u6bcf\u4e2a\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u79cd\u5b9e\u73b0\u98ce\u683c\u5728\u5b66\u751f\u9879\u76ee\u548c\u5c0f\u578b\u8bed\u8a00\u4e2d\u5f88\u5e38\u89c1\uff0c\u4f46\u5728\u901a\u7528\u8bed\u8a00\u4e2d\u5e76\u4e0d\u5e7f\u6cdb\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u5f80\u5f80\u5f88\u6162\u3002\u6709\u4e9b\u4eba\u4f7f\u7528\u201c\u89e3\u91ca\u5668\u201d\u4ec5\u6307\u8fd9\u7c7b\u5b9e\u73b0\uff0c\u4f46\u5176\u4ed6\u4eba\u5bf9\u201c\u89e3\u91ca\u5668\u201d\u4e00\u8bcd\u7684\u5b9a\u4e49\u66f4\u5bbd\u6cdb\uff0c\u56e0\u6b64\u6211\u5c06\u4f7f\u7528\u6ca1\u6709\u6b67\u4e49\u7684\u201c\u6811\u904d\u5386\u89e3\u91ca\u5668\u201d\u6765\u6307\u4ee3\u8fd9\u4e9b\u5b9e\u73b0\u3002\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u89e3\u91ca\u5668\u5c31\u662f\u8fd9\u6837\u5de5\u4f5c\u7684[10]\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u8f6c\u8bd1\u5668",children:"\u8f6c\u8bd1\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u4e00\u79cd\u8bed\u8a00\u7f16\u5199\u4e00\u4e2a\u5b8c\u6574\u7684\u540e\u7aef\u53ef\u80fd\u9700\u8981\u5927\u91cf\u7684\u5de5\u4f5c\u3002 \u5982\u679c\u4f60\u6709\u4e00\u4e9b\u73b0\u6709\u7684\u901a\u7528IR\u4f5c\u4e3a\u76ee\u6807\uff0c\u5219\u53ef\u4ee5\u5c06\u524d\u7aef\u8f6c\u6362\u5230\u8be5IR\u4e0a\u3002 \u5426\u5219\uff0c\u4f60\u53ef\u80fd\u4f1a\u9677\u5165\u56f0\u5883\u3002 \u4f46\u662f\uff0c\u5982\u679c\u4f60\u5c06\u67d0\u4e9b\u5176\u4ed6\u6e90\u8bed\u8a00\u89c6\u4e3a\u4e2d\u95f4\u4ee3\u7801\uff0c\u8be5\u600e\u4e48\u529e\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u9700\u8981\u4e3a\u4f60\u7684\u8bed\u8a00\u7f16\u5199\u4e00\u4e2a\u524d\u7aef\u3002\u7136\u540e\uff0c\u5728\u540e\u7aef\uff0c\u4f60\u53ef\u4ee5\u751f\u6210\u4e00\u4efd\u4e0e\u4f60\u7684\u8bed\u8a00\u7ea7\u522b\u5dee\u4e0d\u591a\u7684\u5176\u4ed6\u8bed\u8a00\u7684\u6709\u6548\u6e90\u4ee3\u7801\u5b57\u7b26\u4e32\uff0c\u800c\u4e0d\u662f\u5c06\u6240\u6709\u4ee3\u7801\u964d\u4f4e\u5230\u67d0\u4e2a\u539f\u59cb\u76ee\u6807\u8bed\u8a00\u7684\u8bed\u4e49\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u8bed\u8a00\u73b0\u6709\u7684\u7f16\u8bd1\u5de5\u5177\u4f5c\u4e3a\u9003\u79bb\u5927\u5c71\u7684\u8def\u5f84\uff0c\u5f97\u5230\u67d0\u4e9b\u53ef\u6267\u884c\u7684\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4eba\u4eec\u8fc7\u53bb\u79f0\u4e4b\u4e3a\u6e90\u5230\u6e90\u7f16\u8bd1\u5668\u6216\u8f6c\u6362\u7f16\u8bd1\u5668[11]\u3002\u968f\u7740\u90a3\u4e9b\u4e3a\u4e86\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u800c\u7f16\u8bd1\u6210JavaScript\u7684\u5404\u7c7b\u8bed\u8a00\u7684\u5174\u8d77\uff0c\u5b83\u4eec\u6709\u4e86\u4e00\u4e2a\u65f6\u9ae6\u7684\u540d\u5b57\u2014\u2014\u8f6c\u8bd1\u5668\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u867d\u7136\u7b2c\u4e00\u4e2a\u7f16\u8bd1\u5668\u662f\u5c06\u4e00\u79cd\u6c47\u7f16\u8bed\u8a00\u7ffb\u8bd1\u6210\u53e6\u4e00\u79cd\u6c47\u7f16\u8bed\u8a00\uff0c\u4f46\u73b0\u4eca\uff0c\u5927\u591a\u6570\u7f16\u8bd1\u5668\u90fd\u9002\u7528\u4e8e\u9ad8\u7ea7\u8bed\u8a00\u3002\u5728UNIX\u5e7f\u6cdb\u8fd0\u884c\u5728\u5404\u79cd\u5404\u6837\u7684\u673a\u5668\u4e0a\u4e4b\u540e\uff0c\u7f16\u8bd1\u5668\u5f00\u59cb\u957f\u671f\u4ee5C\u4f5c\u4e3a\u8f93\u51fa\u8bed\u8a00\u3002C\u7f16\u8bd1\u5668\u5728UNIX\u5b58\u5728\u7684\u5730\u65b9\u90fd\u53ef\u4ee5\u4f7f\u7528\uff0c\u5e76\u80fd\u751f\u6210\u6709\u6548\u7684\u4ee3\u7801\uff0c\u56e0\u6b64\uff0c\u4ee5C\u4e3a\u76ee\u6807\u662f\u8ba9\u8bed\u8a00\u5728\u8bb8\u591a\u4f53\u7cfb\u7ed3\u6784\u4e0a\u8fd0\u884c\u7684\u597d\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:'Web\u6d4f\u89c8\u5668\u662f\u4eca\u5929\u7684 "\u673a\u5668"\uff0c\u5b83\u4eec\u7684 "\u673a\u5668\u4ee3\u7801 "\u662fJavaScript\uff0c\u6240\u4ee5\u73b0\u5728\u4f3c\u4e4e\u51e0\u4e4e\u6240\u6709\u7684\u8bed\u8a00\u90fd\u6709\u4e00\u4e2a\u4ee5JS\u4e3a\u76ee\u6807\u7684\u7f16\u8bd1\u5668\uff0c\u56e0\u4e3a\u8fd9\u662f\u8ba9\u4f60\u7684\u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u4e3b\u8981\u65b9\u5f0f[12]\u3002'}),"\n",(0,s.jsx)(e.p,{children:"\u8f6c\u8bd1\u5668\u7684\u524d\u7aef\uff08\u626b\u63cf\u5668\u548c\u89e3\u6790\u5668\uff09\u770b\u8d77\u6765\u8ddf\u5176\u4ed6\u7f16\u8bd1\u5668\u76f8\u4f3c\u3002 \u7136\u540e\uff0c\u5982\u679c\u6e90\u8bed\u8a00\u53ea\u662f\u5728\u76ee\u6807\u8bed\u8a00\u5728\u8bed\u6cd5\u65b9\u9762\u7684\u6362\u76ae\u7248\u672c\uff0c\u5219\u5b83\u53ef\u80fd\u4f1a\u5b8c\u5168\u8df3\u8fc7\u5206\u6790\uff0c\u5e76\u76f4\u63a5\u8f93\u51fa\u76ee\u6807\u8bed\u8a00\u4e2d\u7684\u7c7b\u4f3c\u8bed\u6cd5\u3002\u5982\u679c\u4e24\u79cd\u8bed\u8a00\u7684\u8bed\u4e49\u5dee\u5f02\u8f83\u5927\uff0c\u90a3\u4e48\u4f60\u5c31\u4f1a\u770b\u5230\u5b8c\u6574\u7f16\u8bd1\u5668\u7684\u66f4\u591a\u5178\u578b\u9636\u6bb5\uff0c\u5305\u62ec\u5206\u6790\u751a\u81f3\u4f18\u5316\u3002\u7136\u540e\uff0c\u5728\u4ee3\u7801\u751f\u6210\u9636\u6bb5\uff0c\u65e0\u9700\u8f93\u51fa\u4e00\u4e9b\u50cf\u673a\u5668\u4ee3\u7801\u4e00\u6837\u7684\u4e8c\u8fdb\u5236\u8bed\u8a00\uff0c\u800c\u662f\u751f\u6210\u4e00\u4e32\u8bed\u6cd5\u6b63\u786e\u7684\u76ee\u6807\u8bed\u8a00\u7684\u6e90\u7801\uff08\u597d\u5427\uff0c\u76ee\u6807\u4ee3\u7801\uff09\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5373\u65f6\u7f16\u8bd1",children:"\u5373\u65f6\u7f16\u8bd1"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u540e\u4e00\u4e2a\u4e0e\u5176\u8bf4\u662f\u6377\u5f84\uff0c\u4e0d\u5982\u8bf4\u662f\u5371\u9669\u7684\u9ad8\u5c71\u4e89\u9738\u8d5b\uff0c\u6700\u597d\u7559\u7ed9\u4e13\u5bb6\u3002\u6267\u884c\u4ee3\u7801\u6700\u5feb\u7684\u65b9\u6cd5\u662f\u5c06\u4ee3\u7801\u7f16\u8bd1\u6210\u673a\u5668\u4ee3\u7801\uff0c\u4f46\u4f60\u53ef\u80fd\u4e0d\u77e5\u9053\u4f60\u7684\u6700\u7ec8\u7528\u6237\u7684\u673a\u5668\u652f\u6301\u4ec0\u4e48\u67b6\u6784\u3002\u8be5\u600e\u4e48\u505a\u5462\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u505a\u548cHotSpot JVM\u3001Microsoft\u7684CLR\u548c\u5927\u591a\u6570JavaScript\u89e3\u91ca\u5668\u76f8\u540c\u7684\u4e8b\u60c5\u3002 \u5728\u7ec8\u7aef\u7528\u6237\u7684\u673a\u5668\u4e0a\uff0c\u5f53\u7a0b\u5e8f\u52a0\u8f7d\u65f6\uff08\u65e0\u8bba\u662fJS\u6e90\u4ee3\u7801\u8fd8\u8005\u662f\u5e73\u53f0\u65e0\u5173\u7684JVM\u548cCLR\u5b57\u8282\u7801\uff09\uff0c\u90fd\u53ef\u4ee5\u5c06\u5176\u7f16\u8bd1\u4e3a\u5bf9\u5e94\u7684\u672c\u5730\u4ee3\u7801\uff0c\u4ee5\u9002\u5e94\u672c\u673a\u652f\u6301\u7684\u4f53\u7cfb\u7ed3\u6784\u3002 \u81ea\u7136\u5730\uff0c\u8fd9\u88ab\u79f0\u4e3a\u5373\u65f6\u7f16\u8bd1\u3002 \u5927\u591a\u6570\u9ed1\u5ba2\u53ea\u662f\u8bf4\u201c JIT\u201d\uff0c\u5176\u53d1\u97f3\u4e0e\u201c fit\u201d\u62bc\u97f5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u590d\u6742\u7684JIT\u5c06\u6027\u80fd\u5206\u6790\u94a9\u5b50\u63d2\u5165\u5230\u751f\u6210\u7684\u4ee3\u7801\u4e2d\uff0c\u4ee5\u67e5\u770b\u54ea\u4e9b\u533a\u57df\u5bf9\u6027\u80fd\u6700\u4e3a\u5173\u952e\uff0c\u4ee5\u53ca\u54ea\u4e9b\u7c7b\u578b\u7684\u6570\u636e\u6b63\u5728\u6d41\u7ecf\u5176\u4e2d\u3002 \u7136\u540e\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u5b83\u4eec\u5c06\u901a\u8fc7\u66f4\u9ad8\u7ea7\u7684\u4f18\u5316\u529f\u80fd\u81ea\u52a8\u91cd\u65b0\u7f16\u8bd1\u90a3\u4e9b\u70ed\u70b9\u90e8\u5206[13]\u3002"}),"\n",(0,s.jsxs)(e.admonition,{title:"\u7f16\u8bd1\u5668\u548c\u89e3\u91ca\u5668\u7684\u533a\u522b",type:"success",children:[(0,s.jsx)(e.p,{children:"\u7f16\u8bd1\u662f\u4e00\u79cd\u5b9e\u73b0\u6280\u672f\uff0c\u5176\u4e2d\u6d89\u53ca\u5230\u5c06\u6e90\u8bed\u8a00\u7ffb\u8bd1\u6210\u5176\u4ed6\u8bed\u8a00--\u901a\u5e38\u662f\u8f83\u4f4e\u7ea7\u7684\u5f62\u5f0f\u3002\u5f53\u4f60\u751f\u6210\u5b57\u8282\u7801\u6216\u673a\u5668\u4ee3\u7801\u65f6\uff0c\u4f60\u5c31\u662f\u5728\u7f16\u8bd1\u3002\u5f53\u4f60\u79fb\u690d\u5230\u53e6\u4e00\u79cd\u9ad8\u7ea7\u8bed\u8a00\u65f6\uff0c\u4f60\u4e5f\u5728\u7f16\u8bd1\u3002"}),(0,s.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u8bf4\u8bed\u8a00\u5b9e\u73b0\u201c\u662f\u7f16\u8bd1\u5668\u201d\u65f6\uff0c\u662f\u6307\u5b83\u4f1a\u5c06\u6e90\u4ee3\u7801\u8f6c\u6362\u4e3a\u5176\u4ed6\u5f62\u5f0f\uff0c\u4f46\u4e0d\u4f1a\u6267\u884c\u3002 \u7528\u6237\u5fc5\u987b\u83b7\u53d6\u7ed3\u679c\u8f93\u51fa\u5e76\u81ea\u5df1\u8fd0\u884c\u3002"}),(0,s.jsx)(e.p,{children:"\u76f8\u53cd\uff0c\u5f53\u6211\u4eec\u8bf4\u4e00\u4e2a\u5b9e\u73b0\u201c\u662f\u4e00\u4e2a\u89e3\u91ca\u5668\u201d\u65f6\uff0c\u662f\u6307\u5b83\u63a5\u53d7\u6e90\u4ee3\u7801\u5e76\u7acb\u5373\u6267\u884c\u5b83\u3002 \u5b83\u201c\u4ece\u6e90\u4ee3\u7801\u201d\u8fd0\u884c\u7a0b\u5e8f\u3002"})]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>a});var s=i(6540);const r={},l=s.createContext(r);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);
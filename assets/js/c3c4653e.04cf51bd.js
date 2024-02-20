"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[7371],{4581:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>x,frontMatter:()=>r,metadata:()=>h,toc:()=>c});var l=s(4848),i=s(8453);const r={},t=void 0,h={id:"Linux/Shell/\u7cfb\u7edf\u72b6\u6001",title:"\u7cfb\u7edf\u72b6\u6001",description:"\u5728 linux \u4e0b\u7531\u4e8e\u652f\u6301\u591a\u7ec8\u7aef\u673a\uff0c\u8fd8\u6709\u5c31\u662f\u7a0b\u5e8f\u6216\u670d\u52a1\u90fd\u662f\u540e\u53f0\u8fd0\u884c\uff0c\u5982\u679c\u76f4\u63a5\u91c7\u53d6\u6309\u4e0b\u7535\u6e90\u6765\u5173\u673a\u65f6\uff0c \u5219\u5176\u4ed6\u7684\u4eba\u7684\u6570\u636e\u53ef\u80fd\u5c31\u6b64\u4e2d\u65ad\u3002",source:"@site/docs/Linux/Shell/\u7cfb\u7edf\u72b6\u6001.mdx",sourceDirName:"Linux/Shell",slug:"/Linux/Shell/\u7cfb\u7edf\u72b6\u6001",permalink:"/docs/Linux/Shell/\u7cfb\u7edf\u72b6\u6001",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/Linux/Shell/\u7cfb\u7edf\u72b6\u6001.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"command",permalink:"/docs/Linux/Shell/command"},next:{title:"\u6587\u4ef6\u548c\u76ee\u5f55\u914d\u7f6e",permalink:"/docs/Linux/\u6587\u4ef6\u548c\u76ee\u5f55\u914d\u7f6e/"}},o={},c=[{value:"#\u5173\u673a\u91cd\u542f\u76f8\u5173\u6307\u4ee4",id:"\u5173\u673a\u91cd\u542f\u76f8\u5173\u6307\u4ee4",level:2},{value:"#\u6570\u636e\u540c\u6b65\u5199\u5165\u78c1\u76d8\uff1async",id:"\u6570\u636e\u540c\u6b65\u5199\u5165\u78c1\u76d8sync",level:3},{value:"#\u60ef\u7528\u7684\u5173\u673a\u6307\u4ee4 shutdown",id:"\u60ef\u7528\u7684\u5173\u673a\u6307\u4ee4-shutdown",level:3},{value:"#reboot\u3001halt\u3001poweroff",id:"reboothaltpoweroff",level:3},{value:"#\u5b9e\u9645\u4f7f\u7528\u7ba1\u7406\u5de5\u5177 systemctl \u5173\u673a",id:"\u5b9e\u9645\u4f7f\u7528\u7ba1\u7406\u5de5\u5177-systemctl-\u5173\u673a",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u5728 linux \u4e0b\u7531\u4e8e\u652f\u6301\u591a\u7ec8\u7aef\u673a\uff0c\u8fd8\u6709\u5c31\u662f\u7a0b\u5e8f\u6216\u670d\u52a1\u90fd\u662f\u540e\u53f0\u8fd0\u884c\uff0c\u5982\u679c\u76f4\u63a5\u91c7\u53d6\u6309\u4e0b\u7535\u6e90\u6765\u5173\u673a\u65f6\uff0c \u5219\u5176\u4ed6\u7684\u4eba\u7684\u6570\u636e\u53ef\u80fd\u5c31\u6b64\u4e2d\u65ad\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u82e5\u4e0d\u6b63\u5e38\u5173\u673a\uff0c\u5219\u53ef\u80fd\u9020\u6210\u6587\u4ef6\u7cfb\u7edf\u7684\u635f\u574f\uff08\u56e0\u4e3a\u6765\u4e0d\u53ca\u5c06\u6570\u636e\u56de\u5199\u5230\u6587\u4ef6\u4e2d\uff0c\u6240\u4ee5\u6709\u4e9b\u670d\u52a1\u7684\u6587\u4ef6\u5c31\u4f1a\u6709\u95ee\u9898\uff09"}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u8981\u5173\u673a\u65f6\u9700\u8981\u6ce8\u610f\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u89c2\u5bdf\u7cfb\u7edf\u7684\u4f7f\u7528\u72b6\u6001"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"who\uff1a\u67e5\u770b\u76ee\u524d\u6709\u8c01\u5728\u7ebf"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"netstat -a"}),"\uff1a\u67e5\u770b\u7f51\u7edc\u7684\u8054\u673a\u72b6\u6001"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"ps -aux"}),"\uff1a\u67e5\u770b\u540e\u53f0\u8fd0\u884c\u7684\u7a0b\u5e8f"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e9b\u6307\u4ee4\u53ef\u4ee5\u8ba9\u4f60\u7a0d\u5fae\u4e86\u89e3\u4e3b\u673a\u76ee\u524d\u4f7f\u7528\u72b6\u6001\uff0c\u53ef\u4ee5\u5224\u5b9a\u662f\u5426\u53ef\u4ee5\u5173\u673a\u4e86\uff0c\u540e\u7eed\u4f1a\u7ee7\u7eed\u8bb2\u89e3\u8fd9\u4e9b\u6307\u4ee4"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u901a\u77e5\u5728\u7ebf\u4f7f\u7528\u8005\u5173\u673a\u7684\u65f6\u523b"}),"\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u4f7f\u7528 shutdown \u6307\u4ee4\u6765\u8fbe\u5230\uff1a\u7ed9\u5728\u7ebf\u7684\u4f7f\u7528\u8005\u4e00\u4e9b\u65f6\u95f4\u6765\u7ed3\u675f\u4ed6\u4eec\u7684\u5de5\u4f5c"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"[mrcode@study ~]$ sudo shutdown\n[sudo] password for mrcode:\nShutdown scheduled for Sat 2019-10-05 03:43:32 CST, use 'shutdown -c' to cancel.\n[mrcode@study ~]$\nBroadcast message from root@study.centos.mrcode (Sat 2019-10-05 03:42:32 CST):\n\nThe system is going down for power-off at Sat 2019-10-05 03:43:32 CST!\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6307\u4ee4\u547d\u4ee4\u4e4b\u540e\uff0c\u8fdb\u884c\u4e86\u4e00\u4e2a\u5e7f\u64ad\u6d88\u606f\uff0c\u5e76\u544a\u77e5\u5728\u67d0\u4e2a\u5177\u4f53\u7684\u65f6\u95f4\u8fdb\u884c\u5173\u673a"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u6b63\u786e\u7684\u5173\u673a\u6307\u4ee4\u4f7f\u7528"}),"\n",(0,l.jsx)(e.p,{children:"\u4f8b\u5982 shutdown \u4e0e reboot \u4e24\u4e2a\u6307\u4ee4"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.h2,{id:"\u5173\u673a\u91cd\u542f\u76f8\u5173\u6307\u4ee4",children:[(0,l.jsx)(e.a,{href:"https://zq99299.github.io/linux-tutorial/tutorial-basis/04/04.html#%E5%85%B3%E6%9C%BA%E9%87%8D%E5%90%AF%E7%9B%B8%E5%85%B3%E6%8C%87%E4%BB%A4",children:"#"}),"\u5173\u673a\u91cd\u542f\u76f8\u5173\u6307\u4ee4"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5c06\u6570\u636e\u540c\u6b65\u5199\u5165\u786c\u76d8\uff1async"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u60ef\u7528\u7684\u5173\u673a\u6307\u4ee4\uff1ashutdown"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u91cd\u542f\uff0c\u5173\u673a\uff1areboot\u3001halt\u3001poweroff"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.h3,{id:"\u6570\u636e\u540c\u6b65\u5199\u5165\u78c1\u76d8sync",children:[(0,l.jsx)(e.a,{href:"https://zq99299.github.io/linux-tutorial/tutorial-basis/04/04.html#%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A5%E5%86%99%E5%85%A5%E7%A3%81%E7%9B%98%EF%BC%9Async",children:"#"}),"\u6570\u636e\u540c\u6b65\u5199\u5165\u78c1\u76d8\uff1async"]}),"\n",(0,l.jsx)(e.p,{children:"\u5229\u7528\u7f13\u5b58\u6765\u52a0\u5feb\u6570\u636e\u7684\u8bfb\u53d6\u901f\u5ea6\uff0c\u6240\u4ee5\u6709\u5c06\u5185\u5b58\u4e2d\u7684\u6570\u636e\u5f3a\u5236\u5199\u5165\u78c1\u76d8\u8fd9\u4e48\u4e00\u8bf4\uff0c reboot\u3001halt\u3001poweroff \u6307\u4ee4\u4f1a\u81ea\u52a8\u8c03\u7528 sync \u6307\u4ee4"}),"\n",(0,l.jsxs)(e.h3,{id:"\u60ef\u7528\u7684\u5173\u673a\u6307\u4ee4-shutdown",children:[(0,l.jsx)(e.a,{href:"https://zq99299.github.io/linux-tutorial/tutorial-basis/04/04.html#%E6%83%AF%E7%94%A8%E7%9A%84%E5%85%B3%E6%9C%BA%E6%8C%87%E4%BB%A4-shutdown",children:"#"}),"\u60ef\u7528\u7684\u5173\u673a\u6307\u4ee4 shutdown"]}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u6307\u4ee4\u5fc5\u987b\u4f7f\u7528 root \u8eab\u4efd\u624d\u80fd\u6267\u884c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u547d\u4ee4\u4f1a\u901a\u77e5\u7cfb\u7edf\u5185\u7684\u5404\u4e2a\u7a0b\u5e8f\uff08processes\uff09\u3001\u670d\u52a1\u7b49\u8fdb\u884c\u5173\u95ed\uff0cshutdown \u53ef\u4ee5\u8fbe\u6210\u4ee5\u4e0b\u5de5\u4f5c\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5173\u673a\u6a21\u5f0f\uff1a\u5173\u673a\u6216\u91cd\u542f"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u8bbe\u5b9a\u5173\u673a\u65f6\u95f4\uff1a\u7acb\u523b\u3001\u672a\u6765\u7684\u4e00\u4e2a\u65f6\u95f4"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5173\u673a\u4fe1\u606f\uff1a\u5728\u5173\u673a\u524d\uff0c\u5c06\u8bbe\u7f6e\u7684\u4fe1\u606f\u5e7f\u64ad\u7ed9\u5728\u7ebf\u7684 user"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u53ef\u4ee5\u4ec5\u53d1\u51fa\u8b66\u544a\u4fe1\u606f\uff1a\u6709\u65f6\u5019\u53ef\u80fd\u9700\u8981\u6d4b\u8bd5\u3001\u6216\u5219\u660e\u786e\u544a\u77e5\u4f7f\u7528\u8005\u7684\u573a\u666f\u4e0b\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u4f46\u662f\u53ef\u4ee5\u4e0d\u5173\u673a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8bed\u6cd5\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"/sbin/shutdown [-krhc] [\u65f6\u95f4 [\u8b66\u544a\u4fe1\u606f]]\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"k\uff1a\u4e0d\u8981\u771f\u7684\u5173\u673a\uff0c\u53ea\u53d1\u9001\u8b66\u544a\u4fe1\u606f"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"r\uff1a\u5728\u5c06\u7cfb\u7edf\u7684\u670d\u52a1\u505c\u6389\u4e4b\u540e\u5c31\u91cd\u65b0\u542f\u52a8\uff08\u5e38\u7528)"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"h\uff1a\u5c06\u7cfb\u7edf\u7684\u670d\u52a1\u505c\u6389\u4e4b\u540e\uff0c\u7acb\u5373\u5173\u673a\uff08\u5e38\u7528\uff09"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"c\uff1a\u53d6\u6d88\u5df2\u7ecf\u5728\u8fdb\u884c\u7684 shutdown \u6307\u4ee4\u5185\u5bb9"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u65f6\u95f4\uff1a\u6307\u5b9a\u7cfb\u7edf\u5173\u673a\u7684\u65f6\u95f4\uff0c\u82e5\u6ca1\u6709\u65f6\u95f4\uff0c\u5219\u9ed8\u8ba4 1 \u5206\u949f\u540e\u81ea\u52a8\u8fdb\u884c"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u8001\u7248\u672c\u7cfb\u7edf\u65f6\u95f4\u662f\u5fc5\u987b\u52a0\u7684\uff0c\u800c\u65b0\u7248\u672c\u6ca1\u6709\u65f6\u95f4\u5219\u9ed8\u8ba4\u4e86\u4e00\u4e2a\u65f6\u95f4"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u9762\u6765\u6d4b\u8bd5\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"# \u7acb\u523b\u5173\u673a\uff0cnow \u76f8\u5f53\u4e8e 0 \u7684\u72b6\u6001\nshutdown -h now\n# \u7cfb\u7edf\u5728\u4eca\u5929\u7684 20:25 \u5206\u5173\u673a\uff0c\u82e5\u5728 20\uff1a27 \u5206\u624d\u4e0b\u5355\u6b64\u6307\u4ee4\uff0c\u5219\u9694\u5929\u5173\u673a\nshutdown -h 20:25\n# \u5341\u5206\u949f\u540e\u5173\u673a\nshutdown -h +10\n# \u7acb\u523b\u91cd\u542f\nshutdown -r now\n# 30 \u5206\u949f\u540e\u91cd\u542f\uff0c\u5e76\u663e\u793a\u540e\u9762\u4fe1\u606f\u7ed9\u6240\u6709\u5728\u7ebf\u7684\u4f7f\u7528\u8005\nshutdown -r +30 '\u8981\u5173\u673a\u4e86'\n# \u53ea\u53d1\u9001\u4fe1\u606f\uff0c\u800c\u4e0d\u5173\u673a\uff0c\u7b14\u8005\u5b9e\u6d4b\u8fd9\u4e2a\u6ca1\u6709\u770b\u5230\u6548\u679c\uff0c\u4e0a\u9762\u7684\u90fd\u6709\u6548\u679c\nshutdown -k noew '\u5413\u552c\u4f60\u7684'\n"})}),"\n",(0,l.jsxs)(e.h3,{id:"reboothaltpoweroff",children:[(0,l.jsx)(e.a,{href:"https://zq99299.github.io/linux-tutorial/tutorial-basis/04/04.html#reboot%E3%80%81halt%E3%80%81poweroff",children:"#"}),"reboot\u3001halt\u3001poweroff"]}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e09\u4e2a\u6307\u4ee4\u53ef\u4ee5\u8fdb\u884c\u91cd\u65b0\u542f\u52a8\u4e0e\u5173\u673a\u7684\u4efb\u52a1\uff0c\u8fd9\u4e09\u4e2a\u6307\u4ee4\u8c03\u7528\u7684\u51fd\u6570\u5e93\u90fd\u5dee\u4e0d\u591a\uff08\u90fd\u662f\u8c03\u7528 systemctl \u8fd9\u4e2a\u91cd\u8981\u7684\u7ba1\u7406\u547d\u4ee4\uff09\uff0c \u4f7f\u7528 man reboot\uff0c\u4f1a\u540c\u65f6\u663e\u793a\u7740\u4e09\u4e2a\u6307\u4ee4\u7ed9\u4f60\u770b"}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u822c\u53ea\u7528\u8bb0\u4f4f reboot\u3001poweroff \u6307\u4ee4\u5c31\u884c\u4e86\uff0c\u800c\u9e1f\u54e5\u4e00\u822c\u91cd\u542f\u65f6\u4f1a\u4f7f\u7528\u4ee5\u4e0b\u7684\u6307\u4ee4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"sync; sync; sync; reboot\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"reboot\uff1a\u91cd\u542f"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"halt\uff1a\u7cfb\u7edf\u505c\u6b62\uff0c\u5c4f\u5e55\u53ef\u80fd\u4f1a\u4fdd\u7559\u7cfb\u7edf\u5df2\u7ecf\u505c\u6b62\u7684\u4fe1\u606f\uff1b\u5b9e\u6d4b\u5c31\u662f\u53ea\u663e\u793a\u4e00\u53e5\u8bdd\uff0c\u50cf\u5361\u6b7b\u4e86\u4e00\u6837"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"poweroff\uff1a\u7cfb\u7edf\u5173\u673a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u66f4\u591a\u7684\u9009\u9879\u529f\u80fd\uff0c\u8bf7\u52a1\u5fc5\u4f7f\u7528 man \u53bb\u67e5\u8be2"}),"\n",(0,l.jsxs)(e.h3,{id:"\u5b9e\u9645\u4f7f\u7528\u7ba1\u7406\u5de5\u5177-systemctl-\u5173\u673a",children:[(0,l.jsx)(e.a,{href:"https://zq99299.github.io/linux-tutorial/tutorial-basis/04/04.html#%E5%AE%9E%E9%99%85%E4%BD%BF%E7%94%A8%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7-systemctl-%E5%85%B3%E6%9C%BA",children:"#"}),"\u5b9e\u9645\u4f7f\u7528\u7ba1\u7406\u5de5\u5177 systemctl \u5173\u673a"]}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u5de5\u5177\u5f88\u590d\u6742\uff0c\u76ee\u524d\u53ea\u9700\u8981\u4e86\u89e3\u6709\u5173\u5173\u673a\u7684\u90e8\u5206\u5373\u53ef\uff0c\u540e\u7eed\u7ae0\u8282\u4f1a\u8bb2\u5230"}),"\n",(0,l.jsx)(e.p,{children:"halt\u3001poweroff\u3001reboot\u3001shutdown \u7b49\u7b49\u90fd\u662f\u8c03\u7528 systemctl \u6307\u4ee4\u7684\u3002\u4e0b\u9762\u662f\u6709\u5173\u5173\u673a\u7684\u8bed\u6cd5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"systemctl [\u6307\u4ee4]\nhalt \uff1a\u7cfb\u7edf\u505c\u6b62\uff0c\u5c4f\u5e55\u663e\u793a\u4e00\u53e5\u8bdd\uff0c\u5047\u6b7b\u7684\u6837\u5b50\npoweroff\uff1a\u8fdb\u5165\u5173\u673a\u6a21\u5f0f\nreboot\uff1a\u76f4\u63a5\u91cd\u65b0\u542f\u52a8\nsuspend\uff1a\u8fdb\u5165\u4f11\u7720\u6a21\u5f0f\n"})})]})}function x(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>h});var l=s(6540);const i={},r=l.createContext(i);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function h(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);
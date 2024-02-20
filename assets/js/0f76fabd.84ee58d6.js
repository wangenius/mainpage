"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1887],{9098:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var c=s(4848),i=s(8453);const r={},d=void 0,t={id:"\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/\u90ae\u4ef6\u7cfb\u7edf",title:"\u90ae\u4ef6\u7cfb\u7edf",description:"SMTP\u3001POP3\u3001IMAP",source:"@site/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/\u90ae\u4ef6\u7cfb\u7edf.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/\u90ae\u4ef6\u7cfb\u7edf",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/\u90ae\u4ef6\u7cfb\u7edf",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/\u90ae\u4ef6\u7cfb\u7edf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u5e94\u7528\u5c42\u534f\u8bae/HTTP"},next:{title:"\u7269\u7406\u4fe1\u9053\u4f20\u8f93\u539f\u7406\u548c\u9759\u6001\u590d\u7528",permalink:"/docs/\u8ba1\u7b97\u673a\u7f51\u7edc/\u7269\u7406\u4fe1\u9053\u4f20\u8f93\u539f\u7406\u548c\u9759\u6001\u590d\u7528"}},o={},l=[{value:"<code>SMTP</code>\u3001<code>POP3</code>\u3001<code>IMAP</code>",id:"smtppop3imap",level:3}];function h(e){const n={code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h3,{id:"smtppop3imap",children:[(0,c.jsx)(n.code,{children:"SMTP"}),"\u3001",(0,c.jsx)(n.code,{children:"POP3"}),"\u3001",(0,c.jsx)(n.code,{children:"IMAP"})]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"email"}),"\u7cfb\u7edf\uff1a",(0,c.jsx)(n.code,{children:"C/S"}),"\u6a21\u578b\u7684",(0,c.jsx)(n.em,{children:"\u5f02\u6b65"}),"\u7cfb\u7edf\u3002UA\u7528\u6237\u4ee3\u7406\uff1a\u90ae\u4ef6\u5ba2\u6237\u7aef\uff1b",(0,c.jsx)(n.em,{children:"\u90ae\u4ef6\u670d\u52a1\u5668"}),"\u7684\u529f\u80fd\u662f\u63a5\u6536\u548c\u53d1\u9001\u90ae\u4ef6\uff0c\u540c\u65f6\u8981\u5411\u53d1\u4fe1\u4eba\u62a5\u544a\u90ae\u4ef6\u4f20\u9001\u60c5\u51b5\uff0c\u91c7\u7528",(0,c.jsx)(n.code,{children:"C/S"}),"\u65b9\u5f0f\uff0c\u4f46\u662f\u5fc5\u987b\u80fd\u591f\u540c\u65f6\u5145\u5f53\u5ba2\u6237\u548c\u670d\u52a1\u5668\u3002"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"SMTP"})," \u57fa\u4e8eTCP\u7684\u53d1\u9001\u534f\u8bae\u3002",(0,c.jsx)(n.code,{children:"port = 25"}),"\uff0c\u53ea\u4f7f\u7528ASCII\u7801\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.li,{}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8fde\u63a5\u5efa\u7acb\uff1a\u4e0d\u4f7f\u7528\u4e2d\u95f4\u90ae\u4ef6\u670d\u52a1\u5668\u3002",(0,c.jsx)(n.code,{children:"SMTP server"})," \u56de\u590d ",(0,c.jsx)(n.code,{children:"220"}),"\u8868\u793a",(0,c.jsx)(n.code,{children:"service ready"}),"\u3002 ",(0,c.jsx)(n.code,{children:"SMTP client send HELO to SMTP server appendix with sender name"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u90ae\u4ef6\u53d1\u9001\uff1a",(0,c.jsx)(n.code,{children:"MAIL FROM <@addr>, Server reply with 250 OK. RCPT TO : <@addr>,Server reply with 250 OK."})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u8fde\u63a5\u91ca\u653e\uff1a",(0,c.jsx)(n.code,{children:"client send QUIT"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"MIME"}),"\uff1a\u4e00\u4e2a\u4e92\u8054\u7f51\u6807\u51c6\uff0c\u5b83\u6269\u5c55\u4e86\u7535\u5b50\u90ae\u4ef6\u6807\u51c6\uff0c\u4f7f\u5176\u80fd\u591f\u652f\u6301\uff1a \u975eASCII\u5b57\u7b26\u6587\u672c\uff1b \u975e\u6587\u672c\u683c\u5f0f\u9644\u4ef6\uff1b \u7531\u591a\u90e8\u5206\u7ec4\u6210\u7684\u6d88\u606f\u4f53\uff1b \u5305\u542b\u975eASCII\u5b57\u7b26\u7684\u6807\u5934\u4fe1\u606f\u3002\u5728SMTP\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u90ae\u4ef6\u4e3b\u4f53\u7ed3\u6784\uff085\u4e2a\u65b0\u7684\u90ae\u4ef6\u9996\u90e8\u5b57\u6bb5\uff09\uff0c\u5b9a\u4e49\u4e86\u4f20\u9001\u975eASCII\u7801\u7684\u7f16\u7801\u89c4\u5219\uff0c\u53ef\u4ee5\u5bf9\u4efb\u4f55\u5185\u5bb9\u683c\u5f0f\u8fdb\u884c\u8f6c\u6362\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["POP3\uff1a",(0,c.jsx)(n.code,{children:"port = 110"}),"\u57fa\u4e8eTCP\u7684\u90ae\u4ef6\u63a5\u6536\u534f\u8bae\u3002\u63d0\u4f9b\u4e0b\u8f7d\u5e76\u4fdd\u7559\u5728\u670d\u52a1\u5668\u4e0a\u548c\u4e0b\u8f7d\u5e76\u5220\u9664\u670d\u52a1\u5668\u6570\u636e\u7684\u670d\u52a1\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"IMAP"}),"\uff1a\u63d0\u4f9b\u521b\u5efa\u6587\u4ef6\u5939\u3001\u79fb\u52a8\u90ae\u4ef6\u3001\u8fdc\u7a0b\u6587\u4ef6\u5939\u67e5\u8be2\u90ae\u4ef6\u7b49\u8054\u673a\u547d\u4ee4\u3002\u63d0\u4f9b\u53ea\u83b7\u53d6\u62a5\u6587\u7684\u67d0\u4e9b\u90e8\u5206\u3002\u9002\u5408\u4f4e\u5e26\u5bbd\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"Hotmail\u548cGmail\u5728\u5bf9\u5404\u81ea\u670d\u52a1\u5668\u7684\u6536\u53d1\u534f\u8bae\u662fHttp\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var c=s(6540);const i={},r=c.createContext(i);function d(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);
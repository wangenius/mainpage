"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1588],{462:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(4848),c=t(8453);const o={},r=void 0,i={id:"cs/web/\u5e94\u7528\u5c42\u534f\u8bae/FTP",title:"FTP",description:"control port = 21 data port = 20 \u57fa\u4e8eTCP\u7684C/S\u6a21\u578b\u7684\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\u3002",source:"@site/docs/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/FTP.md",sourceDirName:"cs/web/\u5e94\u7528\u5c42\u534f\u8bae",slug:"/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/FTP",permalink:"/docs/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/FTP",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/FTP.md",tags:[],version:"current",frontMatter:{},sidebar:"web",previous:{title:"DNS\u534f\u8bae",permalink:"/docs/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/DNS\u534f\u8bae"},next:{title:"HTTP",permalink:"/docs/cs/web/\u5e94\u7528\u5c42\u534f\u8bae/HTTP"}},l={},d=[];function a(e){const n={code:"code",li:"li",ol:"ol",p:"p",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"control port = 21"})," ",(0,s.jsx)(n.code,{children:"data port = 20"})," \u57fa\u4e8eTCP\u7684",(0,s.jsx)(n.code,{children:"C/S"}),"\u6a21\u578b\u7684\u6587\u4ef6\u4f20\u8f93\u534f\u8bae\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u4f20\u8f93\u534f\u8baeFTP\u63d0\u4f9b\u4ea4\u4e92\u5f0f\u8bbf\u95ee\uff0c\u5141\u8bb8\u5ba2\u6237\u6307\u540d\u6587\u4ef6\u7684\u7c7b\u578b\u683c\u5f0f\uff0c\u5141\u8bb8\u6587\u4ef6\u5177\u6709\u5b58\u53d6\u6743\u9650\uff0c\u5c4f\u853d\u4e86\u5404\u4e2a\u8ba1\u7b97\u673a\u7cfb\u7edf\u7ec6\u8282\uff0c\u9002\u5408\u4e8e\u5f02\u6784\u7f51\u7edc\u4e2d\u4efb\u4f55\u8ba1\u7b97\u673a\u4e4b\u95f4\u4f20\u9001\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u63d0\u4f9b\u4e0d\u540c\u4e3b\u673a\u7cfb\u7edf\uff08\u8f6f\u786c\u4ef6\u90fd\u53ef\u4ee5\u4e0d\u540c\uff09\u4e4b\u95f4\u6587\u4ef6\u4f20\u8f93\u80fd\u529b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u7528\u6237\u6743\u9650\u7ba1\u7406\u7684\u65b9\u5f0f\u63d0\u4f9b\u7528\u6237\u5bf9\u8fdc\u7a0bFTP\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u7ba1\u7406\u80fd\u529b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee5\u533f\u540dFTP\u7684\u65b9\u5f0f\u63d0\u4f9b\u516c\u7528\u6587\u4ef6\u5171\u4eab\u80fd\u529b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2aFTP\u670d\u52a1\u5668\u8fdb\u7a0b\u53ef\u4ee5\u540c\u65f6\u5411\u591a\u4e2a\u5ba2\u6237\u8fdb\u7a0b\u63d0\u4f9b\u670d\u52a1\uff0c\u4e00\u4e2a\u4f4f\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u63a5\u53d7\u65b0\u7684\u8bf7\u6c42\uff0c\u82e5\u5e72\u4ece\u5c5e\u8fdb\u7a0b\uff0c\u8d1f\u8d23\u5904\u7406\u5355\u4e2a\u8bf7\u6c42\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"FTP\u5728\u5de5\u4f5c\u65f6\u4f7f\u7528\u4e24\u4e2a\u5e76\u884c\u8fde\u63a5\uff0c\u4e00\u4e2a\u662f\u63a7\u5236\u8fde\u63a5\u7aef\u53e3\u53f721,\u4e00\u4e2a\u662f\u6570\u636e\u8fde\u63a5\uff0c\u7aef\u53e3\u53f720.\u63a7\u5236\u8fde\u63a5\u5728\u6574\u4e2a\u4f1a\u8bdd\u671f\u95f4\u4e00\u76f4\u4fdd\u6301\u6253\u5f00\u72b6\u6001\u3002\u6570\u636e\u8fde\u63a5\u5728\u63a7\u5236\u8bf7\u6c42\u540e\u6253\u5f00\uff0c\u4f20\u9001\u5b8c\u6210\u540e\u5173\u95ed\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(6540);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
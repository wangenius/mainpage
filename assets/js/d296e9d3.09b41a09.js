"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[2737],{9781:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(4848),c=r(8453);const s={},d=void 0,i={id:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/Buffer",title:"Buffer",description:"\u53ef\u4ee5\u89e3\u9664\u4f20\u8f93\u4e24\u8005\u7684\u5236\u7ea6\u5173\u7cfb\uff0c\u7f13\u548cCPU\u4e0e\u8bbe\u5907\u4e4b\u95f4\u901f\u5ea6\u4e0d\u5339\u914d\u7684\u77db\u76fe\uff0c\u63d0\u9ad8\u4e86\u8bbe\u5907\u548cCPU\u7684\u5e76\u884c\u64cd\u4f5c\u7a0b\u5ea6\uff0c\u63d0\u9ad8\u4e86\u8bbe\u5907\u5229\u7528\u7387\u548c\u7cfb\u7edf\u541e\u5410\u91cf\u3002\u964d\u4f4e\u548c\u8bbe\u5907\u5bf9CPU\u7684\u4e2d\u65ad\u9891\u7387\u3002\u7f13\u51b2\u533a\u6839\u636e\u5176\u5bf9\u5e94\u7684\u662f\u8f93\u5165\u8bbe\u5907\u8fd8\u662f\u8f93\u51fa\u8bbe\u5907\uff0c\u5206\u4e3a\u8f93\u5165\u7f13\u51b2\u533a\u548c\u8f93\u51fa\u7f13\u51b2\u533a \u3002 \u8bbe\u5907\u548c\u5904\u7406\u5668\u5bf9buffer\u7684\u64cd\u4f5c\u662f\u4e32\u884c\u7684\u3002",source:"@site/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/Buffer.mdx",sourceDirName:"\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6",slug:"/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/Buffer",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/Buffer",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/Buffer.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u5c42\u8f6f\u4ef6",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/"},next:{title:"SPOOLing",permalink:"/docs/\u64cd\u4f5c\u7cfb\u7edf\u57fa\u7840/IO\u7cfb\u7edf\u548c\u8bbe\u5907\u7ba1\u7406/IO\u8f6f\u4ef6/SPOOLing"}},o={},l=[];function u(e){const n={code:"code",p:"p",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u53ef\u4ee5\u89e3\u9664\u4f20\u8f93\u4e24\u8005\u7684\u5236\u7ea6\u5173\u7cfb\uff0c\u7f13\u548cCPU\u4e0e\u8bbe\u5907\u4e4b\u95f4\u901f\u5ea6\u4e0d\u5339\u914d\u7684\u77db\u76fe\uff0c\u63d0\u9ad8\u4e86\u8bbe\u5907\u548cCPU\u7684\u5e76\u884c\u64cd\u4f5c\u7a0b\u5ea6\uff0c\u63d0\u9ad8\u4e86\u8bbe\u5907\u5229\u7528\u7387\u548c\u7cfb\u7edf\u541e\u5410\u91cf\u3002\u964d\u4f4e\u548c\u8bbe\u5907\u5bf9CPU\u7684\u4e2d\u65ad\u9891\u7387\u3002\u7f13\u51b2\u533a\u6839\u636e\u5176\u5bf9\u5e94\u7684\u662f\u8f93\u5165\u8bbe\u5907\u8fd8\u662f\u8f93\u51fa\u8bbe\u5907\uff0c\u5206\u4e3a\u8f93\u5165\u7f13\u51b2\u533a\u548c\u8f93\u51fa\u7f13\u51b2\u533a \u3002 \u8bbe\u5907\u548c\u5904\u7406\u5668\u5bf9",(0,t.jsx)(n.code,{children:"buffer"}),"\u7684\u64cd\u4f5c\u662f\u4e32\u884c\u7684\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u540c\u7f13\u51b2\u533a\u4e2a\u6570\uff1a\u5355\u7f13\u51b2\uff0c\u53cc\u7f13\u51b2\uff0c\u5faa\u73af\u7f13\u51b2\uff0c\u7f13\u51b2\u6c60"}),"\n",(0,t.jsxs)(n.p,{children:["\u5168\u7f13\u51b2\uff1a\u53ea\u6709\u5728\u7f13\u51b2\u533a\u88ab\u586b\u6ee1\u4e4b\u540e\u624d\u4f1a\u8fdb\u884c",(0,t.jsx)(n.code,{children:"IO"}),"\u64cd\u4f5c\uff1b\u6700\u5178\u578b\u7684\u5168\u7f13\u51b2\u5c31\u662f\u5bf9\u78c1\u76d8\u6587\u4ef6\u7684\u8bfb\u5199\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u884c\u7f13\u51b2\uff1a\u53ea\u6709\u5728\u8f93\u5165\u6216\u8005\u662f\u8f93\u51fa\u4e2d\u9047\u5230\u6362\u884c\u7b26\u7684\u65f6\u5019\u624d\u4f1a\u8fdb\u884c",(0,t.jsx)(n.code,{children:"I/O"}),"\u64cd\u4f5c\uff1b\u8fd9\u5fe0\u5141\u8bb8\u6211\u4eec\u4e00\u6b21\u5199\u4e00\u4e2a\u5b57\u7b26\uff0c\u4f46\u662f\u53ea\u6709\u5728\u5199\u5b8c\u4e00\u884c\u4e4b\u540e\u624d\u505a",(0,t.jsx)(n.code,{children:"I/O"}),"\u64cd\u4f5c\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u6807\u51c6\u8f93\u5165\u6d41(",(0,t.jsx)(n.code,{children:"stdin"}),")\u548c\u6807\u51c6\u8f93\u51fa\u6d41(",(0,t.jsx)(n.code,{children:"stdout"}),")\u662f\u884c\u7f13\u51b2\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u65e0\u7f13\u51b2\uff1a\u6807\u51c6",(0,t.jsx)(n.code,{children:"I/O"}),"\u4e0d\u7f13\u5b58\u5b57\u7b26\uff1b\u5176\u4e2d\u8868\u73b0\u6700\u660e\u663e\u7684\u5c31\u662f\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u6d41(",(0,t.jsx)(n.code,{children:"stderr"}),")\uff0c\u8fd9\u4f7f\u5f97\u51fa\u9519\u4fe1\u606f\u5c3d\u5feb\u7684\u8fd4\u56de\u7ed9\u7528\u6237\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5bf9\u7f13\u51b2\u533a\u64cd\u4f5c\u7684\u51fd\u6570\uff1a",(0,t.jsx)(n.code,{children:"printf"}),"\u3001",(0,t.jsx)(n.code,{children:"puts"}),"\u3001",(0,t.jsx)(n.code,{children:"putchar"}),"(\u6807\u51c6\u8f93\u51fa\u51fd\u6570)\u3001",(0,t.jsx)(n.code,{children:"scanf"}),"\u3001",(0,t.jsx)(n.code,{children:"gets"}),"\u3001",(0,t.jsx)(n.code,{children:"getchar"}),"(\u6807\u51c6\u8f93\u5165\u51fd\u6570)\u3001",(0,t.jsx)(n.code,{children:"fopen"}),"\u3001",(0,t.jsx)(n.code,{children:"fwrite"}),"\u3001",(0,t.jsx)(n.code,{children:"fread"}),"\u3001",(0,t.jsx)(n.code,{children:"fseek(IO_FILE)"}),"\u3001",(0,t.jsx)(n.code,{children:"fflush"}),"(\u6e05\u9664\u7f13\u51b2\u533a\u4e2d\u7684\u5185\u5bb9)"]})]})}function f(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>i});var t=r(6540);const c={},s=t.createContext(c);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
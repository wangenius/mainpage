"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[7419],{155:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>T,contentTitle:()=>N,default:()=>_,frontMatter:()=>V,metadata:()=>I,toc:()=>A});var r=l(4848),i=l(8453),s=l(6540),t=l(4164),a=l(5236),c=l(6347),o=l(8385),d=l(5793),u=l(7422),h=l(1038);function x(n){return s.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,s.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(n){const{values:e,children:l}=n;return(0,s.useMemo)((()=>{const n=e??function(n){return x(n).map((n=>{let{props:{value:e,label:l,attributes:r,default:i}}=n;return{value:e,label:l,attributes:r,default:i}}))}(l);return function(n){const e=(0,u.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,l])}function j(n){let{value:e,tabValues:l}=n;return l.some((n=>n.value===e))}function m(n){let{queryString:e=!1,groupId:l}=n;const r=(0,c.W6)(),i=function(n){let{queryString:e=!1,groupId:l}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:e,groupId:l});return[(0,d.aZ)(i),(0,s.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,n),r.replace({...r.location,search:e.toString()})}),[i,r])]}function f(n){const{defaultValue:e,queryString:l=!1,groupId:r}=n,i=p(n),[t,a]=(0,s.useState)((()=>function(n){let{defaultValue:e,tabValues:l}=n;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!j({value:e,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${l.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=l.find((n=>n.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:i}))),[c,d]=m({queryString:l,groupId:r}),[u,x]=function(n){let{groupId:e}=n;const l=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,i]=(0,h.Dv)(l);return[r,(0,s.useCallback)((n=>{l&&i.set(n)}),[l,i])]}({groupId:r}),f=(()=>{const n=c??u;return j({value:n,tabValues:i})?n:null})();(0,o.A)((()=>{f&&a(f)}),[f]);return{selectedValue:t,selectValue:(0,s.useCallback)((n=>{if(!j({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);a(n),d(n),x(n)}),[d,x,i]),tabValues:i}}var g=l(195);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(n){let{className:e,block:l,selectedValue:i,selectValue:s,tabValues:c}=n;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),u=n=>{const e=n.currentTarget,l=o.indexOf(e),r=c[l].value;r!==i&&(d(e),s(r))},h=n=>{let e=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{const l=o.indexOf(n.currentTarget)+1;e=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(n.currentTarget)-1;e=o[l]??o[o.length-1];break}}e?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},e),children:c.map((n=>{let{value:e,label:l,attributes:s}=n;return(0,r.jsx)("li",{role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,ref:n=>o.push(n),onKeyDown:h,onClick:u,...s,className:(0,t.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===e}),children:l??e},e)}))})}function S(n){let{lazy:e,children:l,selectedValue:i}=n;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(e){const n=t.find((n=>n.props.value===i));return n?(0,s.cloneElement)(n,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:t.map(((n,e)=>(0,s.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function w(n){const e=f(n);return(0,r.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,r.jsx)(b,{...n,...e}),(0,r.jsx)(S,{...n,...e})]})}function y(n){const e=(0,g.A)();return(0,r.jsx)(w,{...n,children:x(n.children)},String(e))}const P={tabItem:"tabItem_Ymn6"};function k(n){let{children:e,hidden:l,className:i}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(P.tabItem,i),hidden:l,children:e})}const V={title:"\u540c\u6b65\u548c\u4e92\u65a5",sidebar_position:2,slug:"\u540c\u6b65\u548c\u4e92\u65a5"},N="\u540c\u6b65\u548c\u4e92\u65a5",I={id:"cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u540c\u6b65\u548c\u4e92\u65a5",title:"\u540c\u6b65\u548c\u4e92\u65a5",description:"\u540c\u6b65\u548c\u4e92\u65a5\u662f\u8fdb\u7a0b\u4e4b\u95f4\u7ade\u4e89\u548c\u534f\u4f5c\u7684\u89e3\u51b3\u65b9\u6cd5\uff08\u4e24\u79cd\u8fdb\u7a0b\u5173\u7cfb\uff09\u3002",source:"@site/docs/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u540c\u6b65\u548c\u4e92\u65a5.mdx",sourceDirName:"cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406",slug:"/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u540c\u6b65\u548c\u4e92\u65a5",permalink:"/en/docs/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u540c\u6b65\u548c\u4e92\u65a5",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u540c\u6b65\u548c\u4e92\u65a5.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u540c\u6b65\u548c\u4e92\u65a5",sidebar_position:2,slug:"\u540c\u6b65\u548c\u4e92\u65a5"},sidebar:"os",previous:{title:"\u7a0b\u5e8f\u7684\u8fd0\u884c",permalink:"/en/docs/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u7a0b\u5e8f\u7684\u8fd0\u884c"},next:{title:"\u63a7\u5236\u548c\u8c03\u5ea6",permalink:"/en/docs/cs/os/\u591a\u9053\u5f02\u6b65\u673a\u5236\u4e0b\u7684\u5904\u7406\u673a\u7ba1\u7406/\u63a7\u5236\u548c\u8c03\u5ea6"}},T={},A=[{value:"\u4e92\u65a5\u7684\u5b9e\u73b0",id:"\u4e92\u65a5\u7684\u5b9e\u73b0",level:2},{value:"\u540c\u6b65\u7684\u5b9e\u73b0",id:"\u540c\u6b65\u7684\u5b9e\u73b0",level:2},{value:"\u7ba1\u7a0bMonitor",id:"\u7ba1\u7a0bmonitor",level:3},{value:"\u4fe1\u53f7\u91cfSemaphore(PV)",id:"\u4fe1\u53f7\u91cfsemaphorepv",level:3},{value:"\u7ecf\u5178\u540c\u6b65\u95ee\u9898\u7684\u5904\u7406\u65b9\u6cd5",id:"\u7ecf\u5178\u540c\u6b65\u95ee\u9898\u7684\u5904\u7406\u65b9\u6cd5",level:2},{value:"\u6b7b\u9501",id:"\u6b7b\u9501",level:2},{value:"\u6b7b\u9501\u9884\u9632",id:"\u6b7b\u9501\u9884\u9632",level:3},{value:"\u6b7b\u9501\u907f\u514d\uff1a\u94f6\u884c\u5bb6\u7b97\u6cd5",id:"\u6b7b\u9501\u907f\u514d\u94f6\u884c\u5bb6\u7b97\u6cd5",level:3},{value:"\u6b7b\u9501\u68c0\u6d4b\u548c\u89e3\u9664",id:"\u6b7b\u9501\u68c0\u6d4b\u548c\u89e3\u9664",level:3}];function E(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u540c\u6b65\u548c\u4e92\u65a5",children:"\u540c\u6b65\u548c\u4e92\u65a5"}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u6b65\u548c\u4e92\u65a5\u662f\u8fdb\u7a0b\u4e4b\u95f4\u7ade\u4e89\u548c\u534f\u4f5c\u7684\u89e3\u51b3\u65b9\u6cd5\uff08\u4e24\u79cd\u8fdb\u7a0b\u5173\u7cfb\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5927\u591a\u6570\u60c5\u51b5\u4e0b, \u540c\u6b65\u662f\u5efa\u7acb\u5728\u4e92\u65a5\u7684\u57fa\u7840\u4e4b\u4e0a\u7684. \u540c\u6b65\u662f\u4e00\u79cd\u66f4\u4e3a\u590d\u6742\u7684\u4e92\u65a5\uff0c\u800c\u4e92\u65a5\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u540c\u6b65\u3002"}),"\n",(0,r.jsx)(e.admonition,{title:"\u5907\u6ce8",type:"success",children:(0,r.jsx)(e.p,{children:"\u6d88\u8d39\u8005\u548c\u6d88\u8d39\u8005\u662f\u4e92\u65a5\u5173\u7cfb\uff0c\u6d88\u8d39\u8005\u548c\u751f\u4ea7\u8005\u662f\u540c\u6b65\u5173\u7cfb\u3002"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u540c\u6b65\u662f\u76f4\u63a5\u5236\u7ea6\u5173\u7cfb\uff0c\u5728\u5f02\u6b65\u73af\u5883\u4e0b\u8fdb\u884c\uff0c\u53ef\u4ee5\u7528\u4fe1\u53f7\u91cf\u5b9e\u73b0\u540c\u6b65\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u4e92\u65a5\u662f\u95f4\u63a5\u5236\u7ea6\u5173\u7cfb\uff0c\u6ee1\u8db3","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7a7a\u95f2\u8ba9\u8fdb: \u72ec\u5360\u8d44\u6e90\u6709\u7a7a, \u4f60\u624d\u80fd\u8fdb\u5165\u4f7f\u7528"}),"\n",(0,r.jsx)(e.li,{children:"\u5fd9\u5219\u7b49\u5f85: \u72ec\u5360\u8d44\u6e90\u6ca1\u7a7a, \u4f60\u5c31\u5f97\u7b49\u5f85"}),"\n",(0,r.jsx)(e.li,{children:"\u6709\u9650\u7b49\u5f85: \u4f46\u6211\u627f\u8bfa\u4f60\u4e0d\u4f1a\u4e00\u76f4\u7b49"}),"\n",(0,r.jsx)(e.li,{children:"\u8ba9\u6743\u7b49\u5f85: \u4f46\u5982\u679c\u4f60\u7b49\u5f85\u7684\u65f6\u5019, \u8bf7\u628aCPU\u8ba9\u51fa\u6765"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"\u4e34\u754c\u533a(critical section)",type:"warning",children:(0,r.jsx)(e.p,{children:"\u662f\u6307\u5305\u542b\u6709\u5171\u4eab\u6570\u636e\u7684\u4e00\u6bb5\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u53ef\u80fd\u88ab\u591a\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u6216\u4fee\u6539\u3002\u4e34\u754c\u533a\u7684\u5b58\u5728\u5c31\u662f\u4e3a\u4e86\u4fdd\u8bc1\u5f53\u6709\u4e00\u4e2a\u7ebf\u7a0b\u5728\u4e34\u754c\u533a\u5185\u6267\u884c\u7684\u65f6\u5019\uff0c\u4e0d\u80fd\u6709\u5176\u4ed6\u4efb\u4f55 \u7ebf\u7a0b\u88ab\u5141\u8bb8\u5728\u4e34\u754c\u533a\u6267\u884c\u3002\u5bf9\u4e34\u754c\u8d44\u6e90\u7684\u8bbf\u95ee\u5fc5\u987b\u4e92\u65a5\u7684\u8fdb\u884c"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4e92\u65a5\u7684\u5b9e\u73b0",children:"\u4e92\u65a5\u7684\u5b9e\u73b0"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u4e92\u65a5\u9501(\u4e92\u65a5\u91cf)Mutex\u5b9e\u73b0."}),"\n","\n","\n",(0,r.jsxs)(y,{children:[(0,r.jsx)(k,{value:"\u5355\u6807\u5fd7\u6cd5",label:"\u5355\u6807\u5fd7\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"/*\n *\u5f3a\u5236\u4ea4\u6362\u6b21\u5e8f\u8bbf\u95ee\uff0c\u4e0d\u4ea4\u6362\u4e0d\u80fd\u8bbf\u95ee\n*/\nint turn = 0; \nP0:{\n    while(turn != 0);\n    do critical section;\n    turn = 1;\n}\nP1:{\n    while turn != 1;\n    do critical section;\n    turn = 0;\n}\n"})})}),(0,r.jsx)(k,{value:"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5\u6cd5",label:"\u53cc\u6807\u5fd7\u5148\u68c0\u67e5\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"//\u5148\u67e5\u540e\u6539\uff0c\u5c31\u4f1a\u540c\u65f6\u8fdb\u5165\u4e34\u754c\u533a\uff08\u8fdb\u5165\u533a\u4ea4\u66ff\u6267\u884c\uff09\u3002\u90fd\u73a9\u9634\u7684\uff0c\u8bf4\u7684\u548c\u505a\u7684\u4e0d\u4e00\u6837\uff0c\u5c31\u4f1a\u540c\u65f6\u8fdb\u5165\u3002\nboolean flag[2] = {false,false};\nP0:{\n    while flag[1];\n    flag[0] = true;\n    do critical section;\n    flag[0] = false;\n    remainder section;\n}\nP1:{\n    while flag[0];//\u5148\u67e5\n    flag[1] = true;//\u540e\u6539\n    do critical section;\n    flag[1] = false;\n    remainder section;\n}\n"})})}),(0,r.jsx)(k,{value:"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5\u6cd5",label:"\u53cc\u6807\u5fd7\u540e\u68c0\u67e5\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"//\u5148\u6539\u540e\u67e5\uff0c\u53ef\u80fd\u6b7b\u7b49\u5bfc\u81f4\u9965\u997f\uff08\u8fdb\u5165\u533a\u4ea4\u66ff\u6267\u884c\uff09\u592a\u8001\u5b9e\uff0c\u5c31\u4f1a\u997f\nboolean flag[2] = {false,false};\nP0:{\n    flag[0] = true;\n    while flag[1];\n    do critical section;\n    flag[0] = false;\n    remainder section;\n}\nP1:{\n    flag[1] = true;\n    while flag[0];\n    do critical section;\n    flag[1] = false;\n    remainder section;\n}\n"})})}),(0,r.jsx)(k,{value:"\u76ae\u7279\u68ee\u7b97\u6cd5",label:"\u76ae\u7279\u68ee\u7b97\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"//\u5229\u7528flag\u89e3\u51b3\u4e34\u754c\u8d44\u6e90\u7684\u4e92\u65a5\u95ee\u9898\uff0c\u5229\u7528turn\u89e3\u51b3\u9965\u997f\u95ee\u9898 \u6539\u8ba9\u67e5\nint turn = 0;\nboolean flag[2] = {false,false};\nP0:{\n    flag[0] = true;\n    turn = 1;\n    while flag[1] && turn == 1;\n    do critical section;\n    flag[0] = false;\n    remainder section;\n}\nP1:{\n    flag[1] = true;\n    turn = 0;\n    while flag[0] && turn == 0;\n    do critical section;\n    flag[1] = false;\n    remainder section;\n}\n"})})}),(0,r.jsx)(k,{value:"\u4e2d\u65ad\u5c4f\u853d\u6cd5",label:"\u4e2d\u65ad\u5c4f\u853d\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"EINT = 0;\ncritical section;\nEINT = 1;\n"})})}),(0,r.jsx)(k,{value:"\u539f\u5b50\u6307\u4ee4\u6cd5",label:"\u539f\u5b50\u6307\u4ee4\u6cd5",children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"//\u4e0b\u9762\u4e24\u4e2a\u6307\u4ee4\u7684\u63cf\u8ff0\u53ea\u662f\u529f\u80fd\u7684\u5b9e\u73b0\uff0c\u5e76\u975e\u8f6f\u4ef6\u7684\u5b9e\u73b0\u5b9a\u4e49\uff0c\u6709\u786c\u4ef6\u903b\u8f91\u76f4\u63a5\u5b9e\u73b0\uff0c\u4e0d\u4f1a\u88ab\u4e2d\u65ad\n//TestAndSet\u6307\u4ee4\nwhile TestAndSet(&lock);\ncritical section;\nlock = false;\nremainder section;\n\n//Swap\u6307\u4ee4\nkey= true;\nwhile (key != false) Swap(&lock,&key);\ncritical section;\nlock = false;\nremainder section;\n\n"})})})]}),"\n",(0,r.jsx)(e.h2,{id:"\u540c\u6b65\u7684\u5b9e\u73b0",children:"\u540c\u6b65\u7684\u5b9e\u73b0"}),"\n",(0,r.jsx)(e.h3,{id:"\u7ba1\u7a0bmonitor",children:"\u7ba1\u7a0bMonitor"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"monitor Demo{\n    sharing_struct S;//\u7cfb\u7edf\u4e2d\u67d0\u79cd\u8d44\u6e90\u5b9a\u4e49\u7684\u5171\u4eab\u6570\u636e\u7ed3\u6784\n    condition x;//\u963b\u585e\u539f\u56e0\u6761\u4ef6\u53d8\u91cf,\u4fdd\u5b58\u4e00\u4e2a\u7b49\u5f85\u961f\u5217.\u5b9e\u73b0\u540c\u6b65\n    condition y;//\u591a\u4e2a\u6761\u4ef6\u53d8\u91cf\u7684\u8bbe\u7f6e\n    init_code(){\n        S = 5;\n    }\n    take_away(){\n        if(S<=0) x.wait(); //\u8d44\u6e90\u4e0d\u591f,\u5728x\u4e0a\u963b\u585e\u7b49\u5f85\n        --S;\n    }\n    give_back(){\n        ++S;\n        if(x.hasNext) x.signal();//\u5524\u9192\u4e00\u4e2a\u963b\u585e\u8fdb\u7a0b\n    }\n};\n"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5171\u4eab\u8d44\u6e90\u7684\u64cd\u4f5c\u5c01\u88c5\u8d77\u6765,\u7ba1\u7a0b\u5185\u7684\u5171\u4eab\u6570\u636e\u7ed3\u6784\u53ea\u80fd\u88ab\u7ba1\u7a0b\u5185\u7684\u8fc7\u7a0b\u6240\u8bbf\u95ee"}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u6b21\u4ec5\u5141\u8bb8\u4e00\u4e2a\u8fdb\u7a0b\u8fdb\u5165\u7ba1\u7a0b,\u4ece\u800c\u5b9e\u73b0\u8fdb\u7a0b\u4e92\u65a5"}),"\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u6761\u4ef6\u53d8\u91cf\u8fd9\u79cd\u540c\u6b65\u673a\u5236"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4fe1\u53f7\u91cfsemaphorepv",children:"\u4fe1\u53f7\u91cfSemaphore(PV)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"// \u6574\u578b\u4fe1\u53f7\u91cf\nwait(S){\n    while(S<=0);\n    S = S - 1;\n}\nsignal(S){\n    S = S + 1;\n}\n\n//\u8bb0\u5f55\u578b\u4fe1\u53f7\u91cf\ntypedef struct{\n\tint value;\n\tstruct process *Q;//\u963b\u585e\u8fdb\u7a0b\u7684\u6392\u961f\u94fe\u8868\n} semaphore;\n\nvoid wait(semaphore S){\n    S.value --;\n    if(S.value <0){\n        block(S.Q);//\u8fd0\u884c\u6001\u8fdb\u5165\u963b\u585e\u6001\n        add this process to S.Q;\n    }\n}\n\nvoid signal(semaphore S){\n    S.value ++;\n    if(S.value<=0){\n        remve a process P from S.Q;\n        wakeup(P);//\u5524\u9192\u963b\u585e\u961f\u4f0d\u4e2d\u7684\u7b2c\u4e00\u4e2a\u8fdb\u7a0b\n    }\n}\n\n\n//\u540c\u6b65\u5b9e\u73b0\nsemaphore S = 0;\nP1(){\n     x;\n     V(S);\n }\nP2(){\n    P(S);\n    y;\n}\n\n// \u4e92\u65a5\u5b9e\u73b0\nsemaphore S = 1;\nP1(){\n    P(S);\n    critical section;\n    V(S);\n}\nP2(){\n    P(S);\n    critical section;\n    V(S);\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u7ecf\u5178\u540c\u6b65\u95ee\u9898\u7684\u5904\u7406\u65b9\u6cd5",children:"\u7ecf\u5178\u540c\u6b65\u95ee\u9898\u7684\u5904\u7406\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u95ee\u9898"}),"\n",(0,r.jsx)(e.li,{children:"\u7533\u8bf7\u8d44\u6e90P\u64cd\u4f5c\u4e00\u5b9a\u5728\u4e92\u65a5\u52a0\u9501P\u64cd\u4f5c\u4e4b\u524d\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u6b7b\u9501\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u95ee\u9898\u4e2d\u5982\u679c\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u90fd\u662f\u552f\u4e00\uff0cmutex\u4e92\u65a5\u4fe1\u53f7\u91cf\u53ef\u4ee5\u4e0d\u8981\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u8bfb\u8005\u5199\u8005\u95ee\u9898\uff1a\u5199\u8005\u4f18\u5148\u3001\u8bfb\u8005\u4f18\u5148\u3001\u987a\u5e8f\u8bbf\u95ee"}),"\n",(0,r.jsxs)(e.li,{children:["\u54f2\u5b66\u5bb6\u8fdb\u9910\u95ee\u9898\uff1a\u6b7b\u9501\u95ee\u9898\u89e3\u51b3\uff1a","\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u6700\u591a\u5141\u8bb8n-1\u4e2a\u540c\u65f6\u8fdb\u9910"}),"\n",(0,r.jsx)(e.li,{children:"\u4ec5\u5f53\u4e00\u4e2a\u54f2\u5b66\u5bb6\u5de6\u53f3\u4e24\u8fb9\u7684\u7b77\u5b50\u540c\u65f6\u53ef\u7528\uff0c\u624d\u4f1a\u62ff\u8d77\u7b77\u5b50"}),"\n",(0,r.jsx)(e.li,{children:"\u54f2\u5b66\u5bb6\u7f16\u53f7\uff0c\u5947\u6570\u5148\u62ff\u5de6\u7b77\u5b50\uff0c\u5076\u6570\u5148\u62ff\u53f3\u7b77\u5b50"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cpp",children:"//\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u95ee\u9898\nSemaphore filledBuffer = 0;\nSemaphore emptyBuffer = n;\nSemaphore mutex = 1;\n\n//\u8bfb\u8005\u5199\u8005\u95ee\u9898\nSemaphore mutex = 1; //read or write mutex\nSemaphore rmutex = 1; //change count mutex in readers\nSemaphore wmutex = 1; //\u987a\u5e8f\u9501\uff0c\u5f53\u6709writer\u7b49\u5f85\u8bfb\u5199\u9501\u65f6\uff0c\u540e\u6765\u7684reader\u4e0d\u518d\u8fdb\u5165count\nint count = 0;\n\n//\u54f2\u5b66\u5bb6\u8fdb\u9910\u95ee\u9898\nsemaphore fork[5] = {1,1,1,1,1};\n"})}),"\n",(0,r.jsxs)(e.admonition,{title:"\u7ecf\u5178PV\u6a21\u578b\u7684\u7b97\u6cd5\u8bbe\u8ba1\u601d\u8def",type:"success",children:[(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5173\u7cfb\u5206\u6790\uff1a\u786e\u5b9a\u95ee\u9898\u4e2d\u5b58\u5728\u7684\u540c\u6b65\u5173\u7cfb\u3002\u5b58\u5728\u4e00\u5bf9\u540c\u6b65\u5173\u7cfb\uff0c\u5f80\u5f80\u5c31\u9700\u8981\u4e00\u4e2d\u8d44\u6e90\u4fe1\u53f7\u91cf\u3002\u8d44\u6e90\u4fe1\u53f7\u91cf\u7684\u521d\u503c\u6839\u636e\u9898\u76ee\u3002\u9898\u76ee\u4e2d\u6bcf\u4e00\u53e5\u8bdd\u4e00\u822c\u90fd\u6697\u793a\u4e00\u79cd\u540c\u6b65\u5173\u7cfb\u6216\u6697\u793a\u4e00\u7c7b\u8d44\u6e90\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u786e\u5b9a",(0,r.jsx)(e.em,{children:"\u4e34\u754c\u8d44\u6e90"}),"\uff1a",(0,r.jsx)(e.code,{children:"mutex"}),"\u4e92\u65a5\u4fe1\u53f7\u91cf\u8bbf\u95ee\u4e34\u754c\u8d44\u6e90\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u6574\u7406\u601d\u8def\u3002"}),"\n",(0,r.jsx)(e.li,{children:"PV\u6210\u5bf9\u51fa\u73b0\uff1a\u5177\u4f53\u6ce8\u610f\uff1a\u7533\u8bf7\u8d44\u6e90P\u64cd\u4f5c\u4e00\u5b9a\u5728\u4e92\u65a5\u52a0\u9501P\u64cd\u4f5c\u4e4b\u524d\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u6b7b\u9501\u3002\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u95ee\u9898\u4e2d\u5982\u679c\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u90fd\u662f\u552f\u4e00\uff0cmutex\u4e92\u65a5\u4fe1\u53f7\u91cf\u53ef\u4ee5\u4e0d\u8981\u3002PV\u64cd\u4f5c\u8981\u5206\u522b\u7d27\u8d34\u4e34\u754c\u533a\u7684\u5934\u5c3e\u90e8\uff0c\u4e34\u754c\u533a\u7684\u4ee3\u7801\u8981\u5c3d\u91cf\u77ed\uff0c\u4e0d\u80fd\u6709\u6b7b\u5faa\u73af\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u7528\u4e8e",(0,r.jsx)(e.code,{children:"mutex"}),"\u7684",(0,r.jsx)(e.code,{children:"semaphore"}),"\u901a\u5e38\u8bbe\u4e3a1\u3002"]}),"\n"]}),(0,r.jsx)(e.p,{children:"\u5177\u4f53\u6ce8\u610f\uff1a"}),(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"PV\u6210\u5bf9\u51fa\u73b0"}),"\n",(0,r.jsx)(e.li,{children:"PV\u64cd\u4f5c\u8981\u5206\u522b\u7d27\u8d34\u4e34\u754c\u533a\u7684\u5934\u5c3e\u90e8\uff0c\u4e34\u754c\u533a\u7684\u4ee3\u7801\u8981\u5c3d\u91cf\u77ed\uff0c\u4e0d\u80fd\u6709\u6b7b\u5faa\u73af"}),"\n",(0,r.jsx)(e.li,{children:"\u7528\u4e8e\u4e92\u65a5\u7684\u4fe1\u53f7\u91cf\u901a\u5e38\u8bbe\u4e3a1."}),"\n"]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u6b7b\u9501",children:"\u6b7b\u9501"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u53c2\u4e0e\u6b7b\u9501\u7684\u8fdb\u7a0b\u81f3\u5c11\u6709\u4e24\u4e2a"}),"\n",(0,r.jsx)(e.li,{children:"\u6bcf\u4e2a\u53c2\u4e0e\u6b7b\u9501\u7684\u8fdb\u7a0b\u5747\u7b49\u5f85\u8d44\u6e90"}),"\n",(0,r.jsx)(e.li,{children:"\u53c2\u4e0e\u6b7b\u9501\u7684\u8fdb\u7a0b\u4e2d\u81f3\u5c11\u6709\u4e24\u4e2a\u8fdb\u7a0b\u5360\u6709\u8d44\u6e90"}),"\n",(0,r.jsx)(e.li,{children:"\u6b7b\u9501\u8fdb\u7a0b\u662f\u7cfb\u7edf\u4e2d\u5f53\u524d\u8fdb\u7a0b\u96c6\u5408\u7684\u4e00\u4e2a\u5b50\u96c6"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b7b\u9501\u4ea7\u751f\u7684\u539f\u56e0"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e0d\u53ef\u5265\u593a\u6027\u7cfb\u7edf\u8d44\u6e90\u4e0d\u8db3"}),"\n",(0,r.jsx)(e.li,{children:"\u8fdb\u7a0b\u63a8\u8fdb\u987a\u5e8f\u4e0d\u5f53"}),"\n",(0,r.jsx)(e.li,{children:"\u4fe1\u53f7\u91cf\u4f7f\u7528\u4e0d\u5f53"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6b7b\u9501\u4ea7\u751f\u7684\u5fc5\u8981\u6761\u4ef6"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u4e92\u65a5: \u591a\u4e2a\u8fdb\u7a0b\u8bf7\u6c42\u8bbf\u95ee\u7684\u8d44\u6e90\u662f\u72ec\u5360\u7684,\u9700\u8981\u4e92\u65a5\u8bbf\u95ee"}),"\n",(0,r.jsx)(e.li,{children:"\u4e0d\u5265\u593a: \u4e0d\u80fd\u5265\u593a\u8bbf\u95ee"}),"\n",(0,r.jsx)(e.li,{children:"\u8bf7\u6c42\u4e0e\u4fdd\u6301: \u7b49\u5f85\u7684\u65f6\u95f4\u4e2d\u4e0d\u4f1a\u653e\u5f03\u5df2\u6709\u7684\u8d44\u6e90"}),"\n",(0,r.jsx)(e.li,{children:"\u73af\u8def\u7b49\u5f85: \u6211\u7b49\u4f60\u62e5\u6709\u7684\u8d44\u6e90, \u4f60\u7b49\u6211\u7684"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6b7b\u9501\u9884\u9632",children:"\u6b7b\u9501\u9884\u9632"}),"\n",(0,r.jsx)(e.p,{children:"\u4f1a\u5bf9\u7cfb\u7edf\u5e76\u53d1\u6027\u4ea7\u751f\u5f88\u5927\u7684\u526f\u4f5c\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u7834\u574f4\u4e2a\u5fc5\u8981\u6761\u4ef6\u4e4b\u4e00\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u7834\u574f\u4e92\u65a5\u6761\u4ef6\uff1a\u4e0d\u592a\u53ef\u80fd\uff0c\u8d44\u6e90\u672c\u8eab\u7684\u5c5e\u6027\u9650\u5236"}),"\n",(0,r.jsx)(e.li,{children:"\u7834\u574f\u4e0d\u5265\u593a\u6761\u4ef6\uff1a\u83b7\u5f97\u4e86\u67d0\u4e9b\u8d44\u6e90\u7684\u8fdb\u7a0b\uff0c\u82e5\u65b0\u7684\u8d44\u6e90\u8bf7\u6c42\u4e0d\u80fd\u7acb\u5373\u6ee1\u8db3\uff0c\u5fc5\u987b\u91ca\u653e\u6240\u6709\u5df2\u6709\u7684\u8d44\u6e90\u3002\u9020\u6210\u4e4b\u524d\u4e00\u6bb5\u5de5\u4f5c\u5931\u6548\uff0c\u91cd\u590d\u7533\u8bf7\u548c\u91ca\u653e\u8d44\u6e90\u589e\u52a0\u7cfb\u7edf\u5f00\u9500\uff0c\u964d\u4f4e\u7cfb\u7edf\u541e\u5410\u91cf\u3002\u901a\u5e38\u4e0d\u7528\u4e8e\u4ee3\u4ef7\u8f83\u5927\u7684\u573a\u5408"}),"\n",(0,r.jsx)(e.li,{children:"\u7834\u574f\u8bf7\u6c42\u4fdd\u6301\u6761\u4ef6\uff1a\u9884\u5148\u9759\u6001\u5206\u914d\u65b9\u6cd5\uff0c\u4e00\u6b21\u6027\u7533\u8bf7\u6240\u6709\u8d44\u6e90\uff0c\u6ca1\u6709\u6ee1\u8db3\u524d\u4e0d\u6295\u5165\u8fd0\u884c\u3002\u7b80\u5355\u5b89\u5168\uff0c\u4f46\u662f\u964d\u4f4e\u4e86\u8d44\u6e90\u5229\u7528\u7387\u3002\u5bfc\u81f4\u5176\u5b83\u8fdb\u7a0b\u9965\u997f"}),"\n",(0,r.jsx)(e.li,{children:"\u7834\u574f\u73af\u8def\u6761\u4ef6\uff1a\u6709\u5e8f\u8d44\u6e90\u5206\u914d\u65b9\u6cd5\uff0c\u8d44\u6e90\u7f16\u53f7\u3002\u786e\u5b9a\u6bcf\u4e2a\u8fdb\u7a0b\u5fc5\u987b\u6309\u7f16\u53f7\u9012\u589e\u7684\u987a\u5e8f\u8bf7\u6c42\u8d44\u6e90\u3002\u540c\u7c7b\u8d44\u6e90\u4e00\u6b21\u7533\u8bf7\u5b8c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6b7b\u9501\u907f\u514d\u94f6\u884c\u5bb6\u7b97\u6cd5",children:"\u6b7b\u9501\u907f\u514d\uff1a\u94f6\u884c\u5bb6\u7b97\u6cd5"}),"\n",(0,r.jsx)(e.p,{children:"\u5c06\u7cfb\u7edf\u7684\u72b6\u6001\u5206\u4e3a\u5b89\u5168\u72b6\u6001\u548c\u4e0d\u5b89\u5168\u72b6\u6001\uff0c\u7cfb\u7edf\u8fdb\u884c\u8d44\u6e90\u5206\u914d\u524d\u5148\u8ba1\u7b97\u8d44\u6e90\u5206\u914d\u7684\u5b89\u5168\u6027\uff0c\u82e5\u6b64\u6b21\u5206\u914d\u4e0d\u4f1a\u5bfc\u81f4\u7cfb\u7edf\u8fdb\u5165\u4e0d\u5b89\u5168\u72b6\u6001\uff0c\u5219\u5206\u914d\uff0c\u5426\u5219\u7b49\u5f85\u3002\u82e5\u67d0\u4e00\u523b\uff0c\u7cfb\u7edf\u80fd\u6309\u67d0\u79cd\u987a\u5e8f\u4e3a\u6bcf\u4e2a\u8fdb\u7a0b\u5206\u914d\u6240\u9700\u7684\u8d44\u6e90\uff0c\u76f4\u81f3\u6700\u5927\u9700\u6c42\uff0c\u4f7f\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u53ef\u4ee5\u987a\u5229\u5b8c\u6210\uff0c\u5219\u6b64\u65f6\u7684\u7cfb\u7edf\u72b6\u6001\u4e3a\u5b89\u5168\u72b6\u6001\uff0c\u8be5\u5e8f\u5217\u4e3a\u5b89\u5168\u5e8f\u5217\u3002\u4e0d\u5b58\u5728\u4e00\u4e2a\u8be5\u5e8f\u5217\uff0c\u5219\u6b64\u65f6\u7684\u7cfb\u7edf\u72b6\u6001\u4e3a\u4e0d\u5b89\u5168\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u94f6\u884c\u5bb6\u7b97\u6cd5\uff1a"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"Max matrix\u6700\u5927\u9700\u6c42\u77e9\u9635"}),"\n",(0,r.jsx)(e.li,{children:"Allocation matrix \u5206\u914d\u77e9\u9635"}),"\n",(0,r.jsx)(e.li,{children:"Need matrix\u9700\u6c42\u77e9\u9635"}),"\n",(0,r.jsx)(e.li,{children:"Available vector \u53ef\u5229\u7528\u8d44\u6e90\u5411\u91cf"}),"\n",(0,r.jsxs)(e.li,{children:["\u5b89\u5168\u6027\u7b97\u6cd5\uff1a\n7. work := ",(0,r.jsx)(e.code,{children:"available"}),"\n8. finish:= ",(0,r.jsx)(e.code,{children:"{true,false}[]"})]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6b7b\u9501\u68c0\u6d4b\u548c\u89e3\u9664",children:"\u6b7b\u9501\u68c0\u6d4b\u548c\u89e3\u9664"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u8d44\u6e90\u5206\u914d\u56fe\uff1a"}),"\n",(0,r.jsx)(e.li,{children:"\u6b7b\u9501\u5b9a\u7406\uff1a\u8d44\u6e90\u5206\u914d\u56fe\u7684\u7b80\u5316-\u5220\u6389\u8bf7\u6c42\u53ef\u83b7\u53d6\u7684\u8fdb\u7a0b\u8fb9"}),"\n",(0,r.jsx)(e.li,{children:"\u68c0\u6d4b\u65f6\u95f4\uff1a\u6bcf\u6b21\u5206\u914d\u540e\uff0c\u4f46\u7b97\u6cd5\u590d\u6742\uff0c\u7cfb\u7edf\u5f00\u9500\u5927\uff0c\u9009\u53d6\u6bd4\u8f83\u957f\u7684\u65f6\u95f4\u95f4\u9694\u6765\u6267\u884c\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u89e3\u9664\u65b9\u6cd5\uff1a\u5265\u593a\u8d44\u6e90-\u64a4\u6d88\u8fdb\u7a0b-\u8fdb\u7a0b\u56de\u9000"}),"\n"]}),"\n",(0,r.jsx)(e.admonition,{title:"\u51e0\u4e2a\u6982\u5ff5",type:"success",children:(0,r.jsx)(e.p,{children:"\u9965\u997f\uff1a\u7b49\u5f85\u65f6\u95f4\u7ed9\u8fdb\u7a0b\u63a8\u8fdb\u548c\u54cd\u5e94\u5e26\u6765\u660e\u663e\u7684\u5f71\u54cd\u65f6\u3002\n\u997f\u6b7b\uff1a\u9965\u997f\u5230\u4e00\u5b9a\u7a0b\u5ea6\uff0c\u8fdb\u7a0b\u6240\u8d4b\u4e88\u7684\u4efb\u52a1\u5373\u4f7f\u5b8c\u6210\u4e5f\u4e0d\u518d\u5177\u6709\u5b9e\u9645\u610f\u4e49\n\u6d3b\u9501\uff1a\u5fd9\u65f6\u7b49\u5f85\u6761\u4ef6\u4e0b\u53d1\u751f\u7684\u9965\u997f\uff0c\u6bd4\u5982\u4e0d\u516c\u5e73\u7684\u4e92\u65a5\u7b97\u6cd5\uff0c\u867d\u7136\u6b64\u65f6\u8fdb\u7a0b\u4ecd\u7136\u5728\u6267\u884c\uff0c\u4f46\u6709\u4e9b\u8fdb\u7a0b\u7531\u4e8e\u65e0\u6cd5\u8c03\u5ea6\u6267\u884c\uff0c\u597d\u50cf\u53d1\u751f\u4e86\u6b7b\u9501\u3002"})})]})}function _(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(E,{...n})}):E(n)}},8453:(n,e,l)=>{l.d(e,{R:()=>t,x:()=>a});var r=l(6540);const i={},s=r.createContext(i);function t(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
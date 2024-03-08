"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[6733],{66989:(e,d,n)=>{n.d(d,{y1:()=>b,Rm:()=>L,q7:()=>v,vw:()=>u,YD:()=>p,To:()=>m});var s=n(96540);const l="to_pny7",r="top_mHhS",c="bottom_KmVW",i="tag_cEQi",t="tags_afOf",h="multi_hvf2",x="pairs_X9ER",j="title_ZrLs",a="pair_HxgY";var o=n(74848);const u=e=>{let{children:d}=e;return(0,o.jsx)("span",{className:i,children:d})},p=e=>{let{items:d}=e;return(0,o.jsx)("div",{className:t,children:d.map(((e,d)=>(0,o.jsx)(u,{children:e},d)))})};const m=e=>{let{name:d,icon:n,to:i}=e;const[t,h]=(0,s.useState)("https://www.svgrepo.com/show/331784/web-sites.svg");return(0,s.useEffect)((()=>{var e;n&&h(n),n||(e=i+"/favicon.ico",new Promise((function(d,n){var s=new Image;s.src=e,s.onload=function(e){d(e)},s.onerror=function(e){n(e)}}))).then((()=>{h(i+"/favicon.ico")})).catch((()=>{}))}),[]),(0,o.jsxs)("a",{target:"_blank",className:l,href:i,children:[(0,o.jsxs)("div",{className:r,children:[(0,o.jsx)("span",{children:(0,o.jsx)("img",{src:t})}),(0,o.jsx)("span",{style:{flex:1},children:d})]}),(0,o.jsx)("span",{className:c,children:i})]})},b=e=>{let{children:d}=e;return(0,o.jsx)("div",{className:h,children:d})},v=e=>{let{children:d,title:n}=e;return(0,o.jsxs)("div",{className:x,children:[(0,o.jsx)("div",{className:j,children:n}),d]})},L=e=>{let{children:d,title:n}=e;return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("span",{children:n}),(0,o.jsx)("span",{children:d})]})}},99901:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>x});var s=n(74848),l=n(28453),r=n(66989);const c={title:"SQL",sidebar_position:1,slug:"SQL"},i="SQL",t={id:"cs/database/SQL",title:"SQL",description:"\u56db\u79cd\u8fde\u63a5",source:"@site/docs/cs/database/SQL.mdx",sourceDirName:"cs/database",slug:"/cs/database/SQL",permalink:"/en/docs/cs/database/SQL",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/cs/database/SQL.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SQL",sidebar_position:1,slug:"SQL"},sidebar:"database",next:{title:"ER\u56fe",permalink:"/en/docs/cs/database/ER\u56fe"}},h={},x=[{value:"\u56db\u79cd\u8fde\u63a5",id:"\u56db\u79cd\u8fde\u63a5",level:2},{value:"\u5185\u8fde\u63a5",id:"\u5185\u8fde\u63a5",level:3},{value:"\u5916\u8fde\u63a5",id:"\u5916\u8fde\u63a5",level:3},{value:"\u5de6\u8fde\u63a5",id:"\u5de6\u8fde\u63a5",level:4},{value:"\u53f3\u8fde\u63a5",id:"\u53f3\u8fde\u63a5",level:4},{value:"\u5b8c\u5168\u8fde\u63a5",id:"\u5b8c\u5168\u8fde\u63a5",level:4},{value:"\u4ea4\u53c9\u8fde\u63a5",id:"\u4ea4\u53c9\u8fde\u63a5",level:3},{value:"SQL\u8bed\u8a00",id:"sql\u8bed\u8a00",level:2},{value:"DQL\u6570\u636e\u67e5\u8be2\u8bed\u8a00",id:"dql\u6570\u636e\u67e5\u8be2\u8bed\u8a00",level:3},{value:"count\uff0csum",id:"countsum",level:4},{value:"DML\u6570\u636e\u64cd\u4f5c\u8bed\u8a00",id:"dml\u6570\u636e\u64cd\u4f5c\u8bed\u8a00",level:3},{value:"TPL\u4e8b\u52a1\u5904\u7406\u8bed\u8a00",id:"tpl\u4e8b\u52a1\u5904\u7406\u8bed\u8a00",level:3},{value:"DCL\u6570\u636e\u63a7\u5236\u8bed\u8a00",id:"dcl\u6570\u636e\u63a7\u5236\u8bed\u8a00",level:3},{value:"DDL\u6570\u636e\u5b9a\u4e49\u8bed\u8a00",id:"ddl\u6570\u636e\u5b9a\u4e49\u8bed\u8a00",level:3},{value:"CCL\u6307\u9488\u63a7\u5236\u8bed\u8a00",id:"ccl\u6307\u9488\u63a7\u5236\u8bed\u8a00",level:3},{value:"\u5907\u4efd\u7b56\u7565",id:"\u5907\u4efd\u7b56\u7565",level:2},{value:"\u5b8c\u6574\u6027\u548c\u5b89\u5168\u6027",id:"\u5b8c\u6574\u6027\u548c\u5b89\u5168\u6027",level:2}];function j(e){const d={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h1,{id:"sql",children:"SQL"}),"\n","\n","\n",(0,s.jsx)(d.h2,{id:"\u56db\u79cd\u8fde\u63a5",children:"\u56db\u79cd\u8fde\u63a5"}),"\n",(0,s.jsxs)(r.y1,{children:[(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"ID"}),(0,s.jsx)(d.th,{children:"NAME"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"\u5f20\u4e09"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"\u674e\u56db"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"\u738b\u4e94"})]})]})]}),(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"ID"}),(0,s.jsx)(d.th,{children:"JOB"}),(0,s.jsx)(d.th,{children:"ParentID"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"4"})]})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"\u5185\u8fde\u63a5",children:"\u5185\u8fde\u63a5"}),"\n",(0,s.jsx)(d.p,{children:"\u5305\u62ec\u76f8\u7b49\u8fde\u63a5\u548c\u81ea\u7136\u8fde\u63a5\u3002\u5185\u8fde\u63a5\u4f7f\u7528\u6bd4\u8f83\u8fd0\u7b97\u7b26\u6839\u636e\u6bcf\u4e2a\u8868\u5171\u6709\u7684\u5217\u7684\u503c\u5339\u914d\u4e24\u4e2a\u8868\u4e2d\u7684\u884c\u3002"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"select a.*,b.* from a inner join b on a.ID = b.ParentID\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{}),(0,s.jsx)(d.th,{})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"ID"}),(0,s.jsx)(d.td,{children:"name"}),(0,s.jsx)(d.td,{children:"job"}),(0,s.jsx)(d.td,{children:"parentID"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"\u5f20\u4e09"}),(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"\u674e\u56db"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"\u5916\u8fde\u63a5",children:"\u5916\u8fde\u63a5"}),"\n",(0,s.jsx)(d.p,{children:"\u5305\u62ec\u5de6\u5411\u5916\u8fde\u63a5\uff0c\u53f3\u5411\u5916\u8fde\u63a5\u548c\u5b8c\u6574\u5916\u90e8\u8fde\u63a5\u3002"}),"\n",(0,s.jsx)(d.h4,{id:"\u5de6\u8fde\u63a5",children:"\u5de6\u8fde\u63a5"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"select a.*,b.* from a left join b on a.ID = b.ParentID\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"ID/a"}),(0,s.jsx)(d.th,{children:"name"}),(0,s.jsx)(d.th,{children:"ID/b"}),(0,s.jsx)(d.th,{children:"job"}),(0,s.jsx)(d.th,{children:"parentID"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"\u5f20\u4e09"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"\u674e\u56db"}),(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"\u738b\u4e94"}),(0,s.jsx)(d.td,{children:"NULL"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"\u53f3\u8fde\u63a5",children:"\u53f3\u8fde\u63a5"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"select a.*,b.* from a right join b on a.ID = b.ParentID\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"ID/a"}),(0,s.jsx)(d.th,{children:"name"}),(0,s.jsx)(d.th,{children:"ID/b"}),(0,s.jsx)(d.th,{children:"job"}),(0,s.jsx)(d.th,{children:"parentID"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"\u5f20\u4e09"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"\u674e\u56db"}),(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"NULL"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(d.h4,{id:"\u5b8c\u5168\u8fde\u63a5",children:"\u5b8c\u5168\u8fde\u63a5"}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"select a.*,b.* from a full join b on a.ID = b.ParentID\n"})}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"ID/a"}),(0,s.jsx)(d.th,{children:"name"}),(0,s.jsx)(d.th,{children:"ID/b"}),(0,s.jsx)(d.th,{children:"job"}),(0,s.jsx)(d.th,{children:"parentID"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"\u5f20\u4e09"}),(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:"1"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"\u674e\u56db"}),(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"2"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"NULL"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:"4"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:"\u738b\u4e94"}),(0,s.jsx)(d.td,{children:"NULL"}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h3,{id:"\u4ea4\u53c9\u8fde\u63a5",children:"\u4ea4\u53c9\u8fde\u63a5"}),"\n",(0,s.jsx)(d.p,{children:"\u5bf9\u5de6\u8868\u4e2d\u7684\u6bcf\u4e00\u884c\u548c\u53f3\u8868\u4e2d\u7684\u6bcf\u4e00\u884c\u8fdb\u884c\u7b1b\u5361\u5c14\u79ef\u3002"}),"\n",(0,s.jsx)(d.h2,{id:"sql\u8bed\u8a00",children:"SQL\u8bed\u8a00"}),"\n",(0,s.jsx)(d.h3,{id:"dql\u6570\u636e\u67e5\u8be2\u8bed\u8a00",children:"DQL\u6570\u636e\u67e5\u8be2\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"SELECT"}),",",(0,s.jsx)(d.code,{children:"WHERE"}),",",(0,s.jsx)(d.code,{children:"ORDER BY"}),",",(0,s.jsx)(d.code,{children:"GROUP BY"}),",",(0,s.jsx)(d.code,{children:"HAVING"})]}),"\n",(0,s.jsx)(d.p,{children:"\u6267\u884c\u987a\u5e8f\uff1a"}),"\n",(0,s.jsx)(d.p,{children:(0,s.jsx)(d.code,{children:"select \u2192 from \u2192 where \u2192 group by \u2192 having \u2192 order by"})}),"\n",(0,s.jsxs)(d.p,{children:["\u5176\u4e2d",(0,s.jsx)(d.code,{children:"select"}),"\u548c",(0,s.jsx)(d.code,{children:"from"}),"\u662f\u5fc5\u987b\u7684\uff0c\u5176\u4ed6\u662f\u53ef\u9009\u7684\u3002"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"from"}),"\uff1a\u9700\u8981\u4ece\u54ea\u4e2a\u6570\u636e\u8868\u68c0\u7d22\u6570\u636e"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"where"}),"\uff1a\u8fc7\u6ee4\u8868\u4e2d\u7684\u6570\u636e\u6761\u4ef6"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"group by"}),"\uff1a\u5bf9\u4e0a\u9762\u8fc7\u6ee4\u51fa\u7684\u6570\u636e\u5206\u7ec4"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"having"}),"\uff1a\u5bf9\u4e0a\u9762\u5df2\u7ecf\u5206\u7ec4\u7684\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\u7684\u6761\u4ef6"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"select"}),"\uff1a\u67e5\u770b\u7ed3\u679c\u96c6\u4e2d\u7684\u54ea\u4e2a\u5217\uff0c\u6216\u5217\u7684\u8ba1\u7b97\u7ed3\u679c"]}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"order by"}),"\uff1a\u6309\u7167\u4ec0\u4e48\u6837\u7684\u987a\u5e8f\u6765\u67e5\u770b\u8fd4\u56de\u7684\u6570\u636e"]}),"\n",(0,s.jsx)(d.h4,{id:"countsum",children:"count\uff0csum"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"count"}),"\u7b97\u884c\u6570\uff0c",(0,s.jsx)(d.code,{children:"sum"}),"\u7b97\u603b\u548c"]}),"\n",(0,s.jsx)(d.h3,{id:"dml\u6570\u636e\u64cd\u4f5c\u8bed\u8a00",children:"DML\u6570\u636e\u64cd\u4f5c\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"INSERT"}),",",(0,s.jsx)(d.code,{children:"UPDATE"}),",",(0,s.jsx)(d.code,{children:"DELETE"})]}),"\n",(0,s.jsx)(d.h3,{id:"tpl\u4e8b\u52a1\u5904\u7406\u8bed\u8a00",children:"TPL\u4e8b\u52a1\u5904\u7406\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"BEGIN TRANSACTION"}),",",(0,s.jsx)(d.code,{children:"COMMIT"}),",",(0,s.jsx)(d.code,{children:"ROLLBACK"})]}),"\n",(0,s.jsx)(d.p,{children:"\u786e\u4fdd\u88abDML\u8bed\u53e5\u5f71\u54cd\u7684\u8868\u7684\u6240\u6709\u884c\u53ca\u65f6\u5f97\u5230\u66f4\u65b0"}),"\n",(0,s.jsx)(d.h3,{id:"dcl\u6570\u636e\u63a7\u5236\u8bed\u8a00",children:"DCL\u6570\u636e\u63a7\u5236\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"GRANT"}),",",(0,s.jsx)(d.code,{children:"REVOKE"}),"\u786e\u5b9a\u5355\u4e2a\u7528\u6237\u548c\u7528\u6237\u7ec4\u5bf9\u6570\u636e\u5e93\u5bf9\u8c61\u7684\u8bbf\u95ee"]}),"\n",(0,s.jsx)(d.h3,{id:"ddl\u6570\u636e\u5b9a\u4e49\u8bed\u8a00",children:"DDL\u6570\u636e\u5b9a\u4e49\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"CREATE"}),",",(0,s.jsx)(d.code,{children:"DROP"}),"\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u65b0\u8868\u6216\u8005\u5220\u9664\u8868"]}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"drop truncate table [table_name]\n--\u5220\u9664\u5185\u5bb9\u548c\u5b9a\u4e49\uff0c\u91ca\u653e\u7a7a\u95f4\u3002truncate\u662f\u6e05\u7a7a\u8868\u4e2d\u7684\u6570\u636e\uff0cdrop\u5c06\u8868\u4e00\u8d77\u5220\u9664\n"})}),"\n",(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-SQL",children:"delete from [table_name] where ...\n--delete\u548ctruncate\u4e00\u6837\u53ea\u5220\u9664\u5185\u5bb9\uff0c\u91ca\u653e\u7a7a\u95f4\u4f46\u4e0d\u5220\u9664\u5b9a\u4e49\uff1b\u4f46\u662fdelte\u53ef\u4ee5\u5bf9\u884c\u6570\u636e\u8fdb\u884c\u5220\u9664\uff0c\u4e5f\u53ef\u4ee5\u5bf9\u6574\u8868\u6570\u636e\u8fdb\u884c\u5220\u9664\n"})}),"\n",(0,s.jsx)(d.h3,{id:"ccl\u6307\u9488\u63a7\u5236\u8bed\u8a00",children:"CCL\u6307\u9488\u63a7\u5236\u8bed\u8a00"}),"\n",(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"DECLARE CURSOR"}),",",(0,s.jsx)(d.code,{children:"FETCH INTO"}),",",(0,s.jsx)(d.code,{children:"UPDATE WHERE CURRENT"})]}),"\n",(0,s.jsx)(d.h2,{id:"\u5907\u4efd\u7b56\u7565",children:"\u5907\u4efd\u7b56\u7565"}),"\n",(0,s.jsx)(d.p,{children:"\u5b8c\u5168\u5907\u4efd\uff1a\u5907\u4efd\u6574\u4e2a\u6570\u636e\u96c6"}),"\n",(0,s.jsx)(d.p,{children:"\u90e8\u5206\u5907\u4efd\uff1a\u5907\u4efd\u90e8\u5206\u6570\u636e\u96c6\uff08\u6bd4\u5982\u4e00\u4e2a\u8868\uff09"}),"\n",(0,s.jsxs)(d.ol,{children:["\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u589e\u91cf\u5907\u4efd\uff1a\u8282\u7ea6\u7a7a\u95f4\uff0c\u8fd8\u539f\u9ebb\u70e6"}),"\n"]}),"\n",(0,s.jsxs)(d.li,{children:["\n",(0,s.jsx)(d.p,{children:"\u5dee\u5f02\u5907\u4efd\uff1a\u6d6a\u8d39\u7a7a\u95f4\uff0c\u8fd8\u539f\u7a0d\u5fae\u7b80\u5355"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(d.h2,{id:"\u5b8c\u6574\u6027\u548c\u5b89\u5168\u6027",children:"\u5b8c\u6574\u6027\u548c\u5b89\u5168\u6027"}),"\n",(0,s.jsx)(d.p,{children:"\u5b8c\u6574\u6027\u9632\u6b62\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u4e0d\u7b26\u5408\u8bed\u4e49\u7684\u6570\u636e\uff0c\u9632\u6b62\u9519\u8bef\u4fe1\u606f\u7684\u8f93\u5165\u8f93\u51fa\u9020\u6210\u7684\u65e0\u6548\u64cd\u4f5c\u548c\u9519\u8bef\u7ed3\u679c\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u5b89\u5168\u6027\u662f\u6307\u9632\u6b62\u6570\u636e\u5e93\u88ab\u6076\u610f\u7684\u7834\u574f\u548c\u975e\u6cd5\u5b58\u53d6\u3002"}),"\n",(0,s.jsx)(d.p,{children:"\u67d0\u4e00\u79cd\u673a\u5236\u53ef\u4ee5\u7528\u4e8e\u5b89\u5168\u6027\u548c\u5b8c\u6574\u6027\u7684\u4fdd\u8bc1\u3002"})]})}function a(e={}){const{wrapper:d}={...(0,l.R)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},28453:(e,d,n)=>{n.d(d,{R:()=>c,x:()=>i});var s=n(96540);const l={},r=s.createContext(l);function c(e){const d=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function i(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:d},e.children)}}}]);
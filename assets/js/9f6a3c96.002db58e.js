"use strict";(self.webpackChunkmatrixtime=self.webpackChunkmatrixtime||[]).push([[8488],{8820:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=c(7624),t=c(2172);const o={},i=void 0,d={id:"rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match",title:"match",description:"Rust \u6709\u4e00\u4e2a\u53eb\u505a match \u7684\u6781\u4e3a\u5f3a\u5927\u7684\u63a7\u5236\u6d41\u8fd0\u7b97\u7b26\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5c06\u4e00\u4e2a\u503c\u4e0e\u4e00\u7cfb\u5217\u7684\u6a21\u5f0f\u76f8\u6bd4\u8f83\uff0c\u5e76\u6839\u636e\u76f8\u5339\u914d\u7684\u6a21\u5f0f\u6267\u884c\u76f8\u5e94\u4ee3\u7801\u3002\u6a21\u5f0f\u53ef\u7531\u5b57\u9762\u503c\u3001\u53d8\u91cf\u3001\u901a\u914d\u7b26\u548c\u8bb8\u591a\u5176\u4ed6\u5185\u5bb9\u6784\u6210\uff1b\u7b2c\u5341\u516b\u7ae0\u4f1a\u6d89\u53ca\u5230\u6240\u6709\u4e0d\u540c\u79cd\u7c7b\u7684\u6a21\u5f0f\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u7528\u3002match \u7684\u529b\u91cf\u6765\u6e90\u4e8e\u6a21\u5f0f\u7684\u8868\u73b0\u529b\u4ee5\u53ca\u7f16\u8bd1\u5668\u68c0\u67e5\uff0c\u5b83\u786e\u4fdd\u4e86\u6240\u6709\u53ef\u80fd\u7684\u60c5\u51b5\u90fd\u5f97\u5230\u5904\u7406\u3002",source:"@site/docs/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match.md",sourceDirName:"rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41",slug:"/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match",permalink:"/docs/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"loop",permalink:"/docs/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop"},next:{title:"while",permalink:"/docs/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/while"}},r={},h=[{value:"\u7ed1\u5b9a\u503c\u7684\u6a21\u5f0f",id:"\u7ed1\u5b9a\u503c\u7684\u6a21\u5f0f",level:3},{value:"\u5339\u914d <code>[Option&lt;T&gt;](https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-optiont)</code>",id:"\u5339\u914d-optionthttpsrustbootcsscomch06-02-matchhtmle58cb9e9858d-optiont",level:3},{value:"\u5339\u914d <code>[Some(T)](https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-somet)</code>",id:"\u5339\u914d-somethttpsrustbootcsscomch06-02-matchhtmle58cb9e9858d-somet",level:4},{value:"\u5339\u914d\u662f\u7a77\u5c3d\u7684",id:"\u5339\u914d\u662f\u7a77\u5c3d\u7684",level:3},{value:"<code>[_](https://rust.bootcss.com/ch06-02-match.html#_-%E9%80%9A%E9%85%8D%E7%AC%A6)</code> \u901a\u914d\u7b26",id:"_httpsrustbootcsscomch06-02-matchhtml_-e9809ae9858de7aca6-\u901a\u914d\u7b26",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Rust \u6709\u4e00\u4e2a\u53eb\u505a ",(0,s.jsx)(n.code,{children:"match"})," \u7684\u6781\u4e3a\u5f3a\u5927\u7684\u63a7\u5236\u6d41\u8fd0\u7b97\u7b26\uff0c\u5b83\u5141\u8bb8\u6211\u4eec\u5c06\u4e00\u4e2a\u503c\u4e0e\u4e00\u7cfb\u5217\u7684\u6a21\u5f0f\u76f8\u6bd4\u8f83\uff0c\u5e76\u6839\u636e\u76f8\u5339\u914d\u7684\u6a21\u5f0f\u6267\u884c\u76f8\u5e94\u4ee3\u7801\u3002\u6a21\u5f0f\u53ef\u7531\u5b57\u9762\u503c\u3001\u53d8\u91cf\u3001\u901a\u914d\u7b26\u548c\u8bb8\u591a\u5176\u4ed6\u5185\u5bb9\u6784\u6210\uff1b\u7b2c\u5341\u516b\u7ae0\u4f1a\u6d89\u53ca\u5230\u6240\u6709\u4e0d\u540c\u79cd\u7c7b\u7684\u6a21\u5f0f\u4ee5\u53ca\u5b83\u4eec\u7684\u4f5c\u7528\u3002",(0,s.jsx)(n.code,{children:"match"})," \u7684\u529b\u91cf\u6765\u6e90\u4e8e\u6a21\u5f0f\u7684\u8868\u73b0\u529b\u4ee5\u53ca\u7f16\u8bd1\u5668\u68c0\u67e5\uff0c\u5b83\u786e\u4fdd\u4e86\u6240\u6709\u53ef\u80fd\u7684\u60c5\u51b5\u90fd\u5f97\u5230\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u628a ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f\u60f3\u8c61\u6210\u67d0\u79cd\u786c\u5e01\u5206\u7c7b\u5668\uff1a\u786c\u5e01\u6ed1\u5165\u6709\u7740\u4e0d\u540c\u5927\u5c0f\u5b54\u6d1e\u7684\u8f68\u9053\uff0c\u6bcf\u4e00\u4e2a\u786c\u5e01\u90fd\u4f1a\u6389\u5165\u7b26\u5408\u5b83\u5927\u5c0f\u7684\u5b54\u6d1e\u3002\u540c\u6837\u5730\uff0c\u503c\u4e5f\u4f1a\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"match"})," \u7684\u6bcf\u4e00\u4e2a\u6a21\u5f0f\uff0c\u5e76\u4e14\u5728\u9047\u5230\u7b2c\u4e00\u4e2a \u201c\u7b26\u5408\u201d \u7684\u6a21\u5f0f\u65f6\uff0c\u503c\u4f1a\u8fdb\u5165\u76f8\u5173\u8054\u7684\u4ee3\u7801\u5757\u5e76\u5728\u6267\u884c\u4e2d\u88ab\u4f7f\u7528\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a\u521a\u521a\u63d0\u5230\u4e86\u786c\u5e01\uff0c\u8ba9\u6211\u4eec\u7528\u5b83\u4eec\u6765\u4f5c\u4e3a\u4e00\u4e2a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"match"})," \u7684\u4f8b\u5b50\uff01\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\u6765\u83b7\u53d6\u4e00\u4e2a\u672a\u77e5\u7684\uff08\u7f8e\u5e1d\uff09\u786c\u5e01\uff0c\u5e76\u4ee5\u4e00\u79cd\u7c7b\u4f3c\u9a8c\u949e\u673a\u7684\u65b9\u5f0f\uff0c\u786e\u5b9a\u5b83\u662f\u4f55\u79cd\u786c\u5e01\u5e76\u8fd4\u56de\u5b83\u7684\u7f8e\u5206\u503c\uff0c\u5982\u793a\u4f8b 6-3 \u4e2d\u6240\u793a\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"\nenum Coin {\n    Penny,\n    Nickel,\n    Dime,\n    Quarter,\n}\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 6-3\uff1a\u4e00\u4e2a\u679a\u4e3e\u548c\u4e00\u4e2a\u4ee5\u679a\u4e3e\u6210\u5458\u4f5c\u4e3a\u6a21\u5f0f\u7684 ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f"]}),"\n",(0,s.jsxs)(n.p,{children:["\u62c6\u5f00 ",(0,s.jsx)(n.code,{children:"value_in_cents"})," \u51fd\u6570\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"match"})," \u6765\u770b\u3002\u9996\u5148\uff0c\u6211\u4eec\u5217\u51fa ",(0,s.jsx)(n.code,{children:"match"})," \u5173\u952e\u5b57\u540e\u8ddf\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u662f ",(0,s.jsx)(n.code,{children:"coin"})," \u7684\u503c\u3002\u8fd9\u770b\u8d77\u6765\u975e\u5e38\u50cf ",(0,s.jsx)(n.code,{children:"if"})," \u4f7f\u7528\u7684\u8868\u8fbe\u5f0f\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u6709\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u533a\u522b\uff1a\u5bf9\u4e8e ",(0,s.jsx)(n.code,{children:"if"}),"\uff0c\u8868\u8fbe\u5f0f\u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u800c\u8fd9\u91cc\u5b83\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u3002\u4f8b\u5b50\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"coin"})," \u7684\u7c7b\u578b\u662f\u793a\u4f8b 6-3 \u4e2d\u5b9a\u4e49\u7684 ",(0,s.jsx)(n.code,{children:"Coin"})," \u679a\u4e3e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u662f ",(0,s.jsx)(n.code,{children:"match"})," \u7684\u5206\u652f\u3002\u4e00\u4e2a\u5206\u652f\u6709\u4e24\u4e2a\u90e8\u5206\uff1a\u4e00\u4e2a\u6a21\u5f0f\u548c\u4e00\u4e9b\u4ee3\u7801\u3002\u7b2c\u4e00\u4e2a\u5206\u652f\u7684\u6a21\u5f0f\u662f\u503c ",(0,s.jsx)(n.code,{children:"Coin::Penny"})," \u800c\u4e4b\u540e\u7684 ",(0,s.jsx)(n.code,{children:"=>"})," \u8fd0\u7b97\u7b26\u5c06\u6a21\u5f0f\u548c\u5c06\u8981\u8fd0\u884c\u7684\u4ee3\u7801\u5206\u5f00\u3002\u8fd9\u91cc\u7684\u4ee3\u7801\u5c31\u4ec5\u4ec5\u662f\u503c ",(0,s.jsx)(n.code,{children:"1"}),"\u3002\u6bcf\u4e00\u4e2a\u5206\u652f\u4e4b\u95f4\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53 ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f\u6267\u884c\u65f6\uff0c\u5b83\u5c06\u7ed3\u679c\u503c\u6309\u987a\u5e8f\u4e0e\u6bcf\u4e00\u4e2a\u5206\u652f\u7684\u6a21\u5f0f\u76f8\u6bd4\u8f83\u3002\u5982\u679c\u6a21\u5f0f\u5339\u914d\u4e86\u8fd9\u4e2a\u503c\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u76f8\u5173\u8054\u7684\u4ee3\u7801\u5c06\u88ab\u6267\u884c\u3002\u5982\u679c\u6a21\u5f0f\u5e76\u4e0d\u5339\u914d\u8fd9\u4e2a\u503c\uff0c\u5c06\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u5206\u652f\uff0c\u975e\u5e38\u7c7b\u4f3c\u4e00\u4e2a\u786c\u5e01\u5206\u7c7b\u5668\u3002\u53ef\u4ee5\u62e5\u6709\u4efb\u610f\u591a\u7684\u5206\u652f\uff1a\u793a\u4f8b 6-3 \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"match"})," \u6709\u56db\u4e2a\u5206\u652f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u4e2a\u5206\u652f\u76f8\u5173\u8054\u7684\u4ee3\u7801\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u800c\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u503c\u5c06\u4f5c\u4e3a\u6574\u4e2a ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u5206\u652f\u4ee3\u7801\u8f83\u77ed\u7684\u8bdd\u901a\u5e38\u4e0d\u4f7f\u7528\u5927\u62ec\u53f7\uff0c\u6b63\u5982\u793a\u4f8b 6-3 \u4e2d\u7684\u6bcf\u4e2a\u5206\u652f\u90fd\u53ea\u662f\u8fd4\u56de\u4e00\u4e2a\u503c\u3002\u5982\u679c\u60f3\u8981\u5728\u5206\u652f\u4e2d\u8fd0\u884c\u591a\u884c\u4ee3\u7801\uff0c\u53ef\u4ee5\u4f7f\u7528\u5927\u62ec\u53f7\u3002\u4f8b\u5982\uff0c\u5982\u4e0b\u4ee3\u7801\u5728\u6bcf\u6b21\u4f7f\u7528",(0,s.jsx)(n.code,{children:"Coin::Penny"})," \u8c03\u7528\u65f6\u90fd\u4f1a\u6253\u5370\u51fa \u201cLucky penny!\u201d\uff0c\u540c\u65f6\u4ecd\u7136\u8fd4\u56de\u4ee3\u7801\u5757\u6700\u540e\u7684\u503c\uff0c",(0,s.jsx)(n.code,{children:"1"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => {\n            println!("Lucky penny!");\n            1\n        },\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter => 25,\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u7ed1\u5b9a\u503c\u7684\u6a21\u5f0f",children:(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch06-02-match.html#%E7%BB%91%E5%AE%9A%E5%80%BC%E7%9A%84%E6%A8%A1%E5%BC%8F",children:"\u7ed1\u5b9a\u503c\u7684\u6a21\u5f0f"})}),"\n",(0,s.jsx)(n.p,{children:"\u5339\u914d\u5206\u652f\u7684\u53e6\u4e00\u4e2a\u6709\u7528\u7684\u529f\u80fd\u662f\u53ef\u4ee5\u7ed1\u5b9a\u5339\u914d\u7684\u6a21\u5f0f\u7684\u90e8\u5206\u503c\u3002\u8fd9\u4e5f\u5c31\u662f\u5982\u4f55\u4ece\u679a\u4e3e\u6210\u5458\u4e2d\u63d0\u53d6\u503c\u7684\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u6211\u4eec\u4fee\u6539\u679a\u4e3e\u7684\u4e00\u4e2a\u6210\u5458\u6765\u5b58\u653e\u6570\u636e\u30021999 \u5e74\u5230 2008 \u5e74\u95f4\uff0c\u7f8e\u5e1d\u5728 25 \u7f8e\u5206\u7684\u786c\u5e01\u7684\u4e00\u4fa7\u4e3a 50 \u4e2a\u5dde\u7684\u6bcf\u4e00\u4e2a\u90fd\u5370\u5237\u4e86\u4e0d\u540c\u7684\u8bbe\u8ba1\u3002\u5176\u4ed6\u7684\u786c\u5e01\u90fd\u6ca1\u6709\u8fd9\u79cd\u533a\u5206\u5dde\u7684\u8bbe\u8ba1\uff0c\u6240\u4ee5\u53ea\u6709\u8fd9\u4e9b 25 \u7f8e\u5206\u786c\u5e01\u6709\u7279\u6b8a\u7684\u4ef7\u503c\u3002\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u4fe1\u606f\u52a0\u5165\u6211\u4eec\u7684 ",(0,s.jsx)(n.code,{children:"enum"}),"\uff0c\u901a\u8fc7\u6539\u53d8 ",(0,s.jsx)(n.code,{children:"Quarter"})," \u6210\u5458\u6765\u5305\u542b\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"State"})," \u503c\uff0c\u793a\u4f8b 6-4 \u4e2d\u5b8c\u6210\u4e86\u8fd9\u4e9b\u4fee\u6539\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"\n#[derive(Debug)] // \u8fd9\u6837\u53ef\u4ee5\u53ef\u4ee5\u7acb\u523b\u770b\u5230\u5dde\u7684\u540d\u79f0\nenum UsState {\n    Alabama,\n    Alaska,\n    // --snip--\n}\n\nenum Coin {\n    Penny,\n    Nickel,\n    Dime,\n    Quarter(UsState),\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 6-4\uff1a",(0,s.jsx)(n.code,{children:"Quarter"})," \u6210\u5458\u4e5f\u5b58\u653e\u4e86\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"UsState"})," \u503c\u7684 ",(0,s.jsx)(n.code,{children:"Coin"})," \u679a\u4e3e"]}),"\n",(0,s.jsx)(n.p,{children:"\u60f3\u8c61\u4e00\u4e0b\u6211\u4eec\u7684\u4e00\u4e2a\u670b\u53cb\u5c1d\u8bd5\u6536\u96c6\u6240\u6709 50 \u4e2a\u5dde\u7684 25 \u7f8e\u5206\u786c\u5e01\u3002\u5728\u6839\u636e\u786c\u5e01\u7c7b\u578b\u5206\u7c7b\u96f6\u94b1\u7684\u540c\u65f6\uff0c\u4e5f\u53ef\u4ee5\u62a5\u544a\u51fa\u6bcf\u4e2a 25 \u7f8e\u5206\u786c\u5e01\u6240\u5bf9\u5e94\u7684\u5dde\u540d\u79f0\uff0c\u8fd9\u6837\u5982\u679c\u6211\u4eec\u7684\u670b\u53cb\u6ca1\u6709\u7684\u8bdd\uff0c\u4ed6\u53ef\u4ee5\u5c06\u5176\u52a0\u5165\u6536\u85cf\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8fd9\u4e9b\u4ee3\u7801\u7684\u5339\u914d\u8868\u8fbe\u5f0f\u4e2d\uff0c\u6211\u4eec\u5728\u5339\u914d ",(0,s.jsx)(n.code,{children:"Coin::Quarter"})," \u6210\u5458\u7684\u5206\u652f\u7684\u6a21\u5f0f\u4e2d\u589e\u52a0\u4e86\u4e00\u4e2a\u53eb\u505a ",(0,s.jsx)(n.code,{children:"state"})," \u7684\u53d8\u91cf\u3002\u5f53\u5339\u914d\u5230 ",(0,s.jsx)(n.code,{children:"Coin::Quarter"})," \u65f6\uff0c\u53d8\u91cf ",(0,s.jsx)(n.code,{children:"state"})," \u5c06\u4f1a\u7ed1\u5b9a 25 \u7f8e\u5206\u786c\u5e01\u6240\u5bf9\u5e94\u5dde\u7684\u503c\u3002\u63a5\u7740\u5728\u90a3\u4e2a\u5206\u652f\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"state"}),"\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Nickel => 5,\n        Coin::Dime => 10,\n        Coin::Quarter(state) => {\n            println!("State quarter from {:?}!", state);\n            25\n        },\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"value_in_cents(Coin::Quarter(UsState::Alaska))"}),"\uff0c",(0,s.jsx)(n.code,{children:"coin"})," \u5c06\u662f ",(0,s.jsx)(n.code,{children:"Coin::Quarter(UsState::Alaska)"}),"\u3002\u5f53\u5c06\u503c\u4e0e\u6bcf\u4e2a\u5206\u652f\u76f8\u6bd4\u8f83\u65f6\uff0c\u6ca1\u6709\u5206\u652f\u4f1a\u5339\u914d\uff0c\u76f4\u5230\u9047\u5230 ",(0,s.jsx)(n.code,{children:"Coin::Quarter(state)"}),"\u3002\u8fd9\u65f6\uff0c",(0,s.jsx)(n.code,{children:"state"})," \u7ed1\u5b9a\u7684\u5c06\u4f1a\u662f\u503c ",(0,s.jsx)(n.code,{children:"UsState::Alaska"}),"\u3002\u63a5\u7740\u5c31\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.code,{children:"println!"})," \u8868\u8fbe\u5f0f\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u7ed1\u5b9a\u4e86\uff0c\u50cf\u8fd9\u6837\u5c31\u53ef\u4ee5\u83b7\u53d6 ",(0,s.jsx)(n.code,{children:"Coin"})," \u679a\u4e3e\u7684 ",(0,s.jsx)(n.code,{children:"Quarter"})," \u6210\u5458\u4e2d\u5185\u90e8\u7684\u5dde\u7684\u503c\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"\u5339\u914d-optionthttpsrustbootcsscomch06-02-matchhtmle58cb9e9858d-optiont",children:[(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-optiont",children:"\u5339\u914d "}),(0,s.jsx)(n.code,{children:"[Option<T>](https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-optiont)"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5728\u4e4b\u524d\u7684\u90e8\u5206\u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Option<T>"})," \u65f6\uff0c\u662f\u4e3a\u4e86\u4ece ",(0,s.jsx)(n.code,{children:"Some"})," \u4e2d\u53d6\u51fa\u5176\u5185\u90e8\u7684 ",(0,s.jsx)(n.code,{children:"T"})," \u503c\uff1b\u6211\u4eec\u8fd8\u53ef\u4ee5\u50cf\u5904\u7406 ",(0,s.jsx)(n.code,{children:"Coin"})," \u679a\u4e3e\u90a3\u6837\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"match"})," \u5904\u7406 ",(0,s.jsx)(n.code,{children:"Option<T>"}),"\uff01\u4e0e\u5176\u76f4\u63a5\u6bd4\u8f83\u786c\u5e01\uff0c\u6211\u4eec\u5c06\u6bd4\u8f83 ",(0,s.jsx)(n.code,{children:"Option<T>"})," \u7684\u6210\u5458\uff0c\u4e0d\u8fc7 ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f\u7684\u5de5\u4f5c\u65b9\u5f0f\u4fdd\u6301\u4e0d\u53d8\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6bd4\u5982\u6211\u4eec\u60f3\u8981\u7f16\u5199\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u83b7\u53d6\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Option<i32>"})," \u5e76\u4e14\u5982\u679c\u5176\u4e2d\u6709\u4e00\u4e2a\u503c\uff0c\u5c06\u5176\u52a0\u4e00\u3002\u5982\u679c\u5176\u4e2d\u6ca1\u6709\u503c\uff0c\u51fd\u6570\u5e94\u8be5\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"None"})," \u503c\u5e76\u4e0d\u5c1d\u8bd5\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f97\u76ca\u4e8e ",(0,s.jsx)(n.code,{children:"match"}),"\uff0c\u7f16\u5199\u8fd9\u4e2a\u51fd\u6570\u975e\u5e38\u7b80\u5355\uff0c\u5b83\u5c06\u770b\u8d77\u6765\u50cf\u793a\u4f8b 6-5 \u4e2d\u8fd9\u6837\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"\nfn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        None => None,\n        Some(i) => Some(i + 1),\n    }\n}\n\nlet five = Some(5);\nlet six = plus_one(five);\nlet none = plus_one(None);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 6-5\uff1a\u4e00\u4e2a\u5728 ",(0,s.jsx)(n.code,{children:"Option<i32>"})," \u4e0a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"match"})," \u8868\u8fbe\u5f0f\u7684\u51fd\u6570"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u5339\u914d-somethttpsrustbootcsscomch06-02-matchhtmle58cb9e9858d-somet",children:[(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-somet",children:"\u5339\u914d "}),(0,s.jsx)(n.code,{children:"[Some(T)](https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D-somet)"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u66f4\u4ed4\u7ec6\u5730\u68c0\u67e5 ",(0,s.jsx)(n.code,{children:"plus_one"})," \u7684\u7b2c\u4e00\u884c\u64cd\u4f5c\u3002\u5f53\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"plus_one(five)"})," \u65f6\uff0c",(0,s.jsx)(n.code,{children:"plus_one"})," \u51fd\u6570\u4f53\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"x"})," \u5c06\u4f1a\u662f\u503c ",(0,s.jsx)(n.code,{children:"Some(5)"}),"\u3002\u63a5\u7740\u5c06\u5176\u4e0e\u6bcf\u4e2a\u5206\u652f\u6bd4\u8f83\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"None => None,\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u503c ",(0,s.jsx)(n.code,{children:"Some(5)"})," \u5e76\u4e0d\u5339\u914d\u6a21\u5f0f ",(0,s.jsx)(n.code,{children:"None"}),"\uff0c\u6240\u4ee5\u7ee7\u7eed\u8fdb\u884c\u4e0b\u4e00\u4e2a\u5206\u652f\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"Some(i) => Some(i + 1),\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Some(5)"})," \u4e0e ",(0,s.jsx)(n.code,{children:"Some(i)"})," \u5339\u914d\u5417\uff1f\u5f53\u7136\u5339\u914d\uff01\u5b83\u4eec\u662f\u76f8\u540c\u7684\u6210\u5458\u3002",(0,s.jsx)(n.code,{children:"i"})," \u7ed1\u5b9a\u4e86 ",(0,s.jsx)(n.code,{children:"Some"})," \u4e2d\u5305\u542b\u7684\u503c\uff0c\u6240\u4ee5 ",(0,s.jsx)(n.code,{children:"i"})," \u7684\u503c\u662f ",(0,s.jsx)(n.code,{children:"5"}),"\u3002\u63a5\u7740\u5339\u914d\u5206\u652f\u7684\u4ee3\u7801\u88ab\u6267\u884c\uff0c\u6240\u4ee5\u6211\u4eec\u5c06 ",(0,s.jsx)(n.code,{children:"i"})," \u7684\u503c\u52a0\u4e00\u5e76\u8fd4\u56de\u4e00\u4e2a\u542b\u6709\u503c ",(0,s.jsx)(n.code,{children:"6"})," \u7684\u65b0 ",(0,s.jsx)(n.code,{children:"Some"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u7740\u8003\u8651\u4e0b\u793a\u4f8b 6-5 \u4e2d ",(0,s.jsx)(n.code,{children:"plus_one"})," \u7684\u7b2c\u4e8c\u4e2a\u8c03\u7528\uff0c\u8fd9\u91cc ",(0,s.jsx)(n.code,{children:"x"})," \u662f ",(0,s.jsx)(n.code,{children:"None"}),"\u3002\u6211\u4eec\u8fdb\u5165 ",(0,s.jsx)(n.code,{children:"match"})," \u5e76\u4e0e\u7b2c\u4e00\u4e2a\u5206\u652f\u76f8\u6bd4\u8f83\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"None => None,\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5339\u914d\u4e0a\u4e86\uff01\u8fd9\u91cc\u6ca1\u6709\u503c\u6765\u52a0\u4e00\uff0c\u6240\u4ee5\u7a0b\u5e8f\u7ed3\u675f\u5e76\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"=>"})," \u53f3\u4fa7\u7684\u503c ",(0,s.jsx)(n.code,{children:"None"}),"\uff0c\u56e0\u4e3a\u7b2c\u4e00\u4e2a\u5206\u652f\u5c31\u5339\u914d\u5230\u4e86\uff0c\u5176\u4ed6\u7684\u5206\u652f\u5c06\u4e0d\u518d\u6bd4\u8f83\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5c06 ",(0,s.jsx)(n.code,{children:"match"})," \u4e0e\u679a\u4e3e\u76f8\u7ed3\u5408\u5728\u5f88\u591a\u573a\u666f\u4e2d\u90fd\u662f\u6709\u7528\u7684\u3002\u4f60\u4f1a\u5728 Rust \u4ee3\u7801\u4e2d\u770b\u5230\u5f88\u591a\u8fd9\u6837\u7684\u6a21\u5f0f\uff1a",(0,s.jsx)(n.code,{children:"match"})," \u4e00\u4e2a\u679a\u4e3e\uff0c\u7ed1\u5b9a\u5176\u4e2d\u7684\u503c\u5230\u4e00\u4e2a\u53d8\u91cf\uff0c\u63a5\u7740\u6839\u636e\u5176\u503c\u6267\u884c\u4ee3\u7801\u3002\u8fd9\u5728\u4e00\u5f00\u59cb\u6709\u70b9\u590d\u6742\uff0c\u4e0d\u8fc7\u4e00\u65e6\u4e60\u60ef\u4e86\uff0c\u4f60\u4f1a\u5e0c\u671b\u6240\u6709\u8bed\u8a00\u90fd\u62e5\u6709\u5b83\uff01\u8fd9\u4e00\u76f4\u662f\u7528\u6237\u7684\u6700\u7231\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5339\u914d\u662f\u7a77\u5c3d\u7684",children:(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch06-02-match.html#%E5%8C%B9%E9%85%8D%E6%98%AF%E7%A9%B7%E5%B0%BD%E7%9A%84",children:"\u5339\u914d\u662f\u7a77\u5c3d\u7684"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"match"})," \u8fd8\u6709\u53e6\u4e00\u65b9\u9762\u9700\u8981\u8ba8\u8bba\u3002\u8003\u8651\u4e00\u4e0b ",(0,s.jsx)(n.code,{children:"plus_one"})," \u51fd\u6570\u7684\u8fd9\u4e2a\u7248\u672c\uff0c\u5b83\u6709\u4e00\u4e2a bug \u5e76\u4e0d\u80fd\u7f16\u8bd1\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:"fn plus_one(x: Option<i32>) -> Option<i32> {\n    match x {\n        Some(i) => Some(i + 1),\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u6ca1\u6709\u5904\u7406 ",(0,s.jsx)(n.code,{children:"None"})," \u7684\u60c5\u51b5\uff0c\u6240\u4ee5\u8fd9\u4e9b\u4ee3\u7801\u4f1a\u9020\u6210\u4e00\u4e2a bug\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u8fd9\u662f\u4e00\u4e2a Rust \u77e5\u9053\u5982\u4f55\u5904\u7406\u7684 bug\u3002\u5982\u679c\u5c1d\u8bd5\u7f16\u8bd1\u8fd9\u6bb5\u4ee3\u7801\uff0c\u4f1a\u5f97\u5230\u8fd9\u4e2a\u9519\u8bef\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"error[E0004]: non-exhaustive patterns: `None` not covered\n --\x3e\n  |\n6 |         match x {\n  |               ^ pattern `None` not covered\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Rust \u77e5\u9053\u6211\u4eec\u6ca1\u6709\u8986\u76d6\u6240\u6709\u53ef\u80fd\u7684\u60c5\u51b5\u751a\u81f3\u77e5\u9053\u54ea\u4e9b\u6a21\u5f0f\u88ab\u5fd8\u8bb0\u4e86\uff01Rust \u4e2d\u7684\u5339\u914d\u662f ",(0,s.jsx)(n.strong,{children:"\u7a77\u5c3d\u7684"}),"\uff08",(0,s.jsx)(n.em,{children:"exhaustive(\u529b\u7aed)"}),"\uff09\uff1a\u5fc5\u987b\u7a77\u4e3e\u5230\u6700\u540e\u7684\u53ef\u80fd\u6027\u6765\u4f7f\u4ee3\u7801\u6709\u6548\u3002\u7279\u522b\u7684\u5728\u8fd9\u4e2a ",(0,s.jsx)(n.code,{children:"Option<T>"})," \u7684\u4f8b\u5b50\u4e2d\uff0cRust \u9632\u6b62\u6211\u4eec\u5fd8\u8bb0\u660e\u786e\u7684\u5904\u7406 ",(0,s.jsx)(n.code,{children:"None"})," \u7684\u60c5\u51b5\uff0c\u8fd9\u4f7f\u6211\u4eec\u514d\u4e8e\u5047\u8bbe\u62e5\u6709\u4e00\u4e2a\u5b9e\u9645\u4e0a\u4e3a\u7a7a\u7684\u503c\uff0c\u8fd9\u9020\u6210\u4e86\u4e4b\u524d\u63d0\u5230\u8fc7\u7684\u4ef7\u503c\u4ebf\u4e07\u7684\u9519\u8bef\u3002"]}),"\n",(0,s.jsxs)(n.h3,{id:"_httpsrustbootcsscomch06-02-matchhtml_-e9809ae9858de7aca6-\u901a\u914d\u7b26",children:[(0,s.jsx)(n.code,{children:"[_](https://rust.bootcss.com/ch06-02-match.html#_-%E9%80%9A%E9%85%8D%E7%AC%A6)"}),(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch06-02-match.html#_-%E9%80%9A%E9%85%8D%E7%AC%A6",children:" \u901a\u914d\u7b26"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rust \u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6a21\u5f0f\u7528\u4e8e\u4e0d\u60f3\u5217\u4e3e\u51fa\u6240\u6709\u53ef\u80fd\u503c\u7684\u573a\u666f\u3002\u4f8b\u5982\uff0c",(0,s.jsx)(n.code,{children:"u8"})," \u53ef\u4ee5\u62e5\u6709 0 \u5230 255 \u7684\u6709\u6548\u7684\u503c\uff0c\u5982\u679c\u6211\u4eec\u53ea\u5173\u5fc3 1\u30013\u30015 \u548c 7 \u8fd9\u51e0\u4e2a\u503c\uff0c\u5c31\u5e76\u4e0d\u60f3\u5fc5\u987b\u5217\u51fa 0\u30012\u30014\u30016\u30018\u30019 \u4e00\u76f4\u5230 255 \u7684\u503c\u3002\u6240\u5e78\u6211\u4eec\u4e0d\u5fc5\u8fd9\u4e48\u505a\uff1a\u53ef\u4ee5\u4f7f\u7528\u7279\u6b8a\u7684\u6a21\u5f0f ",(0,s.jsx)(n.code,{children:"_"})," \u66ff\u4ee3\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'\nlet some_u8_value = 0u8;\nmatch some_u8_value {\n    1 => println!("one"),\n    3 => println!("three"),\n    5 => println!("five"),\n    7 => println!("seven"),\n    _ => (),\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"_"})," \u6a21\u5f0f\u4f1a\u5339\u914d\u6240\u6709\u7684\u503c\u3002\u901a\u8fc7\u5c06\u5176\u653e\u7f6e\u4e8e\u5176\u4ed6\u5206\u652f\u4e4b\u540e\uff0c",(0,s.jsx)(n.code,{children:"_"})," \u5c06\u4f1a\u5339\u914d\u6240\u6709\u4e4b\u524d\u6ca1\u6709\u6307\u5b9a\u7684\u53ef\u80fd\u7684\u503c\u3002",(0,s.jsx)(n.code,{children:"()"})," \u5c31\u662f unit \u503c\uff0c\u6240\u4ee5 ",(0,s.jsx)(n.code,{children:"_"})," \u7684\u60c5\u51b5\u4ec0\u4e48\u4e5f\u4e0d\u4f1a\u53d1\u751f\u3002\u56e0\u6b64\uff0c\u53ef\u4ee5\u8bf4\u6211\u4eec\u60f3\u8981\u5bf9 ",(0,s.jsx)(n.code,{children:"_"})," \u901a\u914d\u7b26\u4e4b\u524d\u6ca1\u6709\u5217\u51fa\u7684\u6240\u6709\u53ef\u80fd\u7684\u503c\u4e0d\u505a\u4efb\u4f55\u5904\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u800c\uff0c",(0,s.jsx)(n.code,{children:"match"})," \u5728\u53ea\u5173\u5fc3 ",(0,s.jsx)(n.strong,{children:"\u4e00\u4e2a"})," \u60c5\u51b5\u7684\u573a\u666f\u4e2d\u53ef\u80fd\u5c31\u6709\u70b9\u5570\u55e6\u4e86\u3002\u4e3a\u6b64 Rust \u63d0\u4f9b\u4e86",(0,s.jsx)(n.code,{children:"if let"}),"\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2172:(e,n,c)=>{c.d(n,{I:()=>d,M:()=>i});var s=c(1504);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);
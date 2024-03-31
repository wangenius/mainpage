"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[2373],{1256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=s(4848),c=s(8453);const l={},t="\u65b0\u5efa",i={id:"lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash",title:"Hash",description:"\u6700\u540e\u4ecb\u7ecd\u7684\u5e38\u7528\u96c6\u5408\u7c7b\u578b\u662f \u54c8\u5e0c map\uff08hash map\uff09\u3002HashMap \u7c7b\u578b\u50a8\u5b58\u4e86\u4e00\u4e2a\u952e\u7c7b\u578b K \u5bf9\u5e94\u4e00\u4e2a\u503c\u7c7b\u578b V \u7684\u6620\u5c04\u3002\u5b83\u901a\u8fc7\u4e00\u4e2a \u54c8\u5e0c\u51fd\u6570\u6765\u5b9e\u73b0\u6620\u5c04\uff0c\u51b3\u5b9a\u5982\u4f55\u5c06\u952e\u548c\u503c\u653e\u5165\u5185\u5b58\u4e2d\u3002",source:"@site/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash.md",sourceDirName:"lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b",slug:"/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u590d\u5408\u7c7b\u578b",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/"},next:{title:"\u6807\u91cf\u7c7b\u578b",permalink:"/en/docs/lang/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u6807\u91cf\u7c7b\u578b"}},d={},o=[{value:"\u54c8\u5e0c map \u548c\u6240\u6709\u6743",id:"\u54c8\u5e0c-map-\u548c\u6240\u6709\u6743",level:3},{value:"\u8bbf\u95ee\u54c8\u5e0c map \u4e2d\u7684\u503c",id:"\u8bbf\u95ee\u54c8\u5e0c-map-\u4e2d\u7684\u503c",level:3},{value:"\u66f4\u65b0\u54c8\u5e0c map",id:"\u66f4\u65b0\u54c8\u5e0c-map",level:3},{value:"\u8986\u76d6\u4e00\u4e2a\u503c",id:"\u8986\u76d6\u4e00\u4e2a\u503c",level:4},{value:"\u53ea\u5728\u952e\u6ca1\u6709\u5bf9\u5e94\u503c\u65f6\u63d2\u5165",id:"\u53ea\u5728\u952e\u6ca1\u6709\u5bf9\u5e94\u503c\u65f6\u63d2\u5165",level:4},{value:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u4e00\u4e2a\u503c",id:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u4e00\u4e2a\u503c",level:4},{value:"\u54c8\u5e0c\u51fd\u6570",id:"\u54c8\u5e0c\u51fd\u6570",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u6700\u540e\u4ecb\u7ecd\u7684\u5e38\u7528\u96c6\u5408\u7c7b\u578b\u662f ",(0,r.jsxs)(n.strong,{children:["\u54c8\u5e0c ",(0,r.jsx)(n.code,{children:"map"})]}),"\uff08",(0,r.jsx)(n.em,{children:"hash map"}),"\uff09\u3002",(0,r.jsx)(n.code,{children:"HashMap<K, V>"})," \u7c7b\u578b\u50a8\u5b58\u4e86\u4e00\u4e2a\u952e\u7c7b\u578b ",(0,r.jsx)(n.code,{children:"K"})," \u5bf9\u5e94\u4e00\u4e2a\u503c\u7c7b\u578b ",(0,r.jsx)(n.code,{children:"V"})," \u7684\u6620\u5c04\u3002\u5b83\u901a\u8fc7\u4e00\u4e2a ",(0,r.jsx)(n.strong,{children:"\u54c8\u5e0c\u51fd\u6570"}),"\u6765\u5b9e\u73b0\u6620\u5c04\uff0c\u51b3\u5b9a\u5982\u4f55\u5c06\u952e\u548c\u503c\u653e\u5165\u5185\u5b58\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u54c8\u5e0c ",(0,r.jsx)(n.code,{children:"map"}),"\u53ef\u4ee5\u7528\u4e8e\u9700\u8981\u4efb\u4f55\u7c7b\u578b\u4f5c\u4e3a\u952e\u6765\u5bfb\u627e\u6570\u636e\u7684\u60c5\u51b5\uff0c\u800c\u4e0d\u662f\u50cf ",(0,r.jsx)(n.code,{children:"vector"})," \u90a3\u6837\u901a\u8fc7\u7d22\u5f15\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u4e2a\u6e38\u620f\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u56e2\u961f\u7684\u5206\u6570\u8bb0\u5f55\u5230\u54c8\u5e0c map \u4e2d\uff0c\u5176\u4e2d\u952e\u662f\u961f\u4f0d\u7684\u540d\u5b57\u800c\u503c\u662f\u6bcf\u4e2a\u961f\u4f0d\u7684\u5206\u6570\u3002\u7ed9\u51fa\u4e00\u4e2a\u961f\u540d\uff0c\u5c31\u80fd\u5f97\u5230\u4ed6\u4eec\u7684\u5f97\u5206\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u7ae0\u6211\u4eec\u4f1a\u4ecb\u7ecd\u54c8\u5e0c map \u7684\u57fa\u672c API\uff0c\u4e0d\u8fc7\u8fd8\u6709\u66f4\u591a\u5438\u5f15\u4eba\u7684\u529f\u80fd\u9690\u85cf\u4e8e\u6807\u51c6\u5e93\u5728 ",(0,r.jsx)(n.code,{children:"HashMap<K, V>"})," \u4e0a\u5b9a\u4e49\u7684\u51fd\u6570\u4e2d\u3002\u4e00\u5982\u65e2\u5f80\u8bf7\u67e5\u770b\u6807\u51c6\u5e93\u6587\u6863\u6765\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.h1,{id:"\u65b0\u5efa",children:"\u65b0\u5efa"}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"new"})," \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 ",(0,r.jsx)(n.code,{children:"HashMap"}),"\uff0c\u5e76\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"insert"})," \u589e\u52a0\u5143\u7d20\u3002\u5728\u793a\u4f8b 8-20 \u4e2d\u6211\u4eec\u8bb0\u5f55\u4e24\u652f\u961f\u4f0d\u7684\u5206\u6570\uff0c\u5206\u522b\u662f\u84dd\u961f\u548c\u9ec4\u961f\u3002\u84dd\u961f\u5f00\u59cb\u6709 10 \u5206\u800c\u9ec4\u961f\u5f00\u59cb\u6709 50 \u5206\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\n\nscores.insert(String::from("Blue"), 10);\nscores.insert(String::from("Yellow"), 50);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u6ce8\u610f\u5fc5\u987b\u9996\u5148 ",(0,r.jsx)(n.code,{children:"use"})," \u6807\u51c6\u5e93\u4e2d\u96c6\u5408\u90e8\u5206\u7684 ",(0,r.jsx)(n.code,{children:"HashMap"}),"\u3002\u5728\u8fd9\u4e09\u4e2a\u5e38\u7528\u96c6\u5408\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"HashMap"})," \u662f\u6700\u4e0d\u5e38\u7528\u7684\uff0c\u6240\u4ee5\u5e76\u6ca1\u6709\u88ab prelude \u81ea\u52a8\u5f15\u7528\u3002\u6807\u51c6\u5e93\u4e2d\u5bf9 ",(0,r.jsx)(n.code,{children:"HashMap"})," \u7684\u652f\u6301\u4e5f\u76f8\u5bf9\u8f83\u5c11\uff0c\u4f8b\u5982\uff0c\u5e76\u6ca1\u6709\u5185\u5efa\u7684\u6784\u5efa\u5b8f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u50cf vector \u4e00\u6837\uff0c\u54c8\u5e0c map \u5c06\u5b83\u4eec\u7684\u6570\u636e\u50a8\u5b58\u5728\u5806\u4e0a\uff0c\u8fd9\u4e2a ",(0,r.jsx)(n.code,{children:"HashMap"})," \u7684\u952e\u7c7b\u578b\u662f ",(0,r.jsx)(n.code,{children:"String"})," \u800c\u503c\u7c7b\u578b\u662f ",(0,r.jsx)(n.code,{children:"i32"}),"\u3002\u7c7b\u4f3c\u4e8e vector\uff0c\u54c8\u5e0c map \u662f\u540c\u8d28\u7684\uff1a\u6240\u6709\u7684\u952e\u5fc5\u987b\u662f\u76f8\u540c\u7c7b\u578b\uff0c\u503c\u4e5f\u5fc5\u987b\u90fd\u662f\u76f8\u540c\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u6784\u5efa\u54c8\u5e0c map \u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u4e00\u4e2a\u5143\u7ec4\u7684 vector \u7684 ",(0,r.jsx)(n.code,{children:"collect"})," \u65b9\u6cd5\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7ec4\u5305\u542b\u4e00\u4e2a\u952e\u503c\u5bf9\u3002",(0,r.jsx)(n.code,{children:"collect"})," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u6570\u636e\u6536\u96c6\u8fdb\u4e00\u7cfb\u5217\u7684\u96c6\u5408\u7c7b\u578b\uff0c\u5305\u62ec ",(0,r.jsx)(n.code,{children:"HashMap"}),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u961f\u4f0d\u7684\u540d\u5b57\u548c\u521d\u59cb\u5206\u6570\u5206\u522b\u5728\u4e24\u4e2a vector \u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"zip"})," \u65b9\u6cd5\u6765\u521b\u5efa\u4e00\u4e2a\u5143\u7ec4\u7684 vector\uff0c\u5176\u4e2d \u201cBlue\u201d \u4e0e 10 \u662f\u4e00\u5bf9\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u63a5\u7740\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"collect"})," \u65b9\u6cd5\u5c06\u8fd9\u4e2a\u5143\u7ec4 vector \u8f6c\u6362\u6210\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"HashMap"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet teams  = vec![String::from("Blue"), String::from("Yellow")];\nlet initial_scores = vec![10, 50];\n\nlet scores: HashMap<_, _> = teams.iter().zip(initial_scores.iter()).collect();\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 8-21\uff1a\u7528\u961f\u4f0d\u5217\u8868\u548c\u5206\u6570\u5217\u8868\u521b\u5efa\u54c8\u5e0c map"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc ",(0,r.jsx)(n.code,{children:"HashMap<_, _>"})," \u7c7b\u578b\u6ce8\u89e3\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u53ef\u80fd ",(0,r.jsx)(n.code,{children:"collect"})," \u5f88\u591a\u4e0d\u540c\u7684\u6570\u636e\u7ed3\u6784\uff0c\u800c\u9664\u975e\u663e\u5f0f\u6307\u5b9a\u5426\u5219 Rust \u65e0\u4ece\u5f97\u77e5\u4f60\u9700\u8981\u7684\u7c7b\u578b\u3002\u4f46\u662f\u5bf9\u4e8e\u952e\u548c\u503c\u7684\u7c7b\u578b\u53c2\u6570\u6765\u8bf4\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5212\u7ebf\u5360\u4f4d\uff0c\u800c Rust \u80fd\u591f\u6839\u636e vector \u4e2d\u6570\u636e\u7684\u7c7b\u578b\u63a8\u65ad\u51fa ",(0,r.jsx)(n.code,{children:"HashMap"})," \u6240\u5305\u542b\u7684\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u54c8\u5e0c-map-\u548c\u6240\u6709\u6743",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C-map-%E5%92%8C%E6%89%80%E6%9C%89%E6%9D%83",children:"\u54c8\u5e0c map \u548c\u6240\u6709\u6743"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e\u50cf ",(0,r.jsx)(n.code,{children:"i32"})," \u8fd9\u6837\u7684\u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"Copy"})," trait \u7684\u7c7b\u578b\uff0c\u5176\u503c\u53ef\u4ee5\u62f7\u8d1d\u8fdb\u54c8\u5e0c map\u3002\u5bf9\u4e8e\u50cf ",(0,r.jsx)(n.code,{children:"String"})," \u8fd9\u6837\u62e5\u6709\u6240\u6709\u6743\u7684\u503c\uff0c\u5176\u503c\u5c06\u88ab\u79fb\u52a8\u800c\u54c8\u5e0c map \u4f1a\u6210\u4e3a\u8fd9\u4e9b\u503c\u7684\u6240\u6709\u8005\uff0c\u5982\u793a\u4f8b 8-22 \u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet field_name = String::from("Favorite color");\nlet field_value = String::from("Blue");\n\nlet mut map = HashMap::new();\nmap.insert(field_name, field_value);\n// \u8fd9\u91cc field_name \u548c field_value \u4e0d\u518d\u6709\u6548\uff0c\n// \u5c1d\u8bd5\u4f7f\u7528\u5b83\u4eec\u770b\u770b\u4f1a\u51fa\u73b0\u4ec0\u4e48\u7f16\u8bd1\u9519\u8bef\uff01\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 8-22\uff1a\u5c55\u793a\u4e00\u65e6\u952e\u503c\u5bf9\u88ab\u63d2\u5165\u540e\u5c31\u4e3a\u54c8\u5e0c map \u6240\u62e5\u6709"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53 ",(0,r.jsx)(n.code,{children:"insert"})," \u8c03\u7528\u5c06 ",(0,r.jsx)(n.code,{children:"field_name"})," \u548c ",(0,r.jsx)(n.code,{children:"field_value"})," \u79fb\u52a8\u5230\u54c8\u5e0c map \u4e2d\u540e\uff0c\u5c06\u4e0d\u80fd\u4f7f\u7528\u8fd9\u4e24\u4e2a\u7ed1\u5b9a\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5c06\u503c\u7684\u5f15\u7528\u63d2\u5165\u54c8\u5e0c map\uff0c\u8fd9\u4e9b\u503c\u672c\u8eab\u5c06\u4e0d\u4f1a\u88ab\u79fb\u52a8\u8fdb\u54c8\u5e0c map\u3002\u4f46\u662f\u8fd9\u4e9b\u5f15\u7528\u6307\u5411\u7684\u503c\u5fc5\u987b\u81f3\u5c11\u5728\u54c8\u5e0c map \u6709\u6548\u65f6\u4e5f\u662f\u6709\u6548\u7684\u3002\u7b2c\u5341\u7ae0 ",(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch10-03-lifetime-syntax.html#validating-references-with-lifetimes",children:"\u201c\u751f\u547d\u5468\u671f\u4e0e\u5f15\u7528\u6709\u6548\u6027\u201d"})," \u90e8\u5206\u5c06\u4f1a\u66f4\u591a\u7684\u8ba8\u8bba\u8fd9\u4e2a\u95ee\u9898\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u8bbf\u95ee\u54c8\u5e0c-map-\u4e2d\u7684\u503c",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E8%AE%BF%E9%97%AE%E5%93%88%E5%B8%8C-map-%E4%B8%AD%E7%9A%84%E5%80%BC",children:"\u8bbf\u95ee\u54c8\u5e0c map \u4e2d\u7684\u503c"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"get"})," \u65b9\u6cd5\u5e76\u63d0\u4f9b\u5bf9\u5e94\u7684\u952e\u6765\u4ece\u54c8\u5e0c map \u4e2d\u83b7\u53d6\u503c\uff0c\u5982\u793a\u4f8b 8-23 \u6240\u793a\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\n\nscores.insert(String::from("Blue"), 10);\nscores.insert(String::from("Yellow"), 50);\n\nlet team_name = String::from("Blue");\nlet score = scores.get(&team_name);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 8-23\uff1a\u8bbf\u95ee\u54c8\u5e0c map \u4e2d\u50a8\u5b58\u7684\u84dd\u961f\u5206\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,r.jsx)(n.code,{children:"score"})," \u662f\u4e0e\u84dd\u961f\u5206\u6570\u76f8\u5173\u7684\u503c\uff0c\u5e94\u4e3a ",(0,r.jsx)(n.code,{children:"Some(10)"}),"\u3002\u56e0\u4e3a ",(0,r.jsx)(n.code,{children:"get"})," \u8fd4\u56de ",(0,r.jsx)(n.code,{children:"Option<V>"}),"\uff0c\u6240\u4ee5\u7ed3\u679c\u88ab\u88c5\u8fdb ",(0,r.jsx)(n.code,{children:"Some"}),"\uff1b\u5982\u679c\u67d0\u4e2a\u952e\u5728\u54c8\u5e0c map \u4e2d\u6ca1\u6709\u5bf9\u5e94\u7684\u503c\uff0c",(0,r.jsx)(n.code,{children:"get"})," \u4f1a\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"None"}),"\u3002\u8fd9\u65f6\u5c31\u8981\u7528\u67d0\u79cd\u7b2c\u516d\u7ae0\u63d0\u5230\u7684\u65b9\u6cd5\u4e4b\u4e00\u6765\u5904\u7406 ",(0,r.jsx)(n.code,{children:"Option"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528\u4e0e vector \u7c7b\u4f3c\u7684\u65b9\u5f0f\u6765\u904d\u5386\u54c8\u5e0c map \u4e2d\u7684\u6bcf\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c\u4e5f\u5c31\u662f ",(0,r.jsx)(n.code,{children:"for"})," \u5faa\u73af\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\n\nscores.insert(String::from("Blue"), 10);\nscores.insert(String::from("Yellow"), 50);\n\nfor (key, value) in &scores {\n    println!("{}: {}", key, value);\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4f1a\u4ee5\u4efb\u610f\u987a\u5e8f\u6253\u5370\u51fa\u6bcf\u4e00\u4e2a\u952e\u503c\u5bf9\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"Yellow: 50\nBlue: 10\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u66f4\u65b0\u54c8\u5e0c-map",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E6%9B%B4%E6%96%B0%E5%93%88%E5%B8%8C-map",children:"\u66f4\u65b0\u54c8\u5e0c map"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c3d\u7ba1\u952e\u503c\u5bf9\u7684\u6570\u91cf\u662f\u53ef\u4ee5\u589e\u957f\u7684\uff0c\u4e0d\u8fc7\u4efb\u4f55\u65f6\u5019\uff0c\u6bcf\u4e2a\u952e\u53ea\u80fd\u5173\u8054\u4e00\u4e2a\u503c\u3002\u5f53\u6211\u4eec\u60f3\u8981\u6539\u53d8\u54c8\u5e0c map \u4e2d\u7684\u6570\u636e\u65f6\uff0c\u5fc5\u987b\u51b3\u5b9a\u5982\u4f55\u5904\u7406\u4e00\u4e2a\u952e\u5df2\u7ecf\u6709\u503c\u4e86\u7684\u60c5\u51b5\u3002\u53ef\u4ee5\u9009\u62e9\u5b8c\u5168\u65e0\u89c6\u65e7\u503c\u5e76\u7528\u65b0\u503c\u4ee3\u66ff\u65e7\u503c\u3002\u53ef\u4ee5\u9009\u62e9\u4fdd\u7559\u65e7\u503c\u800c\u5ffd\u7565\u65b0\u503c\uff0c\u5e76\u53ea\u5728\u952e ",(0,r.jsx)(n.strong,{children:"\u6ca1\u6709"})," \u5bf9\u5e94\u503c\u65f6\u589e\u52a0\u65b0\u503c\u3002\u6216\u8005\u53ef\u4ee5\u7ed3\u5408\u65b0\u65e7\u4e24\u503c\u3002\u8ba9\u6211\u4eec\u770b\u770b\u8fd9\u5206\u522b\u8be5\u5982\u4f55\u5904\u7406\uff01"]}),"\n",(0,r.jsx)(n.h4,{id:"\u8986\u76d6\u4e00\u4e2a\u503c",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E8%A6%86%E7%9B%96%E4%B8%80%E4%B8%AA%E5%80%BC",children:"\u8986\u76d6\u4e00\u4e2a\u503c"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u63d2\u5165\u4e86\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c\u63a5\u7740\u7528\u76f8\u540c\u7684\u952e\u63d2\u5165\u4e00\u4e2a\u4e0d\u540c\u7684\u503c\uff0c\u4e0e\u8fd9\u4e2a\u952e\u76f8\u5173\u8054\u7684\u65e7\u503c\u5c06\u88ab\u66ff\u6362\u3002\u5373\u4fbf\u793a\u4f8b 8-24 \u4e2d\u7684\u4ee3\u7801\u8c03\u7528\u4e86\u4e24\u6b21 ",(0,r.jsx)(n.code,{children:"insert"}),"\uff0c\u54c8\u5e0c map \u4e5f\u53ea\u4f1a\u5305\u542b\u4e00\u4e2a\u952e\u503c\u5bf9\uff0c\u56e0\u4e3a\u4e24\u6b21\u90fd\u662f\u5bf9\u84dd\u961f\u7684\u952e\u63d2\u5165\u7684\u503c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\n\nscores.insert(String::from("Blue"), 10);\nscores.insert(String::from("Blue"), 25);\n\nprintln!("{:?}", scores);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 8-24\uff1a\u66ff\u6362\u4ee5\u7279\u5b9a\u952e\u50a8\u5b58\u7684\u503c"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u6253\u5370\u51fa ",(0,r.jsx)(n.code,{children:'{"Blue": 25}'}),"\u3002\u539f\u59cb\u7684\u503c ",(0,r.jsx)(n.code,{children:"10"})," \u5219\u88ab\u8986\u76d6\u4e86\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u53ea\u5728\u952e\u6ca1\u6709\u5bf9\u5e94\u503c\u65f6\u63d2\u5165",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E5%8F%AA%E5%9C%A8%E9%94%AE%E6%B2%A1%E6%9C%89%E5%AF%B9%E5%BA%94%E5%80%BC%E6%97%B6%E6%8F%92%E5%85%A5",children:"\u53ea\u5728\u952e\u6ca1\u6709\u5bf9\u5e94\u503c\u65f6\u63d2\u5165"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u7ecf\u5e38\u4f1a\u68c0\u67e5\u67d0\u4e2a\u7279\u5b9a\u7684\u952e\u662f\u5426\u6709\u503c\uff0c\u5982\u679c\u6ca1\u6709\u5c31\u63d2\u5165\u4e00\u4e2a\u503c\u3002\u4e3a\u6b64\u54c8\u5e0c map \u6709\u4e00\u4e2a\u7279\u6709\u7684 API\uff0c\u53eb\u505a ",(0,r.jsx)(n.code,{children:"entry"}),"\uff0c\u5b83\u83b7\u53d6\u6211\u4eec\u60f3\u8981\u68c0\u67e5\u7684\u952e\u4f5c\u4e3a\u53c2\u6570\u3002",(0,r.jsx)(n.code,{children:"entry"})," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u679a\u4e3e\uff0c",(0,r.jsx)(n.code,{children:"Entry"}),"\uff0c\u5b83\u4ee3\u8868\u4e86\u53ef\u80fd\u5b58\u5728\u4e5f\u53ef\u80fd\u4e0d\u5b58\u5728\u7684\u503c\u3002\u6bd4\u5982\u8bf4\u6211\u4eec\u60f3\u8981\u68c0\u67e5\u9ec4\u961f\u7684\u952e\u662f\u5426\u5173\u8054\u4e86\u4e00\u4e2a\u503c\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5c31\u63d2\u5165\u503c 50\uff0c\u5bf9\u4e8e\u84dd\u961f\u4e5f\u662f\u5982\u6b64\u3002\u4f7f\u7528 entry API \u7684\u4ee3\u7801\u770b\u8d77\u6765\u50cf\u793a\u4f8b 8-25 \u8fd9\u6837\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet mut scores = HashMap::new();\nscores.insert(String::from("Blue"), 10);\n\nscores.entry(String::from("Yellow")).or_insert(50);\nscores.entry(String::from("Blue")).or_insert(50);\n\nprintln!("{:?}", scores);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u793a\u4f8b 8-25\uff1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"entry"})," \u65b9\u6cd5\u53ea\u5728\u952e\u6ca1\u6709\u5bf9\u5e94\u4e00\u4e2a\u503c\u65f6\u63d2\u5165"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Entry"})," \u7684 ",(0,r.jsx)(n.code,{children:"or_insert"})," \u65b9\u6cd5\u5728\u952e\u5bf9\u5e94\u7684\u503c\u5b58\u5728\u65f6\u5c31\u8fd4\u56de\u8fd9\u4e2a\u503c\u7684 ",(0,r.jsx)(n.code,{children:"Entry"}),"\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u5c06\u53c2\u6570\u4f5c\u4e3a\u65b0\u503c\u63d2\u5165\u5e76\u8fd4\u56de\u4fee\u6539\u8fc7\u7684 ",(0,r.jsx)(n.code,{children:"Entry"}),"\u3002\u8fd9\u6bd4\u7f16\u5199\u81ea\u5df1\u7684\u903b\u8f91\u8981\u7b80\u660e\u7684\u591a\uff0c\u53e6\u5916\u4e5f\u4e0e\u501f\u7528\u68c0\u67e5\u5668\u7ed3\u5408\u5f97\u66f4\u597d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd0\u884c\u793a\u4f8b 8-25 \u7684\u4ee3\u7801\u4f1a\u6253\u5370\u51fa ",(0,r.jsx)(n.code,{children:'{"Yellow": 50, "Blue": 10}'}),"\u3002\u7b2c\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"entry"})," \u8c03\u7528\u4f1a\u63d2\u5165\u9ec4\u961f\u7684\u952e\u548c\u503c ",(0,r.jsx)(n.code,{children:"50"}),"\uff0c\u56e0\u4e3a\u9ec4\u961f\u5e76\u6ca1\u6709\u4e00\u4e2a\u503c\u3002\u7b2c\u4e8c\u4e2a ",(0,r.jsx)(n.code,{children:"entry"})," \u8c03\u7528\u4e0d\u4f1a\u6539\u53d8\u54c8\u5e0c map \u56e0\u4e3a\u84dd\u961f\u5df2\u7ecf\u6709\u4e86\u503c ",(0,r.jsx)(n.code,{children:"10"}),"\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u4e00\u4e2a\u503c",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E6%A0%B9%E6%8D%AE%E6%97%A7%E5%80%BC%E6%9B%B4%E6%96%B0%E4%B8%80%E4%B8%AA%E5%80%BC",children:"\u6839\u636e\u65e7\u503c\u66f4\u65b0\u4e00\u4e2a\u503c"})}),"\n",(0,r.jsxs)(n.p,{children:["\u53e6\u4e00\u4e2a\u5e38\u89c1\u7684\u54c8\u5e0c map \u7684\u5e94\u7528\u573a\u666f\u662f\u627e\u5230\u4e00\u4e2a\u952e\u5bf9\u5e94\u7684\u503c\u5e76\u6839\u636e\u65e7\u7684\u503c\u66f4\u65b0\u5b83\u3002\u4f8b\u5982\uff0c\u793a\u4f8b 8-26 \u4e2d\u7684\u4ee3\u7801\u8ba1\u6570\u4e00\u4e9b\u6587\u672c\u4e2d\u6bcf\u4e00\u4e2a\u5355\u8bcd\u5206\u522b\u51fa\u73b0\u4e86\u591a\u5c11\u6b21\u3002\u6211\u4eec\u4f7f\u7528\u54c8\u5e0c map \u4ee5\u5355\u8bcd\u4f5c\u4e3a\u952e\u5e76\u9012\u589e\u5176\u503c\u6765\u8bb0\u5f55\u6211\u4eec\u9047\u5230\u8fc7\u51e0\u6b21\u8fd9\u4e2a\u5355\u8bcd\u3002\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u770b\u5230\u67d0\u4e2a\u5355\u8bcd\uff0c\u5c31\u63d2\u5165\u503c ",(0,r.jsx)(n.code,{children:"0"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'\nuse std::collections::HashMap;\n\nlet text = "hello world wonderful world";\n\nlet mut map = HashMap::new();\n\nfor word in text.split_whitespace() {\n    let count = map.entry(word).or_insert(0);\n    *count += 1;\n}\n\nprintln!("{:?}", map);\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b 8-26\uff1a\u901a\u8fc7\u54c8\u5e0c map \u50a8\u5b58\u5355\u8bcd\u548c\u8ba1\u6570\u6765\u7edf\u8ba1\u51fa\u73b0\u6b21\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u4f1a\u6253\u5370\u51fa ",(0,r.jsx)(n.code,{children:'{"world": 2, "hello": 1, "wonderful": 1}'}),"\uff0c",(0,r.jsx)(n.code,{children:"or_insert"})," \u65b9\u6cd5\u4e8b\u5b9e\u4e0a\u4f1a\u8fd4\u56de\u8fd9\u4e2a\u952e\u7684\u503c\u7684\u4e00\u4e2a\u53ef\u53d8\u5f15\u7528\uff08",(0,r.jsx)(n.code,{children:"&mut V"}),"\uff09\u3002\u8fd9\u91cc\u6211\u4eec\u5c06\u8fd9\u4e2a\u53ef\u53d8\u5f15\u7528\u50a8\u5b58\u5728 ",(0,r.jsx)(n.code,{children:"count"})," \u53d8\u91cf\u4e2d\uff0c\u6240\u4ee5\u4e3a\u4e86\u8d4b\u503c\u5fc5\u987b\u9996\u5148\u4f7f\u7528\u661f\u53f7\uff08",(0,r.jsx)(n.code,{children:"*"}),"\uff09\u89e3\u5f15\u7528 ",(0,r.jsx)(n.code,{children:"count"}),"\u3002\u8fd9\u4e2a\u53ef\u53d8\u5f15\u7528\u5728 ",(0,r.jsx)(n.code,{children:"for"})," \u5faa\u73af\u7684\u7ed3\u5c3e\u79bb\u5f00\u4f5c\u7528\u57df\uff0c\u8fd9\u6837\u6240\u6709\u8fd9\u4e9b\u6539\u53d8\u90fd\u662f\u5b89\u5168\u7684\u5e76\u7b26\u5408\u501f\u7528\u89c4\u5219\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u54c8\u5e0c\u51fd\u6570",children:(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#%E5%93%88%E5%B8%8C%E5%87%BD%E6%95%B0",children:"\u54c8\u5e0c\u51fd\u6570"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"HashMap"})," \u9ed8\u8ba4\u4f7f\u7528\u4e00\u79cd \u201c\u5bc6\u7801\u5b66\u5b89\u5168\u7684\u201d\uff08\u201ccryptographically strong\u201d \uff09",(0,r.jsx)(n.a,{href:"https://rust.bootcss.com/ch08-03-hash-maps.html#siphash",children:"1"})," \u54c8\u5e0c\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u62b5\u6297\u62d2\u7edd\u670d\u52a1\uff08Denial of Service, DoS\uff09\u653b\u51fb\u3002\u7136\u800c\u8fd9\u5e76\u4e0d\u662f\u53ef\u7528\u7684\u6700\u5feb\u7684\u7b97\u6cd5\uff0c\u4e0d\u8fc7\u4e3a\u4e86\u66f4\u9ad8\u7684\u5b89\u5168\u6027\u503c\u5f97\u4ed8\u51fa\u4e00\u4e9b\u6027\u80fd\u7684\u4ee3\u4ef7\u3002\u5982\u679c\u6027\u80fd\u76d1\u6d4b\u663e\u793a\u6b64\u54c8\u5e0c\u51fd\u6570\u975e\u5e38\u6162\uff0c\u4ee5\u81f4\u4e8e\u4f60\u65e0\u6cd5\u63a5\u53d7\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u4e0d\u540c\u7684 ",(0,r.jsx)(n.em,{children:"hasher"})," \u6765\u5207\u6362\u4e3a\u5176\u5b83\u51fd\u6570\u3002hasher \u662f\u4e00\u4e2a\u5b9e\u73b0\u4e86 ",(0,r.jsx)(n.code,{children:"BuildHasher"})," trait \u7684\u7c7b\u578b\u3002\u7b2c\u5341\u7ae0\u4f1a\u8ba8\u8bba trait \u548c\u5982\u4f55\u5b9e\u73b0\u5b83\u4eec\u3002\u4f60\u5e76\u4e0d\u9700\u8981\u4ece\u5934\u5f00\u59cb\u5b9e\u73b0\u4f60\u81ea\u5df1\u7684 hasher\uff1b",(0,r.jsx)(n.a,{href:"https://crates.io/",children:"crates.io"})," \u6709\u5176\u4ed6\u4eba\u5206\u4eab\u7684\u5b9e\u73b0\u4e86\u8bb8\u591a\u5e38\u7528\u54c8\u5e0c\u7b97\u6cd5\u7684 hasher \u7684\u5e93\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>i});var r=s(6540);const c={},l=r.createContext(c);function t(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);
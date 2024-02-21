"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[9181],{7754:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(4848),i=r(8453);const t={},o=void 0,c={id:"repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/for",title:"for",description:"\u53ef\u4ee5\u4f7f\u7528 while \u7ed3\u6784\u6765\u904d\u5386\u96c6\u5408\u4e2d\u7684\u5143\u7d20\uff0c\u6bd4\u5982\u6570\u7ec4\u3002\u4f8b\u5982\uff0c\u770b\u770b\u793a\u4f8b 3-4\u3002",source:"@site/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/for.md",sourceDirName:"repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41",slug:"/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/for",permalink:"/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/for",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/for.md",tags:[],version:"current",frontMatter:{},sidebar:"repository",previous:{title:"if",permalink:"/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/"},next:{title:"if",permalink:"/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/if"}},d={},l=[];function a(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"while"})," \u7ed3\u6784\u6765\u904d\u5386\u96c6\u5408\u4e2d\u7684\u5143\u7d20\uff0c\u6bd4\u5982\u6570\u7ec4\u3002\u4f8b\u5982\uff0c\u770b\u770b\u793a\u4f8b 3-4\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u540d: src/main.rs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    let a = [10, 20, 30, 40, 50];\n    let mut index = 0;\n\n    while index < 5 {\n        println!("the value is: {}", a[index]);\n\n        index = index + 1;\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 3-4\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"while"})," \u5faa\u73af\u904d\u5386\u96c6\u5408\u4e2d\u7684\u5143\u7d20"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u4ee3\u7801\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u8ba1\u6570\u3002\u5b83\u4ece\u7d22\u5f15 ",(0,s.jsx)(n.code,{children:"0"})," \u5f00\u59cb\uff0c\u5e76\u63a5\u7740\u5faa\u73af\u76f4\u5230\u9047\u5230\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u7d22\u5f15\uff08\u8fd9\u65f6\uff0c",(0,s.jsx)(n.code,{children:"index < 5"})," \u4e0d\u518d\u4e3a\u771f\uff09\u3002\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u51fa\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"$ cargo run\n   Compiling loops v0.1.0 (file:///projects/loops)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.32 secs\n     Running `target/debug/loops`\nthe value is: 10\nthe value is: 20\nthe value is: 30\nthe value is: 40\nthe value is: 50\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6570\u7ec4\u4e2d\u7684\u6240\u6709\u4e94\u4e2a\u5143\u7d20\u90fd\u5982\u671f\u88ab\u6253\u5370\u51fa\u6765\u3002\u5c3d\u7ba1 ",(0,s.jsx)(n.code,{children:"index"})," \u5728\u67d0\u4e00\u65f6\u523b\u4f1a\u5230\u8fbe\u503c ",(0,s.jsx)(n.code,{children:"5"}),"\uff0c\u4e0d\u8fc7\u5faa\u73af\u5728\u5176\u5c1d\u8bd5\u4ece\u6570\u7ec4\u83b7\u53d6\u7b2c\u516d\u4e2a\u503c\uff08\u4f1a\u8d8a\u754c\uff09\u4e4b\u524d\u5c31\u505c\u6b62\u4e86\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u8fd9\u4e2a\u8fc7\u7a0b\u5f88\u5bb9\u6613\u51fa\u9519\uff1b\u5982\u679c\u7d22\u5f15\u957f\u5ea6\u4e0d\u6b63\u786e\u4f1a\u5bfc\u81f4\u7a0b\u5e8f panic\u3002\u8fd9\u4e5f\u4f7f\u7a0b\u5e8f\u66f4\u6162\uff0c\u56e0\u4e3a\u7f16\u8bd1\u5668\u589e\u52a0\u4e86\u8fd0\u884c\u65f6\u4ee3\u7801\u6765\u5bf9\u6bcf\u6b21\u5faa\u73af\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u6761\u4ef6\u68c0\u67e5\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f5c\u4e3a\u66f4\u7b80\u6d01\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u6765\u5bf9\u4e00\u4e2a\u96c6\u5408\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u3002",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u770b\u8d77\u6765\u5982\u793a\u4f8b 3-5 \u6240\u793a\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u540d: src/main.rs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    let a = [10, 20, 30, 40, 50];\n\n    for element in a.iter() {\n        println!("the value is: {}", element);\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u793a\u4f8b 3-5\uff1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u904d\u5386\u96c6\u5408\u4e2d\u7684\u5143\u7d20"]}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u65f6\uff0c\u5c06\u770b\u5230\u4e0e\u793a\u4f8b 3-4 \u4e00\u6837\u7684\u8f93\u51fa\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0c\u6211\u4eec\u589e\u5f3a\u4e86\u4ee3\u7801\u5b89\u5168\u6027\uff0c\u5e76\u6d88\u9664\u4e86\u53ef\u80fd\u7531\u4e8e\u8d85\u51fa\u6570\u7ec4\u7684\u7ed3\u5c3e\u6216\u904d\u5386\u957f\u5ea6\u4e0d\u591f\u800c\u7f3a\u5c11\u4e00\u4e9b\u5143\u7d20\u800c\u5bfc\u81f4\u7684 bug\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u5728\u793a\u4f8b 3-4 \u7684\u4ee3\u7801\u4e2d\uff0c\u5982\u679c\u4ece\u6570\u7ec4 ",(0,s.jsx)(n.code,{children:"a"})," \u4e2d\u79fb\u9664\u4e00\u4e2a\u5143\u7d20\u4f46\u5fd8\u8bb0\u5c06\u6761\u4ef6\u66f4\u65b0\u4e3a ",(0,s.jsx)(n.code,{children:"while index < 4"}),"\uff0c\u4ee3\u7801\u5c06\u4f1a panic\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u7684\u8bdd\uff0c\u5c31\u4e0d\u9700\u8981\u60e6\u8bb0\u7740\u5728\u6539\u53d8\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u65f6\u4fee\u6539\u5176\u4ed6\u7684\u4ee3\u7801\u4e86\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u7684\u5b89\u5168\u6027\u548c\u7b80\u6d01\u6027\u4f7f\u5f97\u5b83\u6210\u4e3a Rust \u4e2d\u4f7f\u7528\u6700\u591a\u7684\u5faa\u73af\u7ed3\u6784\u3002\u5373\u4f7f\u662f\u5728\u60f3\u8981\u5faa\u73af\u6267\u884c\u4ee3\u7801\u7279\u5b9a\u6b21\u6570\u65f6\uff0c\u4f8b\u5982\u793a\u4f8b 3-3 \u4e2d\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"while"})," \u5faa\u73af\u7684\u5012\u8ba1\u65f6\u4f8b\u5b50\uff0c\u5927\u90e8\u5206 Rustacean \u4e5f\u4f1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u3002\u8fd9\u4e48\u505a\u7684\u65b9\u5f0f\u662f\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Range"}),"\uff0c\u5b83\u662f\u6807\u51c6\u5e93\u63d0\u4f9b\u7684\u7c7b\u578b\uff0c\u7528\u6765\u751f\u6210\u4ece\u4e00\u4e2a\u6570\u5b57\u5f00\u59cb\u5230\u53e6\u4e00\u4e2a\u6570\u5b57\u4e4b\u524d\u7ed3\u675f\u7684\u6240\u6709\u6570\u5b57\u7684\u5e8f\u5217\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"for"})," \u5faa\u73af\u6765\u5012\u8ba1\u65f6\u7684\u4f8b\u5b50\uff0c\u5b83\u8fd8\u4f7f\u7528\u4e86\u4e00\u4e2a\u6211\u4eec\u8fd8\u672a\u8bb2\u5230\u7684\u65b9\u6cd5\uff0c",(0,s.jsx)(n.code,{children:"rev"}),"\uff0c\u7528\u6765\u53cd\u8f6c range\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u540d: src/main.rs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    for number in (1..4).rev() {\n        println!("{}!", number);\n    }\n    println!("LIFTOFF!!!");\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u66f4\u5e05\u6c14\u4e0d\u662f\u5417\uff1f"})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
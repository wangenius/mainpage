"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3814],{2159:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=o(4848),t=o(8453);const c={},r=void 0,l={id:"lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop",title:"loop",description:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",source:"@site/docs/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop.md",sourceDirName:"lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41",slug:"/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop",permalink:"/en/docs/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/loop.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"if",permalink:"/en/docs/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/if"},next:{title:"match",permalink:"/en/docs/lang/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/\u63a7\u5236\u6d41/match"}},i={},d=[{value:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",id:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",level:3},{value:"\u4f7f\u7528 <code>[loop](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)</code> \u91cd\u590d\u6267\u884c\u4ee3\u7801",id:"\u4f7f\u7528-loophttpsrustbootcsscomch03-05-control-flowhtmle4bdbfe794a8-loop-e9878de5a48de689a7e8a18ce4bba3e7a081-\u91cd\u590d\u6267\u884c\u4ee3\u7801",level:4},{value:"\u4ece\u5faa\u73af\u8fd4\u56de",id:"\u4ece\u5faa\u73af\u8fd4\u56de",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",children:(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8%E5%BE%AA%E7%8E%AF%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C",children:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c"})}),"\n",(0,s.jsxs)(n.p,{children:["\u591a\u6b21\u6267\u884c\u540c\u4e00\u6bb5\u4ee3\u7801\u662f\u5f88\u5e38\u7528\u7684\uff0cRust \u4e3a\u6b64\u63d0\u4f9b\u4e86\u591a\u79cd ",(0,s.jsx)(n.strong,{children:"\u5faa\u73af"}),"\uff08",(0,s.jsx)(n.em,{children:"loops"}),"\uff09\u3002\u4e00\u4e2a\u5faa\u73af\u6267\u884c\u5faa\u73af\u4f53\u4e2d\u7684\u4ee3\u7801\u76f4\u5230\u7ed3\u5c3e\u5e76\u7d27\u63a5\u7740\u56de\u5230\u5f00\u5934\u7ee7\u7eed\u6267\u884c\u3002\u4e3a\u4e86\u5b9e\u9a8c\u4e00\u4e0b\u5faa\u73af\uff0c\u8ba9\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u53eb\u505a ",(0,s.jsx)(n.em,{children:"loops"})," \u7684\u9879\u76ee\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["Rust \u6709\u4e09\u79cd\u5faa\u73af\uff1a",(0,s.jsx)(n.code,{children:"loop"}),"\u3001",(0,s.jsx)(n.code,{children:"while"})," \u548c ",(0,s.jsx)(n.code,{children:"for"}),"\u3002\u6211\u4eec\u6bcf\u4e00\u4e2a\u90fd\u8bd5\u8bd5\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"\u4f7f\u7528-loophttpsrustbootcsscomch03-05-control-flowhtmle4bdbfe794a8-loop-e9878de5a48de689a7e8a18ce4bba3e7a081-\u91cd\u590d\u6267\u884c\u4ee3\u7801",children:[(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81",children:"\u4f7f\u7528 "}),(0,s.jsx)(n.code,{children:"[loop](https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81)"}),(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BD%BF%E7%94%A8-loop-%E9%87%8D%E5%A4%8D%E6%89%A7%E8%A1%8C%E4%BB%A3%E7%A0%81",children:" \u91cd\u590d\u6267\u884c\u4ee3\u7801"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"loop"})," \u5173\u952e\u5b57\u544a\u8bc9 Rust \u4e00\u904d\u53c8\u4e00\u904d\u5730\u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u76f4\u5230\u4f60\u660e\u786e\u8981\u6c42\u505c\u6b62\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f5c\u4e3a\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5c06 ",(0,s.jsx)(n.em,{children:"loops"})," \u76ee\u5f55\u4e2d\u7684 ",(0,s.jsx)(n.em,{children:"src/main.rs"})," \u6587\u4ef6\u4fee\u6539\u4e3a\u5982\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.p,{children:"\u6587\u4ef6\u540d: src/main.rs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    loop {\n        println!("again!");\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u65f6\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u8fde\u7eed\u7684\u53cd\u590d\u6253\u5370 ",(0,s.jsx)(n.code,{children:"again!"}),"\uff0c\u76f4\u5230\u6211\u4eec\u624b\u52a8\u505c\u6b62\u7a0b\u5e8f\u3002\u5927\u90e8\u5206\u7ec8\u7aef\u90fd\u652f\u6301\u4e00\u4e2a\u5feb\u6377\u952e\uff0cctrl-c\uff0c\u6765\u7ec8\u6b62\u4e00\u4e2a\u9677\u5165\u65e0\u9650\u5faa\u73af\u7684\u7a0b\u5e8f\u3002\u5c1d\u8bd5\u4e00\u4e0b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Plain",metastring:"Text",children:"$ cargo run\n   Compiling loops v0.1.0 (file:///projects/loops)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.29 secs\n     Running `target/debug/loops`\nagain!\nagain!\nagain!\nagain!\n^Cagain!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7b26\u53f7 ",(0,s.jsx)(n.code,{children:"^C"})," \u4ee3\u8868\u4f60\u5728\u8fd9\u6309\u4e0b\u4e86ctrl-c\u3002\u5728 ",(0,s.jsx)(n.code,{children:"^C"})," \u4e4b\u540e\u4f60\u53ef\u80fd\u770b\u5230\u4e5f\u53ef\u80fd\u770b\u4e0d\u5230 ",(0,s.jsx)(n.code,{children:"again!"})," \uff0c\u8fd9\u53d6\u51b3\u4e8e\u5728\u63a5\u6536\u5230\u7ec8\u6b62\u4fe1\u53f7\u65f6\u4ee3\u7801\u6267\u884c\u5230\u4e86\u5faa\u73af\u7684\u4f55\u5904\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5e78\u8fd0\u7684\u662f\uff0cRust \u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u66f4\u53ef\u9760\u7684\u9000\u51fa\u5faa\u73af\u7684\u65b9\u5f0f\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"break"})," \u5173\u952e\u5b57\u6765\u544a\u8bc9\u7a0b\u5e8f\u4f55\u65f6\u505c\u6b62\u5faa\u73af\u3002\u56de\u5fc6\u4e00\u4e0b\u5728\u7b2c\u4e8c\u7ae0\u731c\u731c\u770b\u6e38\u620f\u7684 ",(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch02-00-guessing-game-tutorial.html#quitting-after-a-correct-guess",children:"\u201c\u731c\u6d4b\u6b63\u786e\u540e\u9000\u51fa\u201d"})," \u90e8\u5206\u4f7f\u7528\u8fc7\u5b83\u6765\u5728\u7528\u6237\u731c\u5bf9\u6570\u5b57\u8d62\u5f97\u6e38\u620f\u540e\u9000\u51fa\u7a0b\u5e8f\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u4ece\u5faa\u73af\u8fd4\u56de",children:(0,s.jsx)(n.a,{href:"https://rust.bootcss.com/ch03-05-control-flow.html#%E4%BB%8E%E5%BE%AA%E7%8E%AF%E8%BF%94%E5%9B%9E",children:"\u4ece\u5faa\u73af\u8fd4\u56de"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"loop"})," \u7684\u4e00\u4e2a\u7528\u4f8b\u662f\u91cd\u8bd5\u53ef\u80fd\u4f1a\u5931\u8d25\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u68c0\u67e5\u7ebf\u7a0b\u662f\u5426\u5b8c\u6210\u4e86\u4efb\u52a1\u3002\u7136\u800c\u4f60\u53ef\u80fd\u4f1a\u9700\u8981\u5c06\u64cd\u4f5c\u7684\u7ed3\u679c\u4f20\u9012\u7ed9\u5176\u5b83\u7684\u4ee3\u7801\u3002\u5982\u679c\u5c06\u8fd4\u56de\u503c\u52a0\u5165\u4f60\u7528\u6765\u505c\u6b62\u5faa\u73af\u7684 ",(0,s.jsx)(n.code,{children:"break"})," \u8868\u8fbe\u5f0f\uff0c\u5b83\u4f1a\u88ab\u505c\u6b62\u7684\u5faa\u73af\u8fd4\u56de\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    let mut counter = 0;\n\n    let result = loop {\n        counter += 1;\n\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n\n    println!("The result is {}", result);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5faa\u73af\u4e4b\u524d\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"counter"})," \u7684\u53d8\u91cf\u5e76\u521d\u59cb\u5316\u4e3a ",(0,s.jsx)(n.code,{children:"0"}),"\u3002\u63a5\u7740\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"result"})," \u6765\u5b58\u653e\u5faa\u73af\u7684\u8fd4\u56de\u503c\u3002\u5728\u5faa\u73af\u7684\u6bcf\u4e00\u6b21\u8fed\u4ee3\u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,s.jsx)(n.code,{children:"counter"})," \u53d8\u91cf\u52a0 ",(0,s.jsx)(n.code,{children:"1"}),"\uff0c\u63a5\u7740\u68c0\u67e5\u8ba1\u6570\u662f\u5426\u7b49\u4e8e ",(0,s.jsx)(n.code,{children:"10"}),"\u3002\u5f53\u76f8\u7b49\u65f6\uff0c\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"break"})," \u5173\u952e\u5b57\u8fd4\u56de\u503c ",(0,s.jsx)(n.code,{children:"counter * 2"}),"\u3002\u5faa\u73af\u4e4b\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u5206\u53f7\u7ed3\u675f\u8d4b\u503c\u7ed9 ",(0,s.jsx)(n.code,{children:"result"})," \u7684\u8bed\u53e5\u3002\u6700\u540e\u6253\u5370\u51fa ",(0,s.jsx)(n.code,{children:"result"})," \u7684\u503c\uff0c\u4e5f\u5c31\u662f 20\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(6540);const t={},c=s.createContext(t);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
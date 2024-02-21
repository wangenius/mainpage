"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[8346],{731:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var r=s(4848),i=s(8453);const t={},c=void 0,l={id:"repository/rust/\u7f16\u8bd1",title:"\u7f16\u8bd1",description:"\u5173\u4e8e\u4ea4\u53c9\u7f16\u8bd1",source:"@site/docs/repository/rust/\u7f16\u8bd1.mdx",sourceDirName:"repository/rust",slug:"/repository/rust/\u7f16\u8bd1",permalink:"/en/docs/repository/rust/\u7f16\u8bd1",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/repository/rust/\u7f16\u8bd1.mdx",tags:[],version:"current",frontMatter:{},sidebar:"repository",previous:{title:"\u751f\u547d\u5468\u671f",permalink:"/en/docs/repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f"},next:{title:"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f",permalink:"/en/docs/repository/rust/\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f/"}},o={},a=[];function d(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5173\u4e8e\u4ea4\u53c9\u7f16\u8bd1\n\u4e00\u822c\u7f16\u7a0b\u9636\u6bb5\u7528\u7684\u662fWindows\u6216\u8005Mac\u7cfb\u7edf\uff0c\u90e8\u7f72\u5e73\u53f0\u662fLinux\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5c31\u9700\u8981\u4f7f\u7528Cross-Compiler\u4ea4\u53c9\u7f16\u8bd1\uff0c\u610f\u601d\u662f\u53ef\u4ee5\u5728\u5f53\u524d\u5e73\u53f0Host\u4e0b\u7f16\u8bd1\u51fa\u76ee\u6807\u5e73\u53f0target\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c"}),"\n",(0,r.jsx)(e.p,{children:"\u5c24\u5176\u662f\u505aARM\u5e73\u53f0\u5f00\u53d1\u7684\u540c\u5b66\u5bf9\u8fd9\u4e2a\u66f4\u4e3a\u719f\u6089\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["Rust\u4ea4\u53c9\u7f16\u8bd1\u5728Github\u4e0a\u6709\u4e00\u4e2a\u6587\u6863Rust\u6838\u5fc3\u5458\u5de5Jorge Aparicio\u63d0\u4f9b\u7684\u4e00\u4efd\u6587\u6863",(0,r.jsx)(e.a,{href:"https://github.com/japaric/rust-cross%EF%BC%8C%E6%8E%A8%E8%8D%90%E5%A4%A7%E5%AE%B6%E4%BB%94%E7%BB%86%E7%9A%84%E8%AF%BB%E4%B8%80%E8%AF%BB%E3%80%82",children:"https://github.com/japaric/rust-cross\uff0c\u63a8\u8350\u5927\u5bb6\u4ed4\u7ec6\u7684\u8bfb\u4e00\u8bfb\u3002"})]}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u8981\u6c42\u6bd4\u8f83\u7b80\u5355\uff0c\u90fd\u662fX86_64\u67b6\u6784\uff0c\u4eceMac\u4e0a\u7f16\u8bd1\u51faunknow-linux/pc-windows-gnu\u5c31\u597d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"musl\u5de5\u5177\u94fe\uff08\u7f16\u8bd1Linux\u73af\u5883\u7a0b\u5e8f\u6240\u9700\uff09\nmusl\u5b9e\u73b0\u4e86Linux libc\uff0c\u8d28\u91cf\u53ef\u9760\uff0c\u9002\u914d\u6240\u6709Linux\u73af\u5883\uff0c\u4f7f\u7528\u9759\u6001\u8fde\u63a5\u66ff\u6362\u52a8\u6001\u94fe\u63a5\uff0c\u8fd9\u6837\u5c31\u80fd\u6253\u51fa\u4e00\u4e2a\u5b8c\u6574\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ef\u4ee5\u4e22\u5230\u4efb\u4f55Linux\u73af\u5883\u91cc\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u5173\u4e8e\u9759\u6001\u94fe\u63a5\u4e0e\u52a8\u6001\u94fe\u63a5\u5404\u6709\u4f18\u7f3a\u70b9\uff0c\u8fd9\u91cc\u4e0d\u7ec6\u8bf4\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",metastring:'title="\u5b89\u88c5\u4e00\u4e0b"',children:"rustup target add x86_64-unknown-linux-musl\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",metastring:'title="\u5b89\u88c5musl-cross"',children:"brew install filosottile/musl-cross/musl-cross\n"})}),"\n",(0,r.jsx)(e.p,{children:"windows-gnu\u76f8\u5173\uff08\u7f16\u8bd1Windows\u73af\u5883\u7a0b\u5e8f\u6240\u9700\uff09\n\u5b89\u88c5windows-gnu\uff0c\n\u7528msvc\u5bb9\u6613\u7f16\u8bd1\u5931\u8d25\uff0cmsvc\u5176\u5b9e\u5c31\u662f\u6307\u7f16\u8bd1\u51fa\u6765\u7684\u7a0b\u5e8f\u76f4\u63a5\u4f9d\u8d56Windows\u5e73\u53f0\u7684\u57fa\u7840\u5e93\uff0c\u800cgnu\u7684\u5219\u662f\u5f00\u6e90\u7684\u57fa\u7840\u5e93\u76f4\u63a5\u5185\u5d4c\u5230\u54b1\u4eec\u7f16\u8bd1\u7684\u7a0b\u5e8f\u91cc\uff0c\u6240\u4ee5msvc\u7684\u7a0b\u5e8f\u8981\u66f4\u5c0f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"rustup target add x86_64-pc-windows-gnu\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",metastring:"title='\u5b89\u88c5mingw-w64'",children:"brew install mingw-w64\n"})}),"\n",(0,r.jsx)(e.p,{children:"Rust\u7a0b\u5e8f\u793a\u4f8b:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",metastring:'title="main.rs"',children:'fn main() {\n  println!("Hello, world!\\r\\nwww.qttc.net\\r\\n");\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u914d\u7f6e\u548c\u6253\u5305\u7f16\u8bd1\n\u914d\u7f6econfig\n\uff08\u6ca1\u6709\u65b0\u5efa\u5373\u53ef\uff0c\u53e6\u5916\u53ef\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa.cargo/config\u6587\u4ef6\uff0c\u53ea\u5bf9\u5f53\u524d\u9879\u76ee\u751f\u6548\uff09"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"vi ~/.cargo/config\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5185\u5bb9\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-toml",children:'[target.x86_64-unknown-linux-musl]\nlinker = "x86_64-linux-musl-gcc"\n[target.x86_64-pc-windows-gnu]\nlinker = "x86_64-w64-mingw32-gcc"\nar = "x86_64-w64-mingw32-gcc-ar"\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1(Linux\u73af\u5883\u7a0b\u5e8f)"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-powershell",children:"cargo build --release --target x86_64-unknown-linux-musl\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u628a\u7f16\u8bd1\u547d\u4ee4\u5199\u5230\u811a\u672c\u4e2d\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1\u547d\u4ee4\u6574\u7406\u4e3ash\u53ef\u6267\u884c\u6587\u4ef6\u811a\u672c\uff08package_linux.sh\uff0c\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u7ed9\u4e0e\u6267\u884c\u6743\u9650chmod +x package_linux.sh\uff09\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if [[ $(echo $0 | awk '/^\\//') == $0 ]]; then\n    ABSPATH=$(dirname $0)\nelse\n    ABSPATH=$PWD/$(dirname $0)\nfi\ncd ${ABSPATH}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"cargo build --release --target x86_64-unknown-linux-musl\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1\u51fa\u6765\u540e\u5728target\u91cc\u4f1a\u6709\u4e2ax86_64-unknown-linux-musl\u76ee\u5f55\uff0c\u91cc\u9762\u53c8\u6839\u636e--release\u6709debug\u548crelease\u76ee\u5f55\uff0c\u5176\u4e2d\u540d\u4e3a\u9879\u76ee\u540d\u7684\u6587\u4ef6\u5c31\u662f\u6253\u5305\u51fa\u6765\u7684Linux\u73af\u5883\u7a0b\u5e8f\u8f6f\u4ef6\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-shell",metastring:'title="\u7f16\u8bd1Windows\u73af\u5883\u7a0b\u5e8f"',children:"cargo build --release --target x86_64-pc-windows-gnu\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u53ef\u628a\u7f16\u8bd1\u547d\u4ee4\u5199\u5230\u811a\u672c\u4e2d\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1\u547d\u4ee4\u6574\u7406\u4e3ash\u53ef\u6267\u884c\u6587\u4ef6\u811a\u672c\uff08package_win.sh\uff0c\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u7ed9\u4e0e\u6267\u884c\u6743\u9650chmod +x package_win.sh\uff09\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"if [[ $(echo $0 | awk '/^\\//') == $0 ]]; then\n    ABSPATH=$(dirname $0)\nelse\n    ABSPATH=$PWD/$(dirname $0)\nfi\ncd ${ABSPATH}\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"cargo build --release --target x86_64-pc-windows-gnu\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u7f16\u8bd1\u51fa\u6765\u540e\u5728target\u91cc\u4f1a\u6709\u4e2ax86_64-pc-windows-gnu\u76ee\u5f55\uff0c\u91cc\u9762\u53c8\u6839\u636e--release\u6709debug\u548crelease\u76ee\u5f55\uff0c\u5176\u4e2dxxx.exe\u4e3a\u6253\u5305\u51fa\u6765\u7684Windows\u73af\u5883\u7a0b\u5e8f\u8f6f\u4ef6\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function c(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);
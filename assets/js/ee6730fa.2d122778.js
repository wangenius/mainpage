"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[5642],{7581:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=t(4848),s=t(8453);const i={title:"crate",sidebar_position:1,slug:"crate"},a="crate",c={id:"lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate",title:"crate",description:"crate \u662f Rust \u4e2d\u7684\u4e00\u4e2a\u7f16\u8bd1\u5355\u5143\u3002\u6bcf\u5f53\u8c03\u7528 rustc somefile.rs \u65f6\uff0c somefile.rs \u90fd\u4f1a\u88ab\u89c6\u4e3a crate \u6587\u4ef6\u3002\u5982\u679c some_file.rs \u4e2d\u6709 mod \u58f0\u660e\uff0c\u5219\u5728\u8fd0\u884c\u4e4b\u524d\uff0c\u6a21\u5757\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u63d2\u5165\u5230 crate \u6587\u4ef6\u4e2d\u627e\u5230 mod \u58f0\u660e\u7684\u4f4d\u7f6e\u7f16\u8bd1\u5668\u5bf9\u5176\u8fdb\u884c\u5904\u7406\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6a21\u5757\u4e0d\u4f1a\u5355\u72ec\u7f16\u8bd1\uff0c\u53ea\u6709\u5305\u4f1a\u88ab\u7f16\u8bd1\u3002",source:"@site/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate.mdx",sourceDirName:"lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1",slug:"/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate",permalink:"/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"crate",sidebar_position:1,slug:"crate"},sidebar:"rust",previous:{title:"\u6982\u8ff0",permalink:"/docs/lang/rust/\u6982\u8ff0"},next:{title:"\u5b8f",permalink:"/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f"}},l={},o=[{value:"create",id:"create",level:2},{value:"using",id:"using",level:2}];function u(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"crate",children:"crate"}),"\n",(0,n.jsx)(r.p,{children:"crate \u662f Rust \u4e2d\u7684\u4e00\u4e2a\u7f16\u8bd1\u5355\u5143\u3002\u6bcf\u5f53\u8c03\u7528 rustc some_file.rs \u65f6\uff0c some_file.rs \u90fd\u4f1a\u88ab\u89c6\u4e3a crate \u6587\u4ef6\u3002\u5982\u679c some_file.rs \u4e2d\u6709 mod \u58f0\u660e\uff0c\u5219\u5728\u8fd0\u884c\u4e4b\u524d\uff0c\u6a21\u5757\u6587\u4ef6\u7684\u5185\u5bb9\u5c06\u63d2\u5165\u5230 crate \u6587\u4ef6\u4e2d\u627e\u5230 mod \u58f0\u660e\u7684\u4f4d\u7f6e\u7f16\u8bd1\u5668\u5bf9\u5176\u8fdb\u884c\u5904\u7406\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6a21\u5757\u4e0d\u4f1a\u5355\u72ec\u7f16\u8bd1\uff0c\u53ea\u6709\u5305\u4f1a\u88ab\u7f16\u8bd1\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u677f\u6761\u7bb1\u53ef\u4ee5\u7f16\u8bd1\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\u6216\u5e93\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c rustc \u5c06\u4ece\u7bb1\u5b50\u4e2d\u751f\u6210\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u53ef\u4ee5\u901a\u8fc7\u5c06 --crate-type \u6807\u5fd7\u4f20\u9012\u7ed9 lib \u6765\u8986\u76d6\u6b64\u884c\u4e3a\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"create",children:"create"}),"\n",(0,n.jsx)(r.p,{children:"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5e93\uff0c\u7136\u540e\u770b\u770b\u5982\u4f55\u5c06\u5176\u94fe\u63a5\u5230\u53e6\u4e00\u4e2a\u677f\u6761\u7bb1\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5728 rary.rs \u4e2d\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:'pub fn public_function() {\n   println!("called rary\'s `public_function()`");\n}\n\nfn private_function() {\n   println!("called rary\'s `private_function()`");\n}\n\npub fn indirect_access() {\n   print!("called rary\'s `indirect_access()`, that\\n> ");\n\n   private_function();\n}\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",metastring:'title="output"',children:"$ rustc --crate-type=lib rary.rs\n$ ls lib*\nlibrary.rlib\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u5e93\u4ee5\u201clib\u201d\u4e3a\u524d\u7f00\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4eec\u4ee5\u677f\u6761\u7bb1\u6587\u4ef6\u547d\u540d\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u5c06 --crate-name \u9009\u9879\u4f20\u9012\u7ed9 rustc \u6216\u4f7f\u7528 < b2> \u5c5e\u6027\u3002"}),"\n",(0,n.jsx)(r.h2,{id:"using",children:"using"}),"\n",(0,n.jsx)(r.p,{children:"\u8981\u5c06\u7bb1\u5b50\u94fe\u63a5\u5230\u8fd9\u4e2a\u65b0\u5e93\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 rustc \u7684 --extern \u6807\u5fd7\u3002\u7136\u540e\uff0c\u5176\u6240\u6709\u9879\u76ee\u90fd\u5c06\u5bfc\u5165\u5230\u4e0e\u5e93\u540c\u540d\u7684\u6a21\u5757\u4e0b\u3002\u8be5\u6a21\u5757\u7684\u884c\u4e3a\u65b9\u5f0f\u901a\u5e38\u4e0e\u4efb\u4f55\u5176\u4ed6\u6a21\u5757\u76f8\u540c\u3002"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:"// extern crate rary; // May be required for Rust 2015 edition or earlier\n\nfn main() {\n    rary::public_function();\n\n    // Error! `private_function` is private\n    //rary::private_function();\n\n    rary::indirect_access();\n}\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",metastring:'title="output"',children:"# Where library.rlib is the path to the compiled library, assumed that it's\n# in the same directory here:\n$ rustc executable.rs --extern rary=library.rlib && ./executable \ncalled rary's `public_function()`\ncalled rary's `indirect_access()`, that\n> called rary's `private_function()`\n"})})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(6540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);
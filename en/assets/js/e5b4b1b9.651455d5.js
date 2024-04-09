"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3751],{2039:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const s={title:"\u8fed\u4ee3\u5668",sidebar_position:1,slug:"\u8fed\u4ee3\u5668"},a="\u8fed\u4ee3\u5668",o={id:"lang/rust/\u7279\u5f81/\u8fed\u4ee3\u5668",title:"\u8fed\u4ee3\u5668",description:"Iterator \u7279\u5f81\u7528\u4e8e\u5b9e\u73b0\u96c6\u5408\uff08\u4f8b\u5982\u6570\u7ec4\uff09\u4e0a\u7684\u8fed\u4ee3\u5668\u3002",source:"@site/docs/lang/rust/\u7279\u5f81/\u8fed\u4ee3\u5668.mdx",sourceDirName:"lang/rust/\u7279\u5f81",slug:"/lang/rust/\u7279\u5f81/\u8fed\u4ee3\u5668",permalink:"/en/docs/lang/rust/\u7279\u5f81/\u8fed\u4ee3\u5668",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u7279\u5f81/\u8fed\u4ee3\u5668.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u8fed\u4ee3\u5668",sidebar_position:1,slug:"\u8fed\u4ee3\u5668"},sidebar:"rust",previous:{title:"traits",permalink:"/en/docs/lang/rust/\u7279\u5f81/traits"},next:{title:"impl trait",permalink:"/en/docs/lang/rust/\u7279\u5f81/impl trait"}},c={},l=[{value:"\u6d88\u8d39\u8005\u9002\u914d\u5668",id:"\u6d88\u8d39\u8005\u9002\u914d\u5668",level:6},{value:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",id:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",level:6}];function u(n){const e={code:"code",h1:"h1",h6:"h6",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u8fed\u4ee3\u5668",children:"\u8fed\u4ee3\u5668"}),"\n",(0,r.jsx)(e.p,{children:"Iterator \u7279\u5f81\u7528\u4e8e\u5b9e\u73b0\u96c6\u5408\uff08\u4f8b\u5982\u6570\u7ec4\uff09\u4e0a\u7684\u8fed\u4ee3\u5668\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8be5\u7279\u5f81\u4ec5\u9700\u8981\u4e3a next \u5143\u7d20\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5728 impl \u5757\u4e2d\u624b\u52a8\u5b9a\u4e49\u6216\u81ea\u52a8\u5b9a\u4e49\uff08\u5982\u5728\u6570\u7ec4\u548c\u8303\u56f4\u4e2d\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4e86\u65b9\u4fbf\u5e94\u5bf9\u5e38\u89c1\u60c5\u51b5\uff0c for \u6784\u9020\u4f7f\u7528 .into_iter() \u65b9\u6cd5\u5c06\u67d0\u4e9b\u96c6\u5408\u8f6c\u6362\u4e3a\u8fed\u4ee3\u5668\u3002\n\u5b9e\u73b0\u4e86 Iterator trait \u7684\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u5728 Rust \u4e2d\u88ab\u89c6\u4e3a\u8fed\u4ee3\u5668"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'struct Fibonacci {\n    curr: u32,\n    next: u32,\n}\n\n// Implement `Iterator` for `Fibonacci`.\n// The `Iterator` trait only requires a method to be defined for the `next` element.\nimpl Iterator for Fibonacci {\n    // We can refer to this type using Self::Item\n    type Item = u32;\n\n    // Here, we define the sequence using `.curr` and `.next`.\n    // The return type is `Option<T>`:\n    //     * When the `Iterator` is finished, `None` is returned.\n    //     * Otherwise, the next value is wrapped in `Some` and returned.\n    // We use Self::Item in the return type, so we can change\n    // the type without having to update the function signatures.\n    fn next(&mut self) -> Option<Self::Item> {\n        let current = self.curr;\n\n        self.curr = self.next;\n        self.next = current + self.next;\n\n        // Since there\'s no endpoint to a Fibonacci sequence, the `Iterator` \n        // will never return `None`, and `Some` is always returned.\n        Some(current)\n    }\n}\n\n// Returns a Fibonacci sequence generator\nfn fibonacci() -> Fibonacci {\n    Fibonacci { curr: 0, next: 1 }\n}\n\nfn main() {\n    // `0..3` is an `Iterator` that generates: 0, 1, and 2.\n    let mut sequence = 0..3;\n\n    println!("Four consecutive `next` calls on 0..3");\n    println!("> {:?}", sequence.next());\n    println!("> {:?}", sequence.next());\n    println!("> {:?}", sequence.next());\n    println!("> {:?}", sequence.next());\n\n    // `for` works through an `Iterator` until it returns `None`.\n    // Each `Some` value is unwrapped and bound to a variable (here, `i`).\n    println!("Iterate through 0..3 using `for`");\n    for i in 0..3 {\n        println!("> {}", i);\n    }\n\n    // The `take(n)` method reduces an `Iterator` to its first `n` terms.\n    println!("The first four terms of the Fibonacci sequence are: ");\n    for i in fibonacci().take(4) {\n        println!("> {}", i);\n    }\n\n    // The `skip(n)` method shortens an `Iterator` by dropping its first `n` terms.\n    println!("The next four terms of the Fibonacci sequence are: ");\n    for i in fibonacci().skip(4).take(4) {\n        println!("> {}", i);\n    }\n\n    let array = [1u32, 3, 3, 7];\n\n    // The `iter` method produces an `Iterator` over an array/slice.\n    println!("Iterate the following array {:?}", &array);\n    for i in array.iter() {\n        println!("> {}", i);\n    }\n}\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:"pub trait Iterator {\n    type Item;\n    fn next(&mut self) -> Option<Self::Item>;\n    // \u65b9\u6cd5with default implementations elided\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5e38\u89c1\u7684\u96c6\u5408\u7c7b\u578b\uff0c\u4f8b\u5982 Vector\u3001Array\u3001HashSet\u3001HashMap, \u5b57\u7b26\u4e32 String \u7c7b\u578b\u867d\u7136\u4e0d\u662f\u8fed\u4ee3\u5668\uff0c\u4f46\u662f\u53ef\u4ee5\u901a\u8fc7.iter() \u548c .into_iter() \u65b9\u6cd5\uff0c\u751f\u6210\u8fed\u4ee3\u5668\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"into_iter \u4f1a\u593a\u8d70\u6240\u6709\u6743"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"iter \u662f\u501f\u7528"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"iter_mut \u662f\u53ef\u53d8\u501f\u7528"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_iter = arr.iter(); // \u501f\u7528\n    for v in arr_iter{\n        println!("{}", v) // v\u5c31\u662f\u501f\u7528\u6bcf\u4e00\u4e2a\u5143\u7d20\n    }\n}\nfn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_into_inter = arr.into_iter(); // \u5143\u7d20\u6240\u6709\u6743\u8f6c\u79fb\n    for v in arr_into_inter{\n        println!("{}", v) //\n    }\n}\nfn main() {\n    let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\n    let arr_mut_iter = arr.iter_mut(); // \u53ef\u53d8\u501f\u7528\n         for v in arr_mut_iter{\n        *v += 1; // \u4fee\u6539\u501f\u7528\u5143\u7d20\u7684\u503c\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h6,{id:"\u6d88\u8d39\u8005\u9002\u914d\u5668",children:"\u6d88\u8d39\u8005\u9002\u914d\u5668"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ea\u8981\u8fed\u4ee3\u5668\u4e0a\u7684\u67d0\u4e2a\u65b9\u6cd5 ",(0,r.jsx)(e.code,{children:"A"})," \u5728\u5176\u5185\u90e8\u8c03\u7528\u4e86 ",(0,r.jsx)(e.code,{children:"next"})," \u65b9\u6cd5\uff0c\u90a3\u4e48 ",(0,r.jsx)(e.code,{children:"A"})," \u5c31\u88ab\u79f0\u4e3a",(0,r.jsx)(e.strong,{children:"\u6d88\u8d39\u6027\u9002\u914d\u5668"}),"\uff1a\u56e0\u4e3a ",(0,r.jsx)(e.code,{children:"next"})," \u65b9\u6cd5\u4f1a\u6d88\u8017\u6389\u8fed\u4ee3\u5668\u4e0a\u7684\u5143\u7d20\uff0c\u6240\u4ee5\u65b9\u6cd5 ",(0,r.jsx)(e.code,{children:"A"})," \u7684\u8c03\u7528\u4e5f\u4f1a\u6d88\u8017\u6389\u8fed\u4ee3\u5668\u4e0a\u7684\u5143\u7d20\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:"let arr = vec![1,3,6,8,9,10,11,12,13,14,15];\nlet arr_ter = arr.iter();\nlet s:i32 = arr_ter.sum(); // \u4f1a\u628a\u8fed\u4ee3\u5668\u4e2d\u7684\u6240\u6709\u5143\u7d20\u76f8\u52a0\uff0c\u6267\u884csum\u540e\uff0c\u4f1a\u8f6c\u79fb\u6240\u6709\u7684\u5143\u7d20\u6240\u6709\u6743\n"})}),"\n",(0,r.jsx)(e.h6,{id:"\u8fed\u4ee3\u5668\u9002\u914d\u5668",children:"\u8fed\u4ee3\u5668\u9002\u914d\u5668"}),"\n",(0,r.jsx)(e.p,{children:"\u8fed\u4ee3\u5668\u6709\u4e9b\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u8fed\u4ee3\u5668\uff0c\u65b9\u4fbf\u94fe\u5f0f\u8c03\u7528\uff0c\u7ed3\u5c3e\u4e00\u5b9a\u8981\u6709\u6d88\u8d39\u8005\u9002\u914d\u5668\u8fd4\u56de\u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-Rust",children:"let v1: Vec<i32> = vec![1, 2, 3];\nlet v2: Vec<_> = v1.iter().map(|x| x + 1).collect();\n"})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var r=t(6540);const i={},s=r.createContext(i);function a(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);
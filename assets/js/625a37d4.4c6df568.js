"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[9171],{4976:(t,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var e=s(4848),i=s(8453);const c={},r=void 0,l={id:"repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f",title:"\u751f\u547d\u5468\u671f",description:"\u751f\u547d\u5468\u671f\u53ef\u4ee5\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5f15\u7528\u6240\u80fd\u6301\u7eed\u7684\u8303\u56f4\uff0c\u662f\u7f16\u8bd1\u5668\u7528\u4e8e\u9884\u9632\u60ac\u5782\u5f15\u7528\uff08\u5728\u5bf9\u5e94\u7684\u503c\u5df2\u7ecf\u88ab\u6790\u6784\u540e\u4ecd\u88ab\u4f7f\u7528\uff09\u7684\u65b9\u5f0f\u3002\u8fd9\u5728 Rust \u4e2d\u7279\u522b\u91cd\u8981\uff0c\u56e0\u4e3a Rust \u653e\u5f03\u4e86\u5783\u573e\u6536\u96c6\u5668\u5e76\u9009\u62e9\u624b\u52a8\u7ba1\u7406\u5185\u5b58\u3002",source:"@site/docs/repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f.md",sourceDirName:"repository/rust/\u7279\u5f81",slug:"/repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f",permalink:"/docs/repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/repository/rust/\u7279\u5f81/\u751f\u547d\u5468\u671f.md",tags:[],version:"current",frontMatter:{},sidebar:"repository",previous:{title:"\u6ce8\u89e3",permalink:"/docs/repository/rust/\u7279\u5f81/\u6ce8\u89e3"},next:{title:"\u7f16\u8bd1",permalink:"/docs/repository/rust/\u7f16\u8bd1"}},a={},d=[{value:"&amp;\u2019static",id:"static",level:5},{value:"<code>[&amp;&#39;static](https://course.rs/advance/lifetime/static.html#static)</code>",id:"statichttpscoursersadvancelifetimestatichtmlstatic",level:2},{value:"<code>[T: &#39;static](https://course.rs/advance/lifetime/static.html#t-static)</code>",id:"t-statichttpscoursersadvancelifetimestatichtmlt-static",level:2},{value:"static \u5230\u5e95\u9488\u5bf9\u8c01\uff1f",id:"static-\u5230\u5e95\u9488\u5bf9\u8c01",level:2},{value:"\u8bfe\u540e\u7ec3\u4e60",id:"\u8bfe\u540e\u7ec3\u4e60",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...t.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:"\u751f\u547d\u5468\u671f\u53ef\u4ee5\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u5f15\u7528\u6240\u80fd\u6301\u7eed\u7684\u8303\u56f4\uff0c\u662f\u7f16\u8bd1\u5668\u7528\u4e8e\u9884\u9632\u60ac\u5782\u5f15\u7528\uff08\u5728\u5bf9\u5e94\u7684\u503c\u5df2\u7ecf\u88ab\u6790\u6784\u540e\u4ecd\u88ab\u4f7f\u7528\uff09\u7684\u65b9\u5f0f\u3002\u8fd9\u5728 Rust \u4e2d\u7279\u522b\u91cd\u8981\uff0c\u56e0\u4e3a Rust \u653e\u5f03\u4e86\u5783\u573e\u6536\u96c6\u5668\u5e76\u9009\u62e9\u624b\u52a8\u7ba1\u7406\u5185\u5b58\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0crust \u7f16\u8bd1\u5668\u53ef\u4ee5\u81ea\u52a8\u8bc6\u522b\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\uff0c\u5224\u65ad\u60ac\u5782\u5f15\u7528\uff0c\u4f46\u662f\u8fd8\u6709\u4e00\u4e9b\u60c5\u51b5\u9700\u8981\u6211\u4eec\u4f7f\u7528\u751f\u547d\u5468\u671f\u6807\u6ce8\u6765\u544a\u8bc9\u7f16\u8bd1\u5668\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u751f\u547d\u5468\u671f\u6807\u6ce8\u8bed\u6cd5\n\u751f\u547d\u5468\u671f\u7684\u57fa\u672c\u6807\u8bb0\u662f 'a\uff0c\u5176\u4e2d a \u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 Rust \u6807\u8bc6\u7b26\u3002\u6b64\u6807\u8bb0\u7528\u4e8e\u6ce8\u89e3\u6709\u751f\u547d\u5468\u671f\u7684\u5143\u7d20\u3002\u6bd4\u5982\u5f15\u7528\u7c7b\u578b\u7684\u751f\u547d\u5468\u671f\uff0c\u5982 &'a T\u3002\u8fd9\u8868\u793a\u8fd9\u4e2a\u5f15\u7528\u7684\u751f\u547d\u5468\u671f\u81f3\u5c11\u548c 'a \u4e00\u6837\u957f\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:"fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}\n"})}),"\n",(0,e.jsx)(n.h5,{id:"static",children:"&\u2019static"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"&'static"})," \u5bf9\u4e8e\u751f\u547d\u5468\u671f\u6709\u7740\u975e\u5e38\u5f3a\u7684\u8981\u6c42\uff1a\u4e00\u4e2a\u5f15\u7528\u5fc5\u987b\u8981\u6d3b\u5f97\u8ddf\u5269\u4e0b\u7684\u7a0b\u5e8f\u4e00\u6837\u4e45\uff0c\u624d\u80fd\u88ab\u6807\u6ce8\u4e3a ",(0,e.jsx)(n.code,{children:"&'static"}),"\u3002"]}),"\n",(0,e.jsx)(n.h1,{id:"static-\u548c-t-static",children:(0,e.jsx)(n.a,{href:"https://course.rs/advance/lifetime/static.html#static-%E5%92%8C-t-static",children:"&'static \u548c T: 'static"})}),"\n",(0,e.jsxs)(n.p,{children:["Rust \u7684\u96be\u70b9\u4e4b\u4e00\u5c31\u5728\u4e8e\u5b83\u6709\u4e0d\u5c11\u5bb9\u6613\u6df7\u6dc6\u7684\u6982\u5ff5\uff0c\u4f8b\u5982 ",(0,e.jsx)(n.code,{children:"&str"})," \u3001",(0,e.jsx)(n.code,{children:"str"})," \u4e0e ",(0,e.jsx)(n.code,{children:"String"}),"\uff0c \u518d\u6bd4\u5982\u672c\u6587\u6807\u9898\u90a3\u4e24\u4f4d\u3002\u4e0d\u8fc7\u4e0e\u5b57\u7b26\u4e32\u4e5f\u6709\u4e0d\u540c\uff0c\u8fd9\u4e24\u4f4d\u5bf9\u4e8e\u666e\u901a\u7528\u6237\u6765\u8bf4\u5f80\u5f80\u662f\u65e0\u9700\u8fdb\u884c\u533a\u5206\u7684\uff0c\u4f46\u662f\u5f53\u5927\u5bb6\u60f3\u8981\u6df1\u5165\u5b66\u4e60\u6216\u4f7f\u7528 Rust \u65f6\uff0c\u5b83\u4eec\u5c31\u4f1a\u6210\u4e3a\u6210\u529f\u8def\u4e0a\u7684\u62e6\u8def\u864e\u4e86\u3002"]}),"\n",(0,e.jsx)(n.p,{children:"\u4e0e\u751f\u547d\u5468\u671f\u7684\u5176\u5b83\u7ae0\u8282\u4e0d\u540c\uff0c\u672c\u6587\u77ed\u5c0f\u7cbe\u608d\uff0c\u9605\u8bfb\u8fc7\u7a0b\u53ef\u8c13\u76f8\u5f53\u8f7b\u677e\u6109\u5feb\uff0c\u8bdd\u4e0d\u591a\u8bf4\uff0clet's go\u3002"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"'static"})," \u5728 Rust \u4e2d\u662f\u76f8\u5f53\u5e38\u89c1\u7684\uff0c\u4f8b\u5982\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u5c31\u5177\u6709 ",(0,e.jsx)(n.code,{children:"'static"})," \u751f\u547d\u5468\u671f:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n  let mark_twain: &str = "Samuel Clemens";\n  print_author(mark_twain);\n}\nfn print_author(author: &\'static str) {\n  println!("{}", author);\n}\n'})}),"\n",(0,e.jsxs)(n.p,{children:["\u9664\u6b64\u4e4b\u5916\uff0c\u7279\u5f81\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\u4e5f\u662f ",(0,e.jsx)(n.code,{children:"'static"}),"\uff0c\u4f8b\u5982",(0,e.jsx)(n.a,{href:"https://course.rs/compiler/fight-with-compiler/lifetime/closure-with-static.html#%E7%89%B9%E5%BE%81%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F",children:"\u8fd9\u91cc"}),"\u6240\u63d0\u5230\u7684\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u9664\u4e86 ",(0,e.jsx)(n.code,{children:"&'static"})," \u7684\u7528\u6cd5\u5916\uff0c\u6211\u4eec\u5728\u53e6\u5916\u4e00\u79cd\u573a\u666f\u4e2d\u4e5f\u53ef\u4ee5\u89c1\u5230 ",(0,e.jsx)(n.code,{children:"'static"})," \u7684\u4f7f\u7528:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:'use std::fmt::Display;\nfn main() {\n    let mark_twain = "Samuel Clemens";\n    print(&mark_twain);\n}\n\nfn print<T: Display + \'static>(message: &T) {\n    println!("{}", message);\n}\n'})}),"\n",(0,e.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c\u5f88\u660e\u663e ",(0,e.jsx)(n.code,{children:"'static"})," \u662f\u4f5c\u4e3a\u751f\u547d\u5468\u671f\u7ea6\u675f\u6765\u4f7f\u7528\u4e86\u3002 ",(0,e.jsxs)(n.strong,{children:["\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c ",(0,e.jsx)(n.code,{children:"&'static"})," \u548c ",(0,e.jsx)(n.code,{children:"T: 'static"})," \u7684\u7528\u6cd5\u5230\u5e95\u6709\u4f55\u533a\u522b\uff1f"]})]}),"\n",(0,e.jsx)(n.h2,{id:"statichttpscoursersadvancelifetimestatichtmlstatic",children:(0,e.jsx)(n.code,{children:"[&'static](https://course.rs/advance/lifetime/static.html#static)"})}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"&'static"})," \u5bf9\u4e8e\u751f\u547d\u5468\u671f\u6709\u7740\u975e\u5e38\u5f3a\u7684\u8981\u6c42\uff1a\u4e00\u4e2a\u5f15\u7528\u5fc5\u987b\u8981\u6d3b\u5f97\u8ddf\u5269\u4e0b\u7684\u7a0b\u5e8f\u4e00\u6837\u4e45\uff0c\u624d\u80fd\u88ab\u6807\u6ce8\u4e3a ",(0,e.jsx)(n.code,{children:"&'static"}),"\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u6765\u8bf4\uff0c\u5b83\u76f4\u63a5\u88ab\u6253\u5305\u5230\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u6c38\u8fdc\u4e0d\u4f1a\u88ab ",(0,e.jsx)(n.code,{children:"drop"}),"\uff0c\u56e0\u6b64\u5b83\u80fd\u8ddf\u7a0b\u5e8f\u6d3b\u5f97\u4e00\u6837\u4e45\uff0c\u81ea\u7136\u5b83\u7684\u751f\u547d\u5468\u671f\u662f ",(0,e.jsx)(n.code,{children:"'static"}),"\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u4f46\u662f\uff0c",(0,e.jsxs)(n.strong,{children:[(0,e.jsx)(n.code,{children:"&'static"})," \u751f\u547d\u5468\u671f\u9488\u5bf9\u7684\u4ec5\u4ec5\u662f\u5f15\u7528\uff0c\u800c\u4e0d\u662f\u6301\u6709\u8be5\u5f15\u7528\u7684\u53d8\u91cf\uff0c\u5bf9\u4e8e\u53d8\u91cf\u6765\u8bf4\uff0c\u8fd8\u662f\u8981\u9075\u5faa\u76f8\u5e94\u7684\u4f5c\u7528\u57df\u89c4\u5219"]})," :"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:'use std::{slice::from_raw_parts, str::from_utf8_unchecked};\n\nfn get_memory_location() -> (usize, usize) {\n  // \u201cHello World\u201d \u662f\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\uff0c\u56e0\u6b64\u5b83\u7684\u751f\u547d\u5468\u671f\u662f `\'static`.\n  // \u4f46\u6301\u6709\u5b83\u7684\u53d8\u91cf `string` \u7684\u751f\u547d\u5468\u671f\u5c31\u4e0d\u4e00\u6837\u4e86\uff0c\u5b83\u5b8c\u5168\u53d6\u51b3\u4e8e\u53d8\u91cf\u4f5c\u7528\u57df\uff0c\u5bf9\u4e8e\u8be5\u4f8b\u5b50\u6765\u8bf4\uff0c\u4e5f\u5c31\u662f\u5f53\u524d\u7684\u51fd\u6570\u8303\u56f4\n  let string = "Hello World!";\n  let pointer = string.as_ptr() as usize;\n  let length = string.len();\n  (pointer, length)\n  // `string` \u5728\u8fd9\u91cc\u88ab drop \u91ca\u653e\n  // \u867d\u7136\u53d8\u91cf\u88ab\u91ca\u653e\uff0c\u65e0\u6cd5\u518d\u88ab\u8bbf\u95ee\uff0c\u4f46\u662f\u6570\u636e\u4f9d\u7136\u8fd8\u4f1a\u7ee7\u7eed\u5b58\u6d3b\n}\n\nfn get_str_at_location(pointer: usize, length: usize) -> &\'static str {\n  // \u4f7f\u7528\u88f8\u6307\u9488\u9700\u8981 `unsafe{}` \u8bed\u53e5\u5757\n  unsafe { from_utf8_unchecked(from_raw_parts(pointer as *const u8, length)) }\n}\n\nfn main() {\n  let (pointer, length) = get_memory_location();\n  let message = get_str_at_location(pointer, length);\n  println!(\n    "The {} bytes at 0x{:X} stored: {}",\n    length, pointer, message\n  );\n  // \u5982\u679c\u5927\u5bb6\u60f3\u77e5\u9053\u4e3a\u4f55\u5904\u7406\u88f8\u6307\u9488\u9700\u8981 `unsafe`\uff0c\u53ef\u4ee5\u8bd5\u7740\u53cd\u6ce8\u91ca\u4ee5\u4e0b\u4ee3\u7801\n  // let message = get_str_at_location(1000, 10);\n}\n'})}),"\n",(0,e.jsx)(n.p,{children:"\u4e0a\u9762\u4ee3\u7801\u6709\u4e24\u70b9\u503c\u5f97\u6ce8\u610f\uff1a"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.code,{children:"&'static"})," \u7684\u5f15\u7528\u786e\u5b9e\u53ef\u4ee5\u548c\u7a0b\u5e8f\u6d3b\u5f97\u4e00\u6837\u4e45\uff0c\u56e0\u4e3a\u6211\u4eec\u901a\u8fc7 ",(0,e.jsx)(n.code,{children:"get_str_at_location"})," \u51fd\u6570\u76f4\u63a5\u53d6\u5230\u4e86\u5bf9\u5e94\u7684\u5b57\u7b26\u4e32"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["\u6301\u6709 ",(0,e.jsx)(n.code,{children:"&'static"})," \u5f15\u7528\u7684\u53d8\u91cf\uff0c\u5b83\u7684\u751f\u547d\u5468\u671f\u53d7\u5230\u4f5c\u7528\u57df\u7684\u9650\u5236\uff0c\u5927\u5bb6\u52a1\u5fc5\u4e0d\u8981\u641e\u6df7\u4e86"]}),"\n"]}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"t-statichttpscoursersadvancelifetimestatichtmlt-static",children:(0,e.jsx)(n.code,{children:"[T: 'static](https://course.rs/advance/lifetime/static.html#t-static)"})}),"\n",(0,e.jsx)(n.p,{children:"\u76f8\u6bd4\u8d77\u6765\uff0c\u8fd9\u79cd\u5f62\u5f0f\u7684\u7ea6\u675f\u5c31\u6709\u4e9b\u590d\u6742\u4e86\u3002"}),"\n",(0,e.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5728\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,e.jsx)(n.code,{children:"T: 'static"})," \u4e0e ",(0,e.jsx)(n.code,{children:"&'static"})," \u6709\u76f8\u540c\u7684\u7ea6\u675f\uff1a",(0,e.jsx)(n.code,{children:"T"})," \u5fc5\u987b\u6d3b\u5f97\u548c\u7a0b\u5e8f\u4e00\u6837\u4e45\u3002"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:"use std::fmt::Debug;\n\nfn print_it<T: Debug + 'static>( input: T) {\n    println!( \"'static value passed in is: {:?}\", input );\n}\n\nfn print_it1( input: impl Debug + 'static ) {\n    println!( \"'static value passed in is: {:?}\", input );\n}\n\n\n\nfn main() {\n    let i = 5;\n\n    print_it(&i);\n    print_it1(&i);\n}\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u62a5\u9519\uff0c\u539f\u56e0\u5f88\u7b80\u5355: ",(0,e.jsx)(n.code,{children:"&i"})," \u7684\u751f\u547d\u5468\u671f\u65e0\u6cd5\u6ee1\u8db3 ",(0,e.jsx)(n.code,{children:"'static"})," \u7684\u7ea6\u675f\uff0c\u5982\u679c\u5927\u5bb6\u5c06 ",(0,e.jsx)(n.code,{children:"i"})," \u4fee\u6539\u4e3a\u5e38\u91cf\uff0c\u90a3\u81ea\u7136\u4e00\u5207 OK\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u89c1\u8bc1\u5947\u8ff9\u7684\u65f6\u5019\uff0c\u8bf7\u4e0d\u8981\u7728\u773c\uff0c\u73b0\u5728\u6211\u4eec\u6765\u7a0d\u5fae\u4fee\u6539\u4e0b ",(0,e.jsx)(n.code,{children:"print_it"})," \u51fd\u6570:"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:"use std::fmt::Debug;\n\nfn print_it<T: Debug + 'static>( input: &T) {\n    println!( \"'static value passed in is: {:?}\", input );\n}\n\nfn main() {\n    let i = 5;\n\n    print_it(&i);\n}\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u8fd9\u6bb5\u4ee3\u7801\u7adf\u7136\u4e0d\u62a5\u9519\u4e86\uff01\u539f\u56e0\u5728\u4e8e\u6211\u4eec\u7ea6\u675f\u7684\u662f ",(0,e.jsx)(n.code,{children:"T"}),"\uff0c\u4f46\u662f\u4f7f\u7528\u7684\u5374\u662f\u5b83\u7684\u5f15\u7528 ",(0,e.jsx)(n.code,{children:"&T"}),"\uff0c\u6362\u800c\u8a00\u4e4b\uff0c\u6211\u4eec\u6839\u672c\u6ca1\u6709\u76f4\u63a5\u4f7f\u7528 ",(0,e.jsx)(n.code,{children:"T"}),"\uff0c\u56e0\u6b64\u7f16\u8bd1\u5668\u5c31\u6ca1\u6709\u53bb\u68c0\u67e5 ",(0,e.jsx)(n.code,{children:"T"})," \u7684\u751f\u547d\u5468\u671f\u7ea6\u675f\uff01\u5b83\u53ea\u8981\u786e\u4fdd ",(0,e.jsx)(n.code,{children:"&T"})," \u7684\u751f\u547d\u5468\u671f\u7b26\u5408\u89c4\u5219\u5373\u53ef\uff0c\u5728\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5b83\u81ea\u7136\u662f\u7b26\u5408\u7684\u3002"]}),"\n",(0,e.jsx)(n.p,{children:"\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50:"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:'use std::fmt::Display;\n\nfn main() {\n  let r1;\n  let r2;\n  {\n    static STATIC_EXAMPLE: i32 = 42;\n    r1 = &STATIC_EXAMPLE;\n    let x = "&\'static str";\n    r2 = x;\n    // r1 \u548c r2 \u6301\u6709\u7684\u6570\u636e\u90fd\u662f \'static \u7684\uff0c\u56e0\u6b64\u5728\u82b1\u62ec\u53f7\u7ed3\u675f\u540e\uff0c\u5e76\u4e0d\u4f1a\u88ab\u91ca\u653e\n  }\n\n  println!("&\'static i32: {}", r1); // -> 42\n  println!("&\'static str: {}", r2); // -> &\'static str\n\n  let r3: &str;\n\n  {\n    let s1 = "String".to_string();\n\n    // s1 \u867d\u7136\u6ca1\u6709 \'static \u751f\u547d\u5468\u671f\uff0c\u4f46\u662f\u5b83\u4f9d\u7136\u53ef\u4ee5\u6ee1\u8db3 T: \'static \u7684\u7ea6\u675f\n    // \u5145\u5206\u8bf4\u660e\u8fd9\u4e2a\u7ea6\u675f\u662f\u591a\u4e48\u7684\u5f31\u3002\u3002\n    static_bound(&s1);\n\n    // s1 \u662f String \u7c7b\u578b\uff0c\u6ca1\u6709 \'static \u7684\u751f\u547d\u5468\u671f\uff0c\u56e0\u6b64\u4e0b\u9762\u4ee3\u7801\u4f1a\u62a5\u9519\n    r3 = &s1;\n\n    // s1 \u5728\u8fd9\u91cc\u88ab drop\n  }\n  println!("{}", r3);\n}\n\nfn static_bound<T: Display + \'static>(t: &T) {\n  println!("{}", t);\n}\n'})}),"\n",(0,e.jsx)(n.h2,{id:"static-\u5230\u5e95\u9488\u5bf9\u8c01",children:(0,e.jsx)(n.a,{href:"https://course.rs/advance/lifetime/static.html#static-%E5%88%B0%E5%BA%95%E9%92%88%E5%AF%B9%E8%B0%81",children:"static \u5230\u5e95\u9488\u5bf9\u8c01\uff1f"})}),"\n",(0,e.jsxs)(n.p,{children:["\u5927\u5bb6\u6709\u6ca1\u6709\u60f3\u8fc7\uff0c\u5230\u5e95\u662f ",(0,e.jsx)(n.code,{children:"&'static"})," \u8fd9\u4e2a\u5f15\u7528\u8fd8\u662f\u8be5\u5f15\u7528\u6307\u5411\u7684\u6570\u636e\u6d3b\u5f97\u8ddf\u7a0b\u5e8f\u4e00\u6837\u4e45\u5462\uff1f"]}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.strong,{children:"\u7b54\u6848\u662f\u5f15\u7528\u6307\u5411\u7684\u6570\u636e"}),"\uff0c\u800c\u5f15\u7528\u672c\u8eab\u662f\u8981\u9075\u5faa\u5176\u4f5c\u7528\u57df\u8303\u56f4\u7684\uff0c\u6211\u4eec\u6765\u7b80\u5355\u9a8c\u8bc1\u4e0b\uff1a"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-Rust",children:'fn main() {\n    {\n        let static_string = "I\'m in read-only memory";\n        println!("static_string: {}", static_string);\n\n        // \u5f53 `static_string` \u8d85\u51fa\u4f5c\u7528\u57df\u65f6\uff0c\u8be5\u5f15\u7528\u4e0d\u80fd\u518d\u88ab\u4f7f\u7528\uff0c\u4f46\u662f\u6570\u636e\u4f9d\u7136\u4f1a\u5b58\u5728\u4e8e binary \u6240\u5360\u7528\u7684\u5185\u5b58\u4e2d\n    }\n\n    println!("static_string reference remains alive: {}", static_string);\n}\n'})}),"\n",(0,e.jsxs)(n.p,{children:['\u4ee5\u4e0a\u4ee3\u7801\u4e0d\u51fa\u6240\u6599\u4f1a\u62a5\u9519\uff0c\u539f\u56e0\u5728\u4e8e\u867d\u7136\u5b57\u7b26\u4e32\u5b57\u9762\u91cf "I\'m in read-only memory" \u7684\u751f\u547d\u5468\u671f\u662f ',(0,e.jsx)(n.code,{children:"'static"}),"\uff0c\u4f46\u662f\u6301\u6709\u5b83\u7684\u5f15\u7528\u5e76\u4e0d\u662f\uff0c\u5b83\u7684\u4f5c\u7528\u57df\u5728\u5185\u90e8\u82b1\u62ec\u53f7 ",(0,e.jsx)(n.code,{children:"}"})," \u5904\u5c31\u7ed3\u675f\u4e86\u3002"]}),"\n",(0,e.jsx)(n.h2,{id:"\u8bfe\u540e\u7ec3\u4e60",children:(0,e.jsx)(n.a,{href:"https://course.rs/advance/lifetime/static.html#%E8%AF%BE%E5%90%8E%E7%BB%83%E4%B9%A0",children:"\u8bfe\u540e\u7ec3\u4e60"})}),"\n",(0,e.jsxs)(n.blockquote,{children:["\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.a,{href:"https://zh.practice.rs/lifetime/static.html",children:"Rust By Practice"}),"\uff0c\u652f\u6301\u4ee3\u7801\u5728\u7ebf\u7f16\u8f91\u548c\u8fd0\u884c\uff0c\u5e76\u63d0\u4f9b\u8be6\u7ec6\u7684\u4e60\u9898\u89e3\u7b54\u3002\uff08\u672c\u8282\u6682\u65e0\u4e60\u9898\u89e3\u7b54\uff09"]}),"\n"]}),"\n",(0,e.jsx)(n.h2,{id:"\u603b\u7ed3",children:(0,e.jsx)(n.a,{href:"https://course.rs/advance/lifetime/static.html#%E6%80%BB%E7%BB%93",children:"\u603b\u7ed3"})}),"\n",(0,e.jsxs)(n.p,{children:["\u603b\u4e4b\uff0c ",(0,e.jsx)(n.code,{children:"&'static"})," \u548c ",(0,e.jsx)(n.code,{children:"T: 'static"})," \u5927\u4f53\u4e0a\u76f8\u4f3c\uff0c\u76f8\u6bd4\u8d77\u6765\uff0c\u540e\u8005\u7684\u4f7f\u7528\u5f62\u5f0f\u4f1a\u66f4\u52a0\u590d\u6742\u4e00\u4e9b\u3002"]}),"\n",(0,e.jsxs)(n.p,{children:["\u81f3\u6b64\uff0c\u76f8\u4fe1\u5927\u5bb6\u5bf9\u4e8e ",(0,e.jsx)(n.code,{children:"'static"})," \u548c ",(0,e.jsx)(n.code,{children:"T: 'static"})," \u4e5f\u6709\u4e86\u6e05\u6670\u7684\u7406\u89e3\uff0c\u90a3\u4e48\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u4f7f\u7528\u5b83\u4eec\u5462\uff1f"]}),"\n",(0,e.jsx)(n.p,{children:"\u4f5c\u4e3a\u7ecf\u9a8c\u4e4b\u8c08\uff0c\u53ef\u4ee5\u8fd9\u4e48\u6765:"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u6dfb\u52a0 ",(0,e.jsx)(n.code,{children:"&'static"})," \u6765\u8ba9\u4ee3\u7801\u5de5\u4f5c\uff0c\u90a3\u5f88\u53ef\u80fd\u662f\u8bbe\u8ba1\u4e0a\u51fa\u95ee\u9898\u4e86"]}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u6ee1\u8db3\u548c\u53d6\u60a6\u7f16\u8bd1\u5668\uff0c\u90a3\u5c31\u4f7f\u7528 ",(0,e.jsx)(n.code,{children:"T: 'static"}),"\uff0c\u5f88\u591a\u65f6\u5019\u5b83\u90fd\u80fd\u89e3\u51b3\u95ee\u9898"]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(n.blockquote,{children:["\n",(0,e.jsxs)(n.p,{children:["\u4e00\u4e2a\u5c0f\u77e5\u8bc6\uff0c\u5728 Rust \u6807\u51c6\u5e93\u4e2d\uff0c\u6709 48 \u5904\u7528\u5230\u4e86 &'static \uff0c112 \u5904\u7528\u5230\u4e86 ",(0,e.jsx)(n.code,{children:"T: 'static"})," \uff0c\u770b\u6765\u53d6\u60a6\u7f16\u8bd1\u5668\u4e0d\u4ec5\u4ec5\u662f\u83dc\u9e1f\u9700\u8981\u7684\uff0c\u9ad8\u624b\u4e5f\u7ecf\u5e38\u7528\u5230 :)"]}),"\n"]})]})}function h(t={}){const{wrapper:n}={...(0,i.R)(),...t.components};return n?(0,e.jsx)(n,{...t,children:(0,e.jsx)(o,{...t})}):o(t)}},8453:(t,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var e=s(6540);const i={},c=e.createContext(i);function r(t){const n=e.useContext(c);return e.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function l(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),e.createElement(c.Provider,{value:n},t.children)}}}]);
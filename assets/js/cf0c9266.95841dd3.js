"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3834],{1256:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=r(4848),d=r(8453);const l={},c="\u5143\u7ec4",i={id:"rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/\u590d\u5408\u7c7b\u578b",title:"\u590d\u5408\u7c7b\u578b",description:"Rust \u590d\u6742\u7c7b\u578b\u7684\u8d4b\u503c\uff0c\u53ef\u4ee5\u79f0\u4e3a\u6240\u6709\u6743\u8f6c\u79fb\u6216\u8005\u79fb\u52a8 (move)\uff0c\u5c31\u50cf\u662f\u6d45\u62f7\u8d1d\uff0c\u540c\u65f6\u8ba9\u7b2c\u4e00\u4e2a\u53d8\u91cf\u5931\u6548\u3002\u5f53\u6240\u6709\u8005 (\u53d8\u91cf) \u79bb\u5f00\u4f5c\u7528\u57df\u8303\u56f4\u65f6\uff0c\u8fd9\u4e2a\u503c\u5c06\u88ab\u4e22\u5f03(drop)",source:"@site/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/\u590d\u5408\u7c7b\u578b.md",sourceDirName:"rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b",slug:"/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/",permalink:"/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/\u590d\u5408\u7c7b\u578b.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u503c\u548c\u7c7b\u578b",permalink:"/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/"},next:{title:"Hash",permalink:"/docs/rust/\u5bf9\u8c61/\u503c\u548c\u7c7b\u578b/\u590d\u5408\u7c7b\u578b/Hash"}},t={},o=[{value:"\u56fa\u5b9a\u6570\u7ec4Array",id:"\u56fa\u5b9a\u6570\u7ec4array",level:2},{value:"\u52a8\u6001\u6570\u7ec4vecter",id:"\u52a8\u6001\u6570\u7ec4vecter",level:2},{value:"&amp;str",id:"str",level:2},{value:"String",id:"string",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Rust \u590d\u6742\u7c7b\u578b\u7684\u8d4b\u503c\uff0c\u53ef\u4ee5\u79f0\u4e3a\u6240\u6709\u6743\u8f6c\u79fb\u6216\u8005\u79fb\u52a8 (move)\uff0c\u5c31\u50cf\u662f\u6d45\u62f7\u8d1d\uff0c\u540c\u65f6\u8ba9\u7b2c\u4e00\u4e2a\u53d8\u91cf\u5931\u6548\u3002\u5f53\u6240\u6709\u8005 (\u53d8\u91cf) \u79bb\u5f00\u4f5c\u7528\u57df\u8303\u56f4\u65f6\uff0c\u8fd9\u4e2a\u503c\u5c06\u88ab\u4e22\u5f03(drop)"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'let s1 = String::from("hello");\nlet s2 = s1; // \u79fb\u52a8\n\nprintln!("{}, world!", s1); // \u7f16\u8bd1\u9519\u8bef\uff0cuse of moved value: `s1`\nprintln!("{}, world!", s2);\n'})}),"\n",(0,s.jsx)(e.h1,{id:"\u5143\u7ec4",children:"\u5143\u7ec4"}),"\n",(0,s.jsx)(e.p,{children:"\u957f\u5ea6\u56fa\u5b9a\uff0c\u7c7b\u578b\u987a\u5e8f\u56fa\u5b9a\u7684\u7ec4\u5408\u5143\u7d20\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n    let tup: (i32, f64, u8) = (500, 6.4, 1);\n    let s1 = String::from("hello");\n    let (s2, len) = calculate_length(&s1); // \u4f7f\u7528\u6a21\u5f0f\u5339\u914d\u89e3\u6784\u5143\u7ec4\n    let res = calculate_length(&s1); // \u4f7f\u7528.\u4e0b\u6807\u6765\u8bbf\u95ee\n    println!("The length of \'{}\' is {} \\n", s2, len);\n    print!("The length of \'{}\' is {} \\n",res.0, res.1);\n}\n\nfn calculate_length(s: &str) -> (&str, usize) { // \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\n    let length = s.len(); \n    (s, length)\n}\n'})}),"\n",(0,s.jsx)(e.h1,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u578b\u76f8\u540c\u7684\u7ec4\u5408\u5143\u7d20"}),"\n",(0,s.jsx)(e.h2,{id:"\u56fa\u5b9a\u6570\u7ec4array",children:"\u56fa\u5b9a\u6570\u7ec4Array"}),"\n",(0,s.jsx)(e.p,{children:"\u957f\u5ea6\u56fa\u5b9a\uff0c\u901f\u5ea6\u5f88\u5feb"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'let arr1:[u8; 3] = [1,2,3];\nlet arr2 = ["hello", "world"]\n\nprintln!("{:?}",arr1); // [1,2,3]\nprintln!("{:?}",arr2); // ["hello", "world"]\n\nlet s1: &[i32] = &arr1[1..2]; // \u6570\u7ec4\u5207\u7247&[T]\nprintln!("{:?}",s1);// [2]\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6570\u7ec4\u7c7b\u578b\u5bb9\u6613\u8ddf\u6570\u7ec4\u5207\u7247\u6df7\u6dc6\uff0c",(0,s.jsx)(e.code,{children:"[T;n]"})," \u63cf\u8ff0\u4e86\u4e00\u4e2a\u6570\u7ec4\u7684\u7c7b\u578b\uff0c\u800c [T] \u63cf\u8ff0\u4e86\u5207\u7247\u7684\u7c7b\u578b\uff0c \u56e0\u4e3a\u5207\u7247\u662f\u8fd0\u884c\u671f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5b83\u7684\u957f\u5ea6\u65e0\u6cd5\u5728\u7f16\u8bd1\u671f\u5f97\u77e5\uff0c\u56e0\u6b64\u4e0d\u80fd\u7528 ",(0,s.jsx)(e.code,{children:"[T;n]"})," \u7684\u5f62\u5f0f\u53bb\u63cf\u8ff0\n\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u4f7f\u7528\u6700\u591a\u7684\u662f\u6570\u7ec4\u5207\u7247 [T]\uff0c\u6211\u4eec\u5f80\u5f80\u901a\u8fc7\u5f15\u7528\u7684\u65b9\u5f0f\u53bb\u4f7f\u7528 &[T]\uff0c\u56e0\u4e3a\u540e\u8005\u6709\u56fa\u5b9a\u7684\u7c7b\u578b\u5927\u5c0f"]}),"\n",(0,s.jsx)(e.h2,{id:"\u52a8\u6001\u6570\u7ec4vecter",children:"\u52a8\u6001\u6570\u7ec4vecter"}),"\n",(0,s.jsxs)(e.p,{children:["\u957f\u5ea6\u53ef\u53d8\uff0c",(0,s.jsx)(e.code,{children:"Vector"}),",",(0,s.jsx)(e.code,{children:"HashMap"}),"\u90fd\u662f\u6807\u51c6\u5e93\u5c01\u88c5\u7684\u7c7b\u578b\uff0c\u5b83\u4eec\u5e95\u5c42\u7684\u6570\u636e\u90fd\u5b58\u50a8\u5728\u5185\u5b58\u5806\u4e0a\uff0c\u7136\u540e\u901a\u8fc7\u4e00\u4e2a\u5b58\u50a8\u5728\u6808\u4e2d\u7684\u5f15\u7528\u7c7b\u578b\u6765\u8bbf\u95ee\uff0c\u53ef\u4ee5\u52a8\u6001\u6269\u5c55"]}),"\n",(0,s.jsxs)(e.p,{children:["\u8ddf\u7ed3\u6784\u4f53\u4e00\u6837\uff0c",(0,s.jsx)(e.code,{children:"Vector"}),"\u7c7b\u578b\u5728\u8d85\u51fa\u4f5c\u7528\u57df\u8303\u56f4\u540e\uff0c\u4f1a\u88ab\u81ea\u52a8\u5220\u9664\uff0c\u5185\u90e8\u7684\u5143\u7d20\u4e5f\u4f1a\u88ab\u5220\u9664"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'let mut arr1 = Vec::new(); // \u5b9e\u4f8b\u5316vector\u5bf9\u8c61\uff0c\nlet mut arr2 = vec![1,2,4]; // \u4f7f\u7528\u5b8f\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0c\u5e76\u4e14\u540c\u65f6\u521d\u59cb\u5316\u5143\u7d20\narr2.push(3) // \u6dfb\u52a0\u5143\u7d20\n\n// \u8bfb\u53d6\u5143\u7d20\uff0c\u4e0b\u6807\u6216\u8005.get()\nfn main() {\n    let arr2 = vec![1,2,4]; // \u4f7f\u7528\u5b8f\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0c\u5e76\u4e14\u540c\u65f6\u521d\u59cb\u5316\u5143\u7d20\n    let arr3 = vec!["welcome","hello"];\n    let first = arr2[0];\n    let first_s = arr3[0];\n    match arr2.get(1) { // \u901a\u8fc7get()\u8bbf\u95ee\uff0c\u4e0d\u4f1a\u8d8a\u754c\u62a5\u9519\n        Some(k) => println!("\u7b2c\u4e8c\u4e2a\u5143\u7d20\u662f {k}"),\n        None => println!("\u53bb\u4f60\u7684\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u6839\u672c\u6ca1\u6709\uff01"),\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"vector \u5143\u7d20\u7684\u6240\u6709\u6743\uff1a\u5982\u679c Vector \u7684\u5143\u7d20\u7c7b\u578b\u662f\u590d\u6742\u7c7b\u578b\uff0c\u4e0d\u80fd\u76f4\u63a5 arr[0] \u6765\u8d4b\u503c"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'fn vector() {\n    let mut arr1 = vec![String::from("hello"), String::from("world")];\n    // let a = arr1[0]; // \u4f1a\u7f16\u8bd1\u9519\u8bef\uff0c\u6709\u4e24\u79cd\u89e3\u51b31.\u4f7f\u7528\u5f15\u7528 2.\u901a\u8fc7remove(),pop\u53d1\u751f\u6240\u6709\u6743\u8f6c\u79fb\n    let a = arr1.remove(0); // \u4f1a\u628a\u5143\u7d20\u6240\u6709\u6743\u8f6c\u79fb\u7ed9a,\u540c\u65f6\u5143\u7d20\u4f1a\u79fb\u52a8\u586b\u51450\u4e0b\u6807\uff0c\u5143\u7d20\u591a\u7684\u65f6\u5019\u4f1a\u6d88\u8017\u6027\u80fd\uff0cvec\u957f\u5ea6\u4e5f\u4f1a\u53d8\u5316\n    let b = &arr1[0]; // \u76f4\u63a5\u5f15\u7528\uff0c \u5982\u679c\u9700\u8981\u5f97\u5230String, b.to_string()\u4f1a\u751f\u6210\u65b0\u7684Stringd\u5bf9\u8c61\n    println!("{:?}", arr1);\n    println!("{}", b);\n    println!("{}", a);\n}\n\n/**\n["world"]\nworld\nhello\n'})}),"\n",(0,s.jsx)(e.h1,{id:"\u5b57\u7b26\u4e32",children:"\u5b57\u7b26\u4e32"}),"\n",(0,s.jsx)(e.h2,{id:"str",children:"&str"}),"\n",(0,s.jsxs)(e.p,{children:["\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u88ab\u786c\u7f16\u7801\u8fdb\u7a0b\u5e8f\u91cc\u3002\u4e0d\u53ef\u53d8\u3002\u6ca1\u6709\u6240\u6709\u6743\u7684\u6570\u636e\u7c7b\u578b\u662f ",(0,s.jsx)(e.code,{children:"slice"}),"\u3002slice \u5141\u8bb8\u4f60\u5f15\u7528\u96c6\u5408\u4e2d\u4e00\u6bb5\u8fde\u7eed\u7684\u5143\u7d20\u5e8f\u5217\uff0c\u800c\u4e0d\u7528\u5f15\u7528\u6574\u4e2a\u96c6\u5408\u3002",(0,s.jsx)(e.code,{children:"&str"}),"\u672c\u8d28\u4e0a\u662f",(0,s.jsx)(e.code,{children:"slice"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u53d8\u91cf ",(0,s.jsx)(e.code,{children:"s"})," \u7ed1\u5b9a\u5230\u4e86\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u503c\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u503c\u662f\u786c\u7f16\u7801\u8fdb\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u7684\u3002\u8fd9\u4e2a\u53d8\u91cf\u4ece\u58f0\u660e\u7684\u70b9\u5f00\u59cb\u76f4\u5230\u5f53\u524d",(0,s.jsx)(e.strong,{children:"\u4f5c\u7528\u57df"}),"\u7ed3\u675f\u65f6\u90fd\u662f\u6709\u6548\u7684\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'\n{                      // s \u5728\u8fd9\u91cc\u65e0\u6548, \u5b83\u5c1a\u672a\u58f0\u660e\n    let s = "hello";   // \u4ece\u6b64\u5904\u8d77\uff0cs \u662f\u6709\u6548\u7684\n    // \u4f7f\u7528 s\n}                      // \u6b64\u4f5c\u7528\u57df\u5df2\u7ed3\u675f\uff0cs \u4e0d\u518d\u6709\u6548\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6362\u53e5\u8bdd\u8bf4\uff0c\u8fd9\u91cc\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u65f6\u95f4\u70b9\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5f53 ",(0,s.jsx)(e.code,{children:"s"})," ",(0,s.jsx)(e.strong,{children:"\u8fdb\u5165\u4f5c\u7528\u57df"})," \u65f6\uff0c\u5b83\u5c31\u662f\u6709\u6548\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e00\u76f4\u6301\u7eed\u5230\u5b83 ",(0,s.jsx)(e.strong,{children:"\u79bb\u5f00\u4f5c\u7528\u57df"})," \u4e3a\u6b62\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u76ee\u524d\u4e3a\u6b62\uff0c\u53d8\u91cf\u662f\u5426\u6709\u6548\u4e0e\u4f5c\u7528\u57df\u7684\u5173\u7cfb\u8ddf\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u662f\u7c7b\u4f3c\u7684\u3002\u73b0\u5728\u6211\u4eec\u5728\u6b64\u57fa\u7840\u4e0a\u4ecb\u7ecd ",(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"string",children:"String"}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u6709\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c",(0,s.jsx)(e.code,{children:"String"}),"\u3002\u8fd9\u4e2a\u7c7b\u578b\u88ab\u5206\u914d\u5230\u5806\u4e0a\uff0c\u6240\u4ee5\u80fd\u591f\u5b58\u50a8\u5728\u7f16\u8bd1\u65f6\u672a\u77e5\u5927\u5c0f\u7684\u6587\u672c\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"from"})," \u51fd\u6570\u57fa\u4e8e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u6765\u521b\u5efa ",(0,s.jsx)(e.code,{children:"String"})]}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e24\u4e2a\u5192\u53f7\uff08",(0,s.jsx)(e.code,{children:"::"}),"\uff09\u662f\u8fd0\u7b97\u7b26\uff0c\u5141\u8bb8\u5c06\u7279\u5b9a\u7684 ",(0,s.jsx)(e.code,{children:"from"})," \u51fd\u6570\u7f6e\u4e8e ",(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b\u7684\u547d\u540d\u7a7a\u95f4\uff08namespace\uff09\u4e0b\uff0c\u800c\u4e0d\u9700\u8981\u4f7f\u7528\u7c7b\u4f3c ",(0,s.jsx)(e.code,{children:"string_from"})," \u8fd9\u6837\u7684\u540d\u5b57\u3002\u5728\u7b2c\u4e94\u7ae0\u7684 ",(0,s.jsx)(e.a,{href:"https://rust.bootcss.com/ch05-03-method-syntax.html#method-syntax",children:"\u201c\u65b9\u6cd5\u8bed\u6cd5\u201d\uff08\u201cMethod Syntax\u201d\uff09"})," \u90e8\u5206\u4f1a\u7740\u91cd\u8bb2\u89e3\u8fd9\u4e2a\u8bed\u6cd5\u800c\u4e14\u5728\u7b2c\u4e03\u7ae0\u7684 ",(0,s.jsx)(e.a,{href:"https://rust.bootcss.com/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html",children:"\u201c\u8def\u5f84\u7528\u4e8e\u5f15\u7528\u6a21\u5757\u6811\u4e2d\u7684\u9879\u201d"})," \u4e2d\u4f1a\u8bb2\u5230\u6a21\u5757\u7684\u547d\u540d\u7a7a\u95f4\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5c31\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u6765\u8bf4\uff0c\u6211\u4eec\u5728\u7f16\u8bd1\u65f6\u5c31\u77e5\u9053\u5176\u5185\u5bb9\uff0c\u6240\u4ee5\u6587\u672c\u88ab\u76f4\u63a5\u786c\u7f16\u7801\u8fdb\u6700\u7ec8\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4e2d\u3002\u8fd9\u4f7f\u5f97\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u5feb\u901f\u4e14\u9ad8\u6548\u3002\u4e0d\u8fc7\u8fd9\u4e9b\u7279\u6027\u90fd\u53ea\u5f97\u76ca\u4e8e\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u7684\u4e0d\u53ef\u53d8\u6027\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u6211\u4eec\u4e0d\u80fd\u4e3a\u4e86\u6bcf\u4e00\u4e2a\u5728\u7f16\u8bd1\u65f6\u5927\u5c0f\u672a\u77e5\u7684\u6587\u672c\u800c\u5c06\u4e00\u5757\u5185\u5b58\u653e\u5165\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u5b83\u7684\u5927\u5c0f\u8fd8\u53ef\u80fd\u968f\u7740\u7a0b\u5e8f\u8fd0\u884c\u800c\u6539\u53d8\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e ",(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b\uff0c\u4e3a\u4e86\u652f\u6301\u4e00\u4e2a\u53ef\u53d8\uff0c\u53ef\u589e\u957f\u7684\u6587\u672c\u7247\u6bb5\uff0c\u9700\u8981\u5728\u5806\u4e0a\u5206\u914d\u4e00\u5757\u5728\u7f16\u8bd1\u65f6\u672a\u77e5\u5927\u5c0f\u7684\u5185\u5b58\u6765\u5b58\u653e\u5185\u5bb9\u3002\u8fd9\u610f\u5473\u7740\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5fc5\u987b\u5728\u8fd0\u884c\u65f6\u5411\u64cd\u4f5c\u7cfb\u7edf\u8bf7\u6c42\u5185\u5b58\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u4e00\u4e2a\u5f53\u6211\u4eec\u5904\u7406\u5b8c ",(0,s.jsx)(e.code,{children:"String"})," \u65f6\u5c06\u5185\u5b58\u8fd4\u56de\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u7684\u65b9\u6cd5\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7b2c\u4e00\u90e8\u5206\u7531\u6211\u4eec\u5b8c\u6210\uff1a\u5f53\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"String::from"})," \u65f6\uff0c\u5b83\u7684\u5b9e\u73b0 (",(0,s.jsx)(e.em,{children:"implementation(\u5b9e\u73b0)"}),") \u8bf7\u6c42\u5176\u6240\u9700\u7684\u5185\u5b58\u3002\u8fd9\u5728\u7f16\u7a0b\u8bed\u8a00\u4e2d\u662f\u975e\u5e38\u901a\u7528\u7684\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7136\u800c\uff0c\u7b2c\u4e8c\u90e8\u5206\u5b9e\u73b0\u8d77\u6765\u5c31\u5404\u6709\u533a\u522b\u4e86\u3002\u5728\u6709 ",(0,s.jsx)(e.strong,{children:"\u5783\u573e\u56de\u6536"}),"\uff08",(0,s.jsx)(e.em,{children:"garbage collector"}),"\uff0c",(0,s.jsx)(e.em,{children:"GC"}),"\uff09\u7684\u8bed\u8a00\u4e2d\uff0c GC \u8bb0\u5f55\u5e76\u6e05\u9664\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u800c\u6211\u4eec\u5e76\u4e0d\u9700\u8981\u5173\u5fc3\u5b83\u3002\u6ca1\u6709 GC \u7684\u8bdd\uff0c\u8bc6\u522b\u51fa\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58\u5e76\u8c03\u7528\u4ee3\u7801\u663e\u5f0f\u91ca\u653e\u5c31\u662f\u6211\u4eec\u7684\u8d23\u4efb\u4e86\uff0c\u8ddf\u8bf7\u6c42\u5185\u5b58\u7684\u65f6\u5019\u4e00\u6837\u3002\u4ece\u5386\u53f2\u7684\u89d2\u5ea6\u4e0a\u8bf4\u6b63\u786e\u5904\u7406\u5185\u5b58\u56de\u6536\u66fe\u7ecf\u662f\u4e00\u4e2a\u56f0\u96be\u7684\u7f16\u7a0b\u95ee\u9898\u3002\u5982\u679c\u5fd8\u8bb0\u56de\u6536\u4e86\u4f1a\u6d6a\u8d39\u5185\u5b58\u3002\u5982\u679c\u8fc7\u65e9\u56de\u6536\u4e86\uff0c\u5c06\u4f1a\u51fa\u73b0\u65e0\u6548\u53d8\u91cf\u3002\u5982\u679c\u91cd\u590d\u56de\u6536\uff0c\u8fd9\u4e5f\u662f\u4e2a bug\u3002\u6211\u4eec\u9700\u8981\u7cbe\u786e\u7684\u4e3a\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"allocate"})," \u914d\u5bf9\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"free"}),"\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u91c7\u53d6\u4e86\u4e00\u4e2a\u4e0d\u540c\u7684\u7b56\u7565\uff1a\u5185\u5b58\u5728\u62e5\u6709\u5b83\u7684\u53d8\u91cf\u79bb\u5f00\u4f5c\u7528\u57df\u540e\u5c31\u88ab\u81ea\u52a8\u91ca\u653e\u3002\u4e0b\u9762\u662f\u793a\u4f8b 4-1 \u4e2d\u4f5c\u7528\u57df\u4f8b\u5b50\u7684\u4e00\u4e2a\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"String"})," \u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u5b57\u9762\u503c\u7684\u7248\u672c\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'\n{\n    let s = String::from("hello"); // \u4ece\u6b64\u5904\u8d77\uff0cs \u662f\u6709\u6548\u7684\n\n    // \u4f7f\u7528 s\n}                                  // \u6b64\u4f5c\u7528\u57df\u5df2\u7ed3\u675f\uff0c\n                                   // s \u4e0d\u518d\u6709\u6548\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u5c06 ",(0,s.jsx)(e.code,{children:"String"})," \u9700\u8981\u7684\u5185\u5b58\u8fd4\u56de\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u7684\u5f88\u81ea\u7136\u7684\u4f4d\u7f6e\uff1a\u5f53 ",(0,s.jsx)(e.code,{children:"s"})," \u79bb\u5f00\u4f5c\u7528\u57df\u7684\u65f6\u5019\u3002\u5f53\u53d8\u91cf\u79bb\u5f00\u4f5c\u7528\u57df\uff0cRust \u4e3a\u6211\u4eec\u8c03\u7528\u4e00\u4e2a\u7279\u6b8a\u7684\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u53eb\u505a ",(0,s.jsx)(e.code,{children:"drop"}),"\uff0c\u5728\u8fd9\u91cc ",(0,s.jsx)(e.code,{children:"String"})," \u7684\u4f5c\u8005\u53ef\u4ee5\u653e\u7f6e\u91ca\u653e\u5185\u5b58\u7684\u4ee3\u7801\u3002Rust \u5728\u7ed3\u5c3e\u7684 ",(0,s.jsx)(e.code,{children:"}"})," \u5904\u81ea\u52a8\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"drop"}),"\u3002"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\u5728 C++ \u4e2d\uff0c\u8fd9\u79cd item \u5728\u751f\u547d\u5468\u671f\u7ed3\u675f\u65f6\u91ca\u653e\u8d44\u6e90\u7684\u6a21\u5f0f\u6709\u65f6\u88ab\u79f0\u4f5c ",(0,s.jsx)(e.strong,{children:"\u8d44\u6e90\u83b7\u53d6\u5373\u521d\u59cb\u5316"}),"\uff08",(0,s.jsx)(e.em,{children:"Resource Acquisition Is Initialization (RAII)"}),"\uff09\u3002\u5982\u679c\u4f60\u4f7f\u7528\u8fc7 RAII \u6a21\u5f0f\u7684\u8bdd\u5e94\u8be5\u5bf9 Rust \u7684 ",(0,s.jsx)(e.code,{children:"drop"})," \u51fd\u6570\u5e76\u4e0d\u964c\u751f\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e2a\u6a21\u5f0f\u5bf9\u7f16\u5199 Rust \u4ee3\u7801\u7684\u65b9\u5f0f\u6709\u7740\u6df1\u8fdc\u7684\u5f71\u54cd\u3002\u73b0\u5728\u5b83\u770b\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4e0d\u8fc7\u5728\u66f4\u590d\u6742\u7684\u573a\u666f\u4e0b\u4ee3\u7801\u7684\u884c\u4e3a\u53ef\u80fd\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\uff0c\u6bd4\u5982\u5f53\u6709\u591a\u4e2a\u53d8\u91cf\u4f7f\u7528\u5728\u5806\u4e0a\u5206\u914d\u7684\u5185\u5b58\u65f6\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u63a2\u7d22\u4e00\u4e9b\u8fd9\u6837\u7684\u573a\u666f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u5141\u8bb8\u4f60\u5f15\u7528\u96c6\u5408\u4e2d\u90e8\u5206\u8fde\u7eed\u7684\u5143\u7d20\u5e8f\u5217\uff0c\u800c\u4e0d\u662f\u5f15\u7528\u6574\u4e2a\u96c6\u5408\uff0c\u5207\u7247\u672c\u8d28\u4e5f\u662f\u5f15\u7528\u3002rust \u6709\u4e24\u79cd\u5207\u7247\uff0c\u5206\u522b\u662f\u5b57\u7b26\u4e32\u5207\u7247 & str, \u6570\u7ec4\u5207\u7247"}),"\n",(0,s.jsx)(e.p,{children:"\u5207\u7247\u53ea\u6709\u4e24\u4e2a\u5b57\u6bb5"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ptr"}),"\uff1a\u8fd9\u662f\u4e00\u4e2a\u6307\u5411\u5207\u7247\u9996\u5143\u7d20\u7684\u539f\u59cb\u6307\u9488\u3002\u5b83\u7684\u7c7b\u578b\u662f ",(0,s.jsx)(e.code,{children:"*const T"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"len"}),"\uff1a\u8fd9\u662f\u5207\u7247\u7684\u957f\u5ea6\u3002\u5b83\u7684\u7c7b\u578b\u662f ",(0,s.jsx)(e.code,{children:"usize"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u70b9\uff1a\u5207\u7247\u53ea\u662f\u5bf9\u6570\u636e\u7684\u90e8\u5206\u5f15\u7528\uff0c\u800c\u4e14\u957f\u5ea6\u56fa\u5b9a\uff0c\u53ef\u4ee5\u901a\u8fc7\u5207\u7247\u83b7\u53d6\u65b0\u7684\u5207\u7247\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'let s1 = String::from("hello");\nlet s2: &str = &s1[1..3]; // \u5b57\u7b26\u4e32\u5207\u7247\u7684\u7c7b\u578b\u6807\u8bc6\u662f&str, s2\u662f\u4e00\u4e2a\u5207\u7247\uff0c\u5207\u7247\u5bf9\u8c61\u5305\u542b\u6307\u9488\u548clen,\u6307\u9488\u6307\u5411\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u957f\u5ea6\u662f2\nprint!("{} \\n",s2) // el\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u4e5f\u662f\u5207\u7247"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'let s: &str = "hello";//\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u76f4\u63a5\u5c06\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u4ee5\u786c\u7f16\u7801\u7684\u65b9\u5f0f\u5199\u5165\u7a0b\u5e8f\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u5f53\u7a0b\u5e8f\u88ab\u52a0\u8f7d\u65f6\uff0c\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u4fdd\u5b58\u4e2dRead Only Memory \u5b57\u6bb5\u4e2d\u3002\u5982\u679c\u6709\u4e24\u4e2a\u76f8\u540c\u7684\u5b57\u9762\u91cf\uff0c\u4ed6\u4eec\u7684\u5730\u5740\u76f8\u540c\n'})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u5728\u8bed\u8a00\u7ea7\u522b\uff0c\u53ea\u6709\u4e00\u79cd\u5b57\u7b26\u4e32\u7c7b\u578b\uff1a ",(0,s.jsx)(e.code,{children:"str"}),"\uff0c\u5b83\u901a\u5e38\u662f\u4ee5\u5f15\u7528\u7c7b\u578b\u51fa\u73b0 ",(0,s.jsx)(e.code,{children:"&str"}),"\uff0c\u4f46\u662f\u5728\u6807\u51c6\u5e93\u91cc\uff0c\u8fd8\u6709\u591a\u79cd\u4e0d\u540c\u7528\u9014\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5176\u4e2d\u4f7f\u7528\u6700\u5e7f\u7684\u5373\u662f ",(0,s.jsx)(e.code,{children:"String"}),"\u7c7b\u578b\u3002",(0,s.jsx)(e.code,{children:"str"}),"\u7c7b\u578b\u662f\u786c\u7f16\u7801\u8fdb\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u4e5f\u65e0\u6cd5\u88ab\u4fee\u6539\uff0c\u4f46\u662f ",(0,s.jsx)(e.code,{children:"String"})," \u5219\u662f\u4e00\u4e2a\u53ef\u589e\u957f\u3001\u53ef\u6539\u53d8\u4e14\u5177\u6709\u6240\u6709\u6743\u7684 ",(0,s.jsx)(e.code,{children:"UTF-8"})," \u7f16\u7801\u5b57\u7b26\u4e32\uff0c",(0,s.jsx)(e.code,{children:"String"})," \u7c7b\u578b\u662f\u53d8\u957f\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u5806\u4e0a\u5206\u914d\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"pointer \uff1aheap \u4e2d\u503c\u7684\u5185\u5b58\u5730\u5740\nlength \uff1a\u5f53\u524d\u503c\u7684\u957f\u5ea6\u3001\u5f53\u524d\u5143\u7d20\u4e2a\u6570\u3002\ncapacity \uff1a\u5f53\u524d\u7f13\u51b2\u533a\u7684\u5bb9\u91cf\uff0c\u53ef\u4ee5\u5bb9\u7eb3\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u5f53\u524d\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8d85\u8fc7\u5f53\u524d\u5206\u914d\u7684 capacity \u4f1a\u91cd\u65b0\u5206\u914d\u5185\u5b58\uff0c\u4f1a\u5c06\u5f53\u524d\u5b57\u7b26\u4e32\u62f7\u8d1d\u5230\u65b0\u5206\u914d\u7684\u5185\u5b58\u4e2d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'// \u5b57\u7b26\u4e32\u5207\u7247\u8f6cString\nlet s = String::from("hello,world");\nlet s1 = "hello,world".to_string();// \u5f53\u6211\u4eec\u8c03\u7528 &str \u7684 to_string \u65b9\u6cd5\u65f6\uff0c\u5b9e\u9645\u4e0a\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 String \u5bf9\u8c61\uff0c\u5176\u5185\u5bb9\u662f &str \u7684\u6df1\u62f7\u8d1d\u3002\n// String\u8f6c&str\nlet s = String::from("hello,world");\nprint!("String={}\\n", s);\nprint!("&str={} \\n", &s); // \u6240\u6709\u5143\u7d20\nprint!("&str={} \\n", &s[1..3]); // \u53ea\u8981\u4e0b\u68071-2\u7684\u5143\u7d20\n'})}),"\n",(0,s.jsx)(e.h1,{id:"\u7ed3\u6784\u4f53",children:"\u7ed3\u6784\u4f53"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u591a\u4e2a\u7c7b\u578b\u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u6709\u7ed3\u6784\u4f53\u540d\u79f0\uff0c\u6709\u5b57\u6bb5"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u8981\u4fee\u6539\u7ed3\u6784\u4f53\u5b57\u6bb5\uff0c\u5fc5\u987b\u58f0\u660e\u4e3a\u53ef\u53d8\u7c7b\u578b"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53\uff0c\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u5b57\u6bb5\u8d4b\u503c\uff08\u4e0d\u7136\u7f16\u8bd1\u62a5\u9519\uff09"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'struct User {\n    active: bool,\n    username: String,\n    id: u64,\n}\nfn main() {\n    let mut user1 = User{ // \u5b9e\u4f8b\u5316\u7ed3\u6784\u4f53\uff0c\u5fc5\u987b\u4e3a\u6bcf\u4e2a\u5b57\u6bb5\u8d4b\u503c\n        active:true,\n        username:String::from("aaa"),\n        id:1\n    };\n    user1.username = String::from("bbb"); // \u4fee\u6539\u7ed3\u6784\u4f53\n    print!("{},{},{} \\n", user1.active, user1.username, user1.id);\n}\n'})}),"\n",(0,s.jsx)(e.h1,{id:"\u679a\u4e3e",children:"\u679a\u4e3e"}),"\n",(0,s.jsxs)(e.p,{children:["\u5047\u8bbe\u6211\u4eec\u8981\u5904\u7406 ",(0,s.jsx)(e.code,{children:"IP"}),"\u5730\u5740\u3002\u76ee\u524d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u4e24\u4e2a\u4e3b\u8981IP\u6807\u51c6",(0,s.jsx)(e.code,{children:"IPv4"}),"\u548c",(0,s.jsx)(e.code,{children:"IPv6"}),"\u3002\u53ef\u4ee5\u901a\u8fc7\u5728\u4ee3\u7801\u4e2d\u5b9a\u4e49\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"IpAddrKind"})," \u679a\u4e3e\u6765\u8868\u73b0\u8fd9\u4e2a\u6982\u5ff5\u5e76\u5217\u51fa\u53ef\u80fd\u7684 IP \u5730\u5740\u7c7b\u578b\uff0c",(0,s.jsx)(e.code,{children:"V4"})," \u548c ",(0,s.jsx)(e.code,{children:"V6"}),"\u3002\u8fd9\u88ab\u79f0\u4e3a\u679a\u4e3e\u7684 ",(0,s.jsx)(e.strong,{children:"\u6210\u5458"}),"\uff08",(0,s.jsx)(e.em,{children:"variants"}),"\uff09\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:"enum IpAddrKind {\n    V4,\n    V6,\n}\n//\u521b\u5efa\u5b9e\u4f8b\nlet four = IpAddrKind::V4;\nlet six = IpAddrKind::V6;\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u679a\u4e3e\u7684\u6210\u5458\u4f4d\u4e8e\u5176\u6807\u8bc6\u7b26\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u5e76\u4f7f\u7528\u4e24\u4e2a\u5192\u53f7\u5206\u5f00\u3002\u8fd9\u4e48\u8bbe\u8ba1\u7684\u76ca\u5904\u662f\u73b0\u5728 ",(0,s.jsx)(e.code,{children:"IpAddrKind::V4"})," \u548c ",(0,s.jsx)(e.code,{children:"IpAddrKind::V6"})," \u90fd\u662f ",(0,s.jsx)(e.code,{children:"IpAddrKind"})," \u7c7b\u578b\u7684\u3002\u4f8b\u5982\uff0c\u63a5\u7740\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\u6765\u83b7\u53d6\u4efb\u4f55 ",(0,s.jsx)(e.code,{children:"IpAddrKind"}),"\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:"fn route(ip_type: IpAddrKind) { }\n//\u8c03\u7528\nroute(IpAddrKind::V4);\nroute(IpAddrKind::V6);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'enum IpAddrKind {\n    V4,\n    V6,\n}\n\nstruct IpAddr {\n    kind: IpAddrKind,\n    address: String,\n}\n\nlet home = IpAddr {\n    kind: IpAddrKind::V4,\n    address: String::from("127.0.0.1"),\n};\n\nlet loopback = IpAddr {\n    kind: IpAddrKind::V6,\n    address: String::from("::1"),\n};\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u79cd\u66f4\u7b80\u6d01\u7684\u65b9\u5f0f\u6765\u8868\u8fbe\u76f8\u540c\u7684\u6982\u5ff5\uff0c\u4ec5\u4ec5\u4f7f\u7528\u679a\u4e3e\u5e76\u5c06\u6570\u636e\u76f4\u63a5\u653e\u8fdb\u6bcf\u4e00\u4e2a\u679a\u4e3e\u6210\u5458\u800c\u4e0d\u662f\u5c06\u679a\u4e3e\u4f5c\u4e3a\u7ed3\u6784\u4f53\u7684\u4e00\u90e8\u5206\u3002",(0,s.jsx)(e.code,{children:"IpAddr"})," \u679a\u4e3e\u7684\u65b0\u5b9a\u4e49\u8868\u660e\u4e86 ",(0,s.jsx)(e.code,{children:"V4"})," \u548c ",(0,s.jsx)(e.code,{children:"V6"})," \u6210\u5458\u90fd\u5173\u8054\u4e86 ",(0,s.jsx)(e.code,{children:"String"})," \u503c\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-PowerShell",children:'\nenum IpAddr {\n    V4(String),\n    V6(String),\n}\n\nlet home = IpAddr::V4(String::from("127.0.0.1"));\n\nlet loopback = IpAddr::V6(String::from("::1"));\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7528\u679a\u4e3e\u66ff\u4ee3\u7ed3\u6784\u4f53\u8fd8\u6709\u53e6\u4e00\u4e2a\u4f18\u52bf\uff1a\u6bcf\u4e2a\u6210\u5458\u53ef\u4ee5\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u548c\u6570\u91cf\u7684\u6570\u636e\u3002IPv4 \u7248\u672c\u7684 IP \u5730\u5740\u603b\u662f\u542b\u6709\u56db\u4e2a\u503c\u5728 0 \u548c 255 \u4e4b\u95f4\u7684\u6570\u5b57\u90e8\u5206\u3002\u5982\u679c\u6211\u4eec\u60f3\u8981\u5c06 ",(0,s.jsx)(e.code,{children:"V4"})," \u5730\u5740\u5b58\u50a8\u4e3a\u56db\u4e2a ",(0,s.jsx)(e.code,{children:"u8"})," \u503c\u800c ",(0,s.jsx)(e.code,{children:"V6"})," \u5730\u5740\u4ecd\u7136\u8868\u73b0\u4e3a\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"String"}),"\uff0c\u8fd9\u5c31\u4e0d\u80fd\u4f7f\u7528\u7ed3\u6784\u4f53\u4e86\u3002\u679a\u4e3e\u5219\u53ef\u4ee5\u8f7b\u6613\u5904\u7406\u7684\u8fd9\u4e2a\u60c5\u51b5\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'enum IpAddr {\n    V4(u8, u8, u8, u8),\n    V6(String),\n}\n\nlet home = IpAddr::V4(127, 0, 0, 1);\n\nlet loopback = IpAddr::V6(String::from("::1"));\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8fd9\u4e9b\u4ee3\u7801\u5c55\u793a\u4e86\u4f7f\u7528\u679a\u4e3e\u6765\u5b58\u50a8\u4e24\u79cd\u4e0d\u540c IP \u5730\u5740\u7684\u51e0\u79cd\u53ef\u80fd\u7684\u9009\u62e9\u3002\u7136\u800c\uff0c\u4e8b\u5b9e\u8bc1\u660e\u5b58\u50a8\u548c\u7f16\u7801 IP \u5730\u5740\u5b9e\u5728\u662f\u592a\u5e38\u89c1\u4e86\u4ee5\u81f4\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f00\u7bb1\u5373\u7528\u7684\u5b9a\u4e49\uff01\u8ba9\u6211\u4eec\u770b\u770b\u6807\u51c6\u5e93\u662f\u5982\u4f55\u5b9a\u4e49 ",(0,s.jsx)(e.code,{children:"IpAddr"})," \u7684\uff1a\u5b83\u6b63\u6709\u7740\u8ddf\u6211\u4eec\u5b9a\u4e49\u548c\u4f7f\u7528\u7684\u4e00\u6837\u7684\u679a\u4e3e\u548c\u6210\u5458\uff0c\u4e0d\u8fc7\u5b83\u5c06\u6210\u5458\u4e2d\u7684\u5730\u5740\u6570\u636e\u5d4c\u5165\u5230\u4e86\u4e24\u4e2a\u4e0d\u540c\u5f62\u5f0f\u7684\u7ed3\u6784\u4f53\u4e2d\uff0c\u5b83\u4eec\u5bf9\u4e0d\u540c\u7684\u6210\u5458\u7684\u5b9a\u4e49\u662f\u4e0d\u540c\u7684\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:"\nstruct Ipv4Addr {\n    // --snip--\n}\n\nstruct Ipv6Addr {\n    // --snip--\n}\n\nenum IpAddr {\n    V4(Ipv4Addr),\n    V6(Ipv6Addr),\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e9b\u4ee3\u7801\u5c55\u793a\u4e86\u53ef\u4ee5\u5c06\u4efb\u610f\u7c7b\u578b\u7684\u6570\u636e\u653e\u5165\u679a\u4e3e\u6210\u5458\u4e2d\uff1a\u4f8b\u5982\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u7c7b\u578b\u6216\u8005\u7ed3\u6784\u4f53\u3002\u751a\u81f3\u53ef\u4ee5\u5305\u542b\u53e6\u4e00\u4e2a\u679a\u4e3e\uff01\u53e6\u5916\uff0c\u6807\u51c6\u5e93\u4e2d\u7684\u7c7b\u578b\u901a\u5e38\u5e76\u4e0d\u6bd4\u4f60\u8bbe\u60f3\u51fa\u6765\u7684\u8981\u590d\u6742\u591a\u5c11\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6ce8\u610f\u867d\u7136\u6807\u51c6\u5e93\u4e2d\u5305\u542b\u4e00\u4e2a ",(0,s.jsx)(e.code,{children:"IpAddr"})," \u7684\u5b9a\u4e49\uff0c\u4ecd\u7136\u53ef\u4ee5\u521b\u5efa\u548c\u4f7f\u7528\u6211\u4eec\u81ea\u5df1\u7684\u5b9a\u4e49\u800c\u4e0d\u4f1a\u6709\u51b2\u7a81\uff0c\u56e0\u4e3a\u6211\u4eec\u5e76\u6ca1\u6709\u5c06\u6807\u51c6\u5e93\u4e2d\u7684\u5b9a\u4e49\u5f15\u5165\u4f5c\u7528\u57df\u3002\u7b2c\u4e03\u7ae0\u4f1a\u8bb2\u5230\u5982\u4f55\u5bfc\u5165\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:"enum Message {\n    Quit,//\u6ca1\u6709\u5173\u8054\u4efb\u4f55\u6570\u636e\n    Move { x: i32, y: i32 },//\u4e00\u4e2a\u533f\u540d\u7ed3\u6784\u4f53\n    Write(String),//\u5305\u542b\u5355\u72ec\u4e00\u4e2a String\n    ChangeColor(i32, i32, i32),//\n}\n\nstruct QuitMessage; // \u7c7b\u5355\u5143\u7ed3\u6784\u4f53\nstruct MoveMessage {\n    x: i32,\n    y: i32,\n}\nstruct WriteMessage(String); // \u5143\u7ec4\u7ed3\u6784\u4f53\nstruct ChangeColorMessage(i32, i32, i32); // \u5143\u7ec4\u7ed3\u6784\u4f53\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u8fd8\u6709\u53e6\u4e00\u4e2a\u76f8\u4f3c\u70b9\uff1a\u5c31\u50cf\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"impl"})," \u6765\u4e3a\u7ed3\u6784\u4f53\u5b9a\u4e49\u65b9\u6cd5\u90a3\u6837\uff0c\u4e5f\u53ef\u4ee5\u5728\u679a\u4e3e\u4e0a\u5b9a\u4e49\u65b9\u6cd5\u3002\u8fd9\u662f\u4e00\u4e2a\u5b9a\u4e49\u4e8e\u6211\u4eec ",(0,s.jsx)(e.code,{children:"Message"})," \u679a\u4e3e\u4e0a\u7684\u53eb\u505a ",(0,s.jsx)(e.code,{children:"call"})," \u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:'impl Message {\n    fn call(&self) {\n        // \u5728\u8fd9\u91cc\u5b9a\u4e49\u65b9\u6cd5\u4f53\n    }\n}\n\nlet m = Message::Write(String::from("hello"));\nm.call();\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u65b9\u6cd5\u4f53\u4f7f\u7528\u4e86 ",(0,s.jsx)(e.code,{children:"self"})," \u6765\u83b7\u53d6\u8c03\u7528\u65b9\u6cd5\u7684\u503c\u3002\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u503c\u4e3a ",(0,s.jsx)(e.code,{children:'Message::Write(String::from("hello"))'})," \u7684\u53d8\u91cf ",(0,s.jsx)(e.code,{children:"m"}),"\uff0c\u800c\u4e14\u8fd9\u5c31\u662f\u5f53 ",(0,s.jsx)(e.code,{children:"m.call()"})," \u8fd0\u884c\u65f6 ",(0,s.jsx)(e.code,{children:"call"})," \u65b9\u6cd5\u4e2d\u7684 ",(0,s.jsx)(e.code,{children:"self"})," \u7684\u503c\u3002"]})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var s=r(6540);const d={},l=s.createContext(d);function c(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:c(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);
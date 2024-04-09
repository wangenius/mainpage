"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[9197],{752:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=s(4848),r=s(8453);const i={},c="panic!",o={id:"lang/rust/\u9762\u5411\u5bf9\u8c61/\u9519\u8bef\u5904\u7406",title:"panic!",description:"panic \u53ef\u4ee5\u662f\u88ab\u52a8\u89e6\u53d1\u6216\u8005\u4e3b\u52a8\u89e6\u53d1\uff0c\u5982\u679c\u662f\u5b50\u7ebf\u7a0b\u89e6\u53d1\uff0c\u53ea\u4f1a\u7ec8\u6b62\u89e6\u53d1\u7684\u90a3\u4e2a\u7ebf\u7a0b\uff0c\u5176\u4ed6\u7a0b\u5e8f\u4e0d\u53d7\u5f71\u54cd",source:"@site/docs/lang/rust/\u9762\u5411\u5bf9\u8c61/\u9519\u8bef\u5904\u7406.md",sourceDirName:"lang/rust/\u9762\u5411\u5bf9\u8c61",slug:"/lang/rust/\u9762\u5411\u5bf9\u8c61/\u9519\u8bef\u5904\u7406",permalink:"/docs/lang/rust/\u9762\u5411\u5bf9\u8c61/\u9519\u8bef\u5904\u7406",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u9762\u5411\u5bf9\u8c61/\u9519\u8bef\u5904\u7406.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/docs/lang/rust/\u9762\u5411\u5bf9\u8c61/\u8bbe\u8ba1\u6a21\u5f0f"},next:{title:"IO",permalink:"/docs/lang/rust/std misc/IO"}},l={},d=[];function a(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"panic",children:"panic!"}),"\n",(0,t.jsx)(e.p,{children:"panic \u53ef\u4ee5\u662f\u88ab\u52a8\u89e6\u53d1\u6216\u8005\u4e3b\u52a8\u89e6\u53d1\uff0c\u5982\u679c\u662f\u5b50\u7ebf\u7a0b\u89e6\u53d1\uff0c\u53ea\u4f1a\u7ec8\u6b62\u89e6\u53d1\u7684\u90a3\u4e2a\u7ebf\u7a0b\uff0c\u5176\u4ed6\u7a0b\u5e8f\u4e0d\u53d7\u5f71\u54cd"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn main() {\n    panic!("crash and burn");//panic\uff01\u5b8f\n}\n'})}),"\n",(0,t.jsx)(e.h1,{id:"result",children:"Result"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Result"}),"\u679a\u4e3e\u7528\u4e8e\u5904\u7406\u51fd\u6570\u8fd4\u56de\u3002\u5728 Rust \u7f16\u7a0b\u8bed\u8a00\u4e2d\uff0c\u662f\u4e00\u79cd\u60ef\u4f8b\uff0c\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u53ef\u80fd\u4f1a\u5931\u8d25\uff0c\u90a3\u5b83\u5e94\u8be5\u8fd4\u56de Result \u7c7b\u578b\u800c\u4e0d\u662f\u76f4\u63a5\u8fd4\u56de\u503c\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'use std::fs::File;\nuse std::io;\nuse std::io::Read;\nfn main() {\n    _ = read_content();\n}\nfn read_content() ->Result<String, Box<dyn Error>> { // \u6ce8\u610fResult\u6709\u4e24\u4e2a\u6210\u5458Ok,Err,\u6210\u5458\u53ef\u4ee5\u643a\u5e26\u6570\u636e\uff0c\u6bd4\u5982\u8fd9\u4e2aString\u5c31\u662fOk\u7684\n    let mut f = File::open("test.txt")?;\n    let mut s = String::new();\n    f.read_to_string(&mut s)?;\n    Ok(s)\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53\u51fd\u6570\u8fd4\u56de\u503c\u662f Result \u65f6\uff0c\u51fd\u6570\u5185\u53ef\u4ee5\u4f7f\u7528\u5b8f",(0,t.jsx)(e.code,{children:"?"}),"\u6765\u5feb\u901f\u4f20\u64ad ",(0,t.jsx)(e.code,{children:"Err"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn run(config:&Config) -> Result<(), Box<dyn Error>> {\n    let content = fs::read_to_string(&config.file_path)?;// \u53d1\u751f\u9519\u8bef\u9a6c\u4e0a\u8fd4\u56de\n    print!("{},{}",config.query,content);\n    Ok(()) // \u51fd\u6570\u6267\u884c\u6b63\u786e\u6ca1\u6709\u8fd4\u56de\u503c\uff0c\u4f7f\u7528\u7a7a\u5143\u7ec4 ()\u5360\u4f4d\n}\n'})}),"\n",(0,t.jsx)(e.h1,{id:"unwrap",children:"unwrap"}),"\n",(0,t.jsxs)(e.p,{children:["\u53d1\u751f\u9519\u8bef\uff0c\u76f4\u63a5 ",(0,t.jsx)(e.code,{children:"panic"})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Result"}),"\u662f\u679a\u4e3e\uff0c\u8981\u8bfb\u53d6\u91cc\u9762\u7684\u6570\u636e\uff0c\u9700\u8981\u7528 ",(0,t.jsx)(e.code,{children:"match"}),"\u5904\u7406\uff0c\u4f46\u662f\u4e5f\u6709\u5feb\u901f\u7684\u65b9\u6cd5"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'use std::fs::File;\n\nfn main() {\n    let f = File::open("hello.txt").unwrap(); // \u5982\u679c\u6210\u529f\uff0c\u76f4\u63a5\u8fd4\u56deOk(T)\u5173\u8054\u7684\u503c\uff0c\u5982\u679c\u5931\u8d25\uff0c\u76f4\u63a5panic\n    let f = File::open("hello.txt").expect("Failed to open hello.txt");// \u548cunwarp\u4e00\u6837\uff0c\u4f46\u662f\u4f1a\u6253\u5370\u81ea\u5b9a\u4e49panic\u65e5\u5fd7\n    let f  = File::open("hello.txt").unwarp_or_else(\u95ed\u5305) // \u6210\u529f\u53d1\u6325Ok\u5173\u8054\u7684\u503c\uff0c\u5931\u8d25\u6267\u884c\u95ed\u5305\uff0c\u4e0d\u4f1aPanic\n}\n'})}),"\n",(0,t.jsx)(e.h1,{id:"option",children:"Option"}),"\n",(0,t.jsxs)(e.p,{children:["\u7528\u4e8e\u5904\u7406\u7a7a\u503c\uff0c\u5176\u4ed6\u8bed\u8a00\u4e00\u822c\u7528 ",(0,t.jsx)(e.code,{children:"null"}),"\u5904\u7406\u7a7a\u503c"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'enum Option<T> {\n    Some(T),\n    None,\n}\nlet maybe_value = Some(42); // \u5b9e\u4f8b\u5316Option\u5b9e\u4f8b\uff0c\u7ed1\u5b9a\u4e00\u4e2a\u503c\nlet value = maybe_value.unwrap_or_else(|| 0);// \u5982\u679c\u662fNone\u5c31\u8fd4\u56de0\nprintln!("{}", value);  // Prints 42\n'})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"unwrap_or_else"}),"\u5904\u7406 ",(0,t.jsx)(e.code,{children:"Result"}),"\uff0c",(0,t.jsx)(e.code,{children:"Option"}),"\uff0c\u6709\u4e00\u4e2a unwrap_or_else \u65b9\u6cd5\uff0c\u53c2\u6570\u662f\u4e00\u4e2a\u95ed\u5305\u51fd\u6570\uff0c\u5f53 Result \u662f Err \u6216\u8005 Option \u662f None \u65f6\uff0c\u4f1a\u8c03\u7528\u8fd9\u4e2a\u95ed\u5305\u3002",(0,t.jsx)(e.code,{children:"Option"})," \u7c7b\u578b\u5e94\u7528\u5e7f\u6cdb\u56e0\u4e3a\u5b83\u7f16\u7801\u4e86\u4e00\u4e2a\u975e\u5e38\u666e\u904d\u7684\u573a\u666f\uff0c\u5373\u4e00\u4e2a\u503c\u8981\u4e48\u6709\u503c\u8981\u4e48\u6ca1\u503c\u3002\u4ece\u7c7b\u578b\u7cfb\u7edf\u7684\u89d2\u5ea6\u6765\u8868\u8fbe\u8fd9\u4e2a\u6982\u5ff5\u5c31\u610f\u5473\u7740\u7f16\u8bd1\u5668\u9700\u8981\u68c0\u67e5\u662f\u5426\u5904\u7406\u4e86\u6240\u6709\u5e94\u8be5\u5904\u7406\u7684\u60c5\u51b5\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u5728\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u4e2d\u975e\u5e38\u5e38\u89c1\u7684 bug\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Option<T>"})," \u679a\u4e3e\u662f\u5982\u6b64\u6709\u7528\u4ee5\u81f3\u4e8e\u5b83\u751a\u81f3\u88ab\u5305\u542b\u5728\u4e86 ",(0,t.jsx)(e.code,{children:"prelude"}),"\u4e4b\u4e2d\uff0c\u4f60\u4e0d\u9700\u8981\u5c06\u5176\u663e\u5f0f\u5f15\u5165\u4f5c\u7528\u57df\u3002\u53e6\u5916\uff0c\u5b83\u7684\u6210\u5458\u4e5f\u662f\u5982\u6b64\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981 ",(0,t.jsx)(e.code,{children:"Option::"})," \u524d\u7f00\u6765\u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Some"})," \u548c ",(0,t.jsx)(e.code,{children:"None"}),"\u3002\u5373\u4fbf\u5982\u6b64 ",(0,t.jsx)(e.code,{children:"Option<T>"})," \u4e5f\u4ecd\u662f\u5e38\u89c4\u7684\u679a\u4e3e\uff0c",(0,t.jsx)(e.code,{children:"Some(T)"})," \u548c ",(0,t.jsx)(e.code,{children:"None"})," \u4ecd\u662f ",(0,t.jsx)(e.code,{children:"Option<T>"})," \u7684\u6210\u5458\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'let some_number = Some(5);\nlet some_string = Some("a string");\nlet absent_number: Option<i32> = None;//\u5982\u679c\u4f7f\u7528 `None` \u800c\u4e0d\u662f `Some`\uff0c\u9700\u8981\u544a\u8bc9 Rust `Option<T>` \u662f\u4ec0\u4e48\u7c7b\u578b\u7684\uff0c\u56e0\u4e3a\u7f16\u8bd1\u5668\u53ea\u901a\u8fc7 `None` \u503c\u65e0\u6cd5\u63a8\u65ad\u51fa `Some` \u6210\u5458\u4fdd\u5b58\u7684\u503c\u7684\u7c7b\u578b\u3002\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5f53\u6709\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:"Some"})," \u503c\u65f6\uff0c\u6211\u4eec\u5c31\u77e5\u9053\u5b58\u5728\u4e00\u4e2a\u503c\uff0c\u800c\u8fd9\u4e2a\u503c\u4fdd\u5b58\u5728 ",(0,t.jsx)(e.code,{children:"Some"})," \u4e2d\u3002\u5f53\u6709\u4e2a ",(0,t.jsx)(e.code,{children:"None"})," \u503c\u65f6\uff0c\u5728\u67d0\u79cd\u610f\u4e49\u4e0a\uff0c\u5b83\u8ddf\u7a7a\u503c\u5177\u6709\u76f8\u540c\u7684\u610f\u4e49\uff1a\u5e76\u6ca1\u6709\u4e00\u4e2a\u6709\u6548\u7684\u503c\u3002\u90a3\u4e48\uff0c",(0,t.jsx)(e.code,{children:"Option<T>"})," \u4e3a\u4ec0\u4e48\u5c31\u6bd4\u7a7a\u503c\u8981\u597d\u5462\uff1f"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7b80\u800c\u8a00\u4e4b\uff0c\u56e0\u4e3a ",(0,t.jsx)(e.code,{children:"Option<T>"})," \u548c ",(0,t.jsx)(e.code,{children:"T"}),"\uff08\u8fd9\u91cc ",(0,t.jsx)(e.code,{children:"T"})," \u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\uff09\u662f\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u7f16\u8bd1\u5668\u4e0d\u5141\u8bb8\u50cf\u4e00\u4e2a\u80af\u5b9a\u6709\u6548\u7684\u503c\u90a3\u6837\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Option<T>"}),"\u3002\u4f8b\u5982\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4e0d\u80fd\u7f16\u8bd1\uff0c\u56e0\u4e3a\u5b83\u5c1d\u8bd5\u5c06 ",(0,t.jsx)(e.code,{children:"Option<i8>"})," \u4e0e ",(0,t.jsx)(e.code,{children:"i8"})," \u76f8\u52a0\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:"let x: i8 = 5;\nlet y: Option<i8> = Some(5);\n\nlet sum = x + y;\n/**\nerror[E0277]: the trait bound `i8: std::ops::Add<std::option::Option<i8>>` is\nnot satisfied\n --\x3e\n  |\n5 |     let sum = x + y;\n  |                 ^ no implementation for `i8 + std::option::Option<i8>`\n  |\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5f88\u597d\uff01\u4e8b\u5b9e\u4e0a\uff0c\u9519\u8bef\u4fe1\u606f\u610f\u5473\u7740 Rust \u4e0d\u77e5\u9053\u8be5\u5982\u4f55\u5c06 ",(0,t.jsx)(e.code,{children:"Option<i8>"})," \u4e0e ",(0,t.jsx)(e.code,{children:"i8"})," \u76f8\u52a0\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u7c7b\u578b\u4e0d\u540c\u3002\u5f53\u5728 Rust \u4e2d\u62e5\u6709\u4e00\u4e2a\u50cf ",(0,t.jsx)(e.code,{children:"i8"})," \u8fd9\u6837\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u7f16\u8bd1\u5668\u786e\u4fdd\u5b83\u603b\u662f\u6709\u4e00\u4e2a\u6709\u6548\u7684\u503c\u3002\u6211\u4eec\u53ef\u4ee5\u81ea\u4fe1\u4f7f\u7528\u800c\u65e0\u9700\u505a\u7a7a\u503c\u68c0\u67e5\u3002\u53ea\u6709\u5f53\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Option<i8>"}),"\uff08\u6216\u8005\u4efb\u4f55\u7528\u5230\u7684\u7c7b\u578b\uff09\u7684\u65f6\u5019\u9700\u8981\u62c5\u5fc3\u53ef\u80fd\u6ca1\u6709\u503c\uff0c\u800c\u7f16\u8bd1\u5668\u4f1a\u786e\u4fdd\u6211\u4eec\u5728\u4f7f\u7528\u503c\u4e4b\u524d\u5904\u7406\u4e86\u4e3a\u7a7a\u7684\u60c5\u51b5\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u603b\u7684\u6765\u8bf4\uff0c\u4e3a\u4e86\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"Option<T>"})," \u503c\uff0c\u9700\u8981\u7f16\u5199\u5904\u7406\u6bcf\u4e2a\u6210\u5458\u7684\u4ee3\u7801\u3002\u4f60\u60f3\u8981\u4e00\u4e9b\u4ee3\u7801\u53ea\u5f53\u62e5\u6709 ",(0,t.jsx)(e.code,{children:"Some(T)"})," \u503c\u65f6\u8fd0\u884c\uff0c\u5141\u8bb8\u8fd9\u4e9b\u4ee3\u7801\u4f7f\u7528\u5176\u4e2d\u7684 ",(0,t.jsx)(e.code,{children:"T"}),"\u3002\u4e5f\u5e0c\u671b\u4e00\u4e9b\u4ee3\u7801\u5728\u503c\u4e3a ",(0,t.jsx)(e.code,{children:"None"})," \u65f6\u8fd0\u884c\uff0c\u8fd9\u4e9b\u4ee3\u7801\u5e76\u6ca1\u6709\u4e00\u4e2a\u53ef\u7528\u7684 ",(0,t.jsx)(e.code,{children:"T"})," \u503c\u3002",(0,t.jsx)(e.code,{children:"match"})," \u8868\u8fbe\u5f0f\u5c31\u662f\u8fd9\u4e48\u4e00\u4e2a\u5904\u7406\u679a\u4e3e\u7684\u63a7\u5236\u6d41\u7ed3\u6784\uff1a\u5b83\u4f1a\u6839\u636e\u679a\u4e3e\u7684\u6210\u5458\u8fd0\u884c\u4e0d\u540c\u7684\u4ee3\u7801\uff0c\u8fd9\u4e9b\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528\u5339\u914d\u5230\u7684\u503c\u4e2d\u7684\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u679a\u4e3e\u7c7b\u578b\u662f\u4e00\u4e2a\u7c7b\u578b\uff0c\u5b83\u4f1a\u5305\u542b\u6240\u6709\u53ef\u80fd\u7684\u679a\u4e3e\u6210\u5458\uff0c\u800c\u679a\u4e3e\u503c\u662f\u8be5\u7c7b\u578b\u4e2d\u7684\u5177\u4f53\u67d0\u4e2a\u6210\u5458\uff0c\u7c7b\u4f3c C \u7684 Union \u7c7b\u578b\uff0c\u91cc\u9762\u7684\u6210\u5458\u53ef\u4ee5\u662f\u4e0d\u540c\u7684\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'enum PokerCard { // \u5b9a\u4e49\u679a\u4e3e\u7c7b\u578b\uff0c\u91cc\u9762\u67094\u4e2a\u6210\u5458\n    Clubs(u8), // \u8fd9\u4e2a\u6210\u5458\u5173\u8054\u4e00\u4e2au8\u7c7b\u578b\u7684\u503c\n    Spades(u8),\n    Diamonds(char), // \u8fd9\u4e2a\u6210\u5458\u5173\u8054\u4e00\u4e2achar\u7c7b\u578b\u7684\u503c\n    Hearts(char),\n}\nfn main() {\n   let c1 = PokerCard::Spades(5); // \u5b9e\u4f8b\u5316\u4e00\u4e2a\u679a\u4e3e\u6210\u5458\uff0c\u5e76\u4e14\u5173\u80545\n   let c2 = PokerCard::Diamonds(\'A\');\n   print_suit(c1); // \u5904\u7406\u679a\u4e3e\u53d8\u91cf\n   print_suit(c2);\n}\nfn print_suit(p: PokerCard) { // \u4f20\u5165\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\u7684\u53d8\u91cf\n    match p {\n        PokerCard::Clubs(value)=> println!("Clubs: {}", value), // \u5f97\u5230\u679a\u4e3e\u6210\u5458\u5173\u8054\u7684\u503c\n        PokerCard::Spades(value)=> println!("Spades: {}", value),\n        PokerCard::Diamonds(value)=> println!("Diamonds: {}", value),\n        PokerCard::Hearts(value)=> println!("Hearts: {}", value),\n   }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>o});var t=s(6540);const r={},i=t.createContext(r);function c(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
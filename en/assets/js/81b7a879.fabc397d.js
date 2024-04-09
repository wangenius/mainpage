"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[1128],{9223:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(4848),i=t(8453);const r={title:"\u5b8f",sidebar_position:1,slug:"\u5b8f"},l="\u5b8f",a={id:"lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f",title:"\u5b8f",description:"Rust \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u5b8f\u7cfb\u7edf\uff0c\u5141\u8bb8\u5143\u7f16\u7a0b\u3002\u6b63\u5982\u60a8\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\u6240\u770b\u5230\u7684\uff0c\u5b8f\u770b\u8d77\u6765\u50cf\u51fd\u6570\uff0c\u53ea\u662f\u5b83\u4eec\u7684\u540d\u79f0\u4ee5 bang ! \u7ed3\u5c3e\uff0c\u4f46\u5b8f\u4e0d\u662f\u751f\u6210\u51fd\u6570\u8c03\u7528\uff0c\u800c\u662f\u6269\u5c55\u4e3a\u4e0e\u5176\u4f59\u90e8\u5206\u4e00\u8d77\u7f16\u8bd1\u7684\u6e90\u4ee3\u7801\u7684\u7a0b\u5e8f\u3002\u7136\u800c\uff0c\u4e0e C \u548c\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684\u5b8f\u4e0d\u540c\uff0cRust \u5b8f\u88ab\u6269\u5c55\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u9884\u5904\u7406\uff0c\u56e0\u6b64\u60a8\u4e0d\u4f1a\u9047\u5230\u610f\u5916\u7684\u4f18\u5148\u7ea7\u9519\u8bef\u3002",source:"@site/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f.mdx",sourceDirName:"lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1",slug:"/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f",permalink:"/en/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5b8f.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u5b8f",sidebar_position:1,slug:"\u5b8f"},sidebar:"rust",previous:{title:"crate",permalink:"/en/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/crate"},next:{title:"\u5c5e\u6027",permalink:"/en/docs/lang/rust/\u6a21\u5757\u548c\u7f16\u8bd1/\u5c5e\u6027"}},c={},o=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4ee3\u53f7",id:"\u4ee3\u53f7",level:3},{value:"\u91cd\u8f7d",id:"\u91cd\u8f7d",level:3},{value:"\u91cd\u590d",id:"\u91cd\u590d",level:3},{value:"Don&#39;t repeat yourself",id:"dont-repeat-yourself",level:2},{value:"\u9886\u57df\u7279\u5b9a\u8bed\u8a00 (DSL)",id:"\u9886\u57df\u7279\u5b9a\u8bed\u8a00-dsl",level:2},{value:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3",id:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u5b8f",children:"\u5b8f"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f3a\u5927\u7684\u5b8f\u7cfb\u7edf\uff0c\u5141\u8bb8\u5143\u7f16\u7a0b\u3002\u6b63\u5982\u60a8\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\u6240\u770b\u5230\u7684\uff0c\u5b8f\u770b\u8d77\u6765\u50cf\u51fd\u6570\uff0c\u53ea\u662f\u5b83\u4eec\u7684\u540d\u79f0\u4ee5 bang ! \u7ed3\u5c3e\uff0c\u4f46\u5b8f\u4e0d\u662f\u751f\u6210\u51fd\u6570\u8c03\u7528\uff0c\u800c\u662f\u6269\u5c55\u4e3a\u4e0e\u5176\u4f59\u90e8\u5206\u4e00\u8d77\u7f16\u8bd1\u7684\u6e90\u4ee3\u7801\u7684\u7a0b\u5e8f\u3002\u7136\u800c\uff0c\u4e0e C \u548c\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684\u5b8f\u4e0d\u540c\uff0cRust \u5b8f\u88ab\u6269\u5c55\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff0c\u800c\u4e0d\u662f\u5b57\u7b26\u4e32\u9884\u5904\u7406\uff0c\u56e0\u6b64\u60a8\u4e0d\u4f1a\u9047\u5230\u610f\u5916\u7684\u4f18\u5148\u7ea7\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5b8f\u662f\u4f7f\u7528 macro_rules! \u5b8f\u521b\u5efa\u7684\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'// This is a simple macro named `say_hello`.\nmacro_rules! say_hello {\n    // `()` indicates that the macro takes no argument.\n    () => {\n        // The macro will expand into the contents of this block.\n        println!("Hello!")\n    };\n}\n\nfn main() {\n    // This call will expand into `println!("Hello")`\n    say_hello!()\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u90a3\u4e48\u4e3a\u4ec0\u4e48\u5b8f\u6709\u7528\u5462\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u8981\u91cd\u590d\u81ea\u5df1\u3002\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5728\u591a\u4e2a\u5730\u65b9\u4f7f\u7528\u4e0d\u540c\u7c7b\u578b\u7684\u7c7b\u4f3c\u529f\u80fd\u3002\u901a\u5e38\uff0c\u7f16\u5199\u5b8f\u662f\u907f\u514d\u91cd\u590d\u4ee3\u7801\u7684\u6709\u6548\u65b9\u6cd5\u3002 \uff08\u7a0d\u540e\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u7279\u5b9a\u9886\u57df\u7684\u8bed\u8a00\u3002\u5b8f\u5141\u8bb8\u60a8\u4e3a\u7279\u5b9a\u76ee\u7684\u5b9a\u4e49\u7279\u6b8a\u8bed\u6cd5\u3002 \uff08\u7a0d\u540e\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3\u3002\u6709\u65f6\u60a8\u60f3\u8981\u5b9a\u4e49\u4e00\u4e2a\u5e26\u6709\u53ef\u53d8\u6570\u91cf\u53c2\u6570\u7684\u63a5\u53e3\u3002\u4e00\u4e2a\u793a\u4f8b\u662f println! \uff0c\u5b83\u53ef\u4ee5\u91c7\u7528\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u683c\u5f0f\u5b57\u7b26\u4e32\u3002 \uff08\u7a0d\u540e\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\uff09"}),"\n",(0,s.jsx)(e.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(e.h3,{id:"\u4ee3\u53f7",children:"\u4ee3\u53f7"}),"\n",(0,s.jsx)(e.p,{children:"\u5b8f\u7684\u53c2\u6570\u4ee5\u7f8e\u5143\u7b26\u53f7 $ \u4e3a\u524d\u7f00\uff0c\u5e76\u7528\u6307\u793a\u7b26\u6ce8\u91ca\u7c7b\u578b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'macro_rules! create_function {\n    // This macro takes an argument of designator `ident` and\n    // creates a function named `$func_name`.\n    // The `ident` designator is used for variable/function names.\n    ($func_name:ident) => {\n        fn $func_name() {\n            // The `stringify!` macro converts an `ident` into a string.\n            println!("You called {:?}()",\n                     stringify!($func_name));\n        }\n    };\n}\n\n// Create functions named `foo` and `bar` with the above macro.\ncreate_function!(foo);\ncreate_function!(bar);\n\nmacro_rules! print_result {\n    // This macro takes an expression of type `expr` and prints\n    // it as a string along with its result.\n    // The `expr` designator is used for expressions.\n    ($expression:expr) => {\n        // `stringify!` will convert the expression *as it is* into a string.\n        println!("{:?} = {:?}",\n                 stringify!($expression),\n                 $expression);\n    };\n}\n\nfn main() {\n    foo();\n    bar();\n\n    print_result!(1u32 + 1);\n\n    // Recall that blocks are expressions too!\n    print_result!({\n        let x = 1u32;\n\n        x * x + 2 * x - 1\n    });\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e9b\u662f\u4e00\u4e9b\u53ef\u7528\u7684\u6307\u793a\u7b26\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"block"}),"\n",(0,s.jsx)(e.li,{children:"expr \u7528\u4e8e\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsx)(e.li,{children:"ident \u7528\u4e8e\u53d8\u91cf/\u51fd\u6570\u540d\u79f0"}),"\n",(0,s.jsx)(e.li,{children:"item"}),"\n",(0,s.jsx)(e.li,{children:"literal \u7528\u4e8e\u6587\u5b57\u5e38\u91cf"}),"\n",(0,s.jsx)(e.li,{children:"pat \uff08\u6a21\u5f0f\uff09"}),"\n",(0,s.jsx)(e.li,{children:"path"}),"\n",(0,s.jsx)(e.li,{children:"stmt \uff08\u58f0\u660e\uff09"}),"\n",(0,s.jsx)(e.li,{children:"tt \uff08\u4ee4\u724c\u6811\uff09"}),"\n",(0,s.jsx)(e.li,{children:"ty \uff08\u7c7b\u578b\uff09"}),"\n",(0,s.jsx)(e.li,{children:"vis \uff08\u53ef\u89c1\u6027\u9650\u5b9a\u7b26\uff09"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u5173\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u9605 Rust \u53c2\u8003\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u91cd\u8f7d",children:"\u91cd\u8f7d"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u91cd\u8f7d\u5b8f\u4ee5\u63a5\u53d7\u4e0d\u540c\u7684\u53c2\u6570\u7ec4\u5408\u3002\u5728\u8fd9\u65b9\u9762\uff0c macro_rules! \u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e\u5339\u914d\u5757\u7c7b\u4f3c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'// `test!` will compare `$left` and `$right`\n// in different ways depending on how you invoke it:\nmacro_rules! test {\n    // Arguments don\'t need to be separated by a comma.\n    // Any template can be used!\n    ($left:expr; and $right:expr) => {\n        println!("{:?} and {:?} is {:?}",\n                 stringify!($left),\n                 stringify!($right),\n                 $left && $right)\n    };\n    // ^ each arm must end with a semicolon.\n    ($left:expr; or $right:expr) => {\n        println!("{:?} or {:?} is {:?}",\n                 stringify!($left),\n                 stringify!($right),\n                 $left || $right)\n    };\n}\n\nfn main() {\n    test!(1i32 + 1 == 2i32; and 2i32 * 2 == 4i32);\n    test!(true; or false);\n}\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u91cd\u590d",children:"\u91cd\u590d"}),"\n",(0,s.jsx)(e.p,{children:"\u5b8f\u53ef\u4ee5\u5728\u53c2\u6570\u5217\u8868\u4e2d\u4f7f\u7528 + \u6765\u6307\u793a\u53c2\u6570\u53ef\u4ee5\u81f3\u5c11\u91cd\u590d\u4e00\u6b21\uff0c\u6216\u8005\u4f7f\u7528 * \u6765\u6307\u793a\u53c2\u6570\u53ef\u4ee5\u91cd\u590d\u96f6\u6b21\u6216\u591a\u6b21\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u7528 ",(0,s.jsx)(e.code,{children:"$(...)"}),",",(0,s.jsx)(e.code,{children:"+"})," \u5305\u56f4\u5339\u914d\u5668\u5c06\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u53e6\u8bf7\u6ce8\u610f\uff0c\u6700\u540e\u4e00\u79cd\u60c5\u51b5\u4e0b\u5206\u53f7\u662f\u53ef\u9009\u7684\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'// `find_min!` will calculate the minimum of any number of arguments.\nmacro_rules! find_min {\n    // Base case:\n    ($x:expr) => ($x);\n    // `$x` followed by at least one `$y,`\n    ($x:expr, $($y:expr),+) => (\n        // Call `find_min!` on the tail `$y`\n        std::cmp::min($x, find_min!($($y),+))\n    )\n}\n\nfn main() {\n    println!("{}", find_min!(1));\n    println!("{}", find_min!(1 + 2, 2));\n    println!("{}", find_min!(5, 2 * 3, 4));\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"dont-repeat-yourself",children:"Don't repeat yourself"}),"\n",(0,s.jsxs)(e.p,{children:["\u5b8f\u5141\u8bb8\u901a\u8fc7\u5206\u89e3\u51fd\u6570\u548c/\u6216\u6d4b\u8bd5\u5957\u4ef6\u7684\u516c\u5171\u90e8\u5206\u6765\u7f16\u5199 DRY \u4ee3\u7801\u3002\u4ee5\u4e0b\u662f\u5728 ",(0,s.jsx)(e.code,{children:"Vec<T>"})," \u4e0a\u5b9e\u73b0\u548c\u6d4b\u8bd5 += \u3001 *= \u548c -= \u8fd0\u7b97\u7b26\u7684\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'use std::ops::{Add, Mul, Sub};\n\nmacro_rules! assert_equal_len {\n    // The `tt` (token tree) designator is used for\n    // operators and tokens.\n    ($a:expr, $b:expr, $func:ident, $op:tt) => {\n        assert!($a.len() == $b.len(),\n                "{:?}: dimension mismatch: {:?} {:?} {:?}",\n                stringify!($func),\n                ($a.len(),),\n                stringify!($op),\n                ($b.len(),));\n    };\n}\n\nmacro_rules! op {\n    ($func:ident, $bound:ident, $op:tt, $method:ident) => {\n        fn $func<T: $bound<T, Output=T> + Copy>(xs: &mut Vec<T>, ys: &Vec<T>) {\n            assert_equal_len!(xs, ys, $func, $op);\n\n            for (x, y) in xs.iter_mut().zip(ys.iter()) {\n                *x = $bound::$method(*x, *y);\n                // *x = x.$method(*y);\n            }\n        }\n    };\n}\n\n// Implement `add_assign`, `mul_assign`, and `sub_assign` functions.\nop!(add_assign, Add, +=, add);\nop!(mul_assign, Mul, *=, mul);\nop!(sub_assign, Sub, -=, sub);\n\nmod test {\n    use std::iter;\n    macro_rules! test {\n        ($func:ident, $x:expr, $y:expr, $z:expr) => {\n            #[test]\n            fn $func() {\n                for size in 0usize..10 {\n                    let mut x: Vec<_> = iter::repeat($x).take(size).collect();\n                    let y: Vec<_> = iter::repeat($y).take(size).collect();\n                    let z: Vec<_> = iter::repeat($z).take(size).collect();\n\n                    super::$func(&mut x, &y);\n\n                    assert_eq!(x, z);\n                }\n            }\n        };\n    }\n\n    // Test `add_assign`, `mul_assign`, and `sub_assign`.\n    test!(add_assign, 1u32, 2u32, 3u32);\n    test!(mul_assign, 2u32, 3u32, 6u32);\n    test!(sub_assign, 3u32, 2u32, 1u32);\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",metastring:'title="output"',children:"$ rustc --test dry.rs && ./dry\nrunning 3 tests\ntest test::mul_assign ... ok\ntest test::add_assign ... ok\ntest test::sub_assign ... ok\n\ntest result: ok. 3 passed; 0 failed; 0 ignored; 0 measured\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u9886\u57df\u7279\u5b9a\u8bed\u8a00-dsl",children:"\u9886\u57df\u7279\u5b9a\u8bed\u8a00 (DSL)"}),"\n",(0,s.jsx)(e.p,{children:"DSL \u662f\u5d4c\u5165 Rust \u5b8f\u4e2d\u7684\u4e00\u79cd\u8ff7\u4f60\u201c\u8bed\u8a00\u201d\u3002\u5b83\u662f\u5b8c\u5168\u6709\u6548\u7684 Rust\uff0c\u56e0\u4e3a\u5b8f\u7cfb\u7edf\u6269\u5c55\u4e3a\u6b63\u5e38\u7684 Rust \u7ed3\u6784\uff0c\u4f46\u5b83\u770b\u8d77\u6765\u50cf\u4e00\u79cd\u5c0f\u8bed\u8a00\u3002\u8fd9\u5141\u8bb8\u60a8\u4e3a\u67d0\u4e9b\u7279\u6b8a\u529f\u80fd\uff08\u5728\u8fb9\u754c\u5185\uff09\u5b9a\u4e49\u7b80\u6d01\u6216\u76f4\u89c2\u7684\u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u60f3\u5b9a\u4e49\u4e00\u4e2a\u5c0f\u7684\u8ba1\u7b97\u5668 API\u3002\u6211\u60f3\u63d0\u4f9b\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5e76\u5c06\u8f93\u51fa\u6253\u5370\u5230\u63a7\u5236\u53f0\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'macro_rules! calculate {\n    (eval $e:expr) => {\n        {\n            let val: usize = $e; // Force types to be unsigned integers\n            println!("{} = {}", stringify!{$e}, val);\n        }\n    };\n}\n\nfn main() {\n    calculate! {\n        eval 1 + 2 // hehehe `eval` is _not_ a Rust keyword!\n    }\n\n    calculate! {\n        eval (1 + 2) * (3 / 4)\n    }\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",metastring:'title="output"',children:"1 + 2 = 3\n(1 + 2) * (3 / 4) = 0\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u4f46\u5df2\u7ecf\u5f00\u53d1\u4e86\u66f4\u590d\u6742\u7684\u63a5\u53e3\uff0c\u4f8b\u5982 lazy_static \u6216 clap \u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u8bf7\u6ce8\u610f\u5b8f\u4e2d\u7684\u4e24\u5bf9\u5927\u62ec\u53f7\u3002\u9664\u4e86 () \u6216 [] \u4e4b\u5916\uff0c\u5916\u90e8\u7684\u4e5f\u662f macro_rules! \u8bed\u6cd5\u7684\u4e00\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3",children:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3"}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u53d8\u53c2\u6570\u63a5\u53e3\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c println! \u53ef\u4ee5\u91c7\u7528\u4efb\u610f\u6570\u91cf\u7684\u53c2\u6570\uff0c\u7531\u683c\u5f0f\u5b57\u7b26\u4e32\u786e\u5b9a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5c06\u4e0a\u4e00\u8282\u4e2d\u7684 calculate! \u5b8f\u6269\u5c55\u4e3a\u53ef\u53d8\u53c2\u6570\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'macro_rules! calculate {\n    // The pattern for a single `eval`\n    (eval $e:expr) => {\n        {\n            let val: usize = $e; // Force types to be integers\n            println!("{} = {}", stringify!{$e}, val);\n        }\n    };\n\n    // Decompose multiple `eval`s recursively\n    (eval $e:expr, $(eval $es:expr),+) => {{\n        calculate! { eval $e }\n        calculate! { $(eval $es),+ }\n    }};\n}\n\nfn main() {\n    calculate! { // Look ma! Variadic `calculate!`!\n        eval 1 + 2,\n        eval 3 + 4,\n        eval (2 * 3) + 1\n    }\n}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",metastring:'title="output"',children:"1 + 2 = 3\n3 + 4 = 7\n(2 * 3) + 1 = 7\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>a});var s=t(6540);const i={},r=s.createContext(i);function l(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[7629],{2851:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var t=r(4848),s=r(8453);const i={},a=void 0,l={id:"lang/rust/\u7279\u5f81/\u7279\u5f81",title:"\u7279\u5f81",description:"\u7c7b\u4f3c\u4e8eOOP\u7684 interface {}, \u5b9a\u4e49\u4e86\u4e00\u7ec4\u53ef\u4ee5\u88ab\u5171\u4eab\u7684\u884c\u4e3a\uff0c\u53ea\u8981\u5b9e\u73b0\u4e86\u7279\u5f81\uff0c\u4f60\u5c31\u80fd\u4f7f\u7528\u8fd9\u7ec4\u884c\u4e3a",source:"@site/docs/lang/rust/\u7279\u5f81/\u7279\u5f81.md",sourceDirName:"lang/rust/\u7279\u5f81",slug:"/lang/rust/\u7279\u5f81/",permalink:"/en/docs/lang/rust/\u7279\u5f81/",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/rust/\u7279\u5f81/\u7279\u5f81.md",tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u8fd0\u884c\u6d4b\u8bd5",permalink:"/en/docs/lang/rust/\u6d4b\u8bd5/\u8fd0\u884c\u6d4b\u8bd5"},next:{title:"\u6ce8\u89e3",permalink:"/en/docs/lang/rust/\u7279\u5f81/\u6ce8\u89e3"}},c={},o=[{value:"Trait \u7684\u5173\u8054\u7c7b\u578b",id:"trait-\u7684\u5173\u8054\u7c7b\u578b",level:2},{value:"\u5b9e\u73b0trait",id:"\u5b9e\u73b0trait",level:2},{value:"trait \u7684\u5b64\u513f\u89c4\u5219",id:"trait-\u7684\u5b64\u513f\u89c4\u5219",level:6},{value:"trait \u7684\u9ed8\u8ba4\u5b9e\u73b0",id:"trait-\u7684\u9ed8\u8ba4\u5b9e\u73b0",level:6},{value:"\u7279\u5f81\u7ea6\u675f (trait bound(\u7ed1\u5b9a))",id:"\u7279\u5f81\u7ea6\u675f-trait-bound\u7ed1\u5b9a",level:6},{value:"Trait \u5bf9\u8c61",id:"trait-\u5bf9\u8c61",level:5}];function d(n){const e={code:"code",h2:"h2",h5:"h5",h6:"h6",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u7c7b\u4f3c\u4e8eOOP\u7684 interface ",", \u5b9a\u4e49\u4e86\u4e00\u7ec4\u53ef\u4ee5\u88ab\u5171\u4eab\u7684\u884c\u4e3a\uff0c\u53ea\u8981\u5b9e\u73b0\u4e86\u7279\u5f81\uff0c\u4f60\u5c31\u80fd\u4f7f\u7528\u8fd9\u7ec4\u884c\u4e3a"]}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u4e0d\u540c\u7684\u7c7b\u578b\u5177\u6709\u76f8\u540c\u7684\u884c\u4e3a\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u7279\u5f81\uff0c\u7136\u540e\u4e3a\u8fd9\u4e9b\u7c7b\u578b\u5b9e\u73b0\u8be5\u7279\u5f81\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5b9a\u4e49 Trait"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:"pub trait Person{\n  fn say(&self) -> String;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"trait-\u7684\u5173\u8054\u7c7b\u578b",children:"Trait \u7684\u5173\u8054\u7c7b\u578b"}),"\n",(0,t.jsx)(e.p,{children:"trait \u9664\u4e86\u53ef\u4ee5\u5b9a\u4e49\u65b9\u6cd5\uff0c\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u7c7b\u578b\uff0c\u5b9e\u73b0 Trait \u7279\u5f81\u65f6\uff0c\u4e5f\u9700\u8981\u5b9e\u73b0\u5173\u8054\u7c7b\u578b\uff0c\u50cf\u6cdb\u578b\u7684 T, \u9700\u8981\u6307\u660e\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'pub struct Puppy;\ntrait Animal {\n    type Baby; // \u5173\u8054\u7c7b\u578b\n    fn have_baby(&self) ->Self::Baby;\n}\nimpl Animal for Dog {\n    type Baby = Puppy; // \u786e\u8ba4\u5173\u8054\u7c7b\u578b\n    fn have_baby(&self) -> Self::Baby {\n        println!("A puppy is born.");\n        Puppy\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5b9e\u73b0trait",children:"\u5b9e\u73b0trait"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'struct User {\n    id:i32,\n    name:String,\n}\n// \u5b9e\u73b0trait\nimpl Person for User {\n    fn say(&self)->String{\n        format!("id is {}, name is {}",self.id, self.name)\n    }\n}\n'})}),"\n",(0,t.jsx)(e.h6,{id:"trait-\u7684\u5b64\u513f\u89c4\u5219",children:"trait \u7684\u5b64\u513f\u89c4\u5219"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u5982\u679c\u4f60\u60f3\u8981\u4e3a\u7c7b\u578b"})," ",(0,t.jsx)(e.code,{children:"A"})," ",(0,t.jsx)(e.strong,{children:"\u5b9e\u73b0\u7279\u5f81"})," ",(0,t.jsx)(e.code,{children:"T"}),(0,t.jsx)(e.strong,{children:"\uff0c\u90a3\u4e48"})," ",(0,t.jsx)(e.code,{children:"A"})," ",(0,t.jsx)(e.strong,{children:"\u6216\u8005"})," ",(0,t.jsx)(e.code,{children:"T"})," ",(0,t.jsx)(e.strong,{children:"\u81f3\u5c11\u6709\u4e00\u4e2a\u662f\u5728\u5f53\u524d\u4f5c\u7528\u57df \u4e2d\u5b9a\u4e49\u7684\uff01"})]}),"\n",(0,t.jsx)(e.h6,{id:"trait-\u7684\u9ed8\u8ba4\u5b9e\u73b0",children:"trait \u7684\u9ed8\u8ba4\u5b9e\u73b0"}),"\n",(0,t.jsxs)(e.p,{children:["\u5b9a\u4e49\u5177\u6709",(0,t.jsx)(e.strong,{children:"\u9ed8\u8ba4\u5b9e\u73b0"}),"\u7684\u65b9\u6cd5\uff0c\u8fd9\u6837\u5176\u5b83\u7c7b\u578b\u65e0\u9700\u518d\u5b9e\u73b0\u8be5\u65b9\u6cd5\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u9009\u62e9\u91cd\u8f7d\u8be5\u65b9\u6cd5"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'pub trait Person {\n    fn author(&self)->String;\n    fn say(&self) { // \u6709\u5177\u4f53\u7684\u5b9e\u73b0\uff0c\u5176\u4ed6\u7c7b\u578b\u53ef\u4ee5\u4e0d\u5b9e\u73b0\u6216\u8005\u91cd\u8f7d\u8fd9\u4e2a\u65b9\u6cd5\n        print!("{} is saying", self.author());\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"trait \u4f5c\u4e3a\u53c2\u6570\u4f7f\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn notify(item: &impl Person) { // \u53c2\u6570\u662ftrait, \u5199\u6cd5\u5c31\u662f impl trait\n    item.say();\n}\nfn notify2(item: &(impl Person+Display) { // \u591a\u91cd\u7ea6\u675f\uff0c\u53c2\u6570\u5fc5\u987b\u5b9e\u73b0Person\u548cDisplay\u7279\u5f81\n    item.say();\n}\nfn main() {\n    let u1 = User{name:String::from("aa")};\n    notify(&u1)\n}\n'})}),"\n",(0,t.jsx)(e.h6,{id:"\u7279\u5f81\u7ea6\u675f-trait-bound\u7ed1\u5b9a",children:"\u7279\u5f81\u7ea6\u675f (trait bound(\u7ed1\u5b9a))"}),"\n",(0,t.jsx)(e.p,{children:"trait \u4f5c\u4e3a\u53c2\u6570\u4f7f\u7528\uff0c\u6211\u4eec\u4f7f\u7528 impl trait \u5176\u5b9e\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6\uff0c\u672c\u8d28\u662f\u8fd9\u6837\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:"fn notify3<T: Person>(user:&T){ // \u5bf9T\u7c7b\u578b\uff0c\u5fc5\u987b\u5b9e\u73b0Person\u7279\u5f81\u8fdb\u884c\u9650\u5236\uff0cT: Person\u5c31\u662f\u7279\u5f81\u7ea6\u675f\n    user.say();\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u591a\u91cd\u7ea6\u675f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:"fn notify3<T: Person+Display>(user:&T){ // \u5bf9T\u7c7b\u578b\uff0c\u5fc5\u987b\u5b9e\u73b0Person\u7279\u5f81\u8fdb\u884c\u9650\u5236\uff0cT: Person\u5c31\u662f\u7279\u5f81\u7ea6\u675f\n    user.say();\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u51fd\u6570\u8fd4\u56de\u4e2d\u7684 impl Trait\n\u53ef\u4ee5\u901a\u8fc7 impl Trait \u6765\u8bf4\u660e\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de\u4e86\u4e00\u4e2a\u7c7b\u578b\uff0c\u8be5\u7c7b\u578b\u5b9e\u73b0\u4e86\u67d0\u4e2a\u7279\u5f81\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4f46\u662f\u8fd9\u79cd\u5199\u6cd5\u6709\u4e2a\u7f3a\u70b9\uff0c\u53ea\u53ef\u4ee5\u8fd4\u56de\u4e00\u79cd\u5177\u4f53\u7684\u7c7b\u578b\uff0c\u8fd9\u79cd\u7c7b\u578b\u5b9e\u73b0\u4e86 Person trait"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn createp(n:&str)->impl Person{\n    User{\n        name:String::from(n)\n    }\n}\nfn main() {\n    let u1 = createp("aa");\n    let u2 = createp("bb");\n}\n'})}),"\n",(0,t.jsx)(e.h5,{id:"trait-\u5bf9\u8c61",children:"Trait \u5bf9\u8c61"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0a\u9762 User \u5b9e\u73b0\u4e86 Person, \u5982\u679c\u53c8\u6709\u4e00\u4e2a Child \u5b9e\u73b0\u4e86 Person."}),"\n",(0,t.jsx)(e.p,{children:"Trait \u5bf9\u8c61\u6307\u5411\u5b9e\u73b0\u4e86 Person \u7279\u5f81\u7684\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u4e5f\u5c31\u662f\u6307\u5411\u4e86 User \u6216\u8005 Child \u7684\u5b9e\u4f8b\uff0c\u8fd9\u79cd\u6620\u5c04\u5173\u7cfb\u662f\u5b58\u50a8\u5728\u4e00\u5f20\u8868\u4e2d\uff0c\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u901a\u8fc7\u7279\u5f81\u5bf9\u8c61\u627e\u5230\u5177\u4f53\u8c03\u7528\u7684\u7c7b\u578b\u65b9\u6cd5\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u7279\u5f81\u5bf9\u8c61\uff1aBox\uff0c\u5f53\u6210\u4e00\u4e2a\u5f15\u7528\u5373\u53ef\uff0c\u53ea\u4e0d\u8fc7\u5b83\u5305\u88f9\u7684\u503c\u4f1a\u88ab\u5f3a\u5236\u5206\u914d\u5728\u5806\u4e0a\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-Rust",children:'fn createp(n:&str, b:bool) -> Box<dyn Person>{ // \u8fd4\u56de\u4e00\u4e2a\u7279\u5f81\u5bf9\u8c61\uff08\u7c7b\u4f3c\u667a\u80fd\u6307\u9488\uff0c\u5f53\u505a\u4e00\u4e2a\u5f15\u7528\u5373\u53ef\uff09\n    if b {\n        Box::new(User{\n            name:String::from(n)\n        })\n    }else{\n        Box::new(Child{ // \u901a\u8fc7Box::new()\u521b\u5efa\u7279\u5f81\u5bf9\u8c61\n            name:String::from(n),\n            age:1\n        })\n    }\n}\nfn notify(item: Box<dyn Person>) { // \u53c2\u6570\u662f\u7279\u5f81\u5bf9\u8c61\n    item.say();\n}\nfn main() {\n    let u1 = createp("aa",true); \n    let u2 = createp("bb",false);\n    notify(u1);\n    notify(u2);\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7279\u5f81\u5bf9\u8c61\u539f\u7406"}),"\n",(0,t.jsx)(e.p,{children:"\u6cdb\u578b\u662f\u5728\u7f16\u8bd1\u671f\u5b8c\u6210\u5904\u7406\u7684\uff1a\u7f16\u8bd1\u5668\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u6cdb\u578b\u53c2\u6570\u5bf9\u5e94\u7684\u5177\u4f53\u7c7b\u578b\u751f\u6210\u4e00\u4efd\u4ee3\u7801\uff0c\u8fd9\u79cd\u65b9\u5f0f\u662f\u9759\u6001\u5206\u53d1 (static dispatch)\uff0c\u56e0\u4e3a\u662f\u5728\u7f16\u8bd1\u671f\u5b8c\u6210\u7684\uff0c\u5bf9\u4e8e\u8fd0\u884c\u671f\u6027\u80fd\u5b8c\u5168\u6ca1\u6709\u4efb\u4f55\u5f71\u54cd\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0e\u9759\u6001\u5206\u53d1\u76f8\u5bf9\u5e94\u7684\u662f\u52a8\u6001\u5206\u53d1 (dynamic dispatch)\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u76f4\u5230\u8fd0\u884c\u65f6\uff0c\u624d\u80fd\u786e\u5b9a\u9700\u8981\u8c03\u7528\u4ec0\u4e48\u65b9\u6cd5\u3002\u4e4b\u524d\u4ee3\u7801\u4e2d\u7684\u5173\u952e\u5b57 dyn \u6b63\u662f\u5728\u5f3a\u8c03\u8fd9\u4e00 \u201c\u52a8\u6001\u201d \u7684\u7279\u70b9\u3002"}),"\n",(0,t.jsx)(e.p,{children:"Box, \u5305\u542b\u4e86\u4e24\u4e2a\u6307\u9488"}),"\n",(0,t.jsx)(e.p,{children:"ptr: \u6307\u5411\u5b9e\u73b0\u4e86\u7279\u5f81 Person \u7684\u5177\u4f53\u7c7b\u578b\u7684\u5b9e\u4f8b\uff0c\u6bd4\u5982\u7c7b\u578b User \u7684\u5b9e\u4f8b\u3001\u7c7b\u578b Child \u7684\u5b9e\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"vptr \u6307\u5411\u4e00\u4e2a\u865a\u8868 vtable, \u4fdd\u5b58\u4e86\u5b9e\u4f8b\u5bf9\u4e8e\u53ef\u4ee5\u8c03\u7528\u7684\u5b9e\u73b0\u4e8e\u7279\u5f81 Person \u7684\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.p,{children:"trait \u5bf9\u8c61\u7684\u9650\u5236\n\u4e0d\u662f\u6240\u6709\u7684 trait \u90fd\u6709 trait \u5bf9\u8c61\uff0c\u5fc5\u987b\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u7684 trait"}),"\n",(0,t.jsx)(e.p,{children:"\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u4e0d\u80fd\u662f Self\n\u65b9\u6cd5\u6ca1\u6709\u4efb\u4f55\u6cdb\u578b\u53c2\u6570"})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>l});var t=r(6540);const s={},i=t.createContext(s);function a(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);
"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[326],{934:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const o={title:"\u8054\u5408\u548c\u679a\u4e3e",sidebar_position:4,slug:"\u8054\u5408\u548c\u679a\u4e3e"},s="\u8054\u5408\u548c\u679a\u4e3e",c={id:"lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u8054\u5408\u548c\u679a\u4e3e",title:"\u8054\u5408\u548c\u679a\u4e3e",description:"union",source:"@site/docs/lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u8054\u5408\u548c\u679a\u4e3e.mdx",sourceDirName:"lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e",slug:"/lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u8054\u5408\u548c\u679a\u4e3e",permalink:"/docs/lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u8054\u5408\u548c\u679a\u4e3e",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u8054\u5408\u548c\u679a\u4e3e.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u8054\u5408\u548c\u679a\u4e3e",sidebar_position:4,slug:"\u8054\u5408\u548c\u679a\u4e3e"},sidebar:"cpp",previous:{title:"\u6307\u9488\u548c\u5f15\u7528",permalink:"/docs/lang/cpp/\u53d8\u91cf\u548c\u58f0\u660e/\u6307\u9488\u548c\u5f15\u7528"},next:{title:"\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5",permalink:"/docs/lang/cpp/\u8868\u8fbe\u5f0f\u548c\u51fd\u6570/\u8868\u8fbe\u5f0f\u548c\u8bed\u53e5"}},l={},a=[{value:"union",id:"union",level:2},{value:"enum",id:"enum",level:2}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u8054\u5408\u548c\u679a\u4e3e",children:"\u8054\u5408\u548c\u679a\u4e3e"}),"\n",(0,t.jsx)(e.h2,{id:"union",children:"union"}),"\n",(0,t.jsx)(e.p,{children:"\u8054\u5408\u662f\u4e00\u79cd\u7279\u6b8a\u7684struct,\u5b83\u7684\u6240\u6709\u6210\u5458\u88ab\u5206\u914d\u5728\u540c\u4e00\u5757\u5185\u5b58\u533a\u57df\u4e2d,\u56e0\u6b64\u8054\u5408\u5b9e\u9645\u5360\u7528\u7684\u7a7a\u95f4\u5c31\u662f\u5b83\u6700\u5927\u7684\u6210\u5458\u6240\u5360\u7684\u7a7a\u95f4. \u81ea\u7136\u5728\u67d0\u4e2a\u65f6\u523b,\u4e00\u4e2aunion\u4e2d\u53ea\u80fd\u4fdd\u5b58\u4e00\u4e2a\u6210\u5458\u7684\u503c."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="union\u4fdd\u5b58"',children:"enum Type {ptr,num}; // \u4e00\u4e2aType\u53ef\u4ee5\u4fdd\u5b58\u503c\u7684ptr\u548cnum\nstruct Entry{\n    string name; // string\u662f\u4e00\u4e2a\u6807\u51c6\u5e93\u7c7b\u578b\n    Type t; \n    Node* p;//\u5982\u679ct==ptr, \u5219\u4f7f\u7528ps\n    int i;//\u5982\u679ct==num,\u5219\u4f7f\u7528i\n};\n\nvoid f(Entry* pe){\n    if(pe -> t == num){\n        cout << pe -> i;\n    } \n};\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u4e3ap\u548ci\u6c38\u8fdc\u4e0d\u4f1a\u540c\u65f6\u4f7f\u7528,\u6240\u4ee5\u6d6a\u8d39\u4e86\u5185\u5b58\u7a7a\u95f4.\u901a\u8fc7\u5c06\u4e24\u8005\u5b9a\u4e49\u4e3a\u4e00\u4e2aunion\u6210\u5458,\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u89e3\u51b3\u95ee\u9898"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="union"',children:"union Value{\n    Node* p;\n    int i;\n};\n"})}),"\n",(0,t.jsx)(e.p,{children:"C++\u4e0d\u4f1a\u8bb0\u5f55\u4e00\u4e2aunion\u4fdd\u5b58\u4e86\u90a3\u79cd\u503c,\u56e0\u6b64\u7a0b\u5e8f\u5458\u5fc5\u987b\u81ea\u5df1\u505a\u8fd9\u4e2a\u5de5\u4f5c:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="union\u548c\u7ed3\u6784"',children:"struct Entry {\n    string name;\n    Type t;\n    Value v;\n};\n\nvoid f(Entry* entry){\n    if(pe->t == num)\n        cout << pe -> v.i;\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u7ef4\u62a4\u7c7b\u578b\u57df(type field,\u5728\u672c\u4f8b\u4e2d\u662ft)\u4e0eunion\u4e2d\u6240\u5b58\u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb\u5f88\u5bb9\u6613\u51fa\u9519. \u4e3a\u4e86\u907f\u514d\u9519\u8bef,\u6211\u4eec\u53ef\u4ee5\u5f3a\u5236\u8fd9\u79cd\u5bf9\u5e94\u5173\u7cfb:\u5c06\u8054\u5408\u548c\u7c7b\u578b\u57df\u5206\u88c5\u5728\u4e00\u4e2a\u7c7b\u4e2d,\u53ea\u5141\u8bb8\u901a\u8fc7\u80fd\u6b63\u786e\u4f7f\u7528\u8054\u5408\u7684\u6210\u5458\u51fd\u6570\u6765\u8bbf\u95ee\u4ed6\u4eec. \u5728\u5e94\u7528\u5c42\u9762\u4e0a,\u4ee5\u6765\u8fd9\u79cd\u6807\u8bb0\u8054\u5408(tagged union)\u7684\u62bd\u8c61\u5f88\u5e38\u89c1\u4e5f\u5f88\u6709\u7528. \u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u5c11\u7684\u4f7f\u7528\u88f8\u7684union."}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u5e93\u7c7b\u578bvariant\u6765\u907f\u514d\u76f4\u63a5\u4f7f\u7528union. \u4e00\u4e2avariant\u4fdd\u5b58\u4e00\u7ec4\u53ef\u9009\u7c7b\u578b\u4e2d\u4e00\u4e2a\u7c7b\u578b\u7684\u503c. \u4f8b\u5982\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"variant<Node*,int>"}),"\u53ef\u4ee5\u4fdd\u5b58\u4e00\u4e2aNode*\u6216\u8005\u4e00\u4e2aint."]}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528variant,Entry\u7684\u4f8b\u5b50\u53ef\u6539\u5199\u4e3a:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="variant"',children:"struct Entry {\n    string name;\n    variant<Node*,int> v;\n};\n\nvoid f(Entry* entry){\n    if(holds_alternative<int>(pe->v)) //*pe\u4fdd\u5b58\u4e00\u4e2aint\u5417\n    cout << get<int>(pe->v); //\u83b7\u53d6\u4e00\u4e2aint\n}\n\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8054\u5408\uff08union\uff09\u662f\u4e00\u79cd\u8282\u7701\u7a7a\u95f4\u7684\u7279\u6b8a\u7684\u7c7b\uff0c\u4e00\u4e2a union \u53ef\u4ee5\u6709\u591a\u4e2a\u6570\u636e\u6210\u5458\uff0c\u4f46\u662f\u5728\u4efb\u610f\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u6570\u636e\u6210\u5458\u53ef\u4ee5\u6709\u503c\u3002\u5f53\u67d0\u4e2a\u6210\u5458\u88ab\u8d4b\u503c\u540e\u5176\u4ed6\u6210\u5458\u53d8\u4e3a\u672a\u5b9a\u4e49\u72b6\u6001\u3002\u8054\u5408\u6709\u5982\u4e0b\u7279\u70b9\uff1a"}),"\n",(0,t.jsx)(e.p,{children:"\u9ed8\u8ba4\u8bbf\u95ee\u63a7\u5236\u7b26\u4e3a public"}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u542b\u6709\u6784\u9020\u51fd\u6570\u3001\u6790\u6784\u51fd\u6570"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u80fd\u542b\u6709\u5f15\u7528\u7c7b\u578b\u7684\u6210\u5458"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u80fd\u7ee7\u627f\u81ea\u5176\u4ed6\u7c7b\uff0c\u4e0d\u80fd\u4f5c\u4e3a\u57fa\u7c7b"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u80fd\u542b\u6709\u865a\u51fd\u6570"}),"\n",(0,t.jsx)(e.p,{children:"\u533f\u540d union \u5728\u5b9a\u4e49\u6240\u5728\u4f5c\u7528\u57df\u53ef\u76f4\u63a5\u8bbf\u95ee union \u6210\u5458"}),"\n",(0,t.jsx)(e.p,{children:"\u533f\u540d union \u4e0d\u80fd\u5305\u542b protected \u6210\u5458\u6216 private \u6210\u5458"}),"\n",(0,t.jsx)(e.p,{children:"\u5168\u5c40\u533f\u540d\u8054\u5408\u5fc5\u987b\u662f\u9759\u6001\uff08static\uff09\u7684"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"#include<iostream>\n\nunion UnionTest {\n    UnionTest() : i(10) {};\n    int i;\n    double d;\n};\n\nstatic union {\n    int i;\n    double d;\n};\n\nint main() {\n    UnionTest u;\n\n    union {\n        int i;\n        double d;\n    };\n\n    std::cout << u.i << std::endl;  // \u8f93\u51fa UnionTest \u8054\u5408\u7684 10\n\n    ::i = 20;\n    std::cout << ::i << std::endl;  // \u8f93\u51fa\u5168\u5c40\u9759\u6001\u533f\u540d\u8054\u5408\u7684 20\n\n    i = 30;\n    std::cout << i << std::endl;    // \u8f93\u51fa\u5c40\u90e8\u533f\u540d\u8054\u5408\u7684 30\n\n    return 0;\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"enum",children:"enum"}),"\n",(0,t.jsx)(e.admonition,{title:"\u5907\u6ce8",type:"warning",children:(0,t.jsx)(e.p,{children:"\u672c\u6587\u5305\u542b ISO \u6807\u51c6 C++ \u8bed\u8a00 enum \u7c7b\u578b\u548c C++11 \u4e2d\u5f15\u5165\u7684\u8303\u56f4\uff08\u6216\u5f3a\u7c7b\u578b\uff09enum class \u7c7b\u578b\u3002 \u6709\u5173 C++/CLI \u548c C++/CX \u4e2d public enum class \u6216 private enum class \u7c7b\u578b\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 enum class (C++/CLI and C++/CX)\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u9650\u5b9a\u4f5c\u7528\u57df\u7684\u679a\u4e3e\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"enum class open_modes { input, output, append };\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u9650\u5b9a\u4f5c\u7528\u57df\u7684\u679a\u4e3e\u7c7b\u578b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"enum color { red, yellow, green };\nenum { floatPrec = 6, doublePrec = 10 };\n"})}),"\n",(0,t.jsxs)(e.p,{children:["c++\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f62\u5f0f\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b",":enum"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="enum"',children:"enum class Color {red,blue,green,yellow};\nenum class Traffic_light {green,yellow,red};\n\nColor col = Color::red;\nTraffic_light traffic = Traffic_light::red;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u679a\u4e3e\u503c\u4f4d\u4e8eenum class\u7684\u4f5c\u7528\u57df\u4e4b\u5185, \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728\u4e0d\u540c\u7684enum class\u4e2d\u91cd\u590d\u4f7f\u7528\u8fd9\u4e9b\u679a\u4e3e\u503c\u800c\u4e0d\u81f3\u4e8e\u5f15\u8d77\u6df7\u6dc6. \u4f8b\u5982Color::red\u548cTraffic_light::red\u663e\u7136\u4e0d\u662f\u4e00\u4e2a\u4e1c\u897f"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",metastring:'title="\u521d\u59cb\u5316\u548c\u8d4b\u503c"',children:"Color x = red; //wrong! which red?\nColor y = Traffic_light::red; // wrong! this red is not that red;\nColor z = Color::red; // correct!\n\nint i = Color::red; // wrong!\n\nColor c = 2; // wrong! 2 is not a Color\nColor x = Color{5}; // correct! but a little verbose\nColor y {6}; // correct!\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);
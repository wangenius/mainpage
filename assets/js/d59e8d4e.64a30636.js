"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[7017],{1256:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=t(74848),r=t(28453);const s={title:"types",sidebar_position:2,slug:"types"},c="types",l={id:"lang/cpp/types",title:"types",description:"\u7528\u57fa\u672c\u7c7b\u578b,const\u4fee\u9970\u7b26,\u58f0\u660e\u4fee\u9970\u7b26\u6784\u9020\u51fa\u6765\u7684\u7c7b\u578b\u79f0\u4e3a\u5185\u7f6e\u7c7b\u578bbuilt-in type. c++\u7684\u5185\u7f6e\u7c7b\u578b\u53ca\u5176\u64cd\u4f5c\u975e\u5e38\u4e30\u5bcc. \u4f46\u662f\u6ca1\u6709\u4e3a\u7a0b\u5e8f\u5458\u63d0\u4f9b\u4fbf\u4e8e\u7f16\u5199\u9ad8\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7684\u9ad8\u5c42\u8bbe\u65bd. \u53d6\u800c\u4ee3\u4e4b\u5728\u5185\u7f6e\u7c7b\u578b\u548c\u64cd\u4f5c\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u4e00\u5957\u7cbe\u81f4\u7684\u62bd\u8c61\u673a\u5236,\u7a0b\u5e8f\u5458\u53ef\u7528\u5b83\u6765\u6784\u9020\u6240\u9700\u7684\u9ad8\u5c42\u8bbe\u65bd.",source:"@site/docs/lang/cpp/types.mdx",sourceDirName:"lang/cpp",slug:"/lang/cpp/types",permalink:"/docs/lang/cpp/types",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/types.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"types",sidebar_position:2,slug:"types"},sidebar:"cpp",previous:{title:"Grammar",permalink:"/docs/lang/cpp/Grammar"},next:{title:"module",permalink:"/docs/lang/cpp/module"}},o={},a=[{value:"struct",id:"struct",level:2},{value:"class",id:"class",level:2},{value:"union",id:"union",level:2},{value:"enum",id:"enum",level:2}];function d(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"types",children:"types"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u7528\u57fa\u672c\u7c7b\u578b,const\u4fee\u9970\u7b26,\u58f0\u660e\u4fee\u9970\u7b26\u6784\u9020\u51fa\u6765\u7684\u7c7b\u578b\u79f0\u4e3a\u5185\u7f6e\u7c7b\u578b",(0,i.jsx)(e.code,{children:"built-in type"}),". c++\u7684\u5185\u7f6e\u7c7b\u578b\u53ca\u5176\u64cd\u4f5c\u975e\u5e38\u4e30\u5bcc. \u4f46\u662f\u6ca1\u6709\u4e3a\u7a0b\u5e8f\u5458\u63d0\u4f9b\u4fbf\u4e8e\u7f16\u5199\u9ad8\u7ea7\u5e94\u7528\u7a0b\u5e8f\u7684\u9ad8\u5c42\u8bbe\u65bd. \u53d6\u800c\u4ee3\u4e4b\u5728\u5185\u7f6e\u7c7b\u578b\u548c\u64cd\u4f5c\u7684\u57fa\u7840\u4e0a\u589e\u52a0\u4e86\u4e00\u5957\u7cbe\u81f4\u7684\u62bd\u8c61\u673a\u5236,\u7a0b\u5e8f\u5458\u53ef\u7528\u5b83\u6765\u6784\u9020\u6240\u9700\u7684\u9ad8\u5c42\u8bbe\u65bd.\n\u5373\u7c7b\u548c\u679a\u4e3e."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"struct",children:"struct"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="\u7ed3\u6784\u7c7b\u578b"',children:"struct Vector{\n    int size;\n    double* elem;\n};\n\nVector v;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f,\u5c31v\u672c\u8eab\u800c\u8a00,\u7528\u5904\u4e0d\u5927. \u56e0\u4e3av\u7684elem\u6307\u9488\u5e76\u6ca1\u6709\u6307\u5411\u4efb\u4f55\u4e1c\u897f. \u4e3a\u4e86\u8ba9\u5b83\u53d8\u5f97\u6709\u7528, \u6211\u4eec\u5fc5\u987b\u7ed9\u51fa\u4e00\u4e9b\u5143\u7d20,\u53e6v\u6307\u5411\u5b83\u4eec."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="\u6784\u9020\u51fd\u6570"',children:"void vector_init(Vector& v,int s){\n    v.elem = new double[s];\n    v.size =s;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0cv\u7684elem\u6210\u5458\u88ab\u8d4b\u4e88\u4e86\u4e00\u4e2a\u7531new\u8fd0\u7b97\u7b26\u751f\u6210\u7684\u6307\u9488\u3002\u800cv\u7684size\u6210\u5458\u5219\u5f97\u5230\u4e86\u5143\u7d20\u7684\u6570\u76ee\u3002Vector&\u4e2d\u7684&\u6307\u51fa,\u6211\u4eec\u662f\u901a\u8fc7\u975econst\u5f15\u7528\u65b9\u5f0f\u4f20\u9012v\u7684\u3002\u8fd9\u6837vector_init()\u5c31\u80fd\u4fee\u6539\u4f20\u7ed9\u4ed6\u7684\u5411\u91cf\u4e86\u3002new\u8fd0\u7b97\u7b26\u4ece\u4e00\u5757\u540d\u4e3a\u81ea\u7531\u5b58\u50a8(\u53c8\u79f0\u4e3a\u52a8\u6001\u5185\u5b58\u6216\u5806)\u7684\u533a\u57df\u4e2d\u5206\u914d\u5185\u5b58\u3002\u5728\u81ea\u7531\u5b58\u50a8\u4e2d\u5206\u914d\u7684\u5bf9\u8c61\u72ec\u7acb\u4e8e\u5b83\u521b\u5efa\u65f6\u6240\u5904\u7684\u4f5c\u7528\u57df\uff0c\u4f1a\u4e00\u76f4\u5b58\u6d3b\u5230\u4f7f\u7528delete\u8fd0\u7b97\u7b26\u9500\u6bc1\u5b83\u4e3a\u6b62\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="\u4ececin\u8bfb\u5165s\u4e2a\u6574\u6570,\u7136\u540e\u8fd4\u56de\u8fd9\u4e9b\u6574\u6570\u7684\u548c,\u5047\u5b9as\u662f\u6b63\u7684"',children:"double read_and_sum(int s){\n    Vector v;\n    vector_init(v,s);\n\n    for(int i=0;i!= s;++i)\n        cin >> v.elem[i];\n\n    double sum = 0;\n    for(int i=0;i!= s;++i)\n        sum += v.elem[i];\n    return sum;\n}\n"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u81ea\u5199\u7684\u548c\u6807\u51c6\u5e93vector\u6709\u5f88\u5927\u5dee\u8ddd.\u6240\u4ee5\u4e0d\u8981\u8bd5\u56fe\u91cd\u5199vector\u548cstring\u7b49\u6807\u51c6\u5e93\u7ec4\u4ef6. \u76f4\u63a5\u4f7f\u7528\u5b83\u4eec\u66f4\u52a0\u660e\u667a."}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u540d\u5b57\u6216\u5f15\u7528\u8bbf\u95eestruct\u6210\u5458,\u6b64\u65f6\u4f7f\u7528",(0,i.jsx)(e.code,{children:"."}),",\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u9488\u8bbf\u95eestruct\u6210\u5458,\u6b64\u65f6\u4f7f\u7528",(0,i.jsx)(e.code,{children:"->"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"class",children:"class"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="vector\u7c7b"',children:"class Vector{\npublic:\n    Vector(int s):elem{new double[s]},size{s}{} //\u6784\u9020\u4e00\u4e2aVector\n    double& operator[](int i){return elem[i];} //\u4f7f\u7528\u4e0b\u8868\u8bbf\u95ee\u5143\u7d20\n    int get_size(){return size}\nprivate:\n    double* elem;\n    int size;\n};\n\nVector var(6); \u8be5\u5bf9\u8c61\u542b\u67096\u4e2a\u5143\u7d20\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"union",children:"union"}),"\n",(0,i.jsx)(e.p,{children:"\u8054\u5408\u662f\u4e00\u79cd\u7279\u6b8a\u7684struct,\u5b83\u7684\u6240\u6709\u6210\u5458\u88ab\u5206\u914d\u5728\u540c\u4e00\u5757\u5185\u5b58\u533a\u57df\u4e2d,\u56e0\u6b64\u8054\u5408\u5b9e\u9645\u5360\u7528\u7684\u7a7a\u95f4\u5c31\u662f\u5b83\u6700\u5927\u7684\u6210\u5458\u6240\u5360\u7684\u7a7a\u95f4. \u81ea\u7136\u5728\u67d0\u4e2a\u65f6\u523b,\u4e00\u4e2aunion\u4e2d\u53ea\u80fd\u4fdd\u5b58\u4e00\u4e2a\u6210\u5458\u7684\u503c."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="union\u4fdd\u5b58"',children:"enum Type {ptr,num}; // \u4e00\u4e2aType\u53ef\u4ee5\u4fdd\u5b58\u503c\u7684ptr\u548cnum\nstruct Entry{\n    string name; // string\u662f\u4e00\u4e2a\u6807\u51c6\u5e93\u7c7b\u578b\n    Type t; \n    Node* p;//\u5982\u679ct==ptr, \u5219\u4f7f\u7528ps\n    int i;//\u5982\u679ct==num,\u5219\u4f7f\u7528i\n};\n\nvoid f(Entry* pe){\n    if(pe -> t == num){\n        cout << pe -> i;\n    } \n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u56e0\u4e3ap\u548ci\u6c38\u8fdc\u4e0d\u4f1a\u540c\u65f6\u4f7f\u7528,\u6240\u4ee5\u6d6a\u8d39\u4e86\u5185\u5b58\u7a7a\u95f4.\u901a\u8fc7\u5c06\u4e24\u8005\u5b9a\u4e49\u4e3a\u4e00\u4e2aunion\u6210\u5458,\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u89e3\u51b3\u95ee\u9898"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="union"',children:"union Value{\n    Node* p;\n    int i;\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"C++\u4e0d\u4f1a\u8bb0\u5f55\u4e00\u4e2aunion\u4fdd\u5b58\u4e86\u90a3\u79cd\u503c,\u56e0\u6b64\u7a0b\u5e8f\u5458\u5fc5\u987b\u81ea\u5df1\u505a\u8fd9\u4e2a\u5de5\u4f5c:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="union\u548c\u7ed3\u6784"',children:"struct Entry {\n    string name;\n    Type t;\n    Value v;\n};\n\nvoid f(Entry* entry){\n    if(pe->t == num)\n        cout << pe -> v.i;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ef4\u62a4\u7c7b\u578b\u57df(type field,\u5728\u672c\u4f8b\u4e2d\u662ft)\u4e0eunion\u4e2d\u6240\u5b58\u7c7b\u578b\u7684\u5bf9\u5e94\u5173\u7cfb\u5f88\u5bb9\u6613\u51fa\u9519. \u4e3a\u4e86\u907f\u514d\u9519\u8bef,\u6211\u4eec\u53ef\u4ee5\u5f3a\u5236\u8fd9\u79cd\u5bf9\u5e94\u5173\u7cfb:\u5c06\u8054\u5408\u548c\u7c7b\u578b\u57df\u5206\u88c5\u5728\u4e00\u4e2a\u7c7b\u4e2d,\u53ea\u5141\u8bb8\u901a\u8fc7\u80fd\u6b63\u786e\u4f7f\u7528\u8054\u5408\u7684\u6210\u5458\u51fd\u6570\u6765\u8bbf\u95ee\u4ed6\u4eec. \u5728\u5e94\u7528\u5c42\u9762\u4e0a,\u4ee5\u6765\u8fd9\u79cd\u6807\u8bb0\u8054\u5408(tagged union)\u7684\u62bd\u8c61\u5f88\u5e38\u89c1\u4e5f\u5f88\u6709\u7528. \u6211\u4eec\u5e94\u8be5\u5c3d\u91cf\u5c11\u7684\u4f7f\u7528\u88f8\u7684union."}),"\n",(0,i.jsxs)(e.p,{children:["\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u5e93\u7c7b\u578bvariant\u6765\u907f\u514d\u76f4\u63a5\u4f7f\u7528union. \u4e00\u4e2avariant\u4fdd\u5b58\u4e00\u7ec4\u53ef\u9009\u7c7b\u578b\u4e2d\u4e00\u4e2a\u7c7b\u578b\u7684\u503c. \u4f8b\u5982\u4e00\u4e2a",(0,i.jsx)(e.code,{children:"variant<Node*,int>"}),"\u53ef\u4ee5\u4fdd\u5b58\u4e00\u4e2aNode*\u6216\u8005\u4e00\u4e2aint."]}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528variant,Entry\u7684\u4f8b\u5b50\u53ef\u6539\u5199\u4e3a:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="variant"',children:"struct Entry {\n    string name;\n    variant<Node*,int> v;\n};\n\nvoid f(Entry* entry){\n    if(holds_alternative<int>(pe->v)) //*pe\u4fdd\u5b58\u4e00\u4e2aint\u5417\n    cout << get<int>(pe->v); //\u83b7\u53d6\u4e00\u4e2aint\n}\n\n"})}),"\n",(0,i.jsx)(e.h2,{id:"enum",children:"enum"}),"\n",(0,i.jsxs)(e.p,{children:["c++\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u5f62\u5f0f\u7b80\u5355\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b",":enum"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="enum"',children:"enum class Color {red,blue,green,yellow};\nenum class Traffic_light {green,yellow,red};\n\nColor col = Color::red;\nTraffic_light traffic = Traffic_light::red;\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u679a\u4e3e\u503c\u4f4d\u4e8eenum class\u7684\u4f5c\u7528\u57df\u4e4b\u5185, \u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5728\u4e0d\u540c\u7684enum class\u4e2d\u91cd\u590d\u4f7f\u7528\u8fd9\u4e9b\u679a\u4e3e\u503c\u800c\u4e0d\u81f3\u4e8e\u5f15\u8d77\u6df7\u6dc6. \u4f8b\u5982Color::red\u548cTraffic_light::red\u663e\u7136\u4e0d\u662f\u4e00\u4e2a\u4e1c\u897f"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",metastring:'title="\u521d\u59cb\u5316\u548c\u8d4b\u503c"',children:"Color x = red; //wrong! which red?\nColor y = Traffic_light::red; // wrong! this red is not that red;\nColor z = Color::red; // correct!\n\nint i = Color::red; // wrong!\n\nColor c = 2; // wrong! 2 is not a Color\nColor x = Color{5}; // correct! but a little verbose\nColor y {6}; // correct!\n"})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function c(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);
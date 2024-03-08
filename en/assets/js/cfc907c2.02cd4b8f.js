"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[764],{31896:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var c=r(74848),i=r(28453);const l={title:"Grammar",sidebar_position:1,slug:"Grammar"},s="Grammar",a={id:"lang/cpp/grammar",title:"Grammar",description:"programming",source:"@site/docs/lang/cpp/grammar.mdx",sourceDirName:"lang/cpp",slug:"/lang/cpp/Grammar",permalink:"/en/docs/lang/cpp/Grammar",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/cpp/grammar.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Grammar",sidebar_position:1,slug:"Grammar"},sidebar:"cpp",next:{title:"types",permalink:"/en/docs/lang/cpp/types"}},t={},d=[{value:"programming",id:"programming",level:2},{value:"function",id:"function",level:2},{value:"\u58f0\u660e",id:"\u58f0\u660e",level:3},{value:"member functions in class",id:"member-functions-in-class",level:3},{value:"function overloading",id:"function-overloading",level:3},{value:"type and variables",id:"type-and-variables",level:2},{value:"init",id:"init",level:3},{value:"life cycle",id:"life-cycle",level:2},{value:"constant variables",id:"constant-variables",level:2},{value:"pointer reference",id:"pointer-reference",level:2},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:2},{value:"nullptr",id:"nullptr",level:3},{value:"check",id:"check",level:2},{value:"mapping to hardware",id:"mapping-to-hardware",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3}];function o(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"grammar",children:"Grammar"}),"\n",(0,c.jsx)(e.h2,{id:"programming",children:"programming"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",metastring:'title="minimum programming"',children:"int main(){}\n"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"{}"}),"\u6307\u51fa\u51fd\u6570\u7684\u8fb9\u754c\u3002\n",(0,c.jsx)(e.code,{children:"//"}),"\u884c\u6ce8\u91ca"]}),"\n",(0,c.jsxs)(e.p,{children:["\u6bcf\u4e2ac++\u7a0b\u5e8f\u6709\u4e14\u53ea\u6709\u4e00\u4e2a\u540d\u4e3amain\u7684\u5168\u5c40\u51fd\u6570\u3002\u5b83\u662f\u7a0b\u5e8f\u7684\u8d77\u70b9\u3002\u5982\u679cmain\u8fd4\u56de\u4e00\u4e2a",(0,c.jsx)(e.code,{children:"int"}),"\u7c7b\u578b\u7684\u503c\uff0c\u662f\u7a0b\u5e8f\u8fd4\u56de\u7ed9\u7cfb\u7edf\u7684\u503c\u3002main()\u4e0d\u8fd4\u56de\u4efb\u4f55\u503c,\u7cfb\u7edf\u540c\u6837\u4f1a\u6536\u5230\u4e00\u4e2a\u8868\u793a\u7a0b\u5e8f\u6210\u529f\u5b8c\u6210\u7684\u503c.main()\u8fd4\u56de\u975e\u96f6\u503c\u8868\u793a\u7a0b\u5e8f\u6267\u884c\u5931\u8d25."]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n\nint main(){\n    std::cout << "Hello world!\\n";\n}\n'})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"<<"}),'\u8f93\u51fa\u7b26\u53f7,\u5b83\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5199\u5165\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d. \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d,\u5b57\u7b26\u4e32\u5b57\u9762\u503c"Hello world!\\n"\u88ab\u5199\u5165\u6807\u51c6\u8f93\u51fa\u6d41std::cout.']}),"\n",(0,c.jsx)(e.p,{children:"std::\u6307\u51fa\u540d\u5b57cout\u53ef\u5728\u6807\u51c6\u5e93\u540d\u5b57\u7a7a\u95f4\u4e2d\u627e\u5230."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\n\nusing namespace std;\n\ndouble square(double x) { return x*x}\n\nvoid print_square(double x) {\n    cout << "square of " << x << "is" << square(x) << "\\n";\n}\n\nint main() {\n    print_square(1.234);\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"function",children:"function"}),"\n",(0,c.jsx)(e.h3,{id:"\u58f0\u660e",children:"\u58f0\u660e"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"Elem* next_elem();\nvoid next_elem(int);\ndouble next_elem(double);\n"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u51fd\u6570\u58f0\u660e\u4e5f\u53ef\u4ee5\u5305\u542b\u53c2\u6570\u540d\u3002\u6709\u52a9\u4e8e\u8bfb\u8005\u7406\u89e3\u7a0b\u5e8f\u7684\u542b\u4e49\u3002\u4f46\u5b9e\u9645\u4e0a\uff0c\u9664\u975e\u8be5\u58f0\u660e\u540c\u65f6\u4e5f\u662f\u51fd\u6570\u7684\u5b9a\u4e49\u3002\u5426\u5219\u7f16\u8bd1\u5668\u4f1a\u7b80\u5355\u5ffd\u7565\u53c2\u6570\u540d\u3002"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"double get(const vector<double>& vec,int index);\n//\n"})}),"\n",(0,c.jsx)(e.h3,{id:"member-functions-in-class",children:"member functions in class"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"char& String::operator[](int index);\n"})}),"\n",(0,c.jsx)(e.h3,{id:"function-overloading",children:"function overloading"}),"\n",(0,c.jsx)(e.p,{children:"\u51fd\u6570\u91cd\u8f7d:\u5982\u679c\u7a0b\u5e8f\u4e2d\u5b58\u5728\u540d\u5b57\u76f8\u540c\u4f46\u53c2\u6570\u7c7b\u578b\u4e0d\u540c\u7684\u51fd\u6570,\u5219\u7f16\u8bd1\u5668\u4f1a\u4e3a\u6bcf\u6b21\u8c03\u7528\u9009\u62e9\u6700\u6070\u5f53\u7684\u7248\u672c."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:'void print(int);\nvoid print(double);\nvoid print(string);\n\nvoid user(){\n    print(42);\n    print(9.65);\n    print("hello world");\n}\n'})}),"\n",(0,c.jsx)(e.h2,{id:"type-and-variables",children:"type and variables"}),"\n",(0,c.jsx)(e.p,{children:"\u4e00\u4e2a\u58f0\u660edeclaration\u5c31\u662f\u4e00\u6761\u8bed\u53e5.\u4e3a\u7a0b\u5e8f\u5f15\u5165\u4e00\u4e2a\u5b9e\u4f53,\u5e76\u4e3a\u8be5\u5b9e\u4f53\u6307\u660e\u7c7b\u578b:"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"\u7c7b\u578btype:\u5b9a\u4e49\u4e86\u4e00\u7ec4\u53ef\u80fd\u7684\u503c\u53ca\u4e00\u7ec4(\u5bf9\u8c61\u4e0a\u7684)\u64cd\u4f5c"}),"\n",(0,c.jsx)(e.li,{children:"\u5bf9\u8c61object:\u5b58\u653e\u67d0\u79cd\u7c7b\u578b\u503c\u7684\u5185\u5b58\u7a7a\u95f4"}),"\n",(0,c.jsx)(e.li,{children:"\u503cvalue:\u4e8c\u8fdb\u5236\u4f4d,\u5177\u4f53\u7684\u542b\u4e49\u7531\u5176\u7c7b\u578b\u51b3\u5b9a"}),"\n",(0,c.jsx)(e.li,{children:"\u53d8\u91cfvariable:\u547d\u540d\u7684\u5bf9\u8c61"}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"init",children:"init"}),"\n",(0,c.jsx)(e.p,{children:"\u521d\u59cb\u5316:\u5728\u4f7f\u7528\u5bf9\u8c61\u4e4b\u524d,\u5fc5\u987b\u7ed9\u5b83\u8d4b\u4e00\u4e2a\u503c."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"double d1 = 1.0;\ndouble d2 {1.0};\ndouble d3 = {1.0};\ncomplex<double> z = 1;//\u6807\u91cf\u4e3a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\u7684\u590d\u6570\nvector<int> v {1,2,3,4,5,6}; //\u6574\u6570\u5411\u91cf\n"})}),"\n",(0,c.jsx)(e.admonition,{type:"success",children:(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"{}"}),"\u53ef\u4ee5\u907f\u514d\u5728\u7c7b\u578b\u8f6c\u6362\u4e2d\u4e22\u5931\u539f\u6709\u4fe1\u606f,\u5373\u907f\u514d\u6536\u7f29\u8f6c\u6362."]})}),"\n",(0,c.jsx)(e.p,{children:"\u6ca1\u6709\u7279\u6b8a\u7406\u7531\u9700\u8981\u663e\u5f0f\u6307\u5b9a\u6570\u636e\u7c7b\u578b,\u53ef\u4ee5\u4f7f\u7528auto\u5173\u952e\u5b57."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"auto x = 2;\n"})}),"\n",(0,c.jsx)(e.h2,{id:"life-cycle",children:"life cycle"}),"\n",(0,c.jsx)(e.p,{children:"\u58f0\u660e\u8bed\u53e5\u5c06\u4e00\u4e2a\u540d\u5b57\u5f15\u5165\u5230\u4e86\u4e00\u4e2a\u4f5c\u7528\u57df\u4e2d:"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsxs)(e.li,{children:["\u5c40\u90e8\u4f5c\u7528\u57dflocal scope: \u58f0\u660e\u5728\u51fd\u6570\u6216\u8005lambda\u5185\u7684\u540d\u5b57\u53eb\u505a\u5c40\u90e8\u540d\u5b57.\u5c40\u90e8\u540d\u5b57\u7684\u4f5c\u7528\u57df\u4ece\u58f0\u660e\u5b83\u7684\u5730\u65b9\u5f00\u59cb,\u5230\u58f0\u660e\u8bed\u53e5\u6240\u5728\u7684\u5757\u7684\u672b\u5c3e\u4f4d\u7f6e,\u754c\u9650\u662f",(0,c.jsx)(e.code,{children:"{}"}),". \u51fd\u6570\u7684\u53c2\u6570\u4e5f\u5c5e\u4e8e\u5c40\u90e8\u540d\u5b57."]}),"\n",(0,c.jsxs)(e.li,{children:["\u7c7b\u4f5c\u7528\u57dfclass scope: \u5982\u679c\u4e00\u4e2a\u540d\u5b57\u5b9a\u4e49\u5728\u4e00\u4e2a\u7c7b\u4e2d,\u4e14\u4f4d\u4e8e\u6069\u8d6b\u7684\u51fd\u6570,lambda,enum class\u4e4b\u5916,\u79f0\u4e3a\u6210\u5458\u540d\u5b57. \u4f5c\u7528\u57df\u4ece\u5305\u542b\u5b83\u7684\u58f0\u660e\u7684\u8d77\u59cb",(0,c.jsx)(e.code,{children:"{"}),"\u5f00\u59cb,\u5230\u8be5\u58f0\u660e\u7ed3\u675f\u4e3a\u6b62."]}),"\n",(0,c.jsx)(e.li,{children:"\u540d\u5b57\u7a7a\u95f4\u4f5c\u7528\u57dfnamespace scope: \u5982\u679c\u4e00\u4e2a\u540d\u5b57\u5b9a\u4e49\u5728\u4e00\u4e2a\u540d\u5b57\u7a7a\u95f4\u5185,\u540c\u65f6\u4f4d\u4e8e\u4efb\u4f55\u51fd\u6570,lambda,\u7c7b,enum class\u4e4b\u5916,\u79f0\u4e3a\u540d\u5b57\u7a7a\u95f4\u6210\u5458\u540d\u5b57. \u4ed6\u7684\u4f5c\u7528\u57df\u4ece\u5176\u58f0\u660e\u4f4d\u7f6e\u5f00\u59cb,\u5230\u540d\u5b57\u7a7a\u95f4\u7ed3\u675f\u4e3a\u6b62."}),"\n",(0,c.jsx)(e.li,{children:"\u58f0\u660e\u5728\u6240\u6709\u7ed3\u6784\u4e4b\u5916\u7684\u540d\u5b57\u79f0\u4e3a\u5168\u5c40\u540d\u5b57,\u79f0\u4e3a\u5b83\u4f4d\u4e8e\u5728\u5168\u5c40\u540d\u5b57\u7a7a\u95f4\u4e2d."}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"\u6b64\u5916\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u6ca1\u6709\u540d\u5b57."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:'vector<int> vec;\nstruct Record {\n    string name;\n}\n\nvoid function(int arg){\n    string motto {"Who dares wins"};\n    auto p = new Record{"wangenius"};\n};\n'})}),"\n",(0,c.jsx)(e.h2,{id:"constant-variables",children:"constant variables"}),"\n",(0,c.jsxs)(e.ol,{children:["\n",(0,c.jsx)(e.li,{children:"const\u7528\u4e8e\u8bf4\u660e\u63a5\u53e3,\u4f7f\u5f97\u5728\u7528\u6307\u9488\u548c\u5f15\u7528\u5c06\u6570\u636e\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\u5c31\u4e0d\u5fc5\u62c5\u5fc3\u6570\u636e\u4f1a\u88ab\u6539\u53d8\u4e86. \u7f16\u8bd1\u5668\u5f3a\u5236\u6267\u884cconst\u505a\u51fa\u627f\u8bfa."}),"\n",(0,c.jsx)(e.li,{children:"constexpr\u7f16\u8bd1\u65f6\u6c42\u503c. \u7528\u4e8e\u8bf4\u660e\u5e38\u91cf,\u5141\u8bb8\u5c06\u6570\u636e\u7f6e\u5165\u53ea\u8bfb\u5185\u5b58\u4e2d\u6765\u63d0\u5347\u6027\u80fd. \u5fc5\u987b\u7f16\u8bd1\u5668\u8ba1\u7b97."}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"constexpr int dmv = 17; //dmv is a constant\nint var = 17; //var is not a constant\nconst double sqv = sqrt(var); //sqv is a constant\n\ndouble sum(const vector<double>&); // sum won't change its arg's value\n\nvector<double> v {1.2,3.4,4.5}; //v is not a constant\nconst double s1 = sum(v); //\u2714sum\u5728\u8fd0\u884c\u65f6\u6c42\u503c\nconstexpr double  s2 = sum(v); //\u274c sum v\u4e0d\u662f\u5e38\u91cf\u8868\u8fbe\u5f0f\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5982\u679c\u67d0\u4e2a\u51fd\u6570\u88ab\u7528\u5728\u5e38\u91cf\u8868\u8fbe\u5f0f\u4e2d,\u5373\u8be5\u5e38\u91cf\u8868\u8fbe\u5f0f\u5728\u7f16\u8bd1\u65f6\u6c42\u503c,\u5219\u8fd9\u4e2a\u51fd\u6570\u5fc5\u987b\u5b9a\u4e49\u4e3aconstexpr:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"constexpr double square(double x){\n    return x*x;\n}\nconstexpr double max1 = 1.4 * square(17); //\u2714\nconstexpr double max2 = 1.4 * square(var); //\u274c\nconst double max3 = 1.4 * square(var); //\u2714\n"})}),"\n",(0,c.jsx)(e.p,{children:"constexpr\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u975e\u5e38\u91cf\u53c2\u6570,\u4f46\u6b64\u65f6\u5176\u7ed3\u679c\u4e0d\u518d\u662f\u4e00\u4e2a\u5e38\u91cf\u8868\u8fbe\u5f0f. \u5f53\u7a0b\u5e8f\u7684\u4e0a\u4e0b\u6587\u4e0d\u8981\u6c42\u5e38\u91cf\u8868\u8fbe\u5f0f\u65f6, \u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u975e\u5e38\u91cf\u8868\u8fbe\u5f0f\u53c2\u6570\u6765\u8c03\u7528constexpr\u51fd\u6570,\u8fd9\u6837\u5c31\u4e0d\u7528\u5c06\u672c\u6765\u76f8\u540c\u7684\u51fd\u6570\u5b9a\u4e49\u4e24\u6b21\u4e86:\u4e00\u6b21\u7528\u4e8e\u5e38\u91cf\u8868\u8fbe\u5f0f,\u4e00\u6b21\u7528\u4e8e\u53d8\u91cf."}),"\n",(0,c.jsx)(e.p,{children:"\u60f3\u8981\u5b9a\u4e49constexpr\u51fd\u6570\u5fc5\u987b\u975e\u5e38\u7b80\u5355. \u65e0\u526f\u4f5c\u7528\u4e14\u4ec5\u4f7f\u7528\u901a\u8fc7\u53c2\u6570\u4f20\u9012\u7684\u4fe1\u606f.\u7279\u522b\u662f\u51fd\u6570\u4e0d\u80fd\u66f4\u6539\u975e\u5c40\u90e8\u53d8\u91cf,\u4f46\u53ef\u4ee5\u5305\u542b\u5faa\u73af\u4ee5\u53ca\u4f7f\u7528\u81ea\u5df1\u7684\u5c40\u90e8\u53d8\u91cf."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"constexpr double nth(double x,int n){\n    double res = 1;\n    int i = 0;\n    while(i < n){\n        res *= n;\n        ++i;\n    }\n    return res;\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"pointer-reference",children:"pointer reference"}),"\n",(0,c.jsx)(e.p,{children:"\u6570\u7ec4\u58f0\u660e:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"char var[6]; //\u542b\u67096\u4e2a\u5b57\u7b26\u7684\u6570\u7ec4\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u6307\u9488\u58f0\u660e:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"char* p; //\u6307\u5411\u5b57\u7b26\u7684\u6307\u9488\n\nchar * p = &v[3]; // p\u6307\u5411v\u7684\u7b2c4\u4e2a\u5143\u7d20\nchar x = *p; //*p\u662fp\u6307\u5411\u7684\u5bf9\u8c61\n"})}),"\n",(0,c.jsx)(e.h2,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"void print(){\n    int v[] = { 0, 1, 2, 3, 4, 5, 6, 7};\n    for(auto x : v)  // \u5bf9\u4e8ev\u4e2d\u7684\u6bcf\u4e00\u4e2ax\u6267\u884c\n        cout << x << '\\n';\n}\n\nvoid increment(){\n    int v[] = { 0, 1, 2, 3, 4, 5};\n    for(auto& x : v)\n    ++x;\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:'\u5728\u58f0\u660e\u8bed\u53e5\u4e2d,\u4e00\u5143\u540e\u7f6e\u8fd0\u7b97\u7b26&\u8868\u793a"...\u7684\u5f15\u7528". \u5f15\u7528\u7c7b\u4f3c\u4e8e\u6307\u9488,\u552f\u4e00\u7684\u533a\u522b\u662f\u6211\u4eec\u8bed\u5e8f\u4f7f\u7528\u524d\u7f6e\u8fd0\u7b97\u7b26*\u8bbf\u95ee\u6240\u5f15\u7528\u7684\u503c. \u800c\u4e14\u4e00\u4e2a\u5f15\u7528\u5728\u521d\u59cb\u5316\u5c31\u4e0d\u80fd\u518d\u5f15\u7528\u5176\u4ed6\u5bf9\u8c61\u4e86.\n\u5f53\u6307\u5b9a\u51fd\u6570\u7684\u53c2\u6570\u65f6,\u5f15\u7528\u7279\u522b\u6709\u7528:'}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"void sort(vector<double>& v); //\u6392\u5e8fv(v\u662f\u4e00\u4e2adouble\u7c7b\u578b\u7684\u5411\u91cf)\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u901a\u8fc7\u4f7f\u7528\u5f15\u7528,\u6211\u4eec\u4fdd\u8bc1\u5728\u8c03\u7528sort(my_vec)\u65f6\u4e0d\u4f1a\u62f7\u8d1dmy_vec,\u4ece\u800c\u771f\u6b63\u5bf9my_vec\u8fdb\u884c\u6392\u5e8f\u800c\u4e0d\u662f\u5bf9\u5176\u526f\u672c\u8fdb\u884c\u6392\u5e8f."}),"\n",(0,c.jsx)(e.p,{children:"\u8fd8\u6709\u4e00\u79cd\u60c5\u51b5,\u6211\u4eec\u4e0d\u60f3\u6539\u53d8\u5b9e\u53c2,\u6709\u5e0c\u671b\u907f\u514d\u53c2\u6570\u62f7\u8d1d\u7684\u4ee3\u4ef7,\u6b64\u65f6\u5e94\u8be5\u4f7f\u7528const \u5f15\u7528."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"double sort(const vector<double>&);\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u51fd\u6570\u63a5\u6536const\u5f15\u7528\u7c7b\u578b\u7684\u53c2\u6570\u662f\u975e\u5e38\u666e\u904d\u7684."}),"\n",(0,c.jsx)(e.p,{children:"\u7528\u4e8e\u58f0\u660e\u8bed\u53e5\u7684\u8fd0\u7b97\u7b26(&,*,[])\u79f0\u4e3a\u58f0\u660e\u8fd0\u7b97\u7b26declarator operator."}),"\n",(0,c.jsx)(e.h3,{id:"nullptr",children:"nullptr"}),"\n",(0,c.jsx)(e.p,{children:"\u5f53\u786e\u5b9e\u6ca1\u6709\u5bf9\u8c61\u53ef\u4ee5\u6307\u5411\u6216\u8005\u9700\u8981\u8868\u793a\u6ca1\u6709\u5bf9\u8c61\u53ef\u7528\u7684\u6982\u5ff5\u65f6,\u6211\u4eec\u8d4b\u4e88\u6307\u9488\u503cnullptr(\u7a7a\u6307\u9488),\u6240\u6709\u6307\u9488\u7c7b\u578b\u90fd\u5171\u4eab\u540c\u4e00\u4e2anullptr."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"double* pd = nullptr;\nLink<Record>* lst = nullptr;\nint x = nullptr; //wrong!! nullptr is a pointer not a integer \n"})}),"\n",(0,c.jsx)(e.p,{children:"\u63a5\u6536\u4e00\u4e2a\u6307\u9488\u5b9e\u53c2\u65f6,\u68c0\u67e5\u4e00\u4e0b\u5b83\u662f\u5426\u6307\u5411\u67d0\u4e2a\u4e1c\u897f\u65f6\u901a\u5e38\u662f\u4e00\u79cd\u660e\u667a\u7684\u505a\u6cd5."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",metastring:'title="\u7edf\u8ba1x\u5728p\u4e2d\u51fa\u73b0\u7684\u6b21\u6570,\u5047\u5b9ap\u6307\u5411\u4e00\u4e2a\u4ee50\u7ed3\u5c3e\u7684\u5b57\u7b26\u6570\u7ec4"',children:"int count(const char* p, char x){\n    if(p == nullptr) return 0;\n    int count = 0;\n    for (;*p!= 0;++p)\n        if(*p == x) ++count;\n    return count;\n}\n//\u6216\u8005\nint count_2(const char* p,char x){\n    if(p == nullptr) return 0;\n    while(*p){\n        if(*p==x) ++count;\n        ++p;\n    }\n    return count;\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"check",children:"check"}),"\n",(0,c.jsx)(e.p,{children:"C++\u63d0\u4f9b\u4e86\u4e00\u5957\u7528\u4e8e\u8868\u8fbe\u9009\u62e9\u548c\u5faa\u73af\u7ed3\u6784\u7684\u5e38\u89c4\u8bed\u53e5. \u5982if,switch,while,for\u7b49."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"bool _if(){\n    cout << \"do you want to preceed (y/n): \\n\";\n    char answer = 0;\n    cin >> answer;\n    if(answer == 'y') return true;\n    return false;\n}\n\nbool _switch(){\n    cout << \"do you want to preceed (y/n): \\n\";\n    char answer = 0;\n    cin >> answer;\n    switch(answer) {\n        case 'y':\n        return true;\n        case 'n':\n        return false;\n        default:\n        cout << \"I'll take that for a no.\\n\";\n        return false;\n    }\n}\n"})}),"\n",(0,c.jsx)(e.p,{children:"switch\u8bed\u53e5\u68c0\u9a8c\u4e00\u4e2a\u503c\u662f\u5426\u5b58\u5728\u4e8e\u4e00\u7ec4\u5e38\u91cf\u4e2d,\u8fd9\u4e9b\u5e38\u91cf\u88ab\u79f0\u4e3acase\u6807\u7b7e,\u5f7c\u6b64\u4e4b\u95f4\u4e0d\u80fd\u91cd\u590d,\u5982\u679c\u5f85\u68c0\u9a8c\u7684\u503c\u4e0d\u7b49\u4e8e\u4efb\u4f55case\u5206\u652f,\u5219\u6267\u884cdefault\u5206\u652f. \u5982\u679c\u6ca1\u6709\u63d0\u4f9bdefault\u5206\u652f,\u5219\u4ec0\u4e48\u4e5f\u4e0d\u505a."}),"\n",(0,c.jsx)(e.p,{children:"\u5728switch\u8bed\u53e5\u4e2d\u5982\u679c\u60f3\u9000\u51fa\u67d0\u4e2acase\u5206\u652f,\u4e0d\u5fc5\u4ece\u5f53\u524d\u51fd\u6570\u8fd4\u56de,\u901a\u5e38\u6211\u4eec\u53ea\u662f\u5e0c\u671b\u7ee7\u7eed\u6267\u884cswitch\u8bed\u53e5\u540e\u9762\u7684\u8bed\u53e5,\u4e3a\u6b64\u53ea\u9700\u4f7f\u7528\u4e00\u6761break\u8bed\u53e5."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"\n\n"})}),"\n",(0,c.jsx)(e.h2,{id:"mapping-to-hardware",children:"mapping to hardware"}),"\n",(0,c.jsx)(e.p,{children:"\u4e0d\u540c\u5bf9\u8c61\u5f15\u7528\u76f8\u540c\u7684\u5171\u4eab\u503c:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int x = 2;\nint y = 3;\nint* p = &x;\nint* q = &y; //\u73b0\u5728p!=q\u4e14*p!=*q;\np = q; // p\u53d8\u6210\u4e86&y,\u73b0\u5728p==q,\u56e0\u6b64 *p == *q;\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u7684\u4e0b\u6548\u679c:"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:r(82994).A+"",width:"1743",height:"431"})}),"\n",(0,c.jsx)(e.p,{children:"\u5f15\u7528\u548c\u6307\u9488\u90fd\u662f\u5f15\u7528/\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61,\u5728\u5185\u5b58\u4e2d\u90fd\u8868\u793a\u4e3a\u4e00\u4e2a\u673a\u5668\u5730\u5740. \u4f46\u662f\u4f7f\u7528\u4ed6\u4eec\u7684\u8bed\u8a00\u89c4\u5219\u662f\u4e0d\u540c\u7684.\u7ed9\u4e00\u4e2a\u5f15\u7528\u590d\u5236\u4e0d\u4f1a\u6539\u53d8\u5b83\u5f15\u7528\u4e86\u4ec0\u4e48,\u4e8c\u662f\u7ed9\u4ed6\u5f15\u7528\u7684\u5bf9\u8c61\u8d4b\u503c."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int x = 2;\nint y = 3;\nint &r = x;\nint &r2 = y;\nr = r2;//\u4ecer2\u8bfb\u53d6\u503c,\u5199\u5165r\u4e2d:x\u53d8\u4e3a3\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u6bb5\u4ee3\u7801\u7684\u6548\u679c:"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:r(72090).A+"",width:"1743",height:"431"})}),"\n",(0,c.jsx)(e.h3,{id:"\u521d\u59cb\u5316",children:"\u521d\u59cb\u5316"}),"\n",(0,c.jsx)(e.p,{children:"\u521d\u59cb\u5316\u548c\u8d4b\u503c\u4e0d\u540c,\u4e00\u822c\u800c\u8a00,\u6b63\u786e\u6267\u884c\u8d4b\u503c\u4e4b\u540e,\u88ab\u8d4b\u503c\u5bf9\u8c61\u5fc5\u987b\u6709\u4e00\u4e2a\u503c,\u800c\u53e6\u4e00\u65b9\u9762,\u521d\u59cb\u5316\u7684\u4efb\u52a1\u662f\u8bb2\u4e00\u6bb5\u672a\u521d\u59cb\u5316\u7684\u5185\u5b58\u53d8\u6210\u4e00\u4e2a\u5408\u6cd5\u7684\u5bf9\u8c61. \u5bf9\u51e0\u4e4e\u6240\u6709\u7684\u7c7b\u578b\u6765\u8bf4,\u8bfb\u5199\u4e00\u4e2a\u672a\u521d\u59cb\u5316\u7684\u53d8\u91cf\u7684\u7ed3\u679c\u90fd\u662f\u672a\u5b9a\u4e49\u7684. \u5bf9\u5185\u7f6e\u7c7b\u578b\u6765\u8bf4, \u8fd9\u4e2a\u95ee\u9898\u5bf9\u5f15\u7528\u6765\u8bf4\u66f4\u4e3a\u660e\u663e."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int x = 7;\nint& r {x}; //\u5c06r\u7ed1\u5b9a\u5230x(r\u5f15\u7528x)\nr = 7; // \u7ed9r\u5f15\u7528\u7684\u5bf9\u8c61\u8d4b\u503c\nint& r2; // \u9519\u8bef:\u672a\u521d\u59cb\u5316\u7684\u5f15\u7528\nr2 = 99; // \u7ed9r2\u5f15\u7528\u7684\u5bf9\u8c61\u8d4b\u503c\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u5e78\u8fd0\u7684\u662f,\u6211\u4eec\u4e0d\u80fd\u4f7f\u7528\u4e00\u4e2a\u672a\u521d\u59cb\u5316\u7684\u5f15\u7528. \u5982\u679c\u53ef\u4ee5\u7684\u8bdd,r2=99\u5c31\u4f1a\u5c0699\u8d4b\u4e88\u67d0\u4e2a\u672a\u6307\u5b9a\u7684\u5185\u5b58\u4f4d\u7f6e. \u8fd9\u6700\u7ec8\u53ef\u80fd\u5bfc\u81f4\u7cdf\u7cd5\u7684\u7ed3\u679c\u6216\u8005\u7a0b\u5e8f\u5954\u6e83."}),"\n",(0,c.jsx)(e.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a=\u521d\u59cb\u5316\u4e00\u4e2a\u5f15\u7528,\u4f46\u4e0d\u8981\u88ab\u8fd9\u79cd\u5f62\u5f0f\u8ff7\u60d1."}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-cpp",children:"int& r = x;\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd9\u4ecd\u7136\u662f\u4e00\u4e2a\u521d\u59cb\u5316\u64cd\u4f5c,\u5c06r\u7ed1\u5b9a\u5230x,\u800c\u4e0d\u662f\u4efb\u4f55\u5f62\u5f0f\u7684\u503c\u62f7\u8d1d."})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(o,{...n})}):o(n)}},72090:(n,e,r)=>{r.d(e,{A:()=>c});const c=r.p+"assets/images/d2__wangenius.github.io_static_template-b03d1b41719850bff1502da13b7a7e89.png"},82994:(n,e,r)=>{r.d(e,{A:()=>c});const c=r.p+"assets/images/d__wangenius.github.io_static_template-9a33152937d488d1ba855a424d637c8e.png"},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>a});var c=r(96540);const i={},l=c.createContext(i);function s(n){const e=c.useContext(l);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),c.createElement(l.Provider,{value:e},n.children)}}}]);
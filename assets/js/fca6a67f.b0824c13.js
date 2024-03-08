"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[7905],{75245:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var i=r(74848),t=r(28453);const c={title:"Class",sidebar_position:7,slug:"Class"},l="Class",s={id:"language/cpp/class",title:"Class",description:"concrete class",source:"@site/docs/language/cpp/class.mdx",sourceDirName:"language/cpp",slug:"/language/cpp/Class",permalink:"/docs/language/cpp/Class",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/language/cpp/class.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Class",sidebar_position:7,slug:"Class"},sidebar:"cpp",previous:{title:"error handler",permalink:"/docs/language/cpp/error_handler"},next:{title:"cpp",permalink:"/docs/language/cpp/"}},a={},o=[{value:"concrete class",id:"concrete-class",level:2},{value:"\u5bb9\u5668Container",id:"\u5bb9\u5668container",level:3},{value:"\u521d\u59cb\u5316\u5bb9\u5668",id:"\u521d\u59cb\u5316\u5bb9\u5668",level:4},{value:"abstract class",id:"abstract-class",level:2},{value:"\u865a\u51fd\u6570",id:"\u865a\u51fd\u6570",level:3},{value:"class hierarchy",id:"class-hierarchy",level:2},{value:"\u5c42\u6b21\u6f2b\u6e38",id:"\u5c42\u6b21\u6f2b\u6e38",level:3},{value:"\u907f\u514d\u8d44\u6e90\u6cc4\u9732",id:"\u907f\u514d\u8d44\u6e90\u6cc4\u9732",level:3}];function d(e){const n={admonition:"admonition",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"class",children:"Class"}),"\n",(0,i.jsx)(n.h2,{id:"concrete-class",children:"concrete class"}),"\n",(0,i.jsx)(n.p,{children:"\u5178\u578b\u7279\u5f81: \u8868\u793a\u662f\u5b9a\u4e49\u7684\u4e00\u90e8\u5206. \u5982vector\u5176\u8868\u793a\u53ea\u662f\u4e00\u4e2a\u6216\u8005\u51e0\u4e2a\u6307\u9488,\u6307\u5411\u4fdd\u5b58\u5728\u522b\u5904\u7684\u6570\u636e. \u4f46\u8fd9\u79cd\u8868\u793a\u51fa\u73b0\u5728\u5177\u4f53\u7c7b\u7684\u6bcf\u4e00\u4e2a\u5bf9\u8c61\u5f53\u4e2d. \u8fd9\u4ee4\u5b9e\u73b0\u53ef\u4ee5\u5728\u65f6\u7a7a\u4e2d\u8fbe\u5230\u6700\u4f18. \u7279\u522b\u662f\u5b83\u5141\u8bb8\u6211\u4eec:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u5177\u4f53\u7c7b\u578b\u7684\u5bf9\u8c61\u7f6e\u4e8e\u6808,\u9759\u6001\u5206\u914d\u7684\u5185\u5b58\u6216\u8005\u5176\u4ed6\u5bf9\u8c61\u5f53\u4e2d."}),"\n",(0,i.jsx)(n.li,{children:"\u76f4\u63a5\u5f15\u7528\u5bf9\u8c61(\u800c\u975e\u4ec5\u4ec5\u901a\u8fc7\u6307\u9488\u6216\u8005\u5f15\u7528)"}),"\n",(0,i.jsx)(n.li,{children:"\u7acb\u5373\u8fdb\u884c\u5b8c\u6574\u7684\u5bf9\u8c61\u521d\u59cb\u5316(\u6bd4\u5982\u6784\u9020\u51fd\u6570)"}),"\n",(0,i.jsx)(n.li,{children:"\u62f7\u8d1d\u6216\u79fb\u52a8\u5bf9\u8c61"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7c7b\u7684\u8868\u793a\u53ef\u4ee5\u662f\u79c1\u6709\u7684,\u4ece\u800c\u53ea\u80fd\u901a\u8fc7\u6210\u5458\u51fd\u6570\u8bbf\u95ee, \u4f46\u4ed6\u786e\u5b9e\u5b58\u5728. \u56e0\u6b64\u5982\u679c\u8868\u793a\u65b9\u5f0f\u53d1\u751f\u4e86\u4efb\u4f55\u660e\u663e\u7684\u6539\u52a8, \u4f7f\u7528\u8005\u5c31\u5fc5\u987b\u91cd\u65b0\u7f16\u8bd1. \u8fd9\u5c31\u662f\u6211\u4eec\u4ee4\u5177\u4f53\u7c7b\u578b\u7684\u884c\u4e3a\u4e0e\u5185\u7f6e\u7c7b\u578b\u5b8c\u5168\u4e00\u6837\u9700\u8981\u4ed8\u51fa\u4ee3\u4ef7. \u5bf9\u4e8e\u67d0\u4e9b\u573a\u666f,\u4e0d\u5e38\u6539\u52a8\u7684\u7c7b\u578b\u548c\u5c40\u90e8\u53d8\u91cf\u63d0\u4f9b\u4e86\u8feb\u5207\u9700\u8981\u7684\u6e05\u6670\u6027\u548c\u6548\u7387,\u6b64\u65f6\u8fd9\u79cd\u7279\u6027\u662f\u53ef\u4ee5\u63a5\u53d7\u7684, \u800c\u4e14\u901a\u5e38\u5f88\u7406\u60f3. \u4e3a\u4e86\u63d0\u9ad8\u7075\u6d3b\u6027, \u5177\u4f53\u7c7b\u578b\u53ef\u4ee5\u5c06\u5176\u8868\u793a\u7684\u4e3b\u8981\u90e8\u5206\u9632\u6b62\u5728\u52a8\u6001\u5b58\u50a8/\u5806\u5f53\u4e2d,\u7136\u540e\u901a\u8fc7\u5b58\u50a8\u5728\u7c7b\u5bf9\u8c61\u5185\u90e8\u7684\u6210\u5458\u8bbf\u95ee\u4ed6\u4eec. vector\u548cstring\u5c31\u662f\u8fd9\u6837\u5b9e\u73b0\u7684,\u6211\u4eec\u53ef\u4ee5\u5c06\u4ed6\u4eec\u770b\u6210\u5e26\u6709\u7cbe\u5fc3\u6253\u9020\u7684\u63a5\u53e3\u7684\u8d44\u6e90\u7ba1\u7406\u5668."}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u79cd\u7ecf\u5178\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u7b97\u6570\u7c7b\u578b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="Complex"',children:"class complex{\n    double re,im; // \u8868\u793ai\u4e24\u4e2a\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\n    public:\n    complex(double r,double i):re{r},im{i}{} //\u7528\u4e24\u4e2a\u6807\u91cf\u6784\u9020\u8be5\u590d\u6570\n    complex(double r):re{r},im{0}{} //\u7528\u4e00\u4e2a\u6807\u91cf\u6784\u9020\u8be5\u590d\u6570\n    complex()re{0},im{0}{} //\u9ed8\u8ba4\u590d\u6570{0,0}\n    double real() const {return re;}\n    void real(double d){re = d;}\n    double imag()const {return im;}\n    void imag(double d){im = d;}\n\n    complex& operator += (complex z){\n        re+= z.re;\n        im+= z.im;\n        return *this;//\u8fd4\u56de\u7ed3\u679c\n    }\n\n    complex& operator -= (complex z){\n        re-= z.re;\n        im-= z.im;\n        return *this;\n    }\n\n    // \u5728\u7c7b\u5916\u7684\u67d0\u5904\u5b9a\u4e49\n    complex& operator *= (complex);\n    complex& operator /= (complex);\n\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u65f6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="\u8c03\u7528"',children:"complex z = {1,0};\nconst complex cz {1,3};\nz = cz; //right! \u5411\u4e00\u4e2aconst\u53d8\u91cf\u8d4b\u503c\ncz = z; //wrong! complex::operator=() \u662f\u4e00\u4e2a\u975econst\u6210\u5458\u51fd\u6570\ndouble x = z.real(); //\u6b63\u786e! complex::real()\u662f\u4e00\u4e2aconst\u6210\u5458\u51fd\u6570\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f88\u591a\u64cd\u4f5c\u4e0d\u9700\u8981\u76f4\u63a5\u8bbf\u95eecomplex,\u56e0\u6b64\u5b83\u4eec\u7684\u5b9a\u4e49\u53ef\u4ee5\u548c\u7c7b\u7684\u5b9a\u4e49\u5206\u79bb\u5f00\u6765:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="other"',children:"complex operator+(complex a, complex b){return a+=b;}\ncomplex operator-(complex a, complex b){return a-=b;}\ncomplex operator-(complex a){return {-a.real(),-a.imag()}}\ncomplex operator*(complex a, complex b){return a*=b;}\ncomplex operator/(complex a, complex b){return a/=b;}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u672c\u4f8b\u4e2d,\u6211\u4eec\u5229\u7528\u4e86\u4e00\u4e2a\u4e8b\u5b9e: \u4ee5\u4f20\u503c\u65b9\u5f0f\u4f20\u9012\u5b9e\u53c2\u5b9e\u9645\u4e0a\u662f\u8fdb\u884c\u62f7\u8d1d, \u56e0\u6b64\u6211\u53ef\u4ee5\u4fee\u6539\u5b9e\u53c2\u800c\u4e0d\u4f1a\u5f71\u54cd\u8c03\u7528\u8005\u7684\u526f\u672c, \u5e76\u53ef\u4ee5\u5c06\u7ed3\u679c\u4f5c\u4e3a\u8fd4\u56de\u503c."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="==,!="',children:"bool operator==(complex a, complex b){\n    return a.real() == b.real() && a.imag() == b.imag();\n}\n\nbool operator!=(complex a, complex b){\n    return !(a!=b);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5bb9\u5668container",children:"\u5bb9\u5668Container"}),"\n",(0,i.jsxs)(n.p,{children:["Vector\u7c7b\u578b\u7684\u5bf9\u8c61\u90fd\u662f\u5bb9\u5668, \u6240\u4ee5\u6211\u4eec\u79f0\u7c7bVector\u662f\u4e00\u79cd\u5bb9\u5668\u7c7b\u578b. \u5982\u4e4b\u524d\u63d0\u5230\u7684Vector\u4f7f\u7528\u5f88\u4e0d\u9519\u7684double\u5bb9\u5668. \u5efa\u7acb\u4e86\u4e00\u4e2a\u6709\u7528\u7684\u4e0d\u53d8\u5f0f, \u63d0\u4f9b\u4e86\u5e26\u8fb9\u754c\u68c0\u67e5\u7684\u8bbf\u95ee\u5e76\u4e14\u63d0\u4f9b\u4e86size()\u4ee4\u6211\u4eec\u53ef\u4ee5\u904d\u5386\u5176\u5143\u7d20. \u7136\u800c\u4ed6\u8fd8\u662f\u5b58\u5728\u4e00\u4e2a\u81f4\u547d\u7f3a\u9677:\u4f7f\u7528new\u5206\u914d\u5143\u7d20,\u4f46\u6ca1\u6709\u91ca\u653e\u5143\u7d20. \u5c3d\u7ba1C++\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5783\u573e\u56de\u6536\u5668\u7684\u63a5\u53e3,\u4f46\u5e76\u4e0d\u80fd\u4fdd\u8bc1\u4ed6\u603b\u662f\u53ef\u7528\u7684\u4ee5\u5c06\u4e3a\u7528\u5185\u5b58\u63d0\u4f9b\u7ed9\u65b0\u5bf9\u8c61. \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b, \u4f60\u4e0d\u80fd\u4f7f\u7528\u56de\u6536\u5668, \u800c\u4e14\u901a\u5e38\u5904\u4e8e\u903b\u8f91\u6216\u6027\u80fd\u8003\u8651, \u4f60\u66f4\u60f3\u4f7f\u7528\u7cbe\u786e\u7684\u56de\u6536\u63a7\u5236. \u56e0\u6b64\u6211\u4eec\u9700\u8981\u4e00\u79cd\u673a\u5236\u6765\u786e\u4fdd\u6784\u9020\u51fd\u6570\u5206\u914d\u7684\u5185\u5b58\u4e00\u5b9a\u4f1a\u88ab\u91ca\u653e, \u8fd9\u79cd\u673a\u5236\u5c31\u53eb\u505a",(0,i.jsx)(n.strong,{children:"\u6790\u6784\u51fd\u6570"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="destructor"',children:"class Vector{\n    public:\n    Vector(int s):elem{new double[s]},sz{s}{\n        //\u521d\u59cb\u5316\u5143\u7d20\n        for(int i = 0; i < s; ++i)\n            elem[i] = 0; \n    }\n\n    // \u6790\u6784\u51fd\u6570 \u91ca\u653e\u8d44\u6e90\n    ~Vector(){delete[]elem;}\n\n    double& operator[](int i);\n    int size() const;\n\n    private:\n    double* elem;//elem\u6307\u5411\u4e00\u4e2a\u542b\u6709sz\u4e2a\u7684double\u6570\u7ec4\n    int sz;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6790\u6784\u51fd\u6570\u7684\u547d\u540d\u89c4\u5219\u662f\u6c42\u8865\u8fd0\u7b97\u7b26~\u540e\u63a5\u7c7b\u7684\u540d\u5b57,\u662f\u6784\u9020\u51fd\u6570\u7684\u8865\u5145. Vector\u7684\u6784\u9020\u51fd\u6570\u4f7f\u7528new\u8fd0\u7b97\u7b26\u4ece\u52a8\u6001\u5b58\u50a8\u5206\u914d\u5185\u5b58. \u6790\u6784\u51fd\u6570\u5219\u4f7f\u7528delete[] \u8fd0\u7b97\u7b26\u91ca\u653e\u8be5\u5185\u5b58\u5b9e\u73b0\u6e05\u7406. \u666e\u901a\u7684delete\u91ca\u653e\u5355\u4e2a\u5bf9\u8c61,delete[]\u91ca\u653e\u6570\u7ec4."}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e00\u5207\u65e0\u9700Vector\u7684\u4f7f\u7528\u8005\u5e72\u9884,\u4f7f\u7528\u8005\u53ea\u9700\u50cf\u5185\u7f6e\u7c7b\u578b\u7684\u53d8\u91cf\u90a3\u6837\u521b\u5efa\u548c\u4f7f\u7528Vector\u5bf9\u8c61\u5c31\u53ef\u4ee5\u4e86."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="fct.cpp"',children:"void fct(int n){\n    Vector v(n);\n    //\u4f7f\u7528v\n    {\n        Vector v2(2*n);\n        //\u4f7f\u7528v\u548cv2\n    }//v2 \u5728\u6b64\u5904\u9500\u6bc1\n    //\u4f7f\u7528v\n}//v\u5728\u6b64\u5904\u9500\u6bc1\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6784\u9020\u51fd\u6570\u5206\u914d\u5143\u7d20\u5e76\u6b63\u786e\u521d\u59cb\u5316Vector\u7684\u6210\u5458, \u6790\u6784\u51fd\u6570\u91ca\u653e\u5143\u7d20. \u8fd9\u5c31\u662f\u6240\u8c13\u7684\u6570\u636e\u53e5\u67c4\u6a21\u578b(handle-to-data model), \u5e38\u7528\u6765\u7ba1\u7406\u5728\u5bf9\u8c61\u751f\u547d\u5468\u671f\u4e2d\u5927\u5c0f\u4f1a\u53d1\u751f\u53d8\u5316\u7684\u6570\u636e.\u5728\u6784\u9020\u51fd\u6570\u4e2d\u8bf7\u6c42\u8d44\u6e90,\u7136\u540e\u518d\u6790\u6784\u51fd\u6570\u4e2d\u91ca\u653e\u5b83\u4eec\u7684\u6280\u672f\u53eb\u505a\u8d44\u6e90\u8bf7\u6c42\u5373\u521d\u59cb\u5316(Resource Acquisition Is Initialization,RAII), \u5b83\u4ee4\u6211\u4eec\u5f97\u4ee5\u89c4\u907f\u88f8new\u7684\u8bf7\u6c42,\u540c\u65f6\u4e5f\u5e94\u8be5\u907f\u514d\u88f8delete\u7684\u8bf7\u6c42."}),"\n",(0,i.jsx)(n.h4,{id:"\u521d\u59cb\u5316\u5bb9\u5668",children:"\u521d\u59cb\u5316\u5bb9\u5668"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u521d\u59cb\u5316\u503c\u5217\u8868\u6784\u9020\u51fd\u6570initializer-list constructor: \u7528\u4e00\u4e2a\u5143\u7d20\u5217\u8868\u8fdb\u884c\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(n.li,{children:"push_back():\u5728\u5e8f\u5217\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5143\u7d20"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="initializer"',children:"class Vector{\n    public:\n    Vector(std::initializer_list<double>);//\u7528\u4e00\u4e2adouble\u5217\u8868\u8fdb\u884c\u521d\u59cb\u5316\n    void push_back(double); //\u5728\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20,\u5bb9\u5668\u7684\u957f\u5ea6\u52a01\n}\n\nVector::Vector(statusbar_list<double> lst)\n:elem{new double[lst.size()]},sz{static_cast<int>(lst.size())}\n{\n    copy(lst.begin(),lst.end(),elem);\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6807\u51c6\u5e93\u7684\u5e26\u4e0b\u548c\u4e0b\u8868\u90fd\u7528unsigned\u6574\u6570,\u6240\u4ee5\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4e11\u964b\u7684static_cast\u6765\u5c06\u521d\u59cb\u503c\u5217\u8868\u7684\u5927\u5c0f\u663e\u5f0f\u8f6c\u6362\u4e3a\u4e00\u4e2aint."}),"\n",(0,i.jsx)(n.admonition,{type:"success",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"reinterpret_cast \u5c06\u5bf9\u8c61\u89c6\u4e3a\u7b80\u5355\u7684\u5b57\u8282\u5e8f\u5217"}),"\n",(0,i.jsx)(n.li,{children:"const_cast \u5f3a\u5236\u53bb\u6389const"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"abstract-class",children:"abstract class"}),"\n",(0,i.jsx)(n.p,{children:"Vector\u548ccomplex\u5c5e\u4e8e\u5177\u4f53\u7c7b\u578b,\u56e0\u4e3a\u5b83\u4eec\u7684\u8868\u793a\u5c5e\u4e8e\u5b9a\u4e49\u7684\u4e00\u90e8\u5206. \u5728\u8fd9\u4e00\u70b9\u4e0a,\u5b83\u4eec\u4e0e\u5185\u7f6e\u7c7b\u578b\u5f88\u76f8\u4f3c."}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u53cd,\u62bd\u8c61\u7c7b\u578b\u5c06\u4f7f\u7528\u8005\u4e0e\u7c7b\u7684\u5b9e\u73b0\u7ec6\u8282\u5b8c\u5168\u9694\u79bb\u5f00\u6765, \u4e3a\u6b64\u6211\u4eec\u5c06\u63a5\u53e3\u548c\u8868\u793a\u5206\u79bb\u5f00\u6765,\u5e76\u4e14\u653e\u5f03\u4e86\u7eaf\u5c40\u90e8\u53d8\u91cf, \u7531\u4e8e\u6211\u4eec\u5bf9\u62bd\u8c61\u7c7b\u578b\u7684\u8868\u793a\u4e00\u65e0\u6240\u77e5(\u751a\u81f3\u5bf9\u5927\u5c0f\u4e5f\u4e0d\u4e86\u89e3), \u6240\u4ee5\u5fc5\u987b\u4ece\u81ea\u7531\u5b58\u50a8\u7684\u5206\u914d\u5bf9\u8c61,\u7136\u540e\u901a\u8fc7\u5f15\u7528\u6216\u6307\u9488\u8bbf\u95ee\u5bf9\u8c61."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="container"',children:"class Container{\n    public:\n    virtual double& operator[](int) = 0; //\u7eaf\u865a\u51fd\u6570\n    virtual int size() const = 0; //\u5e38\u91cf\u6210\u5458\u51fd\u6570\n    virtual ~Container( ){} //\u6790\u6784\u51fd\u6570\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7c7b\u662f\u4e00\u4e2a\u7eaf\u63a5\u53e3,\u662f\u4e3a\u7a0d\u540e\u5b9a\u4e49\u7684\u7279\u5b9a\u5bb9\u5668\u8bbe\u8ba1\u7684\u63a5\u53e3. \u5173\u952e\u5b50virtual\u7684\u610f\u601d\u662f\u53ef\u80fd\u968f\u540e\u5728\u6d3e\u751f\u7c7b\u4e2d\u88ab\u91cd\u65b0\u5b9a\u4e49. \u4e0d\u51fa\u6240\u6599,\u6211\u4eec\u5c06\u8fd9\u79cd\u58f0\u660e\u4e3avirtual\u7684\u51fd\u6570\u6210\u4e3a\u865a\u51fd\u6570. Container\u7c7b\u7684\u6d3e\u751f\u7c7b\u5e94\u4e3aContainer\u63a5\u53e3\u63d0\u4f9b\u5177\u4f53\u5b9e\u73b0. \u8bed\u6cd5 ",(0,i.jsx)(n.code,{children:"=0"})," \u770b\u8d77\u6765\u6709\u70b9\u5947\u602a,\u5b83\u8bf4\u660e\u51fd\u6570\u662f\u7eaf\u865a\u51fd\u6570. \u5373Container\u7684\u6d3e\u751f\u7c7b\u5fc5\u987b\u91cd\u65b0\u5b9a\u4e49\u8fd9\u4e2a\u51fd\u6570. \u56e0\u6b64\u6211\u4eec\u4e0d\u53ef\u80fd\u5b9a\u4e49\u4e00\u4e2aContainer\u51fd\u6570"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"Container c; //\u9519\u8bef, \u4e0d\u80fd\u5b9a\u4e49\u62bd\u8c61\u7c7b\u5bf9\u8c61\nContainer* p = new Vector_Container(10); //\u6b63\u786e\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Container\u53ea\u662f\u4f5c\u4e3a\u63a5\u53e3\u51fa\u73b0, \u4e3a\u5177\u4f53\u5b9e\u73b0",(0,i.jsx)(n.code,{children:"operator[]()"}),"\u548c",(0,i.jsx)(n.code,{children:"size()"}),"\u51fd\u6570\u7684\u7c7b\u63d0\u4f9b\u63a5\u53e3. \u5305\u542b\u7eaf\u865a\u51fd\u6570\u7684\u7c7b\u79f0\u4e3a\u62bd\u8c61\u7c7b(abstract class);"]}),"\n",(0,i.jsx)(n.p,{children:"Container \u7684\u7528\u6cd5:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="use.cpp"',children:"void use(Container& c){\n    const int sz = c.size();\n    for (int i = 0; i < sz; ++i) {\n        cout << c[i] << endl;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"use()\u5ffd\u7565\u4e86\u5b9e\u73b0\u7ec6\u8282\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528Container\u63a5\u53e3. \u6839\u672c\u4e0d\u77e5\u9053\u90a3\u4e2a\u7c7b\u578b\u5b9e\u73b0\u4e86\u5b83\u4eec."}),"\n",(0,i.jsx)(n.p,{children:"Container\u6ca1\u6709\u6784\u9020\u51fd\u6570,\u8fd9\u5bf9\u62bd\u8c61\u7c7b\u5f88\u666e\u904d,\u56e0\u4e3a\u5b83\u6ca1\u6709\u6570\u636e\u9700\u8981\u521d\u59cb\u5316. Container\u6709\u4e00\u4e2a\u6790\u6784\u51fd\u6570(virtual \u7684),\u56e0\u4e3a\u62bd\u8c61\u7c7b\u9700\u8981\u901a\u8fc7\u5f15\u7528\u6216\u8005\u6307\u9488\u6765\u64cd\u7eb5,\u5f53\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u6307\u9488\u9500\u6bc1Container\u65f6,\u5e76\u4e0d\u6e05\u695a\u5b83\u7684\u5b9e\u73b0\u90e8\u5206\u5230\u5e95\u62e5\u6709\u7740\u90a3\u4e9b\u8d44\u6e90."}),"\n",(0,i.jsx)(n.p,{children:"\u62bd\u8c61\u7c7bContainer\u53ea\u5b9a\u4e49\u4e86\u63a5\u53e3,\u672a\u63d0\u4f9b\u5b9e\u73b0,\u4e3a\u4e86\u4ee4Container\u6709\u7528, \u6211\u4eec\u5fc5\u987b\u5b9e\u73b0\u4e00\u4e2a\u5b9a\u4e49\u4e86\u63a5\u53e3\u6240\u9700\u51fd\u6570\u7684\u5bb9\u5668. \u4e3a\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5177\u4f53\u7c7b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="vector_container.cpp"',children:"class Vector_container : public Container{\n    public:\n    Vector_container(int s):v(s){}\n    ~Vector_container(){}\n    double& operator[](int i) override {return v[i];}\n    int size() const override {return v.size();}\n    private:\n    Vector v;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:[":public","\u53ef\u8bfb\u4f5c\u6d3e\u751f\u4e8e\u6216\u8005\u5b50\u7c7b\u578b. \u6211\u4eec\u8bf4\u7c7bvector_container\u6d3e\u751f\u4e8e(derived)\u7c7bContainer,\u800c\u7c7bContainer\u662f\u7c7bVector_container\u7684\u57fa\u7c7b(base). \u57fa\u7c7b\u548c\u6d3e\u751f\u7c7b\u7684\u4f7f\u7528\u901a\u5e38\u53eb\u505a\u7ee7\u627f(inheritance);"]}),"\n",(0,i.jsxs)(n.p,{children:["\u6211\u4eec\u79f0\u6210\u5458",(0,i.jsx)(n.code,{children:"operator[]()"}),"\u548c",(0,i.jsx)(n.code,{children:"size()"}),"\u8986\u76d6(override)\u4e86\u57fa\u7c7bContainer\u4e2d\u7684\u5bf9\u5e94\u6210\u5458. \u6211\u4eec\u4f7f\u7528\u4e86\u663e\u793a\u7684override\u6765\u6e05\u695a\u7684\u8bf4\u660e\u610f\u56fe. \u8fd9\u662f\u53ef\u9009\u7684. \u4f46\u4f7f\u7528\u663e\u793a\u8bf4\u660e\u7f16\u8bd1\u5668\u80fd\u6355\u83b7\u9519\u8bef, \u4f8b\u5982\u9519\u8bef\u62fc\u5199\u4e86\u51fd\u6570\u7684\u540d\u5b57\u6216\u662fvirtual\u51fd\u6570\u53ca\u610f\u56fe\u8986\u76d6\u4ed6\u7684\u7248\u672c\u7c7b\u578b\u6709\u5fae\u5c0f\u5dee\u5f02. \u663e\u5f0f\u4f7f\u7528override\u5728\u8f83\u5927\u7684\u7c7b\u5c42\u6b21\u4e2d\u5c24\u5176\u6709\u7528. \u56e0\u4e3a\u5982\u679c\u4e0d\u4f7f\u7528\u7684\u8bdd\u5f88\u96be\u77e5\u9053\u90a3\u4e2a\u51fd\u6570\u5e94\u8be5\u8986\u76d6\u54ea\u4e2a."]}),"\n",(0,i.jsxs)(n.p,{children:["\u6790\u6784\u51fd\u6570\u8986\u76d6\u4e86\u57fa\u7c7b\u6790\u6784\u51fd\u6570. \u6210\u5458\u7684\u6790\u6784\u51fd\u6570",(0,i.jsx)(n.del,{children:"Vector()\u88ab\u5176\u6240\u5c5e\u7c7b\u7684\u6790\u6784\u51fd\u6570"}),"Vector_container()\u9690\u5f0f\u8c03\u7528."]}),"\n",(0,i.jsx)(n.h3,{id:"\u865a\u51fd\u6570",children:"\u865a\u51fd\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u865a\u51fd\u6570\u8868vtbl"}),"\n",(0,i.jsx)(n.h2,{id:"class-hierarchy",children:"class hierarchy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="\u7c7b\u7684\u7ee7\u627f"',children:"class Shape{\n    public:\n    virtual Point center() const = 0; //\u7eaf\u865a\u51fd\u6570\n    virtual void move(Point to) = 0;\n\n    virtual void draw() const = 0;\n    virtual void rotate(int angle) = 0;\n\n    virtual ~Shape(){} //destructor\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u63a5\u53e3\u81ea\u7136\u662f\u4e00\u4e2a\u62bd\u8c61\u7c7b. \u5bf9\u4e8e\u6bcf\u79cdshape\u6765\u8bf4,\u9664\u4e86vtbl\u6307\u9488\u7684\u4f4d\u7f6e\u5916,\u8868\u793a\u7684\u5404\u4e0d\u76f8\u540c."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="rotate_all.cpp"',children:"void rotate_all(vector< Shape* >& v, int angle){\n    for(auto p:v) p -> rotate(angle);\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u5b9a\u4e49\u4e00\u79cd\u5177\u4f53\u7684\u5f62\u72b6,\u9996\u5148\u5fc5\u987b\u6307\u660e\u5b83\u662f\u4e00\u4e2aShape, \u7136\u540e\u5728\u89c4\u5b9a\u5176\u7279\u6709\u7684\u5c5e\u6027:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="circle.cpp"',children:"class Circle: public Shape {\n    public:\n    Circle(Point p, int rad); //constructor\n    Point center()const override {\n        return x;\n    }\n    void move(Point to) const override {\n        x = to;\n    }\n\n    void draw() const override;\n    void rotate(int) const override{}\n    private:\n    Point x;\n    int r;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ee7\u7eed\u6784\u9020:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="smiley.cpp"',children:"class Smiley: public Circle{\n    public:\n    Smiley(Point p, int rad):Circle{p,r},mouth{nullptr}{}\n    ~Smiley(){\n        delete mouth;\n        delete[](eyes);\n    }\n\n    void move(Point to) override;\n    void draw() const override;\n    void rotate(int) override;\n    void add_eye(Shape* s){\n        eyes.push_back(s);\n    };\n    void set_mouth(Shape* s);\n    virtual void wink(int i); //\u7728\u773c\u6570i\n\n    private:\n    vector<Shape*> eyes; //\u901a\u5e38\u6709\u4e24\u53ea\u773c\n    Shape* mouth;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u53ef\u4ee5\u8c03\u7528Smiley\u7684\u57fa\u7c7b\u7684draw()\u53ca\u5176\u6210\u5458\u7684draw()\u6765\u5b9a\u4e49Smiley::draw():"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="draw"',children:"void Smiley::draw()  const {\n    Circle::draw();\n    for(auto p : eyes) p -> draw();\n    mouth -> draw();\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Shape\u7684destructor\u662f\u4e00\u4e2a\u865a\u51fd\u6570, Smiley\u7684destructor\u8986\u76d6\u4e86\u5b83."}),"\n",(0,i.jsx)(n.admonition,{title:"\u7c7b\u5c42\u6b21\u7ed3\u6784\u7684\u597d\u5904",type:"success",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u63a5\u53e3\u7ee7\u627f: \u6d3e\u751f\u7c7b\u5bf9\u8c61\u53ef\u4ee5\u7528\u5728\u4efb\u4f55\u8981\u6c42\u57fa\u7c7b\u5bf9\u8c61\u7684\u5730\u65b9,\u5373\u57fa\u7c7b\u62c5\u5f53\u4e86\u6d3e\u751f\u7c7b\u63a5\u53e3\u7684\u89d2\u8272"}),"\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u7ee7\u627f:\u79ef\u7d2f\u8d1f\u8d23\u63d0\u4f9b\u53ef\u4ee5\u7b80\u5316\u6d3e\u751f\u7c7b\u5b9e\u73b0\u7684\u51fd\u6570\u6216\u8005\u6570\u636e."}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="\u4ece\u8f93\u5165\u6d41\u8bfb\u5165\u63cf\u8ff0\u5f62\u72b6\u7684\u6570\u636e\u5e76\u6784\u9020\u5bf9\u5e94\u7684Shape"',children:"enum class kind {circle,triangle,smiley};\nShape* read_shape(istream& is){\n    //...\u4ece\u8f93\u5165\u6d41is\u4e2d\u8bfb\u5165\u5f62\u72b6\u63cf\u8ff0\u4fe1\u606f,\u627e\u5230\u5f62\u72b6\u7c7b\u522bk \n    switch(k) {\n        case kind.circle:\n        return new Circle{p,r};\n        case kind.triangle:\n        return new Triangle{p1,p2,p3};\n        case kind.smiley:\n        Smiley* ps = new Smiley{p,r};\n        ps -> add_eye(e1);\n        ps -> add_eye(e2);\n        ps -> set_mouth(m);\n        return ps;\n    }\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7a0b\u5e8f\u4f7f\u7528\u51fd\u6570\u7684\u65b9\u5f0f\u5982\u4e0b:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="user.cpp"',children:"void user(){\n    std::vector<Shape*> v;\n    while(cin) v.push_back(read_shape(cin));\n    draw_all(v); //\u5bf9\u6bcf\u4e2a\u5143\u7d20\u8c03\u7528draw\n    rotate_all(v,45); //\u5bf9\u6bcf\u4e2a\u5143\u7d20\u65cb\u8f6c45\u5ea6\n    for(auto p:v) delete p; //\u5220\u9664\u5143\u7d20\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5c42\u6b21\u6f2b\u6e38",children:"\u5c42\u6b21\u6f2b\u6e38"}),"\n",(0,i.jsx)(n.p,{children:'read_shape()\u8fd4\u56deshape*\u6307\u9488,\u4ece\u800c\u6211\u4eec\u53ef\u4ee5\u6309\u76f8\u4f3c\u7684\u65b9\u5f0f\u5904\u7406\u6240\u6709\u7684Shape. \u4f46\u662f\u5982\u679c\u6211\u4eec\u60f3\u4f7f\u7528\u53ea\u6709\u67d0\u4e2a\u7279\u5b9a\u6d3e\u751f\u7c7b\u624d\u63d0\u4f9b\u7684\u6210\u5458\u51fd\u6570,\u6bd4\u5982smiley_wink(),\u5219\u53ef\u4ee5\u4f7f\u7528dynamic_cast\u8fd0\u7b97\u7b26\u8be2\u95ee"\u8fd9\u4e2aShape\u662fSmiley\u5417".'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="dynamic_cast"',children:"Shape * ps {read_shape(cin)};\nif (Smiley *p = dynamic_cast<Smiley*>(ps)){\n    // ps\u6307\u5411\u4e00\u4e2aSmiley \u5219\u662fSmiley\u4f7f\u7528\u5b83\n}else{\n    //\u4e0d\u662fSmiley\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u5728\u8fd0\u884c\u65f6dynamic_cast\u7684\u53c2\u6570\u6240\u6307\u5411\u5bf9\u8c61\u7684\u7c7b\u578b\u4e0d\u662f\u671f\u671b\u7684\u7c7b\u578b\u6216\u5176\u6d3e\u751f\u7c7b,\u5219dynamic_cast\u8fd4\u56denullptr."}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u8ba4\u4e3a\u6307\u5411\u4e0d\u540c\u6d3e\u751f\u7c7b\u5bf9\u8c61\u7684\u6307\u9488\u662f\u5408\u6cd5\u53c2\u6570,\u5c31\u53ef\u4ee5\u5bf9\u6307\u9488\u7c7b\u578b\u4f7f\u7528dynamic_cast,\u7136\u540e\u68c0\u67e5\u7ed3\u679c\u662f\u5426\u662fnullptr."}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u4e0d\u80fd\u63a5\u6536\u4e0d\u540c\u7c7b\u578b,\u53ef\u4ee5\u7b80\u5355\u7684\u5bf9\u5f15\u7528\u7c7b\u578b\u4f7f\u7528dynamic_cast, \u5982\u679c\u5bf9\u8c61\u4e0d\u662f\u4e0e\u5176\u7c7b\u578b,dynamic_cast\u4f1a\u629b\u51fa\u4e00\u4e2abad_cast\u5f02\u5e38."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="refs & dynamic_cast"',children:"Shape* ps {read_shape(cin)};\nSmiley& r {dynamic_cast<Smiley*>(*ps)}; //\u8981\u5728\u67d0\u5904\u6355\u6349std::bad_cast\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u907f\u514d\u8d44\u6e90\u6cc4\u9732",children:"\u907f\u514d\u8d44\u6e90\u6cc4\u9732"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u81ea\u7531\u5b58\u50a8\u4e0a\u5206\u914d\u7684\u5bf9\u8c61\u7684\u6307\u9488\u662f\u5371\u9669\u7684. \u6211\u4eec\u4e0d\u5e94\u8be5\u7528\u4e00\u4e2a\u666e\u901a\u8001\u5f0f\u7684\u6307\u9488\u6765\u8868\u793a\u6240\u6709\u6743."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="user"',children:"void user(int x){\n    shape* p = new Circle{Point{0,0},10};\n    //...\n    if(x < 0) throw Bad_x{}; //\u5b58\u5728\u6f5c\u5728\u5371\u9669\n    if(x == 0) return;   //\u5b58\u5728\u6f5c\u5728\u5371\u9669\n    //...\n    delete p;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u9664\u975ex\u662f\u6574\u6570,\u5426\u5219\u8fd9\u6bb5\u4ee3\u7801\u5c31\u4f1a\u53d1\u751f\u6cc4\u6f0f. \u5c06new\u7684\u7ed3\u679c\u8d4b\u4e88\u4e00\u4e2a\u88f8\u6307\u9488\u5c31\u662f\u81ea\u627e\u9ebb\u70e6. \u8fd9\u79cd\u95ee\u9898\u7684\u4e00\u4e2a\u7b80\u5355\u89e3\u51b3\u65b9\u6848\u662f:\u5982\u679c\u9700\u8981\u91ca\u653e\u8d44\u6e90\u5219\u4e0d\u8981\u4f7f\u7528\u88f8\u6307\u9488,\u800c\u662f\u7528\u6807\u51c6\u5e93unique_str;"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="unique_ptr"',children:"class Smiley : public Circle{\n    //...\n    private:\n    vector<unique_ptr<Shape>> eyes;\n    unique_ptr<Shape> mouth;\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355,\u901a\u7528,\u9ad8\u6548\u7684\u8d44\u6e90\u7ba1\u7406\u6280\u672f\u7684\u4f8b\u5b50."}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e00\u6539\u53d8\u6709\u4e00\u4e2a\u4ee4\u4eba\u6109\u5feb\u7684\u526f\u4f5c\u7528. \u6211\u4eec\u4e0d\u5728\u9700\u8981\u4e3aSmiley\u5b9a\u4e49\u6790\u6784\u51fd\u6570. \u7f16\u8bd1\u5668\u4f1a\u9690\u5f0f\u751f\u6210\u4e00\u4e2a\u6790\u6784\u51fd\u6570. \u5b83\u4f1a\u5bf9vector\u4e2d\u7684unique_ptr\u8fdb\u884c\u6240\u9700\u8981\u7684\u6790\u6784\u64cd\u4f5c. \u4f7f\u7528unique_ptr\u7684\u4ee3\u7801\u4e0e\u6b63\u786e\u4f7f\u7528\u88f8\u6307\u9488\u7684\u4ee3\u7801\u5177\u6709\u5b8c\u5168\u76f8\u540c\u7684\u6548\u7387."}),"\n",(0,i.jsx)(n.p,{children:"\u73b0\u5728\u6211\u4eec\u8003\u8651read_shape()\u7684\u4f7f\u7528\u8005."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",metastring:'title="read_shape.cpp"',children:"unique_ptr<Shape> read_shape(istream& is){\n    //... \u4eceis\u4e2d\u8bfb\u53d6\u6027\u72b6\u63cf\u8ff0\u4fe1\u606f,\u627e\u5230\u5f62\u72b6\u7684\u7c7b\u522bk\n    switch(k){\n        case Kind::circle:\n        //\u8bfb\u53d6circle\u6570\u636epoint,int\u5230p\u548cr\n        return unique_ptr<Shape>{new Circle{p,r}}\n        //...\n    }\n}\n\nvoid user(){\n    vector<unique_ptr<Shape>> v;\n    while(cin)\n    v.push_back(read_shape(cin));\n    draw_all(v);\n    rotate_all(v,45);\n}//\u6240\u6709\u5f62\u5f0f\u88ab\u9690\u5f0f\u9500\u6bc1\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>s});var i=r(96540);const t={},c=i.createContext(t);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
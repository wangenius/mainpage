"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4158],{4966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(4848),s=t(8453);const o={},a="React",c={id:"repository/TS/React",title:"React",description:"useState",source:"@site/docs/repository/TS/React.mdx",sourceDirName:"repository/TS",slug:"/repository/TS/React",permalink:"/docs/repository/TS/React",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/repository/TS/React.mdx",tags:[],version:"current",frontMatter:{},sidebar:"repository",previous:{title:"CSS",permalink:"/docs/repository/TS/CSS"},next:{title:"async",permalink:"/docs/repository/TS/async"}},i={},l=[{value:"useState",id:"usestate",level:2},{value:"useContext",id:"usecontext",level:2},{value:"useRef \u4e0e createRef",id:"useref-\u4e0e-createref",level:2},{value:"useImperativeHandle",id:"useimperativehandle",level:2},{value:"forwardRef",id:"forwardref",level:2},{value:"useMemo\u548cuseCallback",id:"usememo\u548cusecallback",level:2},{value:"useMemo",id:"usememo",level:3},{value:"useCallBack\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\uff1f",id:"usecallback\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528",level:3},{value:"useLayoutEffect",id:"uselayouteffect",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,r.jsx)(n.h2,{id:"usestate",children:"useState"}),"\n",(0,r.jsx)(n.h2,{id:"usecontext",children:"useContext"}),"\n",(0,r.jsxs)(n.p,{children:["The \u8fd9",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useContext",children:"useContext Hook\u94a9"})," is a technique for passing data down the component tree without having to pass props through components. It is used by creating a provider component and often by creating a Hook to consume the value in a child component.\u662f\u4e00\u79cd\u5728\u7ec4\u4ef6\u6811\u4e2d\u4f20\u9012\u6570\u636e\u800c\u65e0\u9700\u901a\u8fc7\u7ec4\u4ef6\u4f20\u9012 props \u7684\u6280\u672f\u3002\u5b83\u901a\u8fc7\u521b\u5efa\u63d0\u4f9b\u8005\u7ec4\u4ef6\u6765\u4f7f\u7528\uff0c\u5e76\u4e14\u901a\u5e38\u901a\u8fc7\u521b\u5efa Hook \u6765\u4f7f\u7528\u5b50\u7ec4\u4ef6\u4e2d\u7684\u503c\u6765\u4f7f\u7528\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"The type of the value provided by the context is inferred from the value passed to the\u4e0a\u4e0b\u6587\u63d0\u4f9b\u7684\u503c\u7684\u7c7b\u578b\u662f\u4ece\u4f20\u9012\u7ed9\u7684\u503c\u63a8\u65ad\u51fa\u6765\u7684createContext call:\u79f0\u547c\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"The"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'import { createContext, useContext, useState } from \'react\';\n\ntype Theme = "light" | "dark" | "system";\nconst ThemeContext = createContext<Theme>("system");\n\nconst useGetTheme = () => useContext(ThemeContext);\n\nexport default function MyApp() {\n  const [theme, setTheme] = useState<Theme>(\'light\');\n\n  return (\n    <ThemeContext.Provider value={theme}>\n      <MyComponent />\n    </ThemeContext.Provider>\n  )\n}\n\nfunction MyComponent() {\n  const theme = useGetTheme();\n\n  return (\n    <div>\n      <p>Current theme: {theme}</p>\n    </div>\n  )\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"useref-\u4e0e-createref",children:"useRef \u4e0e createRef"}),"\n",(0,r.jsx)(n.p,{children:"useRef \u548c createRef \u7684\u533a\u522b\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"createRef \u5b83\u53ef\u4ee5\u7528\u5728\u7c7b\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0c\u58f0\u660e\u65f6\u4e0d\u80fd\u7ed9\u521d\u59cb\u503c"}),"\n",(0,r.jsx)(n.p,{children:"useRef \u5b83\u53ea\u80fd\u4f7f\u7528\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\uff0cuseRef \u5b83\u53ef\u4ee5\u5728\u58f0\u660e\u65f6\u7ed9\u521d\u59cb\u503c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"const usernameCreateRef = createRef()\nconst usernameUseRef = useRef(null)\n"})}),"\n",(0,r.jsx)(n.p,{children:"createRef \u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u65f6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ref \u5bf9\u8c61\uff0c\u4f46\u662f\u7c7b\u7ec4\u4ef6\u4e2d\u7531\u4e8e\u751f\u547d\u5468\u671f\u7684\u5b58\u5728\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u4e0d\u91cd\u65b0\u521b\u5efa\uff08\u53ef\u4ee5\u5c06 createRef \u5199\u5728\u7c7b\u7ec4\u4ef6\u7684\u6784\u9020\u51fd\u6570\u4e2d\uff09\uff0c\u4f46\u662f\u5b83\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u5c31\u6ca1\u6709\u8fd9\u79cd\u6548\u679c\u4e86\uff0c\u5b83\u4f1a\u88ab\u91cd\u590d\u521b\u5efa\uff0c\u7531\u6b64\u5bfc\u81f4\u6027\u80fd\u4f4e\u4e0b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"useRef \u7b2c1\u6b21\u6e32\u67d3\u65f6\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u4e4b\u540e\uff0c\u518d\u65b0\u6e32\u67d3\u65f6\uff0c\u5982\u679c\u53d1\u73b0\u8fd9\u4e2a\u5bf9\u8c61\u5df2\u7ecf\u5b58\u5728\u8fc7\u5c31\u4e0d\u4f1a\u518d\u521b\u5efa\uff0c\u5b83\u7684\u6027\u80fd\u66f4\u597d\u4e00\u4e9b\uff0c\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u63a8\u8350\u4f7f\u7528 useRef\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"createRef \u6bcf\u6b21\u6e32\u67d3\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5f15\u7528\uff0c\u800c useRef \u6bcf\u6b21\u90fd\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u5f15\u7528\u3002"})}),"\n",(0,r.jsx)(n.p,{children:"useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist(\u575a\u6301) for the full lifetime of the component(\u7ec4\u4ef6)."}),"\n",(0,r.jsxs)(n.p,{children:["When you want a component to \u201cremember\u201d some information, but you don\u2019t want that information to ",(0,r.jsx)(n.a,{href:"https://react.dev/learn/render-and-commit",children:"trigger(\u89e6\u53d1) new renders"}),", you can use a ",(0,r.jsx)(n.em,{children:"ref"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"useimperativehandle",children:"useImperativeHandle"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528\u5b83\u53ef\u4ee5\u900f\u4f20 Ref\uff0c\u56e0\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6ca1\u6709\u5b9e\u4f8b\uff0c\u6240\u4ee5\u5728\u9ed8\u8ba4\u81ea\u5b9a\u4e49\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4e0d\u80fd\u4f7f\u7528 ref \u5c5e\u6027\uff0c\u4f7f\u7528\u4e3a\u4e86\u89e3\u51b3\u6b64\u95ee\u9898\uff0creact \u63d0\u4f9b\u4e86\u4e00\u4e2a hook \u548c\u4e00\u4e2a\u9ad8\u9636\u7ec4\u4ef6\u5b8c\u5e2e\u52a9\u51fd\u6570\u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 ref \u5c5e\u6027\u3002"}),"\n",(0,r.jsx)(n.p,{children:"useImperativeHandle \u96c6\u5408 useRef \u548c forwardRef \u6765\u6a21\u62df\u7ed9\u51fd\u6570\u7ec4\u4ef6\u7ed1\u5b9aref\u5bf9\u8c61\u6765\u5f97\u5230\u5b50\u7ec4\u4ef6\u4e2d\u5bf9\u5916\u66b4\u9732\u51fa\u6765\u7684\u65b9\u6cd5\u6216\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"import React, { useRef, forwardRef, useState, useImperativeHandle } from 'react'\n\nconst Child = forwardRef((props, _ref) => {\n  // \u503c\n  let [name, setName] = useState('\u5f20\u4e09')\n  // \u65b9\u6cd5\n  const setNameFn = name => setName(name)\n\n  // \u5bf9\u8c61\n  const userRef = useRef()\n\n  // \u53c2\u65701\uff1a\u5c31\u662f\u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684ref\u5bf9\u8c61\n  // \u53c2\u65702\uff1a\u56de\u8c03\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7a7f\u900f\u7ed9\u7236\u7ec4\u4ef6\u7684\u6570\u636e\n  useImperativeHandle(_ref, () => {\n    return {\n      // \u7ed9\u7236\u7ec4\u4ef6\u4f20\u56de\u4e86\n      // \u503c\n      name,\n      // \u65b9\u6cd5\n      setNameFn,\n      // \u5bf9\u8c61\n      userRef\n    }\n  })\n\n  return (\n    <div>\n      <h3>child\u7ec4\u4ef6 -- {name}</h3>\n      {/* \u8fd9\u91cc\u7684 ref \u662f\u5b50\u7ec4\u4ef6\u81ea\u5df1\u7684 */}\n      <input type=\"text\" ref={userRef} />\n    </div>\n  )\n})\n\nconst App = () => {\n  let childRef = useRef()\n  return (\n    <div>\n      <Child ref={childRef} />\n      <button\n        onClick={() => {\n          console.log(childRef.current.name)\n          childRef.current.setNameFn(Date.now() + '')\n          childRef.current.userRef.current.value = 'abc'\n        }}\n      >\n        ++++\n      </button>\n    </div>\n  )\n}\n\nexport default App\n"})}),"\n",(0,r.jsx)(n.h2,{id:"forwardref",children:"forwardRef"}),"\n",(0,r.jsx)(n.h2,{id:"usememo\u548cusecallback",children:"useMemo\u548cuseCallback"}),"\n",(0,r.jsx)(n.h3,{id:"usememo",children:"useMemo"}),"\n",(0,r.jsxs)(n.p,{children:["The \u8fd9",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react/useMemo",children:"useMemo"})," Hooks will create/re-access a memorized value from a function call, re-running the function only when dependencies passed as the 2nd parameter are changed. The result of calling the Hook is inferred from the return value from the function in the first parameter. You can be more explicit(\u663e\u5f0f) by providing a type argument to the Hook.\u6302\u94a9\u5c06\u521b\u5efa/\u91cd\u65b0\u8bbf\u95ee\u51fd\u6570\u8c03\u7528\u4e2d\u5b58\u50a8\u7684\u503c\uff0c\u4ec5\u5f53\u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7684\u4f9d\u8d56\u9879\u53d1\u751f\u66f4\u6539\u65f6\u624d\u91cd\u65b0\u8fd0\u884c\u8be5\u51fd\u6570\u3002\u8c03\u7528 Hook \u7684\u7ed3\u679c\u662f\u6839\u636e\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u51fd\u6570\u7684\u8fd4\u56de\u503c\u63a8\u65ad\u51fa\u6765\u7684\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5411 Hook \u63d0\u4f9b\u7c7b\u578b\u53c2\u6570\u6765\u66f4\u52a0\u660e\u786e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:"// The type of visibleTodos is inferred from the return value of filterTodos\n\nconst visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"usecallback\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528",children:"useCallBack\u5728\u4ec0\u4e48\u60c5\u51b5\u4e0b\u4f7f\u7528\uff1f"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u5728\u5f80\u5b50\u7ec4\u4ef6\u4f20\u5165\u4e86\u4e00\u4e2a\u51fd\u6570\u5e76\u4e14\u5b50\u7ec4\u4ef6\u88abReact.momo\u7f13\u5b58\u4e86\u7684\u65f6\u5019\u4f7f\u7528"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u50cf\u4e0a\u4e00\u8282\u6240\u8bf4\u7684\uff0cuseCallBack\u7684\u4f5c\u7528\u4e0d\u662f\u963b\u6b62\u51fd\u6570\u521b\u5efa\uff0c\u800c\u662f\u5728\u4f9d\u8d56\u4e0d\u53d8\u7684\u60c5\u51b5\u4e0b\u8fd4\u56de\u65e7\u51fd\u6570\u5730\u5740\uff08\u4fdd\u6301\u5730\u5740\u4e0d\u53d8\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"React.memo()\uff0c\u662f\u4e00\u79cd\u7f13\u5b58\u6280\u672f\u3002\u80fd\u770b\u5230\u8fd9\u91cc\u7684\u7b14\u53cb\u6211\u60f3\u90fd\u4e0d\u9700\u8981\u6211\u8be6\u7ec6\u89e3\u91caReact.memo\u662f\u5e72\u4ec0\u4e48\u7684\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u7b80\u5355\u8bf4\uff0cReact.memo()\u662f\u901a\u8fc7\u6821\u9a8cprops\u4e2d\u7684\u6570\u636e\u662f\u5426\u6539\u53d8\u7684\u6765\u51b3\u5b9a\u7ec4\u4ef6\u662f\u5426\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u7684\u4e00\u79cd\u7f13\u5b58\u6280\u672f\uff0c",(0,r.jsx)(n.strong,{children:"\u5177\u4f53\u70b9\u8bf4React.memo()\u5176\u5b9e\u662f\u901a\u8fc7\u6821\u9a8cProps\u4e2d\u7684\u6570\u636e\u7684\u5185\u5b58\u5730\u5740\u662f\u5426\u6539\u53d8\u6765\u51b3\u5b9a\u7ec4\u4ef6\u662f\u5426\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u7684\u4e00\u79cd\u6280\u672f\u3002"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u5f80\u5b50\u7ec4\u4ef6\uff08\u5047\u8bbe\u5b50\u7ec4\u4ef6\u4e3aChild\u7ec4\u4ef6\uff09\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u5462\uff1f\u5f53\u7236\u7ec4\u4ef6\u7684",(0,r.jsx)(n.strong,{children:"\u5176\u4ed6State"}),"\uff08",(0,r.jsx)(n.strong,{children:"\u4e0eChild\u7ec4\u4ef6\u65e0\u5173\u7684state"}),"\uff09\u6539\u53d8\u7684\u65f6\u5019\u3002\u90a3\u4e48\uff0c\u56e0\u4e3a\u72b6\u6001\u7684\u6539\u53d8\uff0c\u7236\u7ec4\u4ef6\u9700\u8981\u91cd\u65b0\u6e32\u67d3\uff0c\u90a3\u88abReact.memo\u4fdd\u62a4\u7684\u5b50\u7ec4\u4ef6\uff08Child\u7ec4\u4ef6\uff09\u662f\u5426\u4f1a\u88ab\u91cd\u65b0\u6784\u5efa\uff1f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Rust",children:'import {useCallBack,memo} from \'react\';\n/**\u7236\u7ec4\u4ef6**/\nconst Parent = () => {\n  const [parentState,setParentState] = useState(0);  //\u7236\u7ec4\u4ef6\u7684state\n\n  //\u9700\u8981\u4f20\u5165\u5b50\u7ec4\u4ef6\u7684\u51fd\u6570\n  const toChildFun = () => {\n    console.log("\u9700\u8981\u4f20\u5165\u5b50\u7ec4\u4ef6\u7684\u51fd\u6570");\n  }\n\n  return <div>\n    <Button onClick={() => setParentState(val => val+1)}>\n      \u70b9\u51fb\u6211\u6539\u53d8\u7236\u7ec4\u4ef6\u4e2d\u4e0eChild\u7ec4\u4ef6\u65e0\u5173\u7684state\n    </Button>\n    //\u5c06\u7236\u7ec4\u4ef6\u7684\u51fd\u6570\u4f20\u5165\u5b50\u7ec4\u4ef6\n    <Child fun={toChildFun}></Child>\n    <div>\n\n      }\n\nconst Child = memo(() => {\n  consolo.log("\u6211\u88ab\u6253\u5370\u4e86\u5c31\u8bf4\u660e\u5b50\u7ec4\u4ef6\u91cd\u65b0\u6784\u5efa\u4e86")\n  return <div><div>\n    })\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u95ee:\u5f53\u6211\u70b9\u51fb\u7236\u7ec4\u4ef6\u4e2d\u7684Button\u6539\u53d8\u7236\u7ec4\u4ef6\u4e2d\u7684state\u3002\u5b50\u7ec4\u4ef6\u4f1a\u4e0d\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002\u4e4d\u4e00\u770b\uff0c\u6539\u53d8\u7684\u662fparentState\u8fd9\u4e2a\u53d8\u91cf\uff0c\u548c\u5b50\u7ec4\u4ef6\u534a\u6bdb\u94b1\u5173\u7cfb\u6ca1\u6709\uff0c\u5b50\u7ec4\u4ef6\u8fd8\u88abReact.memo\u4fdd\u62a4\u7740\uff0c\u597d\u50cf\u662f\u4e0d\u4f1a\u88ab\u91cd\u65b0\u6e32\u67d3\u3002\u4f46\u8fd9\u91cc\u7684\u95ee\u9898\u662f\uff0c\u4f60\u8981\u4f20\u4e2a\u5176\u4ed6\u53d8\u91cf\u8fdb\u53bb\u8fd9\u4e5f\u5c31\u8d70\u7684\u901a\u4e86\u3002",(0,r.jsx)(n.strong,{children:"\u4f46\u662f\u4f20\u5165\u7684\u662f\u51fd\u6570\uff0c\u4e0d\u884c\uff0c\u8d70\u4e0d\u901a\u3002\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002"})]}),"\n",(0,r.jsxs)(n.p,{children:["React.memo\u68c0\u6d4b\u7684\u662fprops\u4e2d\u6570\u636e\u7684\u6808\u5730\u5740\u662f\u5426\u6539\u53d8\u3002\u800c",(0,r.jsx)(n.strong,{children:"\u7236\u7ec4\u4ef6\u91cd\u65b0\u6784\u5efa\u7684\u65f6\u5019\uff0c\u4f1a\u91cd\u65b0\u6784\u5efa\u7236\u7ec4\u4ef6\u4e2d\u7684\u6240\u6709\u51fd\u6570"}),"\uff08\u65e7\u51fd\u6570\u9500\u6bc1\uff0c\u65b0\u51fd\u6570\u521b\u5efa\uff0c\u7b49\u4e8e\u66f4\u65b0\u4e86\u51fd\u6570\u5730\u5740\uff09,\u65b0\u7684\u51fd\u6570\u5730\u5740\u4f20\u5165\u5230\u5b50\u7ec4\u4ef6\u4e2d\u88abprops\u68c0\u6d4b\u5230\u6808\u5730\u5740\u66f4\u65b0\u3002\u4e5f\u5c31\u5f15\u53d1\u4e86\u5b50\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\uff0c\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u91cc\u9762\uff0c\u5b50\u7ec4\u4ef6\u662f\u8981\u88ab\u91cd\u65b0\u6e32\u67d3\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528useCallBack\u5305\u4e00\u4e0b\u9700\u8981\u4f20\u5165\u5b50\u7ec4\u4ef6\u7684\u90a3\u4e2a\u51fd\u6570\u3002\u90a3\u6837\u7684\u8bdd\uff0c\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\uff0c\u5b50\u7ec4\u4ef6\u4e2d\u7684\u51fd\u6570\u5c31\u4f1a\u56e0\u4e3a\u88abuseCallBack\u4fdd\u62a4\u800c\u8fd4\u56de\u65e7\u7684\u51fd\u6570\u5730\u5740\uff0c\u5b50\u7ec4\u4ef6\u5c31\u4e0d\u4f1a\u68c0\u6d4b\u6210\u5730\u5740\u53d8\u5316\uff0c\u4e5f\u5c31\u4e0d\u4f1a\u91cd\u9009\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd8\u662f\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u6211\u4eec\u8fdb\u884c\u4ee5\u4e0b\u4f18\u5316\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"uselayouteffect",children:"useLayoutEffect"})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
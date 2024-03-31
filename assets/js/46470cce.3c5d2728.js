"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[8777],{3731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var l=t(4848),a=t(8453);const i={title:"tuple",sidebar_position:8,slug:"tuple"},s="tuple",r={id:"lang/python/\u6570\u636e\u7c7b\u578b/tuple",title:"tuple",description:"Tuples are used to store multiple items in a single variable.",source:"@site/docs/lang/python/\u6570\u636e\u7c7b\u578b/tuple.mdx",sourceDirName:"lang/python/\u6570\u636e\u7c7b\u578b",slug:"/lang/python/\u6570\u636e\u7c7b\u578b/tuple",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/tuple",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/python/\u6570\u636e\u7c7b\u578b/tuple.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"tuple",sidebar_position:8,slug:"tuple"},sidebar:"python",previous:{title:"Sets",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/Sets"},next:{title:"dict",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/dict"}},p={},c=[{value:"len",id:"len",level:2},{value:"type",id:"type",level:3},{value:"constructor",id:"constructor",level:2},{value:"function",id:"function",level:3},{value:"access",id:"access",level:4},{value:"update",id:"update",level:4},{value:"unpack",id:"unpack",level:4},{value:"loop",id:"loop",level:4},{value:"join",id:"join",level:4}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"tuple",children:"tuple"}),"\n",(0,l.jsx)(n.p,{children:"Tuples are used to store multiple items in a single variable."}),"\n",(0,l.jsx)(n.p,{children:"Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage."}),"\n",(0,l.jsx)(n.p,{children:"A tuple is a collection which is ordered and unchangeable."}),"\n",(0,l.jsx)(n.p,{children:"Tuples are written with round brackets."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'tuple1 = ("apple", "banana", "cherry")\ntuple2 = (1, 5, 7, 9, 3)\ntuple3 = (True, False, False)\ntuple4 = ("abc", 34, True, 40, "male")\n'})}),"\n",(0,l.jsx)(n.p,{children:"Tuple items are ordered, unchangeable, and allow duplicate values."}),"\n",(0,l.jsx)(n.p,{children:"Tuple items are indexed, the first item has index [0], the second item has index [1] etc."}),"\n",(0,l.jsx)(n.p,{children:"When we say that tuples are ordered, it means that the items have a defined order, and that order will not change."}),"\n",(0,l.jsx)(n.p,{children:"Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created."}),"\n",(0,l.jsx)(n.p,{children:"Since tuples are indexed, they can have items with the same value:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = ("apple", "banana", "cherry", "apple", "cherry")\n'})}),"\n",(0,l.jsx)(n.h2,{id:"len",children:"len"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = ("apple", "banana", "cherry")\nprint(len(thistuple))\n'})}),"\n",(0,l.jsx)(n.p,{children:"To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = ("apple",)\nprint(type(thistuple))\n\n#NOT a tuple\nthistuple = ("apple")\nprint(type(thistuple))\n'})}),"\n",(0,l.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'mytuple = ("apple", "banana", "cherry")\nprint(type(mytuple))\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"<class 'tuple'>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"constructor",children:"constructor"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets\nprint(thistuple)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"function",children:"function"}),"\n",(0,l.jsx)(n.h4,{id:"access",children:"access"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = ("apple", "banana", "cherry")\nprint(thistuple[1])\nprint(thistuple[-1])\nprint(thistuple[2:5])\nprint(thistuple[:4])\nprint(thistuple[2:])\nprint(thistuple[-4:-1])\nif "apple" in thistuple:\n  print("Yes, \'apple\' is in the fruits tuple")\n'})}),"\n",(0,l.jsx)(n.h4,{id:"update",children:"update"}),"\n",(0,l.jsx)(n.p,{children:"Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called."}),"\n",(0,l.jsx)(n.p,{children:"But there is a workaround. You can convert the tuple into a list, change the list, and convert the list back into a tuple."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'x = ("apple", "banana", "cherry")\ny = list(x)\ny[1] = "kiwi"\nx = tuple(y)\n\nprint(x)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"unpack",children:"unpack"}),"\n",(0,l.jsx)(n.p,{children:'When we create a tuple, we normally assign values to it. This is called "packing" a tuple:'}),"\n",(0,l.jsx)(n.p,{children:'But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'fruits = ("apple", "banana", "cherry") # packing\n\n(green, yellow, red) = fruits # unpacking\n\nprint(green)\nprint(yellow)\nprint(red)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"loop",children:"loop"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'thistuple = ("apple", "banana", "cherry")\nfor x in thistuple:\n  print(x)\n'})}),"\n",(0,l.jsx)(n.h4,{id:"join",children:"join"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-python",children:'fruits = ("apple", "banana", "cherry")\nmytuple = fruits * 2\nprint(mytuple)\n\ntuple1 = ("a", "b" , "c")\ntuple2 = (1, 2, 3)\ntuple3 = tuple1 + tuple2\nprint(tuple3)\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:'("apple", "banana", "cherry", "apple","banana","cherry")\n("a","b","c",1,2,3)\n'})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"function"}),(0,l.jsx)(n.th,{children:"description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"count()"}),(0,l.jsx)(n.td,{children:"Returns the number of times a specified value occurs in a tuple"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"index()"}),(0,l.jsx)(n.td,{children:"Searches the tuple for a specified value and returns the position of where it was found"})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var l=t(6540);const a={},i=l.createContext(a);function s(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);
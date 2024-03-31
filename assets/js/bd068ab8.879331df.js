"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[6352],{7509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const c={title:"dict",sidebar_position:9,slug:"dict"},d="dict",a={id:"lang/python/\u6570\u636e\u7c7b\u578b/dict",title:"dict",description:"Dictionaries are used to store data values in key:value pairs.",source:"@site/docs/lang/python/\u6570\u636e\u7c7b\u578b/dict.mdx",sourceDirName:"lang/python/\u6570\u636e\u7c7b\u578b",slug:"/lang/python/\u6570\u636e\u7c7b\u578b/dict",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/dict",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/lang/python/\u6570\u636e\u7c7b\u578b/dict.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"dict",sidebar_position:9,slug:"dict"},sidebar:"python",previous:{title:"tuple",permalink:"/docs/lang/python/\u6570\u636e\u7c7b\u578b/tuple"},next:{title:"\u9762\u5411\u5bf9\u8c61",permalink:"/docs/lang/python/\u9762\u5411\u5bf9\u8c61"}},r={},l=[{value:"constructor",id:"constructor",level:2},{value:"function",id:"function",level:2},{value:"access",id:"access",level:3},{value:"change",id:"change",level:3},{value:"update",id:"update",level:3},{value:"remove",id:"remove",level:3},{value:"loop",id:"loop",level:3},{value:"copy",id:"copy",level:3},{value:"nested",id:"nested",level:3}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dict",children:"dict"}),"\n",(0,i.jsxs)(n.p,{children:["Dictionaries are used to store data values in key",":value"," pairs."]}),"\n",(0,i.jsx)(n.p,{children:"A dictionary is a collection which is ordered, changeable and do not allow duplicates."}),"\n",(0,i.jsx)(n.p,{children:"As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem = {\n  "name": "wangenius",\n  "gender": "male",\n  "year": 1999,\n  "good_at":["run","eat","sleep"]\n}\nprint(dictItem)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Dictionary items are presented in key",":value"," pairs, and can be referred to by using the key name."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'print(dictItem["name"])\nprint(type(dictItem))\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"wangenius\n<class 'dict'>\n"})}),"\n",(0,i.jsx)(n.p,{children:"duplicates are not allowed in dictionaries:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem = {\n  "name": "wangenius",\n  "gender": "male",\n  "year": 1999,\n  "year": 2000 # \u274c\n}\nprint(dictItem)\n'})}),"\n",(0,i.jsx)(n.p,{children:"To determine how many items a dictionary has, use the len() function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"print(len(dictItem))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"constructor",children:"constructor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem = dict(name = "wangenius", age = 18)\nprint(dictItem)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"function",children:"function"}),"\n",(0,i.jsx)(n.h3,{id:"access",children:"access"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'name = dictItem["name"]\ngender = dictItem.get("gender")\n'})}),"\n",(0,i.jsx)(n.p,{children:"The keys() method will return a list of all the keys in the dictionary."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ls = dictItem.keys()\nprint(ls)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"dict_keys(['name', 'gender', 'year'])\n"})}),"\n",(0,i.jsx)(n.p,{children:"The values() method will return a list of all the values in the dictionary."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ls = dictItem.values()\nprint(ls)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"dict_values(['wangenius', 'male', 1999])\n"})}),"\n",(0,i.jsx)(n.p,{children:"The items() method will return each item in a dictionary, as tuples in a list."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"tup = dictItem.items()\nprint(tup)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"dict_items([('name', 'wangenius'), ('gender', 'male'), ('year', 1999)])\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"notion",type:"success",children:(0,i.jsx)(n.p,{children:"dictItem \u6539\u53d8\u540e\uff0c\u76f8\u5e94\u7684items(),values(),keys()\u751f\u6210\u7684\u90fd\u4f1a\u6539\u53d8"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'x = dict_items.items()\nprint(x) #before the change\nx["year"] = 2020\nprint(x) #after the change\nif "name" in dictItem:\n  print("Yes, \'name\' is one of the keys in the dictItem dictionary")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"change",children:"change"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem.update({"year": 2020})\ndictItem["year"] = 2021\n'})}),"\n",(0,i.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem.update({"year": 2020});\ndictItem["year"] = 2021;\n'})}),"\n",(0,i.jsx)(n.h3,{id:"remove",children:"remove"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'dictItem.pop("name")\ndictItem.popitem() #removes the last inserted item\n\ndel dictItem["name"]\ndictItem.clear()\nprint(dictItem)\ndel dictItem\nprint(dictItem)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="output"',children:"{}\nNameError: name 'dictItem' is not defined\n"})}),"\n",(0,i.jsx)(n.h3,{id:"loop",children:"loop"}),"\n",(0,i.jsx)(n.p,{children:"You can loop through a dictionary by using a for loop."}),"\n",(0,i.jsx)(n.p,{children:"When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for x in dictItem:\n  print(dictItem[x])\n\nfor x in dictItem.values():\n  print(x)\n\nfor x, y in dictItem.items():\n  print(x, y)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"copy",children:"copy"}),"\n",(0,i.jsx)(n.p,{children:"You cannot copy a dictionary simply by typing dict2 = dict1, because: dict2 will only be a reference to dict1, and changes made in dict1 will automatically also be made in dict2."}),"\n",(0,i.jsx)(n.p,{children:"There are ways to make a copy, one way is to use the built-in Dictionary method copy()."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"dictItem_2 = dictItem.copy()\nprint(dictItem_2)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Another way to make a copy is to use the built-in function dict()."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"mydict = dict(dictItem)\nprint(mydict)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"nested",children:"nested"}),"\n",(0,i.jsx)(n.p,{children:"A dictionary can contain dictionaries, this is called nested dictionaries."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'cats = {\n  "cat1" : {\n    "color" : "red",\n    "year" : 2004\n  },\n  "cat2" : {\n    "color" : "blue",\n    "year" : 2007\n  },\n  "cat3" : {\n    "color" : "yellow",\n    "year" : 2011\n  }\n}\nprint(cats["cat2"]["year"])\n'})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clear()"}),(0,i.jsx)(n.td,{children:"Removes all the elements from the dictionary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"copy()"}),(0,i.jsx)(n.td,{children:"Returns a copy of the dictionary"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fromkeys()"}),(0,i.jsx)(n.td,{children:"Returns a dictionary with the specified keys and value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"get()"}),(0,i.jsx)(n.td,{children:"Returns the value of the specified key"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"items()"}),(0,i.jsx)(n.td,{children:"Returns a list containing a tuple for each key value pair"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"keys()"}),(0,i.jsx)(n.td,{children:"Returns a list containing the dictionary's keys"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pop()"}),(0,i.jsx)(n.td,{children:"Removes the element with the specified key"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"popitem()"}),(0,i.jsx)(n.td,{children:"Removes the last inserted key-value pair"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"setdefault(keyname, value)"}),(0,i.jsx)(n.td,{children:"\u8fd4\u56de\u8be5\u5173\u952e\u5b57\u7684\u503c\uff0c\u5982\u679c\u8be5\u5173\u952e\u5b57\u4e0d\u5b58\u5728, \u5219\u5199\u5165\u7b2c\u4e8c\u4e2a\u53c2\u6570value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"update()"}),(0,i.jsx)(n.td,{children:"Updates the dictionary with the specified key-value pairs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"values()"}),(0,i.jsx)(n.td,{children:"Returns a list of all the values in the dictionary"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const s={},c=i.createContext(s);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
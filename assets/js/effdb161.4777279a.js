"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[3360],{1308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=t(4848),o=t(8453);const l={},r=void 0,a={id:"dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad",title:"\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad",description:"\u94fe\u8868\u7684\u53cd\u8f6c",source:"@site/docs/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad.mdx",sourceDirName:"dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173",slug:"/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad",permalink:"/docs/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u56de\u6587\u94fe\u8868\u7684\u5224\u65ad.mdx",tags:[],version:"current",frontMatter:{},sidebar:"leetcode",previous:{title:"\u4e24\u4e2a\u94fe\u8868\u7684\u4ea4\u70b9",permalink:"/docs/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u4e24\u4e2a\u94fe\u8868\u7684\u4ea4\u70b9"},next:{title:"\u5f52\u5e76\u6392\u5e8f",permalink:"/docs/dsa/leetcode/\u53cc\u6307\u9488\u76f8\u5173/\u5f52\u5e76\u6392\u5e8f"}},i={},d=[{value:"\u94fe\u8868\u7684\u53cd\u8f6c",id:"\u94fe\u8868\u7684\u53cd\u8f6c",level:2}];function c(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class Solution {\npublic:\n    bool isPalindrome(ListNode* head) {\n        // \u5355\u8282\u70b9\u8fd4\u56detrue\n        if(!head -> next) return true;\n        //\u5148\u904d\u5386\u4e00\u904d\u83b7\u5f97\u4e2d\u5fc3\u8282\u70b9\n        ListNode* slow = head;\n        ListNode* fast = head;\n        while (fast && fast->next){\n            fast = fast->next->next;\n            slow = slow->next;\n        };\n        //\u5982\u679cfast->next\u5b58\u5728,\u5219\u603b\u6570pls slow\u662f\u540e\u94fe\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\n        //\u5982\u679cfast -> next\u4e0d\u5b58\u5728,\u5219\u603b\u6570odd slow \u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\u662f\u540e\u94fe\u7684\u7b2c\u4e00\u4e2a\u8282\u70b9\n        //\u540e\u94fe\u53ea\u53ef\u80fd\u6bd4\u524d\u94fe\u66f4\u5c11\n        if(fast) slow = slow->next; //\u4fee\u6b63\u540e\u94fe\u4f4d\u7f6e\n        //\u7136\u540e\u5c06\u540e\u94fe\u7ffb\u8f6c\n        ListNode* next = slow -> next;\n        slow -> next = nullptr; //\u53d6\u6d88slow\u7684\u540e\u7ee7\u8282\u70b9,\u4f5c\u4e3a\u6700\u540e\u6bd4\u8f83\u904d\u5386\u7684\u5224\u65ad\u6761\u4ef6\n        ListNode* temp = next;//\u6b64\u65f6slow -> next(temp)\n        while(next){\n            //temp\u540e\u79fb slow -> next -> temp(null)\n            temp = temp -> next;\n            next -> next = slow;\n            slow = next;\n            next = temp;\n        }\n        //\u6700\u540e\u5f97\u5230\u7684\u53f3\u94fe\u6307\u9488\u662fslow\n        while(slow){\n            if(head->val!= slow->val)  return false;\n            head = head->next;\n            slow = slow->next;\n        }\n        return true;\n        //\u904d\u5386\u662f\u5426\u4e24\u4e2a\u94fe\u76f8\u7b49\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u94fe\u8868\u7684\u53cd\u8f6c",children:"\u94fe\u8868\u7684\u53cd\u8f6c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"void reverseString(vector<char>& s) {\n    int i,j;\n    char temp;\n    for (i = 0,j = s.size() -1; i < s.size() / 2; i++,j--) {\n        temp = s[i];\n        s[i] = s[j];\n        s[j] = temp;\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const o={},l=s.createContext(o);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[8312],{67222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(74848),r=t(28453);const s={title:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",sidebar_position:3,slug:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6"},a="\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",l={id:"ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",title:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",description:"\u6570\u636e\u96c6\u662f\u7279\u5f81\u503c\u548c\u76ee\u6807\u503c\u6784\u6210\u7684\u96c6\u5408.",source:"@site/docs/ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6.mdx",sourceDirName:"ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30",slug:"/ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",permalink:"/docs/ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",sidebar_position:3,slug:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6"},sidebar:"ml",previous:{title:"\u6a21\u578b\u8bc4\u4ef7",permalink:"/docs/ai/ml/\u6570\u636e\u96c6\u548c\u6a21\u578b\u8bc4\u4f30/\u6a21\u578b\u8bc4\u4ef7"},next:{title:"\u8d1d\u53f6\u65af\u5b9a\u7406",permalink:"/docs/ai/ml/\u76d1\u7763\u5b66\u4e60\u53ca\u76f8\u5173\u7b97\u6cd5/\u8d1d\u53f6\u65af\u5b9a\u7406"}},o={},c=[{value:"\u6570\u636e",id:"\u6570\u636e",level:2},{value:"GAN \u5bf9\u6297\u751f\u6210\u7f51\u7edc",id:"gan-\u5bf9\u6297\u751f\u6210\u7f51\u7edc",level:2},{value:"Transformer\u7ed3\u6784\u5e26\u8d77\u4e86CNN\u6210\u4e3a\u8bb8\u591a\u6a21\u578b\u7684\u9996\u9009",id:"transformer\u7ed3\u6784\u5e26\u8d77\u4e86cnn\u6210\u4e3a\u8bb8\u591a\u6a21\u578b\u7684\u9996\u9009",level:2}];function d(e){const n={h1:"h1",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6",children:"\u6570\u636e\u96c6\u548c\u8bad\u7ec3\u96c6"}),"\n",(0,i.jsx)(n.p,{children:"\u6570\u636e\u96c6\u662f\u7279\u5f81\u503c\u548c\u76ee\u6807\u503c\u6784\u6210\u7684\u96c6\u5408."}),"\n",(0,i.jsx)(n.p,{children:"MNIST(\u624b\u5199\u6570\u5b57\u96c6), ImageNet(\u8ba1\u7b97\u56fe\u50cf), PASCAL VOC, COCO(\u56fe\u50cf\u8bc6\u522b\\\u5206\u5272)"}),"\n",(0,i.jsx)(n.h2,{id:"\u6570\u636e",children:"\u6570\u636e"}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u4e2a\u6570\u636e\u96c6\u7531\u4e00\u4e2a\u4e2a\u6837\u672c\uff08example, sample\uff09\u7ec4\u6210\uff0c\u5927\u591a\u65f6\u5019\uff0c\u5b83\u4eec\u9075\u5faa\u72ec\u7acb\u540c\u5206\u5e03(independently and identically distributed, i.i.d.)\u3002 \u6837\u672c\u6709\u65f6\u4e5f\u53eb\u505a\u6570\u636e\u70b9\uff08data point\uff09\u6216\u8005\u6570\u636e\u5b9e\u4f8b\uff08data instance\uff09\uff0c\u901a\u5e38\u6bcf\u4e2a\u6837\u672c\u7531\u4e00\u7ec4\u79f0\u4e3a\u7279\u5f81\uff08features\uff0c\u6216\u534f\u53d8\u91cf\uff08covariates\uff09\uff09\u7684\u5c5e\u6027\u7ec4\u6210\u3002 \u673a\u5668\u5b66\u4e60\u6a21\u578b\u4f1a\u6839\u636e\u8fd9\u4e9b\u5c5e\u6027\u8fdb\u884c\u9884\u6d4b\u3002 \u5728\u4e0a\u9762\u7684\u76d1\u7763\u5b66\u4e60\u95ee\u9898\u4e2d\uff0c\u8981\u9884\u6d4b\u7684\u662f\u4e00\u4e2a\u7279\u6b8a\u7684\u5c5e\u6027\uff0c\u5b83\u88ab\u79f0\u4e3a\u6807\u7b7e\uff08label\uff0c\u6216\u76ee\u6807\uff08target\uff09\uff09\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u5904\u7406\u56fe\u50cf\u6570\u636e\u65f6\uff0c\u6bcf\u4e00\u5f20\u5355\u72ec\u7684\u7167\u7247\u5373\u4e3a\u4e00\u4e2a\u6837\u672c\uff0c\u5b83\u7684\u7279\u5f81\u7531\u6bcf\u4e2a\u50cf\u7d20\u6570\u503c\u7684\u6709\u5e8f\u5217\u8868\u8868\u793a\u3002 \u6bd4\u5982\uff0c\n\u5f69\u8272\u7167\u7247\u7531\n\u4e2a\u6570\u503c\u7ec4\u6210\uff0c\u5176\u4e2d\u7684\u201c3\u201d\u5bf9\u5e94\u4e8e\u6bcf\u4e2a\u7a7a\u95f4\u4f4d\u7f6e\u7684\u7ea2\u3001\u7eff\u3001\u84dd\u901a\u9053\u7684\u5f3a\u5ea6\u3002 \u518d\u6bd4\u5982\uff0c\u5bf9\u4e8e\u4e00\u7ec4\u533b\u7597\u6570\u636e\uff0c\u7ed9\u5b9a\u4e00\u7ec4\u6807\u51c6\u7684\u7279\u5f81\uff08\u5982\u5e74\u9f84\u3001\u751f\u547d\u4f53\u5f81\u548c\u8bca\u65ad\uff09\uff0c\u6b64\u6570\u636e\u53ef\u4ee5\u7528\u6765\u5c1d\u8bd5\u9884\u6d4b\u60a3\u8005\u662f\u5426\u4f1a\u5b58\u6d3b\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u6bcf\u4e2a\u6837\u672c\u7684\u7279\u5f81\u7c7b\u522b\u6570\u91cf\u90fd\u662f\u76f8\u540c\u7684\u65f6\u5019\uff0c\u5176\u7279\u5f81\u5411\u91cf\u662f\u56fa\u5b9a\u957f\u5ea6\u7684\uff0c\u8fd9\u4e2a\u957f\u5ea6\u88ab\u79f0\u4e3a\u6570\u636e\u7684\u7ef4\u6570\uff08dimensionality\uff09\u3002 \u56fa\u5b9a\u957f\u5ea6\u7684\u7279\u5f81\u5411\u91cf\u662f\u4e00\u4e2a\u65b9\u4fbf\u7684\u5c5e\u6027\uff0c\u5b83\u53ef\u4ee5\u7528\u6765\u91cf\u5316\u5b66\u4e60\u5927\u91cf\u6837\u672c\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5e76\u4e0d\u662f\u6240\u6709\u7684\u6570\u636e\u90fd\u53ef\u4ee5\u7528\u201c\u56fa\u5b9a\u957f\u5ea6\u201d\u7684\u5411\u91cf\u8868\u793a\u3002 \u4ee5\u56fe\u50cf\u6570\u636e\u4e3a\u4f8b\uff0c\u5982\u679c\u5b83\u4eec\u5168\u90e8\u6765\u81ea\u6807\u51c6\u663e\u5fae\u955c\u8bbe\u5907\uff0c\u90a3\u4e48\u201c\u56fa\u5b9a\u957f\u5ea6\u201d\u662f\u53ef\u53d6\u7684\uff1b \u4f46\u662f\u5982\u679c\u56fe\u50cf\u6570\u636e\u6765\u81ea\u4e92\u8054\u7f51\uff0c\u5b83\u4eec\u5f88\u96be\u5177\u6709\u76f8\u540c\u7684\u5206\u8fa8\u7387\u6216\u5f62\u72b6\u3002 \u8fd9\u65f6\uff0c\u5c06\u56fe\u50cf\u88c1\u526a\u6210\u6807\u51c6\u5c3a\u5bf8\u662f\u4e00\u79cd\u65b9\u6cd5\uff0c\u4f46\u8fd9\u79cd\u529e\u6cd5\u5f88\u5c40\u9650\uff0c\u6709\u4e22\u5931\u4fe1\u606f\u7684\u98ce\u9669\u3002 \u6b64\u5916\uff0c\u6587\u672c\u6570\u636e\u66f4\u4e0d\u7b26\u5408\u201c\u56fa\u5b9a\u957f\u5ea6\u201d\u7684\u8981\u6c42\u3002 \u6bd4\u5982\uff0c\u5bf9\u4e8e\u4e9a\u9a6c\u900a\u7b49\u7535\u5b50\u5546\u52a1\u7f51\u7ad9\u4e0a\u7684\u5ba2\u6237\u8bc4\u8bba\uff0c\u6709\u4e9b\u6587\u672c\u6570\u636e\u5f88\u7b80\u77ed\uff08\u6bd4\u5982\u201c\u597d\u6781\u4e86\u201d\uff09\uff0c\u6709\u4e9b\u5219\u957f\u7bc7\u5927\u8bba\u3002 \u4e0e\u4f20\u7edf\u673a\u5668\u5b66\u4e60\u65b9\u6cd5\u76f8\u6bd4\uff0c\u6df1\u5ea6\u5b66\u4e60\u7684\u4e00\u4e2a\u4e3b\u8981\u4f18\u52bf\u662f\u53ef\u4ee5\u5904\u7406\u4e0d\u540c\u957f\u5ea6\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u62e5\u6709\u8d8a\u591a\u6570\u636e\u7684\u65f6\u5019\uff0c\u5de5\u4f5c\u5c31\u8d8a\u5bb9\u6613\u3002 \u66f4\u591a\u7684\u6570\u636e\u53ef\u4ee5\u88ab\u7528\u6765\u8bad\u7ec3\u51fa\u66f4\u5f3a\u5927\u7684\u6a21\u578b\uff0c\u4ece\u800c\u51cf\u5c11\u5bf9\u9884\u5148\u8bbe\u60f3\u5047\u8bbe\u7684\u4f9d\u8d56\u3002 \u6570\u636e\u96c6\u7684\u7531\u5c0f\u53d8\u5927\u4e3a\u73b0\u4ee3\u6df1\u5ea6\u5b66\u4e60\u7684\u6210\u529f\u5960\u5b9a\u57fa\u7840\u3002 \u5728\u6ca1\u6709\u5927\u6570\u636e\u96c6\u7684\u60c5\u51b5\u4e0b\uff0c\u8bb8\u591a\u4ee4\u4eba\u5174\u594b\u7684\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u9eef\u7136\u5931\u8272\u3002 \u5c31\u7b97\u4e00\u4e9b\u6df1\u5ea6\u5b66\u4e60\u6a21\u578b\u5728\u5c0f\u6570\u636e\u96c6\u4e0a\u80fd\u591f\u5de5\u4f5c\uff0c\u4f46\u5176\u6548\u80fd\u5e76\u4e0d\u6bd4\u4f20\u7edf\u65b9\u6cd5\u9ad8\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u4ec5\u4ec5\u62e5\u6709\u6d77\u91cf\u7684\u6570\u636e\u662f\u4e0d\u591f\u7684\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u6b63\u786e\u7684\u6570\u636e\u3002 \u5982\u679c\u6570\u636e\u4e2d\u5145\u6ee1\u4e86\u9519\u8bef\uff0c\u6216\u8005\u5982\u679c\u6570\u636e\u7684\u7279\u5f81\u4e0d\u80fd\u9884\u6d4b\u4efb\u52a1\u76ee\u6807\uff0c\u90a3\u4e48\u6a21\u578b\u5f88\u53ef\u80fd\u65e0\u6548\u3002 \u6709\u4e00\u53e5\u53e4\u8bed\u5f88\u597d\u5730\u53cd\u6620\u4e86\u8fd9\u4e2a\u73b0\u8c61\uff1a\u201c\u8f93\u5165\u7684\u662f\u5783\u573e\uff0c\u8f93\u51fa\u7684\u4e5f\u662f\u5783\u573e\u3002\u201d\uff08\u201cGarbage in, garbage out.\u201d\uff09 \u6b64\u5916\uff0c\u7cdf\u7cd5\u7684\u9884\u6d4b\u6027\u80fd\u751a\u81f3\u4f1a\u52a0\u500d\u653e\u5927\u4e8b\u6001\u7684\u4e25\u91cd\u6027\u3002 \u5728\u4e00\u4e9b\u654f\u611f\u5e94\u7528\u4e2d\uff0c\u5982\u9884\u6d4b\u6027\u76d1\u7ba1\u3001\u7b80\u5386\u7b5b\u9009\u548c\u7528\u4e8e\u8d37\u6b3e\u7684\u98ce\u9669\u6a21\u578b\uff0c\u6211\u4eec\u5fc5\u987b\u7279\u522b\u8b66\u60d5\u5783\u573e\u6570\u636e\u5e26\u6765\u7684\u540e\u679c\u3002 \u4e00\u79cd\u5e38\u89c1\u7684\u95ee\u9898\u6765\u81ea\u4e0d\u5747\u8861\u7684\u6570\u636e\u96c6\uff0c\u6bd4\u5982\u5728\u4e00\u4e2a\u6709\u5173\u533b\u7597\u7684\u8bad\u7ec3\u6570\u636e\u96c6\u4e2d\uff0c\u67d0\u4e9b\u4eba\u7fa4\u6ca1\u6709\u6837\u672c\u8868\u793a\u3002 \u60f3\u8c61\u4e00\u4e0b\uff0c\u5047\u8bbe\u6211\u4eec\u60f3\u8981\u8bad\u7ec3\u4e00\u4e2a\u76ae\u80a4\u764c\u8bc6\u522b\u6a21\u578b\uff0c\u4f46\u5b83\uff08\u5728\u8bad\u7ec3\u6570\u636e\u96c6\u4e2d\uff09\u4ece\u672a\u201c\u89c1\u8fc7\u201d\u9ed1\u8272\u76ae\u80a4\u7684\u4eba\u7fa4\uff0c\u8fd9\u4e2a\u6a21\u578b\u5c31\u4f1a\u987f\u65f6\u675f\u624b\u65e0\u7b56\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u518d\u6bd4\u5982\uff0c\u5982\u679c\u7528\u201c\u8fc7\u53bb\u7684\u62db\u8058\u51b3\u7b56\u6570\u636e\u201d\u6765\u8bad\u7ec3\u4e00\u4e2a\u7b5b\u9009\u7b80\u5386\u7684\u6a21\u578b\uff0c\u90a3\u4e48\u673a\u5668\u5b66\u4e60\u6a21\u578b\u53ef\u80fd\u4f1a\u65e0\u610f\u4e2d\u6355\u6349\u5230\u5386\u53f2\u6b8b\u7559\u7684\u4e0d\u516c\u6b63\uff0c\u5e76\u5c06\u5176\u81ea\u52a8\u5316\u3002 \u7136\u800c\uff0c\u8fd9\u4e00\u5207\u90fd\u53ef\u80fd\u5728\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\u53d1\u751f\u3002 \u56e0\u6b64\uff0c\u5f53\u6570\u636e\u4e0d\u5177\u6709\u5145\u5206\u4ee3\u8868\u6027\uff0c\u751a\u81f3\u5305\u542b\u4e86\u4e00\u4e9b\u793e\u4f1a\u504f\u89c1\u65f6\uff0c\u6a21\u578b\u5c31\u5f88\u6709\u53ef\u80fd\u6709\u504f\u89c1\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"gan-\u5bf9\u6297\u751f\u6210\u7f51\u7edc",children:"GAN \u5bf9\u6297\u751f\u6210\u7f51\u7edc"}),"\n",(0,i.jsx)(n.h2,{id:"transformer\u7ed3\u6784\u5e26\u8d77\u4e86cnn\u6210\u4e3a\u8bb8\u591a\u6a21\u578b\u7684\u9996\u9009",children:"Transformer\u7ed3\u6784\u5e26\u8d77\u4e86CNN\u6210\u4e3a\u8bb8\u591a\u6a21\u578b\u7684\u9996\u9009"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[604],{8147:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=i(4848),d=i(8453);const t={title:"\u56fe\u7684\u904d\u5386",sidebar_position:3,slug:"\u56fe\u7684\u904d\u5386"},r="\u56fe\u7684\u904d\u5386",c={id:"dsa/ds/\u56fe/\u56fe\u7684\u904d\u5386",title:"\u56fe\u7684\u904d\u5386",description:"\u6df1\u5ea6\u4f18\u5148DFS",source:"@site/docs/dsa/ds/\u56fe/\u56fe\u7684\u904d\u5386.mdx",sourceDirName:"dsa/ds/\u56fe",slug:"/dsa/ds/\u56fe/\u56fe\u7684\u904d\u5386",permalink:"/en/docs/dsa/ds/\u56fe/\u56fe\u7684\u904d\u5386",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/ds/\u56fe/\u56fe\u7684\u904d\u5386.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u56fe\u7684\u904d\u5386",sidebar_position:3,slug:"\u56fe\u7684\u904d\u5386"},sidebar:"ds",previous:{title:"\u56fe\u7684\u5b58\u50a8",permalink:"/en/docs/dsa/ds/\u56fe/\u56fe\u7684\u5b58\u50a8"},next:{title:"\u6700\u5c0f\u751f\u6210\u6811",permalink:"/en/docs/dsa/ds/\u56fe/\u6700\u5c0f\u751f\u6210\u6811"}},l={},o=[{value:"\u6df1\u5ea6\u4f18\u5148DFS",id:"\u6df1\u5ea6\u4f18\u5148dfs",level:2},{value:"\u6808\u5b9e\u73b0",id:"\u6808\u5b9e\u73b0",level:3},{value:"\u9012\u5f52\u5b9e\u73b0",id:"\u9012\u5f52\u5b9e\u73b0",level:3},{value:"\u5e7f\u5ea6\u4f18\u5148BFS",id:"\u5e7f\u5ea6\u4f18\u5148bfs",level:2},{value:"\u961f\u5217\u5b9e\u73b0",id:"\u961f\u5217\u5b9e\u73b0",level:3},{value:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",id:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",level:3},{value:"\u53cc\u7aef\u961f\u5217",id:"\u53cc\u7aef\u961f\u5217",level:3},{value:"\u4f18\u5148\u961f\u5217",id:"\u4f18\u5148\u961f\u5217",level:3}];function h(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u56fe\u7684\u904d\u5386",children:"\u56fe\u7684\u904d\u5386"}),"\n",(0,s.jsx)(e.h2,{id:"\u6df1\u5ea6\u4f18\u5148dfs",children:"\u6df1\u5ea6\u4f18\u5148DFS"}),"\n",(0,s.jsx)(e.p,{children:"DFS \u5168\u79f0\u662f Depth First Search\uff0c\u4e2d\u6587\u540d\u662f\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u662f\u4e00\u79cd\u7528\u4e8e\u904d\u5386\u6216\u641c\u7d22\u6811\u6216\u56fe\u7684\u7b97\u6cd5\u3002\u6240\u8c13\u6df1\u5ea6\u4f18\u5148\uff0c\u5c31\u662f\u8bf4\u6bcf\u6b21\u90fd\u5c1d\u8bd5\u5411\u66f4\u6df1\u7684\u8282\u70b9\u8d70\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u7b97\u6cd5\u8bb2\u89e3\u65f6\u5e38\u5e38\u4e0e BFS \u5e76\u5217\uff0c\u4f46\u4e24\u8005\u9664\u4e86\u90fd\u80fd\u904d\u5386\u56fe\u7684\u8fde\u901a\u5757\u4ee5\u5916\uff0c\u7528\u9014\u5b8c\u5168\u4e0d\u540c\uff0c\u5f88\u5c11\u6709\u80fd\u6df7\u7528\u4e24\u79cd\u7b97\u6cd5\u7684\u60c5\u51b5\u3002"}),"\n",(0,s.jsx)(e.p,{children:"DFS \u5e38\u5e38\u7528\u6765\u6307\u4ee3\u7528\u9012\u5f52\u51fd\u6570\u5b9e\u73b0\u7684\u641c\u7d22\uff0c\u4f46\u5b9e\u9645\u4e0a\u4e24\u8005\u5e76\u4e0d\u4e00\u6837\u3002\u6709\u5173\u8be5\u7c7b\u641c\u7d22\u601d\u60f3\u8bf7\u53c2\u9605 DFS\uff08\u641c\u7d22\uff09."}),"\n",(0,s.jsx)(e.p,{children:"DFS \u6700\u663e\u8457\u7684\u7279\u5f81\u5728\u4e8e\u5176 \u9012\u5f52\u8c03\u7528\u81ea\u8eab\u3002\u540c\u65f6\u4e0e BFS \u7c7b\u4f3c\uff0cDFS \u4f1a\u5bf9\u5176\u8bbf\u95ee\u8fc7\u7684\u70b9\u6253\u4e0a\u8bbf\u95ee\u6807\u8bb0\uff0c\u5728\u904d\u5386\u56fe\u65f6\u8df3\u8fc7\u5df2\u6253\u8fc7\u6807\u8bb0\u7684\u70b9\uff0c\u4ee5\u786e\u4fdd \u6bcf\u4e2a\u70b9\u4ec5\u8bbf\u95ee\u4e00\u6b21\u3002\u7b26\u5408\u4ee5\u4e0a\u4e24\u6761\u89c4\u5219\u7684\u51fd\u6570\uff0c\u4fbf\u662f\u5e7f\u4e49\u4e0a\u7684 DFS\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8be5\u7b97\u6cd5\u901a\u5e38\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(n+m)\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u4e3a O(n)\uff0c\u5176\u4e2d n \u8868\u793a\u70b9\u6570\uff0cm \u8868\u793a\u8fb9\u6570\u3002\u6ce8\u610f\u7a7a\u95f4\u590d\u6742\u5ea6\u5305\u542b\u4e86\u6808\u7a7a\u95f4\uff0c\u6808\u7a7a\u95f4\u7684\u7a7a\u95f4\u590d\u6742\u5ea6\u662f O(n) \u7684\u3002\u5728\u5e73\u5747 O(1) \u904d\u5386\u4e00\u6761\u8fb9\u7684\u6761\u4ef6\u4e0b\u624d\u80fd\u8fbe\u5230\u6b64\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u4f8b\u5982\u7528\u524d\u5411\u661f\u6216\u90bb\u63a5\u8868\u5b58\u50a8\u56fe\uff1b\u5982\u679c\u7528\u90bb\u63a5\u77e9\u9635\u5219\u4e0d\u4e00\u5b9a\u80fd\u8fbe\u5230\u6b64\u590d\u6742\u5ea6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5907\u6ce8\uff1a\u76ee\u524d\u5927\u90e8\u5206\u7b97\u6cd5\u7ade\u8d5b\uff08\u5305\u62ec NOIP\u3001\u5927\u90e8\u5206\u7701\u9009\u4ee5\u53ca CCF \u4e3e\u529e\u7684\u5404\u9879\u8d5b\u4e8b\uff09\u90fd\u652f\u6301 \u65e0\u9650\u6808\u7a7a\u95f4\uff0c\u5373\uff1a\u6808\u7a7a\u95f4\u4e0d\u5355\u72ec\u9650\u5236\uff0c\u4f46\u603b\u5185\u5b58\u7a7a\u95f4\u4ecd\u7136\u53d7\u9898\u9762\u9650\u5236\u3002\u4f46\u5927\u90e8\u5206\u64cd\u4f5c\u7cfb\u7edf\u4f1a\u5bf9\u6808\u7a7a\u95f4\u505a\u989d\u5916\u7684\u9650\u5236\uff0c\u56e0\u6b64\u5728\u672c\u5730\u8c03\u8bd5\u65f6\u9700\u8981\u4e00\u4e9b\u65b9\u5f0f\u6765\u53d6\u6d88\u6808\u7a7a\u95f4\u9650\u5236\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Windows \u4e0a\uff0c\u901a\u5e38\u7684\u65b9\u6cd5\u662f\u5728 \u7f16\u8bd1\u9009\u9879 \u4e2d\u52a0\u5165 ",(0,s.jsx)(e.code,{children:"-Wl,--stack=1000000000"}),"\uff0c\u8868\u793a\u5c06\u6808\u7a7a\u95f4\u9650\u5236\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(e.code,{children:"1000000000"})," \u5b57\u8282\u3002\u5728 Linux \u4e0a\uff0c\u901a\u5e38\u7684\u65b9\u6cd5\u662f\u5728\u8fd0\u884c\u7a0b\u5e8f\u524d \u5728\u7ec8\u7aef\u5185 \u6267\u884c ",(0,s.jsx)(e.code,{children:"ulimit -s unlimited"}),"\uff0c\u8868\u793a\u6808\u7a7a\u95f4\u65e0\u9650\u3002\u6bcf\u4e2a\u7ec8\u7aef\u53ea\u9700\u6267\u884c\u4e00\u6b21\uff0c\u5bf9\u4e4b\u540e\u6bcf\u6b21\u7a0b\u5e8f\u8fd0\u884c\u90fd\u6709\u6548\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u6808\u5b9e\u73b0",children:"\u6808\u5b9e\u73b0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",metastring:'title="\u90bb\u63a5\u8868\u5b58\u50a8\u56fe\u7684\u6df1\u5ea6\u4f18\u5148\u7b97\u6cd5"',children:"Graph g = new Graph(NODES_SUM);\n//\u66f4\u65b0\u56fe\n\n// \u4eces\u70b9\u5f00\u59cb\u904d\u5386\nvector<int>& Graph::dfs(const int s){\n    stack<int> st; //\u8f85\u52a9\u6808\n    vector<int> visited; //\u6807\u8bb0\u5bb9\u5668\uff0c\u8bb0\u5f55\u7ed3\u70b9\u662f\u5426\u5df2\u7ecf\u904d\u5386\n    visited.push_back(s);\n    st.push(s);\n    while(!st.empty()){\n        int last = st.top(); //\u4e0a\u4e00\u4e2a\u8bbf\u95ee\u7684\u5143\u7d20\n        for(int to : edges[last]){\n            if(find(all(visited),to) == visited.end()){\n                visited.push_back(to); //\u786e\u4fdd\u6808\u91cc\u6ca1\u6709\u5143\u7d20\n                st.push(to);\n            }\n        }\n        st.pop(); //\u51fa\u6808\n    }\n    return visited;\n};\ncout << g.dfs(2) << endl;\n"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u8b66\u544a",type:"danger",children:(0,s.jsx)(e.p,{children:"\u8fd9\u91cc\u662f\u6839\u636eOI wiki\u4e2d\u5185\u5bb9\u6539\u5199\u3002 \u4f46\u7b14\u8005\u89c9\u5f97\u662f\u6709\u95ee\u9898\uff0c \u8fd8\u5728\u7b49\u5f85\u539f\u4f5c\u8005\u7684\u7b54\u7591\u3002"})}),"\n",(0,s.jsx)(e.h3,{id:"\u9012\u5f52\u5b9e\u73b0",children:"\u9012\u5f52\u5b9e\u73b0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"void recursion_dfs(const int u, vector<int>& visited, vector<vector<int>>& edges) {\n    visited.push_back(u);\n    for(int v : edges[u])\n        if (find(all(visited),to) == visited.end()) \n            recursion_dfs(v)\n}\n\nvector<int> Graph::dfs(const int u){\n    vector<int> visited;\n    recursion_dfs(u,visited,edges);\n}\nGraph g = new Graph(NODES_SUM);\ng.dfs(2);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u975e\u8fde\u901a\u56fe\uff0c\u53ea\u80fd\u8bbf\u95ee\u5230\u8d77\u70b9\u6240\u5728\u7684\u8fde\u901a\u5206\u91cf\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e\u8fde\u901a\u56fe\uff0cDFS \u5e8f\u5217\u901a\u5e38\u4e0d\u552f\u4e00\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\uff1a\u6811\u7684 DFS \u5e8f\u5217\u4e5f\u662f\u4e0d\u552f\u4e00\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 DFS \u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u4ece\u54ea\u4e2a\u70b9\u8bbf\u95ee\u800c\u6765\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u6811\u7ed3\u6784\uff0c\u79f0\u4e3a DFS \u6811\u3002DFS \u6811\u662f\u539f\u56fe\u7684\u4e00\u4e2a\u751f\u6210\u6811\u3002"}),"\n",(0,s.jsx)(e.p,{children:"DFS \u6811 \u6709\u5f88\u591a\u6027\u8d28\uff0c\u6bd4\u5982\u53ef\u4ee5\u7528\u6765\u6c42 \u5f3a\u8fde\u901a\u5206\u91cf\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5e7f\u5ea6\u4f18\u5148bfs",children:"\u5e7f\u5ea6\u4f18\u5148BFS"}),"\n",(0,s.jsx)(e.p,{children:"BFS \u5168\u79f0\u662f Breadth First Search\uff0c\u4e2d\u6587\u540d\u662f\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\uff0c\u4e5f\u53eb\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u662f\u56fe\u4e0a\u6700\u57fa\u7840\u3001\u6700\u91cd\u8981\u7684\u641c\u7d22\u7b97\u6cd5\u4e4b\u4e00\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u8c13\u5bbd\u5ea6\u4f18\u5148\u3002\u5c31\u662f\u6bcf\u6b21\u90fd\u5c1d\u8bd5\u8bbf\u95ee\u540c\u4e00\u5c42\u7684\u8282\u70b9\u3002 \u5982\u679c\u540c\u4e00\u5c42\u90fd\u8bbf\u95ee\u5b8c\u4e86\uff0c\u518d\u8bbf\u95ee\u4e0b\u4e00\u5c42\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u6837\u505a\u7684\u7ed3\u679c\u662f\uff0cBFS \u7b97\u6cd5\u627e\u5230\u7684\u8def\u5f84\u662f\u4ece\u8d77\u70b9\u5f00\u59cb\u7684 \u6700\u77ed \u5408\u6cd5\u8def\u5f84\u3002\u6362\u8a00\u4e4b\uff0c\u8fd9\u6761\u8def\u5f84\u6240\u5305\u542b\u7684\u8fb9\u6570\u6700\u5c0f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 BFS \u7ed3\u675f\u65f6\uff0c\u6bcf\u4e2a\u8282\u70b9\u90fd\u662f\u901a\u8fc7\u4ece\u8d77\u70b9\u5230\u8be5\u70b9\u7684\u6700\u77ed\u8def\u5f84\u8bbf\u95ee\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7b97\u6cd5\u8fc7\u7a0b\u53ef\u4ee5\u770b\u505a\u662f\u56fe\u4e0a\u706b\u82d7\u4f20\u64ad\u7684\u8fc7\u7a0b\uff1a\u6700\u5f00\u59cb\u53ea\u6709\u8d77\u70b9\u7740\u706b\u4e86\uff0c\u5728\u6bcf\u4e00\u65f6\u523b\uff0c\u6709\u706b\u7684\u8282\u70b9\u90fd\u5411\u5b83\u76f8\u90bb\u7684\u6240\u6709\u8282\u70b9\u4f20\u64ad\u706b\u82d7\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u961f\u5217\u5b9e\u73b0",children:"\u961f\u5217\u5b9e\u73b0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Rust",children:"bool visited[MAXSIZE];//\u8bbf\u95ee\u6807\u8bb0\nint Q[MAXSIZE],front=0,rear=0;\nEdge edge;\n\nvoid enQue(int v){\n    rear=(rear + 1) % MAXSIZE;\n    Q[rear]=v;\n}\n\nvoid deQue(int &v){\n    front=(front+1) % maxSize;\n    v=Q[front];\n}\n\nvoid isEmpty(){\n    return front==rear?1:0\n        }\n\nvoid visit(int v){\n    visited[v] = TRUE;\n}\n\n// \u975e\u8fde\u901a\u56fe\u5faa\u73af\u8bbf\u95ee\nvoid traverse(Graph &G){\n    for(int i = 0;i<G.info.node_num;++i)\n        if(visit[i]==0) BFS(g,i)\n            }\n\nvoid BFS\uff08Graph &G,int id){\n    //\u8bbf\u95ee\n    visit(id);\n    //\u5165\u961f\n    enQue(id);\n    //\u5faa\u73af\u904d\u5386\n    while(!isEmpty()){\n        deQue(v);\n        edge=G.nodes[id].first;\n        while(edge){\n            if(!visited[edge.to_node]){\n                visit(edge.to_node);\n                enQue(edge.to_node);\n            }\n            edge=edge.next;\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",children:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4"}),"\n",(0,s.jsx)(e.p,{children:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22(\u56de\u6eaf\u6cd5) \u7b97\u6cd5\u601d\u8def \u6df1\u5ea6\u4f18\u5148\u641c\u7d22(DFS,Depth-First Search)\u662f\u641c\u7d22\u7684\u624b\u6bb5\u4e4b\u4e00 \u5b83\u4ece\u67d0\u4e2a\u72b6\u6001\u5f00\u59cb,\u4e0d\u65ad\u5730\u8f6c\u79fb\u72b6\u6001\u76f4\u5230\u65e0\u6cd5\u8f6c\u79fb,\u7136\u540e\u56de\u9000\u5230\u524d\u4e00\u6b65\u72b6\u6001,\u7ee7\u7eed\u8f6c\u79fb\u5230\u5176\u4ed6\u72b6\u6001,\u5982\u6b64\u4e0d\u65ad\u91cd\u590d,\u76f4\u5230\u627e\u5230\u6700\u7ec8\u7684\u89e3.\u6839\u636e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u7279\u70b9,\u91c7\u7528\u9012\u5f52\u51fd\u6570(\u9690\u5f0f\u5730\u5229\u7528\u4e86\u6808\u8fdb\u884c\u8ba1\u7b97)\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355."}),"\n",(0,s.jsx)(e.p,{children:"\u7b97\u6cd5\u6548\u7387 \u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u4ece\u6700\u5f00\u59cb\u7684\u72b6\u6001\u51fa\u53d1,\u904d\u5386\u6240\u6709\u53ef\u4ee5\u5230\u8fbe\u7684\u72b6\u6001.\u7531\u6b64\u53ef\u4ee5\u5bf9\u6240\u6709\u7684\u72b6\u6001\u8fdb\u884c\u64cd\u4f5c,\u6216\u5217\u4e3e\u51fa\u6240\u6709\u7684\u72b6\u6001.\u4f5c\u4e3a\u641c\u7d22\u7b97\u6cd5\u7684\u4e00\u79cd,DFS\u5bf9\u4e8e\u5bfb\u627e\u4e00\u4e2a\u89e3\u7684NP(\u5305\u62ecNPC)\u95ee\u9898\u4f5c\u7528\u5f88\u5927."}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u662f,\u641c\u7d22\u7b97\u6cd5\u6bd5\u7adf\u662f\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n!)\u7684\u9636\u4e58\u7ea7\u7b97\u6cd5\uff0c\u5b83\u7684\u6548\u7387\u6bd4\u8f83\u4f4e,\u5728\u6570\u636e\u89c4\u6a21\u53d8\u5927\u65f6,\u8fd9\u79cd\u7b97\u6cd5\u5c31\u663e\u5f97\u529b\u4e0d\u4ece\u5fc3\u4e86.\u5173\u4e8e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u6548\u7387\u95ee\u9898,\u6709\u591a\u79cd\u89e3\u51b3\u65b9\u6cd5.\u6700\u5177\u6709\u901a\u7528\u6027\u7684\u662f**\u526a\u679d(prunning),**\u4e5f\u5c31\u662f\u53bb\u9664\u6ca1\u6709\u7528\u7684\u641c\u7d22\u5206\u652f.\u6709\u53ef\u884c\u6027\u526a\u679d\u548c\u6700\u4f18\u6027\u526a\u679d\u4e24\u79cd.\u6b64\u5916,\u5bf9\u4e8e\u5f88\u591a\u95ee\u9898,\u53ef\u4ee5\u628a\u641c\u7d22\u4e0e\u52a8\u6001\u89c4\u5212(DP,dynamic programming)\u3001\u5b8c\u5907\u5339\u914d(\u5308\u7259\u5229\u7b97\u6cd5)\u7b49\u9ad8\u6548\u7b97\u6cd5\u7ed3\u5408."}),"\n",(0,s.jsx)(e.p,{children:"2.\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22(\u5206\u652f\u9650\u754c\u6cd5) \u7b97\u6cd5\u601d\u8def \u5bbd\u5ea6\u4f18\u5148\u641c\u7d22(BFS,Breadth-First Search)\u4e5f\u662f\u641c\u7d22\u7684\u624b\u6bb5\u4e4b\u4e00.\u4ed6\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7c7b\u4f3c,\u4ece\u67d0\u4e2a\u72b6\u6001\u51fa\u53d1\u641c\u7d22\u6240\u6709\u53ef\u4ee5\u5230\u8fbe\u7684\u72b6\u6001.\u6839\u636e\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u7279\u70b9,\u91c7\u7528\u961f\u5217\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355."}),"\n",(0,s.jsx)(e.p,{children:"\u7b97\u6cd5\u6548\u7387 \u4e0e\u6df1\u5ea6\u4f18\u5148\u4e0d\u540c\u4e4b\u5904\u5728\u4e0e\u641c\u7d22\u7684\u987a\u5e8f,\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u603b\u662f\u5148\u641c\u7d22\u8ddd\u79bb\u521d\u59cb\u72b6\u6001\u8fd1\u7684\u72b6\u6001.\u4e5f\u5c31\u662f\u8bf4,\u5b83\u662f\u6309\u7167\u5f00\u59cb\u72b6\u6001->\u53ea\u97001\u6b21\u8f6c\u79fb\u5c31\u53ef\u4ee5\u5230\u8fbe\u7684\u6240\u6709\u72b6\u6001->\u53ea\u97002\u6b21\u8f6c\u79fb\u5c31\u53ef\u4ee5\u5230\u8fbe\u7684\u6240\u6709\u72b6\u6001->\u2026\u8fd9\u6837\u7684\u987a\u5e8f\u8fdb\u884c\u641c\u7d22.\u5bf9\u4e8e\u540c\u4e00\u4e2a\u72b6\u6001,\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u53ea\u7ecf\u8fc7\u4e00\u6b21,\u56e0\u6b64\u590d\u6742\u5ea6\u4e3a"}),"\n",(0,s.jsx)(e.p,{children:"O(\u72b6\u6001\u6570*\u8f6c\u79fb\u7684\u65b9\u5f0f).\u5f88\u5bb9\u6613\u5730\u7528\u6765\u6c42\u6700\u77ed\u8def\u5f84\u3001\u6700\u5c11\u64cd\u4f5c\u4e4b\u7c7b\u95ee\u9898\u7684\u7b54\u6848."}),"\n",(0,s.jsx)(e.p,{children:"\u5e7f\u5ea6\u641c\u7d22\u7684\u5224\u65ad\u91cd\u590d\u5982\u679c\u76f4\u63a5\u5224\u65ad\u5341\u5206\u8017\u65f6,\u6211\u4eec\u4e00\u822c\u501f\u52a9\u54c8\u5e0c\u8868\u6765\u4f18\u5316\u65f6\u95f4\u590d\u6742\u5ea6."}),"\n",(0,s.jsx)(e.p,{children:"3.Death-Breadth\u603b\u7ed3 \u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u4e00\u6837,\u90fd\u4f1a\u751f\u6210\u6240\u6709\u80fd\u591f\u904d\u5386\u5230\u7684\u72b6\u6001,\u56e0\u6b64\u9700\u8981\u5bf9\u6240\u6709\u72b6\u6001\u8fdb\u884c\u5904\u7406\u65f6\u4f7f\u7528\u5bbd\u5ea6\u4f18\u5148\u4e5f\u662f\u53ef\u4ee5\u7684.\u4f46\u662f\u9012\u5f52\u51fd\u6570\u53ef\u4ee5\u5f88\u7b80\u77ed\u5730\u7f16\u5199,\u800c\u4e14\u72b6\u6001\u7684\u7ba1\u7406\u4e5f\u66f4\u7b80\u5355,\u6240\u4ee5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u8fd8\u662f\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u5b9e\u73b0.\u53cd\u4e4b,\u5728\u6c42\u53d6\u6700\u77ed\u8def\u65f6\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u9700\u8981\u53cd\u590d\u7ecf\u8fc7\u540c\u6837\u7684\u72b6\u6001,\u6240\u4ee5\u8fd8\u662f\u4f7f\u7528\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u6bd4\u8f83\u597d."}),"\n",(0,s.jsx)(e.p,{children:"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u4f1a\u628a\u72b6\u6001\u9010\u4e2a\u52a0\u5165\u961f\u5217,\u56e0\u6b64\u901a\u5e38\u9700\u8981\u4e0e\u72b6\u6001\u6570\u6210\u6b63\u6bd4\u7684\u5185\u5b58\u7a7a\u95f4.\u53cd\u4e4b,\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u662f\u4e0e\u6700\u5927\u7684\u9012\u5f52\u6df1\u5ea6\u6210\u6b63\u6bd4\u7684.\u4e00\u822c\u4e0e\u72b6\u6001\u6570\u76f8\u6bd4,\u9012\u5f52\u7684\u6df1\u5ea6\u5e76\u4e0d\u4f1a\u592a\u5927,\u6240\u4ee5\u53ef\u4ee5\u8ba4\u4e3a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u66f4\u52a0\u8282\u7701\u5185\u5b58."}),"\n",(0,s.jsx)(e.p,{children:"\u5177\u4f53\u6765\u8bf4\uff0c\u6211\u4eec\u7528\u4e00\u4e2a\u961f\u5217 Q \u6765\u8bb0\u5f55\u8981\u5904\u7406\u7684\u8282\u70b9\uff0c\u7136\u540e\u5f00\u4e00\u4e2a\u5e03\u5c14\u6570\u7ec4 vis[] \u6765\u6807\u8bb0\u662f\u5426\u5df2\u7ecf\u8bbf\u95ee\u8fc7\u67d0\u4e2a\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c06\u6240\u6709\u8282\u70b9\u7684 vis \u503c\u8bbe\u4e3a 0\uff0c\u8868\u793a\u6ca1\u6709\u8bbf\u95ee\u8fc7\uff1b\u7136\u540e\u628a\u8d77\u70b9 s \u653e\u5165\u961f\u5217 Q \u4e2d\u5e76\u5c06 vis[s] \u8bbe\u4e3a 1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e4b\u540e\uff0c\u6211\u4eec\u6bcf\u6b21\u4ece\u961f\u5217 Q \u4e2d\u53d6\u51fa\u961f\u9996\u7684\u8282\u70b9 u\uff0c\u7136\u540e\u628a\u4e0e u \u76f8\u90bb\u7684\u6240\u6709\u8282\u70b9 v \u6807\u8bb0\u4e3a\u5df2\u8bbf\u95ee\u8fc7\u5e76\u653e\u5165\u961f\u5217 Q\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5faa\u73af\u76f4\u81f3\u5f53\u961f\u5217 Q \u4e3a\u7a7a\uff0c\u8868\u793a BFS \u7ed3\u675f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 BFS \u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u8bb0\u5f55\u4e00\u4e9b\u989d\u5916\u7684\u4fe1\u606f\u3002\u4f8b\u5982\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0cd \u6570\u7ec4\u7528\u4e8e\u8bb0\u5f55\u8d77\u70b9\u5230\u67d0\u4e2a\u8282\u70b9\u7684\u6700\u77ed\u8ddd\u79bb\uff08\u8981\u7ecf\u8fc7\u7684\u6700\u5c11\u8fb9\u6570\uff09\uff0cp \u6570\u7ec4\u8bb0\u5f55\u662f\u4ece\u54ea\u4e2a\u8282\u70b9\u8d70\u5230\u5f53\u524d\u8282\u70b9\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e86 d \u6570\u7ec4\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5f97\u5230\u8d77\u70b9\u5230\u4e00\u4e2a\u8282\u70b9\u7684\u8ddd\u79bb\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6709\u4e86 p \u6570\u7ec4\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u8fd8\u539f\u51fa\u8d77\u70b9\u5230\u4e00\u4e2a\u70b9\u7684\u6700\u77ed\u8def\u5f84\u3002\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u7684 restore \u51fd\u6570\u4f7f\u7528\u8be5\u6570\u7ec4\u4f9d\u6b21\u8f93\u51fa\u4ece\u8d77\u70b9\u5230\u8282\u70b9 x \u7684\u6700\u77ed\u8def\u5f84\u6240\u7ecf\u8fc7\u7684\u8282\u70b9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u65f6\u95f4\u590d\u6742\u5ea6 O(n + m)"}),"\n",(0,s.jsx)(e.p,{children:"\u7a7a\u95f4\u590d\u6742\u5ea6 O(n)\uff08vis \u6570\u7ec4\u548c\u961f\u5217\uff09"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u5b9e\u73b0 BFS \u7684\u65f6\u5019\uff0c\u672c\u8d28\u4e0a\u6211\u4eec\u628a\u672a\u88ab\u8bbf\u95ee\u8fc7\u7684\u8282\u70b9\u653e\u5728\u4e00\u4e2a\u79f0\u4e3a open \u7684\u5bb9\u5668\u4e2d\uff0c\u800c\u628a\u5df2\u7ecf\u8bbf\u95ee\u8fc7\u4e86\u7684\u8282\u70b9\u653e\u5728\u4e00\u4e2a\u79f0\u4e3a closed \u5bb9\u5668\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"BFS \u5e8f\u5217\n\u7c7b\u4f3c DFS \u5e8f\u5217\uff0cBFS \u5e8f\u5217\u662f\u6307\u5728 BFS \u8fc7\u7a0b\u4e2d\u8bbf\u95ee\u7684\u8282\u70b9\u7f16\u53f7\u7684\u5e8f\u5217\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u822c\u56fe\u4e0a BFS\n\u5982\u679c\u539f\u56fe\u4e0d\u8fde\u901a\uff0c\u53ea\u80fd\u8bbf\u95ee\u5230\u4ece\u8d77\u70b9\u51fa\u53d1\u80fd\u591f\u5230\u8fbe\u7684\u70b9\u3002"}),"\n",(0,s.jsx)(e.p,{children:"BFS \u5e8f\u5217\u901a\u5e38\u4e5f\u4e0d\u552f\u4e00\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u4f3c\u7684\u6211\u4eec\u4e5f\u53ef\u4ee5\u5b9a\u4e49 BFS \u6811\uff1a\u5728 BFS \u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u8bb0\u5f55\u6bcf\u4e2a\u8282\u70b9\u4ece\u54ea\u4e2a\u70b9\u8bbf\u95ee\u800c\u6765\uff0c\u53ef\u4ee5\u5efa\u7acb\u4e00\u4e2a\u6811\u7ed3\u6784\uff0c\u5373\u4e3a BFS \u6811\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4e00\u4e2a\u65e0\u6743\u56fe\u4e0a\u6c42\u4ece\u8d77\u70b9\u5230\u5176\u4ed6\u6240\u6709\u70b9\u7684\u6700\u77ed\u8def\u5f84\u3002\n\u5728 O(n+m) \u65f6\u95f4\u5185\u6c42\u51fa\u6240\u6709\u8fde\u901a\u5757\u3002\uff08\u6211\u4eec\u53ea\u9700\u8981\u4ece\u6bcf\u4e2a\u6ca1\u6709\u88ab\u8bbf\u95ee\u8fc7\u7684\u8282\u70b9\u5f00\u59cb\u505a BFS\uff0c\u663e\u7136\u6bcf\u6b21 BFS \u4f1a\u8d70\u5b8c\u4e00\u4e2a\u8fde\u901a\u5757\uff09\n\u5982\u679c\u628a\u4e00\u4e2a\u6e38\u620f\u7684\u52a8\u4f5c\u770b\u505a\u662f\u72b6\u6001\u56fe\u4e0a\u7684\u4e00\u6761\u8fb9\uff08\u4e00\u4e2a\u8f6c\u79fb\uff09\uff0c\u90a3\u4e48 BFS \u53ef\u4ee5\u7528\u6765\u627e\u5230\u5728\u6e38\u620f\u4e2d\u4ece\u4e00\u4e2a\u72b6\u6001\u5230\u8fbe\u53e6\u4e00\u4e2a\u72b6\u6001\u6240\u9700\u8981\u7684\u6700\u5c0f\u6b65\u9aa4\u3002\n\u5728\u4e00\u4e2a\u6709\u5411\u65e0\u6743\u56fe\u4e2d\u627e\u6700\u5c0f\u73af\u3002\uff08\u4ece\u6bcf\u4e2a\u70b9\u5f00\u59cb BFS\uff0c\u5728\u6211\u4eec\u5373\u5c06\u62b5\u8fbe\u4e00\u4e2a\u4e4b\u524d\u8bbf\u95ee\u8fc7\u7684\u70b9\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u5c31\u77e5\u9053\u9047\u5230\u4e86\u4e00\u4e2a\u73af\u3002\u56fe\u7684\u6700\u5c0f\u73af\u662f\u6bcf\u6b21 BFS \u5f97\u5230\u7684\u6700\u5c0f\u73af\u7684\u5e73\u5747\u503c\u3002\uff09\n\u627e\u5230\u4e00\u5b9a\u5728 (a, b) \u6700\u77ed\u8def\u4e0a\u7684\u8fb9\u3002\uff08\u5206\u522b\u4ece a \u548c b \u8fdb\u884c BFS\uff0c\u5f97\u5230\u4e24\u4e2a d \u6570\u7ec4\u3002\u4e4b\u540e\u5bf9\u6bcf\u4e00\u6761\u8fb9 (u, v)\uff0c\u5982\u679c d_a[u]+1+d_b[v]=d_a[b]\uff0c\u5219\u8bf4\u660e\u8be5\u8fb9\u5728\u6700\u77ed\u8def\u4e0a\uff09\n\u627e\u5230\u4e00\u5b9a\u5728 (a, b) \u6700\u77ed\u8def\u4e0a\u7684\u70b9\u3002\uff08\u5206\u522b\u4ece a \u548c b \u8fdb\u884c BFS\uff0c\u5f97\u5230\u4e24\u4e2a d \u6570\u7ec4\u3002\u4e4b\u540e\u5bf9\u6bcf\u4e00\u4e2a\u70b9 v\uff0c\u5982\u679c d_a[v]+d_b[v]=d_a[b]\uff0c\u5219\u8bf4\u660e\u8be5\u70b9\u5728\u67d0\u6761\u6700\u77ed\u8def\u4e0a\uff09\n\u627e\u5230\u4e00\u6761\u957f\u5ea6\u4e3a\u5076\u6570\u7684\u6700\u77ed\u8def\u3002\uff08\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u6784\u9020\u4e00\u4e2a\u65b0\u56fe\uff0c\u628a\u6bcf\u4e2a\u70b9\u62c6\u6210\u4e24\u4e2a\u65b0\u70b9\uff0c\u539f\u56fe\u7684\u8fb9 (u, v) \u53d8\u6210 ((u, 0), (v, 1)) \u548c ((u, 1), (v, 0))\u3002\u5bf9\u65b0\u56fe\u505a BFS\uff0c(s, 0) \u548c (t, 0) \u4e4b\u95f4\u7684\u6700\u77ed\u8def\u5373\u4e3a\u6240\u6c42\uff09\n\u5728\u4e00\u4e2a\u8fb9\u6743\u4e3a 0/1 \u7684\u56fe\u4e0a\u6c42\u6700\u77ed\u8def\uff0c\u89c1\u4e0b\u65b9\u53cc\u7aef\u961f\u5217 BFS\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u53cc\u7aef\u961f\u5217",children:"\u53cc\u7aef\u961f\u5217"}),"\n",(0,s.jsx)(e.p,{children:"\u8fb9\u6743\u503c\u4e3a\u53ef\u80fd\u6709\uff0c\u4e5f\u53ef\u80fd\u6ca1\u6709\uff08\u7531\u4e8e BFS \u9002\u7528\u4e8e\u6743\u503c\u4e3a 1 \u7684\u56fe\uff0c\u6240\u4ee5\u4e00\u822c\u6743\u503c\u662f 0 \u6216 1\uff09\uff0c\u6216\u8005\u80fd\u591f\u8f6c\u5316\u4e3a\u8fd9\u79cd\u8fb9\u6743\u503c\u7684\u6700\u77ed\u8def\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\u5728\u8d70\u8ff7\u5bab\u95ee\u9898\u4e2d\uff0c\u4f60\u53ef\u4ee5\u82b1 1 \u4e2a\u91d1\u5e01\u8d70 5 \u6b65\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u82b1\u91d1\u5e01\u8d70 1 \u6b65\uff0c\u8fd9\u5c31\u53ef\u4ee5\u7528 0-1 BFS \u89e3\u51b3\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4f18\u5148\u961f\u5217",children:"\u4f18\u5148\u961f\u5217"}),"\n",(0,s.jsx)(e.p,{children:"\u4f18\u5148\u961f\u5217\uff0c\u76f8\u5f53\u4e8e\u4e00\u4e2a\u4e8c\u53c9\u5806\uff0cSTL \u4e2d\u63d0\u4f9b\u4e86 std::priority_queue\uff0c\u53ef\u4ee5\u65b9\u4fbf\u6211\u4eec\u4f7f\u7528\u4f18\u5148\u961f\u5217\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u57fa\u4e8e\u4f18\u5148\u961f\u5217\u7684 BFS \u4e2d\uff0c\u6211\u4eec\u6bcf\u6b21\u4ece\u961f\u9996\u53d6\u51fa\u4ee3\u4ef7\u6700\u5c0f\u7684\u7ed3\u70b9\u8fdb\u884c\u8fdb\u4e00\u6b65\u641c\u7d22\u3002\u5bb9\u6613\u8bc1\u660e\u8fd9\u4e2a\u8d2a\u5fc3\u601d\u60f3\u662f\u6b63\u786e\u7684\uff0c\u56e0\u4e3a\u4ece\u8fd9\u4e2a\u7ed3\u70b9\u5f00\u59cb\u6269\u5c55\u7684\u641c\u7d22\uff0c\u4e00\u5b9a\u4e0d\u4f1a\u66f4\u65b0\u539f\u6765\u90a3\u4e9b\u4ee3\u4ef7\u66f4\u9ad8\u7684\u7ed3\u70b9\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5176\u4f59\u90a3\u4e9b\u4ee3\u4ef7\u66f4\u9ad8\u7684\u7ed3\u70b9\uff0c\u6211\u4eec\u4e0d\u56de\u53bb\u8003\u8651\u66f4\u65b0\u5b83\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u7136\uff0c\u6bcf\u4e2a\u7ed3\u70b9\u53ef\u80fd\u4f1a\u88ab\u5165\u961f\u591a\u6b21\uff0c\u53ea\u662f\u6bcf\u6b21\u5165\u961f\u7684\u4ee3\u4ef7\u4e0d\u540c\u3002\u5f53\u8be5\u7ed3\u70b9\u7b2c\u4e00\u6b21\u4ece\u4f18\u5148\u961f\u5217\u4e2d\u53d6\u51fa\uff0c\u4ee5\u540e\u4fbf\u65e0\u9700\u518d\u5728\u8be5\u7ed3\u70b9\u8fdb\u884c\u641c\u7d22\uff0c\u76f4\u63a5\u5ffd\u7565\u5373\u53ef\u3002\u6240\u4ee5\uff0c\u4f18\u5148\u961f\u5217\u7684 BFS \u5f53\u4e2d\uff0c\u6bcf\u4e2a\u7ed3\u70b9\u53ea\u4f1a\u88ab\u5904\u7406\u4e00\u6b21\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u76f8\u5bf9\u4e8e\u666e\u901a\u961f\u5217\u7684 BFS\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u591a\u4e86\u4e00\u4e2a \\log n\uff0c\u6bd5\u7adf\u8981\u7ef4\u62a4\u8fd9\u4e2a\u4f18\u5148\u961f\u5217\u561b\u3002\u4e0d\u8fc7\u666e\u901a BFS \u6709\u53ef\u80fd\u6bcf\u4e2a\u7ed3\u70b9\u5165\u961f\u3001\u51fa\u961f\u591a\u6b21\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u4f1a\u8fbe\u5230 O(n^2)\uff0c\u4e0d\u662f O(n)\u3002\u6240\u4ee5\u4f18\u5148\u961f\u5217 BFS \u901a\u5e38\u8fd8\u662f\u5feb\u7684\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bf6\uff1f\u8fd9\u600e\u4e48\u542c\u8d77\u6765\u8fd9\u4e48\u50cf\u5806\u4f18\u5316\u7684 Dijkstra \u7b97\u6cd5\u5462\uff1f\u4e8b\u5b9e\u4e0a\uff0c\u5806\u4f18\u5316 Dijkstra \u5c31\u662f\u4f18\u5148\u961f\u5217 BFS\u3002"})]})}function a(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>c});var s=i(6540);const d={},t=s.createContext(d);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);
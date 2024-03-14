"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[4772],{71979:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=d(74848),s=d(28453);const r={sidebar_position:4,title:"\u56fe",slug:"\u56fe"},t="\u56fe",c={id:"dsa/ds/\u56fe",title:"\u56fe",description:"\u90bb\u63a5\u8868Node\u8981\u94fe\u63a5firstedge,Edge\u8981\u94fe\u63a5nextedge,Anode,Bnode.",source:"@site/docs/dsa/ds/\u56fe.mdx",sourceDirName:"dsa/ds",slug:"/dsa/ds/\u56fe",permalink:"/en/docs/dsa/ds/\u56fe",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/dsa/ds/\u56fe.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u56fe",slug:"\u56fe"},sidebar:"ds",previous:{title:"\u6811",permalink:"/en/docs/dsa/ds/\u6811"},next:{title:"\u6392\u5e8f",permalink:"/en/docs/dsa/ds/\u6392\u5e8f"}},l={},o=[{value:"\u6df1\u5ea6\u4f18\u5148DFS",id:"\u6df1\u5ea6\u4f18\u5148dfs",level:2},{value:"\u5e7f\u5ea6\u4f18\u5148BFS",id:"\u5e7f\u5ea6\u4f18\u5148bfs",level:2},{value:"\u666e\u91cc\u59c6\u7b97\u6cd5<code>Prim</code>",id:"\u666e\u91cc\u59c6\u7b97\u6cd5prim",level:2},{value:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5<code>Kruskal</code>",id:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5kruskal",level:2},{value:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",id:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",level:2},{value:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5Dijkstra",id:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5dijkstra",level:2},{value:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5Floyd",id:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5floyd",level:2},{value:"\u62d3\u6251\u6392\u5e8f",id:"\u62d3\u6251\u6392\u5e8f",level:2},{value:"\u5173\u952e\u8def\u5f84",id:"\u5173\u952e\u8def\u5f84",level:2}];function h(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u56fe",children:"\u56fe"}),"\n",(0,i.jsx)(e.h1,{id:"\u5b58\u50a8\u7ed3\u6784",children:"\u5b58\u50a8\u7ed3\u6784"}),"\n",(0,i.jsxs)(e.p,{children:["\u90bb\u63a5\u8868",(0,i.jsx)(e.code,{children:"Node"}),"\u8981\u94fe\u63a5",(0,i.jsx)(e.code,{children:"first_edge"}),",",(0,i.jsx)(e.code,{children:"Edge"}),"\u8981\u94fe\u63a5",(0,i.jsx)(e.code,{children:"next_edge"}),",",(0,i.jsx)(e.code,{children:"A_node"}),",",(0,i.jsx)(e.code,{children:"B_node"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["\u90bb\u63a5\u591a\u91cd\u8868\u5728\u90bb\u63a5\u8868\u7684\u57fa\u7840\u4e0a",(0,i.jsx)(e.code,{children:"Edge"}),"\u7684",(0,i.jsx)(e.code,{children:"next_edge"}),"\u6709\u4e24\u4e2a,",(0,i.jsx)(e.code,{children:"A_next"}),",",(0,i.jsx)(e.code,{children:"B_next"}),",",(0,i.jsx)(e.code,{children:"A_node"}),",",(0,i.jsx)(e.code,{children:"B_node"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["\u5341\u5b57\u94fe\u8868\u5728\u90bb\u63a5\u591a\u91cd\u8868\u7684\u57fa\u7840\u4e0a,",(0,i.jsx)(e.code,{children:"Node"}),"\u6709\u4e24\u79cd",(0,i.jsx)(e.code,{children:"out_first"}),",",(0,i.jsx)(e.code,{children:"in_first"})]}),"\n",(0,i.jsx)(e.p,{children:"\u90bb\u63a5\u77e9\u9635\u548c\u90bb\u63a5\u8868\uff0c\u662f\u591a\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u5206\u4e3a\u6709\u5411\u56fe\u548c\u65e0\u5411\u56fe\u3002"}),"\n",(0,i.jsxs)(e.admonition,{title:"\u90bb\u63a5\u77e9\u9635\u548c\u90bb\u63a5\u8868\u7684\u5bf9\u6bd4",type:"success",children:[(0,i.jsx)(e.p,{children:"\u90bb\u63a5\u77e9\u9635\u8868\u793a\u6cd5\uff1a\u5728\u4e00\u4e2a\u4e00\u7ef4\u6570\u7ec4\u4e2d\u5b58\u50a8\u6240\u6709\u7684\u70b9\uff0c\u5728\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\u4e2d\u5b58\u50a8\u9876\u70b9\u4e4b\u95f4\u7684\u8fb9\u7684\u6743\u503c"}),(0,i.jsx)(e.p,{children:"\u90bb\u63a5\u8868\u8868\u793a\u6cd5\uff1a\u56fe\u4e2d\u9876\u70b9\u7528\u4e00\u4e2a\u4e00\u7ef4\u6570\u7ec4\u5b58\u50a8\uff0c\u56fe\u4e2d\u6bcf\u4e2a\u9876\u70b9vi\u7684\u6240\u6709\u90bb\u63a5\u70b9\u6784\u6210\u5355\u94fe\u8868"}),(0,i.jsx)(e.p,{children:"\u5bf9\u6bd4"}),(0,i.jsx)(e.p,{children:"1\uff09\u5728\u90bb\u63a5\u77e9\u9635\u8868\u793a\u4e2d\uff0c\u65e0\u5411\u56fe\u7684\u90bb\u63a5\u77e9\u9635\u662f\u5bf9\u79f0\u7684\u3002\u77e9\u9635\u4e2d\u7b2c i \u884c\u6216 \u7b2c i \u5217\u6709\u6548\u5143\u7d20\u4e2a\u6570\u4e4b\u548c\u5c31\u662f\u9876\u70b9\u7684\u5ea6\u3002"}),(0,i.jsx)(e.p,{children:"\u5728\u6709\u5411\u56fe\u4e2d \u7b2c i \u884c\u6709\u6548\u5143\u7d20\u4e2a\u6570\u4e4b\u548c\u662f\u9876\u70b9\u7684\u51fa\u5ea6\uff0c\u7b2c i \u5217\u6709\u6548\u5143\u7d20\u4e2a\u6570\u4e4b\u548c\u662f\u9876\u70b9\u7684\u5165\u5ea6\u3002"}),(0,i.jsx)(e.p,{children:"2\uff09\u5728\u90bb\u63a5\u8868\u7684\u8868\u793a\u4e2d\uff0c\u65e0\u5411\u56fe\u7684\u540c\u4e00\u6761\u8fb9\u5728\u90bb\u63a5\u8868\u4e2d\u5b58\u50a8\u7684\u4e24\u6b21\u3002\u5982\u679c\u60f3\u8981\u77e5\u9053\u9876\u70b9\u7684\u5ea6\uff0c\u53ea\u9700\u8981\u6c42\u51fa\u6240\u5bf9\u5e94\u94fe\u8868\u7684\u7ed3\u70b9\u4e2a\u6570\u5373\u53ef\u3002"}),(0,i.jsx)(e.p,{children:"\u6709\u5411\u56fe\u4e2d\u6bcf\u6761\u8fb9\u5728\u90bb\u63a5\u8868\u4e2d\u53ea\u51fa\u73b0\u4e00\u6b21\uff0c\u6c42\u9876\u70b9\u7684\u51fa\u5ea6\u53ea\u9700\u8981\u904d\u5386\u6240\u5bf9\u5e94\u94fe\u8868\u5373\u53ef\u3002\u6c42\u5165\u5ea6\u5219\u9700\u8981\u904d\u5386\u5176\u4ed6\u9876\u70b9\u7684\u94fe\u8868\u3002"}),(0,i.jsx)(e.p,{children:"3\uff09\u90bb\u63a5\u77e9\u9635\u4e0e\u90bb\u63a5\u8868\u4f18\u7f3a\u70b9\uff1a"}),(0,i.jsx)(e.p,{children:"\u90bb\u63a5\u77e9\u9635\u7684\u4f18\u70b9\u662f\u53ef\u4ee5\u5feb\u901f\u5224\u65ad\u4e24\u4e2a\u9876\u70b9\u4e4b\u95f4\u662f\u5426\u5b58\u5728\u8fb9\uff0c\u53ef\u4ee5\u5feb\u901f\u6dfb\u52a0\u8fb9\u6216\u8005\u5220\u9664\u8fb9\u3002\u800c\u5176\u7f3a\u70b9\u662f\u5982\u679c\u9876\u70b9\u4e4b\u95f4\u7684\u8fb9\u6bd4\u8f83\u5c11\uff0c\u4f1a\u6bd4\u8f83\u6d6a\u8d39\u7a7a\u95f4\u3002\u56e0\u4e3a\u662f\u4e00\u4e2a n\u2217n \u7684\u77e9\u9635\u3002"}),(0,i.jsx)(e.p,{children:"\u800c\u90bb\u63a5\u8868\u7684\u4f18\u70b9\u662f\u8282\u7701\u7a7a\u95f4\uff0c\u53ea\u5b58\u50a8\u5b9e\u9645\u5b58\u5728\u7684\u8fb9\u3002\u5176\u7f3a\u70b9\u662f\u5173\u6ce8\u9876\u70b9\u7684\u5ea6\u65f6\uff0c\u5c31\u53ef\u80fd\u9700\u8981\u904d\u5386\u4e00\u4e2a\u94fe\u8868\u3002"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"typedef struct {\n    Info info;\n}Node;\ntypedef struct {\n    Node node[maxSize];\n    int edges[maxSize][maxSize];//\u5e26\u6743\u56fe float \u4f7f\u7528\\infin\u4ee3\u8868\u4e0d\u5b58\u5728\u8fb9\n    int nodes,edges;\n}Graph;\n//\u65e0\u6743\u56fe:1\u6709\u8fb9,0\u65e0\u8fb9,\u81ea\u8eab0\n//\u6709\u6743\u56fe:\u221e\u65e0\u8fb9,\u6743\u503c\u6709\u8fb9,\u81ea\u8eab0\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"typedef int Info;\ntypedef struct Edge{\n    Info info;//weight or something else\n    int from_node,to_node;\n    struct Edge next;\n}Edge;\n\ntypedef struct Node{\n    Info info;\n    Edge first;\n}Node;\n\ntypedef struct Graph{\n    struct info{\n        int node_num,edge_num;\n    }\n    Node node[maxSize];\n\n}Graph;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"//\u65e0\u5411\u56fe\u7684\u4e00\u79cd\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784\ntypedef struct Edge{\n\tchar info;\n\tNode *A, *B;\n\tEdge *A_next,*B_next;\n}Edge;\ntypedef struct Node{\n\tchar data;\n\tEdge *first;\n}Node;\ntypedef struct Graph{\n    Node node[maxSize];\n    int nodes,edges;\n}Graph;\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"//\u6709\u5411\u56fe\u7684\u4e00\u79cd\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784\ntypedef struct Edge{\n\tchar info;\n\tNode *from,*to;\n\tEdge *from_next,*to_next;\n}\ntypedef struct Node{\n\tchar data;\n\tEdge *out_first,*in_first;\n}\ntypedef struct Graph{\n    Node node[maxSize];\n    int nodes,edges;\n}Graph;\n"})}),"\n",(0,i.jsx)(e.h1,{id:"\u904d\u5386",children:"\u904d\u5386"}),"\n",(0,i.jsx)(e.h2,{id:"\u6df1\u5ea6\u4f18\u5148dfs",children:"\u6df1\u5ea6\u4f18\u5148DFS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"bool visited[maxSize];//\u8bbf\u95ee\u6807\u8bb0\nEdge edge;//\u8fb9\u6307\u9488\n\n// \u975e\u8fde\u901a\u56fe\u5faa\u73af\u8bbf\u95ee\nvoid traverse(Graph &G){\n    for(int i=0;i<G.info.node_num;++i)\n        if(visit[i]==0)\n            DFS(G,i);\n}\n//\u9012\u5f52\u7b97\u6cd5\nvoid DFS(Graph &G, int id){\n    //\u8bbf\u95ee\n    visit[id] = 1;\n    edge = G.node[id].first;\n    while(edge){\n        if(visit[edge.to_node]==0) DFS(G,edge.to_node);\n        edge=edge.next;\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5e7f\u5ea6\u4f18\u5148bfs",children:"\u5e7f\u5ea6\u4f18\u5148BFS"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"bool visited[MAXSIZE];//\u8bbf\u95ee\u6807\u8bb0\nint Q[MAXSIZE],front=0,rear=0;\nEdge edge;\n\nvoid enQue(int v){\n    rear=(rear + 1) % MAXSIZE;\n    Q[rear]=v;\n}\n\nvoid deQue(int &v){\n    front=(front+1) % maxSize;\n    v=Q[front];\n}\n\nvoid isEmpty(){\n    return front==rear?1:0\n        }\n\nvoid visit(int v){\n    visited[v] = TRUE;\n}\n\n// \u975e\u8fde\u901a\u56fe\u5faa\u73af\u8bbf\u95ee\nvoid traverse(Graph &G){\n    for(int i = 0;i<G.info.node_num;++i)\n        if(visit[i]==0) BFS(g,i)\n            }\n\nvoid BFS\uff08Graph &G,int id){\n    //\u8bbf\u95ee\n    visit(id);\n    //\u5165\u961f\n    enQue(id);\n    //\u5faa\u73af\u904d\u5386\n    while(!isEmpty()){\n        deQue(v);\n        edge=G.nodes[id].first;\n        while(edge){\n            if(!visited[edge.to_node]){\n                visit(edge.to_node);\n                enQue(edge.to_node);\n            }\n            edge=edge.next;\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(e.h1,{id:"\u6700\u5c0f\u751f\u6210\u6811mst",children:["\u6700\u5c0f\u751f\u6210\u6811",(0,i.jsx)(e.code,{children:"MST"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u4e00\u4e2a\u5e26\u6743\u8fde\u901a\u65e0\u5411\u56fe\u7684\u751f\u6210\u6811\u4e2d\u8fb9\u7684\u6743\u503c\u4e4b\u548c\u6700\u5c0f\u7684\u90a3\u4e2a\u53eb\u505a\u56fe\u7684\u6700\u5c0f\u751f\u6210\u6811",(0,i.jsx)(e.code,{children:"MST"})]}),"\n",(0,i.jsxs)(e.h2,{id:"\u666e\u91cc\u59c6\u7b97\u6cd5prim",children:["\u666e\u91cc\u59c6\u7b97\u6cd5",(0,i.jsx)(e.code,{children:"Prim"})]}),"\n",(0,i.jsx)(e.p,{children:"\u65e0\u5411\u56fe\u7a20\u5bc6\u56fe"}),"\n",(0,i.jsx)(e.p,{children:"\u6b63\u9762\u6218\u573a"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://cdn.nlark.com/yuque/__latex/788a6a1c2e659004f53073bd49e60ef0.svg",alt:"https://cdn.nlark.com/yuque/__latex/788a6a1c2e659004f53073bd49e60ef0.svg"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"vset[node_num];\u9876\u70b9\u5df2\u7ecf\u5e76\u5165\u751f\u6210\u6811\nlowcost[node_num];\u5f53\u524d\u751f\u6210\u6811\u5230\u5269\u4f59\u5404\u9876\u70b9\u6700\u77ed\u8fb9\u7684\u6743\u503c\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5kruskal",children:["\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5",(0,i.jsx)(e.code,{children:"Kruskal"})]}),"\n",(0,i.jsx)(e.p,{children:"\u7a00\u758f\u56fe\u5e76\u67e5\u96c6"}),"\n",(0,i.jsxs)(e.p,{children:["\u6bcf\u6b21\u67e5\u627e",(0,i.jsx)(e.strong,{children:"\u5e76\u67e5\u96c6"}),"\u627e\u51fa\u5019\u9009\u8fb9\u4e2d\u6743\u503c\u6700\u5c0f\u7684\u8fb9\uff0c\u5e76\u5165\u751f\u6210\u6811"]}),"\n",(0,i.jsxs)(e.admonition,{title:"\u6700\u5c0f\u751f\u6210\u6811\u7b97\u6cd5\u7684\u6bd4\u8f83",type:"success",children:[(0,i.jsx)(e.p,{children:"\u6700\u5c0f\u751f\u6210\u6811\uff1a \u6700\u5c0f\u751f\u6210\u6811\u6765\u81ea\u4e8e\u65e0\u5411\u7f51\u3002 \u65e0\u5411\u56fe\u5728\u8fb9\u4e0a\u52a0\u4e0a\u6743\u503c\u5c31\u6210\u4e86\u65e0\u5411\u7f51\u3002 \u4e00\u4e2a\u65e0\u5411\u56fe\u53ef\u4ee5\u6709\u591a\u79cd\u4e0d\u540c\u59ff\u6001\u8fde\u63a5\u7684\u751f\u6210\u6811\u3002 \u6700\u5c0f\u751f\u6210\u6811\u5c31\u662f\u2013\u5404\u8fb9\u4e0a\u6743\u503c\u4e4b\u548c\u6700\u5c0f\u7684\u751f\u6210\u6811\u3002"}),(0,i.jsx)(e.p,{children:"\u666e\u91cc\u59c6\u7b97\u6cd5(Prim)\u548c\u514b\u9c81\u65af\u5361\u5c14(Kruskal)\u7b97\u6cd5"}),(0,i.jsx)(e.p,{children:"\u666e\u91cc\u59c6\u7b97\u6cd5\u7684\u57fa\u672c\u601d\u60f3:\uff08\u7b80\u5355\u7684\u8bf4\u5c31\u662f\u4e00\u76f4\u52a0\u70b9\uff09 \u53d6\u56fe\u4e2d\u4efb\u610f\u4e00\u4e2a\u9876\u70b9 v \u4f5c\u4e3a\u751f\u6210\u6811\u7684\u6839\uff0c\u4e4b\u540e\u5f80\u751f\u6210\u6811\u4e0a\u6dfb\u52a0\u65b0\u7684\u9876\u70b9 w\u3002\u6dfb\u52a0\u9876\u70b9w\u7684\u6761\u4ef6\u4e3a\uff1aw \u548c\u5df2\u5728\u751f\u6210\u6811\u4e0a\u7684\u9876\u70b9v \u4e4b\u95f4\u5fc5\u5b9a\u5b58\u5728\u4e00\u6761\u8fb9\uff0c\u5e76\u4e14\u8be5\u8fb9\u7684\u6743\u503c\u5728\u6240\u6709\u8fde\u901a\u9876\u70b9 v \u548c w \u4e4b\u95f4\u7684\u8fb9\u4e2d\u53d6\u503c\u6700\u5c0f\u3002\u4e4b\u540e\u7ee7\u7eed\u5f80\u751f\u6210\u6811\u4e0a\u6dfb\u52a0\u9876\u70b9\uff0c\u76f4\u81f3\u751f\u6210\u6811\u4e0a\u542b\u6709 n-1 \u4e2a\u9876\u70b9\u4e3a\u6b62\u3002"}),(0,i.jsx)(e.p,{children:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5\u7684\u57fa\u672c\u601d\u60f3\uff1a\uff08\u7b80\u5355\u7684\u8bf4\u5c31\u662f\u627e\u4e0d\u56f4\u6210\u5708\u7684\u6700\u5c0f\u7684\u8fb9\uff09"}),(0,i.jsx)(e.p,{children:"\u8003\u8651\u95ee\u9898\u7684\u51fa\u53d1\u70b9: \u4e3a\u4f7f\u751f\u6210\u6811\u4e0a\u8fb9\u7684\u6743\u503c\u4e4b\u548c\u8fbe\u5230\u6700\u5c0f\uff0c\u5219\u5e94\u4f7f\u751f\u6210\u6811\u4e2d\u6bcf\u4e00\u6761\u8fb9\u7684\u6743\u503c\u5c3d\u53ef\u80fd\u5730\u5c0f\u3002"}),(0,i.jsx)(e.p,{children:"\u5177\u4f53\u505a\u6cd5: \u5148\u6784\u9020\u4e00\u4e2a\u53ea\u542b n \u4e2a\u9876\u70b9\u7684\u5b50\u56fe SG\uff0c\u7136\u540e\u4ece\u6743\u503c\u6700\u5c0f\u7684\u8fb9\u5f00\u59cb\uff0c\u82e5\u5b83\u7684\u6dfb\u52a0\u4e0d\u4f7fSG \u4e2d\u4ea7\u751f\u56de\u8def\uff0c\u5219\u5728 SG \u4e0a\u52a0\u4e0a\u8fd9\u6761\u8fb9\uff0c\u5982\u6b64\u91cd\u590d\uff0c\u76f4\u81f3\u52a0\u4e0a n-1 \u6761\u8fb9\u4e3a\u6b62\u3002"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u5e26\u6743\u8fde\u901a\u56fe\u7684\u4efb\u610f\u4e00\u4e2a\u73af\u4e2d\u6240\u5305\u542b\u7684\u6743\u503c\u5747\u4e0d\u76f8\u540c\u65f6\u6700\u5c0f\u751f\u6210\u6811\u552f\u4e00"}),"\n",(0,i.jsx)(e.h2,{id:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4",children:"\u6df1\u5ea6\u4f18\u5148\u548c\u5e7f\u5ea6\u4f18\u5148\u7b97\u6cd5\u7684\u5bf9\u6bd4"}),"\n",(0,i.jsx)(e.p,{children:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22(\u56de\u6eaf\u6cd5) \u7b97\u6cd5\u601d\u8def \u6df1\u5ea6\u4f18\u5148\u641c\u7d22(DFS,Depth-First Search)\u662f\u641c\u7d22\u7684\u624b\u6bb5\u4e4b\u4e00 \u5b83\u4ece\u67d0\u4e2a\u72b6\u6001\u5f00\u59cb,\u4e0d\u65ad\u5730\u8f6c\u79fb\u72b6\u6001\u76f4\u5230\u65e0\u6cd5\u8f6c\u79fb,\u7136\u540e\u56de\u9000\u5230\u524d\u4e00\u6b65\u72b6\u6001,\u7ee7\u7eed\u8f6c\u79fb\u5230\u5176\u4ed6\u72b6\u6001,\u5982\u6b64\u4e0d\u65ad\u91cd\u590d,\u76f4\u5230\u627e\u5230\u6700\u7ec8\u7684\u89e3.\u6839\u636e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u7279\u70b9,\u91c7\u7528\u9012\u5f52\u51fd\u6570(\u9690\u5f0f\u5730\u5229\u7528\u4e86\u6808\u8fdb\u884c\u8ba1\u7b97)\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355."}),"\n",(0,i.jsx)(e.p,{children:"\u7b97\u6cd5\u6548\u7387 \u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u4ece\u6700\u5f00\u59cb\u7684\u72b6\u6001\u51fa\u53d1,\u904d\u5386\u6240\u6709\u53ef\u4ee5\u5230\u8fbe\u7684\u72b6\u6001.\u7531\u6b64\u53ef\u4ee5\u5bf9\u6240\u6709\u7684\u72b6\u6001\u8fdb\u884c\u64cd\u4f5c,\u6216\u5217\u4e3e\u51fa\u6240\u6709\u7684\u72b6\u6001.\u4f5c\u4e3a\u641c\u7d22\u7b97\u6cd5\u7684\u4e00\u79cd,DFS\u5bf9\u4e8e\u5bfb\u627e\u4e00\u4e2a\u89e3\u7684NP(\u5305\u62ecNPC)\u95ee\u9898\u4f5c\u7528\u5f88\u5927."}),"\n",(0,i.jsx)(e.p,{children:"\u4f46\u662f,\u641c\u7d22\u7b97\u6cd5\u6bd5\u7adf\u662f\u65f6\u95f4\u590d\u6742\u5ea6\u662fO(n!)\u7684\u9636\u4e58\u7ea7\u7b97\u6cd5\uff0c\u5b83\u7684\u6548\u7387\u6bd4\u8f83\u4f4e,\u5728\u6570\u636e\u89c4\u6a21\u53d8\u5927\u65f6,\u8fd9\u79cd\u7b97\u6cd5\u5c31\u663e\u5f97\u529b\u4e0d\u4ece\u5fc3\u4e86.\u5173\u4e8e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u6548\u7387\u95ee\u9898,\u6709\u591a\u79cd\u89e3\u51b3\u65b9\u6cd5.\u6700\u5177\u6709\u901a\u7528\u6027\u7684\u662f**\u526a\u679d(prunning),**\u4e5f\u5c31\u662f\u53bb\u9664\u6ca1\u6709\u7528\u7684\u641c\u7d22\u5206\u652f.\u6709\u53ef\u884c\u6027\u526a\u679d\u548c\u6700\u4f18\u6027\u526a\u679d\u4e24\u79cd.\u6b64\u5916,\u5bf9\u4e8e\u5f88\u591a\u95ee\u9898,\u53ef\u4ee5\u628a\u641c\u7d22\u4e0e\u52a8\u6001\u89c4\u5212(DP,dynamic programming)\u3001\u5b8c\u5907\u5339\u914d(\u5308\u7259\u5229\u7b97\u6cd5)\u7b49\u9ad8\u6548\u7b97\u6cd5\u7ed3\u5408."}),"\n",(0,i.jsx)(e.p,{children:"2.\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22(\u5206\u652f\u9650\u754c\u6cd5) \u7b97\u6cd5\u601d\u8def \u5bbd\u5ea6\u4f18\u5148\u641c\u7d22(BFS,Breadth-First Search)\u4e5f\u662f\u641c\u7d22\u7684\u624b\u6bb5\u4e4b\u4e00.\u4ed6\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7c7b\u4f3c,\u4ece\u67d0\u4e2a\u72b6\u6001\u51fa\u53d1\u641c\u7d22\u6240\u6709\u53ef\u4ee5\u5230\u8fbe\u7684\u72b6\u6001.\u6839\u636e\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u7279\u70b9,\u91c7\u7528\u961f\u5217\u5b9e\u73b0\u6bd4\u8f83\u7b80\u5355."}),"\n",(0,i.jsx)(e.p,{children:"\u7b97\u6cd5\u6548\u7387 \u4e0e\u6df1\u5ea6\u4f18\u5148\u4e0d\u540c\u4e4b\u5904\u5728\u4e0e\u641c\u7d22\u7684\u987a\u5e8f,\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u603b\u662f\u5148\u641c\u7d22\u8ddd\u79bb\u521d\u59cb\u72b6\u6001\u8fd1\u7684\u72b6\u6001.\u4e5f\u5c31\u662f\u8bf4,\u5b83\u662f\u6309\u7167\u5f00\u59cb\u72b6\u6001->\u53ea\u97001\u6b21\u8f6c\u79fb\u5c31\u53ef\u4ee5\u5230\u8fbe\u7684\u6240\u6709\u72b6\u6001->\u53ea\u97002\u6b21\u8f6c\u79fb\u5c31\u53ef\u4ee5\u5230\u8fbe\u7684\u6240\u6709\u72b6\u6001->\u2026\u8fd9\u6837\u7684\u987a\u5e8f\u8fdb\u884c\u641c\u7d22.\u5bf9\u4e8e\u540c\u4e00\u4e2a\u72b6\u6001,\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u53ea\u7ecf\u8fc7\u4e00\u6b21,\u56e0\u6b64\u590d\u6742\u5ea6\u4e3a"}),"\n",(0,i.jsx)(e.p,{children:"O(\u72b6\u6001\u6570*\u8f6c\u79fb\u7684\u65b9\u5f0f).\u5f88\u5bb9\u6613\u5730\u7528\u6765\u6c42\u6700\u77ed\u8def\u5f84\u3001\u6700\u5c11\u64cd\u4f5c\u4e4b\u7c7b\u95ee\u9898\u7684\u7b54\u6848."}),"\n",(0,i.jsx)(e.p,{children:"\u5e7f\u5ea6\u641c\u7d22\u7684\u5224\u65ad\u91cd\u590d\u5982\u679c\u76f4\u63a5\u5224\u65ad\u5341\u5206\u8017\u65f6,\u6211\u4eec\u4e00\u822c\u501f\u52a9\u54c8\u5e0c\u8868\u6765\u4f18\u5316\u65f6\u95f4\u590d\u6742\u5ea6."}),"\n",(0,i.jsx)(e.p,{children:"3.Death-Breadth\u603b\u7ed3 \u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u4e0e\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u4e00\u6837,\u90fd\u4f1a\u751f\u6210\u6240\u6709\u80fd\u591f\u904d\u5386\u5230\u7684\u72b6\u6001,\u56e0\u6b64\u9700\u8981\u5bf9\u6240\u6709\u72b6\u6001\u8fdb\u884c\u5904\u7406\u65f6\u4f7f\u7528\u5bbd\u5ea6\u4f18\u5148\u4e5f\u662f\u53ef\u4ee5\u7684.\u4f46\u662f\u9012\u5f52\u51fd\u6570\u53ef\u4ee5\u5f88\u7b80\u77ed\u5730\u7f16\u5199,\u800c\u4e14\u72b6\u6001\u7684\u7ba1\u7406\u4e5f\u66f4\u7b80\u5355,\u6240\u4ee5\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u8fd8\u662f\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u5b9e\u73b0.\u53cd\u4e4b,\u5728\u6c42\u53d6\u6700\u77ed\u8def\u65f6\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u9700\u8981\u53cd\u590d\u7ecf\u8fc7\u540c\u6837\u7684\u72b6\u6001,\u6240\u4ee5\u8fd8\u662f\u4f7f\u7528\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u6bd4\u8f83\u597d."}),"\n",(0,i.jsx)(e.p,{children:"\u5bbd\u5ea6\u4f18\u5148\u641c\u7d22\u4f1a\u628a\u72b6\u6001\u9010\u4e2a\u52a0\u5165\u961f\u5217,\u56e0\u6b64\u901a\u5e38\u9700\u8981\u4e0e\u72b6\u6001\u6570\u6210\u6b63\u6bd4\u7684\u5185\u5b58\u7a7a\u95f4.\u53cd\u4e4b,\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u662f\u4e0e\u6700\u5927\u7684\u9012\u5f52\u6df1\u5ea6\u6210\u6b63\u6bd4\u7684.\u4e00\u822c\u4e0e\u72b6\u6001\u6570\u76f8\u6bd4,\u9012\u5f52\u7684\u6df1\u5ea6\u5e76\u4e0d\u4f1a\u592a\u5927,\u6240\u4ee5\u53ef\u4ee5\u8ba4\u4e3a\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u66f4\u52a0\u8282\u7701\u5185\u5b58."}),"\n",(0,i.jsx)(e.h1,{id:"\u6700\u77ed\u8def\u5f84\u6709\u5411\u56fe",children:"\u6700\u77ed\u8def\u5f84\uff08\u6709\u5411\u56fe\uff09"}),"\n",(0,i.jsx)(e.h2,{id:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5dijkstra",children:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5Dijkstra"}),"\n",(0,i.jsx)(e.p,{children:"\u67d0\u70b9\u5230\u5176\u4f59\u5404\u70b9\u7684\u6700\u5c0f\u8ddd\u79bb\u6700\u5c0f\u8def\u5f84"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://cdn.nlark.com/yuque/__latex/f2d5f588234eb61a559ff90c41511b85.svg",alt:"https://cdn.nlark.com/yuque/__latex/f2d5f588234eb61a559ff90c41511b85.svg"})}),"\n",(0,i.jsx)(e.p,{children:"\u7ec4\u7ec7\u6269\u5145\u6a21\u578b,\u6311\u9009\u5173\u7cfb\u6700\u597d\u8fd1\u7684\u4eba\u6210\u4e3a\u65b0\u6210\u5458\uff0c\u5173\u7cfb\u6700\u8fd1\u7684\u4eba\u6210\u4e3a\u65b0\u6210\u5458\uff0c\u65b0\u6210\u5458\u7684\u5173\u7cfb\u7f51\u7eb3\u5165\u53d1\u5c55\u5bf9\u8c61,\u5e76\u66f4\u65b0\u5df2\u7ecf\u662f\u53d1\u5c55\u5bf9\u8c61\u7684\u4eba\u7684\u5173\u7cfb\u8ddd\u79bb\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5floyd",children:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5Floyd"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://cdn.nlark.com/yuque/__latex/a77815a52a2d0050828079fb142b1410.svg",alt:"https://cdn.nlark.com/yuque/__latex/a77815a52a2d0050828079fb142b1410.svg"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Rust",children:"//\u7ef4\u62a4A[node_num][node_num]\u548cPath[node_num][node_num]\nloop(node_num){\n    A[i][j] = min(A[i][j],A[i][mid]+A[mid][j]);\n    if(change)Path[i][j]=mid\n        }\n"})}),"\n",(0,i.jsx)(e.admonition,{title:"Dijkstra \u7b97\u6cd5\u4e0e Prim \u7b97\u6cd5\u7684\u533a\u522b",type:"success",children:(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"prim\u7b97\u6cd5\u8fc7\u7a0b\uff1aprim\u7b97\u6cd5\u662f\u6700\u5c0f\u751f\u6210\u6811\u7b97\u6cd5\uff0c\u5b83\u8fd0\u7528\u7684\u662f\u8d2a\u5fc3\u539f\u7406\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u70b9\u96c6\u5408\uff0c\u4e00\u4e2a\u96c6\u5408\u4e3a\u8981\u6c42\u7684\u751f\u6210\u6811\u7684\u70b9\u96c6\u5408A\uff0c\u53e6\u4e00\u4e2a\u96c6\u5408\u4e3a\u672a\u52a0\u5165\u751f\u6210\u6811\u7684\u70b9B\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u6240\u6709\u7684\u70b9\u90fd\u5728\u96c6\u5408B\u4e2d\uff0cA\u96c6\u5408\u4e3a\u7a7a\u3002(memset(visited,0,sizeof(visited)))"}),"\n",(0,i.jsx)(e.li,{children:"\u4efb\u610f\u4ee5\u4e00\u4e2a\u70b9\u4e3a\u5f00\u59cb\uff0c\u628a\u8fd9\u4e2a\u521d\u59cb\u70b9\u52a0\u5165\u96c6\u5408A\u4e2d\uff0c\u4ece\u96c6\u5408B\u4e2d\u51cf\u53bb\u8fd9\u4e2a\u70b9(visited[1]=1)\u3002\u5bfb\u627e\u4e0e\u5b83\u76f8\u90bb\u7684\u70b9\u4e2d\u8def\u5f84\u6700\u77ed\u7684\u70b9\uff0c\u5982\u540e\u628a\u8fd9\u4e2a\u70b9\u4e5f\u52a0\u5165\u96c6\u5408A\u4e2d,\u4ece\u96c6\u5408B\u4e2d\u51cf\u53bb\u8fd9\u4e2a\u70b9\uff08visited[pos]=1\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u66f4\u65b0\u672a\u88ab\u8bbf\u95ee\u7684\u8282\u70b9\u7684dist[]\u503c\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u91cd\u590d\u4e0a\u8ff0\u8fc7\u7a0b\u3002\u4e00\u76f4\u5230\u6240\u6709\u7684\u70b9\u90fd\u5728A\u96c6\u5408\u4e2d\u7ed3\u675f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"dijkstra\u7b97\u6cd5\u8fc7\u7a0b\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u521d\u59cb\u65f6\uff0cS\u53ea\u5305\u542b\u6e90\u70b9v\uff0c\u5373S=v\u3002U\u5305\u542b\u9664v\u5916\u7684\u5176\u4ed6\u9876\u70b9\uff0cU\u4e2d\u9876\u70b9u\u8ddd\u79bb\u4e3a\u8fb9\u4e0a\u7684\u6743\uff08\u82e5v\u4e0eu\u6709\u8fb9\uff09\u6216\uff08\u82e5u\u4e0d\u662fv\u7684\u51fa\u8fb9\u90bb\u63a5\u70b9\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4eceU\u4e2d\u9009\u53d6\u4e00\u4e2a\u8ddd\u79bbv\u6700\u5c0f\u7684\u9876\u70b9k\uff0c\u628ak\uff0c\u52a0\u5165S\u4e2d\uff08\u8be5\u9009\u5b9a\u7684\u8ddd\u79bb\u5c31\u662fv\u5230k\u7684\u6700\u77ed\u8def\u5f84\u957f\u5ea6\uff09\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4ee5k\u4e3a\u65b0\u8003\u8651\u7684\u4e2d\u95f4\u70b9\uff0c\u4fee\u6539U\u4e2d\u5404\u9876\u70b9\u7684\u8ddd\u79bb\uff1b\u82e5\u4ece\u6e90\u70b9v\u5230\u9876\u70b9u\uff08u U\uff09\u7684\u8ddd\u79bb\uff08\u7ecf\u8fc7\u9876\u70b9k\uff09\u6bd4\u539f\u6765\u8ddd\u79bb\uff08\u4e0d\u7ecf\u8fc7\u9876\u70b9k\uff09\u77ed\uff0c\u5219\u4fee\u6539\u9876\u70b9u\u7684\u8ddd\u79bb\u503c\uff0c\u4fee\u6539\u540e\u7684\u8ddd\u79bb\u503c\u7684\u9876\u70b9k\u7684\u8ddd\u79bb\u52a0\u4e0a\u8fb9\u4e0a\u7684\u6743\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u91cd\u590d\u6b65\u9aa4\uff082\uff09\u548c\uff083\uff09\u76f4\u5230\u6240\u6709\u9876\u70b9\u90fd\u5305\u542b\u5728S\u4e2d\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5c0f\u603b\u7ed3"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"Prim\u662f\u8ba1\u7b97\u6700\u5c0f\u751f\u6210\u6811\u7684\u7b97\u6cd5\uff0cDijkstra\u662f\u8ba1\u7b97\u6700\u77ed\u8def\u5f84\u7684\u7b97\u6cd5"}),"\n",(0,i.jsx)(e.li,{children:"\u90fd\u662f\u4f7f\u7528\u8d2a\u5a6a(\u4e00\u4e2a\u5c40\u90e8\u6700\u4f18\u89e3\u4e5f\u662f\u5168\u5c40\u6700\u4f18\u89e3)\u548c\u7ebf\u6027\u89c4\u5212(\u4e3b\u95ee\u9898\u5305\u542bn\u4e2a\u5b50\u95ee\u9898\uff0c\u800c\u4e14\u5176\u4e2d\u6709\u91cd\u53e0\u7684\u5b50\u95ee\u9898\u3002)\uff0c\u6bcf\u4e00\u6b65\u90fd\u662f\u9009\u62e9\u6743\u503c/\u82b1\u8d39\u6700\u5c0f\u7684\u8fb9\u3002"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(e.h1,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,i.jsx)(e.h2,{id:"\u62d3\u6251\u6392\u5e8f",children:"\u62d3\u6251\u6392\u5e8f"}),"\n",(0,i.jsx)(e.p,{children:"\u5faa\u73af\u5220\u9664\u6ca1\u6709\u5165\u8fb9\u7684\u70b9"}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952e\u8def\u5f84",children:"\u5173\u952e\u8def\u5f84"}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u8fdf\u53d1\u751f\u65f6\u95f4\u662f\u5728\u4e0d\u63a8\u8fdf\u6574\u4e2a\u5de5\u7a0b\u5b8c\u6210\u7684\u524d\u63d0\u4e0b\u7684\u6700\u8fdf\u5fc5\u987b\u53d1\u751f\u65f6\u95f4,\u5269\u4f59\u65f6\u95f4=\u6700\u8fdf\u53d1\u751f\u65f6\u95f4-\u6700\u65e9\u53d1\u751f\u65f6\u95f4"})]})}function a(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>t,x:()=>c});var i=d(96540);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);
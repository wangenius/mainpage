"use strict";(self.webpackChunkpanovista=self.webpackChunkpanovista||[]).push([[884],{23199:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=d(74848),t=d(28453);const s={sidebar_position:4,title:"\u56fe",slug:"\u56fe"},r="\u56fe",o={id:"algorithm/dsa/\u56fe",title:"\u56fe",description:"\u90bb\u63a5\u8868Node\u8981\u94fe\u63a5firstedge,Edge\u8981\u94fe\u63a5nextedge,Anode,Bnode.",source:"@site/docs/algorithm/dsa/\u56fe.mdx",sourceDirName:"algorithm/dsa",slug:"/algorithm/dsa/\u56fe",permalink:"/en/docs/algorithm/dsa/\u56fe",draft:!1,unlisted:!1,editUrl:"https://github.com/wangenius/wangenius.github.io/tree/master/docs/algorithm/dsa/\u56fe.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u56fe",slug:"\u56fe"},sidebar:"dsa",previous:{title:"\u6811\u548c\u68ee\u6797",permalink:"/en/docs/algorithm/dsa/\u6811"},next:{title:"\u6392\u5e8f",permalink:"/en/docs/algorithm/dsa/\u6392\u5e8f"}},c={},l=[{value:"\u6df1\u5ea6\u4f18\u5148DFS",id:"\u6df1\u5ea6\u4f18\u5148dfs",level:2},{value:"\u5e7f\u5ea6\u4f18\u5148BFS",id:"\u5e7f\u5ea6\u4f18\u5148bfs",level:2},{value:"\u666e\u91cc\u59c6\u7b97\u6cd5<code>Prim</code>",id:"\u666e\u91cc\u59c6\u7b97\u6cd5prim",level:2},{value:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5<code>Kruskal</code>",id:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5kruskal",level:2},{value:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5Dijkstra",id:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5dijkstra",level:2},{value:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5Floyd",id:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5floyd",level:2},{value:"\u62d3\u6251\u6392\u5e8f",id:"\u62d3\u6251\u6392\u5e8f",level:2},{value:"\u5173\u952e\u8def\u5f84",id:"\u5173\u952e\u8def\u5f84",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u56fe",children:"\u56fe"}),"\n",(0,i.jsx)(n.h1,{id:"\u5b58\u50a8\u7ed3\u6784",children:"\u5b58\u50a8\u7ed3\u6784"}),"\n",(0,i.jsxs)(n.p,{children:["\u90bb\u63a5\u8868",(0,i.jsx)(n.code,{children:"Node"}),"\u8981\u94fe\u63a5",(0,i.jsx)(n.code,{children:"first_edge"}),",",(0,i.jsx)(n.code,{children:"Edge"}),"\u8981\u94fe\u63a5",(0,i.jsx)(n.code,{children:"next_edge"}),",",(0,i.jsx)(n.code,{children:"A_node"}),",",(0,i.jsx)(n.code,{children:"B_node"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u90bb\u63a5\u591a\u91cd\u8868\u5728\u90bb\u63a5\u8868\u7684\u57fa\u7840\u4e0a",(0,i.jsx)(n.code,{children:"Edge"}),"\u7684",(0,i.jsx)(n.code,{children:"next_edge"}),"\u6709\u4e24\u4e2a,",(0,i.jsx)(n.code,{children:"A_next"}),",",(0,i.jsx)(n.code,{children:"B_next"}),",",(0,i.jsx)(n.code,{children:"A_node"}),",",(0,i.jsx)(n.code,{children:"B_node"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["\u5341\u5b57\u94fe\u8868\u5728\u90bb\u63a5\u591a\u91cd\u8868\u7684\u57fa\u7840\u4e0a,",(0,i.jsx)(n.code,{children:"Node"}),"\u6709\u4e24\u79cd",(0,i.jsx)(n.code,{children:"out_first"}),",",(0,i.jsx)(n.code,{children:"in_first"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"typedef struct {\n    Info info;\n}Node;\ntypedef struct {\n    Node node[maxSize];\n    int edges[maxSize][maxSize];//\u5e26\u6743\u56fe float \u4f7f\u7528\\infin\u4ee3\u8868\u4e0d\u5b58\u5728\u8fb9\n    int nodes,edges;\n}Graph;\n//\u65e0\u6743\u56fe:1\u6709\u8fb9,0\u65e0\u8fb9,\u81ea\u8eab0\n//\u6709\u6743\u56fe:\u221e\u65e0\u8fb9,\u6743\u503c\u6709\u8fb9,\u81ea\u8eab0\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"typedef int Info;\ntypedef struct Edge{\n    Info info;//weight or something else\n    int from_node,to_node;\n    struct Edge next;\n}Edge;\n\ntypedef struct Node{\n    Info info;\n    Edge first;\n}Node;\n\ntypedef struct Graph{\n    struct info{\n        int node_num,edge_num;\n    }\n    Node node[maxSize];\n\n}Graph;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"//\u65e0\u5411\u56fe\u7684\u4e00\u79cd\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784\ntypedef struct Edge{\n\tchar info;\n\tNode *A, *B;\n\tEdge *A_next,*B_next;\n}Edge;\ntypedef struct Node{\n\tchar data;\n\tEdge *first;\n}Node;\ntypedef struct Graph{\n    Node node[maxSize];\n    int nodes,edges;\n}Graph;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"//\u6709\u5411\u56fe\u7684\u4e00\u79cd\u94fe\u5f0f\u5b58\u50a8\u7ed3\u6784\ntypedef struct Edge{\n\tchar info;\n\tNode *from,*to;\n\tEdge *from_next,*to_next;\n}\ntypedef struct Node{\n\tchar data;\n\tEdge *out_first,*in_first;\n}\ntypedef struct Graph{\n    Node node[maxSize];\n    int nodes,edges;\n}Graph;\n"})}),"\n",(0,i.jsx)(n.h1,{id:"\u904d\u5386",children:"\u904d\u5386"}),"\n",(0,i.jsx)(n.h2,{id:"\u6df1\u5ea6\u4f18\u5148dfs",children:"\u6df1\u5ea6\u4f18\u5148DFS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"bool visited[maxSize];//\u8bbf\u95ee\u6807\u8bb0\nEdge edge;//\u8fb9\u6307\u9488\n\n// \u975e\u8fde\u901a\u56fe\u5faa\u73af\u8bbf\u95ee\nvoid traverse(Graph &G){\n    for(int i=0;i<G.info.node_num;++i)\n        if(visit[i]==0)\n            DFS(G,i);\n}\n//\u9012\u5f52\u7b97\u6cd5\nvoid DFS(Graph &G, int id){\n    //\u8bbf\u95ee\n    visit[id] = 1;\n    edge = G.node[id].first;\n    while(edge){\n        if(visit[edge.to_node]==0) DFS(G,edge.to_node);\n        edge=edge.next;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5e7f\u5ea6\u4f18\u5148bfs",children:"\u5e7f\u5ea6\u4f18\u5148BFS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"bool visited[MAXSIZE];//\u8bbf\u95ee\u6807\u8bb0\nint Q[MAXSIZE],front=0,rear=0;\nEdge edge;\n\nvoid enQue(int v){\n    rear=(rear + 1) % MAXSIZE;\n    Q[rear]=v;\n}\n\nvoid deQue(int &v){\n    front=(front+1) % maxSize;\n    v=Q[front];\n}\n\nvoid isEmpty(){\n    return front==rear?1:0\n        }\n\nvoid visit(int v){\n    visited[v] = TRUE;\n}\n\n// \u975e\u8fde\u901a\u56fe\u5faa\u73af\u8bbf\u95ee\nvoid traverse(Graph &G){\n    for(int i = 0;i<G.info.node_num;++i)\n        if(visit[i]==0) BFS(g,i)\n            }\n\nvoid BFS\uff08Graph &G,int id){\n    //\u8bbf\u95ee\n    visit(id);\n    //\u5165\u961f\n    enQue(id);\n    //\u5faa\u73af\u904d\u5386\n    while(!isEmpty()){\n        deQue(v);\n        edge=G.nodes[id].first;\n        while(edge){\n            if(!visited[edge.to_node]){\n                visit(edge.to_node);\n                enQue(edge.to_node);\n            }\n            edge=edge.next;\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.h1,{id:"\u6700\u5c0f\u751f\u6210\u6811mst",children:["\u6700\u5c0f\u751f\u6210\u6811",(0,i.jsx)(n.code,{children:"MST"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u4e2a\u5e26\u6743\u8fde\u901a\u65e0\u5411\u56fe\u7684\u751f\u6210\u6811\u4e2d\u8fb9\u7684\u6743\u503c\u4e4b\u548c\u6700\u5c0f\u7684\u90a3\u4e2a\u53eb\u505a\u56fe\u7684\u6700\u5c0f\u751f\u6210\u6811",(0,i.jsx)(n.code,{children:"MST"})]}),"\n",(0,i.jsxs)(n.h2,{id:"\u666e\u91cc\u59c6\u7b97\u6cd5prim",children:["\u666e\u91cc\u59c6\u7b97\u6cd5",(0,i.jsx)(n.code,{children:"Prim"})]}),"\n",(0,i.jsx)(n.p,{children:"\u65e0\u5411\u56fe\u7a20\u5bc6\u56fe"}),"\n",(0,i.jsx)(n.p,{children:"\u6b63\u9762\u6218\u573a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.nlark.com/yuque/__latex/788a6a1c2e659004f53073bd49e60ef0.svg",alt:"https://cdn.nlark.com/yuque/__latex/788a6a1c2e659004f53073bd49e60ef0.svg"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"vset[node_num];\u9876\u70b9\u5df2\u7ecf\u5e76\u5165\u751f\u6210\u6811\nlowcost[node_num];\u5f53\u524d\u751f\u6210\u6811\u5230\u5269\u4f59\u5404\u9876\u70b9\u6700\u77ed\u8fb9\u7684\u6743\u503c\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5kruskal",children:["\u514b\u9c81\u65af\u5361\u5c14\u7b97\u6cd5",(0,i.jsx)(n.code,{children:"Kruskal"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7a00\u758f\u56fe\u5e76\u67e5\u96c6"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bcf\u6b21\u67e5\u627e",(0,i.jsx)(n.strong,{children:"\u5e76\u67e5\u96c6"}),"\u627e\u51fa\u5019\u9009\u8fb9\u4e2d\u6743\u503c\u6700\u5c0f\u7684\u8fb9\uff0c\u5e76\u5165\u751f\u6210\u6811"]}),"\n",(0,i.jsx)(n.h1,{id:"\u6700\u77ed\u8def\u5f84\u6709\u5411\u56fe",children:"\u6700\u77ed\u8def\u5f84\uff08\u6709\u5411\u56fe\uff09"}),"\n",(0,i.jsx)(n.h2,{id:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5dijkstra",children:"\u8fea\u6770\u65af\u7279\u62c9\u7b97\u6cd5Dijkstra"}),"\n",(0,i.jsx)(n.p,{children:"\u67d0\u70b9\u5230\u5176\u4f59\u5404\u70b9\u7684\u6700\u5c0f\u8ddd\u79bb\u6700\u5c0f\u8def\u5f84"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.nlark.com/yuque/__latex/f2d5f588234eb61a559ff90c41511b85.svg",alt:"https://cdn.nlark.com/yuque/__latex/f2d5f588234eb61a559ff90c41511b85.svg"})}),"\n",(0,i.jsx)(n.p,{children:"\u7ec4\u7ec7\u6269\u5145\u6a21\u578b,\u6311\u9009\u5173\u7cfb\u6700\u597d\u8fd1\u7684\u4eba\u6210\u4e3a\u65b0\u6210\u5458\uff0c\u5173\u7cfb\u6700\u8fd1\u7684\u4eba\u6210\u4e3a\u65b0\u6210\u5458\uff0c\u65b0\u6210\u5458\u7684\u5173\u7cfb\u7f51\u7eb3\u5165\u53d1\u5c55\u5bf9\u8c61,\u5e76\u66f4\u65b0\u5df2\u7ecf\u662f\u53d1\u5c55\u5bf9\u8c61\u7684\u4eba\u7684\u5173\u7cfb\u8ddd\u79bb\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5floyd",children:"\u5f17\u6d1b\u4f0a\u5fb7\u7b97\u6cd5Floyd"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://cdn.nlark.com/yuque/__latex/a77815a52a2d0050828079fb142b1410.svg",alt:"https://cdn.nlark.com/yuque/__latex/a77815a52a2d0050828079fb142b1410.svg"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"//\u7ef4\u62a4A[node_num][node_num]\u548cPath[node_num][node_num]\nloop(node_num){\n    A[i][j] = min(A[i][j],A[i][mid]+A[mid][j]);\n    if(change)Path[i][j]=mid\n        }\n"})}),"\n",(0,i.jsx)(n.h1,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,i.jsx)(n.h2,{id:"\u62d3\u6251\u6392\u5e8f",children:"\u62d3\u6251\u6392\u5e8f"}),"\n",(0,i.jsx)(n.p,{children:"\u5faa\u73af\u5220\u9664\u6ca1\u6709\u5165\u8fb9\u7684\u70b9"}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952e\u8def\u5f84",children:"\u5173\u952e\u8def\u5f84"}),"\n",(0,i.jsx)(n.p,{children:"\u6700\u8fdf\u53d1\u751f\u65f6\u95f4\u662f\u5728\u4e0d\u63a8\u8fdf\u6574\u4e2a\u5de5\u7a0b\u5b8c\u6210\u7684\u524d\u63d0\u4e0b\u7684\u6700\u8fdf\u5fc5\u987b\u53d1\u751f\u65f6\u95f4,\u5269\u4f59\u65f6\u95f4=\u6700\u8fdf\u53d1\u751f\u65f6\u95f4-\u6700\u65e9\u53d1\u751f\u65f6\u95f4"})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>r,x:()=>o});var i=d(96540);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
// noinspection JSUnusedGlobalSymbols

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 配置sidebar的目录 
 */
export default {

  // 作品集目录
  opus: [{type: 'autogenerated', dirName: 'opus'}],
  // 关于
  about: [{type: 'autogenerated', dirName: 'about'}],
  // 算法部分
  leetcode: [{type: 'autogenerated', dirName: 'dsa/leetcode'}],
  ds: [{type: 'autogenerated', dirName: 'dsa/ds'}],
  // 语言
  python: [{type: 'autogenerated', dirName: 'lang/python'}],
  cpp: [{type: 'autogenerated', dirName: 'lang/cpp'}],
  rust: [{type: 'autogenerated', dirName: 'lang/rust'}],
  ts: [{type: 'autogenerated', dirName: 'lang/ts'}],
  compile: [{type: 'autogenerated', dirName: 'lang/compile'}],

  

  // cs部分
  co: [{type: 'autogenerated', dirName:"cs/co"}],
  db: [{type: 'autogenerated', dirName:"cs/db"}],
  os: [{type: 'autogenerated', dirName:"cs/os"}],
  si: [{type: 'autogenerated', dirName:"cs/si"}],
  web: [{type: 'autogenerated', dirName:"cs/web"}],
  //other
  math: [{type: 'autogenerated', dirName:"more/math"}],
  git: [{type: 'autogenerated', dirName:"more/git"}],
  tools: [{type: 'autogenerated', dirName:"more/tools"}],
  docker: [{type: 'autogenerated', dirName:"more/docker"}],


} satisfies SidebarsConfig;
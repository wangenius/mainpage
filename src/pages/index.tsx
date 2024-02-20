import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { Tag } from "@/components";



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
      <div className={styles.left}>
        <h1 className={styles.title}>
            Panovista
        </h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link to="/docs/简介">探索</Link>
          <Link to="/blog">博客</Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.offsetBox}>
        <div className={styles.field}>
          <img src="/img/avatar.png" className={styles.avatar}/>
          <div className={styles.name}>
          
          <h1>神仙鱼也一定要渡大海</h1>
          <p>@wangenius</p>
         
          </div>
          <img src="/img/qrcode.svg" className={styles.qrcode}/>

        </div>
        <div className={styles.info}>
          <span>
            <Tag>篮球属实菜</Tag>
            <Tag>eason的病人</Tag>
            <Tag>单恋孙艺珍</Tag>
            <Tag>Rust还有机会吗</Tag>
            <Tag>从柯布西耶到迪杰斯特拉的特解</Tag>
            <Tag>离开建筑n年</Tag>
            <Tag>梦里开过飞驰的人</Tag>
            <Tag>阶段性亢奋</Tag>
            <Tag>只会空想赚大钱</Tag>
            <Tag>需要赞助</Tag>
          </span>
          <span>
            小目标：赚够400万，搞辆迈巴赫
          </span> <span>
            要是你想送我，发我邮箱：wangenius@qq.com
          </span>
        
        </div>
 
       
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="wangenius个人知识库">
      <HomepageHeader />
    </Layout>
  );
}

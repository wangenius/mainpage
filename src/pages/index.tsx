import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
        <h1 className={styles.title}>
            从<span className={"text-fuchsia-800"}>柯布西耶</span>到
            <span className={"text-amber-800"}>迪杰斯特拉</span>的一个<span className={"text-rose-800"}>特解</span>
        </h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={"flex justify-center align-middle gap-2 w-3/12 m-auto"}>
          <Link className={"btn btn-neutral btn-lg flex-1 hover:no-underline hover:text-white"} to="/docs/intro">探索</Link>
          <Link className={"btn btn-lg btn-primary hover:no-underline hover:text-white"} to="/blog">博客</Link>
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

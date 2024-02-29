import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.offsetBox}>
        <div className={styles.field}>
          <img src="/img/panovista.png" className={styles.logo} />
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <Link to={"/docs/repository/赞赏"}>
            <img src="/img/donate.svg" className={styles.donate} />
          </Link>
        </div>
        <div className={styles.tagline}>
          <p>
            故事的开始是一个有限但维数很大的矩阵空间。每一次的选择，矩阵空间都会做一次降维折叠，直到空间湮灭，主体消散。而折叠路径串起的大小传奇，将作为整个宇宙的岁月史书中，某个角落的蒙尘日志。日志的主人公形象是光线在躯壳和意识之间的反射，当一个环节发生变故，就会像日出后的雪人一样令人唏嘘的不见。那就把左矩阵刻录下来，叠成教训的谱，将歌声传向每一个开放的终端。
          </p>
          <p>
            The genesis of this narrative unfolds within a matrix space
            characterized by expansive dimensions yet bounded possibilities.
            With each iteration of choice, this matrix space undergoes a
            reductionist fold, gradually diminishing until its eventual
            dissolution, marking the dispersion of the protagonist.
            Nevertheless, the grandiose sagas interwoven along the pathways of
            fold shall be etched into the annals of universal chronicles,
            serving as obscure records in the annals of time.The protagonist of
            this log assumes the guise of light, refracted between corporeal
            form and consciousness. When a twist occurs in the narrative, it
            vanishes lamentably, akin to a snowman melting at sunrise. Let the
            left matrix be inscribed, assembled into a spectrum of instructive
            motifs, and let the song of wisdom resonate through every open
            terminus.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link to="/docs/repository/致明日的舞">探索</Link>
          <Link to="/blog">博客</Link>
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

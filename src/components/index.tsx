import { useEffect, useState } from "react";
import style from "./index.module.scss";

export const Tag = ({ children }) => {
  return <span className={style.tag}>{children}</span>;
};

export const Tags = ({ items }) => {
  return (
    <div className={style.tags}>
      {items.map((item, key) => {
        return <Tag key={key}>{item}</Tag>;
      })}
    </div>
  );
};

function checkImgExists(img_url: string) {
  return new Promise(function (resolve, reject) {
    var ImgObj = new Image();
    ImgObj.src = img_url;
    ImgObj.onload = function (res) {
      resolve(res);
    };
    ImgObj.onerror = function (err) {
      reject(err);
    };
  });
}

const web_icon = "https://www.svgrepo.com/show/331784/web-sites.svg";
/** @description 外部链接 */
export const To = ({
  name,
  icon,
  to,
}: {
  name: string;
  icon?: string;
  to: string;
}) => {
  const [url, setUrl] = useState(web_icon);
  useEffect(() => {
    if (icon) setUrl(icon);
    if (!icon)
      checkImgExists(to + "/favicon.ico")
        .then(() => {
          setUrl(to + "/favicon.ico");
        })
        .catch(() => {});
  }, []);

  return (
    <a target="_blank" className={style.to} href={to}>
      <div className={style.top}>
        <span>
          <img src={url} />
        </span>
        <span style={{ flex: 1 }}>{name}</span>
      </div>

      <span className={style.bottom}>{to}</span>
    </a>
  );
};

export const Multi = ({ children }) => {
  return <div className={style.multi}>{children}</div>;
};

export const Pairs = ({ children, title }) => {
  return (
    <div className={style.pairs}>
      <div className={style.title}>{title}</div>
      {children}
    </div>
  );
};

export const Pair = ({ children, title }) => {
  return (
    <div className={style.pair}>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  );
};

interface TableItem {
  rowspan: number;
  colspan: number;
  content: string;
}

type Item = Partial<TableItem> | string;

export const Table = ({
  children,
  title,
}: {
  title: string[];
  children: Item[][];
}) => {
  return (
    <table>
      <tr>
        {title.map((it) => {
          return <th key={it}>{it}</th>;
        })}
      </tr>
      {children.map((item, key) => {
        return (
          <tr key={key}>
            {item.map((it) => {
              if(typeof it === 'string') return <td>{it}</td>
              return <td rowSpan={it.rowspan != undefined ? it.rowspan : 1} colSpan={it.colspan != undefined ? it.colspan : 1}  key={it.content}>{it.content}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

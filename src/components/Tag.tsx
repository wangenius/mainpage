import { useEffect, useLayoutEffect, useState } from "react";
import style from "./tag.module.scss"
export const Tag = ({ children }) => {
  return <span style={{
    backgroundColor:"#060a31",
    borderRadius:20,
    padding:3,
    paddingLeft:6,
    paddingRight:6,
    fontSize:12,
    color:"#ffffff",
    userSelect:"none"
  }}>{children}</span>;
};


function checkImgExists(imgurl: string) {
  return new Promise(function(resolve, reject) {
    var ImgObj = new Image();
    ImgObj.src = imgurl;
    ImgObj.onload = function(res) {      
      resolve(res);
    }
    ImgObj.onerror = function(err) {
      reject(err)
    }
  })
}



const webicon = "https://www.svgrepo.com/show/438949/web-round.svg"
/** @description 外部链接 */
export const To = ({name,icon,to}:{name:string,icon?:string,to:string})=>{

  const [url,setUrl] = useState(webicon)
  useEffect(()=>{
    if(icon) setUrl(icon);
    if(!icon) checkImgExists(to + "/favicon.ico")
    .then(()=>{setUrl(to+"/favicon.ico")})
  .catch(( )=>{})
  },[])
  
  return <a target="_blank" className={style.to} href={to}>
    <div className={style.top}>
    <span style={{paddingRight:10}}>
      <img style={{
        width:36,
        borderRadius:18
      }} src={url} />
    </span>
    <span style={{flex:1}}>{name}</span>
    </div>
   
    <span className={style.bottom}>{to}</span>
  </a>
}
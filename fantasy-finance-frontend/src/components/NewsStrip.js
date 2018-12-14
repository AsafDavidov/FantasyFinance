import React from 'react';
import NewsBlock from "./NewsBlock";
const NewStrip = (props)=>{
   return(
     <div className={props.class}>
      {props.news ? props.news.map(n=>{
        return <NewsBlock key={n.url} newsObj={n}/>
      }): <h1>no news</h1>}
     </div>
   )
 }

export default NewStrip

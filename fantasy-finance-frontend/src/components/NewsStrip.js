import React from 'react';
import NewsBlock from './NewsBlock'
import {Divider} from "semantic-ui-react"
const NewStrip = ({news})=>{
   return(
     <div>
      <Divider />
      <h1 style={{fontSize:"40px",textAlign:"left"}}> Recent News <span style={{fontSize:"20px"}}>provided by the New York Times</span></h1>
      {news.map(article=><NewsBlock key={article.title} title={article.title} abstract={article.abstract} img={article.imgSrc} url={article.url}/>)}
     </div>
   )
 }

export default NewStrip

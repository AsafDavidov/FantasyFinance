import React from 'react';
const NewsBlock = ({newsObj})=>{
   return(
     <div className="newsblock">
      <a href={newsObj.url}>
        <img style={{height:"100px", width:"100px"}} src="https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-32-512.png" />
      </a>
      <p>{newsObj.headline.substring(0,50)}...</p>
      <p>Source:{newsObj.source}</p>
     </div>
   )
 }

export default NewsBlock

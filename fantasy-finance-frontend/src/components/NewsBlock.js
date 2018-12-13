import React, {Fragment} from 'react';
import { Image } from 'semantic-ui-react'

const NewsBlock = ({newsObj})=>{
   return(
     <div class="newsblock">
      <a href={newsObj.url}>
        <img style={{height:"100px", width:"100px"}} src="https://cdn4.iconfinder.com/data/icons/111-seo-services-pack/128/new_seo2-32-512.png" />
      </a>
      <p>{newsObj.headline.substring(0,50)}...</p>
      <p>Source:{newsObj.source}</p>
     </div>
   )
 }

export default NewsBlock

import React from 'react';
import {Image,Divider} from "semantic-ui-react"
const NewsBlock = ({title,abstract,img,url})=>{
   return(
     <div>
       <div style={{marginTop:"0px",textAlign:"left",minHeight:"130px",color:"black"}}>
        <Image
            target='_blank'
            as='a'
            href={url}
            src={img}
            floated="left"/> <span><h1>{title}</h1><h2>{abstract}</h2></span>
       </div>
       <Divider />
    </div>
   )
 }

export default NewsBlock

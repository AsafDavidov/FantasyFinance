import React, {Fragment} from 'react';
import {Image} from "semantic-ui-react"
import "../Profile.css"
const imgArray = [
  {
    name: "Consumer Discretionary",
    imgSrc: "https://www.schwab.com/resource-center/insights/sites/g/files/eyrktu156/files/styles/article_hero/public/consumer-discretionary-shopping-bag_1187x528.jpg?itok=1R1uvrcT"
  },
  {
    name: "Communication Services",
    imgSrc: "https://pbs.twimg.com/media/C81Vu4vXoAAcIO-.jpg"
  },
  {
    name: "Energy",
    imgSrc: "https://www.pinjury.com/wp-content/themes/enterprise/images/falling_objects_oil_rig.jpg"
  },
  {
    name: "Technology",
    imgSrc: "http://www.moneyoutline.com/wp-content/uploads/2017/10/Hero-Banner-TMET-1200x540.jpg"
  },
  {
    name: "Health Care",
    imgSrc: "http://res.freestockphotos.biz/pictures/0/202-pills-and-medicine-pv.jpg"
  },
  {
    name: "Industrials",
    imgSrc: "https://static1.squarespace.com/static/58a1e9ecbe6594dd28c0b251/t/58e5a613ebbd1a5be1070b24/1491445276313/General-Indusrial.png?format=2500w"
  },
  {
    name: "Financials",
    imgSrc: "http://img.chuansong.me/mmbiz_jpg/FHjVtRcMB7kjECCAtqueefF9ibyLMUkEYrbINMeJA2C1tm8FVqfSIQkkHmTiaXQ3TDOTDqPtSicic6DKjDTBdMicvKg/"
  },
  {
    name: "Materials",
    imgSrc: "https://www.schwab.com/resource-center/insights/sites/g/files/eyrktu156/files/styles/article_hero/public/materials_1187x528.jpg?itok=EY6lTcRO"
  },
  {
    name: "Consumer Staples",
    imgSrc: "https://img.maximummedia.ie/her_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtaGVyLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzAzXFxcLzAzMTExMzIyXFxcL2lTdG9jay01MDA4NzY2NjItMTAyNHg2ODAuanBnXCIsXCJ3aWR0aFwiOjc2NyxcImhlaWdodFwiOjQzMSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lmhlci5pZVxcXC9hc3NldHNcXFwvaW1hZ2VzXFxcL2hlclxcXC9uby1pbWFnZS5wbmc_dj01XCJ9IiwiaGFzaCI6IjFkNmY4MDQ0ZjYzMTNkZGVmNzQ2YTBhMDQzZWIzZWEzMDJhOTI2ZWYifQ==/istock-500876662-1024x680.jpg"
  },
  {
    name: "Real Estate",
    imgSrc: "http://static1.squarespace.com/static/55fc58cde4b0308bb8c7c2f6/5602f3bde4b0df2d0580c942/57e96e90d482e998b0d79eb5/1475065824365/houses-691586_960_720.jpg?format=1500w"
  },
  {
    name: "Utilities",
    imgSrc: "https://www.cornerstoneondemand.co.uk/web/img/verticals/wind-energy.jpg"
  }
]
const PerformanceBlock = ({name,performance,large})=>{
   return(
     <Fragment>
        <Image style={{height:"220px"}}rounded src={imgArray.find(img=>img.name===name).imgSrc}/>
        <div className={large ? "large-sector-tag":"sector-tag"}>{name}</div>
        <div className={large ? "large-performance-tag":"performance-tag"} style={performance > 0 ? {backgroundColor:"green",borderColor:"green"}:{backgroundColor:"red",borderColor:"red"}}>{parseFloat(performance*100).toFixed(2) +"%"}</div>
     </Fragment>
   )
 }

export default PerformanceBlock

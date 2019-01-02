import React from 'react';
import {Image,Button} from "semantic-ui-react"
import {withRouter} from "react-router-dom"

const AboutPage = (props) => {
  return (
    <div style={{marginLeft:"20%",marginTop:"15px",width:"60%"}}>
      <div style={{marginBottom:"15px"}}>
        <h1 style={{marginBottom:"5px",fontSize:"40px"}}> Welcome To FantasyTrader!</h1>
        <Image src="https://windycitizensports.files.wordpress.com/2012/03/raining-money2.jpg" centered size="large"/>
      </div>
      <p style={{textAlign:"left",fontSize:"22px"}}> It is time to put your finance skills to the test.
          This website is meant for investors of all levels to compete in a fantasy sports time of environment, with only pride at stake.
          Gather friends and compete in public leagues to determine who is the ultimate investor.
          You can find new leagues in the "Explore New Leagues" tab. Enter a portfolio name and you are good to go buy some stocks!
          Sector Performance and Finance News can be found on the homepage, while specific stock information information can be found at the "Search Stocks" tab.
          Enjoy and good luck!
      </p>
      <Button color="black" size="large" onClick={()=>console.log("hi")}>Return to the Homepage</Button>
    </div>
  )
};

export default AboutPage

import React, { Component } from 'react';
import PerformanceBlock from "../components/PerformanceBlock"
import StockAdapter from "../store/adapters/stockAdapter"
import {Loader, Grid} from "semantic-ui-react"
import "../Profile.css"

class NewsContainer extends Component{
  state = {
    sectorPerformance: [],
    indexes: []
  }
  componentDidMount(){
    this.performanceTimer = setInterval(()=>{
      this.fetchSectorPerformance()
      .then(data=>{
        let indexArray = Object.keys(data.index).map(k=>({symbol: k, percentChange:data.index[k].quote.changePercent}))
        this.setState({sectorPerformance:data.sector,indexes:indexArray})
      })
    },3000)
  }
  componentWillUnmount(){
    clearInterval(this.performanceTimer)
  }
  fetchSectorPerformance = () =>{
    return StockAdapter.getSectorPerformance()
  }
 render(){
   if (this.state.sectorPerformance.length>0&&this.state.indexes.length>0){
     return(
       <div style={{width:"80%", marginLeft:"10%"}}>
        <h1 style={{fontWeight:"200",fontSize:"40px", fontFamily:"Alike Angular"}}>Sector Performance</h1>
        <div className="home-grid">
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[0].name} performance={this.state.sectorPerformance[0].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[1].name} performance={this.state.sectorPerformance[1].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[2].name} performance={this.state.sectorPerformance[2].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[3].name} performance={this.state.sectorPerformance[3].performance}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[4].name} performance={this.state.sectorPerformance[4].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[5].name} performance={this.state.sectorPerformance[5].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[6].name} performance={this.state.sectorPerformance[6].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock name={this.state.sectorPerformance[7].name} performance={this.state.sectorPerformance[7].performance}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <PerformanceBlock large={true} name={this.state.sectorPerformance[8].name} performance={this.state.sectorPerformance[8].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock large={true} name={this.state.sectorPerformance[9].name} performance={this.state.sectorPerformance[9].performance}/>
              </Grid.Column>
              <Grid.Column>
                <PerformanceBlock large={true} name={this.state.sectorPerformance[10].name} performance={this.state.sectorPerformance[10].performance}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
       </div>
     )

   }else{
     return(
       <Loader size="large" active>Loading</Loader>
     )
   }
 }
}

export default NewsContainer
// <Label size="medium" attached='top left'>{this.state.sectorPerformance[0].name}</Label>
// <Label size="medium" attached='bottom right'>{this.state.sectorPerformance[0].performance}</Label>

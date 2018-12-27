import React, { Component } from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import {Loader, Table, Header} from "semantic-ui-react"
import "../Profile.css"
class GainersLosers extends Component{
  state = {
    gainers: [],
    losers: []
  }
  componentDidMount(){
    this.gainerLoserTimer = setInterval(()=>{
      this.fetchGainersLosers()
      .then(data=>{
        this.setState({gainers:data.gainers,losers:data.losers})
      })
    },3000)
  }
  componentWillUnmount(){
    clearInterval(this.gainerLoserTimer)
  }
  fetchGainersLosers = ()=>{
    return StockAdapter.getGainersLosers()
  }
  render(){
    if (this.state.gainers.length>0 || this.state.losers.length>0){
      return(
        <div style={{marginLeft:"20%",marginTop:"40px",width:"60%"}}>
          <div className="gainer-table">
            <h1 style={{color:"black"}}>Gainers</h1>
            <Table basic='very' celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Change</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.gainers.map(gainer=>{
                  return(<Table.Row key={gainer.name}>
                          <Table.Cell>
                            <Header as='h4' >
                              <Header.Content>
                                {gainer.symbol}
                                <Header.Subheader>{gainer.name}</Header.Subheader>
                              </Header.Content>
                            </Header>
                         </Table.Cell>
                         <Table.Cell positive>{"+"+gainer.change+"%"}</Table.Cell>
                         <Table.Cell>{gainer.price}</Table.Cell>
                         </Table.Row>)
                })}
              </Table.Body>
            </Table>
          </div>
          <div className="loser-table">
           <h1 style={{color:"black"}}>Losers</h1>
            <Table basic='very' celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Symbol</Table.HeaderCell>
                  <Table.HeaderCell>Change</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.state.losers.map(loser=>{
                  return(<Table.Row key={loser.name}>
                          <Table.Cell>
                            <Header as='h4' >
                              <Header.Content>
                                {loser.symbol}
                                <Header.Subheader>{loser.name}</Header.Subheader>
                              </Header.Content>
                            </Header>
                         </Table.Cell>
                         <Table.Cell negative>{"-"+loser.change+"%"}</Table.Cell>
                         <Table.Cell>{loser.price}</Table.Cell>
                         </Table.Row>)
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
      )
    }else{
      return <Loader active size="large">Loading Gainers and Losers</Loader>
    }
  }
 }

export default GainersLosers

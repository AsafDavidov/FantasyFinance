import React from 'react'
import {Button,Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"

const PortfolioRow= ({history,number,id,name,user,value,change})=>{
  const handleViewPortfolio=()=>{
    history.push(`/portfolios/${id}`)
  }

 return(
     <Table.Row>
        <Table.Cell>{number+1}</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{user}</Table.Cell>
        <Table.Cell>{value}</Table.Cell>
        <Table.Cell>{change}</Table.Cell>
        <Table.Cell> <Button onClick={()=>handleViewPortfolio()}>Show portfolio</Button> </Table.Cell>
    </Table.Row>
  )

 }

export default withRouter(PortfolioRow)


// <div>
// <p>Portfolio Name: {this.props.portfolio.name}</p>
// <p>Portfolio Cash: {this.props.portfolio.current_balance}</p>
// <p>Portfolio Value: {this.state.currentPortfolioValue} </p>
// </div>

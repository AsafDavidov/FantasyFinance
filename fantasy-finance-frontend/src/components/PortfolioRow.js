import React from 'react'
import {Button,Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"

const PortfolioRow= ({name,user,value,change})=>{

  const handleViewPortfolio=()=>{
    this.props.history.push(`/portfolios/${this.props.portfolio.id}`)
  }

 return(
     <Table.Row>
        <Table.Cell>ranking</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{user}</Table.Cell>
        <Table.Cell>{value}</Table.Cell>
        <Table.Cell>{change}</Table.Cell>
    </Table.Row>
  )

 }

export default withRouter(PortfolioRow)


// <div>
// <p>Portfolio Name: {this.props.portfolio.name}</p>
// <p>Portfolio Cash: {this.props.portfolio.current_balance}</p>
// <p>Portfolio Value: {this.state.currentPortfolioValue} </p>
// <Button onClick={this.handleViewPortfolio}>Show portfolio</Button>
// </div>

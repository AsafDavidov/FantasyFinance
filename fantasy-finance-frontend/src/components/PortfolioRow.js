import React from 'react'
import {Button,Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

const PortfolioRow= ({portfolios,history,number,id,name,user,value,change})=>{
  const handleViewPortfolio=()=>{
    history.push(`/portfolios/${id}`)
  }
  const handleUserPortfolio=()=>{
    return !!portfolios.find(portfolio=>portfolio.id===id)
  }
 return(
        <Table.Row warning={handleUserPortfolio()}>
            <Table.Cell>{number+1}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{user}</Table.Cell>
            <Table.Cell>{value}</Table.Cell>
            <Table.Cell>{change}</Table.Cell>
            <Table.Cell> <Button onClick={()=>handleViewPortfolio()}>Show portfolio</Button> </Table.Cell>
        </Table.Row>
  )
 }
 function mapStateToProps({portfolio}) {
   return {
     portfolios: portfolio.portfolios
   }
 }
export default withRouter(connect(mapStateToProps)(PortfolioRow))
// {!!portfolios.find(portfolio=>portfolio.id===id) ? warning : null}

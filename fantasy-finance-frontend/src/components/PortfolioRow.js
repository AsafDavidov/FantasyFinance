import React from 'react'
import {Button,Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

const PortfolioRow= ({expired,portfolios,history,id,name,user,value,change})=>{
  const handleViewPortfolio=()=>{
    history.push(`/portfolios/${id}`)
  }
  const handleUserPortfolio=()=>{
    return !!portfolios.find(portfolio=>portfolio.id===id)
  }
 return(
        <Table.Row warning={handleUserPortfolio()}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{user}</Table.Cell>
            <Table.Cell>{value}</Table.Cell>
            <Table.Cell>{change}</Table.Cell>
            {expired ? null : <Table.Cell> <Button onClick={()=>handleViewPortfolio()}>Show portfolio</Button> </Table.Cell>}
        </Table.Row>
  )
 }
 function mapStateToProps({portfolio}) {
   return {
     portfolios: portfolio.portfolios
   }
 }
export default withRouter(connect(mapStateToProps)(PortfolioRow))

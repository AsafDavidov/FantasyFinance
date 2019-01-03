import React from 'react'
import {Button,Table} from "semantic-ui-react"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

const PortfolioRow= ({startBalance,expired,portfolios,history,id,name,user,value,change})=>{
  console.log(startBalance);
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
            <Table.Cell>{parseFloat(value.toFixed(2)).toLocaleString()}</Table.Cell>
            <Table.Cell>{expired ? parseFloat((((value-startBalance)/startBalance)*100).toFixed(2)).toLocaleString():change}</Table.Cell>
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

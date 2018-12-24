import React from 'react';
import {connect} from 'react-redux'
import {Table, Button} from "semantic-ui-react"
const Holding = ({value,ticker,priceBought,numShares,name,id,changes}) => {
  
  return (
    <Table.Row>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{ticker}</Table.Cell>
        <Table.Cell>{numShares}</Table.Cell>
        <Table.Cell>{priceBought}</Table.Cell>
        <Table.Cell>{changes}</Table.Cell>
        <Table.Cell>{value}</Table.Cell>
        <Table.Cell><Button>Sell holding</Button></Table.Cell>
    </Table.Row>
  )
};

export default Holding

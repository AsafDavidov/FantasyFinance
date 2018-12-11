import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    stocks:[],
    intervalID:null
  }
  componentDidMount(){
    // this.fetchStocks()
    // .then(data=>console.log(data))
    let i = setInterval(()=>{
      this.fetchStocks()
      .then(data=>this.setState({stocks:data})
      )
    },1000)
    this.setState({intervalID:i})
  }
  fetchStocks = ()=>{
    return fetch("http://localhost:4000/api/v1/stocks")
    .then(r=>r.json())
  }
  handleStop = ()=>{
    clearInterval(this.state.intervalID)
    this.setState({intervalID:null})
  }
  handleStocks = ()=>{
    if (this.state.stocks.length>0){
      return this.state.stocks.map(s=>{
        return <p key={s.symbol}> Stock:{s.symbol} Price:{s.price}</p>
      })
    }else{
      return null
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.handleStocks()}
        </div>
        <button onClick={this.handleStop}>stop</button>
      </div>
    );
  }
}

export default App;

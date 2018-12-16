import React, {Component} from 'react';
import StockAdapter from "../store/adapters/stockAdapter"
import {connect} from "react-redux"
import { scaleTime } from "d3-scale";
import { curveMonotoneX } from "d3-shape";
import { ChartCanvas, Chart } from "react-stockcharts";
import { AreaSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { createVerticalLinearGradient, hexToRGBA } from "react-stockcharts/lib/utils";
import { timeParse,timeFormat } from "d3-time-format";
import { format } from "d3-format";
import {CrossHairCursor,MouseCoordinateX,MouseCoordinateY} from "react-stockcharts/lib/coordinates";

const canvasGradient = createVerticalLinearGradient([
	{ stop: 0, color: hexToRGBA("#b5d0ff", 0.2) },
	{ stop: 0.7, color: hexToRGBA("#6fa4fc", 0.4) },
	{ stop: 1, color: hexToRGBA("#4286f4", 0.8) },
]);
let parseDate = timeParse("%Y-%m-%d");

class StockChart extends Component{
  state = {
    data:null
  }
  componentDidMount(){
    this.fetchChartData()
    .then(data=>{
      let newD = data.map(obj=>{
        let dateparsed = parseDate(obj.date).getTime()
        return {date:new Date(dateparsed),close:obj.close}
      })
      this.setState({data:newD})
    })
  }
  fetchChartData = ()=>{
    return StockAdapter.getChartData(this.props.token,this.props.stock)
  }
  loading = ()=>{
    if (this.state.data){
      return(<ChartCanvas ratio={1} width={800} height={400}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        seriesName={this.props.stock}
        data={this.state.data}
        type="svg"
        xAccessor={d =>{
          return d.date
        }}
        xScale={scaleTime()}
      >
        <Chart id={0} yExtents={d => d.close}>
          <defs>
            <linearGradient id="MyGradient" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#b5d0ff" stopOpacity={0.2} />
              <stop offset="70%" stopColor="#6fa4fc" stopOpacity={0.4} />
              <stop offset="100%"  stopColor="#4286f4" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <XAxis axisAt="bottom" orient="bottom" ticks={6}/>
          <YAxis axisAt="left" orient="left" />
          <AreaSeries
            yAccessor={d => d.close}
            fill="url(#MyGradient)"
            strokeWidth={2}
            interpolation={curveMonotoneX}
            canvasGradient={canvasGradient}
          />
          <MouseCoordinateX
						at="bottom"
						orient="bottom"
						displayFormat={timeFormat("%Y-%m-%d")}
					/>
					<MouseCoordinateY
						at="left"
						orient="left"
						displayFormat={format(".4s")}
					/>
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>)
    }else{
      return <h1>Loading</h1>
    }
  }
  render(){
    console.log(this.state.data);
    return (
      this.loading()
    )
  }
};
function mapStateToProps(state) {
  return {
    token: state.user.jwt
  }
}
export default connect(mapStateToProps)(StockChart)

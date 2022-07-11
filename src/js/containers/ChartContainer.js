import React, { useState } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const ChartContainer = (props) => {  
   
const formatXAxis = (timeStr) => {
  const d = new Date(timeStr)
  const month = d.toLocaleString('default', { month: 'long' });
  return month
  if ( chartDate.includes(month) ){
    return month
  } else {
    setChartDate(chartDate => [...chartDate, month])
    return month
  }
}

    return (
      <div id="chart">
        <p id='chart-header'>Retail Sales</p>
        <ResponsiveContainer width='96%' height='100%' aspect={3/1}>
        <LineChart data={props.data.sales}>
          <XAxis dataKey="weekEnding" tickFormatter={formatXAxis} />
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ChartContainer);

import React from 'react'
import './BarChart.scss';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

type BarProps = {
  title:string,
  color:string,
  datakey:string | number,
  chartData :object[]
}
const BarChartGraph = ({title,color, datakey,chartData}:BarProps) => {
  return (
    <div className='barChartGraph'>
     <h4>{title}</h4>
    <div className='barchart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
        <Tooltip
            contentStyle ={{background:"white", border:"none"}}
            labelStyle = {{display: "none"}}
            position = {{ y: 100 }}
            cursor = {{fill :"none"}}
            />
          <Bar dataKey={datakey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartGraph
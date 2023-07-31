import React from 'react'
import './BarChart.scss';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
type BarProps = {
  title:string,
  color:string,
  datakey:string | number,
  chartData :object[]
}
const BarChartGraph = ({title,color, datakey,chartData}:BarProps) => {
  return (
    <div className='barChartGraph'>
     <h3>{title}</h3>
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
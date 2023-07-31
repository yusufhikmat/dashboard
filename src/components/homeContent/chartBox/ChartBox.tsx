import React from 'react'
import './ChartBox.scss';
import { Link } from 'react-router-dom';
import { LineChart, Line,Tooltip, ResponsiveContainer } from 'recharts';

type ChartProps ={
  title:string,
  color:string,
  icon:string,
  datakey:string,
  number:number | string,
  percentage:number,
  dataChart:object[]
}
const ChartBox = ({title,color,icon,datakey,number,percentage,dataChart}:ChartProps) => {
  return (
    <div className='chartbox'>
      <div className='chartbox-info'>
        <div className='title'>
        <span className='title-icon'>{icon}</span>
        <span  className='title-name'>{title}</span>
        </div>
        <h1 className='number'>{number}</h1>
        <Link to="/" style={{color:color}}>View all</Link>
      </div>
      <div className='chartbox-chart'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataChart}>\
            <Tooltip
            contentStyle ={{background:"transparent", border:"none"}}
            labelStyle = {{display: "none"}}
            position = {{x:10, y: 70 }}
            />
            <Line type="monotone" dataKey={datakey} stroke={color} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
      </div>
        <div className='chart-text'>
          <h3 className='chart-percentage' style={{color:percentage < 0 ? "red" : "green"}}>{percentage}%</h3>
          <p className='chart-month'>month</p>
        </div>
      </div>
    </div>
  )
}

export default ChartBox
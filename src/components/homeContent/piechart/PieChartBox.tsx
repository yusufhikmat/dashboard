import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './PieChartBox.scss';

const data = [
  { name: 'Group A', value: 400, color: '#0088FE' },
  { name: 'Group B', value: 300, color:"lime" },
  { name: 'Group C', value: 300, color:'#FFBB28'},
  { name: 'Group D', value: 200, color:"green" },
];
const PieChartBox = () => {
  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className='pieChartGraph'>
        <h2>pie</h2>
        <div className="pieChart">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
          contentStyle ={{background:"white", border:"none"}}
          labelStyle = {{display: "none"}}
          position = {{ y: 100 }}/>
          
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((data) => (
              <Cell key={data.name} fill={data.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
        <div className='data'>{data.map((item)=>{
          return (
            <div key={item.name}>
                <p style={{color:item.color}}>{item.name}</p>
              <p>{item.value}</p>
           </div>
          )
        }
        )}</div>
    </div>
  )
}

export default PieChartBox
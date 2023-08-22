import React from 'react'
import './Home.scss';
import Section1 from '../../components/homeContent/section1/Section1';
import { barChart,barChart2 } from '../../components/homeContent/data/ChartBoxUser';
import BarChartGraph from '../../components/homeContent/barChart/BarChartGraph';
import PieChartBox from '../../components/homeContent/piechart/PieChartBox';
import AreaChartBox from '../../components/homeContent/areaChart/AreaChartBox';
import CustomCard from '../../components/homeContent/chartBox/CustomCard';
import { box1, box2, box3, box4 } from '../../components/homeContent/data/CardDetails';

const Home = () => {
  return (
    <div className='home'>
      <h3>Dashboard</h3>
      <div className='home-content'>
        <div className='box box1'><CustomCard {...box1}/></div>
        <div className='box box2'><CustomCard {...box2}/></div>
        <div className='box box3'><CustomCard {...box3}/></div>
        <div className='box box4'><CustomCard {...box4}/></div>
        <div className='box box5'><AreaChartBox /></div>
        <div className='box box6'><Section1 /></div>
        <div className='box box7'><PieChartBox /></div>
        <div className='box'><BarChartGraph {...barChart}/></div>
        <div className='box'><BarChartGraph {...barChart2}/></div>
        </div>
    </div>
    
  )
}

export default Home
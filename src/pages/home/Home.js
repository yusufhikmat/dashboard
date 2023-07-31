import React from 'react'
import './Home.scss';
import Section1 from '../../components/homeContent/section1/Section1';
import ChartBox from '../../components/homeContent/chartBox/ChartBox';
import { barChart,barChart2, chartboxUser1 } from '../../components/homeContent/data/ChartBoxUser';
import { chartboxUser2 } from '../../components/homeContent/data/ChartBoxUser';
import { chartboxUser3 } from '../../components/homeContent/data/ChartBoxUser';
import { chartboxUser4 } from '../../components/homeContent/data/ChartBoxUser';
import BarChartGraph from '../../components/homeContent/barChart/BarChartGraph';
import PieChartBox from '../../components/homeContent/piechart/PieChartBox';
import AreaChartBox from '../../components/homeContent/areaChart/AreaChartBox';

const Home = () => {
  return (
    <div className='home'>
        <div className='box box1'><Section1 /></div>
        <div className='box box2'><ChartBox {...chartboxUser1}/></div>
        <div className='box box3'><ChartBox {...chartboxUser2}/></div>
        <div className='box box4'><PieChartBox /></div>
        <div className='box box5'><ChartBox {...chartboxUser4}/></div>
        <div className='box box6'><ChartBox {...chartboxUser3}/></div>
        <div className='box box7'><AreaChartBox /></div>
        <div className='box box8'><BarChartGraph {...barChart}/></div>
        <div className='box box9'><BarChartGraph {...barChart2}/></div>
    </div>
  )
}

export default Home
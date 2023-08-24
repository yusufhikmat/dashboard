import { Link } from "react-router-dom"
import './ChartBox.scss';

type BoxProps ={
    title:string,
    color:string,
    icon:React.ReactNode, 
    datakey:string,
    number:number | string,
    percentage:any,
    viewAllRoute:string,
  }

  const CustomCard = ({title,viewAllRoute,color,icon,datakey,number,percentage}:BoxProps) => {
    
    return (
      <div className='custom-card'>
        <div className='custom-card-info'>
          <p  className='title-name'>{title}</p>
          <h1 className='number'>{number}</h1>
          <Link to={viewAllRoute} style={{color:color}}>View all</Link>
        </div>
        <div className="custom-card-right">
        <p className='custom-card-icon'>{icon}</p>
        <h3 className='chart-percentage' style={{color:percentage < 0 ? "red" : "green"}}>{percentage}%</h3>
        </div>
       
        {/* <div className='chart-text'>
            
            <p className='chart-month'>month</p>
          </div> */}
      </div>
    )
  }
  
  export default CustomCard
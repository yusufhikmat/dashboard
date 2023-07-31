import React from 'react'
import data from '../data/UserDetails';
import './Section1.scss';

const Section1 = () => {
  return (
    <div className='section1'>
        <h3>Users</h3>
        {data.map((item)=>{
            return <li key={item.id} className='section1-list'>
                <div className='section1-details'>
                    <img src={item.img} alt="user" className='user'/>
                    <div>
                    <p className='section1-name'>{item.name}</p>
                    <p className='section1-email'>{item.email}</p>
                    </div>
                </div>
                <div className='section1-amount'>{item.amount}</div>
            </li>
        })}
    </div>
  )
}

export default Section1
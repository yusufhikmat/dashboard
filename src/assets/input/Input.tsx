import React from 'react'
import './Input.scss'

interface InputProps {
    id:string,
    name:string,
    label:string,
    required:boolean,
    type:string,
    value:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    

}

const Input = ({id,name,required,type,value,onChange,label}:InputProps) => {
  return (
    <div className='userInput'>
        <label htmlFor={id}>{label}</label>
        <input 
        id={id}
        name={name}
        required={required}
        type={type}
        value={value}
        onChange={onChange}

        />
    </div>
  )
}

export default Input
import React from 'react'
type ButtonProps = {
  children:React.ReactNode,
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?:()=>void,
  className :string,
  color:'red' | 'green'
}
export const Button = ({type,onClick,className,color,children}:ButtonProps) => {
  const buttonClassName = color === 'green' ? 'btn-green' : 'btn-red';
  return (
    <button 
    type = {type}
    className={`${className} ${buttonClassName}`}
    onClick={onClick}
    >{children}</button>
  )
}



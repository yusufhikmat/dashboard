import React from 'react'

type TextAreaProps = {
    id:string,
    name:string,
    label:string,
    required:boolean,
    type:string,
    value:string,
    onChange:React.ChangeEventHandler<HTMLTextAreaElement>,
    
}

const TextArea = ({id,name,required,type,value,onChange,label}:TextAreaProps) => {
  return (
    <textarea
    id={id}
    name={name}
    required={required}
    value={value}
    onChange={onChange}
    ></textarea>
  )
}

export default TextArea
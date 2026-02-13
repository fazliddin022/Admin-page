import type { ChangeEvent, FC } from "react"

interface InputType{
    name:string,
    type:"password" | "text" | "email",
    placeholder:string,
    extraClass?:string  
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input:FC<InputType> = ({name, type, placeholder,value, onChange, extraClass}) => {
  return (
    <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} className={`${extraClass} w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500`}/>
  )
}

export default Input
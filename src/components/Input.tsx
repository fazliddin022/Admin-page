import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react"

interface InputType{
    name:string,
    type:"password" | "text" | "email",
    placeholder:string,
    extraClass?:string  
    setValue?:Dispatch<SetStateAction<string>>
    
}

const Input:FC<InputType> = ({name, type, placeholder, extraClass, setValue}) => {

  function handleSearch(evt:ChangeEvent<HTMLInputElement>){
    if(setValue) setValue(evt.target.value.toLowerCase())
  }
  return (
    <input onChange={handleSearch} autoComplete="off" name={name} type={type} placeholder={placeholder} className={`${extraClass} w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500`}/>
  )
}

export default Input
import type { FC, MouseEventHandler, ReactNode } from "react"

interface ButtonType{
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children:ReactNode,
    extraClass?:string,
    type: "submit" | "button"
}


const Button:FC<ButtonType> = ({onClick, children, extraClass, type}) => {
  return (
    <button onClick={onClick} type={type} className={`${extraClass} w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition`}>{children}</button>
  )
}

export default Button
import type { FC } from "react";

interface AuthFormItemType{
    label:string,
    type:"text" | "password" | "email",
    placeholder: string,
    name: string,
    extraClass?: string
}

const AuthFormItem:FC<AuthFormItemType> = ({label, type, placeholder, name, extraClass}) => {
  return (
    <label className="text-sm text-gray-600">
      <span className="inline-block">{label}</span>
      <input name={name} type={type} placeholder={placeholder} className={`${extraClass} w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500`}/>
    </label>
  );
};

export default AuthFormItem;

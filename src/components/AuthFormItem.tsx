import type { FC } from "react";

interface AuthFormItemType{
    label:string,
    type:"text" | "password" | "email",
    placeholder: string,
    name: string,
    extraClass?: string
}

const AuthFormItem:FC<AuthFormItemType> = ({label}) => {
  return (
    <label className="text-sm text-gray-600">
      <span className="inline-block">{label}</span>
    </label>
  );
};

export default AuthFormItem;

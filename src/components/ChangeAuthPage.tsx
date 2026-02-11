import type { FC } from "react";
import { Link } from "react-router-dom";
import PATH from "./Path";

interface ChangeAuthPagType {
    title: "Already have an account?" | "Create Account"
}

const ChangeAuthPage:FC<ChangeAuthPagType> = ({title}) => {
  return (
    <p className="mt-5 space-x-1  text-center text-sm text-gray-600">
      <span>{title}</span>
      <Link to={title == "Already have an account?" ?  PATH.home : PATH.register} className="font-medium hover:scale-[1.1] duration-300 inline-block text-indigo-600 hover:text-indigo-500">{title == "Already have an account?" ?  "Login" : "Sign Up"}</Link>
    </p>
  );
};

export default ChangeAuthPage;

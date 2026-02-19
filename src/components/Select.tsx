import { useEffect, useState, type ChangeEvent, type Dispatch, type FC, type SetStateAction } from "react";
import type { CategoryType } from "../@types";
import { instance } from "../hooks";

interface SelectType {

  extraClass?: string;
  setValue?:Dispatch<SetStateAction<string | number>>;
  value:number | string
}

const Select: FC<SelectType> = ({ extraClass, setValue, value}) => {
  const [list, setList] = useState<CategoryType[]>([])
  

  function handleChange(e:ChangeEvent<HTMLSelectElement>){
    if(setValue) setValue(e.target.value)
  }

    useEffect(() => {
    instance.get("/categories").then(res => setList(res.data))
  }, [])
  
  return (
    <select value={value} onChange={handleChange}
      className={`${extraClass} w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500`}
    >
      {list.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

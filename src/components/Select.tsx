import type { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import type { CategoryType } from "../@types";

interface SelectType {
  list: Array<CategoryType>;
  extraClass?: string;
  setValue?:Dispatch<SetStateAction<string | number>>;
}

const Select: FC<SelectType> = ({ extraClass, list, setValue}) => {
  function handleChange(e:ChangeEvent<HTMLSelectElement>){
    if(setValue) setValue(e.target.value)
  }
  return (
    <select onChange={handleChange}
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

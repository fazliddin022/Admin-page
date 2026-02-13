import type { ChangeEvent, FC } from "react";
import type { CategoryType } from "../@types";

interface SelectType {
  list: Array<CategoryType>;
  extraClass?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectType> = ({ extraClass, list, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${extraClass} w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-0 focus:border-indigo-500`}
    >
      <option value="all">All Categories</option>
      {list.map((item) => (
        <option key={item.id} value={item.slug}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;

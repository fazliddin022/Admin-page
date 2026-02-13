import type { FC } from "react"
import type ProductsCard from "./ProductCard"
import type { ProductsType } from "../@types"

interface ProductsCard {
    item:ProductsType
}

const ProductCard:FC<ProductsCard> = ({item}) => {
  return (
    <>
    <li className="w-65 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <div className="h-45 overflow-hidden rounded-lg bg-slate-100">
        <img src={item.images?.[0]} alt={item.title} className="w-full h-full object-cover"/>
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-indigo-600 font-bold text-lg">
            ${item.price}
          </span>

          <span className="text-xs bg-slate-200 px-2 py-1 rounded">
            {item.category.name}
          </span>
        </div>
      </div>
    </li>
    </>
  )
}

export default ProductCard
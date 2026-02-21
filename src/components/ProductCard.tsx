import type { FC } from "react"
import type ProductsCard from "./ProductCard"
import type { ProductsType } from "../@types"
import {EllipsisVertical, ThumbsUp} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { collectLikeProduct } from "../store/LikeSlice"

interface ProductsCard {
    item:ProductsType
}

const ProductCard:FC<ProductsCard> = ({item}) => { 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errorImg = "https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-svg-download-png-2809510.png"
  return (
    <>
    <li className="relative w-65 bg-white rounded-xl shadow hover:shadow-lg transition p-3">
       <button onClick={() => navigate(`${item.id}`)} className="cursor-pointer absolute top-4 right-3 text-white hover:text-black">
        <EllipsisVertical size={22} />
      </button>
      <button onClick={() =>  dispatch(collectLikeProduct(item))} className="absolute top-11 right-3 text-white hover:text-black">
        <ThumbsUp size={22}/>
      </button>
      <div className="h-45 overflow-hidden rounded-lg bg-slate-100">
        <img onError={(evt) => (evt.target as HTMLImageElement).src = errorImg} src={item.images[0]} alt={item.title} className="w-full h-full object-cover"/>
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

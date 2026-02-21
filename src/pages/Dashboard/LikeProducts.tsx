import { useSelector } from "react-redux"
import type { ProductsType } from "../../@types"
import ProductCard from "../../components/ProductCard"

const LikeProducts = () => {
    const products = useSelector((state:{likeList:ProductsType[]}) => state.likeList)
  return (
    <ul className="flex justify-between flex-wrap gap-5">{products.map(item => <ProductCard key={item.id} item={item}/>)}</ul>
  )
}

export default LikeProducts
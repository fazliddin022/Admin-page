import { useEffect, useState } from "react"
import {Button, Input, PATH, ProductsCard, Select} from "../../../components"
import type {ProductsType } from "../../../@types"
import { debounce, instance } from "../../../hooks"
import NotFound from "../../NotFound"
import { useNavigate } from "react-router-dom"

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState<ProductsType[]>([])
  const [search, setSearch] = useState<string>("")
  const [categoryId, setCategoryId] = useState<number | string>("")
  const title = debounce(search, 800)
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    instance.get(`/products`,{
      params:{title, categoryId }
    }).then(res => setProducts(res.data))
  }, [title, categoryId])

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7.5">
          <Input value={search} setValue={setSearch} extraClass="!w-[300px] !bg-slate-200" name="search" placeholder="Search..." type="text"/>
          <Select value={categoryId} setValue={setCategoryId} extraClass="!w-[300px] !bg-slate-200"/>
        </div>
        <Button onClick={() => navigate(PATH.productsCreate)} extraClass="!w-[100px]" type="button">Create</Button>
      </div>
      <ul className="flex flex-wrap gap-5 mt-5">
        {products.length ? products.map(item =><ProductsCard key={item.id} item={item}/>) : <NotFound/>}
      </ul>
    </div>
  )
} 

export default Products
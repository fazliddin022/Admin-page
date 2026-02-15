import { useEffect, useState } from "react"
import {Button, Input, Loading, PATH, ProductsCard, Select} from "../../../components"
import type { CategoryType, ProductsType } from "../../../@types"
import { debounce, instance } from "../../../hooks"
import NotFound from "../../NotFound"
import { useNavigate } from "react-router-dom"

const Products = () => {
  const navigate = useNavigate()
  const [categoryList, setCategorylist] = useState<CategoryType[]>([])
  const [products, setProducts] = useState<ProductsType[]>([])
  const [search, setSearch] = useState<string>("")
  const [categoryId, setCategoryId] = useState<number | string>("")
  const title = debounce(search, 800)
  // const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    instance.get("/categories").then(res => setCategorylist(res.data))
  }, [])

  useEffect(() => {
    instance.get(`/products`,{
      params:{title, categoryId }
    }).then(res => setProducts(res.data))
  }, [title, categoryId])

  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-7.5">
          <Input setValue={setSearch} extraClass="!w-[300px] !bg-slate-200" name="search" placeholder="Search..." type="text"/>
          <Select setValue={setCategoryId} list={categoryList} extraClass="!w-[300px] !bg-slate-200"/>
        </div>
        <Button onClick={() => navigate(PATH.productsCreate)} extraClass="!w-[100px]" type="button">Create</Button>
      </div>
      {<ul className="flex flex-wrap gap-5 mt-5">
        {products.length ? products.map(item =><ProductsCard key={item.id} item={item}/>) : <NotFound/>}
      </ul>}
    </div>
  )
} 

export default Products
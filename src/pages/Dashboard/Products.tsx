import { useContext, useEffect, useState } from "react"
import {Input, ProductsCard, Select} from "../../components"
import type { CategoryType, ProductsType } from "../../@types"
import { instance } from "../../hooks"
import { Context } from "../../context/Context"

const Products = () => {
  const {token} = useContext(Context)
  const [categoryList, setCategorylist] = useState<CategoryType[]>([])
  const [products, setProducts] = useState<ProductsType[]>([])
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  
  useEffect(() => {
    instance.get("/categories", {headers:{"Authorization":`Bearer ${token}`}
    }).then(res => setCategorylist(res.data))
  }, [token])

  useEffect(() => {
    instance.get("/products").then(res => setProducts(res.data))
  }, [])

   const filteredProducts = products.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchCategory = selectedCategory === "all" ? true : item.category.slug === selectedCategory
    return matchSearch && matchCategory
  })

  return (
    <div className="p-5">
      <div className="flex items-center gap-7.5">
        <Input value={search} onChange={(e) => setSearch(e.target.value)} extraClass="!w-[300px] !bg-slate-200" name="search" placeholder="Search..." type="text"/>
        <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} list={categoryList} extraClass="!w-[300px] !bg-slate-200"/>
      </div>
      <ul className="flex flex-wrap">
        {filteredProducts.map(item =><ProductsCard key={item.id} item={item}/>)}
      </ul>
    </div>
  )
} 

export default Products
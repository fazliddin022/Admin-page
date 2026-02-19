import { useEffect, useState, type SubmitEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { instance } from "../../../hooks"
import { Button, Input, Select } from "../../../components"
import { CrudFn } from "../../../services"

const ProductCrud = () => {
  const {id} = useParams()
  const navigate = useNavigate()

  const [title , setTitle] = useState<string>("")
  const [price , setPrice] = useState<string>("")
  const [description , setDescription] = useState<string>("")
  const [categoryId , setCategoryId] = useState<string | number>("")
  const [images , setImages] = useState<string>("")



  function handleSubmit(evt:SubmitEvent<HTMLFormElement>) {
    evt.preventDefault()
    const data = {title ,price,description,categoryId,images:[images]}
    CrudFn(`/products`, data, navigate, id)
  }

  useEffect(() => {
    if (id) {
      instance.get(`products/${id}`).then(res => {
        setTitle(res.data.title)
        setPrice(res.data.price)
        setCategoryId(res.data.category.id)
        setDescription(res.data.description)
        setImages(res.data.images[0])
      })
    }
  },[])

    return (
        <div className="min-h-screen bg-slate-900 text-white p-6">
          <form  onSubmit={handleSubmit} autoComplete="off">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-semibold">{id ? "O'zgartirish" : "Yangi Maxsulot"}</h1>
              <Button extraClass="!w-25 flex items-center justify-center !h-[44px]" type="submit">
                Save
              </Button>
            </div>
            <div className=" bg-white/5 w-150 mx-auto p-5 rounded-2xl ring-1 ring-white/10 flex flex-col gap-5">
            <label className="text-xs text-slate-300" >
                Title
                <Input value={title} setValue={setTitle} extraClass="!bg-slate-200 !text-black" name="title" type="text" placeholder="New Product"/>
            </label>
            
            <div className="grid sm:grid-cols-2 gap-4">
                <label className="text-xs text-slate-300" >
                    Price
                    <Input value={price} setValue={setPrice} extraClass="!bg-slate-200 !text-black" name="price" type="text" placeholder="Price"/>
                </label>
                <label className="text-xs text-slate-300" >
                    Category
                    <Select value={categoryId} setValue={setCategoryId} extraClass="!bg-slate-200 !text-black"/>
                </label>
              </div>
                <label className="text-xs text-slate-300" >
                    Description
                    <Input value={description} setValue={setDescription} extraClass="!bg-slate-200 !text-black" name="description" type="text" placeholder="A description"/>
                </label>
                <label className="text-xs text-slate-300" >
                    Images URL
                    <Input value={images} setValue={setImages} extraClass="!bg-slate-200 !text-black" name="images" type="text" placeholder="https.//placeholder.co/600x400"/>
                </label>
            </div>
          </form>
        </div>


    )
  }
  
  export default ProductCrud
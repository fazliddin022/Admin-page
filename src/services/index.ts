import toast from "react-hot-toast"
import { instance } from "../hooks"
import type { Dispatch, SetStateAction, SubmitEvent } from "react"
import { PATH } from "../components"
import type { NavigateFunction } from "react-router-dom"


export const LoginFn = (setLoading:Dispatch<SetStateAction<boolean>>, evt:SubmitEvent<HTMLFormElement>, setToken:Dispatch<SetStateAction<string>>) => {
    evt.preventDefault()
    setLoading(true)
    const data = {
      email:evt.target.email.value,
      password:evt.target.password.value
    }
    instance.post("/auth/login", data).then(res => {
      toast.success("Succesfully signed")
      setTimeout(() => {
        setToken(res.data.access_token)
      }, 1500)
    }).catch(() => toast.error("User Not Found")).finally(() => setLoading(false))    
}

export const RegisterFn = (evt:SubmitEvent<HTMLFormElement>, setLoading:Dispatch<SetStateAction<boolean>>, navigate:NavigateFunction) => {
  setLoading(true)
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      password: evt.target.password.value,
      name: `${evt.target.firstname.value} ${evt.target.lastname.value}`,
      role: "admin",
      avatar: "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0="
    }
    instance.post("users/", data).then(res => {
      toast.success(`Succesfully ${res.data.name} addedd`)
      setTimeout(() => {
        navigate(PATH.home)
      }, 1500)
    }).catch(() => toast.error("Error")).finally(() => setLoading(false))
}
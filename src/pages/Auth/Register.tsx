import { useState, type SubmitEvent } from "react";
import { AuthFormItem, Button, ChangeAuthPage, PATH } from "../../components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoadingWhite } from "../../assets/images";

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  function handleRegisterSubmit(evt: SubmitEvent<HTMLFormElement>) {
    setLoading(true)
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      password: evt.target.password.value,
      name: `${evt.target.firstname.value} ${evt.target.lastname.value}`,
      role: "admin",
      avatar: "https://media.istockphoto.com/id/1465504312/vector/young-smiling-man-avatar-man-with-brown-beard-mustache-and-hair-wearing-yellow-sweater-or.jpg?s=612x612&w=0&k=20&c=9AyNmOwjadmLC1PKpANKEXj56e1KxHj9h9hGknd-Rb0="
    }
    axios.post("https://api.escuelajs.co/api/v1/users/", data).then(res => {
      toast.success(`Succesfully ${res.data.name} addedd`)
      setTimeout(() => {
        navigate(PATH.home)
      }, 1500)
    }).catch(() => toast.error("Error")).finally(() => setLoading(false))
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[380px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>
        <form
          onSubmit={handleRegisterSubmit}
          autoComplete="off"
          className="space-y-4"
        >
          <div>
            <AuthFormItem
              label="FirstName"
              name="firstname"
              placeholder="Enter Your Firstname"
              type="text"
            />
          </div>
          <div>
            <AuthFormItem
              label="LastName"
              name="lastname"
              placeholder="Enter Your Lastname"
              type="text"
            />
          </div>
          <div>
            <AuthFormItem
              label="Email"
              name="email"
              placeholder="Enter Your Email"
              type="email"
            />
          </div>
          <div>
            <AuthFormItem
              label="Password"
              name="password"
              placeholder="Enter Your Password"
              type="password"
            />
          </div>
          <Button extraClass="!h-[40px] !mt-3 !flex !items-center justify-center" type="submit">
            {loading ? <img className="scale-[1.2]" src={LoadingWhite} alt="Loading"  width={30} height={30}/> : "Register"}
          </Button>
        </form>
        <ChangeAuthPage title="Already have an account?" />
      </div>
    </div>
  );
};

export default Register;

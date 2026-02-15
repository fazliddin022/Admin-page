import { useState, type SubmitEvent } from "react";
import { AuthFormItem, Button, ChangeAuthPage} from "../../components";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LoadingWhite } from "../../assets/images";
import { RegisterFn } from "../../services";

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  const handleRegisterSubmit = (evt: SubmitEvent<HTMLFormElement>) => RegisterFn(evt, setLoading, navigate)
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-95">
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

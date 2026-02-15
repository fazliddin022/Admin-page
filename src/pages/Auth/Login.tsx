import { useContext, useState, type SubmitEvent } from "react";
import { AuthFormItem, Button, ChangeAuthPage} from "../../components";
import { Toaster } from "react-hot-toast";
import { Context } from "../../context/Context";
import { LoadingWhite } from "../../assets/images";
import { LoginFn } from "../../services";


const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {setToken} = useContext(Context)

  const handleLoginSubmit = (evt:SubmitEvent<HTMLFormElement>) => LoginFn(setLoading, evt, setToken)
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-500 to-purple-600">
      <Toaster position="top-center" reverseOrder={false}/>
      <div className="bg-white p-8 rounded-2xl shadow-xl w-87.5">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome back
        </h2>
        <form onSubmit={handleLoginSubmit} autoComplete="off" className="space-y-4">
          <div>
            <AuthFormItem label="Email" name="email" placeholder="Enter Your Email" type="email"/>
          </div>
          <div>
            <AuthFormItem label="Password" name="password" placeholder="Enter Your Password" type="password"/>
          </div>
          <Button extraClass="!h-[40px] !mt-3 !flex !items-center justify-center" type="submit">
            {loading ? <img className="scale-[1.2]" src={LoadingWhite} alt="Loading"  width={30} height={30}/> : "Sign In"}
          </Button>
        </form>
        <ChangeAuthPage title="Create Account"/>
      </div>

      
    </div>
  );
};

export default Login;

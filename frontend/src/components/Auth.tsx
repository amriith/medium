import { ChangeEvent } from "react";
import { Link } from "react-router-dom"
import { SignupInput } from "@amriith/medium-common";
import { useState } from "react";

export const Auth = ({type} : {type: "Signup" | "Signin" }) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        email : "",
        password:"",
        name: ""
    })
    return (<div className=" h-screen flex justify-center flex-col">
    <div className="flex justify-center">
      <div>
        <div className="px-10">
            <div className="text-3xl font-bold ">
               Create an Account 
            </div> 
           <div className="text-slate-500">
            {type=== "Signup" ? "Already have an account? " : "New to Medium?"}
            <Link className="pl-2  underline " to={type ==="Signup" ? "/signin"  : "/signup"}  > {type === "Signup" ? "Login" : "Register"}</Link>
            </div> 
        </div>
        <div  className="pt-5"> {type === "Signup" ? <LabelledInput label="Username" placeholder="Enter your username" onChange={(e) => setPostInputs({
                ...postInputs,
                name: e.target.value
            })} />  : null}

            <LabelledInput label="Email" placeholder="Enter your emaii" onChange={(e)=> setPostInputs({
                ...postInputs,
                email: e.target.value
            })} />

            <LabelledInput label="Password" placeholder="Enter your password" type="password" onChange={(e)=> setPostInputs({
                ...postInputs,
                password: e.target.value
            })} />
            
            <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-8 px-5 py-2.5 
            mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "Signup" ? "Sign up" : "Sign in"}</button>
        </div>
        </div>      
    </div>
    </div>)
}

interface LabelledInputType{
    label: string;
    placeholder : string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({label, placeholder,onChange, type}: LabelledInputType) {
    return <div>
    <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
    <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
</div>
}
import React from "react";
const Login = () => {
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("Hello guyss ,Form Submitted")
    }
    return (  
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded border-emerald-600 p-20'>
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className="flex flex-col items-center justify-center">
                    <input required className='outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-gray-400'type="email" placeholder="Enter your email" />
                    <input required className='outline-none bg-transparent border-2 border-emerald-600 py-4 px-5 text-xl rounded-full mt-3 placeholder:text-gray-400'type="password" placeholder="Enter your password" />
                    <button className=' mt-7 text-white border-none outline-none  border-2 bg-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;
import React, { useState } from 'react'
import Logo from '../../../assets/images/logo.png'
import { div, span } from 'motion/react-client'
import ForgotPaasword from './ForgotPaasword.js';

function Login() {


    // user / admin toggler condition-------------
    const [toggle, setToggle] = useState("user");

    // errr msg -----
    const [error, setError] = useState("");

    // form data-----------
    const [email, SetEmail] = useState("");
    const [password, setPassword] = useState("");

    //    email validation -------------
const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
};



    //  password show and hide toggler condotion 
    const [show, setShow] = useState(false);





    // forgot pswd popup -------------
            const [forgot, setForgot] = useState(false);

            const [successMsg, setSuccessMsg] = useState("");



const handleForgotSuccess = (data) => {


  console.log("Child data:", data);

  setSuccessMsg("Password reset successful!");
  setForgot(false); 

//   auto hide after 3 seconds
  setTimeout(() => {
    setSuccessMsg("");
  }, 1500);
};



    //   form submition logic-----------
    const handleSubmit = (e) => {
        e.preventDefault();

         if (!email) {
    setError("Email is required");
    return;
  }

  if (!isValidEmail(email)) {
    setError("Enter a valid email");
    return;
  };
    
    if(password === ""){
        setError("Please Enter Password");
        return;
    }


   if (password.length < 6 ) {
  setError("Password must contain at least 6 characters");
  return;
   }
  setError("");
        console.log({
            email, password, role: toggle
        });
    }

    return (


        <div className=' bg-[linear-gradient(to_bottom_right,#f3f4ff,white),linear-gradient(to_top_left,#f3fcf7,white)] min-h-screen w-full  tablet:px-40 flex justify-center items-center relative'>

            <div className='flex justify-center items-center bg-white p-3 tablet:p-5 rounded-xl gap-5' >

                {/* banner ----------- */}
                <div className='hidden tablet:flex flex-col bg-gradient-to-bl from-blue-500 to-purple-400 justify-center items-center rounded-xl text-white p-20 w-[620px] text-center gap-3 '>
                    <img src={Logo} alt="logo" className='w-[320px] ' />
                    <h1 className='font-bold text-[30px]'>Welcome Back!</h1>
                    <p className='text-[20px] '>Access your bookings, track buses in real-time, and manage your travel with ease.</p>
                </div>

                {/* login form------------ */}
                <form action="" className='flex flex-col justify-center px-5 gap-5 ' onSubmit={handleSubmit}>

                    {error && (
                         <span className='text-red-500 text-center'>{error}</span>
                    )}

                    <h2 className='text-[38px]  font-bold '>Login</h2>
                    <p className='tablet:text-[25px] text-neutral-400 '>Log in to your SmartBus account</p>

                    {/* admin/user toggler--- */}
                    <div className='flex w-full bg-neutral-300 h-fit py-1 rounded-3xl px-2 justify-between items-center'>
                        <button type='button' className={` rounded-full w-full h-12 transition-all duration-300  ${toggle === "user" ? "shadow-sm shadow-black bg-white text-blue-500" : "text-neutral-500"}`} onClick={() => { setToggle("user") }}>
                            User Login
                        </button>

                        <button type='button' className={` rounded-full w-full h-12 transition-all duration-300  ${toggle === "admin" ? "shadow-sm shadow-black bg-white text-blue-500" : "text-neutral-500"}`} onClick={() => { setToggle("admin") }}>
                            Admin Login
                        </button>
                    </div>


                    {/* input fields -------- */}
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => SetEmail(e.target.value)} value={email} className='bg-white border h-14 px-3 rounded-3xl  ' placeholder='Enter you email' />
                    {/* <i className="fa-regular fa-envelope "></i> */}

                    <label className="flex flex-col gap-1">Password
                        <div className="relative">
                            <input
                                type={show ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="bg-white border h-14 px-3 pr-12 rounded-3xl w-full"
                                placeholder="Enter your password"
                            />

                            <i
                                className={`${show ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                                    } absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                                onClick={() => setShow(!show)}
                            ></i>
                        </div>
                    </label>

                    {/* remember me and forgot pswd---------- */}
                    <div className='flex flex-col tablet:flex-row tablet:justify-between gap-4'>
                        <label htmlFor="" className='flex items-center gap-2 '>Remember

                            <input type="checkbox" className='cursor-pointer' /> 
                        </label>
                        
                        <span className='text-purple-500 underline cursor-pointer' onClick={()=>{setForgot(!forgot)}}>Forgot Password?</span>
                    </div>

                    {/* login button------------ */}
                    <div className='justify-center items-center flex flex-col gap-10'>
                        <button className='w-full bg-gradient-to-r from-blue-500 to-purple-500 h-12 rounded-3xl text-white font-semibold'>Login</button>

                        <p>Don't have an account? <span className='text-purple-600 hover:underline transition-all duration-300 cursor-pointer'>Sign up</span></p>
                    </div>
                </form>
            </div>

            {/* forgot pswd setting popup-------------- */}
           
         
            { forgot  && (
           <div className='min-h-screen w-screen absolute backdrop-blur-md flex flex-col justify-center items-center px-5 bg-[#00000056]'>
                    
                <ForgotPaasword onClose={() => setForgot(!forgot)}   onSuccess={handleForgotSuccess}/>
           </div>
            
              )}
           {successMsg && (
  <p className="text-blue-600 text-center absolute bg-blue-200 p-5 rounded-xl shadow-sm border border-blue-600 ">{successMsg}</p>
)}
        </div>
    )
}

export default Login
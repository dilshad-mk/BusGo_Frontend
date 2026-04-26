
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ForgotPaasword({onClose, onSuccess }) {


    // show pswd toggle 
    const [show,setShow] = useState(false)
    const [cshow,setCShow] = useState(false)
    // data from

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpPassword, setConfirmPassword] = useState("");

//    email validation -------------
const isValidEmail = (email) => {
  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
};

// navigation
// const navigate = useNavigate();


// errr msg -----
const [error, setError] = useState("");

// otp request condition/ -----
const requestOtp = () => {
  if (!email) {
    setError("Email is required");
    return;
  }

  if (!isValidEmail(email)) {
    setError("Enter a valid email");
    return;
  }

  setError("");

};



    // form handle ------ 
    const handleSubmit=(e)=>{
           e.preventDefault();

           if(email === ""){
            setError("Enter email");
            return;
           };

           if(otp === ""){
    setError("Enter valid OTP");
    return;
   };

   if(email === "" || otp === ""){
    setError("Fill the Form");
    return;
   }
    
   if(password === "" || confirmpPassword === ""){
     setError("Enter password");
     return;
   }

   if(password !== confirmpPassword){
    setError("Passwords must be same");
    return;
   }

  if (password.length < 6 || confirmpPassword.length < 6) {
  setError("Password must contain at least 6 characters");
  return;
}
   setError("")

           console.log({
            email,
            otp,
           })

        //    navigate("/login");
        onSuccess({ email, otp });
           
  

   
    }
  return (
  

               
                       <div className='w-full tablet:w-fit'>
                   


                          <form action="" className='flex flex-col bg-neutral-100 rounded-xl border p-5 shadow-md tablet:w-[320px] justify-evenly gap-2' onSubmit={handleSubmit}>
                                  
                             

                                 {/* closing btn----- */}
                        <span className='w-[20px] h-[20px] bg-red-600 flex justify-center items-center self-end rounded-full ' onClick={onClose}>
                            <i className="fa-solid fa-x text-white text-[12px]" ></i>
                        </span>

                           {/* erro msg------ */}
                                {error  && (
                                    <span className='text-red-500 text-center'>{error}</span>
                                )}

                            <h1 className='text-center text-blue-500'>Forgot Password</h1>
                            <label htmlFor="" className='flex flex-col gap-3'>Email
                                <input type="email"  className='border rounded-3xl h-14 px-3' placeholder='Enter your email' onChange={(e)=> {setEmail(e.target.value); setError("")}} value={email}/>
                            </label>
                              
                                    <button type='button' className='bg-gradient-to-r from-blue-500 to-purple-500 h-14 rounded-3xl text-white' onClick={requestOtp}>Send OTP</button>

                                    <label htmlFor="" className='flex flex-col gap-3'>OTP
                                        <input type="number" name="" id="" className='border rounded-3xl h-14  px-3 ' placeholder='Enter OTP' onChange={(e)=> {setOtp(e.target.value); setError("")}} value={otp}/>
                                    </label>


                                        {/* password  */}
                                     <label className="flex flex-col gap-1">Password
                                                          <div className="relative">
                                                              <input
                                                                  type={show ? "text" : "password"}
                                                                  onChange={(e) => {setPassword(e.target.value); setError("")}}
                                                                  value={password}
                                                                  className="bg-white border h-14 px-3 pr-12 rounded-3xl w-full"
                                                                  placeholder="Enter new password"
                                                              />
                                  
                                                              <i
                                                                  className={`${show ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                                                                      } absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                                                                  onClick={() => setShow(!show)}
                                                              ></i>
                                                          </div>
                                                      </label>

                                                                                {/* confirm password  */}

                                                                                 <label className="flex flex-col gap-1">Confirm Password
                                                          <div className="relative">
                                                              <input
                                                                  type={cshow ? "text" : "password"}
                                                                  onChange={(e) => {setConfirmPassword(e.target.value); setError("")}}
                                                                  value={confirmpPassword}
                                                                  className="bg-white border h-14 px-3 pr-12 rounded-3xl w-full"
                                                                  placeholder="Confirm your password"
                                                              />
                                  
                                                              <i
                                                                  className={`${cshow ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                                                                      } absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                                                                  onClick={() => setCShow(!cshow)}
                                                              ></i>
                                                          </div>
                                                      </label>

                                  

                                    <button className='bg-green-800 h-14 rounded-3xl text-white'>Submit</button>
                         </form>
                    
                       </div>

          
  )
}

export default ForgotPaasword
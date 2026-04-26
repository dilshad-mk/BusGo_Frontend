import React from 'react'
import Logo from '../../../assets/images/logo.png';
import { useState } from 'react';
import { span } from 'motion/react-client';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();

  // user / admin toggler condition-------------
  const [toggle, setToggle] = useState("user");

  // error msg -----
  const [error, setError] = useState("");

  // form data-----------
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpswd, setConfirmpswd] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");


  //    email validation -------------
  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
  };

  //  password show and hide toggler condotion 
  const [show, setShow] = useState(false);
  const [cshow, setCShow] = useState(false);


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

    if (password === "") {
      setError("Please Enter Password");
      return;
    }

    if (confirmpswd !== password) {
      setError("Passwords must be same");
      return;
    }

    if(name === ""){
      setError("Name required");
      return;
    }
        if (toggle === "admin") {
      if (id === "") {
        setError("ID Invalid");
        return;
      }
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }
    setError("");
// console.log("Saving to localStorage...");

  localStorage.setItem("userRole", toggle);
  localStorage.setItem("isAuth", "true");

  // console.log("Saved:", localStorage.getItem("userRole"));

  if (toggle === "user") {
    navigate("/userDashbord");
  } else {
    navigate("/adminDashbord");
}

    // console.log({
    //   email, password, role: toggle
    // });
    
  }


  return (
    <div className=' bg-[linear-gradient(to_bottom_right,#f3f4ff,white),linear-gradient(to_top_left,#f3fcf7,white)] min-h-screen w-full  tablet:px-40 flex justify-center items-center relative'>
      <div className='flex justify-center items-center bg-white p-3 tablet:p-5 rounded-xl gap-5'>

        {/* banner hiden in small screens */}
        <div className={`hidden tablet:flex flex-col bg-gradient-to-bl from-blue-500 to-purple-400 justify-center items-center rounded-xl text-white p-20 w-[620px] text-center gap-3  ${toggle === "admin" ? "h-[900px]" : "full"}`}>


          <img src={Logo} alt="" className='w-[320px]' />

          <h1 className='font-bold text-[30px] '>Welcome to SmartBus</h1>

          <p className='text-[20px] '>Book your bus seats in advance and travel with comfort. Real-time seat availability at your fingertips</p>

        </div>

        {/* form section --------- */}
        <form action="" className='flex flex-col justify-center px-5 gap-2' onSubmit={handleSubmit}>


          {/* error msg----- */}
          {error && (
            <span className='text-red-500 text-center'>
              {error}
            </span>
          )}

          <h2 className='text-[38px]  font-bold tablet:leading-8'>Create Account</h2>
          <p className='tablet:text-[25px] text-neutral-400 '>Sign up to get started with SmartBus</p>


          {/* user / admin toggle -- */}
          <div className='flex w-full bg-neutral-300 h-fit py-1 rounded-3xl px-2 justify-between items-center'>

            <button type='button' className={` rounded-full w-full h-12 transition-all duration-300  ${toggle === "user" ? "shadow-sm shadow-black bg-white text-blue-500" : "text-neutral-500"}`} onClick={() => { setToggle("user") }}>
              User Login
            </button>


            <button type='button' className={` rounded-full w-full h-12 transition-all duration-300  ${toggle === "admin" ? "shadow-sm shadow-black bg-white text-blue-500" : "text-neutral-500"}`} onClick={() => { setToggle("admin") }}>
              Admin Login
            </button>

          </div>

          {/* input fields--- */}

          {/* name-  */}
          <label htmlFor="" className='flex flex-col justify-center gap-2'>Full Name

            <input type="text" onChange={(e) => {setName(e.target.value); setError("")}} value={name} className='bg-white border h-14 px-3 rounded-3xl  ' placeholder='Enter you full name' />

          </label>

          {/* email -- */}
          <label htmlFor="" className='flex flex-col  gap-2'>Enter your email
            <input type="email" onChange={(e) => {SetEmail(e.target.value); setError("")}} value={email} className='bg-white border h-14 px-3 rounded-3xl  ' placeholder='you@gmail.com' />
          </label>

          {/* password--- */}

          <label className="flex flex-col gap-2">Password
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                onChange={(e) => {setPassword(e.target.value); setError("")}}
                value={password}
                className="bg-white border h-14 px-3 pr-12 rounded-3xl w-full placeholder:font-extrabold placeholder:tracking-[4px] placeholder:text-[19px] placeholder:relative placeholder:top-1 placeholder:-translate-y-2"
                placeholder="......"
              />

              <i
                className={`${show ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                  } absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setShow(!show)}
              ></i>
            </div>
          </label>

          {/* confirm pswd----- */}
          <label className="flex flex-col gap-2">Confirm Password
            <div className="relative">
              <input
                type={cshow ? "text" : "password"}
                onChange={(e) => {setConfirmpswd(e.target.value); setError("")}}
                value={confirmpswd}
                className="bg-white border h-14 px-3 pr-12 rounded-3xl w-full
              placeholder:font-extrabold placeholder:tracking-[4px] placeholder:text-[19px] placeholder:relative placeholder:top-1 placeholder:-translate-y-2"

                placeholder="......"
              />

              <i
                className={`${cshow ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"
                  } absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500`}
                onClick={() => setCShow(!cshow)}
              ></i>
            </div>
          </label>

          {
            toggle === "admin" &&
            (
              <>

                <label htmlFor="" className='flex flex-col  gap-2'>Enter your bus ID
                  <input type="text" onChange={(e) => {setId(e.target.value); setError("")}} value={id} className='bg-white border h-14 px-3 rounded-3xl  ' placeholder='Enter you Bus ID' />
                </label>

                <label htmlFor="" className='flex flex-col  gap-2'>Role
                  <input type="text" value={toggle} className='bg-white text-neutral-400 font-semibold border h-14 px-3 rounded-3xl  pointer-events-none' />
                </label>
              </>
            )


          }


          {/* sign up button------------ */}
          <div className='justify-center items-center flex flex-col gap-10'>
            <button className='w-full bg-gradient-to-r from-blue-500 to-purple-500 h-12 rounded-3xl text-white font-semibold'>Create Account</button>

            <p>Already have an account? <span className='text-purple-600 hover:underline transition-all duration-300 cursor-pointer' onClick={()=>navigate('/login')}> Log in</span></p>
          </div>






        </form>


      </div>
    </div>
  )
}

export default SignUp
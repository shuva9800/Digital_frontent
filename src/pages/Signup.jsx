// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// // import { useSelector, useDispatch } from 'react-redux'
// // import { signInFalior, signInStart, signInSuccess } from '../redux/user/userSlice';

// export default function Signup() {
//   const [formData , SetFormData] = useState({ });
//   const [loading , setLoading] = useState(false);
//   const [error, setError] = useState(null);

// //   const { loading , error} = useSelector((state)=> state.user);
//   // const error = useSelector((state)=> state.user.error);

// //   const dispatch = useDispatch()

//   const navigate =useNavigate();

//   function changeHandler(event){
//     SetFormData({
//       ...formData,
//       [event.target.id] : event.target.value,
//     });
//   };
  

//   async function submitHandler(event){
//     event.preventDefault();
//     setLoading(true);
//     // dispatch(signInStart());
//     const response = await fetch('https://digital-login-backend.onrender.com/api/register',
//       {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json',

//         },
//         body: JSON.stringify(formData),

//       },
//     );

//     const data = await response.json();
//     if(data.success === false){
//       setError(data.message);
//       setLoading(false);
//     //   dispatch(signInFalior(data.message));
//       return;
//     }
//     setLoading(false);
//     // dispatch(signInSuccess(data.user))
//     navigate("/login");
//     console.log(data)

//   }
//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-7'> Sign Up</h1>
//       <form className='flex flex-col gap-4' onSubmit={submitHandler}>
//         <input type='text' placeholder='Name' className='p-3 border rounded-lg' id='username' onChange={changeHandler}/>
//         <input type='email' placeholder='email' className='p-3 border rounded-lg' id='email' onChange={changeHandler}/>
//         <input type='password' placeholder='password' className='p-3 border rounded-lg' id='password' onChange={changeHandler}/>
//         <button disabled={loading} className='p-3 text-white bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:bg-opacity-80'>
//         {
//           loading? 'Loading...' : 'Sign Up'
//         }
//         </button>
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Have an account?</p>
//         <Link to='/login'>
//           <span className='text-blue-700'>Login</span>
//         </Link>
//       </div>
//       <div>
//         {error && (<span className="text-red-600 mt-5">
//           {error}
//         </span>)}
//       </div>
//     </div>
//   )
// }



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await fetch('https://digital-login-backend.onrender.com/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success === false) {
      setError(data.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/login");
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'> Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={submitHandler}>
        <input type='text' placeholder='Name' className='p-3 border rounded-lg' id='username' onChange={changeHandler} />
        <input type='email' placeholder='email' className='p-3 border rounded-lg' id='email' onChange={changeHandler} />
        <input type='password' placeholder='password' className='p-3 border rounded-lg' id='password' onChange={changeHandler} />
        <button disabled={loading} className='p-3 text-white bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:bg-opacity-80'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/login'>
          <span className='text-blue-700'>Login</span>
        </Link>
      </div>
      {error && <span className="text-red-600 mt-5">{error}</span>}
    </div>
  );
}


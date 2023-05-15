import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordConfirm, setPasswordConfirm] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Call the API to handle user signup
//     try {
//       const res = await axios.post("http://localhost:5000/users", {
//         name,
//         email,
//         password,
//         passwordConfirm
//       })
//       console.log(res);
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <div className="hero min-h-screen bg-base-200">
//           <div className="hero-content flex-col lg:flex-row-reverse">
//             <div className="text-center lg:text-left">
//               <h1 className="text-5xl font-bold">
//                 Don't Have an Account? SignUp Now
//               </h1>
//               <p className="py-6">
//                 Please Signup Using a valid email address and a password that
//                 contains more than 8 characters
//               </p>
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
//               <div className="card-body bg-red-200">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                     <input
//                       type="text"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       placeholder="Enter your name"
//                       className="input input-bordered"
//                     />
//                   </label>
//                 </div>
//                 <div className="form-control">
//                   <label className="lebel">
//                     <span className="label-text">Email</span>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Enter your email address"
//                       className="input input-bordered"
//                     />
//                   </label>
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                     <input
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       className="input input-bordered"
//                     />
//                   </label>
//                 </div>
//                 <div>
//                   <label className="label">
//                     <span className="label-text">Confirm Password</span>
//                     <input
//                       type="password"
//                       value={passwordConfirm}
//                       onChange={(e) => setPasswordConfirm(e.target.value)}
//                       placeholder="Confirm your password"
//                       className="input input-bordered"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="form-control">
//               <button type="submit" className="btn btn-primary">
//                 Sign up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Signup;

// import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the API to handle user signup
    console.log(name, email, password, passwordConfirm);
    try {
      await axios.post("http://localhost:5000/signup", {
        name,
        email,
        password,
        passwordConfirm,
      });
      navigate("/records");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Signup;

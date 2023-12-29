// 'use client'
// import React, {useState} from 'react'
// import Link from "next/link";
// import { apiUrl } from '@/app/constant/constant';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useSearchParams } from 'next/navigation'





// const ResetPasswrod = () => {
//   const searchParams = useSearchParams()
 
//   const email = searchParams.get('email');
//   const token = searchParams.get('token');


//   const [npassword, setNpassword] = useState('');
//   const [cnpassword, setCnpassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleInputChange = (e) => {
//     if (e.target.name === 'npassword') {
//       setNpassword(e.target.value);
//     } else if (e.target.name === 'cnpassword') {
//       setCnpassword(e.target.value);
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Make sure to replace 'your_reset_password_api_url' with your actual API endpoint
//       const response = await fetch(`${apiUrl}api/resetpassword`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify({

//           email:email ,
//           token: token,
//           npassword,
//           cnpassword,
//         }),
//       });

//       const responseJson = await response.json();
//       console.log(responseJson);

//       if (response.ok) {
//         setMessage({ type: 'success', text: responseJson.message });
//         toast.success(responseJson.message);
//         console.log(message);
//         router.push("/login");
//       } else {
//         setMessage({ type: 'error', text: responseJson.message });
//         toast.error(responseJson.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
//     } finally {
//       setLoading(false);
//     }
//   };



//   return (
//     <div>
//     <section
//       className="banner"
      
//       style={{
//       backgroundImage: `url(/assets/img/banner1.jpg)`,
//       backgroundSize: 'cover', // You can adjust these styles as needed
//       backgroundRepeat: 'no-repeat',
//       width: '100%',
//       height: '540px', // Set the width and height as needed
//     }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="banner-caption">
//               <h3>Reset Password</h3>

//               <ul className="breadcrumb">
//                 <li>
//                   <Link href="/">Start</Link>
//                 </li>
//                 <li>Reset Password</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section
//       id="reset-password"
//       className="bg--fixed reset-password-section division"
//     >
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-7 col-lg-5">
//             <div className="login-page-logo">
//               <img
//                 className="img-fluid light-theme-img"
//                 src="/assets/img/logo.svg"
//                 alt="logo-image"
//               />
//             </div>
//             <div className="reset-page-wrapper text-center">
//               <form
//                 name="resetpasswordform"
//                 className="row reset-password-form r-10"
//                 onSubmit={handleResetPassword}
//               >
//                 <div className="col-md-12">
//                   <div className="reset-form-title">
//                     <h5 className="s-26 w-700">Reset your password?</h5>
                    
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <input
//                     className="form-control email"
//                     type="password"
//                     name="npassword"
//                     placeholder="Enter your new Password"
//                     value={npassword}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <input
//                     className="form-control email"
//                     type="password"
//                     name="cnpassword"
//                     placeholder="Re-enter your new Password"
//                     value={cnpassword}
//                     onChange={handleInputChange}
//                   />
//                 </div>

//                 <div className="col-md-12">
//                   <button
//                     type="submit"
//                     className="btn btn--theme hover--theme submit"
//                   >
//                    {loading ? 'Updating...' : "Update My Password"}
//                    </button>
                    
//                 </div>
//                 <div className="col-md-12">
//                   <div className="form-data text-center">
//                     <span>
//                     <Link href="/login">Never mind I remembered!</Link>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="col-lg-12 reset-form-msg">
//                   <span className="loading"></span>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
//   )
// }

// export default ResetPasswrod







'use client'
import React, {useState} from 'react'
import Link from "next/link";
import { apiUrl } from '@/app/constant/constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation'





const ResetPassword = () => {
  const searchParams = useSearchParams()
 
  const email = searchParams.get('email');
  const token = searchParams.get('token');


  const [npassword, setNpassword] = useState('');
  const [cnpassword, setCnpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.name === 'npassword') {
      setNpassword(e.target.value);
    } else if (e.target.name === 'cnpassword') {
      setCnpassword(e.target.value);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
	if(npassword !== cnpassword){
		toast.error("Password doesn't match");
		return false;
	}
    setLoading(true);

    try {
      // Make sure to replace 'your_reset_password_api_url' with your actual API endpoint
      const response = await fetch(`${apiUrl}api/resetpassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({

          email:email ,
          token: token,
          npassword: npassword,
          cnpassword: cnpassword
        }),
        
      });
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);

      if (response.ok) {
        if(typeof responseJson.messages.cnpassword !== 'undefined' ){
          setMessage(responseJson.messages.cnpassword[0]);
          toast.error(responseJson.messages.cnpassword[0]);
        }else if(typeof responseJson.messages.npassword !== 'undefined' ){
          setMessage(responseJson.messages.npassword[0]);
          toast.error(responseJson.messages.npassword[0]);
        }else{
          setMessage('success');
          toast.success('success');
          window.location.href='/login';
          
        } 
      } else {
        setMessage({ type: 'error', text: responseJson.messages });
        
        toast.error(responseJson.messages);
        }
    } catch (error) {
      console.error(error);
      setMessage({ type: 'error', text: responseJson.messages });
      // setMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
      toast.error(responseJson.messages);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
    <section
      className="banner"
      
      style={{
      backgroundImage: `url(/assets/img/banner1.jpg)`,
      backgroundSize: 'cover', // You can adjust these styles as needed
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '540px', // Set the width and height as needed
    }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="banner-caption">
              <h3>Reset Password</h3>

              <ul className="breadcrumb">
                <li>
                  <Link href="/">Start</Link>
                </li>
                <li>Reset Password</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="reset-password"
      className="bg--fixed reset-password-section division"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-5">
            <div className="login-page-logo">
              <img
                className="img-fluid light-theme-img"
                src="/assets/img/logo.svg"
                alt="logo-image"
              />
            </div>
            <div className="reset-page-wrapper text-center">
              <form
                name="resetpasswordform"
                className="row reset-password-form r-10"
                onSubmit={handleResetPassword}
              >
                <div className="col-md-12">
                  <div className="reset-form-title">
                    <h5 className="s-26 w-700">Reset your password?</h5>
                    
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control email"
                    type="password"
                    name="npassword"
                    placeholder="Enter your new Password"
                    value={npassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-12">
                  <input
                    className="form-control email"
                    type="password"
                    name="cnpassword"
                    placeholder="Re-enter your new Password"
                    value={cnpassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn--theme hover--theme submit"
                  >
                   {loading ? 'Updating...' : "Update My Password"}
                   </button>
                    
                </div>
                <div className="col-md-12">
                  <div className="form-data text-center">
                    <span>
                    <Link href="/login">Never mind I remembered!</Link>
                    </span>
                  </div>
                </div>
                <div className="col-lg-12 reset-form-msg">
                  <span className="loading"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default ResetPassword
// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const userData = [
//     {
//         nameId: 'Harsh Raj',
//         emailId: 'harsh@gmail.com',
//         password: 'harsh'
//     },
//     {
//         nameId: 'Vivek Kumar',
//         emailId: 'vivek@gmail.com',
//         password: 'vivek'
//     },
//     {
//         nameId: 'Ravi Kumar',
//         emailId: 'ravi@gmail.com',
//         password: 'ravi'
//     }
// ];

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const router = useRouter();
    
    

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const userData = {
//             email: email,
//             password: password,
//           };
//           localStorage.setItem('userData', JSON.stringify(userData));
//           router.push('/dashboard'); // Replace '/dashboard' with your desired route
        

//         const user = userData.find(
//             (user) => user.emailId === email && user.password === password
//         );
//         if (user) {
//             // Handle successful login
//             console.log('Login successful');
//         } else {
//             // Handle unsuccessful login
//             console.log('Invalid credentials');
//         }
//     };

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default Login;





// import { useState } from 'react';
// import { useRouter } from 'next/router';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const userData = {
//       email: email,
//       password: password,
//     };
//     localStorage.setItem('userData', JSON.stringify(userData));
//     router.push('/dashboard'); // Replace '/dashboard' with your desired route
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin} method="post"> {/* Set method to "post" */}
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


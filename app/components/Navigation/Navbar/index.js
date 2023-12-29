// import React from "react";
// import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

// const Navbar = ({ toggle }: { toggle: () => void }) => {
//   return (
//     <>
//       <div className="w-full h-20 bg-emerald-800 sticky top-0">
//         <div className="container mx-auto px-4 h-full">
//           <div className="flex justify-between items-center h-full">
//             <Logo />
//             <button
//               type="button"
//               className="inline-flex items-center md:hidden"
//               onClick={toggle}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="40"
//                 height="40"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#fff"
//                   d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
//                 />
//               </svg>
//             </button>
//             <ul className="hidden md:flex gap-x-6 text-white ">
//               <li>
//                 <Link href="/about">
//                   <p>About Us</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/services">
//                   <p>Services</p>
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contacts">
//                   <p>Contacts</p>
//                 </Link>
//               </li>
//             </ul>
//             <div className="hidden md:block">
//               <Button />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



"use client";
import Link from "next/link"
import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";


  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggle = () => {
      setIsMenuOpen(!isMenuOpen);
      console.log("Toggle button clicked!");
    };

  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
         


            <button type="button" className="inline-flex items-center md:hidden"
  onClick={toggle}>
  {/* Menu icon */}
    <svg xmlns="http://www.w3.org/2000/svg"
         width="40"
         height="40"
         viewBox="0 0 24 24">
         <path fill="#fff"
               d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
    </svg>
</button>


            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/comparison">
                  <p>Comparison</p>
                </Link>
              </li>
            </ul>
            <div className="hidden md:block">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

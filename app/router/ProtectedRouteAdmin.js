import {useEffect} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router";

const ProtectedRouteAdmin = (props) => {
  const token = JSON.parse(sessionStorage.getItem("token"));
  const userRole = sessionStorage.getItem('role');
  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }

  if (!token) return <Navigate to="/" />;
// 1) admin
// 2) supplier
// 3) electrician
// 4) normal user
  useEffect(()=>{
    if(token && userRole!== "1"){ 
      presentPage()
      }
  },[token && userRole!== "1"])


  if (userRole === "1") {
    return <Outlet {...props} />;
  }
 else if(userRole=="1"){
   presentPage()
  }
};

export default ProtectedRouteAdmin;
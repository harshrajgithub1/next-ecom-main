import {useEffect} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router";

const ProtectedRouteUser = (props) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const userRole = sessionStorage.getItem('role');

  const navigate = useNavigate();
  function presentPage() {
    navigate(-1);
  }

  if (!token) return <Navigate to="/" />;

  useEffect(()=>{
    if(token && userRole!== "4"){ 
      presentPage()
      }
  },[token && userRole!== "4"])

  if (userRole === "4") {
    return <Outlet {...props} />;
  }
 else if(userRole!=="1"){
   presentPage()
  }
};

export default ProtectedRouteUser;
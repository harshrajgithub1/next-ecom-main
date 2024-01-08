import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteUser from "./ProtectedRouteUser";

export const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/registration" element={<Register />} />
               <Route element={<ProtectedRouteAdmin/>}>
                  {/* <Route exact path="/adminPage" element={<Page />} /> */}
</Route>
               <Route element={<ProtectedRouteUser/>}>
                  {/* <Route exact path="/usPage" element={<AdminPage />} /> */}
</Route>
            </Routes>
        </Router>
    )
}
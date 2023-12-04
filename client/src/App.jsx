import { useState, useEffect, Suspense, lazy } from "react";
import { useUser } from "./store/auth/hooks";
import { BrowserRouter as Router} from "react-router-dom";
import Loading from "./Loading";
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const MainLayout = lazy(() => import("./layouts"));
export default function App() {
  const [logUser, setLogUser] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setLogUser(user.isAdmin);
    }else{
      setLogUser(null)
    }
  }, [user]);
  return (
<Suspense fallback={<Loading/>}>
<Router> {logUser?  <AdminLayout/>: <MainLayout />}</Router> 
</Suspense>
  );
}


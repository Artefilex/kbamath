import { useState, useEffect } from "react";
import { useUser } from "./store/auth/hooks";
import { BrowserRouter as Router} from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts";
export default function App() {
  const [logUser, setLogUser] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setLogUser(user);
    }
  }, [user]);
  
  return (

    <Router> {logUser?.isAdmin ?  <AdminLayout/>: <MainLayout />}</Router> 
    
  );
}


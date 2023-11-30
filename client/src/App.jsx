import routes from "./routes"
import "./assests/css/tailwind.css"
import { RouterProvider } from 'react-router-dom'
import admin from './routes/admin'
import { useUser } from "./store/auth/hooks";


export default function App() {
    const { user } = useUser();
    return (
        <> 
         {user?.isAdmin ? <RouterProvider router={admin}/> : <RouterProvider router={routes}/>}
        </>
    );
  }
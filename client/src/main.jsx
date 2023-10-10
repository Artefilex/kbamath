
import ReactDOM from 'react-dom/client'
import routes from "./routes"
import "./styles/css/tailwind.css"
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={routes}/>
)

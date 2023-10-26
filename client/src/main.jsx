
import ReactDOM from 'react-dom/client'
import routes from "./routes"
import "./assests/css/tailwind.css"
import { RouterProvider } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <RouterProvider router={routes}/>
 </Provider>
)

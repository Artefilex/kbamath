
import ReactDOM from 'react-dom/client'
// import routes from "./routes"
// import "./assests/css/tailwind.css"
// import { RouterProvider } from 'react-router-dom'
import store from './store'
// import admin from './routes/admin'
import { Provider } from 'react-redux'
import React from 'react'
// import  useIsAdminAuth   from './helpers/isAdminAuth'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
       <Provider store={store}>
          <App />
   </Provider>
   </React.StrictMode>
);
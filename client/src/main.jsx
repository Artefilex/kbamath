import ReactDOM from 'react-dom/client'
import store from './store'
import { Provider } from 'react-redux'
import React from 'react'
import App from './App'
import "./assests/css/tailwind.css"

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
       <Provider store={store}>
          <App />
   </Provider>
   </React.StrictMode>
)
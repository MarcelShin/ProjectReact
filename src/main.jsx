import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    // CHAMANDO O ELEMENTO PAI

    path: '/', element: <App/>,
    errorElement: <Error/>,

    // CHAMANDO O ELEMENTO FILHO

    children: [
      {path: '/home', element: <Home/>}
    ]
  }


  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* CHAMANDO A FUNÇÃO QUE SERÁ RENDERIZADA */}
    <RouterProvider router ={router} />
  </React.StrictMode>,
)

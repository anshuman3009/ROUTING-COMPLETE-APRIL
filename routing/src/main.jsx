import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Train from './Train.jsx'
import Cab from './Cab.jsx'
import Error from './Error.jsx'
import Hotel from './Hotel.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App></App>,
      errorElement:<Error></Error>,
      children:[
                  {
                    path:"/trains",
                    element:<Train></Train>
                  },
                  {
                    path:"/cab",
                    element:<Cab></Cab>
                  },
                  // {
                  //   path:"/hotels",
                  //   element:<Hotel></Hotel>
                  // },
                  {
                    path:"/hotels/:hn",
                    element:<Hotel></Hotel>
                  }
              ]
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)

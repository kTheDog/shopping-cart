import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemPage from './components/shop/ItemPage'
import './index.css'
import App from './components/App'
const routes = [

  {
    path: '/',
    element: <App></App>,
  },
  {

    path: '/:pageName',
    element: <App></App>,
    children: [
      {path: ':itemID', element: <ItemPage></ItemPage>}
    ]
  },
]

const router = createBrowserRouter(routes)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)


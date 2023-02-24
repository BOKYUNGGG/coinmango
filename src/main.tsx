import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import App from './App'
import Home from './pages/home'
import Detail from './pages/coin/coin'
import Price from './pages/coin/price'
import Chart from './pages/coin/chart'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path: ":coinId",
        element : <Detail/>,
        children : [
          {
            path : "price",
            element : <Price />
          },
          {
              path : "chart",
              element : <Chart />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)

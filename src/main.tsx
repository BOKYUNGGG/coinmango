import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App'
import './index.css'
import Home from './pages/home'

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
        element : <h1>CoinId</h1>
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

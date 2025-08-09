import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './index.css'
const App = lazy(() => import('./App.tsx'))
const Login = lazy(() => import('./pages/Login.tsx'))
const Signup = lazy(() => import('./pages/Signup.tsx'))
const BookAppointment = lazy(() => import('./pages/BookAppointment.tsx'))

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache
})

const loadingFallback = (
    <div className="h-[500px] flex items-center justify-center bg-[#d0ded8]">
      <div className="w-8 h-8 border-4 border-t-transparent border-[#066839] rounded-full animate-spin"></div>
    </div>
  )

const router = createBrowserRouter([
  { path: "/", element: <App />},
  { 
    path: "/login",
    element: (
      <Suspense fallback={loadingFallback}>
        <Login />
      </Suspense>
    )
  },
  { 
    path: "/signup",
    element: (
      <Suspense fallback={loadingFallback} >
        <Signup />
      </Suspense>
    )
  },
  { 
    path: "/appointment",
    element: (
      <Suspense fallback={loadingFallback} >
        <BookAppointment />
      </Suspense>
    )
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)

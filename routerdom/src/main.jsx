import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from '../Layout.jsx'
import Home from './Components/Home/Home.jsx'
import User from './Components/User/User.jsx'
import Github, { githubinfoLoader } from './Components/GitHub/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="user/:userid" element={<User/>} />
      <Route path="github" element={<Github/>} loader={githubinfoLoader} />

      </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router} />
  </StrictMode>,
)

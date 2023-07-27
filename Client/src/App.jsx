import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';
import User from './components/User';

//Creo los elementos de navegación de las páginas a emplear
const router = createBrowserRouter([
  {
    path: '/',
    element: <User/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/password',
    element: <Password/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/recovery',
    element: <Recovery/>
  },
  {
    path: '/reset',
    element: <Reset/>
  },
  {
    path: '*',
    element: <PageNotFound/>
  }
])

function App() {

  return (
    <main>
    <RouterProvider router= {router}></RouterProvider>
    </main>
  )
}

export default App;

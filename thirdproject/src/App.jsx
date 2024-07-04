import {createBrowserRouter, Form, RouterProvider} from 'react-router-dom'
import { Homelayout } from './pages/HomeLayout';

const router = createBrowserRouter(
 [
  {
    path:"/",
    element: <Homelayout/>
  },
  {
    path:"/about",
    element:<h1>about</h1>
  }
 ]
);
const App=()=>{
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter(
 [
  {
    path:"/",
    element:<h1 >hello </h1>
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
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import ItemPage, { loader as itemLoader} from './ItemPage/ItemPage'
import AddItem from './AddItem/AddItem'


const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/:id",
      element: <ItemPage />,
      loader: itemLoader
    },
    {
      path: '/item/addItem',
      element: <AddItem />
    }
  ])

const Wrapper = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Wrapper
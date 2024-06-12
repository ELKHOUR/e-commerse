import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {
  const  {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      
    </div>
  )
}

export default ShopCategory
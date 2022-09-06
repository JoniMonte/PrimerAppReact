import React from 'react'
import Item from './Item'

const ItemList = (producList) => {
    return (
        <div className='cardContainer'>
            {producList.map((productos) => <Item key={productos.id} />)}
     </div>
  )
}

export default ItemList
import React from 'react'

const ItemListContainer = (props) => {

    const { greeting } = props
    return (
      <div>
          <p>{ props.saludo}</p>
          <p>{greeting }</p>
    </div>
  )
}

export default ItemListContainer
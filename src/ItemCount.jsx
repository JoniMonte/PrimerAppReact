import React, {useState} from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        setContador(contador + 1);
    }

    const disminuir = () => {
        setContador(contador - 1);
    }   

  return (
      <div>
          <button onClick={incrementar}>+</button>
          <button onClick={disminuir}>-</button>
          <h1>{ contador}</h1>
    </div>
  )
}

export default ItemCount
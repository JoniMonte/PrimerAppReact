import React, { useState, useEffect } from 'react'
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [producList, setProductList] = useState([])
    const [loading, setLoading] = useState(false)
    
    const productos = [
        {
            id: "01", nombre: "producto1", categoria: "Nuevo", descripcion: "Samsung A01", precio: "100000", img: "",
            stock: "5",
        },
        { id: "02", nombre: "producto2", categoria: "nuevo", descripcion: "Samsung core2", precio: "99000", img: "", stock: "4", },
        { id: "03", nombre: "producto3", categoria: "nuevo", descripcion: "Samsung core3", precio: "100000", img: "", stock: "2", },
        { id: "04", nombre: "producto4", categoria: "oferta", descripcion: "Samsung Galaxi A1", precio: "110000", img: "", stock: "6", },
        { id: "05", nombre: "producto5", categoria: "oferta", descripcion: "Samsung gALAXI A2", precio: "120000", img: "", stock: "7", },
        { id: "06", nombre: "producto6", categoria: "oferta", descripcion: "Samsung A21", precio: "130000", img: "", stock: "5", },
        { id: "07", nombre: "producto7", categoria: "Mas vendido", descripcion: "Samsung A22", precio: "140000", img: "", stock: "3", },
        { id: "08", nombre: "producto8", categoria: "Mas vendido", descripcion: "Motorola G9", precio: "98000", img: "", stock: "7" },
        { id: "09", nombre: "producto9", categoria: "Mas vendido", descripcion: "Motorola G9 power", precio: "115000", img: "", stock: "4", },
        { id: "10", nombre: "producto10", categoria: "Mas vendido", descripcion: "Motorola G9 Plus ", precio: "150000", img: "", stock: "3", },
    ];

    const data = new Promise((resolve, rejet) => {
        let condicion = true
        setTimeout(() => {
            if (condicion) { resolve(productos) } else (rejet("salio mal"))
        }, 3000)
    })


    useEffect(() => {
        setLoading(true)
        data
            .then((res) => setProductList(res))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])


    return (
    <div>
        {loading ? <p> Cargando...</p>:< ItemList producList={producList} />}
    </div>

    )
}

export default ItemListContainer
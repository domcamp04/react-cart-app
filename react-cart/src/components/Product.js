import React from 'react'

export default function Product(props) {
    const { product, onAdd } =props;
    return (
        <div>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>${product.price}</h3>
            <div>
                <button onClick={()=>onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

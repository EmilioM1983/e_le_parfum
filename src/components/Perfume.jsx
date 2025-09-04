import React from 'react'

const Perfume = ({perfume, addToCart}) => {
    const {name, brand,image, year, notes, price} = perfume

  return (
    <>
        <div className="col-md-8 col-lg-4 my-4 row align-items-center mx-auto">        
        <div className="col-10 row align-items-center mx-auto">
          <img className="img-fluid" src={`./img/${image}.jpg`} alt="imagen perfume" />  
          <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
          <p>Marca: {brand}</p>
          <p>{notes}</p>
          <p>Año: {year}</p>
          <p className="fw-black text-primary fs-3">$ {price.toLocaleString()}</p> 
          <button
            type="button"
            className="btn btn-dark w-100"
            onClick={() => addToCart(perfume)}
            >Agregar al Carrito</button>
        </div>
      </div>
    </>
  )
}

export default Perfume

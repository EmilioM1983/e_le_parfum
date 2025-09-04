import React, { useState, useEffect } from 'react';
import { db } from '../data/db.js';

const useCart = () => {
    const initialCart = () =>{
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const data = db;

  const [cart, setCart] = useState(initialCart);

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item) {

    //console.log("Agregando al carrito...", item);
    const itemExist = cart.findIndex(perfume => perfume.id === item.id);

    if(itemExist >= 0){
      //console.log("Existe");
      const updateCart = [...cart];
      updateCart[itemExist].quantity++;
      setCart(updateCart);
    }else{
      //console.log("No Existe");
      item.quantity = 1;
      setCart([...cart, item]);
    }

  }

  function removeFromCart(idEliminar){
    //console.log("Eliminando... ", idEliminar);
    setCart(preCart => preCart.filter(perfume => perfume.id !== idEliminar));
  }

  function decreaseQuantity(id) {   // ← corregido
  const updateCart = cart.map(item => {
    if(item.id === id && item.quantity > 1){
      return {
        ...item, 
        quantity: item.quantity - 1
      }
    }
    return item;
  });
  setCart(updateCart);
}

function incrementQuantity(id) {   // ← corregido
  const updateCart = cart.map(item => {
    if(item.id === id && item.quantity >= 1){
      return {
        ...item, 
        quantity: item.quantity + 1
      }
    }
    return item;
  });
  setCart(updateCart);
}

function clearCart() {
  setCart([])
}

const cartTotal = cart.reduce((total, {quantity, price}) => {return total + (quantity * price)}, 0) 

return {
  data,
  cart,
  addToCart,
  removeFromCart,
  decreaseQuantity,
  incrementQuantity,
  clearCart,
  cartTotal
};
  
}

export default useCart

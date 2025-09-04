import Header from "./components/Header"
import Perfume from "./components/Perfume"
import useCart from "./Hooks/useCart"


function App() {

  const{
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    incrementQuantity,
    clearCart,
    cartTotal
  }=useCart()
  


  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        incrementQuantity={incrementQuantity}
        clearCart={clearCart}
        cartTotal={cartTotal}
      />

    <main className="container-xl mt-5">
      <h2 className="text-center">Fragancias disponibles</h2>
      <div className="row mt-5">

        {data.map( (perfume) =>(  
        
                <Perfume 
                  key={perfume.id} 
                  perfume={perfume}
                  addToCart={addToCart}  
                />
              
        ))}
        
      </div>
      
      
    </main>

    <footer className="mt-5 py-5">
      <div className="container-xl">
        <p className="text-center fs-6 mt-4 m-md-0 text-muted">© 2025 Fragancias exclusivas</p>
      </div>
    </footer>
    </>
  )
}

export default App

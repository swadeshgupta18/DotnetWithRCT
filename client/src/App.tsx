import { useEffect, useState } from "react"
import { Product } from "./product";
function App() {
  const [products, setProducts] = useState<Product []>([]);
useEffect(() => {
  fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
}, [])
  function addProduct(){
    setProducts(prevState => [...prevState, 
      {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1), 
      price: (prevState.length * 100) + 100,      
      brand: 'Coca Cola',
      description: 'some desc'
    }])
  }
  return (
    <>
      <div className='app'>
        <h1 style={{color: 'blue'}}>Dotnet-React</h1>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </>
  )
}

export default App

import { useState } from "react"
function App() {
  const [products, setProducts] = useState([
    {name: 'product1', price:100.00},
    {name: 'product2', price:200.00},
  ]);

  function addProduct(){
    setProducts(prevState => [...prevState, 
      {name: 'product' + (prevState.length + 1), price: (prevState.length * 100) + 100}])
  }
  return (
    <>
      <div className='app'>
        <h1 style={{color: 'blue'}}>Dotnet-React</h1>
      </div>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add product</button>
    </>
  )
}

export default App

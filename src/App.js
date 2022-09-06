import data from "./data";

function App() {
  console.log(data.products);
  return (
    <div className="App">
      <header>
        <a href="./">eshop</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {
          <div className="products">
            {data.products.map((product, i) => (
              <div key={i} className="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        }
      </main>
    </div>
  );
}

export default App;

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
        {/* <div>
          {data.products.map((product) => (
            <div key={product.slug}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div> */}
      </main>
    </div>
  );
}

export default App;

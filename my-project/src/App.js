import Header from "./containers/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Header />
          <Routes>
          <Route path="/" exact element={<ProductListing/>}/>
          <Route path="/product/:productId" exact element={<ProductDetails/>}/>
          <Route>404 Not Found!</Route>
          </Routes>
        </Router>

      </header>
    </div>
  );
}

export default App;

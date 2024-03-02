import './App.css';
import './style/style.css';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Products />
    </div>
  );
}

export default App;

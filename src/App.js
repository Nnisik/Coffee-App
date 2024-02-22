import './App.css';
import './style/style.css';
import Navbar from './Navbar';
import Home from './Home';
import Products from './Products';

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

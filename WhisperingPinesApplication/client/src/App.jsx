import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import './App.css';
import './styles/normalize.css';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Home></Home>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
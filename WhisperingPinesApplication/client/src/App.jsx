import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Account from './components/Account.jsx';
import Catalog from './components/Catalog.jsx';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <main>
        <Catalog></Catalog>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
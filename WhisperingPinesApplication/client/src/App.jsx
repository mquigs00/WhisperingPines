import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Account from './components/Account.jsx';
import Catalog from './components/Catalog.jsx';
import BookPage from './components/BookPage.jsx';
import Admin from './components/Admin.jsx';

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
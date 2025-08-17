import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Account from './components/Account.jsx';
import Catalog from './components/Catalog.jsx';
import BookPage from './components/BookPage.jsx';
import Admin from './components/Admin.jsx';
import Register from './components/Register.jsx';
import ContactUs from './components/ContactUs.jsx';
import Reports from './components/Reports.jsx';
import SearchUsers from './components/SearchUsers.jsx';
import Database from './components/Database.jsx';
import AdminHome from './components/AdminHome.jsx';

function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
          <Route path="/account/my-account" element={<Account />}></Route>
          <Route path="/catalog/*" element={<Catalog />}></Route>
          <Route path="/catalog/:isbn13" element={<BookPage></BookPage>}></Route>
          <Route path="/book-page" element={<BookPage />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/admin/*" element={<Admin />}>
            <Route index element={<AdminHome />}></Route>
            <Route path="reports" element={<Reports />}></Route>
            <Route path="database" element={<Database />}></Route>
            <Route path="search-users" element={<SearchUsers />}></Route>
          </Route>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
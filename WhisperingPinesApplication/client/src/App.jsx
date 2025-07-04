import Header from './components/Header';
import Footer from './components/Footer';
import './styles/normalize.css';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section className="library_intro_text">
          <h1>Welcome to Whispering Pines Library</h1>

          <p>
            Welcome to the Whispering Pines Library, a serene haven of knowledge
            and inspiration nestled in Havenbrook. Explore our vast collection,
            indulge in quiet contemplation, and embark on a journey of discovery
            within our enchanting walls.
          </p>

          <p>
            Whispering Pines Library, established in the late 18th century by
            reclusive scholar Ambrose Hawthorne, has captivated seekers of
            knowledge for generations. With its extraordinary collection of rare
            books and a mystical aura, the library has evolved from a humble cabin
            to a grand Victorian-style building, becoming a cherished symbol of
            intellectual exploration in Havenbrook.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
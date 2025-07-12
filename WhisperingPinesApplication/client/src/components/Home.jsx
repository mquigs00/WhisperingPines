import {useNavigate} from 'react-router-dom';
import HomeCSS from './Home.module.css';
import Carousel from './Carousel.jsx';

const Home = () => {
    const navigate = useNavigate();
    
    return (
        <div className={HomeCSS.home}>
            <section className={HomeCSS.library_intro_text}>
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
            <section className={HomeCSS.top_right_home}>
                <div className={HomeCSS.search_our_catalog}>
                    <h2>Search Our Catalog</h2>
                    <form action="">
                        <div>
                            <label htmlFor="title">Title:</label>
                            <input className={HomeCSS.search_input} type="text" id="title"/>
                        </div>
                        
                        <div>
                            <label htmlFor="author">Author:</label>
                            <input className={HomeCSS.search_input} type="text" id="author"/>
                        </div>

                        <button type="submit" onClick={() => navigate('/catalog')}>
                            Search
                        </button>
                        <button type="reset">Clear</button>
                    </form>
                </div>
            </section>
            <section className={HomeCSS.selection}>
                <h2>Check Out Our Selection</h2>
                <Carousel></Carousel>
            </section>
            <section className={HomeCSS.bottom_right_home}>
                <img className={HomeCSS.library_inside} src="https://whispering-pines-images.s3.amazonaws.com/Library-inside-1.png" alt="" />
            </section>
        </div>
    )
}

export default Home;
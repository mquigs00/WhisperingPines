import {useNavigate} from 'react-router-dom';
import CatalogCSS from './Catalog.module.css';

const Catalog = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className={CatalogCSS.title}>Search Our Catalog</h1>
            <div className={CatalogCSS.search_criteria}>
                <form action="">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title"/>

                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author"/>

                    <label htmlFor="isbn13">ISBN13:</label>
                    <input type="text" id="isbn13"/>

                    <button>Search</button>
                </form>
            </div>
            <div className={CatalogCSS.catalog_table}>
                <table className={CatalogCSS.table}>
                    <thead>
                        <tr>
                            <th>ISBN13</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Publisher</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9780060534295</td>
                            <td onClick = {() => navigate('/book-page')}>Couldn't Keep It to Myself: Testimonies from Our Imprisoned Sisters</td>
                            <td>Wally Lamb</td>
                            <td>HarperCollins Publishers</td>
                            <td>In</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Catalog;
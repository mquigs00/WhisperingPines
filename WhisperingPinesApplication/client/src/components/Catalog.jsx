import {Link} from 'react-router-dom';
import {useState} from 'react';
import CatalogCSS from './Catalog.module.css';

const Catalog = () => {
    const [searchForm, setSearchForm] = useState({
        title: '',
        author: '',
        isbn13: ''
    });

    const [matchingBooks, setMatchingBooks] = useState([]);

    const [error, setError] = useState('');

    const handleSearchChange = async(e) => {
        setSearchForm({
            ...searchForm, [e.target.name]: e.target.value
        });
    };

    const handleSubmitSearch = async(e) => {
        console.log("calling handleSubmitSearch");
        e.preventDefault(); // still need?
        setError('');

        try {
            const params = new URLSearchParams(searchForm).toString();
            const res = await fetch(`/api/catalog/search?${params}`, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            });
            
            if (res.ok) {
                const data = await res.json();
                setMatchingBooks(data.books);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    const emptyBook = {
        isbn13: '-',
        title: '-',
        fullName: '-',
        name: '-',
        availability: '-'
    };

    const totalRows = 12;

    console.log("Matching books");
    console.log(matchingBooks);

    const paddedBooks = [
        ...matchingBooks,
        ...Array(Math.max(totalRows - matchingBooks.length, 0)).fill(emptyBook)
    ];

    return (
        <>
            <h1 className={CatalogCSS.title}>Search Our Catalog</h1>
            <div className={CatalogCSS.search_criteria}>
                <form onSubmit={handleSubmitSearch}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={searchForm.title}
                        onChange={handleSearchChange}
                    />

                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={searchForm.author}
                        onChange={handleSearchChange}
                    />

                    <label htmlFor="isbn13">ISBN13:</label>
                    <input
                        type="text"
                        id="isbn13"
                        name="isbn13"
                        value={searchForm.isbn13}
                        onChange={handleSearchChange}
                    />

                    <button type='submit'>Search</button>
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
                        {paddedBooks.map((book, idx) => (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/catalog/${book.isbn13}`}>{book.isbn13}</Link>
                                </td>
                                <td>{book.title}</td>
                                <td>{book.fullName}</td>
                                <td>{book.name}</td>
                                <td>{book.availability}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Catalog;
import BookPageCSS from './BookPage.module.css';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import CheckOut from './CheckOut';

const BookPage = () => {
    const {isbn13} = useParams();
    const [book, setBook] = useState(null);
    const [showCheckout, setShowCheckout] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`/api/catalog/book/${isbn13}`);
                if (!res.ok) throw new Error("Failed to fetch book");
                console.log("reading book data!");
                const data = await res.json();
                setBook(data.book);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchBook();
    }, [isbn13]);

    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn13}-L.jpg`;

    if (!book) return <p>Loading book...</p>

    return (
        <>
            <h1 className={BookPageCSS.title}>{book.title}</h1>
            <div className={BookPageCSS.book_view}>
                <div className={BookPageCSS.book_details}>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>Author:</strong> {book.fullName}</p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>Publisher:</strong> {book.name} </p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>Published:</strong> {book.yearPublished}</p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>Pages:</strong> {book.numPages}</p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>Format:</strong> {book.format}</p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>ISBN13:</strong> {isbn13}</p>
                    <p className={BookPageCSS.book_detail}><strong className={BookPageCSS.label}>ISBN10:</strong> {book.ISBN10}</p>
                    <p><strong className={BookPageCSS.label}>Availability:</strong> {book.availability}</p>
                    
                    <button onClick={() => setShowCheckout(true)} className={BookPageCSS.book_button}>Check Out</button>
                    {showCheckout && (
                        <CheckOut book={book} onClose={() => setShowCheckout(false)} />
                    )}

                    <button className={BookPageCSS.book_button}>Hold</button>
                </div>
                
                <div className={BookPageCSS.book_cover}>
                    <img src={coverUrl} alt={`${book.title} cover`} />
                </div>
            </div>
        </>
    )
}

export default BookPage;
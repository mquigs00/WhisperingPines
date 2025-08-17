import BookPageCSS from './BookPage.module.css';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

const BookPage = () => {
    console.log("In Book Page!");
    const {isbn13} = useParams();
    console.log("In BookPage.jsx isbn13 = " + isbn13);
    const [book, setBook] = useState(null);
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
                    <p className={BookPageCSS.book_detail}>Author: {book.fullName}</p>
                    <p className={BookPageCSS.book_detail}>Publisher: {book.name} </p>
                    <p className={BookPageCSS.book_detail}>Published: {book.yearPublished}</p>
                    <p className={BookPageCSS.book_detail}>Pages: {book.numPages}</p>
                    <p className={BookPageCSS.book_detail}>Format: {book.format}</p>
                    <p className={BookPageCSS.book_detail}>ISBN13: {isbn13}</p>
                    <p className={BookPageCSS.book_detail}>ISBN10: {book.ISBN10}</p>
                    <p>Availability: {book.availability}</p>
                    <button className={BookPageCSS.book_button}>Check Out</button>
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
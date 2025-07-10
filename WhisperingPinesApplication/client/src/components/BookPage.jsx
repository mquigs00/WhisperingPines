import BookPageCSS from './BookPage.module.css';

const BookPage = () => {
    const book = {
        id: 1,
        title: "Christmas In Minnesota",
        author: "Wally Lamb",
        publisher: "Harper Collins Publishers",
        isbn13: "9780060534295",
        isbn10: "006053429X",
        year_published: "2003",
        num_pages: 368,
        format: "Hardcover",
        availability: "In",
        cover_url: "https://whispering-pines-images.s3.us-east-2.amazonaws.com/book-covers/Christmas_In_Minnesota.jpg"
    }

    return (
        <div className={BookPageCSS.book_view}>
            <div className={BookPageCSS.book_details}>
                <h1 className={BookPageCSS.title}>{book.title}</h1>
                <p className={BookPageCSS.book_detail}>Author: {book.author}</p>
                <p className={BookPageCSS.book_detail}>Publisher: {book.publisher} </p>
                <p className={BookPageCSS.book_detail}>Published: {book.year_published}</p>
                <p className={BookPageCSS.book_detail}>Pages: {book.num_pages}</p>
                <p className={BookPageCSS.book_detail}>Format: {book.format}</p>
                <p className={BookPageCSS.book_detail}>ISBN13: {book.isbn13}</p>
                <p className={BookPageCSS.book_detail}>ISBN10: {book.isbn10}</p>
                <p>Availability: {book.availability}</p>
                <button className={BookPageCSS.book_button}>Check Out</button>
                <button className={BookPageCSS.book_button}>Hold</button>
            </div>
            
            <div className={BookPageCSS.book_cover}>
                <img src={book.cover_url} alt="" />
            </div>
        </div>
    )
}

export default BookPage;
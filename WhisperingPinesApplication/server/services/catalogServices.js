
/**
 * Returns all rows that have the same
 * 
 * @param {Object} bookData - an object containing the title, author, and ISBN13 that the client searched for
 * @param {} conn 
 */
async function getSearchResults(bookData, conn) {
    const {title, author, isbn13} = bookData;

    // find the book edition row with the same isbn13 and then join on the Books table to get the bookId
    let bookQuery = `
    SELECT
        BookEditions.isbn13, Books.title, Authors.fullName, Publishers.name, BookCopies.availability
    FROM
        BookEditions
    INNER JOIN Books ON BookEditions.bookId=Books.bookId
    INNER JOIN Authors ON Books.authorId=Authors.authorId
    INNER JOIN Publishers ON BookEditions.publisherId=Publishers.publisherId
    INNER JOIN BookCopies ON BookEditions.editionId=BookCopies.editionId
    WHERE 1=1
    `;

    const choices = []

    if (isbn13) {
        bookQuery += " AND BookEditions.isbn13 = ?";
        choices.push(isbn13);
    }

    if (title) {
        console.log("Adding title");
        bookQuery += " AND Books.title LIKE ?";
        choices.push(`%${title}`);
    }

    
    if (author) {
        bookQuery += " AND Authors.fullName LIKE ?";
        choices.push(`%${author}`)
    }

    console.log(bookQuery);
    console.log(author);

    const [matchingBooks] = await conn.query(bookQuery, [choices]);

    console.log("Searched for matching books in catalog. Found: " + matchingBooks.length);

    return matchingBooks;
};

// will figure out later
async function getAuthorId(authorName) {
    const authorIdQuery = "SELECT authorId FROM Authors WHERE firstName";
};

async function getAuthorName(authorId) {

};

async function getPublisherId(publisherName) {

};

async function getPublisherName(publisherId) {

}

async function getAvailability() {

}

module.exports = {
    getSearchResults,
    getAuthorName,
    getPublisherId,
    getPublisherName,
    getAvailability
}
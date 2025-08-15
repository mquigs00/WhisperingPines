
/**
 * Returns all rows that have the same
 * 
 * @param {Object} bookData - an object containing the title, author, and ISBN13 that the client searched for
 * @param {} conn 
 */
async function getSearchResults(bookData, conn) {
    let authorId;

    // find the book edition row with the same isbn13 and then join on the Books table to get the bookId
    const bookQuery = `
    SELECT
        BookEditions.isbn13, Books.title, Authors.firstName, Authors.lastName, Publishers.name, BookCopies.availability
    FROM
        BookEditions
    INNER JOIN Books ON BookEditions.bookId=Books.bookId
    INNER JOIN Authors ON Books.authorId=Authors.authorId
    INNER JOIN Publishers ON BookEditions.publisherId=Publishers.publisherId
    INNER JOIN BookCopies ON BookEditions.editionId=BookCopies.editionId
    WHERE isbn13 = ?
    `
    
    const [matchingBooks] = await conn.query(bookQuery, [bookData.isbn13]);

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
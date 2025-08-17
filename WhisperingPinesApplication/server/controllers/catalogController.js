const pool = require('../db');

const catalogService = require('../services/catalogService');

async function getSearchResults(req, res) {
    const conn = await pool.getConnection();

    try {
        const bookData = req.query;

        const matchingBooks = await catalogService.getSearchResults(bookData, conn);

        console.log(matchingBooks);

        res.status(200).json({
            success: true,
            books: matchingBooks,
        });
    } catch (error) {
        console.error("Error searching catalog for book:", error);
        res.status(500).json({success: false, error: error.message});
    } finally {
        if (conn) conn.release();
    }
}

async function getBook(req, res) {
    const conn = await pool.getConnection();

    try {
        const {isbn13} = req.params;

        const bookData = await catalogService.getBookByISBN13(isbn13, conn);
        console.log("Got book data. Calling res.status.json");
        conn.release();

        res.status(200).json({
            success: true,
            book: bookData,
        });
    } catch (error) {
        console.error("Error getting book: ", error);
    }

}

module.exports = {
    getSearchResults,
    getBook
};
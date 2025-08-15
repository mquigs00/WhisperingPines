const pool = require('../db');

const catalogService = require('../services/catalogServices');

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

module.exports = {
    getSearchResults
};
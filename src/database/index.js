const express = require("express");
const path = require('path');
const {open} = require('sqlite');
const sqlite3 = require('sqlite3');

const dbPath= path.join(__dirname, 'goodreads.db');

let db = null;

const initializeDBAndServer = async () => {
    try {
    db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });
    app.listen(3001, () => {
        console.log("Server Running at http://localhost:3001/");
    }
    );
} catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
}
}

initializeDBAndServer();


const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    });


app.get('/books/', async (request, response) => {
    const getBooksQuery = `
    SELECT * FROM book  ORDER BY book_id;`
    const bookArray = await db.all(getBooksQuery, (error, result) => {
        response.send(bookArray);
    }
    );
});
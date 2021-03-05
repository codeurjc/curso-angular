const express = require('express');

const router = express.Router();

const books = new Map();
let nextId = 1;

function addBook(book) {

    let id = nextId++;

    book.id = id.toString();

    books.set(book.id, book);
}

router.post('/books', (req, res) => {

    let book = {
        title: req.body.title,
        description: req.body.description        
    };

    addBook(book);
    res.json(book);
});

router.get('/books', (req, res) => {
    res.json([...books.values()]);
});

router.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.get(id);
    if (!book) {
        res.sendStatus(404);
    } else {
        res.json(book);
    }
});

router.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.get(id);
    if (!book) {
        res.sendStatus(404);
    } else {
        books.delete(id);
        res.json(book);
    }
});

router.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const book = books.get(id);
    if (!book) {
        res.sendStatus(404);
    } else {

        let newBook = {
            id,
            title: req.body.title,
            description: req.body.description            
        };

        books.set(id, newBook);

        res.json(newBook);

    }
});

module.exports = router;



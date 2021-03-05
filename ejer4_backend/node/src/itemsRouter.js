const express = require('express');

const router = express.Router();

const items = new Map();
let nextId = 1;

function addItem(item) {

    let id = nextId++;

    item.id = id.toString();

    items.set(item.id, item);
}

router.post('/items', (req, res) => {

    let item = {
        description: req.body.description,
        checked: req.body.checked
    };

    addItem(item);
    res.json(item);
});

router.get('/items', (req, res) => {
    res.json([...items.values()]);
});

router.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.get(id);
    if (!item) {
        res.sendStatus(404);
    } else {
        res.json(item);
    }
});

router.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.get(id);
    if (!item) {
        res.sendStatus(404);
    } else {
        items.delete(id);
        res.json(item);
    }
});

router.put('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.get(id);
    if (!item) {
        res.sendStatus(404);
    } else {

        let newItem = {
            id,
            description: req.body.description,
            checked: req.body.checked
        };

        items.set(id, newItem);

        res.json(newItem);

    }
});

module.exports = router;



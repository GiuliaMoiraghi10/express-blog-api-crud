const posts = require('../data/posts.js')

function index(req, res) {
    res.send('Lista dei post')
}

function show(req, res) {
    const id = parseInt(req.params.id)
    res.send(`Dettagli del post con id ${id}`)
}

function store(req, res) {
    res.send('Crea nuovo post')
}

function update(req, res) {
    const id = parseInt(req.params.id)
    res.send(`Modifica post con id ${id}`)
}

function modify(req, res) {
    const id = parseInt(req.params.id)
    res.send(`Modifica parte del post con id ${id}`)
}

function destroy(req, res) {
    const id = parseInt(req.params.id)
    res.send(`Elimina post con id ${id}`)
}

module.exports = { index, show, store, update, modify, destroy }
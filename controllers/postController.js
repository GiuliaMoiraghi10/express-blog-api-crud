const posts = require('../data/posts.js')

function index(req, res) {
    // res.send('Lista dei post')
    res.json(posts)
}

function show(req, res) {
    const id = parseInt(req.params.id)
    // res.send(`Dettagli del post con id ${id}`)
    let post = posts.find(post => post.id === id)

    if (!post) {

        res.status(404)

        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    res.json(post)
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
    // res.send(`Elimina post con id ${id}`)
    const post = posts.findIndex(post => post.id === id)

    if (!post) {
        res.status(404)

        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

    posts.splice(posts.indexOf(post), 1)

    console.log(posts)

    res.sendStatus(204)

}

module.exports = { index, show, store, update, modify, destroy }
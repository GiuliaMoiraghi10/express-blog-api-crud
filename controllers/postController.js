const posts = require('../data/posts.js')
//creo variabile per prendere ultimo id creato
let lastIndex = posts.at(-1).id

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
    // res.send('Crea nuovo post')

    //request body
    console.log(req.body)
    res.send(req.body)

    //creo nuovo id per nuovo elemento aggiunto
    // const newId = posts(posts.length - 1).id + 1
    lastIndex++

    //creo nuovo elemento con dati presi da json postman
    const post = {
        id: lastIndex,
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    console.log(post)

    //pusho nuovo post
    posts.push(post)

    //imposto status
    res.status(201).send(post)

    //restituisco nuovo elemento in json
    res.json(post)

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
    const postIndex = posts.findIndex(post => post.id === id)

    if (postIndex === -1) {
        res.status(404)

        return res.json({
            error: 'Not Found',
            message: 'Post non trovato'
        })
    }

    posts.splice(postIndex, 1)

    res.sendStatus(204)

}

module.exports = { index, show, store, update, modify, destroy }
const posts = require('../data/posts.js')
//creo variabile per prendere ultimo id creato
let lastId = posts.at(-1).id

function index(req, res) {
    // res.send('Lista dei post')

    // filtro i posts con il valore tag che viene passato in query string

    let filteredPosts = posts

    if (req.query.tags) {
        const queryTags = req.query.tags.toLowerCase()  // metto il valore in minuscolo
        filteredPosts = filteredPosts.filter(post =>    // controllo se tag è presente
            post.tags.some(tag => queryTags.includes(tag.toLowerCase()))
        )
    }

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
    lastId++

    //creo nuovo elemento con dati presi da json postman
    const post = {
        id: lastId,
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
    // recupero id post da modificare
    const id = parseInt(req.params.id)
    // res.send(`Modifica post con id ${id}`)

    // uso metodo find per trovare il post da modificare
    const post = posts.find(post => post.id === id)

    // creo variabile in cui recupero gli elementi da cambiare
    const { title, slug, content, image, tags } = req.body

    // gestisco errore
    if (!post) {

        res.status(404)

        return res.json({
            error: 'Not found',
            message: 'Post non trovato'
        })
    }

    // aggiorno il post
    post.title = title,
        post.slug = slug,
        post.content = content,
        post.image = image,
        post.tags = tags

    // controllo
    console.log(posts)

    // restituisco post aggiornato
    res.json(post)
}

function modify(req, res) {
    const id = parseInt(req.params.id)
    // res.send(`Modifica parte del post con id ${id}`)

    const post = posts.find(post => post.id === id)

    const { title, slug, content, image, tags } = req.body

    if (title) post.title = title
    if (slug) post.slug = slug
    if (content) post.content = content
    if (image) post.image = image
    if (tags) post.tags = tags

    res.json(post)

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
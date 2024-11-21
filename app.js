console.log('express-blog-api-crud')

const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/postsRouter.js')

app.use(express.static('public'))

//aggiungo "codice" per far funzionare la lettura del body
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Prima porta')
    //aggiungo console.log per poter visualizzare il body
    console.log(req.body)
})

app.use('/posts', postsRouter)


app.listen(port, () => {
    console.log(`Server listenig on port ${port}`)
})
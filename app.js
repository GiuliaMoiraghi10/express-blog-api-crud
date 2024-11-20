console.log('express-blog-api-crud')

const express = require('express')
const app = express()
const port = 3000

const postsRouter = require('./routers/postsRouter.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Prima porta')
})

app.use('/posts', postsRouter)


app.listen(port, () => {
    console.log(`Server listenig on port ${port}`)
})
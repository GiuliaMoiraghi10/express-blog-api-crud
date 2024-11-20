console.log('express-blog-api-crud')

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Prima porta')
})

app.listen(port, () => {
    console.log(`Server listenig on port ${port}`)
})
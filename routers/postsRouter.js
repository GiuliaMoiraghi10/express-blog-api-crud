const express = require('express')
const router = express.Router()

//index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

//show
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Dettagli del post con id ${id}`)
})

//store
router.post('/', (req, res) => {
    res.send('Crea nuovo post')
})

//update
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifica post con id ${id}`)
})

//modify
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Modifica parte del post con id ${id}`)
})

//destroy
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`Elimina post con id ${id}`)
})

module.exports = router
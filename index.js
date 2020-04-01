const express = require('express')

/**
 * A simple Express app with a handler
 */

const PORT = 80

const app = express()

function helloHandler(req, res) {
    res.status(200).send('<h1>Hello, World!</h1>')
}

app.get('*', helloHandler)
app.listen(PORT)

console.log(`Express server running on port ${PORT}!`)
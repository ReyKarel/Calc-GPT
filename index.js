const PORT = 8000

const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.get('/', (req,res) => {
    res.json('hi')
})

app.listen(PORT, ()=>console.log(`Server running on ${PORT}`))
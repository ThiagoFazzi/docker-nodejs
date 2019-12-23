import express from 'express'

const PORT = 5000
const HOST = '0.0.0.0'

const app = new express();



app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)})
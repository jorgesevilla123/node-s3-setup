const express = require('express')
const fileUpload = require('express-fileupload')


const app = express()

app.use(fileUpload())



app.get('/', (req, res) => {
    res.send('Im watchin madafoka')
})

app.post('/upload-file', (req, res) => {
    console.log(re.files)
    
})



app.listen(3000, () => {
    console.log('App listening on port', 3000)
})
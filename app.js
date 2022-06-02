import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import db from "./config/mongoose.js"

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})
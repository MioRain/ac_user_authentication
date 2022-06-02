import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import db from "./config/mongoose.js"
import userAccount from "./models/user-account.js"

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await userAccount.findOne({ email, password }).lean()
    if (result) {
      res.render('welcome', { result })
    } else {
      res.render('index', { tipMessage: '帳號或密碼錯誤' })
    }
  }
  catch (err) {
    console.err('err', err)
  }
})

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})
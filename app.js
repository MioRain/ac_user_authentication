import express from "express"
import { engine } from "express-handlebars"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import { v4 as uuidv4 } from 'uuid'
import db from "./config/mongoose.js"
import userAccount from "./models/user-account.js"

const app = express()
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static('public'))

class Session {
  constructor(email, expiresAt) {
    this.email = email
    this.expiresAt = expiresAt
  }
}

const sessions = {}

app.get('/', async (req, res) => {
  try {
    if (req.cookies) {
      const sessionToken = req.cookies['session_Token']
      if (sessions[sessionToken]) {
        const email = sessions[sessionToken].email
        const result = await userAccount.findOne({ email }).lean()
        res.render('welcome', { result })
      } else {
        res.render('index')
      }
    }
  }
  catch (err) {
    console.log('catch', err)
  }
})

app.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await userAccount.findOne({ email, password }).lean()
    if (result) {
      const sessionToken = uuidv4()
      const now = new Date()
      const expiresAt = new Date(+ now + 60 * 1000)
      const session = new Session(result.email, expiresAt)
      sessions[sessionToken] = session
      res.cookie('session_Token', sessionToken, { expires: expiresAt })
      res.render('welcome', { result })
    } else {
      res.render('index', { tipMessage: '帳號或密碼錯誤' })
    }
  }
  catch (err) {
    console.log('catch', err)
  }
})

app.listen(port, () => {
  console.log(`The express server is running on http://localhost:${port}`)
})
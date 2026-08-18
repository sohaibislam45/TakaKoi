require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
require('./config/passport')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth')
const transactionRoutes = require('./routes/transactions')

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }))
app.use(express.json())
app.use(cookieParser())
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  console.error('❌ MONGO_URI is not set. Create a .env file in server/ with MONGO_URI set.')
  process.exit(1)
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message)
    process.exit(1)
  })

app.use('/api/auth', authRoutes)
app.use('/api/transactions', transactionRoutes)

app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => console.log(`🚀 TakaKoi server running on http://localhost:${PORT}`))

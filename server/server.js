const express = require('express')
const app = express()
const consola = require('consola')
const {
  Nuxt,
  Builder
} = require('nuxt')


// IMOPRTING ESSENTIAL LIBRARIES
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

// let mongo = process.env.MONGODB_PASS
const methodOverride = require('method-override')

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


 async function start() {
  //Middlewares
  app.use(cors())
  app.use(morgan('dev'))
  app.use(bodyParser.json())
  app.use(methodOverride('_method'));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static(path.join(__dirname, 'public')))


  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
      res.header(
        'Access-Control-Allow-Methods',
        'PUT',
        'POST',
        'PATCH',
        'DELETE',
        'GET'
      )
      return res.status(200).json({})
    }
    next()
  })


  app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
      error: {
        message: error.message
      }
    })
  })

  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()

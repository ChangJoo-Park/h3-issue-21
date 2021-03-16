const { createApp } = require('h3')
const { listen } = require('listhen')

const app = createApp()

app.use('/api', (_req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return { api: 'works!' }
})

app.use('/', () => 'Hello world!')

listen(app)

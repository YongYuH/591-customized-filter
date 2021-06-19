const fastify = require('fastify')()
const path = require('path')

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist')
})

fastify.listen(3000, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})
import fastify from 'fastify'
import path from 'path'

const port = process?.env?.port ?? 3000

const Fastify = fastify()

Fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'dist')
})

Fastify.listen(port, (err, address) => {
  if (err) throw err
  console.log(`Server is now listening on ${address}`)
})
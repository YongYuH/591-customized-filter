import browserSync from 'browser-sync'
import { BuildOptions, build } from 'esbuild'
import fastify from 'fastify'
import path from 'path'

const protocal = process?.env?.port || 'http'
const host = process?.env?.port || 'localhost'
const port = process?.env?.port || 3000
const url = `${protocal}://${host}:${port}`

const Fastify = fastify()
const bs = browserSync.create()
const buildOptions: BuildOptions = {
  bundle: true,
  entryPoints: ['./src/index.tsx'],
  outdir: 'dist',
  sourcemap: true,
  watch: {
    onRebuild: (error, result) => {
      if (error) {
        console.error('watch rebuild failed:', error)
      } else {
        console.log('watch rebuild succeeded: ', result)
        bs.reload()
      }
    }
  }
}

const devApp = async () => {
  try {
    await build(buildOptions)

    Fastify.register(require('fastify-static'), {
      root: path.join(__dirname, 'dist')
    })
    
    Fastify.listen(port, (err, address) => {
      if (err) throw err
      console.log(`Server is now listening on ${address}`)
    })

    bs.init({
      proxy: url,
      ui: false,
    })
  } catch (e) {
    process.exit(1)
  }
}

devApp()
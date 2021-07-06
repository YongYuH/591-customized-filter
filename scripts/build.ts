import { BuildOptions, build } from 'esbuild'

const buildOptions: BuildOptions = {
  bundle: true,
  entryPoints: ['./src/index.tsx'],
  outdir: '../dist',
  sourcemap: true,
}

const buildApp = async () => {
  try {
    await build(buildOptions)
  } catch (e) {
    process.exit(1)
  }
}

buildApp()
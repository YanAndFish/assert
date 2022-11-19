import { defineConfig } from 'tsup'

export default defineConfig({
  format: ['esm', 'cjs'],
  treeshake: true,
  dts: true,
  entry: ['src/index.ts']
})

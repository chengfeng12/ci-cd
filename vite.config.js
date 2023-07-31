import { defineConfig } from 'vite'
import path, { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import { loadEnv } from "vite"
// https://vitejs.dev/config/
export default (configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd())
  const { VITE_PUBLIC_PATH } = viteEnv
  return {
    /** 打包时根据实际情况修改 base */
    base: './',
    build: {
      outDir: 'docs'
    },
    /** Vite 插件 */
    plugins: [
      vue(),
    ],

  }
}


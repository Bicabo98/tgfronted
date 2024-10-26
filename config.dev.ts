import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';
import path from 'path';

// 定义一个函数来解析路径
function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Allows using the compilerOptions.paths property in tsconfig.json.
    // https://www.npmjs.com/package/vite-tsconfig-paths
    tsconfigPaths(),
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl

    //basicSsl(),
  ],
  build: {
    outDir: 'docs'
  },
  server: {
    proxy: {
      '/api/binancePrice/': {
        target: 'https://api.binance.com/api/v3/ticker', // 本地开发
        changeOrigin: true, // 是否改变源地址
        rewrite: (path) => path.replace(/^\/api\/binancePrice/, ''), // 重写路径
      },
      '/apis': {
        target: 'https://192.168.100.96:8888', // 本地开发
        changeOrigin: true, // 是否改变源地址
        secure: false,
        rewrite: (path) => path.replace(/^\/apis/, '/apis/'),
      },
      '/images': {
        target: 'https://192.168.100.96:8889', // 本地开发
        changeOrigin: true, // 是否改变源地址
        secure: false,
        rewrite: (path) => path.replace(/^\/images/, '/images'),
      }
    },
    fs: {
      allow: ['../sdk', './'],
    },
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  publicDir: './public',
})
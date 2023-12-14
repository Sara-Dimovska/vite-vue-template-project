import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // template: {
      //   transformAssetUrls
      // }
    }),
    // Vue migration build is incompatible with vuetify, 
    // even with the vuetify latest
    // vue({
    //   template: {
    //     compilerOptions: {
    //         compatConfig: {
    //             MODE: 2
    //         }
    //     }
    //   }
    // })
  ],
  // resolve: {
  //   alias: {
  //     vue: '@vue/compat',
  //   },
  // }
})

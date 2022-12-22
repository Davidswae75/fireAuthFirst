const path = require('path')

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    watch : true
}


// import { resolve } from 'path'

// export const mode = 'development'
// export const entry = './src/index.js'
// export const output = {
//     path: resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
// }
// export const watch = true

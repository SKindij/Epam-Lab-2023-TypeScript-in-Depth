// webpack.config.js
const { resolve } = require('path');

module.exports = {
    entry: './index.ts', // початковий файд
    output: { 
    filename: 'index.bundle.js', // підсумковий файл
    path: resolve(__dirname, 'dist') // шлях виводу
    },
    module: { 
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    target: 'node', // використовує Node.js
    mode: 'none'
    // mode: 'production' // оптимізує підсумковий файл
};


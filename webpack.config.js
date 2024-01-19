const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {test: /\.ts$/, use: 'ts-loader'},
          {test: /\.tsx$/, use: 'ts-loader'}
        ]
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      extensions: ['.tsx', '.ts', '...']
    },
};
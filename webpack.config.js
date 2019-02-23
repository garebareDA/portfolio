const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename:'build.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' webpack 1 用
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test:/\.(jpg|png|gif)$/, loader: 'file-loader',
        options:{
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.mp4$/, loader: 'file-loader',
        options: {
        name: '[path][name].[ext]'
      }
    }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]

}
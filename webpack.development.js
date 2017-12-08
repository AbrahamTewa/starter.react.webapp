/* eslint-env node */

import path from 'path';
import StyleLintPlugin   from 'stylelint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const styleLintOptions = {configFile: '.stylelintrc.json'};

const BUILD_FOLDER = path.resolve(__dirname, 'build');
const SOURCE_FOLDER = path.resolve(__dirname, 'src');

/*eslint indent:0*/
export default { devtool : 'source-map'
               , devServer: { hot: true
                            , contentBase: false
                            , historyApiFallback: true
                            , publicPath: '/'}
               , entry   : ['./src/index.js'
                           ,'./src/index.scss']
               , module  : { rules: [{ enforce: 'pre'
                                     , test   : /\.js$/
                                     , include: SOURCE_FOLDER
                                     , exclude: /node_modules/
                                     , use    : ['eslint-loader']}

/*                                    ,{ enforce: 'pre'
                                     , test   : /\.s[a|c]ss$/
                                     , include: [SOURCE_FOLDER]
                                     , exclude: /node_modules/
                                     , use: [{loader: 'sasslint-loader'}]} */

                                    ,{ test   : /\.js$/
                                     , include: [SOURCE_FOLDER]
                                     , exclude: /node_modules/
                                     , loader : 'babel-loader'}

                                        // Stylesheets
                                    , { test   : /\.s[a|c]ss$/
                                      , include: [SOURCE_FOLDER]
                                      , exclude: /node_modules/
                                      , use: [{loader: 'style-loader'} // creates style nodes from JS strings
                                             ,{loader: 'css-loader'  } // translates CSS into CommonJS
                                             ,{loader: 'sass-loader' }]}]}

               , output  : { path: BUILD_FOLDER
                           , filename: 'index.js'
                           , publicPath: '/'}
               , plugins: [new StyleLintPlugin(styleLintOptions),
                           new HtmlWebpackPlugin()]
               , resolve : { modules: ['node_modules']}};

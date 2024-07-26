import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

interface EnvVar {
  mode: Mode;
  port: number;
}
export default (env: EnvVar) => {

  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const config: webpack.Configuration = {

    mode: env.mode ?? 'development',

    entry: path.resolve(__dirname, 'src/ts', 'index.ts'),

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash:8].js',
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
      isProd && new MiniCssExtractPlugin({
        filename: 'css/style.[contenthash:8].css',
      })
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    devtool: isDev && 'inline-source-map',

    devServer: isDev ? {
      port: env.port ?? 3000,
      open: true,
    } : undefined,
  }

  return config;

}

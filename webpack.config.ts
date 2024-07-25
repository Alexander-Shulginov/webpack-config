
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

  const config: webpack.Configuration = {

    mode: env.mode ?? 'development',

    entry: path.resolve(__dirname, 'src/ts', 'index.ts'),

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.[contenthash].js',
      clean: true,
    },

    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      })
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
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

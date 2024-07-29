import path from "path";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

  const isDev = options.mode === 'development';

  const svgLoader = {
    test: /\.svg$/,
    type: 'asset/resource',
    generator: {
      filename: path.join('icons', '[name].[contenthash:5][ext]'),
    }
  }

  const imgLoader = {
    test: /\.(png|jpg|jpeg|webp|avif|svg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: path.join('img', '[name].[contenthash:5][ext]'),
    }
  }

  const htmlLoader = {
    test: /\.html$/,
    rules: [
      {
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },

          }
        ]
      }
    ]
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    }]
  }

  return [
    htmlLoader,
    svgLoader,
    imgLoader,
    scssLoader,
    tsLoader,
  ]
}

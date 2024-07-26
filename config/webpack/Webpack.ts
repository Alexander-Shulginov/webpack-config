import webpack from 'webpack';
import { BuildOptions } from './types/types';
import { buildDevServer } from './DevServer';
import { buildLoaders } from './Loaders';
import { buildPlugins } from './Plugins';
import { buildResolvers } from './Resolvers';

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',

    entry: paths.entry,

    output: {
      path: paths.output,
      filename: 'bundle.[contenthash:8].js',
      clean: true,
    },

    plugins: buildPlugins(options),

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    devtool: isDev && 'inline-source-map',

    devServer: isDev ? buildDevServer(options) : undefined,
  }
}


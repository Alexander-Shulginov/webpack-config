import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/webpack/Webpack';
import { BuildMode, BuildPaths } from './config/webpack/types/types';


interface EnvVar {
  port: number;
  mode: BuildMode;
  analyzer?: boolean;
}

export default (env: EnvVar) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src/ts', 'index.ts'),
    output: path.resolve(__dirname, 'build'),
    assets: path.resolve(__dirname, 'src/assets'),
    html: path.resolve(__dirname, 'src', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 9000,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    paths,
  });

  return config;

}

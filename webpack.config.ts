import webpack from 'webpack';
import path from 'path';
import { buildWebpack } from './config/webpack/Webpack';
import { BuildMode, BuildPaths } from './config/webpack/types/types';


interface EnvVar {
  port: number;
  mode: BuildMode;
}

export default (env: EnvVar) => {

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src/ts', 'index.ts'),
    html: path.resolve(__dirname, 'src', 'index.html'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;

}

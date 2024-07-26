import webpack from 'webpack';
import path from 'path';
import { buildWebpack } from './config/build/buildWepback';
import { BuildMode, BuildPaths } from './config/build/types/types';


interface EnvVar {
  mode: BuildMode;
  port: number;
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

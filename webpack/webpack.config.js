import { merge } from 'webpack-merge';
import commonConfig from './webpack.common.js';

export default async (envVars) => {
  const { env } = envVars;
  const envConfig = await import(`./webpack.${env}.js`);
  return merge(commonConfig, envConfig.default);
};

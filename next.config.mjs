import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
 await setupDevPlatform();
}

const nextConfig = {
 webpack(config) {
  const fileLoaderRule = config.module.rules.find((rule) =>
   rule.test?.test?.('.svg')
  );

  config.module.rules.push(
   {
    ...fileLoaderRule,
    test: /\.svg$/i,
    resourceQuery: /url/, // *.svg?url
   },
   {
    test: /\.svg$/i,
    issuer: fileLoaderRule.issuer,
    resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
    use: ['@svgr/webpack'],
   }
  );

  fileLoaderRule.exclude = /\.svg$/i;

  return config;
 },
};

export default nextConfig;

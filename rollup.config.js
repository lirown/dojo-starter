import { createSpaConfig } from '@open-wc/building-rollup';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import replace from '@rollup/plugin-replace';
import { babel } from '@rollup/plugin-babel';
import { copy } from '@web/rollup-plugin-copy';

import merge from 'deepmerge';
import { black, blue } from 'chalk';

let DIST_PATH = 'server/dist/';
if (process.env.GIT_HASH) {
  DIST_PATH = 'server/dist/deploy-preview-' + process.env.GIT_HASH;
}

const workboxConfig = {
  mode: 'production',
  sourcemap: false,
  globDirectory: DIST_PATH,
  runtimeCaching: [
    {
      urlPattern: 'images/**/*',
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        }
      }
    }
  ],
  navigateFallback: 'index.html',
  skipWaiting: false,
  clientsClaim: false
};

const config = merge(
  createSpaConfig({
    outputDir: DIST_PATH,
    legacyBuild: true,
    developmentMode: process.env.ROLLUP_WATCH === 'true',
    workbox: workboxConfig,
    injectServiceWorker: true
  }),
  {
    input: 'index.html',
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify('production')
        }
      }),
      ...(process.env.NODE_ENV
        ? [
            replace({
              preventAssignment: true,
              include: 'src/**/*.js',
              exclude: 'src/config.*.js',
              delimiters: ['', ''],
              values: {
                './config': `./config.${process.env.NODE_ENV}`
              }
            }),
            replace({
              include: 'index.html',
              delimiters: ['', ''],
              values: {
                'GIT_HASH': `${process.env.GIT_HASH || ''}`
              }
            })
          ]
        : []),
      copy({
        // Copy all the static files
        patterns: [
          'images/**/*',
          'manifest.webmanifest',
          '404.html',
          'robots.txt',
          'index.css'
        ]
      })
    ]
  }
);

console.log(`${black.bgWhite(' Build information'.padEnd(60, ' '))}

${blue('Name')}                   ${process.env.npm_package_name}
${blue('Environment')}            ${process.env.NODE_ENV || 'development'}
${blue('Version')}                ${process.env.npm_package_version}`);

export default config;

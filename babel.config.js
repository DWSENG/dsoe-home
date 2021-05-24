// this file tells babel how to be configured
module.exports = {
  presets: [
    '@babel/preset-env',
    /* dont need to import react when only using jsx (react 17+) */
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [['@babel/transform-runtime']],
}

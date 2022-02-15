module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            api: './src/api',
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            navigators: './src/navigators',
            protos: './src/protos',
            screens: './src/screens',
            utility: './src/utility',
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  }
}

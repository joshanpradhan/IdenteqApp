import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    roboto: require('assets/fonts/Roboto-Regular.ttf'),
    robotoSemibold: require('assets/fonts/Roboto-Light.ttf'),
    robotoBold: require('assets/fonts/Roboto-Bold.ttf'),
    robotoMedium: require('assets/fonts/Roboto-Medium.ttf'),
  });
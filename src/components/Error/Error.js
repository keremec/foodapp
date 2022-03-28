import React from 'react';
import LottieView from 'lottie-react-native';
import { Button, View } from "react-native";

export default function Error({ onClickTest }) {
  return (
    <View style={{flex:1}}>
    <LottieView
      source={require('../../../assets/animations/error.json')}
      autoPlay
      loop={false}
    />
    <Button onPress={onClickTest} title={"Test"}/>
    </View>
  );
}

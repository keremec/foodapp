import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

export default function Error() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/animations/error.json')}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
  animation: {
    height: '50%',
    width: '90%',
  },
});

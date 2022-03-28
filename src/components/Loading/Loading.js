import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.animation}>
        <LottieView
          source={require('../../../assets/animations/loading.json')}
          autoPlay
        />
      </View>
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

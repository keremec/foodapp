import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, Text, View} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>Cooking1 //TODO </Text>

      <View style={{height:'50%', width:'90%'}}>
        <LottieView
          source={require('../../../assets/animations/loading.json')}
          autoPlay
        />
      </View>
      <Text>Cooking2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
});

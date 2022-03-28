import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              title: 'Categories',
              headerStyle: {
                backgroundColor: '#af4448',
              },
              headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Meals"
            component={Meals}
            options={{
              title: 'Meals',
              headerStyle: {
                backgroundColor: '#ffa4a2',
              },
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: 'Detail',
              headerStyle: {
                backgroundColor: '#ffcccb',
              },
              headerTintColor: '#000',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

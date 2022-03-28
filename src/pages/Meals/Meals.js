import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './Meals.style';
import Config from 'react-native-config';
import useFetch from '../../hooks';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealCard from '../../components/MealCard';

export default function Meals({route, navigation}) {
  const url = Config.API_CATEGORY_FILTER_URL + route.params.categoryName;
  const {data, error, loading} = useFetch(url);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }

  function handleMeal(idMeal) {
    navigation.navigate('Detail', {idMeal});
  }

  const meals = data.meals;
  const renderItem = ({item}) => (
    <MealCard meal={item} onSelect={() => handleMeal(item.idMeal)} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={meals}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
    </View>
  );
}

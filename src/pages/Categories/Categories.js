import React from 'react';
import {FlatList, View} from 'react-native';
import useFetch from '../../hooks';
import Config from 'react-native-config';
import styles from './Categories.style';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

export default function Categories({navigation}) {
  const {data, error, loading} = useFetch(Config.API_CATEGORY_URL);

  const handleCategoryName = categoryName => {
    navigation.navigate('Meals', {categoryName});
  };

  const renderItem = ({item}) => (
    <CategoriesCard
      onSelect={() => handleCategoryName(item.strCategory)}
      category={item}
    />
  );

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

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={data.categories}
        keyExtractor={item => item.idCategory.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

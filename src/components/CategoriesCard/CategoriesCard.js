import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoriesCard.style';
export default function CategoriesCard({category, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
        <Text style={styles.category}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

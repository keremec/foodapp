import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './DetailCard.style';
export default function DetailCard({data}) {
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />

        <View style={styles.cardInstruction}>
          <Text style={styles.mealName}>{data.meals[0].strMeal}</Text>
          <Text style={styles.mealArea}>{data.meals[0].strArea}</Text>
          <Text style={styles.mealInstructions}>
            {data.meals[0].strInstructions}
          </Text>
        </View>
      </ScrollView>
      <TouchableWithoutFeedback

        onPress={() => {
          Linking.openURL(data.meals[0].strYoutube);
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

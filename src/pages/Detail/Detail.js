import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import DetailCard from '../../components/DetailCard/DetailCard';
import {View} from 'react-native';

export default function Detail({route}) {
  const {data, loading, error} = useFetch(
    Config.API_MEAL_FILTER_BY_ID_URL + route.params.idMeal,
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
        <Error props={error} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <DetailCard data={data} />
    </View>
  );
}

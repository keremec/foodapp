import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: '300',
    fontSize: 20,
    backgroundColor: '#af4448',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 6,
    overflow: 'hidden',
    borderRadius: 25,
  },
  top: {
    flex: 1,
  },
});

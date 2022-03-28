import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#ffcdd2',
    borderRadius: 25,
  },
  image: {
    resizeMode: 'cover',
    height: Dimensions.get('screen').height / 2.5,
    borderRadius: 25,
  },
  mealName: {
    fontSize: 35,
    color: '#af4448',
    marginLeft: 8,
    paddingTop: 2,
  },
  mealArea: {
    fontSize: 20,
    color: '#af4448',
    marginLeft: 8,
    paddingBottom: 10,
  },
  cardInstruction: {
    backgroundColor: '#ffcdd2',
    borderRadius: 25,
    padding: 10,
  },
  mealInstructions: {
    marginLeft: 8,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  button_deactivate: {
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal: 25,
    marginTop: 10,
    marginBottom: 25,
    borderRadius: 10,
  },
  buttonText_deactivate: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

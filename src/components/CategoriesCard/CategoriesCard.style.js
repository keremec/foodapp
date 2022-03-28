import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#af4448',
    backgroundColor: '#ffcccb',
    marginBottom: 10,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'contain',
    backgroundColor: '#af4448',
  },
  category: {
    fontSize: 20,
    marginLeft: 20,
    alignItems: 'flex-start',
    fontWeight: '300',
    color: 'black',
  },
});

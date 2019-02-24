import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderWidth: 2,
    backgroundColor: '#AAAAAA',
    // alignItems: 'stretch',
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
  },
  hr: {
    margin: 5,
    backgroundColor: 'black',
    height: 5,
  },
  author: {
    fontSize: 20,
    alignSelf: 'flex-end',
  },
  message: {
    fontSize: 15,
    textAlign: 'justify',
    alignSelf: 'stretch',
  },
});

export default styles;

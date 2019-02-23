import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  head: {
    padding: 20,
    margin: 20,
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: '#F5FC00',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    margin: 20,
    alignSelf: 'stretch',
  },
});

export default styles;

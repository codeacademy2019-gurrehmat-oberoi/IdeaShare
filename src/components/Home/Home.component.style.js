import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  head: {
    padding: 20,
    margin: 20,
    flex: 1,
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    margin: 20,
    alignSelf: 'stretch',
  },
});

export default styles;

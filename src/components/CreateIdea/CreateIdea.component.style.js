import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15,
    // top: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 10,
    margin: 6,
    fontSize: 18,
  },
  idea: {
    alignSelf: 'stretch',
    // height: 400,
    borderWidth: 1,
    fontSize: 18,
    margin: 10,
    padding: 10,
  },
});

export default styles;

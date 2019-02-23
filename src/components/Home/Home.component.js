import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, Button,
} from 'react-native';
import styles from './Home.component.style';

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>IdeaShare</Text>
          <Text style={styles.subtitle}>A global Ideas Platform</Text>
        </View>
        <View style={styles.buttonGroup}>
          <Button
            style={styles.button}
            title="Explore"
          />
          <Button
            style={styles.button}
            title="Create"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

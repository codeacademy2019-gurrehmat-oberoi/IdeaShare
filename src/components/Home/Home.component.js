import React, { Component } from 'react';
import {
  SafeAreaView, View, Text, Button,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Home.component.style';

class Home extends Component {
  handleCreatePress= () => {
    const { navigation } = this.props;
    navigation.navigate('CreateIdeaPage');
  }

  handleExplorePress=() => {
    const { navigation } = this.props;
    navigation.navigate('ExplorePage');
  }

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
            onPress={this.handleExplorePress}
          />
          <Button
            style={styles.button}
            title="Create"
            onPress={this.handleCreatePress}
          />
        </View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;

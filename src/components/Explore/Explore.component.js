import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import IdeaCard from '../IdeaCard/IdeaCard.component';
import styles from './Explore.component.style';

class Explore extends Component {
  // state= {
  //   ideas: [],
  // }

  render() {
    const { ideas } = this.props;
    const cards = ideas.map(({ title, author, message }) => (
      <IdeaCard
        title={title}
        author={author}
        message={message}
        key={title + message}
      />
    ));
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.pageTitle}>Explore All the Ideas Here...</Text>
        <ScrollView style={styles.scrollContainer}>
          {cards}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

Explore.propTypes = {
  ideas: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      message: PropTypes.string,
    }),
  ),
};

Explore.defaultProps = {
  ideas: [{
    title: 'Default Title',
    author: 'Default Author',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Default Title',
    author: 'Default Author',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Default Title',
    author: 'Default Author',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }],
};

export default Explore;

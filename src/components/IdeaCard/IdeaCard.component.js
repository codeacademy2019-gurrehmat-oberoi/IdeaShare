import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './IdeaCard.component.style';

class IdeaCard extends Component {
  render() {
    const {
      title,
      author,
      message,
    } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.hr} />
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }
}

IdeaCard.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  message: PropTypes.string,
};

IdeaCard.defaultProps = {
  title: 'Default Title',
  author: 'Default Author',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

export default IdeaCard;

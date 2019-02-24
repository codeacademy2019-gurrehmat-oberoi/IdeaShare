import React, { Component } from 'react';
import {
  TextInput,
  Text,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './CreateIdea.component.style';

class CreateIdea extends Component {
  state = {
    title: '',
    author: '',
    message: '',
  };

  handleTitleChange = title => this.setState({ title });

  handleAuthorChange = author => this.setState({ author });

  handleMessageChange = message => this.setState({ message });

  handleButtonPress = () => {
    this.setState({
      title: '',
      author: '',
      message: '',
    });
    this.props.navigation.navigate('Home');
  }

  render() {
    const { title, author, message } = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={100} style={styles.container}>
            <Text style={styles.title}>Create a Post!</Text>
            <TextInput placeholder="Idea Title" style={styles.textInput} onChangeText={this.handleTitleChange} value={title} />
            <TextInput placeholder="Author name (Optional)" style={styles.textInput} onChangeText={this.handleAuthorChange} value={author} />
            <TextInput placeholder="Start your idea here..." multiline style={styles.idea} onChangeText={this.handleMessageChange} value={message} />
            <View style={styles.button}>
              <Button title="Submit" onPress={this.handleButtonPress} />
            </View>
          </KeyboardAvoidingView>

        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

export default CreateIdea;

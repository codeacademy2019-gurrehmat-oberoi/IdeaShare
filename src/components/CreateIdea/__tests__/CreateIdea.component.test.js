import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CreateIdea from '../CreateIdea.component';

describe('CreateIdea', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<CreateIdea />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change state title when its handler is called', () => {
    const wrapper = shallow(<CreateIdea />);
    const initialTitle = wrapper.instance().state.title;
    expect(initialTitle).toEqual('');
    wrapper.instance().handleTitleChange('test1');
    expect(wrapper.instance().state.title).toEqual('test1');
  });

  it('should change state author when its handler is called', () => {
    const wrapper = shallow(<CreateIdea />);
    const initialAuthor = wrapper.instance().state.author;
    expect(initialAuthor).toEqual('');
    wrapper.instance().handleAuthorChange('test2');
    expect(wrapper.instance().state.author).toEqual('test2');
  });

  it('should change state message when its handler is called', () => {
    const wrapper = shallow(<CreateIdea />);
    const initialMessage = wrapper.instance().state.title;
    expect(initialMessage).toEqual('');
    wrapper.instance().handleMessageChange('test3');
    expect(wrapper.instance().state.message).toEqual('test3');
  });
  it('should set state variables to empty when button is pressed', () => {
    const wrapper = shallow(<CreateIdea />);
    wrapper.instance().handleTitleChange('testTitle');
    wrapper.instance().handleAuthorChange('testAuthor');
    wrapper.instance().handleMessageChange('testMessage');
    expect(wrapper.instance().state).toEqual({
      title: 'testTitle',
      author: 'testAuthor',
      message: 'testMessage',
    });
    wrapper.instance().handleButtonPress();
    expect(wrapper.instance().state).toEqual({
      title: '',
      author: '',
      message: '',
    });
  });
});

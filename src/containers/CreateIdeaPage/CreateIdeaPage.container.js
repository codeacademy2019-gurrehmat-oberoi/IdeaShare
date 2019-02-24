import { connect } from 'react-redux';
// import React, { Component } from 'react';
import CreateIdea from '../../components/CreateIdea/CreateIdea.component';
import { addIdeaAction } from '../../redux/actions';

// const mapStateToProps = state => ({ ideas: state.ideas });
const mapDispatchToProps = dispatch => ({
  addNewIdea: idea => dispatch(addIdeaAction(idea)),
});

export default connect(null, mapDispatchToProps)(CreateIdea);

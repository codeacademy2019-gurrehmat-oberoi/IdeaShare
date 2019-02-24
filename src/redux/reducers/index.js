import { combineReducers } from 'redux';
import { ADD_IDEA } from '../actions';

const ideas = (state = [], action) => {
  switch (action.type) {
    case ADD_IDEA:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default combineReducers({ ideas });

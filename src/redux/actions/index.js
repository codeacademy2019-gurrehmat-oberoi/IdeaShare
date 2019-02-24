export const ADD_IDEA = 'ADD_IDEA';

export const addIdeaAction = ({ title, author, message }) => ({
  type: ADD_IDEA,
  payload: {
    title,
    author,
    message,
  },
});

import { PUSH_NEW_USER, REMOVE_USER } from '../ation-types';

export const addNewUser = (data) => (
  (dispatch) => (
    dispatch({
      type: PUSH_NEW_USER,
      data,
    })
  )
);

export const removeUser = (data) => (
  (dispatch) => (
    dispatch({
      type: REMOVE_USER,
      data,
    })
  )
);

import { PUSH_NEW_USER, REMOVE_USER } from '../ation-types/index';

const defaultState = {
  users: [
    { name: 'John Smith', dateOfBirth: 'Jan 2, 1990' },
    { name: 'Bill Johnson', dateOfBirth: 'Sep 12, 2001' },
  ],
};

const liveExample = (state = defaultState, action) => {
  switch (action.type) {
    case PUSH_NEW_USER: {
      return { ...state, users: [...state.users, action.data] };
    }

    case REMOVE_USER: {
      return { ...state, users: action.data };
    }

    default: {
      return state;
    }
  }
}

export default liveExample;

export const Basic = `import { createStore } from 'redux';
/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()));

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' });
// {value: 1}
store.dispatch({ type: 'counter/incremented' });
// {value: 2}
store.dispatch({ type: 'counter/decremented' });
// {value: 1}`;

export const ReduxStore = `// Redux store entry
import { createStore, combineReducers } from 'redux';
import AppRoot from './app'; // entry point of app

const defaultState = {
  name: 'react-app',
  version: '1.0.0'
};

const appReducer = (state = defaultState, actions) => {
  return state;
};

const REDUCERS = combineReducers({ appReducer });
const STORE = createStore(REDUCERS);

ReactDOM.render(
  <AppRoot store={STORE}/>,
  document.getElementById('react-app')
);`;

export const Actions = `// actions:
{ type: 'CHANGE_APP_NAME', name: 'react-app-changed' }
{ type: 'CHANGE_APP_VERSION', name: '1.0.1' }
{ type: 'SET_APP_OFFLINE', value: true }`;

export const ReduxActions = `// action functions
export const onChangeAppName = (name) => ({
  type: 'CHANGE_APP_NAME',
  data: name,
});

export const onChangeVersion = (value) => ({
  type: 'CHANGE_APP_VERSION',
  data: value,
});

export const onSetAppMode = (value) => ({
  type: 'SET_APP_OFFLINE',
  data: value,
});
`;

export const Reducers = `import { combineReducers } from 'redux';

const app = (state , actions) => {
  return state;
};

const dashboard = (state , actions) => {
  return state;
};

const analytics = (state , actions) => {
  return state;
};

export default combineReducers({
  app,
  dashboard,
  analytics,
});
`;
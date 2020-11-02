export const ClassComponent =
`import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <p>
        My name is: {this.props.name}
      </p>
    );
  }
}

export default User;`;


export const FunctionComponent =
`import React from 'react';

const User = ({ name }) => (
  <p>
    My name is: {name}
  </p>
);

export default User;`

export const DomRender =
`import User from '../components/user'; // path to component

ReactDOM.render(
  <User name="Artem" />,
  document.getElementById('react-app')
);`

export const Mounting =
`import React from 'react';

class Mounting extends Component {
  static getDerivedStateFromProps(props, state) {
  }

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  }

  render() {
    return (
      <div>
        Mounting component
      </div>
    );
  }
}`;

export const Updating =
`import React from 'react';

class Updating extends Component {
  static getDerivedStateFromProps(props, state) {
  }
  
  getSnapshotBeforeUpdate() {
  }
  
  shouldComponentUpdate() {
    // should return true or false, default - return true 
  }
  
  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        Updating component
      </div>
    );
  }
}`;

export const Unmounting =
`import React from 'react';

class Updating extends Component {  
  componentWillUnmount () {
  }

  render() {
    return (
      <div>
        Unmounting component
      </div>
    );
  }
}`;

export const LifeCycleComponents = {
  mounting: Mounting,
  updating: Updating,
  unmounting: Unmounting,
}


const useState =
`import React, { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}`;

const useEffect =
`import React, { useEffect } from 'react';

function UseEffect() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('interval');
    }, 3000);
    
    return () => {
      // Clean up interval
      clearInterval(timer);
    };
  });

  return (
    <>
      <p>Use effect hook</p>
    </>
  );
}`;

const useContext =
`import React, { useContext } from 'react';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}`;

const useReducer =
`import React, { useEffect } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}`;

const useCallback =
`import React, { useCallback } from 'react';

function SomeComponent() {
  // e.g. shouldComponentUpdate
  const memoizedCallback = useCallback(() => {
    // doSomething(a, b);
  },[a, b]);

  return (
    <p>
      SomeComponent
    </p>
  );
}`;

const useMemo =
`import React, { useMemo } from 'react';

function SomeComponent() {
  const search = 'J';
  const users = [{ name: 'John' }, { name: 'Bill' }];
  
  const filteredUsers = useMemo(() => (
    users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [search])
  );
     
  return (
    <p>
      {
        filteredUsers.map(({ name }) => (
          <p key={name}>{name}</p>
        ))
      }
    </p>
  );
}`;

const useRef =
`import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`;

const useImperativeHandle =
`import React, { useRef, useImperativeHandle } from 'react';

function FancyInput(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} />;
}
FancyInput = forwardRef(FancyInput);`;

const useDebugValue =
`import React, { useDebugValue } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  useDebugValue(isOnline ? 'Online' : 'Offline');

  return isOnline;
}`;

export const ReactHooks = {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useDebugValue,
};

export const stateLessComponent =
`import React from 'react';

const MyStatelessComponent = () => (
  <div>
    Hello World!
  </div>
);`;

export const stateFullComponent =
`import React, { Component } from 'react';

class StateFullComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
        name: 'Artem'
      },
    };
  }

  render() {
    const { name } = this.state;
    
    return (
      <p>
        My name is: {name}
      </p>
    );
  }
}`;

export const HOC =
`import React, { Component } from 'react';
import { connect } from 'react-redux';

class HocExample extends Component {
  render(){
    const { users } = this.props;

    return (
      <ul>
        {
          users.map(({ name }) => (
            <li key={name}>
              { name }
            </li>
          ))
        }
      </ul>
    )
  }
}

// users from redux-store
const matStateToProps = ({ users }) => ({
  users,
});

export default connect(matStateToProps)(HocExample);`

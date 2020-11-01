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
`// useState();
import React, { useState } from 'react';

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
`// useEffect();
import React, { useEffect } from 'react';

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
`// useContext()
import React, { useContext } from 'react';

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

export const ReactHooks = {
  useState,
  useEffect,
  useContext,
}
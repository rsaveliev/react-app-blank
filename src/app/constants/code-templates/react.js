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

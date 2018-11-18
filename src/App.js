import React, { Component } from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';

class App extends Component {
  render() {
    return (
      <main>
        <HeaderContainer />
        <ListContainer />
      </main>
    );
  }
}

export default App;

import React, { Component } from 'react';

import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import PreloaderContainer from './containers/PreloaderContainer';
import ErrorContainer from './containers/ErrorContainer';

class App extends Component {
  render() {
    return (
      <main>
        <HeaderContainer />
        <PreloaderContainer />
        <ErrorContainer />
        <ListContainer />
      </main>
    );
  }
}

export default App;

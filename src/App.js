import React from 'react';



import HeaderContainer from './containers/HeaderContainer';
import ListContainer from './containers/ListContainer';
import PreloaderContainer from './containers/PreloaderContainer';
import ErrorContainer from './containers/ErrorContainer';

const App = () => {
    return (
      <main className="App" >
        <HeaderContainer />
        <PreloaderContainer />
        <ErrorContainer />
        <ListContainer />
      </main>
    );
}

export default App;

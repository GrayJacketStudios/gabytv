import React from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from './store/reducers';

import Home from './views/Home';
import NavbarMenu from './components/NavbarMenu';
import AddContent from './views/AddContent';


function App() {
  const { viewReducer }: { viewReducer: ViewState }  = useSelector((state: RootState) => state, shallowEqual);

  const checkCurrentView = () => {
    switch (viewReducer.currentPage) {
      default:
      case 'home':
        return <Home />;
      case 'addContent':
        return <AddContent />
    }
  };


  return (
    <>
      <NavbarMenu />
      {checkCurrentView()}
    </>
  );
}

export default App;

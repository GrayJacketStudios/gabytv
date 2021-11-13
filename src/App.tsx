import React from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from './store/reducers';

import Home from './views/Home';
import NavbarMenu from './components/NavbarMenu';
import AddContent from './views/AddContent';
import SingleContent from './views/SingleContent';
import UpdateContent from './views/UpdateContent';


function App() {
  const { viewReducer }: { viewReducer: ViewState }  = useSelector((state: RootState) => state, shallowEqual);

  const checkCurrentView = () => {
    switch (viewReducer.currentPage) {
      default:
      case 'home':
        return <Home />;
      case 'addContent':
        return <AddContent />
      case 'singleContent':
        return <SingleContent />
      case 'editContent':
        return <UpdateContent />
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

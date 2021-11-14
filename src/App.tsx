import React from 'react';

import { shallowEqual, useSelector } from 'react-redux';
import { RootState } from './store/reducers';

import Home from './views/Home';
import NavbarMenu from './components/NavbarMenu';
import AddContent from './views/AddContent';
import SingleContent from './views/SingleContent';
import UpdateContent from './views/UpdateContent';
import DeleteContent from './views/DeleteContent';
import ContentType from './views/ContentType';


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
      case 'deleteContent':
        return <DeleteContent />
      case 'viewFilms':
        return <ContentType.Films />
      case 'viewSeries':
        return <ContentType.Series />
      case 'viewPrograms':
          return <ContentType.Programs />
      case 'viewCSpots':
        return <ContentType.CommercialSpots />
      case 'viewSearchResult':
        return <ContentType.SearchContent />
    }
  };


  return (
    <div style={{backgroundColor: viewReducer?.displaySettings?.backgroundColor}}>
      <NavbarMenu />
      {checkCurrentView()}
    </div>
  );
}

export default App;

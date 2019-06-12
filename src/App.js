import React from 'react';
import './App.css';
import ItemsContainer from './containers/ItemsContainer';
import PaginationContainer from './containers/PaginationContainer';
import SearchItemContainer from './containers/SearchItemContainer';
import AddItemContainer from './containers/AddItemContainer';
import LoaddingContainer from './containers/LoaddingContainer';

function App() {
  return (
    <React.Fragment>
     {/* start loadding */}
     <LoaddingContainer />
     {/* end loadding */}

    <div className="App">
      <div className="container mt-5">
        <div className="row">
          {/* col-left */}
          <div className="col-5">
            {/* start items */}
            <ItemsContainer />
            {/* end items */}
            {/* start pagination  */}
            <PaginationContainer />
            {/* end pagination */}
          </div>
          {/* end col-left */}
          {/* col-right */}
          <div className="col-4">
            {/* add item */}
            <AddItemContainer />
            {/* end add item */}
            {/* search item */}
            <SearchItemContainer />
            {/* end search item */}
          </div>
          {/* end col-right */}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;

import React from 'react';
import CytoscapeWrapper from './components/cytoscape/cytoscape-wrapper.component';
import Details from './components/details/details.component';


const App = () => {
  return (
    <div id="mainWrap">
      <div id="left">
        <CytoscapeWrapper />
      </div>
      <div id="right">
        <Details />
      </div>
    </div>
  );
};

export default App;

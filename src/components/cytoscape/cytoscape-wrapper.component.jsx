import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAllData } from '../../redux/store';
import CytoscapeComponent from 'react-cytoscapejs';

import TopSection from './top-section.component';
import { TYPES } from '../../constants/app.constants';
import { data } from './wrapper-data';
import { convertEdgesCollection } from '../../utils/data.utils';


const CytoscapeWrapper = () => {
  const [, setCyto] = useState(null);
  const [zoom, setZoom] = useState(1);
  const cytoscapeRef = useRef();
  const dispatch = useDispatch();

  const elements = CytoscapeComponent.normalizeElements(data);

  const handleNodeClick = useCallback((n) => {
    const data = n.target.data();
    const edges = convertEdgesCollection(n.target.connectedEdges());

    dispatch(setAllData({ data, edges, type: TYPES.NODE }));
  }, [dispatch]);

  const handleEdgeClick = useCallback((n) => {
    const data = n.target.data();
    const edges = null;

    dispatch(setAllData({ data, edges, type: TYPES.EDGE }));
  }, [dispatch]);

  const handleSetCytoscapeRef = (cScape) => {
    if (!cytoscapeRef.current) {
      setCyto(cScape);
      cScape.nodes().on('click', handleNodeClick);
      cScape.edges().on('click', handleEdgeClick);
    }
    cytoscapeRef.current = cScape;
  };

  const handleZoomIn = useCallback(() => {
    if (zoom < 2) {
      setZoom((prevState) => prevState + 0.25);
    }
  }, [zoom]);

  const handleZoomOut = useCallback(() => {
    if (zoom > 0.25) {
      setZoom((prevState) => prevState - 0.25);
    }
  }, [zoom]);

  const handleZoomReset = useCallback(() => {
    setZoom(1);
  }, []);


  return (
    <>
      <TopSection
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onZoomReset={handleZoomReset}
      />
      <CytoscapeComponent
        id="csc"
        ref={cytoscapeRef}
        elements={elements}
        zoom={zoom}
        minZoom={0.25}
        maxZoom={2}
        cy={handleSetCytoscapeRef}
      />
    </>
  );
};

export default CytoscapeWrapper;

import React from 'react';


const TopSection = ({ onZoomIn, onZoomOut, onZoomReset, zoom }) => {
  const handleZoomIn = () => {
    if (onZoomIn) onZoomIn();
  }

  const handleZoomOut = () => {
    if (onZoomOut) onZoomOut();
  }

  const handleZoomReset = () => {
    if (onZoomReset) onZoomReset();
  }


  return (
    <div id="top-row">
      <button onClick={handleZoomIn}>+</button>
      <button onClick={handleZoomOut}>–</button>
      <button onClick={handleZoomReset}>reset</button>
      <div>x{zoom}</div>
    </div>
  )
}

export default TopSection;

import React from 'react';
import { useSelector } from 'react-redux';
import { showData } from '../../utils/data.utils';


const Details = () => {
  const { data, edges, type } = useSelector((state) => state.appNode);


  return (
    <div id="detailsWrapper">
      {type ? (
        <>
          <strong>{type.toUpperCase()}</strong>
          <div className="spacer"></div>
        </>
      ) : ''}
      {showData(data, edges, type)}
    </div>
  );
};

export default Details;

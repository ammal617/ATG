import React from "react";
import MoreInfo from '../container/MoreInfo';
const Results = props => {
  return (
    <div>
      {props.results.map(item => (
        <div key={item.id}>
          <MoreInfo id={item.id} totalToWin={item.totalToWin} startTime={item.startTime} tracks={item.tracks} availableInfo={true}/>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default Results;

import React from "react";
import MoreInfo from "../container/MoreInfo";
const Upcoming = props => {
  return (
    <div>
      {props.upcoming.map(item => (
        <div key={item.id}>
          <MoreInfo
            id={item.id}
            startTime={item.startTime}
            tracks={item.tracks}
            availableInfo={false}
          />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Upcoming;

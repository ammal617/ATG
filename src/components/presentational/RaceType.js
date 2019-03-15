import React from "react";
import MoreRaceInfo from "./MoreRaceInfo";
const RaceType = props => {
  return (
    <div>
      {props.races.map(item => (
        <div key={item.id}>
          <MoreRaceInfo
            id={item.id}
            startTime={item.startTime}
            starts={item.starts}
            name={item.name}
          />
          <br/>
        </div>
      ))}
    </div>
  );
};

export default RaceType;

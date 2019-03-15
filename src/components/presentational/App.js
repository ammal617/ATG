import React, { Component } from "react";
import GameType from "../container/Gametype";
import Atg from "../../atg.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, #002db3, #809fff)",
            minHeight: "200px"
          }}
        >
          <img src={Atg} alt="" style={{ width: "300px", marginLeft: "40%" }} />
        </div>
        <div>
          <GameType />
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import axios from "axios";
import RaceType from "../presentational/RaceType";

class ResultsInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      id: "",
      races: [],
      status: ""
    };
  }
  getResult = e => {
    e.preventDefault();
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.atg.se/services/racinginfo/v1/api/games/${
      this.props.id
    }`;
    axios.get(proxyurl + url).then(res => {
      this.setState({
        id: res.data.id,
        status: res.data.status,
        races: res.data.races,
        isOpen: !this.state.isOpen
      });
      console.log(res.data);
    }).catch(error=> console.log(error))
  };
  render() {
    return (
      <div>
        <button onClick={this.getResult} style={{ width: "140px" }}>
          {this.props.id}
        </button>
        {this.state.isOpen ? (
          <RaceType
            races={this.state.races}
            id={this.state.id}
            status={this.state.status}
          />
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ResultsInfo;

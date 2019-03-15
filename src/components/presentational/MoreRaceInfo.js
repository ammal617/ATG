import React from "react";
import StartMoreInfo from "./StartMoreInfo";
import Paper from "@material-ui/core/Paper";
class MoreRaceInfo extends React.Component {
  state = { isOpen: false };
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            width: "140px",
            backgroundColor: "#DCDCDC",
            borderRadius: "12px"
          }}
        >
          {this.props.id}
        </button>
        {this.state.isOpen ? (
          <div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #002db3, #809fff)"
              }}
            >
              <li>Start Time: {this.props.startTime}</li>
              <li>Race: {this.props.name}</li>
            </div>
            {this.props.starts.map(item => (
              <div key={item.number}>
                <Paper elevation={2}>
                  <br />
                  <li>Number: {item.number}</li>
                  <li>Horse: {item.horse.name}</li>
                  <li>Driver/Rider: {item.driver.firstName}</li>
                  <br />
                  <StartMoreInfo startInfo={item} />
                </Paper>
                <br />
              </div>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default MoreRaceInfo;

import React from "react";

class Start extends React.Component {
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
            backgroundColor: "#809fff",
            borderRadius: "12px"
          }}
        >
          More information
        </button>
        {this.state.isOpen ? (
          <div>
            <li>Driver lastname: {this.props.startInfo.driver.lastName}</li>
            <li>Horse fathers : {this.props.startInfo.horse.pedigree.father.name}</li>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Start;

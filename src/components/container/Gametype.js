import React from "react";
import axios from "axios";
import GameTypeForm from "../presentational/GameTypeForm";
import ReactLoading from 'react-loading';
import Upcoming from '../presentational/Upcoming';
import Results from '../presentational/Results';

export default class GameType extends React.Component {
  state = {
    gameType: null,
    results: [],
    upcoming: [],
    isLoading: false,
    error: false
  };
  getResult = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    const search = e.target.elements.atg.value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://www.atg.se/services/racinginfo/v1/api/products/${search}`;
    axios.get(proxyurl + url).then(res => {
      this.setState({
        gameType: res.data.betType,
        results: res.data.results,
        upcoming: res.data.upcoming,
        isLoading: false,
        error: false
      });
      console.log(res.data);
    })
    .catch(error=>{this.setState({error:true})})
  };

  render() {
    return (
      <div style={{textAlign:'center'}}>
        <GameTypeForm getSearch={this.getResult} />
        {this.state.error?(<h3>Invalid input please choose between V75, V65, V64, V4</h3>):(<div/>)}
        <div>
          {this.state.isLoading?(<div style={{marginLeft:'47%', marginTop:'5%'}}><ReactLoading type={"spin"} color={"red"} height={100} /> </div>):(<div/>)}
          {this.state.gameType ? (
            <div>
              <p>{this.state.gameType} </p>
              <p>Results</p>
              <Results results={this.state.results}/>
              <p>upcoming</p>
              <Upcoming upcoming={this.state.upcoming}/>
            </div>
          ) : (
            <p>Enter Game type</p>
          )}
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

class ProgressBarExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      percentage :0
    }
    this.changeProgress();
  }
  changeProgress(){
    var startProgress = new Date().getTime(),current;
    let divider = 3000/100;
    var timmer =  setInterval(function(){
          current = new Date().getTime();
          var val = Math.floor((current -startProgress)/divider);
          if(val <= 100){
              this.setState({
                percentage : (current -startProgress)/divider
              });
          }
          else{
              clearTimeout(timmer);
          }
    }.bind(this),10)
  }
  render() {
    return (
      <div className="App">
        <ProgressBar percentage={this.state.percentage} />
        <ProgressBar percentage={this.state.percentage} />
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}

export default ProgressBarExample;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './TooltipLiteFix/index.jsx';

class App extends React.Component  {
  render() {
    const state = {...this.state };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Tooltip
            followMouse={true}
            direction="down"
            content={<div>I am a tip</div>}>
              <div className="add-tooltip"
                style={{ 
                  backgroundColor: "#AAA",
                  color: "black",
                  borderRadius: 10,
                  padding: 10,
                  cursor: "context-menu",
                  }}>
                Hover this to see tooltip ...{"\n"}
                <a href="https://github.com/eskilwadsholt/react-tooltip-lite">github repo</a>
              </div>
          </Tooltip>
        </header>
      </div>
    );
  }
}

export default App;

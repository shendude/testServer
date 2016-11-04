import React from 'react';
import {render} from 'react-dom';
import request from 'browser-request';

import Upload from "./Upload.jsx";
import Draw from "./Draw.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shared: {
        file: null,
        data: null
      }
    }
  }
  
  update(data) {
    this.setState({shared: data})
  }
  
  render() {
    return (
      <div>
        <Upload update={this.update}/>
        <Draw update={this.update}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
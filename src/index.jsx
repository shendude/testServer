import React from 'react';
import {render} from 'react-dom';
import request from 'browser-request';


class App extends React.Component {
  uploadFile(e) {
    e.preventDefault();
    var photo = this.refs.photo.files[0];
    var formData = new FormData();
    formData.append("photo", photo);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:1337/upload");
    xhr.send(formData);
  }
  
  render() {
    return (
      <div>
        <div>Please upload a photo:</div>
        <form ref='uploadForm' id='uploadForm' encType="multipart/form-data">
          <input ref="photo" name="photo" type="file"/>
          <input ref="button" type='button' value='Upload!' onClick={this.uploadFile.bind(this)}/>
        </form>
      </div>
    );
  }
  
}

render(<App/>, document.getElementById('app'));
import React from "react";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shared: {
        file: null,
        data: null
      }
    }
  }
  
  uploadFile(e) {
    //prevent default button acton
    e.preventDefault();
    //get file object
    var photo = this.refs.photo.files[0];
    //create multipart form xhr request
    var formData = new FormData();
    formData.append("photo", photo);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:1337/upload");
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
              //receive vision api response as json string
                this.props.update({file: photo, data: JSON.parse(xhr.response)});
                console.log(xhr.response);
            }
        } else {
          console.log('error with xhr response');
        }
    };
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

export default Upload;
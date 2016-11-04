import React from 'react';

class Draw extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.updateCanvas();
  }
  
  updateCanvas() {
    var ctx = this.refs.canvas.getContext('2d');
    var file = this.props.data.file;
    var img = new Image;
    
    img.src = (window.URL ? URL : webkitURL).createObjectURL(file);
    img.onload = function() {
      
      console.log(img.height);
      console.log(img.width);
      ctx.drawImage(img, 0, 0, 500, 500);
    };
  }
  render() {
    console.log(this.props.data.file);
    return (
      <canvas ref="canvas" width={500} height={500}/>
    );
  }
}

export default Draw;
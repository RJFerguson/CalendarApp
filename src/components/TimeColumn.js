import React, { Component } from 'react';


class TimeColumn extends Component {
  constructor(props) {
  	super(props);

  }

  componentDidMount(){
    this.props.events(this.props.i)
  }

   setTime(){
      var time = new Date();
      if(this.props.i % 2 === 1){
        time.setHours(this.props.i/2, 30)
        time = time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});
        return time
      } else {
        time.setHours(this.props.i/2)
        time = time.toLocaleString('en-US', { hour: 'numeric', hour12: true});
        return time
      }
   }
      

  render() {
    return (
     <tr id={this.props.i} className="hourRow"> 
      <td>{this.setTime()}</td>
     </tr>


    )
  }
}

export default TimeColumn;

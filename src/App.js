import React, { Component } from 'react';
import './App.css';
import TimeColumn from './components/TimeColumn.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],
      appointments:[{name:"fun Event", st: "10:00", et: "11:00"},
      {name:"funish Event", st: "13:00", et: "16:00"},
      {name:"Even more fun event at the same time! Event", st: "10:00", et: "11:00"},
      {name:"another test event", st:"9:00", et: "10:00"},
      {name:"Even more more fun event at the same time!", st: "10:00", et: "11:00"}
    ]
    }

  }

 
  createEvents(i){    
    if ( i === 42){
      {this.state.appointments.map((eventObj) => this.myinsert(eventObj))}
    }
  }
 
   myinsert(eventObj) {
    var startHr = eventObj.st.split(":")[0] * 2 
    var endHr = eventObj.et.split(":")[0] * 2 
    var size = endHr - startHr
    var row = document.getElementById(`${startHr}`);
    var x = row.insertCell(1);
    x.innerHTML = eventObj.name +"<br>"+  eventObj.st + " - " + eventObj.et
    x.rowspan = size.to_s
    x.id ="checkColor"
    x.setAttribute('rowspan', `${size}`);
  }


  render() {
    return (
      <div >
        <table className="bordered">
        <thead>
        </thead>
        <tbody>    
            {this.state.hours.map((hour => <TimeColumn i={hour} events={this.createEvents.bind(this)} />))} 
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
    
  }

  componentDidMount(){
    axios.get('https://localhost:3005/students?class=${this.props.match.class}')
    .then(results => {
      this.state({students: results.data});
    });


  }

  render() {
    const students = this.state.students.map((student, i) => (
       <Link to={`/student/${student.id}`} key={i}>
        <h3>
            {student.first_name} {student.last_name}
        </h3>
       </Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}
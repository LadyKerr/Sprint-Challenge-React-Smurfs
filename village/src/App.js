import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
      activeSmurf: null
    };
  }

  //setState to display smuf from database(server)
  componentDidMount() {
    axios
    .get("http://localhost:3333/smurfs")
    .then(res => this.setState({ smurfs: res.data }))
    .catch( err => this.setState({ error: err }))
  }

  //postRequest to add new smurf to database(server)
  addSmurf = (smurf) => {
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => this.setState({ smurfs: res.data }))
    .catch( err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <SmurfForm addSmurf={this.addSmurf} />
        <SmurfList smurfData={this.state.smurfs} />
      </div>
    );
  }
}

export default App;

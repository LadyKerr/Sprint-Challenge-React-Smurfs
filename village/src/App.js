import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import SmurfForm from './components/SmurfForm';
import SmurfList from './components/SmurfList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: '',
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
        <Route path="/" component={NavBar} />
        <Route exact path="/smurf-form" render={(props) => <SmurfForm {...props} addSmurf={this.addSmurf} />} />
        <Route exact path="/" render={(props) => <SmurfList {...props} smurfData={this.state.smurfs} /> } />
      </div>
    );
  }
}

export default App;

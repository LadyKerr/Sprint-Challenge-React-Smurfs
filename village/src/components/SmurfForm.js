import React, { Component } from 'react';
import styled from 'styled-components';

const H2 = styled.h2 `
 color: #fd6280;
 text-decoration: underline;
 font-family: 'Staatliches', cursive;
`;

const Form = styled.form `
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
`;

const Input = styled.input `
  line-height: 35px;
  font-family: 'Staatliches', cursive;
`;

const Button = styled.button `
  margin: 24px;
  padding: 10px;
  color: #fd6280;
  background-color: #62cdfd;
  border-radius: 15px;
  font-size: 25px;
  font-family: 'Staatliches', cursive;
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <H2>Know a Smurf? Add a Smurf!</H2>
        <Form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;

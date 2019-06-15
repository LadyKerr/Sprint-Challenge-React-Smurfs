import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const H1 = styled.h1 `
  color: #fd6280;
  text-decoration: underline;
  font-family: 'Staatliches', cursive;
`;


class SmurfList extends Component {
  render() {
    return (
      <div className="Smurfs">
        <H1>Smurf Village</H1>
        <ul>
          {this.props.smurfData.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default SmurfList;

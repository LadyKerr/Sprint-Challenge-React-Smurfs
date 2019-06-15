import React from 'react';
import styled from 'styled-components';

const SmurfDiv = styled.div `
  border: 3px solid #fde062;
  border-radius: 10px;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #94ddfe;
  color: #ffffff;
`;

const H3 = styled.h3 `
  color: #fd6280;
  font-size: 25px;
`;

const Tall = styled.strong `
  font-size: 20px;
  color: #01425f;
`;

const Age = styled.p `
  font-size: 15px;
  color: #01425f;
`;

const Smurf = props => {
  return (
    <SmurfDiv>
      <H3>{props.name}</H3>
      <Tall>{props.height} tall</Tall>
      <Age>{props.age} smurf years old</Age>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;


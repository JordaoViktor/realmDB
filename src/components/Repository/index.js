import React from 'react';
import {Text} from 'react-native';
import {Container, Name, Description, Stats, Stat, StatCount} from './styles';

const Repository = ({data}) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Text>Stars:</Text>
          <StatCount>{data.stars}</StatCount>
        </Stat>
        <Stat>
          <Text>Forks:</Text>
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
};

export default Repository;

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Title, Form, Input, Submit} from './styles';

const Main = () => {
  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
        />
        <Submit onPress={() => {}}>
          <Title>+</Title>
        </Submit>
      </Form>
    </Container>
  );
};

export default Main;

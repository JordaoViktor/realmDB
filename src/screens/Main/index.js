import React from 'react';
import {Container, Title, Form, Input, Submit, List} from './styles';
import Repository from '../../components/Repository';

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
      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            id: 1,
            name: 'hello',
            description: 'world',
            stars: 1234,
            forks: 133,
          },
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Repository data={item} />}
      />
    </Container>
  );
};

export default Main;

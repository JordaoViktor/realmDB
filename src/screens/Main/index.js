import React, {useState} from 'react';
import {Container, Title, Form, Input, Submit, List} from './styles';
import Repository from '../../components/Repository';
import api from '../../services/api';
import getRealm from '../../services/realm';

const Main = () => {
  const [input, setInput] = useState('');

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Repository', data);
    });
  }
  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);
      setInput('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Repositórios</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
        />
        <Submit onPress={handleAddRepository}>
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

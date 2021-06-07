import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#333333', '#EFBB40'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  background-color: red;
  flex: 1;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const Form = styled.View``;
export const Input = styled.TextInput``;
export const Submit = styled.TouchableOpacity``;

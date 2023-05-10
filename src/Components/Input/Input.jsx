import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Constants';

const Input = ({ onhandleChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Write a Number</Text>
      <TextInput
        placeholder="0"
        style={styles.input}
        onChangeText={onhandleChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;

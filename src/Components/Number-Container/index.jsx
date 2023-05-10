import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Constants';

const NumberContainer = ({ number, onHandleStartGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

import { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { styles } from './styles';
import { Input, NumberContainer } from '../../Components';
import { theme } from '../../Constants';
import UseOrientation from '../../Hooks/UseOrientation';

const isAndroid = Platform.OS === 'android';

const StartGame = ({ onStartGame, onresetGame }) => {
  const [number, setNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const { isPortrait } = UseOrientation();

  const onhandleChangeText = (text) => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  const onHandleConfirm = () => {
    const chosenNumber = Number(number);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('invalid Number', 'Number should be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: () => setNumber('') },
      ]);
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setNumber('');
    }
  };

  const onHandleReset = () => {
    setNumber('');
    setConfirmed(false);
    setSelectedNumber(null);
    onresetGame();
  };

  const onHandleStartGame = () => {
    onStartGame(selectedNumber);
  };

  const Confirmed = () =>
    confirmed ? (
      <View style={isPortrait ? styles.confirmedContainer : styles.landscapeConfirmedContainer}>
        <Text>Selected Number</Text>
        <NumberContainer number={selectedNumber} onHandleStartGame={onHandleStartGame} />
        <Button title="Start Game" onPress={onHandleStartGame} color={theme.colors.primary} />
      </View>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Start Game!</Text>
          <Input onhandleChangeText={onhandleChangeText} value={number} />
          <View style={styles.buttonContainer}>
            <Button title="Reset" color={theme.colors.secondary} onPress={onHandleReset} />
            <Button
              title="Confirm"
              color={theme.colors.secondary}
              onPress={onHandleConfirm}
              disabled={number === ''}
            />
          </View>
          <Confirmed number={selectedNumber} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;

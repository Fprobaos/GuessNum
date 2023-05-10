import { useState } from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './styles';
import { NumberContainer } from '../../Components';
import { theme } from '../../Constants';

const Game = ({ userNumber }) => {
  // const [count, setCount] = useState('0');

  const generateRandomNumber = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    min = Math.ceil(min);
    max = Math.floor(max);
    if (randomNumber === exclude) {
      return generateRandomNumber(min, max, exclude);
    } else {
      return randomNumber;
    }
  };
  const minNumber = 1;
  const maxNumber = 99;
  const exclude = userNumber;

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minNumber, maxNumber, exclude)
  );

  // const onhandleNewGuess = (currentGuess, minNumber) => {
  //   const newGuess = Math.floor(Math.random() * (currentGuess - minNumber) + minNumber);
  //   minNumber = Math.ceil(minNumber);
  //   currentGuess = Math.floor(currentGuess);
  //   if (newGuess === exclude) {
  //     return console.warn('YOU WON');
  //   }

  //   setCurrentGuess(newGuess);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Guess the number</Text>
        <NumberContainer number={currentGuess} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Lower" color={theme.colors.primary} onPress={() => {}} />
        <Button title="Greater" color={theme.colors.primary} onPress={() => {}} />
      </View>
    </View>
  );
};

export default Game;

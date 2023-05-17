import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import { styles } from './styles';
import { NumberContainer } from '../../Components';
import { theme } from '../../Constants';

const minNumber = 1;
const maxNumber = 99;

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
const Game = ({ userNumber, onGameOver }) => {
  const [rounds, setRounds] = useState(0);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(minNumber, maxNumber, userNumber)
  );

  const currentLow = useRef(minNumber);
  const currentHigh = useRef(maxNumber);

  const onhandleNewGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      return Alert.alert('You trying to brake the game?');
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
      generateRandomNumber();
    } else {
      currentLow.current = currentGuess;
      generateRandomNumber();
    }
    const newGuess = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(newGuess);
    setRounds((activeRounds) => activeRounds + 1);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds);
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Guess the number</Text>
        <NumberContainer number={currentGuess} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Lower"
          color={theme.colors.primary}
          onPress={() => onhandleNewGuess('lower')}
        />
        <Button
          title="Greater"
          color={theme.colors.primary}
          onPress={() => onhandleNewGuess('greater')}
        />
      </View>
      <Text style={styles.rounds}> Attempts : {rounds}</Text>
    </View>
  );
};

export default Game;

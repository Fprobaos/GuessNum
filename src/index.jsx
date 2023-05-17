import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Header } from './Components';
import { theme } from './Constants';
import { Game, GameOver, StartGame } from './screens';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [roundAmount, setRoundAmount] = useState(0);
  const [title, setTitle] = useState('');
  const [loaded] = useFonts({
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.text} />;
  }
  const TitleOption = () => {
    if (!userNumber) {
      setTitle('Welcome!');
    }
    if (userNumber) {
      setTitle('Enjoy the game!');
    }
    if (roundAmount > 0) {
      setTitle('Game Over');
    }
    return <Header title={title} />;
  };

  const onStartGame = (number) => {
    setUserNumber(number);
  };
  const onGameOver = (rounds) => {
    setRoundAmount(rounds);
  };
  const onresetGame = () => {
    setRoundAmount(0);
    setUserNumber(null);
  };

  const Content = () => {
    if (userNumber && roundAmount <= 0) {
      return <Game userNumber={userNumber} onGameOver={onGameOver} />;
    }
    if (roundAmount > 0) {
      return (
        <GameOver onresetGame={onresetGame} roundAmount={roundAmount} userNumber={userNumber} />
      );
    } else {
      return <StartGame onStartGame={onStartGame} onresetGame={onresetGame} />;
    }
  };
  return (
    <View style={styles.container}>
      <TitleOption />
      <Content />
    </View>
  );
}

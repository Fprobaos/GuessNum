import { useFonts } from 'expo-font';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Header } from './Components';
import { theme } from './Constants';
import { Game, StartGame } from './screens';
import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [loaded] = useFonts({
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.text} />;
  }
  const headerTitle = userNumber ? 'Enjoy The Game!' : 'Welcome!';

  const onStartGame = (number) => {
    setUserNumber(number);
  };

  const Content = () =>
    userNumber ? <Game userNumber={userNumber} /> : <StartGame onStartGame={onStartGame} />;
  return (
    <View style={styles.container}>
      <Header title={headerTitle} />
      <Content />
    </View>
  );
}

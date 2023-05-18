import { Button, Image, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { theme } from '../../Constants';
import UseOrientation from '../../Hooks/UseOrientation';

const GameOver = ({ onresetGame, roundAmount, userNumber }) => {
  const { isPortrait } = UseOrientation();

  return (
    <ScrollView style={styles.container}>
      <View style={isPortrait ? styles.container : styles.landscapeContainer}>
        <Image
          style={isPortrait ? styles.image : styles.imagelandscape}
          source={{
            uri: 'https://media.istockphoto.com/id/1148824291/vector/game-over-typography-fashion-slogan.jpg?s=612x612&w=0&k=20&c=d0QV_NREq_8y6WPUym8gIvCO_K9JIn_LNePlqpLq46U=',
          }}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Your Number was {userNumber}</Text>
          <Text style={styles.title}>IA found your number in : {roundAmount} Rounds</Text>
          <Text style={styles.title}> Click on Button Below to restart the game !!</Text>
          <Button title="Play again" onPress={onresetGame} color={theme.colors.secondary} />
        </View>
      </View>
    </ScrollView>
  );
};

export default GameOver;

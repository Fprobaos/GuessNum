import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    marginHorizontal: 50,
  },
  confirmedContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmedTitle: {
    fontSize: 12,
  },
});

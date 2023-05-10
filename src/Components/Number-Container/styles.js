import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 10,
  },
  number: {
    fontSize: 20,
    color: theme.colors.white,
  },
});

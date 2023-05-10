import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: theme.colors.primary,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
  },
});

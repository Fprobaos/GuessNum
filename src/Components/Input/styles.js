import { StyleSheet } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: 15,
    paddingVertical: 10,
  },

  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary,
  },

  input: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: 15,
    maxWidth: 50,
  },
});

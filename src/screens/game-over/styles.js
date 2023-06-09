import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../Constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 40,
  },
  landscapeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  imagelandscape: {
    width: 200,
    height: 200,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: theme.colors.primary,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 10,
  },

  image: {
    marginVertical: 20,
    width: '100%',
    height: 200,
  },
  title: {
    alignItems: 'center',
    fontSize: 15,
    paddingVertical: 10,
  },
});

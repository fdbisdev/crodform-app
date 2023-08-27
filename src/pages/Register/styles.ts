import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  terms: {
    width: '85%',
},
  termsLabel: {
    paddingLeft: 10,
  },
  spacing: {
    marginTop: 15,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: colors.statusRed,
  },
  submitButton: {
    marginTop: 32,
    marginBottom: 20,
  },
});

export default styles;
import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'none',
    color: colors.subtitleGrey,
    fontFamily: 'Sintony-Regular, Helvetica',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: -0.2,
  },
  icon: {
    borderRadius: 2,
    borderWidth: 2,
    borderColor: colors.subtitleGrey,
    backgroundColor: 'white',
  },
  innerIcon: {
    borderRadius: 2,
    borderWidth: 0,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  checkbox: {
    width: '8%',
    height: '70%',
    marginRight: 18,
  }
});

export default styles;
import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'none',
    color: colors.subtitleGrey,
    fontFamily: 'SintonyRegular',
    fontSize: 12,
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
    width: '7%',
    height: '70%',
    marginRight: 10,
  }
});

export default styles;
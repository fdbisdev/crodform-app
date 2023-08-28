import { colors } from '@utils';
import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#000000',
    fontFamily: 'SintonyBold',
    fontSize: 17,
    letterSpacing: -0.2,
  },
  subtitleText: {
    color: colors.subtitleGrey,
    fontFamily: 'SintonyRegular',
    fontSize: 12,
    letterSpacing: -0.22,
  },
  backIcon: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.1,
    bottom: 0,
    top: 0,
  },
  backIconContainer: {
    zIndex: 1,
  },
});

export default styles;
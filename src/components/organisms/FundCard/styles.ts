import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fundCard: {
    flexDirection: 'column',
    width: 140,
    height: 145,
    marginLeft: 20,
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.subtitleGrey,
    backgroundColor: 'white',
  },
  fundLabel: {
    fontFamily: 'SintonyBold',
    fontSize: 12,
    color: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
  fundGraphWrapper: {
    width: 110,
    height: 60,
    marginLeft: -50,
  },
  fundStats: {
    marginTop: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fundStatsLabel: {
    fontFamily: 'SintonyRegular',
    fontSize: 14,
    color: 'black',
    lineHeight: 17,
    letterSpacing: -0.2,
  },
});

export default styles;
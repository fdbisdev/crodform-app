import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingBottom: 30,
  },
  contentWrapper: {
    width: '90%',
    flexDirection: 'column',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.grey,
    marginLeft: 8,
  },
  accountInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    color: '#000000',
    fontFamily: 'SintonyBold',
    fontSize: 14,
    letterSpacing: -0.2,
    lineHeight: 17,
  },
  portfolioText: {
    color: '#000000',
    fontFamily: 'SintonyBold',
    fontSize: 24,
    letterSpacing: -0.02,
    marginBottom: -2.5,
  },
  portfolioInfoWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  portfolioInfo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  rewards: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.disabledGrey,
    borderRadius: 4,
    padding: 9,
  },
  rewardsText: {
    marginLeft: 4,
    color: colors.primary,
    fontFamily: 'SintonyBold',
    fontSize: 11,
    letterSpacing: -0.02,
    textAlign: 'center',
  },
});

export default styles;
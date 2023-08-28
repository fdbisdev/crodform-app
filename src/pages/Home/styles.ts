import { colors } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  contentWrapper: {
    width: '100%',
    marginLeft: '10%',
    flexDirection: 'column',
  },
  fundsContainer: {
    position: 'relative',
    top: -10,
    left: '-3%',
    width: '95%',
  },
  carbonCredits: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 105,
    marginTop: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },
  carbonText: {
    width: '50%',
  },
  carbonTitle: {
    fontFamily: 'SintonyBold',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  cardTemplate: {
    marginTop: 28,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
  cardInnerContainer: {
    width: '47.5%',
    height: 200,
    backgroundColor: '#f4f5f5',
    borderRadius: 10,
    paddingLeft: 12,
    paddingTop: 24,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'SintonyBold',
  }
});

export default styles;
import {StyleSheet} from 'react-native';
import {HEADING_COLOR, TEXT_COLOR} from '../../../Theme/color';
import {POPPINS_REGULAR} from '../../../Theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 16,
    color: HEADING_COLOR,
    fontFamily: POPPINS_REGULAR,
  },
  label: {
    fontSize: 14,
    color: TEXT_COLOR,
    fontFamily: POPPINS_REGULAR,
  },
});

export default styles;

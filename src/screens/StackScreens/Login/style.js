import {StyleSheet} from 'react-native';
import {HEADING_COLOR} from '../../../Theme/color';
import {POPPINS_MEDIUM} from '../../../Theme/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: HEADING_COLOR,
    fontFamily: POPPINS_MEDIUM,
  },
});

export default styles;

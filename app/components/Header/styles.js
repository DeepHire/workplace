import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');

export default EStyleSheet.create({
    container: {
      height: height*.07,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      color: 'black',
    },
    subTitle: {
      fontSize: 12,
      color: 'black'
    },
    screenInformation: {
      flexDirection: 'column',
      paddingLeft: 20
    }
});

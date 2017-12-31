import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions, StyleSheet } from 'react-native';

var { height, width } = Dimensions.get('window');

export default EStyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: "flex-start",
        backgroundColor: '#fff'

    },
    text: {
        fontSize: 16,
        color: '$darkText',
        paddingLeft: 30,

    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        height: StyleSheet.hairlineWidth,
        width: this.width * 0.3

    },
    iconContainer:  {
        flex: 1,
        backgroundColor:'transparent',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    
    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin:10
    }

});

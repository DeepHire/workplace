import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types'; // ES6

import styles from './styles';

const ListItem = ({text, onPress, selected}) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected ? null : null}
            </View>
        </TouchableHighlight>

);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
};

export default ListItem;
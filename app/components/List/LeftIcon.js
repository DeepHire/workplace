import React from 'react';
import { View, Text, } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const LeftIcon = () => (
    <View style={styles.lineStyle}>
        <FeatherIcon name="adjust" size={15} color="#000" style={styles.iconContainer}>
        </FeatherIcon>
    </View>
);

export default LeftIcon;
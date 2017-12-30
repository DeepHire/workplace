import React from 'react';

import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

const ScreenInformation = ({ screenTitle, screenSubTitle }) => (

    <View style={styles.screenInformation}>
        <Text style={styles.subTitle}>{screenSubTitle}</Text>
        <Text style={styles.title}>{screenTitle}</Text>
    </View>
);

export default ScreenInformation;

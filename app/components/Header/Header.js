import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './styles';

import ScreenInformation from './ScreenInformation';

const CustomHeader = ({ title, subTitle }) => (

    <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <ScreenInformation screenTitle={title} screenSubTitle={subTitle} />
    </View>
);

export default CustomHeader;

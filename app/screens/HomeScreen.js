import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView, RefreshControl, FlatList, Alert } from 'react-native';
import store from 'react-native-simple-store';

import { Header } from '../components/Header';
import { ListItem, Separator } from '../components/List';
import questions from '../data/questions';

export default class HomeScreen extends Component {
    handlePress = (item) => {
        Alert.alert(item.instructions['tips'][1]);

    };

    render() {
        return (
            <ScrollView>
            <Header title={'Video Profile'} subTitle={'Overview'} />
            <FlatList
                    data={questions}
                    renderItem={({ item }) => 
                    <ListItem
                    text={item.title}
                    onPress={this.handlePress.bind(this, item)}
                     />
                    } 
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent={Separator}
                />

            </ScrollView>
        );
    }
}

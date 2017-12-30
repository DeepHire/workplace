import React, { Component } from 'react';
import { View, Text, AppRegistry, ScrollView, RefreshControl, FlatList } from 'react-native';
import store from 'react-native-simple-store';

import { Header } from '../components/Header';
import { ListItem, Separator } from '../components/QuestionsList';
import questions from '../data/questions';

export default class HomeScreen extends Component {
    handlePress = () => {
        console.log('row press');
    };

    render() {
        return (
            <View>
            <Header title={'Video Profile'} subTitle={'Overview'} />
            <FlatList
                    data={questions}
                    renderItem={({ item }) => 
                    <ListItem
                    text={item}
                    // selected={item === SELECTED}
                    onPress={this.handlePress}
                     />
                    } 
                    keyExtractor={(item[title]) => item}
                    ItemSeparatorComponent={Separator}
                />

            </View>
        );
    }
}

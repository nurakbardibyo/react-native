import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    View,Dimensions
} from 'react-native';

import Home from './Home';


import { TabNavigator,StackNavigator,TabBarBottom } from 'react-navigation';


export default TabNavigator(


    {
        navigationOptions: ({ navigation }) => ({
            headerLeft: null,
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Promo') {
                    iconName = `ios-pricetag${focused ? '' : '-outline'}`;
                } else if (routeName === 'Transaksi') {
                    iconName = `ios-list-box${focused ? '' : '-outline'}`;
                } else if (routeName === 'Pesan') {
                    iconName = `ios-mail${focused ? '' : '-outline'}`;
                } else if (routeName === 'Profil') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            inactiveBackgroundColor:'white',
            activeBackgroundColor:'white',
            labelStyle:{
                padding:1
            }
        },
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true,
    },

);
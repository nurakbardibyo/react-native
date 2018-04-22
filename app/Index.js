import React, { Component } from "react";
import HomeScreen from "./Home";
import Detail from "./Detail";
import { StackNavigator } from 'react-navigation';
const HomeScreenRouter = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Detail: { screen: Detail }
    }
);

export default class Index extends React.Component{

    render(){
        return(
            <Container>
                <HomeScreenRouter/>
            </Container>

        );
    }
}
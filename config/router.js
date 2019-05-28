import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import FlatListSearch from '../src/FlatListSearch'
import UserProfile from '../src/UserProfile'


const ProfileStackNavigator = createStackNavigator(
    {
        List: {
            screen: FlatListSearch
        },
        Profiles: {
            screen: UserProfile
        }
    },
    {
        initialRouteName: "List",
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: 'center'
            },
        },
    }
)

const AppContainer = createAppContainer(ProfileStackNavigator);
export default AppContainer

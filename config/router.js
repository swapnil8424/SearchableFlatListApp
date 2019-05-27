import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import FlatListSearch from '../src/FlatListSearch'
import UserProfile from '../src/UserProfile'

// const ProfileStack = StackNavigator({
//     List: {
//         screen: FlatList,
//         navigationOptions: {
//             title: 'Users'
//         }
//     },

//     Profiles: {
//         screen: UserProfile,
//         navigationOptions: ({navigation}) => ({
//             title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
//         })
//     },    
// }, {
//     mode: 'modal',
//     headerMode:'none'
// });

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
        headerMode : 'none',
        initialRouteName: "List"
    }
)

// export default ProfileStack
const AppContainer = createAppContainer(ProfileStackNavigator);
export default AppContainer

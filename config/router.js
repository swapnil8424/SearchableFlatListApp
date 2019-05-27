import React from 'react'
import { createStackNavigator, createAppContainer } from "react-navigation";

import FlatListSearch from '../screens/FlatListSearch'
import UserProfile from '../screens/UserProfile'

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
        List: FlatListSearch,
        Profiles: UserProfile
    },
    {
        initialRouteName: "List"
    }
)

// export default ProfileStack
const AppContainer = createAppContainer(ProfileStackNavigator);
export default AppContainer
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import  { ListItem, Tile, Button } from 'react-native-elements'

class UserProfile extends Component {
    static navigationOptions = () => {
        return {
            title: "User Profile",
            headerStyle: {
                backgroundColor: "#5d8aa8"
            },
        }
    }

    render() {
        console.log(this.props.navigation.state.params)
        const { user } = this.props.navigation.state.params;

        const { picture, name, email, location, gender, login, dob, phone } = user;

        const address = `${location.street}, ${location.city} ${location.state} ${location.postcode}`
        
        return (
            <View>
                <ScrollView>
                    <Tile
                        title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                        imageSrc={{ uri: picture.large }}
                        featured />
                    <ListItem title="Email" rightTitle={email}/>
                    <ListItem title="Phone" rightTitle={phone} />
                    <ListItem title="Username" rightTitle={login.username} />
                    <ListItem title="DOB" rightTitle={dob.date.slice(0,10)} />
                    <ListItem title="Age" rightTitle={dob.age.toString()} />
                    <ListItem title="Gender" rightTitle={gender} />
                    <ListItem title="Address" rightTitle={address} />
                </ScrollView>
            </View>
        )
    }
}

export default UserProfile

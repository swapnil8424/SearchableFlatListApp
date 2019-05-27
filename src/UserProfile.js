import React, { Component } from 'react'
import { Tile } from 'react-native-elements'

class UserProfile extends Component {
    render() {
        const { picture, name, email, location, gender, login, dob, phone } = this.props.navigation.state.params

        const address = `${location.street}, ${location.city} ${location.state} ${location.postcode}`

        return (
            <View>
                <Tile
                    title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                    imageSrc={picture.large}
                    featured
                />

                <List>
                    <ListItem
                        title="Email"
                        rightTitle={email}
                    />

                    <ListItem
                        title="Phone"
                        rightTitle={phone}
                    />

                    <ListItem
                        title="Username"
                        rightTitle={login.username}
                    />

                    <ListItem
                        title="DOB"
                        rightTitle={dob.date.slice(0, 11)}
                    />
                    <ListItem
                        title="Age"
                        rightTitle={dob.age}
                    />

                    <ListItem
                        title="Gender"
                        rightTitle={gender}
                    />
                </List>

                <List>
                    <ListItem
                        title="Address"
                        rightTitle={address}
                    />
                </List>
            </View>
        )
    }
}

export default UserProfile

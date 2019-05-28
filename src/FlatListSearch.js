import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { SearchBar, Avatar, ListItem } from 'react-native-elements'
export class FlatListSearch extends Component {
  static navigationOptions = () => {
    return {
      title: 'All Users', 
      headerStyle: {
        backgroundColor: "#318ce7"
      },
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoading: true,
    }
    this.users = []
  }

  onLoadUser = (user) => {
    this.props.navigation.navigate('Profiles', { user: user })
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.mainBox} onPress={() => this.onLoadUser(item)}>
        <View style={styles.picture}>
          <Avatar rounded size="medium" source={{ uri: item.picture.thumbnail }}></Avatar>
        </View>
        <View style={styles.infoPart}>
          <View>
            <Text style={styles.text}>Name: {item.name.title.charAt(0).toUpperCase() + item.name.title.slice(1)} {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1)} {item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1)}</Text>
            <Text style={styles.text}>Email: {item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "84%",
          backgroundColor: "#CED0CE",
          marginLeft: "16%"
        }}
      />
    );
  };

  searchFilter = text => {
    this.setState({
      value: text,
    });
    const newData = this.users.filter(item => {
      const itemData = `${item.name.title.toLowerCase()}   
          ${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({ data: newData });
  };

  renderHeader = () => {
    return (<SearchBar
      lightTheme
      round
      placeholder="Search Here..."
      onChangeText={text => this.searchFilter(text)}
      value={this.state.value}
    />)
  }

  componentDidMount() {
    // const url = "http://dummy.restapiexample.com/api/v1/employees"
    // const url = "http://ergast.com/api/f1/2004/1/results.json"
    const seed = 1
    const page = 1
    const url = "https://randomuser.me/api/?seed=${seed}&page=${page}&results=30"

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson.results,
          isLoading: false
        })
        this.users = responseJson.results;
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      this.state.isLoading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#330066" animating></ActivityIndicator>
        </View>
        :
        <View style={styles.container}>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            keyExtractor={i => i.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 14,
  },
  box: {
    flex: 1
  },

  mainBox: {
    padding: 5,
    flexDirection: 'row'
  },

  picture: {
    marginRight: 5
  },
  infoPart: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});


export default FlatListSearch

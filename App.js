import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Row from './row';

import contacts, { compareNames } from './contacts'

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  }
  componentDidMount() {
    console.log('contacts', contacts);

  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(prevState => ({contacts: prevState.contacts.sort(compareNames)}))
  }

  renderItem= obj => <Row {...obj.item} />

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title='sort' onPress={this.sort} />
        {this.state.showContacts &&
          <FlatList
            keyExtractor={item => item.key.toString()}
            renderItem={this.renderItem}
            data={this.state.contacts}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

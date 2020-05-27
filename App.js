import React from 'react';
import { Button, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts'
import { createSwitchNavigator } from 'react-navigation';
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';

const AppNavigator = createSwitchNavigator({
  AddContact: AddContactScreen,
  ContactList: ContactListScreen,
}, {
  initialRouteName: 'ContactList',
})


export default class App extends React.Component {
  state = {
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact]}))
  }
 
  render() { 
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

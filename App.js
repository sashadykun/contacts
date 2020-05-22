import React from 'react';
import { Button, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import ContactsList from './contactsList';
import AddContactForm from './addContactForm';

import contacts, { compareNames } from './contacts'

export default class App extends React.Component {
  state = {
    showContacts: false,
    showForm: false,
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact]}))
  }
  componentDidMount() {
    // console.log('contacts', contacts);

  }

  toggleForm = () => {
    this.setState(prevState => ({showForm: !prevState.showForm}));
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}));
  }

  sort = () => {
    this.setState(prevState => ({contacts: [...prevState.contacts].sort(compareNames)}));
  }

  render() {
    if (this.state.showForm) return <AddContactForm onSubmit={this.addContact} />
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title='Add Contact' onPress={this.toggleForm} />
        {this.state.showContacts &&
          <ContactsList
            contacts={this.state.contacts}
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

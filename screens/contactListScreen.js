import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

import ContactsList from '../contactsList';


// import contacts, { compareNames } from '../contactsList'

export default class ContactListScreen extends React.Component {

  state = {
    showContacts: true,
  }

  // addContact = newContact => {
  //   this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact]}))
  // }

  showForm = () => {
      this.props.navigation.navigate('AddContact');
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}));
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showContacts &&
          <ContactsList
            contacts={this.props.contacts}
            onSelectContact={(contact) => {
              // console.log('contact', contact)
              this.props.navigation.navigate('ContactDetails', {
                phone: contact.phone,
                name: contact.name,
              });
            }}
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

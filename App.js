import 'react-native-gesture-handler';
import React from 'react';
import { Button, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts'
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionSpecs } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class App extends React.Component {
  state = {
    contacts: contacts,
  }

  addContact = newContact => {
    this.setState(prevState => ({ showForm: false, contacts: [...prevState.contacts, newContact]}))
  }
 
  render() { 
    console.log('rendering')
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='ContactList'
          headerMode='float'
        >
          <Stack.Screen
            name='ContactList'
            options={{
              title: 'Contacts',
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
            }}
            // component={ContactListScreen}
            >{props => <ContactListScreen {...props} contacts={this.state.contacts} />}</Stack.Screen>
          <Stack.Screen
            name='AddContact'
            options={{
              title: 'Add Contact',
              transitionSpec: {
                open: TransitionSpecs.TransitionIOSSpec,
                close: TransitionSpecs.TransitionIOSSpec,
              },
              
            }}
            // component={AddContactScreen}
            >{props => <AddContactScreen {...props} addContact={this.addContact} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

import 'react-native-gesture-handler';
import React from 'react';
import { Button, SectionList, FlatList, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts'
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// const AppNavigator = createCompatNavigatorFactory(createStackNavigator)({
//   AddContact: AddContactScreen,
//   ContactList: ContactListScreen,
// }, {
//   initialRouteName: 'ContactList',
// })

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
          headerMode='none'
        >
          <Stack.Screen
            name='ContactList'
            // component={ContactListScreen}
            >{props => <ContactListScreen {...props} contacts={this.state.contacts} />}</Stack.Screen>
          <Stack.Screen
            name='AddContact'
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

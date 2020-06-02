import 'react-native-gesture-handler';
import React from 'react';
import { Button, SectionList, FlatList, StyleSheet, Text, View, Aler, Image, Alert } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts'
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();


function LogoTitle() {
  return (
    <Image
      style={{ width: 25, height: 25 }}
      source={require('./assets/logo192.png')}
    />
  );
}

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
          screenOptions= {{
            headerStyle: {
              backgroundColor: '#eff',
            },
            headerTintColor: '#aaa666',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
          // mode='modal'
        >
          <Stack.Screen
            name='ContactList'
            options={({ navigation, route }) => ({ 
              headerTitle: () => <LogoTitle />,
              headerRight: ({ navigate }) => <Button onPress={() => {navigation.navigate('AddContact')}} title='Add'></Button>,
           })}
            // component={ContactListScreen}
            >{props => <ContactListScreen {...props} contacts={this.state.contacts} />}</Stack.Screen>
          <Stack.Screen
            name='AddContact'
            
            options={{
              title: 'Add Contact',
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

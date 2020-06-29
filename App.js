import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './contacts'
import AddContactScreen from './screens/addContactScreen';
import ContactListScreen from './screens/contactListScreen';
import ContactDetailsScreen from './screens/contactDetailsScreen';
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
    // console.log('rendering', this.props.route)
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
            },
          }}
          // mode='modal'
        >
          <Stack.Screen
            name='ContactList'
            options={({ navigation, route }) => ({ 
              // headerTitle: () => <LogoTitle />,
              title: 'Contacts', // or headerTitle: 'Contacts',
              headerRight: () => <Button onPress={() => {navigation.navigate('AddContact')}} title='Add'></Button>,
           })}
            // component={ContactListScreen}
            >{props => <ContactListScreen {...props} contacts={this.state.contacts} />}
          </Stack.Screen>
          <Stack.Screen
            name='AddContact'
            
            options={({ navigation, route }) => ({
              title: 'Add Contact',
              // headerLeft: () => <Button onPress={() => {navigation.navigate('ContactList')}} title='Back' ></Button>,
            })}
            // component={AddContactScreen}
            >{props => <AddContactScreen {...props} addContact={this.addContact} />}
          </Stack.Screen>
          <Stack.Screen
            name='ContactDetails'
            // component={ContactDetailsScreen}
            options={({ navigation, route }) => ({
              title: route.params.name,
            })}
          >{props => <ContactDetailsScreen {...props} contacts={this.state.contacts} />}
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

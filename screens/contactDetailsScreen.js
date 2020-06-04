import React from 'react';
import { Button, Text, View } from 'react-native';


export default class CreateDetailsScreen extends React.Component {

    goToRandom = () => {
       const contacts = this.props.contacts;
       console.log('contacts sss', contacts);
       
       const phone= this.props.route.params.phone;
       let randomContact;
        while (!randomContact) {
            const randomIndex = Math.floor(Math.random() * contacts.length)
            if (contacts[randomIndex].phone !== phone) {
                randomContact = contacts[randomIndex];
            }
        }
        console.log('randomContact', randomContact);
        this.props.navigation.navigate('ContactDetails', {
            name: randomContact.name,
            phone: randomContact.phone,
        })
    }

    render() {
        const { name, phone } = this.props.route.params;
        return (
            <View>
                <Text>{phone}</Text>
                <Button title='Go to random contact' onPress={this.goToRandom} ></Button>
            </View>
        )
    }
}


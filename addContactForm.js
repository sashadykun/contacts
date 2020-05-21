import React from 'react';
import { Button, TextInput, View } from 'react-native';

class AddContactForm extends React.Component {
    render() {
        return (
            <View>
                <TextInput />
                <TextInput />
                <Button title='Add Contact' />
            </View>
        )
    }
}

export default AddContactForm;
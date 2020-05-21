import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        margin: 14,
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
    }
})

class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
    }

    handleNameChange = name => {
        this.setState({name});
    }

    handlePhoneChange = phone => {
        this.setState({phone});
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={this.handleNameChange}
                    style={styles.input}
                    value={this.state.name}
                />
                <TextInput
                    onChangeText={this.handlePhoneChange}
                    style={styles.input}
                    value={this.state.phone} 
                    keyboardType='numeric'
                />
                <Button title='Add Contact' />
            </View>
        )
    }
}

export default AddContactForm;
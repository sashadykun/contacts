import React from 'react';
import { Button, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    input: {
        borderWidth: 0.3,
        borderColor: 'grey',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 4,
    },
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        justifyContent: 'center',
    }
})

class AddContactForm extends React.Component {

    static propTypes = {
        addContact: PropTypes.func,
    }

    state = {
        name: '',
        phone: '',
        isFormValid: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
            this.validateForm();
        }
    }

    getHandler = key => {
        return val => {
            this.setState({ [key]: val })
        }
    }

    handleNameChange = name => {
        this.setState({ name });
    }

    handlePhoneChange = phone => {
        if ( +phone >= 0 && phone.length <= 10) {
            this.setState({phone});
        }
    }

    validateForm = () => {
        const names = this.state.name.split(' ')
        if ( +this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[1] && names[0] ) {
            return this.setState({ isFormValid: true });
        } else {
            return this.setState({ isFormValid: false });
        }
    }

    handleSubmit = () => {
        
        this.props.onSubmit(this.state) //{name: this.state.name, phone: this.state.phone} or {...this.state}
        
    }

    render() {
        return (
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>

                <TextInput
                    onChangeText={this.getHandler('name')}
                    style={styles.input}
                    value={this.state.name}
                    placeholder='Name'
                />
                <TextInput
                    onChangeText={this.handlePhoneChange}
                    style={styles.input}
                    value={this.state.phone} 
                    keyboardType='numeric'
                    placeholder='Phone'
                />
                <Button disabled={!this.state.isFormValid} onPress={this.handleSubmit} title='Submit Contact' />
            </KeyboardAvoidingView>
        )
    }
}

export default AddContactForm;
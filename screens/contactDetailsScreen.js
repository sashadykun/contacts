import React from 'react';
import { Button, Text, View } from 'react-native';


export default class CreateDetailsScreen extends React.Component {

    goToRandom = () => {
        // todo
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


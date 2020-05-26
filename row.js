import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    row: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

const Row = ({ name, phone }) => (
    <View style={styles.row}>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
)

Row.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
}

export default Row;
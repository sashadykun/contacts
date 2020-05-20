import React from 'react';
import { SectionList, Text } from 'react-native';
import Row from './row';
import PropTypes from 'prop-types'; //helps to self documment props

const renderItem = obj => <Row {...obj.item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = (props) => (
    <SectionList 
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[{
            title: 'Anton',
            data: props.contacts,
        }]} 
    />
)

ContactsList.propTypes = {
    contacts: PropTypes.array,
}

export default ContactsList;


// <FlatList
//   keyExtractor={item => item.key.toString()}
//   renderItem={this.renderItem}
//   data={this.state.contacts}
// />
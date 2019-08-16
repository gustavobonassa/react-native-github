import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigation: PropTypes.shape({
            navigate: PropTypes.func
        }).isRequired
    }
    signOut = async () => {
        const { navigation } = this.props;
        await AsyncStorage.clear();

        navigation.navigate('Welcome');
    }
    render(){
        const { title } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#000"/>
                <View style={styles.left}/>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={this.signOut}><Icon name="exchange" size={16} style={styles.icon}/></TouchableOpacity>
            </View>
        );
    };
}

export default withNavigation(Header);

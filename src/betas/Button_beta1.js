import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

export function Button (props) {
    return(
        <TouchableOpacity 
            style={styleButton.button}
            activeOpacity={.7}
            onPress={props.onPress}
            >
            <Text style={styleButton.buttonFont}>{props.value}</Text>
        </ TouchableOpacity>
    );
}

const styleButton = StyleSheet.create({
    button: {
        backgroundColor: '#F04',
        fontSize: 20,
        padding:15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 15
    },
    buttonFont: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    },

});
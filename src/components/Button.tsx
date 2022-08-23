import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

//type ButtonProps = TouchableOpacityProps;

interface ButtonProps extends TouchableOpacityProps {
    value: string;
}

export function Button ({value, ...rest} : ButtonProps) {
    return(
        <TouchableOpacity 
            style={styleButton.button}
            activeOpacity={.7}
            {...rest}
            >
            <Text style={styleButton.buttonFont}>{value}</Text>
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
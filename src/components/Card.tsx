import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface CardProps extends TouchableOpacity {
    items: string;
}

export function Card ({items, ...rest}: CardProps) {
    return(
        <TouchableOpacity 
            style={styleCard.items}
            {...rest}
        >
            <Text style={styleCard.itemsFont}>{items}</Text>
        </TouchableOpacity>
    );
}

const styleCard = StyleSheet.create(
    {
        items: {
            backgroundColor: '#1F1E25',
            borderRadius: 12,
            marginTop: 10,
            padding: 7
        },
        itemsFont: {
            color: '#FFF',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center'
        }
    }
);
import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList, //Muitos elementos
    Alert,
} from 'react-native';

import {Button} from '../components/Button';
import {Card} from '../components/Card';

interface ValueList {
    id: string;
    name: string;
    date?: Date; //? significa atribuição opcional (como no regex)
}

export function Home () {
  
    const [valueInput, setValueInput] = useState('');
    const [valueList, setValueList] = useState<ValueList[]>([]);
    const [messageItem, setMessageItem] = useState('none');

    //Saudação
    const [greeting, setGretting] = useState('');

    useEffect(
        _ => {
            const currentHour = new Date().getHours();

            if (currentHour < 12)
                setGretting("Good Morning!");
            else if (currentHour >= 12 && currentHour < 18)
                setGretting("Good Afternoon!");
            else
                setGretting("Good Evening :<");
            
            if (valueList.length > 0)
                setMessageItem('flex');
            else
                setMessageItem('none');
        },
    [valueInput, valueList]); // Toda vez que atualizar o valueInput o useEffect é chamado

    //handle é um nome convecionado quando o usúario faz uma interação
    function handleValueInput () {
        //  Como o oldState é um vetor e quer que use o seu conteúdo
        //utiliza-se "spread operator"...
        const data = {
            id: String(new Date().getTime()),
            name: valueInput
        };

        setValueList(oldState => [...oldState, data]);
    }

    function handleDelete (item: ValueList) {
        let id: string = item.id;
        let name: string = item.name;
        setValueList(oldState => oldState.filter(
            valueElem => valueElem.id !== id
        ) );
        Alert.alert("Elemento:" + name + ", deletado");
    }

    return(
        <View style={stylesCustom.container}>

            <Text style={stylesCustom.title} >
                Test App |ZERO|
            </Text>

            <Text style={{color:'#FFF', fontSize:15, marginBottom:5, paddingHorizontal:15}}>
                {greeting}
            </Text>
            
            <TextInput 
                style={stylesCustom.input}
                placeholder="Digite algo"
                placeholderTextColor="#555"
                onChangeText={value => {value !== ''? setValueInput(value) : Alert.alert('Digite algo')}}
            />

            <Button 
                value={"Cadastrar"} 
                onPress={handleValueInput}
            />
            
            <Text style={[stylesCustom.title, {marginTop: 50, display: messageItem}]}>
                List Items:
            </Text>

            <FlatList 
                data={valueList}
                keyExtrator={ item => item.id}
                renderItem={({item}) => (
                    <Card 
                        items={item.name}
                        onPress={_ => handleDelete(item)}
                    />
                ) }
            />

        </View>
    );
}

const stylesCustom = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#121015',
            paddingVertical: 70,
            paddingHorizontal: 30
        },
        title: {
            color: 'white',
            fontSize:24,
            fontWeight: 'bold',
            padding:15
        },
        input: {
            backgroundColor: '#1F1E25',
            color: '#FFF',
            fontSize: 18,
            padding:10,
            mariginTop:30,
            borderRadius: 7
        },
    
    }
);
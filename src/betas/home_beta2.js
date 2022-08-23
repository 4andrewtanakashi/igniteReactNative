import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView //Poucos elementos
} from 'react-native';

import {Button} from '../components/Button';
import {Card} from '../components/Card';

export function Home () {
  
    const [valueInput, setValueInput] = useState();
    const [valueList, setValueList] = useState([]); 

    //handle é um nome convecionado quando o usúario faz uma interação
    function handleValueInput () {
        //  Como o oldState é um vetor e quer que use o seu conteúdo
        //utiliza-se "spread operator"...
        setValueList(oldState => [...oldState, valueInput]);
    }

    return(
        <View style={stylesCustom.container}>

            <Text style={stylesCustom.title} >
                Test App |ZERO|
            </Text>
            
            <TextInput 
                style={stylesCustom.input}
                placeholder="Digite algo"
                placeholderTextColor="#555"
                onChangeText={setValueInput}
            />

            <Button 
                value={"Cadastrar"} 
                onPress={handleValueInput}
            />
            
            <Text style={[stylesCustom.title, {marginTop: 50}]} >
                List Items:
            </Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    //Quando quer utilizar o JS dentro de um JSX utilize o bloco vazio
                    valueList.map( items => (
                        <Card key={items} items={items}/>
                    ) )
                }
            </ScrollView>
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
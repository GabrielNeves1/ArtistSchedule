import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Background from '../../components/background';
import AStyle from '../styles/add';

import SQLite from "react-native-sqlite-storage";

const db = SQLite.openDatabase(
    {
        name: 'ArtistDB',
        location: 'default',
    },
    () => { },
    error => {
        console.log(error);
    });

const Add = ({ navigation }) => {
    const { navigate, setOptions } = navigation;

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setOptions({ title: 'AGENDA' })
    }, []);

    const handleAddEvent = () => {
        db.transaction(
            tx => {
                console.log("This is printed");
                tx.executeSql(
                    `insert into events (date, time, city, state, event) values ("${date}", "${time}", "${city}", "${state}", "${event}");`,
                    [],
                    (tx, results) => {
                        console.log(results);
                        console.log("Executed query insert");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'initial' }]
                        })
                        Alert.alert('Sucesso', 'Evento cadastrado!')
                    },
                    (tx, error) => {
                        console.log("Could not execute query insert");
                    }
                );
            },
            error => {
                console.log("Transaction error insert");
            },
            () => {
                console.log("Transaction done insert");
            }
        );
    }

    return (
        <Background>
            <ScrollView style={AStyle.Container}>
                <View style={AStyle.Header}>
                    <View>
                        <TouchableOpacity style={AStyle.HItem}>
                            <Text style={AStyle.HTitle}>NOVO AGENDAMENTO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={AStyle.Body}>

                    <View style={AStyle.BItem}>
                        <Text style={AStyle.BTitle}>DATA</Text>
                        <TextInputMask type={'datetime'} options={{ format: 'DD/MM/YYYY' }} style={AStyle.BButton} value={date} onChangeText={(value) => setDate(value)} />
                    </View>
                    <View style={AStyle.BItem}>
                        <Text style={AStyle.BTitle}>HORA</Text>
                        <TextInputMask type={'datetime'} options={{ format: 'HH:mm:ss' }} style={AStyle.BButton} value={time} onChangeText={(value) => setTime(value)} />
                    </View>
                    <View style={AStyle.BItem}>
                        <Text style={AStyle.BTitle}>CIDADE</Text>
                        <TextInput style={AStyle.BButton} value={city} onChangeText={(value) => setCity(value)} />
                    </View>
                    <View style={AStyle.BItem}>
                        <Text style={AStyle.BTitle}>ESTADO</Text>
                        <TextInput style={AStyle.BButton} value={state} onChangeText={(value) => setState(value)} />
                    </View>
                    <View style={AStyle.BItem}>
                        <Text style={AStyle.BTitle}>EVENTO</Text>
                        <TextInput style={AStyle.BButton} value={event} onChangeText={(value) => setEvent(value)} />
                    </View>
                </View>
                <View style={AStyle.Footer}>
                    <TouchableOpacity style={AStyle.FButton} onPress={() => handleAddEvent()}>
                        <Text style={AStyle.FText}>ADICIONAR</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Background>
    )
}

export default Add;
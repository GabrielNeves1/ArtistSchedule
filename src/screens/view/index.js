import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Background from '../../components/background';
import VStyle from '../styles/view';
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

const ViewData = ({ route, navigation }) => {
    const { navigate, setOptions } = navigation;
    const { date } = route.params;
    const [events, setEvents] = useState([]);

    useEffect(() => {
        getDataDB(date);
    }, []);

    const getDataDB = (date) => {
        db.transaction(
            tx => {
                console.log("This is printed");
                tx.executeSql(
                    `select * from events where date = '${date}' order by time asc`,
                    [],
                    (tx, results) => {
                        console.log(results);
                        console.log("Executed query select");
                        let rows = results.rows.length;
                        console.log("rows", rows);
                        if (rows > 0) {
                            for (let i = 0; i < rows; i++) {
                                setEvents(state => [...state, results.rows.item(i)])
                            }
                        }
                    },
                    (tx, error) => {
                        console.log("Could not execute query select");
                    }
                );
            },
            error => {
                console.log("Transaction error select");
            },
            () => {
                console.log("Transaction done select");
            }
        );
    }


    useEffect(() => {
        setOptions({ title: 'AGENDA' })
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View style={VStyle.BItem}>
                <View style={VStyle.BCont}>
                    <Text style={VStyle.BTitle}>DATA: </Text>
                    <Text style={VStyle.BValue}>{item.date}</Text>
                </View>
                <View style={VStyle.BCont}>
                    <Text style={VStyle.BTitle}>HORA: </Text>
                    <Text style={VStyle.BValue}>{item.time}</Text>
                </View>
                <View style={VStyle.BCont}>
                    <Text style={VStyle.BTitle}>CIDADE: </Text>
                    <Text style={VStyle.BValue}>{item.city}</Text>
                </View>
                <View style={VStyle.BCont}>
                    <Text style={VStyle.BTitle}>ESTADO: </Text>
                    <Text style={VStyle.BValue}>{item.state}</Text>
                </View>
                <View style={VStyle.BCont}>
                    <Text style={VStyle.BTitle}>EVENTO: </Text>
                    <Text style={VStyle.BValue}>{item.event}</Text>
                </View>
            </View>
        )
    }

    return (
        <Background>
            <View style={VStyle.Header}><Text style={VStyle.HTitle}>VISUALIZAÇÃO</Text></View>
            <View style={VStyle.Body}>
                <FlatList
                    data={events}
                    renderItem={renderItem}
                    keyExtractor={item => `${item.id}`}
                    style={{
                        width: '100%'
                    }}
                    nestedScrollEnabled
                />
            </View>
        </Background>
    )
}

export default ViewData;
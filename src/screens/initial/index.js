import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import Background from '../../components/background';
import IStyle from '../styles/initial';
import SQLite from "react-native-sqlite-storage";
import { FilterModal } from '../../components/modal';

const db = SQLite.openDatabase(
    {
        name: 'ArtistDB',
        location: 'default',
    },
    () => { },
    error => {
        Alert.alert("Atenção!", "Não foi possível conectar ao Banco de Dados.")
    });

const Initial = ({ navigation }) => {
    const { navigate, setOptions } = navigation;
    const [events, setEvents] = useState([]);
    const [dateFilterShow, setDateFilterShow] = useState(false);
    const [timeFilterShow, setTimeFilterShow] = useState(false);
    const [dateFilter, setDateFilter] = useState(null);
    // const [timeFilter, setTimeFilter] = useState(null);

    useEffect(() => {
        setOptions({ title: 'INICÍO' })
        callData()
    }, []);

    // useEffect(() => {
    //     getDataDB();
    // }, [timeFilter]);

    const callData = () => {
        setEvents([]);
        getDataDB();
    }

    const filter = () => {
        const current = events;
        console.log(current);
        const filtered = current.filter(el => el.date == `${dateFilter}`);
        if(dateFilter.length <= 0){
            callData();
            setDateFilterShow(false);
        }else{
            setEvents(filtered);
            setDateFilterShow(false);
        }
    }

    const getDataDB = () => {
        db.transaction(
            tx => {
                tx.executeSql(
                    `select count(id) as qnt, date from events group by date order by date desc`,
                    [],
                    (tx, results) => {
                        let rows = results.rows.length;
                        if (rows > 0) {
                            for (let i = 0; i < rows; i++) {
                                setEvents(state => [...state, results.rows.item(i)])
                            }
                        }
                    },
                    (tx, error) => {
                        Alert.alert("Falha", "Não foi possível obter a lista de eventos.");
                    }
                );
            },
            error => {
                //Alert.alert("Falha", "Ocorreu algum problema na execução com o Banco de dados.");
            },
            () => {
                //finally
            }
        );
    }

    const handleAddEvent = () => {
        navigate('add');
    }

    const handleDetails = (data) => {
        navigate('view', {
            date: data
        });
    }

    const renderEmpty = () => {
        return (
            <View style={IStyle.ViewE}>
                <Text style={IStyle.TextE}>Nenhum evento encontrado.</Text>
            </View>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={IStyle.BItem} onPress={() => handleDetails(item.date)}>
                <Text style={IStyle.BItemText}>{item.date} - {item.qnt}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Background>
            <FilterModal title="DATA" value={dateFilter} change={(value) => setDateFilter(value)} visible={dateFilterShow} close={() => setDateFilterShow(false)} call={() => filter()}/>
            {/* <FilterModal title="HORA" value={timeFilter} change={(value) => setTimeFilter(value)} visible={timeFilterShow} close={() => setTimeFilterShow(false)} /> */}
            <View style={IStyle.Header}>
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity style={IStyle.HItem} onPress={() => setDateFilterShow(true)}>
                        <Text style={IStyle.HTitle}>DATA.: </Text>
                        <Text style={IStyle.HValue}>{dateFilter ? dateFilter : '00/00/0000'}</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={IStyle.HItem} onPress={() => setTimeFilterShow(true)}>
                        <Text style={IStyle.HTitle}>HORA: </Text>
                        <Text style={IStyle.HValue}>{timeFilter ? timeFilter : '00/00/0000'}</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
            <View style={IStyle.Body}>
                <FlatList
                    data={events}
                    renderItem={renderItem}
                    ListEmptyComponent={renderEmpty}
                    keyExtractor={item => item.date}
                    style={{
                        width: '100%'
                    }}
                    nestedScrollEnabled
                />
            </View>
            <View style={IStyle.Footer}>
                <TouchableOpacity style={IStyle.FButton} onPress={() => handleAddEvent()}>
                    <Text style={IStyle.FText}>ADICIONAR</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

export default Initial;
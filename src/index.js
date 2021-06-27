import 'react-native-gesture-handler';
import React from 'react';
import Routes from './navigation';
import SQLite, { SQLiteDatabase } from "react-native-sqlite-storage";
import { useEffect } from 'react/cjs/react.development';

const db = SQLite.openDatabase(
    {
        name: 'ArtistDB',
        location: 'default',
    },
    () => { },
    error => {
        console.log(error);
    });

const createTable = () => {
    db.transaction(
        tx => {
          console.log("This is printed");
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY AUTOINCREMENT, date DATE, time TIME, city STRING, state STRING, event STRING);`,
            [],
            (tx, results) => {
              console.log("Executed query create");
            },
            (tx, error) => {
              console.log("Could not execute query create");
            }
          );
        },
        error => {
          console.log("Transaction error create");
        },
        () => {
          console.log("Transaction done create");
        }
      );
}

const App = () => {
    useEffect(() => {
        createTable();
    }, [])
    return (
        <Routes />
    )
}

export default App;
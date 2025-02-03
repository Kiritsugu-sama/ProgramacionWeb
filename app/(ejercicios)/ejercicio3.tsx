import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Ejercicio3Screen() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatoHora = (hora:Date) => {        
        return hora.toLocaleTimeString();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Reloj en tiempo real</Text>
            <Text style={styles.time}>{formatoHora(hora)}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontSize: 24,
        marginBottom: 10,
    },
    time: {
        fontSize: 32,
        fontWeight: "bold",
    },
});

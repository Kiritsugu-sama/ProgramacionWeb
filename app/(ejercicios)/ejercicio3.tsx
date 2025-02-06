import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Ejercicio3Screen() {
    //declaramos una variable tipo fecha, por defecto la actual
    const [hora, setHora] = useState(new Date());

    // declaramos un useeffect que estara realizando un codigo cada segundo
    useEffect(() => {
        //el intervalo decide cada cuanto actualizara el valor de la hora
        const interval = setInterval(() => {
            setHora(new Date());
        }, 1000);

        ///limpiamos el intervalo para no tener problemas de rendimiento
        return () => clearInterval(interval);
    }, []);

    const formatoHora = (hora:Date) => {   
        // con esta funcion retornamos solamente la hora en el formato hora minuto segundo      
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

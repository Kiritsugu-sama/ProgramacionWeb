import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Ejercicio4Screen() {
    //declaramos un booleano
    const [cargando, setCargando] = useState(true);

    // este useEffect ejecutara un timeout a los 3 segundos de iniciar el componente  
    useEffect(() => {
        // espera 3 segundo y cambia el valor de cargando 
        const timeout = setTimeout(() => {
            setCargando(false);
        }, 3000);

        //comento esto por que no se si realmente es necesario limpiar el settimeout ya que se ejecuta una sola vez
        //return () => clearTimeout(timeout);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* con un ternario cambiamos el mensaje que queremos segun el estado de la variable cargando */}
             <Text style={styles.text}>{ (cargando) ? "Cargando..." : "Bienvenido a la aplicación"}</Text>
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
        fontWeight: "bold",
    },
});

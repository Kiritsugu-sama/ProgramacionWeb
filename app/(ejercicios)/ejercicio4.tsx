import React, { useState, useEffect } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

export default function Ejercicio4Screen() {
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCargando(false);
        }, 3000);

        //comento esto por que no se si realmente es necesario limpiar el settimeout ya que se ejecuta una sola vez
        //return () => clearTimeout(timeout);
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
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

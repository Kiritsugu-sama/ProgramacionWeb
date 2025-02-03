import React, { useState, useEffect } from "react";
import { Text, Button, StyleSheet, ScrollView, Alert } from "react-native";

export default function Ejercicio2Screen() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("conteo actual: +"+contador);
        
        if (contador > 0 && contador % 5 === 0) {
            Alert.alert("Informacion", "Ha alcanzado un múltiplo de 5");
        }
    }, [contador]);

    const sumar = () => {
        setContador(contador + 1)
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Contador</Text>
            <Button  title="Incrementar" onPress={sumar} />
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
        marginBottom: 20,
    },
    
});

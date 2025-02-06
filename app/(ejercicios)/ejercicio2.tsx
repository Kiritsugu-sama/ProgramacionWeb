import React, { useState, useEffect } from "react";
import { Text, Button, StyleSheet, ScrollView, Alert } from "react-native";

export default function Ejercicio2Screen() {
    // seteo mi variable de tipo numero 
    const [contador, setContador] = useState(0);

    // uso un useEffect que se enlazara con mi variable de contador, cada vez que esta cambie entrara al cuerpo de la funcion
    useEffect(() => {
        //por cada click se muestra en consola el numero actual del contador
        console.log("conteo actual: +"+contador);
        
        // si contador en multiplo de 5, mostramos un mensaje
        if (contador > 0 && contador % 5 === 0) {
            Alert.alert("Informacion", "Ha alcanzado un múltiplo de 5");
        }
    }, [contador]);

    //esta funcion es para que al dar click, le sume uno a contador y se active useeffect
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

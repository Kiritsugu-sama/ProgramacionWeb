import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Button, Alert, useColorScheme } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function RegistrationScreen() {
    const [formulario, setFormulario] = useState({
        nombre: '',
        edad: ''
    });

    const [errores, setErrores] = useState({
        nombre: '',
        edad: ''
    });
   
    const validarFormulario = () => {
        let erroresTemp: any = {};

        if (!formulario.nombre.trim()) erroresTemp.nombre = 'El nombre es obligatorio';
        if (!formulario.edad.trim() || formulario.edad.trim() === "0") erroresTemp.edad = 'Edad obligatoria';
        
        return erroresTemp;
    };

    const manejarCambio = (campo: string, valor: string) => {
         setFormulario((prevFormulario) => ({
            ...prevFormulario,
            [campo]: valor,
        }));
    };

    const manejarDatos =  () => {
        var errores = validarFormulario();
        setErrores(errores);
        if (Object.keys(errores).length===0){
            Alert.alert('Usuario', "Hola, " + formulario.nombre + ". Tienes " + formulario.edad + " años.");
        }else{
            Alert.alert('Error', 'Por favor corrija los erroes');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Usuario Info</Text>
            <Text style={styles.label}>
                Nombre: {formulario.nombre}
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                value={formulario.nombre}
                onChangeText={(texto) => { manejarCambio('nombre', texto) }}
            />
            {errores.nombre && <Text style={styles.error}>{errores.nombre}</Text>}

            <Text style={styles.label}>
                Edad:  
            </Text>
            <TextInputMask
                type={'only-numbers'}
                style={styles.input}
                placeholder="Ingrese su edad"
                value={formulario.edad}
                onChangeText={(texto:string) => manejarCambio('edad', texto)}
            />
            {errores.edad && <Text style={styles.error}>{errores.edad}</Text>}

            <Button title="Ver Informacion" onPress={manejarDatos} />

        </ScrollView>
    );

};

const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 12,
        margin:10,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    }
});
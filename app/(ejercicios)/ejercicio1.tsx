import { useState } from "react";
import { ScrollView, Text, StyleSheet, TextInput, Button, Alert, useColorScheme } from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function RegistrationScreen() {
    // formulario prinncipal
    const [formulario, setFormulario] = useState({
        nombre: '',
        edad: ''
    });

    //almacenar errores
    const [errores, setErrores] = useState({
        nombre: '',
        edad: ''
    });
   
    //validar formulario antes de enviar el formulario
    const validarFormulario = () => {
        let erroresTemp: any = {};

        if (!formulario.nombre.trim()) erroresTemp.nombre = 'El nombre es obligatorio';
        //edad no puede ser 0 asi que lo maneje con el mismo mensaje
        if (!formulario.edad.trim() || formulario.edad.trim() === "0") erroresTemp.edad = 'Edad obligatoria';
        
        return erroresTemp;
    };

    //cambiar el valor del formulario por el nuevo
    const manejarCambio = (campo: string, valor: string) => {
         setFormulario((prevFormulario) => ({
            ...prevFormulario,
            [campo]: valor,
        }));
    };

    const manejarDatos =  () => {
        //validar si el formulario esta bien
        var errores = validarFormulario();
        setErrores(errores);

        //si no hay errores muestra el mensaje requerido por el ejercicio
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
            {/* me ayude con esta libraria de mask para que no permita entradas que no sean numeros */}
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
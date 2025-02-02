import { ScrollView, Text, StyleSheet} from "react-native";

export default function Ejericio4Screen() {
  

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Simulación de carga</Text>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
});
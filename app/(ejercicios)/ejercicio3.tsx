import { ScrollView, Text, StyleSheet} from "react-native";

export default function Ejericio3Screen() {
  

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Reloj en tiempo real </Text>
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
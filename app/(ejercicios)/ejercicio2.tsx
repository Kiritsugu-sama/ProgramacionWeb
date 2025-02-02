import { ScrollView, Text, StyleSheet} from "react-native";

export default function Ejericio2Screen() {
  

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Contador </Text>
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
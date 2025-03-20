import { useAuth } from "@/contexts/AuthContext";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/contexts/ThemeContext";
import { i18n } from "@/contexts/LanguageContext";
import { defaultTranslations } from "@/utils/transalations";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function HomeScreen() {
  const user = useSelector((state: RootState) => state.user);
  const { theme } = useTheme();
  const styles = theme === "dark" ? darkTheme : lightTheme; 

  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={100} style={styles.iconMain} />
      
      <Text style={styles.welcomeText}>
        {i18n.t(defaultTranslations.home_welcome)}
        <Text style={styles.userNameText}>{user?.nombreCompleto || "Usuario"}</Text>
      </Text>

      <Text style={styles.subText}>{i18n.t(defaultTranslations.home_greeting)}</Text>
      <Text style={styles.subText}>{i18n.t(defaultTranslations.home_subtitle)}</Text>
    </View>
  );
}

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F5F7FA", 
  },
  iconMain: {
    marginBottom: 20,
    color: "#3A4750",
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3A4750", 
    marginBottom: 5,
    textAlign: "center",
  },
  userNameText: {
    fontWeight: "bold",
    color: "#4A90E2", 
  },
  subText: {
    fontSize: 16,
    color: "#7D8C97", 
    marginBottom: 10,
    textAlign: "center",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#222", 
  },
  iconMain: {
    marginBottom: 20,
    color: "#E0E0E0", 
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#E0E0E0",
    marginBottom: 5,
    textAlign: "center",
  },
  userNameText: {
    fontWeight: "bold",
    color: "#BB86FC",
  },
  subText: {
    fontSize: 16,
    color: "#B0B0B0",
    marginBottom: 10,
    textAlign: "center",
  },
});

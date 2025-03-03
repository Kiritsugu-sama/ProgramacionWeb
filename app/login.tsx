import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  ImageBackground, 
  Animated, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { darkTheme, lightTheme } from "@/styles/themes";
import { i18n } from "@/contexts/LanguageContext";
import { defaultTranslations } from "@/utils/transalations";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { login } = useAuth();
  const { theme } = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const borderColorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderColorAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(borderColorAnimation, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const animatedBorderColor = borderColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["red", "black"],
  });

  return (
    <ImageBackground 
      source={require("@assets/images/fondo_login.webp")}
      style={styles.background}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.card}>
            <Animated.View 
              style={[
                themeStyles.container, 
                styles.container, 
                { borderWidth: 3, borderColor: animatedBorderColor }
              ]}
            >
              <Image
                source={require("@assets/images/logo_principal.png")}
                style={styles.avatar}
              />

              <Text style={themeStyles.title}>
                {i18n.t(defaultTranslations.login_welcome)}
              </Text>

              <TextInput
                style={styles.input}
                placeholder={i18n.t(defaultTranslations.login_email)}
                placeholderTextColor="#777"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <TouchableOpacity 
                style={styles.button} 
                onPress={() => { login(email); router.replace("/home"); }}
              >
                <Text style={styles.buttonText}>
                  {i18n.t(defaultTranslations.login_login)}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("../register")}>
                <Text style={styles.linkText}>
                  {i18n.t(defaultTranslations.login_noAccountRegister)}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
  },
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "90%",
    borderRadius: 20,
    minHeight: 300,
  },
  avatar: {
    height: 120,
    width: 120,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2D2E32",
    textAlign: "center",
  },
  linkText: { 
    marginTop: 10, 
    color: "#007bff", 
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

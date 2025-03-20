import React, { useRef, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";
import { i18n } from "@/contexts/LanguageContext";
import { defaultTranslations } from "@/utils/transalations";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ProfileScreen() {
  const user = useSelector((state: RootState) => state.user);
  const { theme } = useTheme();
  const styles = theme === "dark" ? darkTheme : lightTheme;

  if (!user.token) return <Redirect href="/login" />;

  const rowAnims = Array.from({ length: 5 }, () => useRef(new Animated.Value(0)).current);

  useEffect(() => {
    rowAnims.forEach((anim, index) => {
      setTimeout(() => {
        Animated.timing(anim, { toValue: 1, duration: 600, useNativeDriver: true }).start();
      }, index * 600);
    });
  }, []);

  const getRowStyle = (animValue: Animated.Value) => ({ opacity: animValue });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@assets/images/Alvaro.jpg")} style={styles.avatar} />
        <Text style={styles.title}>
          {i18n.t(defaultTranslations.profile_title)}
        </Text>

      </View>
      <View style={styles.body}>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[0])]}>
          <Ionicons name="mail-outline" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{i18n.t(defaultTranslations.profile_email)}: {user?.email}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[1])]}>
          <Ionicons name="person-outline" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{i18n.t(defaultTranslations.profile_fullName)}: {user?.nombreCompleto}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[2])]}>
          <Ionicons name="calendar-outline" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{i18n.t(defaultTranslations.profile_age)}: {user?.edad} años</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[3])]}>
          <Ionicons name="male-female-outline" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{i18n.t(defaultTranslations.profile_gender)}: {user?.sexo}</Text>
        </Animated.View>
        <Animated.View style={[styles.infoRow, getRowStyle(rowAnims[4])]}>
          <Ionicons name="heart-outline" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>{i18n.t(defaultTranslations.profile_maritalStatus)}: {user?.estadoCivil}</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ffffff",
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#4C6EF5",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginTop: 10,
  },
  body: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 8,
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222"
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#1e1e1e",
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#BB86FC",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E0E0E0",
    marginTop: 10,
  },
  body: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 8,
    color: "#BB86FC",
  },
  infoText: {
    fontSize: 16,
    color: "#E0E0E0",
  },
});



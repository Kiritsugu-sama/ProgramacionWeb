import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { View, Text, Switch, Pressable, StyleSheet } from 'react-native';
import ProfileScreen from './componentes/profile';
import { i18n } from "@/contexts/LanguageContext";
import { defaultTranslations } from "@/utils/transalations";

const SettingsScreen = () => {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: isDark ? '#222' : '#fff' }}>
      <ProfileScreen />

      <Text style={{ color: isDark ? '#fff' : '#000', fontSize: 20, marginBottom: 10 }}>
        {i18n.t(defaultTranslations.settings_title)}
      </Text>

      <Text style={{ color: isDark ? '#fff' : '#000', marginBottom: 5 }}>
        {i18n.t(defaultTranslations.settings_language)}
      </Text>
      <View style={[styles.segmentedControl, { borderColor: isDark ? "#fff" : "#aaa" }]}>
        {['es', 'en'].map((lang, index) => (
          <Pressable
            key={lang}
            style={[
              styles.segment,
              language === lang && { backgroundColor: "#2196F3" }, 
              index === 0 && styles.leftSegment,
              index === 1 && styles.rightSegment,
            ]}
            onPress={() => changeLanguage(lang == 'es' ? 'es' : 'en')}
          >
            <Text style={[styles.segmentText, { color: language === lang ? "#fff" : isDark ? "#fff" : "#000" }]}>
              {lang === "es" ? "Español" : "English"}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <Text style={{ color: isDark ? '#fff' : '#000', marginRight: 10 }}>
          {i18n.t(defaultTranslations.settings_darkMode)}
        </Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>

      <Pressable style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>{i18n.t(defaultTranslations.settings_logout)}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  segmentedControl: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    overflow: "hidden",
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  leftSegment: {
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rightSegment: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  segmentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#E53935",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;

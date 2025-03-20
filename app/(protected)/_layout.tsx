import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function ProtectedLayout() {
    const user = useSelector((state: RootState) => state.user);
    const { theme } = useTheme();
    const { language } = useLanguage();

    if (!user.token) return <Redirect href="/login" />;
    
    const isDark = theme === "dark";
    const activeColor = isDark ? "#BB86FC" : "blue";
    const inactiveColor = isDark ? "#888" : "gray";
    const backgroundColor = isDark ? "#121212" : "#fff";
    const tabBarStyle = {
        backgroundColor,
        borderTopWidth: 0,
    };

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                headerShown: false,
                tabBarStyle,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? "settings" : "settings-outline"} size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="rutina"
                options={{
                    tabBarLabel: language === "es" ? "Rutina" : "Routine",
                    tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                        name={focused ? "barbell" : "barbell-outline"}
                        size={size}
                        color={color}
                    />
                    ),
                }}
            />

        </Tabs>
    );
}

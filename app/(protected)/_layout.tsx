import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";

export default function ProtectedLayout() {
    const { token } = useAuth();
    const { theme } = useTheme();

    if (!token) return <Redirect href="/login" />;

    // Definir colores según el tema
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
        </Tabs>
    );
}

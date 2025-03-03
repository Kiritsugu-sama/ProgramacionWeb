import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useContext } from 'react';
import { View, Text, Switch, Button } from 'react-native';
import ProfileScreen from './componentes/profile';

const SettingsScreen = () => {
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: theme === 'dark' ? '#222' : '#fff' }}>
      <ProfileScreen></ProfileScreen>
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000', fontSize: 20 }}>Configuraciones</Text>
      
      <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Idioma:</Text>
      <Button title="Español" onPress={() => changeLanguage('es')} disabled={language === 'es'} />
      <Button title="English" onPress={() => changeLanguage('en')} disabled={language === 'en'} />
      
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Modo Oscuro</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>

      {user && <Text style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Usuario: {user.nombreCompleto}</Text>}
      <Button title="Cerrar Sesión" onPress={logout} />
    </View>
  );
};

export default SettingsScreen;

import React, { useState } from 'react'
import { Text, View, Switch, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleNotifications = () => setNotifications(!notifications)

  const handleLogout = () => {
    router.replace('/login');
  }

  return (
    <View className="flex-1 p-5">
      <Text className="text-xl font-bold text-gray-800 mb-5">Settings</Text>
      <View className="flex flex-row justify-between items-center mb-2.5">
        <Text className="text-base text-gray-800">Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View className="flex flex-row justify-between items-center mb-2.5">
        <Text className="text-base text-gray-800">Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={toggleNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <TouchableOpacity onPress={handleLogout} className="bg-blue-500 p-2.5 rounded-md mt-5">
        <Text className="text-white text-base text-center">Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

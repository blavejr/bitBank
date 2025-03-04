import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useRouter } from 'expo-router';

// Mock data
import { users } from '../data/users/users';
import { writeToStorage } from '../utils/localStorage';
export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (email: string) => setEmail(email.toLowerCase());
  const handlePasswordChange = (password: string) => setPassword(password);

  const handleLogin = () => {
    router.push('/(tabs)');
    if (email && password) {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        writeToStorage('user', user);
        router.push('/(tabs)');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } else {
      Alert.alert('Error', 'Please enter your email and password');
    }
  }

  return (
    <View className="flex-1 p-5 bg-white justify-center">
      <Text className="text-4xl font-bold text-center text-primary-800 mb-5">Login</Text>
      <View className="mb-2.5">
        <Text className="text-base text-primary-800 mb-1">Email</Text>
        <TextInput
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter your email"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
          autoCapitalize="none"
        />
      </View>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">Password</Text>
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Enter your password"
          secureTextEntry={true}
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity onPress={handleLogin} className="bg-blue-500 p-2.5 rounded-md mt-5">
        <Text className="text-white text-base text-center">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-2.5 rounded-md mt-2">
        <Text className="text-primary-800 text-base text-center">Forgot password?</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center">
        <Text className="text-primary-800 text-base">Don't have an account?</Text>
        <TouchableOpacity className="rounded-md">
          <Text className="text-primary-800 text-base ml-1">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

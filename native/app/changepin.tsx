import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import { useRouter } from 'expo-router';

export default function ChangePinScreen() {
  const router = useRouter();
  const [idNumber, setIdNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [newPin, setNewPin] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const [showAppPasswordInput, setShowAppPasswordInput] = useState(false);

  const handleIdNumberChange = (idNumber: string) => setIdNumber(idNumber);
  const handleDateOfBirthChange = (dateOfBirth: string) => setDateOfBirth(dateOfBirth);
  const handleNewPinChange = (newPin: string) => setNewPin(newPin);
  const handleAppPasswordChange = (appPassword: string) => setAppPassword(appPassword);

  const handleChangePin = () => {
    setShowAppPasswordInput(true);
    Alert.prompt(
      'Enter App Password',
      'Please enter your app password to proceed.',
      [
        { text: 'Cancel', onPress: () => setShowAppPasswordInput(false), style: 'cancel' },
        { 
          text: 'OK', 
          onPress: (value?: string) => value && setAppPassword(value) 
        },
      ],
      'secure-text',
      '',
      'numeric'
    );
  }

  return (
    <View className="flex-1 p-5 bg-white justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-5">Change Pin</Text>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">ID Number</Text>
        <TextInput
          value={idNumber}
          onChangeText={handleIdNumberChange}
          placeholder="Enter your ID number"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">Date of Birth</Text>
        <TextInput
          value={dateOfBirth}
          onChangeText={handleDateOfBirthChange}
          placeholder="Enter your date of birth"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">New Pin</Text>
        <TextInput
          value={newPin}
          onChangeText={handleNewPinChange}
          placeholder="Enter your new pin"
          keyboardType="numeric"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <TouchableOpacity onPress={handleChangePin} className="bg-blue-500 p-2.5 rounded-md mt-5">
        <Text className="text-white text-base text-center">Change Pin</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-5">
        <Image source={require('../assets/images/icon.png')} style={{ width: 24, height: 24, marginRight: 2 }} />
        <Text className="text-gray-800 text-base">Secure Pin Change</Text>
      </View>
    </View>
  );
}

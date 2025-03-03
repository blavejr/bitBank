import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router';

export default function BankDetailsScreen() {
  const router = useRouter();

  const handleShare = () => {
    // Assuming there's a function to handle the sharing logic
    // For demonstration, we'll just navigate to a success screen
    router.push('/(tabs)');
  }

  return (
    <View className="flex-1 p-5 bg-white justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-5">Bank Details</Text>
      <View className="mb-5">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Personal Information</Text>
        <View className="mb-2.5">
          <Text className="text-base text-gray-800 mb-1">Name</Text>
          <Text className="text-base text-primary">Blave Mwamba</Text>
        </View>
        <View className="mb-2.5">
          <Text className="text-base text-gray-800 mb-1">Surname</Text>
          <Text className="text-base text-primary">Bemba</Text>
        </View>
      </View>
      <View className="mb-5">
        <Text className="text-xl font-semibold text-gray-800 mb-2">Account Information</Text>
        <View className="mb-2.5">
          <Text className="text-base text-gray-800 mb-1">Bank Account Number</Text>
          <Text className="text-base text-primary">1234567890</Text>
        </View>
        <View className="mb-2.5">
          <Text className="text-base text-gray-800 mb-1">Account Type</Text>
          <Text className="text-base text-primary">Checking</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleShare} className="bg-blue-500 p-2.5 rounded-md mt-5">
        <Text className="text-white text-base text-center">Share Details</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-5">
        <Image source={require('../assets/images/icon.png')} style={{ width: 24, height: 24, marginRight: 2 }} />
        <Text className="text-primary text-base">Secure Sharing</Text>
      </View>
    </View>
  );
}

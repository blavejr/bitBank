import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router';

export default function TransferScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleAmountChange = (amount: string) => setAmount(amount);
  const handleRecipientChange = (recipient: string) => setRecipient(recipient);
  const handleTransfer = () => {
    // Assuming there's a function to handle the transfer logic
    // For demonstration, we'll just navigate to a success screen
    router.push('/(tabs)');
  }

  return (
    <View className="flex-1 p-5 bg-white justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-5">Transfer</Text>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">Recipient</Text>
        <TextInput
          value={recipient}
          onChangeText={handleRecipientChange}
          placeholder="Recipient's account number, email or phone"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <View className="mb-2.5">
        <Text className="text-base text-gray-800 mb-1">Amount</Text>
        <TextInput
          value={amount}
          onChangeText={handleAmountChange}
          placeholder="Enter amount"
          keyboardType="numeric"
          style={{ height: 40, borderColor: 'transparent', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <TouchableOpacity onPress={handleTransfer} className="bg-blue-500 p-2.5 rounded-md mt-5">
        <Text className="text-white text-base text-center">Transfer</Text>
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-5">
        <Image source={require('../assets/images/icon.png')} style={{ width: 24, height: 24, marginRight: 2 }} />
        <Text className="text-gray-800 text-base">Secure Transfer</Text>
      </View>
    </View>
  );
}

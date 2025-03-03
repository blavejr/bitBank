import { TouchableOpacity, Text, Image, View } from 'react-native'
import React from 'react'
import { IconSymbol } from './ui/IconSymbol'

interface BBTransactionCardProps {
    name: string;
    type: string;
    date: string;
    time: string;
    amount: string;
    transactionType: 'credit' | 'debit';
    image: string;
}

const images = {
  'lady': require('../assets/images/lady-ph.png'),
  'guy': require('../assets/images/guy-ph.png'),
};

export default function BBTransactionCard({ name, type, date, time, amount, transactionType, image }: BBTransactionCardProps) {
  const [firstName, lastName] = name.split(' ');
  const truncatedName = `${firstName} ${lastName[0]}.`;
  return (
    <TouchableOpacity className="flex-row items-center justify-between w-full ml-4 mr-4 mt-2 mb-2">
      <Image source={images[image as keyof typeof images]} style={{ width: 50, height: 50, borderRadius: 50 }} className="w-1/4" />
        <View className="flex flex-col w-1/4">
            <Text className="font-bold">{truncatedName}</Text>
            <Text>{type}</Text>
        </View>
        <View className="flex flex-col w-1/4">
            <Text>{date}</Text>
            <Text>{time}</Text>
        </View>
        <View className="flex flex-col w-1/4">
            <Text className={transactionType === 'credit' ? "text-green-500" : "text-red-500"}>{transactionType === 'credit' ? '+' : '-'} N$ {amount}</Text>
        </View>
    </TouchableOpacity>
  );
}
import { View, Text, TouchableOpacity } from "react-native";
import { ITransaction } from '@/data/transactions/transactions';
import { useLocalSearchParams } from "expo-router";

interface TransactionDetailsProps {
  transaction: ITransaction;
}

export default function TransactionDetailsScreen() {
    const { transaction } = useLocalSearchParams();
    const parsedTransaction: ITransaction = JSON.parse(transaction as string);
  return (
    <View className="p-4 bg-white rounded-lg h-full shadow-lg">
      <View className="mb-4">
        <Text className="text-lg font-bold">{parsedTransaction.name}</Text>
        <Text className="text-base text-gray-500">{parsedTransaction.type}</Text>
      </View>
      <View className="mb-4">
        <Text className="text-base text-gray-500">{parsedTransaction.date} {parsedTransaction.time}</Text>
      </View>
      <View className="mb-4">
        <Text className={parsedTransaction.transactionType === 'credit' ? "text-green-500 text-2xl font-bold" : "text-red-500 text-2xl font-bold"}>{parsedTransaction.amount}</Text>
      </View>
      <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Text>Download Proof of Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

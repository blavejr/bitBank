import { Typography } from '@/components/ui/typography/Typo';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import BBTopbar from '@/components/BBTopbar';
import BBFlatCard from '@/components/BBFlatCard';
import BBButton from '@/components/BBButton';
import BBTransactionCard from '@/components/BBTransactionCard';
import BBFlatCardScroll from '@/components/BBFlatCardScroll';
import { transactions } from '@/data/transactions/transactions';
import { useState } from 'react';

export default function TransactionsScreen() {
  const [transactionType, setTransactionType] = useState<'credit' | 'debit' | 'all'>('all');
  const [screenDescription, setScreenDescription] = useState('All your transactions');

  const filteredTransactions = transactionType === 'all' ? transactions : transactions.filter(transaction => transaction.transactionType === transactionType);

  const handleTransactionTypeChange = (type: 'credit' | 'debit' | 'all') => {
    setTransactionType(type);
    setScreenDescription(type === 'all' ? 'All your transactions' : type === 'credit' ? 'All your credit transactions' : 'All your debit transactions');
  };

  return (
    <View>
      <Typography color="secondary" className="text-center text-4xl bg-background-primary">Transactions</Typography>
      <View className="flex-row items-center justify-between w-full pl-4 pr-4 bg-background-secondary">
          <BBButton label="All" symbol="list.bullet" onPress={() => handleTransactionTypeChange('all')} />
          <BBButton label="Credit" symbol="plus" onPress={() => handleTransactionTypeChange('credit')} />
          <BBButton label="Debit" symbol="minus" onPress={() => handleTransactionTypeChange('debit')} />
        </View>
      <BBFlatCardScroll title="Transactions" description={screenDescription} onPress={() => {}}>
        {filteredTransactions.map((transaction, index) => (
          <BBTransactionCard key={index} name={transaction.name} type={transaction.type} date={transaction.date} time={transaction.time} amount={transaction.amount} transactionType={transaction.transactionType} image={transaction.image} />
        ))}
        <View className="h-40" />
      </BBFlatCardScroll>
    </View>
  );
}

import { Typography } from '@/components/ui/typography/Typo';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import BBTopbar from '@/components/BBTopbar';
import BBFlatCard from '@/components/BBFlatCard';
import BBButton from '@/components/BBButton';
import BBTransactionCard from '@/components/BBTransactionCard';
import BBFlatCardScroll from '@/components/BBFlatCardScroll';
import { transactions } from '@/data/transactions/transactions';

export default function TransactionsScreen() {
  return (
    <View>
      <Typography color="secondary" className="text-center text-4xl bg-background-primary">Transactions</Typography>
      <BBFlatCardScroll title="Transactions" description="All your transactions" onPress={() => {}}>
          {transactions.map((transaction, index) => (
            <BBTransactionCard key={index} name={transaction.name} type={transaction.type} date={transaction.date} time={transaction.time} amount={transaction.amount} transactionType={transaction.transactionType} image={transaction.image} />
          ))}
        <View className="h-20" />
      </BBFlatCardScroll>
    </View>
  );
}

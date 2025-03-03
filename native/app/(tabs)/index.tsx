import { Typography } from '@/components/ui/typography/Typo';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import BBTopbar from '@/components/BBTopbar';
import BBFlatCard from '@/components/BBFlatCard';
import BBButton from '@/components/BBButton';
import BBTransactionCard from '@/components/BBTransactionCard';
import BBFlatCardScroll from '@/components/BBFlatCardScroll';
import { transactions } from '@/data/transactions/transactions';

export default function HomeScreen() {
  return (
    <View className="bg-background-primary">
      
      <BBTopbar />

      <ScrollView>
        <BBFlatCard className="mt-4" title="Balance" description="Your balance account" onPress={() => {}}>
          <Typography size="lg" weight="bold" color="secondary" className="text-center text-5xl mt-4">N$ {12340.65 + transactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0)}</Typography>
        </BBFlatCard>
        
        <View className="flex-row justify-center items-center gap-2 p-4 bg-background-secondary">
          <BBButton label="Add money" symbol="plus" onPress={() => {}} rounded />
          <BBButton label="Transfer money" symbol="paperplane.fill" onPress={() => router.push('/transfer')} rounded />
          <BBButton label="Bank details" symbol="newspaper" onPress={() => router.push('/bankdetails')} rounded />
          <BBButton label="My cards" symbol="creditcard" onPress={() => router.push('/bankcards')} rounded />
        </View>

        <BBFlatCard className="mt-4" title="Transactions" description="Recent transactions" onPress={() => {}}>
          {transactions.slice(0, 5).map((transaction, index) => (
            <BBTransactionCard key={index} name={transaction.name} type={transaction.type} date={transaction.date} time={transaction.time} amount={transaction.amount} transactionType={transaction.transactionType} image={transaction.image} />
          ))}

          <Link href="/transactions">
              <Typography size="md" weight="bold" color="secondary" className="text-center">See all</Typography>
          </Link>
        </BBFlatCard>

        <View className="flex-row justify-center items-center gap-2 pl-4 pr-4 pb-4 bg-background-secondary">
          <TouchableOpacity onPress={() => router.push('/transactions')} className="mt-4 w-1/2 rounded-lg">
            <BBFlatCard title="Spent this month" description="Total spent this month" onPress={() => {}}>
              <View className="flex-column justify-center items-center gap-4" style={{ width: 100, height: 100 }}>
                <Typography weight="bold" color="secondary" className="text-center text-2xl">{transactions.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0).toFixed(2)}</Typography>
              </View>
            </BBFlatCard>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/bankcards')} className="mt-4 w-1/2 rounded-lg">
            <BBFlatCard title="Cards" description="My Cards" onPress={() => {}}>
              <Image source={require('@/assets/images/visa-1.png')} className="w-full h-full" style={{ width: 100, height: 100 }} />
            </BBFlatCard>
          </TouchableOpacity>

        </View>
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}

import { Typography } from '@/components/ui/typography/Typo';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Link, router } from 'expo-router';
import BBTopbar from '@/components/BBTopbar';
import BBFlatCard from '@/components/BBFlatCard';
import BBButton from '@/components/BBButton';
import BBTransactionCard from '@/components/BBTransactionCard';
import BBFlatCardScroll from '@/components/BBFlatCardScroll';
import { transactions, ITransaction } from '@/data/transactions/transactions';
import { accounts, IAccount } from '@/data/accounts/accounts';
import { users, IUser } from '@/data/users/users';
import { cards, ICard } from '@/data/cards/cards';
import { readFromStorage } from '@/utils/localStorage';
import { useEffect } from 'react';
import { useState } from 'react';
import { calculateBalance, ITotals, calculateTotals } from '@/utils/transactions/transactions';

export default function HomeScreen() {
  const [user, setUser] = useState<IUser | null>(null);
  const [userTransactions, setUserTransactions] = useState<ITransaction[]>([]);
  const [userAccounts, setUserAccounts] = useState<IAccount[]>([]);
  const [userCards, setUserCards] = useState<ICard[]>([]);
  // Totals
  const [totals, setTotals] = useState<ITotals | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await readFromStorage('user');
      setUser(user);
      const userAccounts = accounts.filter((account) => account.userId === user.id);
      setUserAccounts(userAccounts);
      const userTransactions = transactions.filter((transaction) => userAccounts.some((account) => account.id === transaction.accountId));
      setUserTransactions(userTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
      const userCards = cards.filter((card) => card.userId === user.id);
      setUserCards(userCards);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    setTotals(calculateTotals(userTransactions));
  }, [userTransactions]);

  return (
    <View className="bg-background-primary">
      
      <BBTopbar />

      <ScrollView>
        <BBFlatCard className="mt-4" title="Balance" description="Your balance account" onPress={() => {}}>
          <Typography size="lg" weight="bold" color="secondary" className="text-center text-5xl mt-4">N$ {totals?.balance.toFixed(2)}</Typography>
        </BBFlatCard>
        
        <View className="flex-row justify-center items-center gap-2 p-4 bg-background-secondary">
          <BBButton label="Add money" symbol="plus" onPress={() => {}} rounded />
          <BBButton label="Transfer money" symbol="paperplane.fill" onPress={() => router.push('/transfer')} rounded />
          <BBButton label="Bank details" symbol="newspaper" onPress={() => router.push('/bankdetails')} rounded />
          <BBButton label="My cards" symbol="creditcard" onPress={() => router.push('/bankcards')} rounded />
        </View>

        <BBFlatCard className="mt-4" title="Transactions" description="Recent transactions" onPress={() => {}}>
          {userTransactions.slice(0, 5).map((transaction, index) => (
            <BBTransactionCard key={index} name={transaction.name} type={transaction.type} date={transaction.date} time={transaction.time} amount={transaction.amount} transactionType={transaction.transactionType} image={transaction.image} />
          ))}

          <Link href="/transactions">
              <Typography size="md" weight="bold" color="secondary" className="text-center">See all</Typography>
          </Link>
        </BBFlatCard>

        <View className="flex-row justify-center items-center gap-2 pl-4 pr-4 pb-4 bg-background-secondary">
          <TouchableOpacity onPress={() => router.push('/transactions')} className="mt-4 w-1/2 rounded-lg">
            <BBFlatCard title="Spent this month" description="" onPress={() => {}} className="rounded-lg">
              <View className="flex-column justify-center items-center gap-4" style={{ width: 100, height: 100 }}>
                <Typography weight="bold" color="secondary" className="text-center text-2xl">{totals?.expenditure.toFixed(2)}</Typography>
              </View>
            </BBFlatCard>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/transactions')} className="mt-4 w-1/2 rounded-lg">
            <BBFlatCard title="Earned this month" description="" onPress={() => {}} className="rounded-lg">
              <View className="flex-column justify-center items-center gap-4" style={{ width: 100, height: 100 }}>
                <Typography weight="bold" color="secondary" className="text-center text-2xl">{totals?.income.toFixed(2)}</Typography>
              </View>
            </BBFlatCard>
          </TouchableOpacity>
        </View>

        <View className="h-5" />

        <View className="flex-row justify-center items-center gap-2 pl-4 pr-4 pb-4 bg-background-secondary">
          {userCards.slice(0, 3).map((card, index) => (
            <TouchableOpacity onPress={() => router.push('/bankcards')} className="mt-4 w-1/3">
              <BBFlatCard title={card.name} description={'**** ' + card.number.slice(12, 16)} onPress={() => {}} className="rounded-lg">
                <Image source={card.image} className="w-full h-full" style={{ width: 100, height: 100 }} />
              </BBFlatCard>
            </TouchableOpacity>
          ))}
        </View>
        <View className="h-20" />
      </ScrollView>
    </View>
  );
}

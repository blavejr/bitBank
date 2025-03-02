import { Typography } from '@/components/ui/typography/Typo';
import { View } from 'react-native';
import BBTopbar from '@/components/BBTopbar';
import BBFlatCard from '@/components/BBFlatCard';
import BBButton from '@/components/BBButton';
import BBTransactionCard from '@/components/BBTransactionCard';
import BBFlatCardScroll from '@/components/BBFlatCardScroll';

type Transaction = {
  name: string;
  type: string;
  date: string;
  time: string;
  amount: string;
  transactionType: 'credit' | 'debit';
};

const transactions: Transaction[] = [
  { name: 'Emily Johnson', type: 'Transfer', date: '2022-01-01', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' },
  { name: 'Michael Brown', type: 'Deposit', date: '2022-01-02', time: '11:00 AM', amount: '500.00', transactionType: 'credit' },
  { name: 'Sarah Lee', type: 'Withdrawal', date: '2022-01-03', time: '12:00 PM', amount: '200.00', transactionType: 'debit' },
  { name: 'Kevin White', type: 'Transfer', date: '2022-01-04', time: '10:00 AM', amount: '800.00', transactionType: 'credit' },
  { name: 'Jessica Davis', type: 'Deposit', date: '2022-01-05', time: '11:00 AM', amount: '600.00', transactionType: 'credit' },
  { name: 'Matthew Martin', type: 'Withdrawal', date: '2022-01-06', time: '12:00 PM', amount: '300.00', transactionType: 'debit' },
  { name: 'Amanda Taylor', type: 'Transfer', date: '2022-01-07', time: '10:00 AM', amount: '900.00', transactionType: 'credit' },
  { name: 'Christopher Hall', type: 'Deposit', date: '2022-01-08', time: '11:00 AM', amount: '700.00', transactionType: 'credit' },
  { name: 'Elizabeth Rodriguez', type: 'Withdrawal', date: '2022-01-09', time: '12:00 PM', amount: '400.00', transactionType: 'debit' },
  { name: 'Brian Thompson', type: 'Transfer', date: '2022-01-10', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' },
  { name: 'Lisa Nguyen', type: 'Deposit', date: '2022-01-11', time: '11:00 AM', amount: '800.00', transactionType: 'credit' },
  { name: 'David Garcia', type: 'Withdrawal', date: '2022-01-12', time: '12:00 PM', amount: '500.00', transactionType: 'debit' },
  { name: 'Susan Walker', type: 'Transfer', date: '2022-01-13', time: '10:00 AM', amount: '1100.00', transactionType: 'credit' },
  { name: 'Joseph Martin', type: 'Deposit', date: '2022-01-14', time: '11:00 AM', amount: '900.00', transactionType: 'credit' },
  { name: 'Margaret Harris', type: 'Withdrawal', date: '2022-01-15', time: '12:00 PM', amount: '600.00', transactionType: 'debit' },
  { name: 'Frank Davis', type: 'Transfer', date: '2022-01-16', time: '10:00 AM', amount: '1200.00', transactionType: 'credit' },
  { name: 'Dorothy Brown', type: 'Deposit', date: '2022-01-17', time: '11:00 AM', amount: '1000.00', transactionType: 'credit' },
  { name: 'George Miller', type: 'Withdrawal', date: '2022-01-18', time: '12:00 PM', amount: '700.00', transactionType: 'debit' },
  { name: 'Ruth Taylor', type: 'Transfer', date: '2022-01-19', time: '10:00 AM', amount: '1300.00', transactionType: 'credit' },
  { name: 'James Wilson', type: 'Deposit', date: '2022-01-20', time: '11:00 AM', amount: '1100.00', transactionType: 'credit' },
  { name: 'Patricia Johnson', type: 'Withdrawal', date: '2022-01-21', time: '12:00 PM', amount: '800.00', transactionType: 'debit' },
  { name: 'Robert Smith', type: 'Transfer', date: '2022-01-22', time: '10:00 AM', amount: '1400.00', transactionType: 'credit' },
  { name: 'Jennifer Davis', type: 'Deposit', date: '2022-01-23', time: '11:00 AM', amount: '1200.00', transactionType: 'credit' },
  { name: 'William Brown', type: 'Withdrawal', date: '2022-01-24', time: '12:00 PM', amount: '900.00', transactionType: 'debit' },
  { name: 'Mary Johnson', type: 'Transfer', date: '2022-01-25', time: '10:00 AM', amount: '1500.00', transactionType: 'credit' },
];

export default function HomeScreen() {
  return (
    <View className="bg-background-primary">
      <BBTopbar />
      <BBFlatCard className="mt-4" title="Balance" description="Your balance account" onPress={() => {}}>
        <Typography size="sm" weight="bold" color="secondary" className="text-center text-4xl mt-4">N$ 1000.00</Typography>
      </BBFlatCard>
      
      <View className="flex-row justify-center gap-4 mb-4">
        <BBButton label="Add money" symbol="plus" onPress={() => {}} rounded />
        <BBButton label="Transfer money" symbol="paperplane.fill" onPress={() => {}} rounded />
        <BBButton label="Bank details" symbol="newspaper" onPress={() => {}} rounded />
        <BBButton label="My cards" symbol="creditcard" onPress={() => {}} rounded />
      </View>
      
      <BBFlatCardScroll className="mt-4" title="Transactions" description="All your transactions" onPress={() => {}}>
        {transactions.map((transaction, index) => (
          <BBTransactionCard key={index} name={transaction.name} type={transaction.type} date={transaction.date} time={transaction.time} amount={transaction.amount} transactionType={transaction.transactionType} />
        ))}
      </BBFlatCardScroll>
    </View>
  );
}

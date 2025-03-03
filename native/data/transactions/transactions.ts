
export type Transaction = {
    name: string;
    type: string;
    date: string;
    time: string;
    amount: string;
    transactionType: 'credit' | 'debit';
    image: string;
  };
  
  export const transactions: Transaction[] = [
    { name: 'Emily Johnson', type: 'Transfer', date: '2022-01-01', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'Michael Brown', type: 'Deposit', date: '2022-01-02', time: '11:00 AM', amount: '500.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Sarah Lee', type: 'Withdrawal', date: '2022-01-03', time: '12:00 PM', amount: '200.00', transactionType: 'debit' as const, image: 'lady' },
    { name: 'Kevin White', type: 'Transfer', date: '2022-01-04', time: '10:00 AM', amount: '800.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Jessica Davis', type: 'Deposit', date: '2022-01-05', time: '11:00 AM', amount: '600.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'Matthew Martin', type: 'Withdrawal', date: '2022-01-06', time: '12:00 PM', amount: '300.10', transactionType: 'debit' as const, image: 'guy' },
    { name: 'Amanda Taylor', type: 'Transfer', date: '2022-01-07', time: '10:00 AM', amount: '900.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'Christopher Hall', type: 'Deposit', date: '2022-01-08', time: '11:00 AM', amount: '700.04', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Elizabeth Rodriguez', type: 'Withdrawal', date: '2022-01-09', time: '12:00 PM', amount: '400.35', transactionType: 'debit' as const, image: 'lady' },
    { name: 'Brian Thompson', type: 'Transfer', date: '2022-01-10', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Lisa Nguyen', type: 'Deposit', date: '2022-01-11', time: '11:00 AM', amount: '800.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'David Garcia', type: 'Withdrawal', date: '2022-01-12', time: '12:00 PM', amount: '500.00', transactionType: 'debit' as const, image: 'guy' },
    { name: 'Susan Walker', type: 'Transfer', date: '2022-01-13', time: '10:00 AM', amount: '1100.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'Joseph Martin', type: 'Deposit', date: '2022-01-14', time: '11:00 AM', amount: '900.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Margaret Harris', type: 'Withdrawal', date: '2022-01-15', time: '12:00 PM', amount: '600.00', transactionType: 'debit' as const, image: 'lady' },
    { name: 'Frank Davis', type: 'Transfer', date: '2022-01-16', time: '10:00 AM', amount: '1200.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Dorothy Brown', type: 'Deposit', date: '2022-01-17', time: '11:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'George Miller', type: 'Withdrawal', date: '2022-01-18', time: '12:00 PM', amount: '700.00', transactionType: 'debit' as const, image: 'guy' },
    { name: 'Ruth Taylor', type: 'Transfer', date: '2022-01-19', time: '10:00 AM', amount: '1300.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'James Wilson', type: 'Deposit', date: '2022-01-20', time: '11:00 AM', amount: '1100.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Patricia Johnson', type: 'Withdrawal', date: '2022-01-21', time: '12:00 PM', amount: '800.00', transactionType: 'debit' as const, image: 'lady' },
    { name: 'Robert Smith', type: 'Transfer', date: '2022-01-22', time: '10:00 AM', amount: '1400.00', transactionType: 'credit' as const, image: 'guy' },
    { name: 'Jennifer Davis', type: 'Deposit', date: '2022-01-23', time: '11:00 AM', amount: '1200.00', transactionType: 'credit' as const, image: 'lady' },
    { name: 'William Brown', type: 'Withdrawal', date: '2022-01-24', time: '12:00 PM', amount: '900.00', transactionType: 'debit' as const, image: 'guy' },
    { name: 'Mary Johnson', type: 'Transfer', date: '2022-01-25', time: '10:00 AM', amount: '1500.00', transactionType: 'credit' as const, image: 'lady' },
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
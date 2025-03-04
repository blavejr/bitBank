export type ITransaction = {
    name: string;
    type: string;
    date: string;
    time: string;
    amount: string;
    transactionType: 'credit' | 'debit';
    image: string;  
    accountId: number;
  };
  
  export const transactions: ITransaction[] = [
    { name: 'Emily Johnson', type: 'Transfer', date: '2025-02-28', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'Michael Brown', type: 'Deposit', date: '2025-03-01', time: '11:00 AM', amount: '500.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Sarah Lee', type: 'Withdrawal', date: '2025-03-02', time: '12:00 PM', amount: '200.00', transactionType: 'debit' as const, image: 'lady', accountId: 0 },
    { name: 'Kevin White', type: 'Transfer', date: '2025-03-03', time: '10:00 AM', amount: '800.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Jessica Davis', type: 'Deposit', date: '2025-03-04', time: '11:00 AM', amount: '600.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'Matthew Martin', type: 'Withdrawal', date: '2025-03-05', time: '12:00 PM', amount: '300.10', transactionType: 'debit' as const, image: 'guy', accountId: 0 },
    { name: 'Amanda Taylor', type: 'Transfer', date: '2025-03-06', time: '10:00 AM', amount: '900.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'Christopher Hall', type: 'Deposit', date: '2025-03-07', time: '11:00 AM', amount: '700.04', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Elizabeth Rodriguez', type: 'Withdrawal', date: '2025-03-08', time: '12:00 PM', amount: '400.35', transactionType: 'debit' as const, image: 'lady', accountId: 0 },
    { name: 'Brian Thompson', type: 'Transfer', date: '2025-03-09', time: '10:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Lisa Nguyen', type: 'Deposit', date: '2025-03-10', time: '11:00 AM', amount: '800.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'David Garcia', type: 'Withdrawal', date: '2025-03-11', time: '12:00 PM', amount: '500.00', transactionType: 'debit' as const, image: 'guy', accountId: 0 },
    { name: 'Susan Walker', type: 'Transfer', date: '2025-03-12', time: '10:00 AM', amount: '1100.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'Joseph Martin', type: 'Deposit', date: '2025-03-13', time: '11:00 AM', amount: '900.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Margaret Harris', type: 'Withdrawal', date: '2025-03-14', time: '12:00 PM', amount: '600.00', transactionType: 'debit' as const, image: 'lady', accountId: 0 },
    { name: 'Frank Davis', type: 'Transfer', date: '2025-03-15', time: '10:00 AM', amount: '1200.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Dorothy Brown', type: 'Deposit', date: '2025-03-16', time: '11:00 AM', amount: '1000.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'George Miller', type: 'Withdrawal', date: '2025-03-17', time: '12:00 PM', amount: '700.00', transactionType: 'debit' as const, image: 'guy', accountId: 0 },
    { name: 'Ruth Taylor', type: 'Transfer', date: '2025-03-18', time: '10:00 AM', amount: '1300.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'James Wilson', type: 'Deposit', date: '2025-03-19', time: '11:00 AM', amount: '1100.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Patricia Johnson', type: 'Withdrawal', date: '2025-03-20', time: '12:00 PM', amount: '800.00', transactionType: 'debit' as const, image: 'lady', accountId: 0 },
    { name: 'Robert Smith', type: 'Transfer', date: '2025-03-21', time: '10:00 AM', amount: '1400.00', transactionType: 'credit' as const, image: 'guy', accountId: 0 },
    { name: 'Jennifer Davis', type: 'Deposit', date: '2025-03-22', time: '11:00 AM', amount: '1200.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
    { name: 'William Brown', type: 'Withdrawal', date: '2025-03-23', time: '12:00 PM', amount: '900.00', transactionType: 'debit' as const, image: 'guy', accountId: 0 },
    { name: 'Mary Johnson', type: 'Transfer', date: '2025-03-24', time: '10:00 AM', amount: '1500.00', transactionType: 'credit' as const, image: 'lady', accountId: 0 },
  ];
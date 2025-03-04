import { ITransaction } from '@/data/transactions/transactions';

export const calculateBalance = (transactions: ITransaction[]): number => {
    return transactions.reduce((balance, transaction) => {
        const amount = parseFloat(transaction.amount);
        return transaction.transactionType === 'credit' ? balance + amount : balance - amount;
    }, 0);
};

export const calculateBalanceByAccount = (transactions: ITransaction[], accountId: number): number => {
    return transactions.reduce((balance, transaction) => {
        const amount = parseFloat(transaction.amount);
        return transaction.transactionType === 'credit' ? balance + amount : balance - amount;
    }, 0);
};
// Function to calculate total earned in a specific month
export const calculateTotalEarned = (transactions: ITransaction[], month: number, year: number): number => {
    return transactions
      .filter(t => t.transactionType === 'credit' && isTransactionInMonth(t, month, year))
      .reduce((total, t) => total + parseFloat(t.amount), 0);
  };
  
  // Function to calculate total spent in a specific month
  export const calculateTotalSpent = (transactions: ITransaction[], month: number, year: number): number => {
    return transactions
      .filter(t => t.transactionType === 'debit' && isTransactionInMonth(t, month, year))
      .reduce((total, t) => total + parseFloat(t.amount), 0);
  };
  
  // Helper function to check if a transaction is in the given month and year
  const isTransactionInMonth = (transaction: ITransaction, month: number, year: number): boolean => {
    const transactionDate = new Date(transaction.date);
    return transactionDate.getMonth() + 1 === month && transactionDate.getFullYear() === year;
  };

export interface ITotals {
    balance: number;
    expenditure: number;
    income: number;
}

export const calculateTotals = (transactions: ITransaction[]): ITotals => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    return {
        balance: calculateBalance(transactions),
        expenditure: calculateTotalSpent(transactions, currentMonth, currentYear),
        income: calculateTotalEarned(transactions, currentMonth, currentYear),
    };
};




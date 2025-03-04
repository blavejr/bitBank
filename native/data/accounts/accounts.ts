export interface IAccount {
  id: number;
  name: string;
  accountNumber: string;
  type: string;
  status: string;
  currency: string;
  country: string;
  bank: string;
  branch: {
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
        region: string;
        country: string;
        erf: number;
    }
  };
  userId: number;
}

export const accounts: IAccount[] = [
  { id: 0, name: 'Main Account', accountNumber: '1234567890', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 0 },
  { id: 1, name: 'Main Account', accountNumber: '2345678901', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 1 },
  { id: 2, name: 'Main Account', accountNumber: '3456789012', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 2 },
  { id: 3, name: 'Main Account', accountNumber: '4567890123', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 3 },
  { id: 4, name: 'Main Account', accountNumber: '5678901234', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 4 },
  { id: 5, name: 'Main Account', accountNumber: '6789012345', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 5 },
  { id: 6, name: 'Main Account', accountNumber: '7890123456', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 6 },
  { id: 7, name: 'Main Account', accountNumber: '8901234567', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 7 },
  { id: 8, name: 'Main Account', accountNumber: '9012345678', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 8 },
  { id: 9, name: 'Main Account', accountNumber: '0123456789', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 9 },
  { id: 10, name: 'Main Account', accountNumber: '1234567890', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 10 },
  { id: 11, name: 'Main Account', accountNumber: '2345678901', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 11 },
  { id: 12, name: 'Main Account', accountNumber: '3456789012', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 12 },
  { id: 13, name: 'Main Account', accountNumber: '4567890123', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 13 },
  { id: 14, name: 'Main Account', accountNumber: '5678901234', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 14 },
  { id: 15, name: 'Main Account', accountNumber: '6789012345', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 15 },
  { id: 16, name: 'Main Account', accountNumber: '7890123456', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 16 },
  { id: 17, name: 'Main Account', accountNumber: '8901234567', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 17 },
  { id: 18, name: 'Main Account', accountNumber: '9012345678', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 18 },
  { id: 19, name: 'Main Account', accountNumber: '0123456789', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 19 },
  { id: 20, name: 'Main Account', accountNumber: '1234567890', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 20 },
  { id: 21, name: 'Main Account', accountNumber: '2345678901', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 21 },
  { id: 22, name: 'Main Account', accountNumber: '3456789012', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 22 },
  { id: 23, name: 'Main Account', accountNumber: '4567890123', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 23 },
  { id: 24, name: 'Main Account', accountNumber: '5678901234', type: 'Savings', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 24 },
  { id: 25, name: 'Main Account', accountNumber: '6789012345', type: 'Checking', status: 'Active', currency: 'Namibian Dollar', country: 'Namibia', bank: 'BitBank', branch: { id: 0, name: 'Main Branch', address: { street: '123 Main St', city: 'Windhoek', region: 'Khomas', country: 'Namibia', erf: 1234567890 } }, userId: 25 },
];

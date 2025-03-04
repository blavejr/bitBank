import { ImageSourcePropType } from 'react-native';

export interface ICard {
    id: number;
    name: string;
    number: string;
    expiry: string;
    cvv: string;
    userId: number;
    accountId: number;
    isLocked: boolean;
    image: ImageSourcePropType;
}

export const cards: ICard[] = [
    { id: 0, name: 'Main Card', number: '1234567890129481', expiry: '01/25', cvv: '123', userId: 0, accountId: 0, isLocked: false, image: require('@/assets/images/visa-1.png') },
    { id: 0o11, name: 'Black Card', number: '1234565423123456', expiry: '01/26', cvv: '123', userId: 0, accountId: 0, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 0o12, name: 'Gold Card', number: '1234567234567890', expiry: '01/27', cvv: '123', userId: 0, accountId: 0, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 0o13, name: 'Platinum Card', number: '1234567834567890', expiry: '02/25', cvv: '123', userId: 0, accountId: 0, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 0o14, name: 'Diamond Card', number: '1234567890123456', expiry: '03/25', cvv: '123', userId: 0, accountId: 0, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 1, name: 'Main Card', number: '2345678901234567', expiry: '02/26', cvv: '234', userId: 1, accountId: 1, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 2, name: 'Main Card', number: '3456789012345678', expiry: '03/27', cvv: '345', userId: 2, accountId: 2, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 3, name: 'Main Card', number: '4567890123456789', expiry: '04/28', cvv: '456', userId: 3, accountId: 3, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 4, name: 'Main Card', number: '5678901234567890', expiry: '05/29', cvv: '567', userId: 4, accountId: 4, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 5, name: 'Main Card', number: '6789012345678901', expiry: '06/30', cvv: '678', userId: 5, accountId: 5, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 6, name: 'Main Card', number: '7890123456789012', expiry: '07/31', cvv: '789', userId: 6, accountId: 6, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 7, name: 'Main Card', number: '8901234567890123', expiry: '08/32', cvv: '890', userId: 7, accountId: 7, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 8, name: 'Main Card', number: '9012345678901234', expiry: '09/33', cvv: '901', userId: 8, accountId: 8, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 9, name: 'Main Card', number: '0123456789012345', expiry: '10/34', cvv: '012', userId: 9, accountId: 9, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 10, name: 'Main Card', number: '1234567890123456', expiry: '11/35', cvv: '123', userId: 10, accountId: 10, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 11, name: 'Main Card', number: '2345678901234567', expiry: '12/36', cvv: '234', userId: 11, accountId: 11, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 12, name: 'Main Card', number: '3456789012345678', expiry: '01/37', cvv: '345', userId: 12, accountId: 12, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 13, name: 'Main Card', number: '4567890123456789', expiry: '02/38', cvv: '456', userId: 13, accountId: 13, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 14, name: 'Main Card', number: '5678901234567890', expiry: '03/39', cvv: '567', userId: 14, accountId: 14, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 15, name: 'Main Card', number: '6789012345678901', expiry: '04/40', cvv: '678', userId: 15, accountId: 15, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 16, name: 'Main Card', number: '7890123456789012', expiry: '05/41', cvv: '789', userId: 16, accountId: 16, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 17, name: 'Main Card', number: '8901234567890123', expiry: '06/42', cvv: '890', userId: 17, accountId: 17, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 18, name: 'Main Card', number: '9012345678901234', expiry: '07/43', cvv: '901', userId: 18, accountId: 18, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 19, name: 'Main Card', number: '0123456789012345', expiry: '08/44', cvv: '012', userId: 19, accountId: 19, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 20, name: 'Main Card', number: '1234567890123456', expiry: '09/45', cvv: '123', userId: 20, accountId: 20, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 21, name: 'Main Card', number: '2345678901234567', expiry: '10/46', cvv: '234', userId: 21, accountId: 21, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 22, name: 'Main Card', number: '3456789012345678', expiry: '11/47', cvv: '345', userId: 22, accountId: 22, isLocked: true, image: require('@/assets/images/visa-2.png') },
    { id: 23, name: 'Main Card', number: '4567890123456789', expiry: '12/48', cvv: '456', userId: 23, accountId: 23, isLocked: true, image: require('@/assets/images/visa-1.png') },
    { id: 24, name: 'Main Card', number: '5678901234567890', expiry: '01/49', cvv: '567', userId: 24, accountId: 24, isLocked: true, image: require('@/assets/images/visa-3.png') },
    { id: 25, name: 'Main Card', number: '6789012345678901', expiry: '02/50', cvv: '678', userId: 25, accountId: 25, isLocked: true, image: require('@/assets/images/visa-2.png') },
];

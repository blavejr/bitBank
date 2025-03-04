import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native'
import { router, useRouter } from 'expo-router';
import BBButton from '@/components/BBButton';
import { cards as cardsData, ICard } from '@/data/cards/cards';
import { readFromStorage } from '@/utils/localStorage';
import { IUser } from '@/data/users/users';
import { accounts } from '@/data/accounts/accounts';

interface Card {
  id: number;
  number: string;
  cvv: string;
  expiryDate: string;
  image: any;
  isLocked: boolean; // Added to the interface to include the lock state
  name: string; // Added to include the card name
}

export default function BankCardsScreen() {
  const router = useRouter();
  const [cards, setCards] = useState<ICard[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollRef, setScrollRef] = useState<ScrollView | null>(null);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const user: IUser = await readFromStorage('user');
      setUser(user);
      setCards(cardsData.filter((card) => card.userId === user.id));
    };
    fetchUser();
  }, []);

  const handleCreateCard = () => {
    if (!user) return;
    setLoadingText('Generating card...');
    setIsLoading(true);
    setTimeout(() => {
      const userAccount = accounts.find((account) => account.userId === user.id);
      if (!userAccount?.id) return; // Exit if no valid account found

      const newCard = {
        id: Math.random() * 1000,
        name: 'New Card', // Assuming a default name for the new card
        number: `${Math.floor(Math.random() * 1000000000000000)}`,
        cvv: `${Math.floor(Math.random() * 1000)}`,
        expiry: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 100) + 20}`,
        image: require('../assets/images/visa-1.png'),
        isLocked: false,
        userId: user.id,
        accountId: userAccount.id,  // Now we know this is a valid number
      };
      setCards([...cards, newCard]);
      setIsLoading(false);
      scrollRef?.scrollToEnd({ animated: true });
    }, 2000);
  }

  const handleDeleteCard = (cardId: number) => {
    setLoadingText('Deleting card...');
    setIsLoading(true);
    setTimeout(() => {
      // Assuming there's a function to handle the card deletion logic
      // For demonstration, we'll just remove the card from the state array
      setCards(cards.filter(card => card.id !== cardId));
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading animation
  }

  const handleFreezeCard = (cardId: number) => {
    setLoadingText('Locking card...');
    setIsLoading(true);
    setTimeout(() => {
      // Assuming there's a function to handle the card freezing logic
      // For demonstration, we'll just toggle the isLocked state of the card
      setCards(cards.map(card => card.id === cardId ? { ...card, isLocked: true } : card));
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading animation
  }

  const handleChangePin = (cardId: number) => {
      router.push('/changepin');
  }

  const handleUnlockCard = (cardId: number) => {
    setLoadingText('Unlocking card...');
    setIsLoading(true);
    setTimeout(() => {
      // Assuming there's a function to handle the card unlocking logic
      // For demonstration, we'll just toggle the isLocked state of the card
      setCards(cards.map(card => card.id === cardId ? { ...card, isLocked: false } : card));
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading animation
  }

  return (
    <View className="flex-1 p-5 bg-white justify-center">
      <Text className="text-3xl font-bold text-center text-gray-800 mb-5">Bank Cards</Text>
      <ScrollView ref={setScrollRef}>
        {cards.map((card, index) => (
          <View key={index} className="mb-5 relative">
            {card.isLocked && (
              <View className="absolute top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex items-center justify-center rounded-lg">
                <Text className="text-white text-xl font-bold">LOCKED</Text>
              </View>
            )}
            <Image source={card.image} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
            <View className="p-5">
              <Text className="text-xl font-semibold text-gray-800 mb-2">Card Details</Text>
              <View className="flex-row justify-between mb-2.5">
                <View>
                  <Text className="text-base text-gray-800 mb-1">Name</Text>
                  <Text className="text-base text-primary">{card.name}</Text>
                </View>
                <View>
                  <Text className="text-base text-gray-800 mb-1">Card Number</Text>
                  <Text className="text-base text-primary">{card.number}</Text>
                </View>
                <View>
                  <Text className="text-base text-gray-800 mb-1">CVV</Text>
                  <Text className="text-base text-primary">{card.cvv}</Text>
                </View>
                <View>
                  <Text className="text-base text-gray-800 mb-1">Expiry</Text>
                  <Text className="text-base text-primary">{card.expiry}</Text>
                </View>
              </View>
              <View className="flex-row justify-between items-center mt-5">
                <BBButton label="Copy Details" symbol="copy" onPress={() => {}} />
                <BBButton label="Delete Card" symbol="trash" onPress={() => handleDeleteCard(card.id)} />
                {card.isLocked ? (
                  <BBButton label="Unlock Card" symbol="unlock" onPress={() => handleUnlockCard(card.id)} />
                ) : (
                  <BBButton label="Freeze Card" symbol="lock" onPress={() => handleFreezeCard(card.id)} />
                )}
                <BBButton label="Change Pin" symbol="key" onPress={() => handleChangePin(card.id)} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      {isLoading && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-transparent flex items-center justify-center">
          <ActivityIndicator size="large" color="#4B7280" />
          <Text className="text-black ml-2 text-xl font-bold">
            {loadingText}
          </Text>
        </View>
      )}
      <BBButton label="Create Card" symbol="plus" onPress={handleCreateCard} />
    </View>
  );
}

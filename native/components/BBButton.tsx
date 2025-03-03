import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconSymbol } from './ui/IconSymbol';
import { Typography } from './ui/typography/Typo';
interface BBButtonProps {
  label?: string;
  symbol?: string;
  text?: string;
  rounded?: boolean;
  onPress: () => void;
}

export default function BBButton({ label, symbol="bank", text, rounded, onPress }: BBButtonProps) {
  return (
    <View className="items-center gap-2 mt-4">
      <TouchableOpacity onPress={onPress} className="bg-background-primary rounded-full p-4 items-center justify-center">
        {symbol && <IconSymbol name={symbol as any} size={24} color="skyblue"/>}
        {text && <Typography size="sm" weight="bold" color="white">{text}</Typography>}
      </TouchableOpacity>
      {label && <Typography size="sm" weight="bold" style={{ marginTop: 5 }} color="white">{label}</Typography>}
    </View>
  )
}
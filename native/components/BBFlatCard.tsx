import { View, ScrollView } from 'react-native'
import React from 'react';
import { Typography } from './ui/typography/Typo';

interface BBFlatCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
}   

export default function BBFlatCard({ title="title", description="", children, onPress=() => {}, className="" }: BBFlatCardProps) {
  return (
    <View className={`min-h-10 bg-white p-4 items-center justify-center ${className}`}>
      <Typography size="sm" weight="normal" color="secondary">{description}</Typography>
      {children}
    </View>
  )
}
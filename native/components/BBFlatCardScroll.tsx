import { View, ScrollView } from 'react-native'
import React from 'react';
import { Typography } from './ui/typography/Typo';

interface BBFlatCardScrollProps {
  title: string;
  description: string;
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
}   

export default function BBFlatCardScroll({ title="title", description="", children, onPress=() => {}, className="" }: BBFlatCardScrollProps) {
  return (
    <ScrollView>
      <View className={`min-h-40 bg-white p-4 items-center justify-center ${className}`}>
        <Typography size="sm" weight="normal" color="secondary">{description}</Typography>
        {children}
      </View>
    </ScrollView>
  )
}
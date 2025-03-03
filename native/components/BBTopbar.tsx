import { View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconSymbol } from './ui/IconSymbol';

export default function BBTopbar() {
  return (
    <View className="flex-row justify-between items-center ml-4 mr-4">
      <TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} style={{ width: 50, height: 50, borderRadius: 50 }} />
      </TouchableOpacity>
      <View className="flex-row justify-between items-center gap-2 bg-gray-100 border border-gray-300 rounded-md p-1 w-3/4">
        <TextInput placeholder="Search" className="flex-1" />
        <TouchableOpacity>
          <IconSymbol name="magnifyingglass" size={20} />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-between items-center gap-2">
        <TouchableOpacity>
          <IconSymbol name="bell" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
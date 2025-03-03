import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolView, SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useColorScheme } from "@/hooks/useColorScheme";
import { Feather } from '@expo/vector-icons';

// Mapping SF Symbols to MaterialIcons
const MAPPING = {
  'house.fill': { ios: 'house.fill', android: 'home' },
  'paperplane.fill': { ios: 'paperplane.fill', android: 'send' },
  'chevron.left.forwardslash.chevron.right': { ios: 'chevron.left.forwardslash.chevron.right', android: 'code' },
  'chevron.right': { ios: 'chevron.right', android: 'chevron-right' },
  'gear': { ios: 'gear', android: 'settings' },
  'newspaper': { ios: 'newspaper', android: 'newspaper' },
  'creditcard': { ios: 'creditcard', android: 'credit-card' },
  'plus': { ios: 'plus', android: 'add' },
  'magnifyingglass': { ios: 'magnifyingglass', android: 'search' },
  'bell': { ios: 'bell', android: 'notifications' },
  'arrow.up.arrow.down': { ios: 'arrow.up.arrow.down', android: 'swap-vert' },
  'lock': { ios: 'lock.fill', android: 'lock' },
  'key': { ios: 'key.fill', android: 'vpn-key' },
  'copy': { ios: 'doc.on.doc', android: 'content-copy' }, // ✅ Fixed for iOS
  'trash': { ios: 'trash.fill', android: 'delete' },
} as const;

export type IconSymbolName = keyof typeof MAPPING;

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: IconSymbolName;
  size?: number;
  color?: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  const colorScheme = useColorScheme();
  const iosIcon = MAPPING[name]?.ios;
  const androidIcon = MAPPING[name]?.android || "help-outline"; // Fallback for unknown icons

  return Platform.OS === 'ios' ? (
    <SymbolView name={iosIcon} size={size} weight={weight} style={style} />
    // <Feather name={'copy'} size={size} color={color || (colorScheme === 'dark' ? 'white' : 'black')} style={style as StyleProp<TextStyle>} />
  ) : (
    <MaterialIcons
      name={androidIcon}
      color={color || (colorScheme === 'dark' ? 'white' : 'black')}
      size={size}
      style={style as StyleProp<TextStyle>}
    />
  );
}

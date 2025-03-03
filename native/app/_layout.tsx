import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { verifyInstallation } from 'nativewind';
import BBlayoutView from '@/components/ui/layoutView';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Roboto_Flex/static/RobotoFlex-Regular.ttf'),
  });

  useEffect(() => {
    verifyInstallation();
    if (loaded) {
      SplashScreen.hideAsync();
      router.replace('/login');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <BBlayoutView>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </BBlayoutView>
  );
}

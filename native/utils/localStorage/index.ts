import * as SecureStore from 'expo-secure-store';

const ACCEPTED_KEYS = ['user'];

const checkKey = (key: string) => {
  if (!ACCEPTED_KEYS.includes(key)) {
    console.log(`Key ${key} is not accepted`);
    return false;
  }
  return true;
};

const handleError = (error: any, action: string) => {
  console.log(`Error ${action} from storage`, error);
};

export const readFromStorage = async (key: string) => {
  if (!checkKey(key)) return null;
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    handleError(error, 'reading');
  }
};

export const writeToStorage = async (key: string, value: any) => {
  if (!checkKey(key)) return;
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (error) {
    handleError(error, 'writing');
  }
};

export const removeFromStorage = async (key: string) => {
  if (!checkKey(key)) return;
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    handleError(error, 'removing');
  }
};

export const clearStorage = async () => {
  try {
    await Promise.all(ACCEPTED_KEYS.map(key => SecureStore.deleteItemAsync(key)));
  } catch (error) {
    handleError(error, 'clearing');
  }
};

import { Button } from '#shared/view/components/Button/Button';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type HomeRouteParams = undefined;

export const Home = () => {
  const onSubmit = () => console.warn('submit');

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Login Form</Text>
        <Button.Primary label="Submit" onPress={onSubmit} />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

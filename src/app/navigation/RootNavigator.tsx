import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '#app/navigation/navigation.types';
import { Home } from '#app/navigation/Home.screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

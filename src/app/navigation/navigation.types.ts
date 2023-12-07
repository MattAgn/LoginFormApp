import type { HomeRouteParams } from '#app/navigation/Home.screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: HomeRouteParams;
};

// Type of the props of screen components in root stack
// Allows safe access to route params + navigator-specific actions
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// Automatically type `useNavigation`, `ref`, `linking`, etc.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}

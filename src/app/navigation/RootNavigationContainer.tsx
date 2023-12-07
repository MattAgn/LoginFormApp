// Uncomment once Flipper is installed
// import { useFlipper } from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import React from 'react';

export const RootNavigationContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const navigationContainerRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationContainerRef}>
      {children}
    </NavigationContainer>
  );
};

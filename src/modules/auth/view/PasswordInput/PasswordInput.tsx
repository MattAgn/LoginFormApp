import { forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';

import {
  TextInput,
  TextInputProps,
} from '#shared/view/components/TextInput/TextInput';

import { PasswordInputIcon } from './PasswordInputIcon';

interface PasswordSignUpInputProps extends TextInputProps {
  error?: FieldError;
}

export const PasswordInput = forwardRef<RNTextInput, PasswordSignUpInputProps>(
  ({ error, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    const rightIcon = (
      <PasswordInputIcon
        isVisible={isVisible}
        toggleIsVisible={() => setIsVisible(!isVisible)}
      />
    );

    return (
      <TextInput
        testID="password-input"
        placeholder="Your password"
        label="Password"
        secureTextEntry={!isVisible}
        rightIcon={rightIcon}
        autoComplete="password"
        textContentType="password"
        clearTextOnFocus={false}
        ref={ref}
        errorLabel={error?.message}
        {...props}
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

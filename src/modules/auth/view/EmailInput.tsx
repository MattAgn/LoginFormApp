import {
  TextInput,
  TextInputProps,
} from '#shared/view/components/TextInput/TextInput';
import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';

interface PasswordSignUpInputProps extends TextInputProps {
  error?: FieldError;
}

export const EmailInput = forwardRef<RNTextInput, PasswordSignUpInputProps>(
  ({ label = 'Email address', onChangeText, error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        placeholder="Your email"
        label={label}
        autoComplete="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => onChangeText?.(text.trim())}
        errorLabel={error?.message}
        {...props}
      />
    );
  },
);

EmailInput.displayName = 'EmailInput';

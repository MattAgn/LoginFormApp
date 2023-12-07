import styled from '@emotion/native';
import { forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { TextInput as RNTextInput, TextInputProps, View } from 'react-native';

import { Spacer } from '#shared/view/components/Spacer/Spacer';
import { TextInput } from '#shared/view/components/TextInput/TextInput';

import { ValidationCriteriaContainer } from '#modules/auth/view/PasswordInput/ValidationCriteriaContainer';
import { PasswordInputIcon } from './PasswordInputIcon';

interface PasswordSignUpInputProps extends TextInputProps {
  error?: FieldError;
}

export const PasswordSignUpInput = forwardRef<
  RNTextInput,
  PasswordSignUpInputProps
>(({ error, value, ...props }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const errorTypes = error?.types;

  const rightIcon = (
    <PasswordInputIcon
      isVisible={isVisible}
      toggleIsVisible={() => setIsVisible(!isVisible)}
    />
  );

  return (
    <Column>
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
        value={value}
        errorLabel={undefined}
        {...props}
      />

      <Spacer vertical={10} />

      <ValidationCriteriaContainer value={value} errorTypes={errorTypes} />
    </Column>
  );
});

PasswordSignUpInput.displayName = 'PasswordSignUpInput';

const Column = styled(View)({});

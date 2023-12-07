import { Credentials } from '#modules/auth/login/domain/Credentials.types';
import { loginFormValidator } from '#modules/auth/login/domain/loginFormValidator.validator';
import { EmailInput } from '#modules/auth/view/EmailInput';
import { FormInput } from '#modules/auth/view/FormInput';
import { PasswordInput } from '#modules/auth/view/PasswordInput/PasswordInput';
import { Button } from '#shared/view/components/Button/Button';
import { Spacer } from '#shared/view/components/Spacer/Spacer';
import { zodResolver } from '@hookform/resolvers/zod';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export type HomeRouteParams = undefined;

export const useLoginForm = (onSubmit: (credentials: Credentials) => void) => {
  const loginValidatorSchema = loginFormValidator();
  const { control, handleSubmit } = useForm<Credentials>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginValidatorSchema),
    reValidateMode: 'onSubmit',
  });

  const onFormSubmit = handleSubmit((formData) => {
    onSubmit(formData);
  });
  return { control, onFormSubmit };
};

export const Home = () => {
  const onSubmit = (data: unknown) => console.warn('data', data);

  const { control, onFormSubmit } = useLoginForm(onSubmit);

  const passwordRef = useRef<TextInput>(null);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FormInput
          control={control}
          Component={EmailInput}
          fieldName="email"
          returnKeyType="next"
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false}
        />
        <Spacer vertical={8} />
        <FormInput
          control={control}
          Component={PasswordInput}
          fieldName="password"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={() => {
            onFormSubmit();
          }}
        />

        <Spacer vertical={16} />
        <Button.Primary
          label="Login"
          onPress={onFormSubmit}
          isLoading={false}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 80,
    justifyContent: 'center',
  },
});

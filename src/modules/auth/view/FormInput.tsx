import { TextInputProps } from '#shared/view/components/TextInput/TextInput';
import { ReactNode, Ref, forwardRef } from 'react';
import {
  Controller,
  FieldError,
  type Control,
  type FieldValues,
  type Path,
} from 'react-hook-form';
import { TextInput as RNTextInput } from 'react-native';

type Props<TFieldValues extends FieldValues, TContext> = TextInputProps & {
  fieldName: Path<TFieldValues>;
  control?: Control<TFieldValues, TContext>;
  Component: (
    props: TextInputProps & { ref?: Ref<RNTextInput> } & {
      error?: FieldError;
    },
  ) => ReactNode;
};

const BaseFormInput = <TFieldValues extends FieldValues, TContext>(
  {
    fieldName,
    control,
    Component,
    ...textInputProps
  }: Props<TFieldValues, TContext>,
  ref: Ref<RNTextInput>,
) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={fieldName}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => {
        return (
          <Component
            {...textInputProps}
            ref={ref}
            value={value}
            onChangeText={(newValue) => {
              onChange(newValue);
              textInputProps.onChangeText &&
                textInputProps.onChangeText(newValue);
            }}
            onBlur={(event) => {
              onBlur();
              textInputProps.onBlur && textInputProps.onBlur(event);
            }}
            error={error}
          />
        );
      }}
    />
  );
};
BaseFormInput.displayName = 'BaseFormInput';

// We need to cast here because forwardRef breaks the generics
// See this dicsussion for more details https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
export const FormInput = forwardRef(BaseFormInput) as <
  TFieldValues extends FieldValues,
  TContext,
>(
  p: Props<TFieldValues, TContext> & { ref?: Ref<RNTextInput> },
) => ReactNode;

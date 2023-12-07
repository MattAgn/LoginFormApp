import { MultipleFieldErrors } from 'react-hook-form';
import { ZodIssueCode } from 'zod/lib/ZodError';

import {
  messageLowercaseError,
  messageMinCharactersError,
  messageNumberError,
  messageSymbolError,
  messageUpperCaseError,
} from '#modules/auth/login/domain/passwordValidatorSchema.validator';
import { ValidationCriteria } from '#modules/auth/view/ValidationCriteria';
import { Spacer } from '#shared/view/components/Spacer/Spacer';

const hasError = ({
  errorMessage,
  errorType,
  errorTypes,
}: {
  errorMessage: string;
  errorType: ZodIssueCode;
  errorTypes?: MultipleFieldErrors;
}) => {
  const currentErrorType = errorTypes?.[errorType];

  if (currentErrorType === undefined) {
    return false;
  }

  if (Array.isArray(currentErrorType)) {
    return currentErrorType.includes(errorMessage);
  }

  return errorTypes?.[errorType] === errorMessage;
};

type Props = {
  errorTypes?: MultipleFieldErrors;
  value?: string;
};

export const ValidationCriteriaContainer = ({ errorTypes, value }: Props) => {
  return (
    <>
      <ValidationCriteria
        isApplicable={value ? value.length > 0 : false}
        label={messageLowercaseError}
        isValid={
          !hasError({
            errorMessage: messageLowercaseError,
            errorType: 'invalid_string',
            errorTypes: errorTypes,
          })
        }
      />
      <Spacer vertical={10} />
      <ValidationCriteria
        isApplicable={value ? value.length > 0 : false}
        label={messageUpperCaseError}
        isValid={
          !hasError({
            errorMessage: messageUpperCaseError,
            errorType: 'invalid_string',
            errorTypes: errorTypes,
          })
        }
      />
      <Spacer vertical={10} />
      <ValidationCriteria
        isApplicable={value ? value.length > 0 : false}
        label={messageNumberError}
        isValid={
          !hasError({
            errorMessage: messageNumberError,
            errorType: 'invalid_string',
            errorTypes: errorTypes,
          })
        }
      />
      <Spacer vertical={10} />
      <ValidationCriteria
        isApplicable={value ? value.length > 0 : false}
        label={messageSymbolError}
        isValid={
          !hasError({
            errorMessage: messageSymbolError,
            errorType: 'invalid_string',
            errorTypes: errorTypes,
          })
        }
      />

      <Spacer vertical={10} />
      <ValidationCriteria
        isApplicable={value ? value.length > 0 : false}
        label={messageMinCharactersError}
        isValid={
          !hasError({
            errorMessage: messageMinCharactersError,
            errorType: 'too_small',
            errorTypes: errorTypes,
          })
        }
      />
    </>
  );
};

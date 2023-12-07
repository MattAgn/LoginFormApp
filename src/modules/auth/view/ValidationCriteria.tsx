import styled from '@emotion/native';
import { Theme, useTheme } from '@emotion/react';

import { Spacer } from '#shared/view/components/Spacer/Spacer';
import { Typography } from '#shared/view/components/Typography/Typography';
import { CheckedBoxIcon } from '#shared/view/icons/CheckedBox.icon';
import { CrossIcon } from '#shared/view/icons/Cross.icon';

const getValidationColor = ({
  theme,
  isValid,
  isApplicable,
}: {
  theme: Theme;
  isValid: boolean;
  isApplicable: boolean;
}) => {
  if (isApplicable) {
    if (isValid) {
      return theme.colors.statusSuccess;
    }
    return theme.colors.statusError;
  }
  return theme.colors.grey200;
};

const getAccessibilityLabel = ({
  label,
  isValid,
  isApplicable,
}: {
  label: string;
  isValid: boolean;
  isApplicable: boolean;
}) => {
  if (isApplicable) {
    if (isValid) {
      return `Valid criteria: ${label}`;
    }
    return `Invalid criteria: ${label}`;
  }
  return label;
};

type Props = {
  label: string;
  isValid: boolean;
  isApplicable: boolean;
};

export const ValidationCriteria = ({ label, isValid, isApplicable }: Props) => {
  const theme = useTheme();
  const color = getValidationColor({ theme, isValid, isApplicable });
  return (
    <Container>
      {isValid ? (
        <CheckedBoxIcon size={16} color={color} />
      ) : (
        <CrossIcon size={16} color={color} />
      )}

      <Spacer horizontal={20} />

      <Typography.P2Regular
        color={color}
        accessibilityLabel={getAccessibilityLabel({
          label,
          isValid,
          isApplicable,
        })}
      >
        {label}
      </Typography.P2Regular>
    </Container>
  );
};

const Container = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

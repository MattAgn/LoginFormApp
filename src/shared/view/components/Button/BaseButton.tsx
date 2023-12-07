import styled from '@emotion/native';
import React from 'react';
import { Pressable, TextStyle } from 'react-native';

import { ButtonProps } from '#shared/view/components/Button/Button';
import { Loader } from '#shared/view/components/Loader/Loader';
import { Typography } from '#shared/view/components/Typography/Typography';
import { BaseButtonStyle, ButtonState } from '#shared/view/theme/button';
import { ThemeColor } from '#shared/view/theme/colors.types';

const BUTTON_ICON_SIZE_PX = 24;

type BaseButtonProps = ButtonProps & {
  style: BaseButtonStyle;
};

const BaseButtonUnmemoized = ({
  isDisabled = false,
  isLoading,
  onPress,
  label,
  StartIcon,
  EndIcon,
  style,
  accessibilityLabel,
}: BaseButtonProps) => {
  // https://www.bam.tech/article/how-insidious-reactnative-onpress-could-be
  const handlePress = () => onPress();

  return (
    <Pressable
      onPress={handlePress}
      disabled={isLoading || isDisabled}
      style={({ pressed }) =>
        style[getButtonState({ isDisabled, isPressed: pressed })].container
      }
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityRole="button"
      accessibilityValue={isLoading ? { text: 'Loading' } : undefined}
    >
      {({ pressed }) => (
        <ContentContainer>
          <ButtonContent
            StartIcon={StartIcon}
            EndIcon={EndIcon}
            isLoading={isLoading}
            label={label}
            textStyle={
              style[getButtonState({ isDisabled, isPressed: pressed })].text
            }
          />
        </ContentContainer>
      )}
    </Pressable>
  );
};

export const BaseButton = React.memo(BaseButtonUnmemoized);

type ButtonContentProps = Pick<
  BaseButtonProps,
  'EndIcon' | 'StartIcon' | 'isLoading' | 'label'
> & { textStyle: { color: ThemeColor } & TextStyle };

const ButtonContent = ({
  StartIcon,
  EndIcon,
  isLoading,
  label,
  textStyle,
}: ButtonContentProps) => {
  if (isLoading) {
    return (
      <Loader
        size={BUTTON_ICON_SIZE_PX}
        color={textStyle.color}
        testID="activity-indicator"
      />
    );
  }

  return (
    <>
      {StartIcon ? (
        <StartIcon color={textStyle.color} size={BUTTON_ICON_SIZE_PX} />
      ) : null}
      <Typography.P1Bold style={textStyle}>{label}</Typography.P1Bold>
      {EndIcon ? (
        <EndIcon color={textStyle.color} size={BUTTON_ICON_SIZE_PX} />
      ) : null}
    </>
  );
};

type GetButtonStateParams = {
  isDisabled: boolean;
  isPressed: boolean;
};

const getButtonState = ({
  isDisabled,
  isPressed,
}: GetButtonStateParams): ButtonState => {
  if (isDisabled) {
    return 'disabled';
  }

  if (isPressed) {
    return 'active';
  }

  return 'rest';
};

const ContentContainer = styled.View(() => ({
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 8,
}));

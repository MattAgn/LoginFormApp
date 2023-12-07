import { useTheme } from '@emotion/react';

import { PressableWithFeedback } from '#shared/view/components/PressableWithFeedback/PressableWithFeedback';
import { EyeIcon } from '#shared/view/icons/Eye.icon';
import { EyeClosedIcon } from '#shared/view/icons/EyeClosed.icon';

const ICON_SIZE = 24;

type PasswordInputIconProps = {
  isVisible: boolean;
  toggleIsVisible: () => void;
};
export const PasswordInputIcon = ({
  isVisible,
  toggleIsVisible,
}: PasswordInputIconProps) => {
  const theme = useTheme();

  return (
    <PressableWithFeedback
      testID="touchable-eye-icon"
      onPress={toggleIsVisible}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      accessibilityRole="togglebutton"
      accessibilityLabel="Show the password"
      accessibilityState={{ checked: isVisible }}
    >
      {isVisible ? (
        <EyeClosedIcon color={theme.colors.black} size={ICON_SIZE} />
      ) : (
        <EyeIcon color={theme.colors.black} size={ICON_SIZE} />
      )}
    </PressableWithFeedback>
  );
};

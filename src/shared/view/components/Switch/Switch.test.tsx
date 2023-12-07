import { screen, userEvent } from '@testing-library/react-native';
import { useState } from 'react';

import { Switch } from '#shared/view/components/Switch/Switch';

import { renderWithProviders } from '#testing/render';

const TestSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch
      isChecked={isChecked}
      onPress={() => setIsChecked(!isChecked)}
      accessibilityLabel="switch"
    />
  );
};

describe('Switch', () => {
  it('renders properly', async () => {
    renderWithProviders(<TestSwitch />);

    expect(screen).toMatchComponentSnapshot();
    expect(screen.getByRole('switch')).toHaveAccessibilityState({
      checked: false,
    });

    await userEvent.press(screen.getByRole('switch'));

    expect(screen).toMatchComponentSnapshot();
    expect(screen.getByRole('switch')).toHaveAccessibilityState({
      checked: true,
    });
  });
});

import { screen, userEvent } from '@testing-library/react-native';

import { IconButton } from '#shared/view/components/IconButton/IconButton';
import { CrossIcon } from '#shared/view/icons/Cross.icon';

import { renderWithProviders } from '#testing/render';

describe('Icon Button Component', () => {
  it('renders the icon', () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        accessibilityLabel="opens alert on press"
      />,
    );

    expect(screen.getByTestId('cross-icon')).toBeOnTheScreen();
  });

  it('calls the onPress', async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        accessibilityLabel="opens alert on press"
      />,
    );

    await userEvent.press(screen.getByTestId('cross-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`disables the call of the onPress 
  when both props onPress and variant disabled are sent`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <IconButton
        onPress={mockOnPress}
        Icon={CrossIcon}
        isDisabled
        accessibilityLabel="opens alert on press"
      />,
    );

    await userEvent.press(screen.getByTestId('cross-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});

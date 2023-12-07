import { screen, userEvent } from '@testing-library/react-native';

import { CrossIcon } from '#shared/view/icons/Cross.icon';

import { renderWithProviders } from '#testing/render';

import { Tag } from './Tag';

describe('Tag Component', () => {
  it('renders the label', () => {
    renderWithProviders(<Tag label="test" variant="default" />);

    expect(screen.getByText('test')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders the icon when it is passed as props`, () => {
    renderWithProviders(
      <Tag label="test" variant="default" StartIcon={CrossIcon} />,
    );

    expect(screen.getByTestId('cross-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`calls onPress when tag is pressed`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <Tag label="test" variant="default" onPress={mockOnPress} />,
    );

    await userEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`does not call onPress when tag is pressed and variant is disabled`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <Tag label="test" variant="disabled" onPress={mockOnPress} />,
    );

    await userEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});

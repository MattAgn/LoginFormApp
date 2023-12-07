import { screen, userEvent } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { RadioButton } from './RadioButton';

describe('RadioButton Component', () => {
  it(`renders the label
    when label is sent`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('test')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders of the Checked icon when isChecked is true`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('CheckedRadioButton-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders the Unchecked icon when isChecked is false`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('UnCheckedRadioButton-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders the Disabled icon when isDisabled is true`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={false}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('DisabledRadioButton-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`calls onPress when radio button is pressed`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    await userEvent.press(screen.getByTestId('CheckedRadioButton-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`does not call onPress when radio button is pressed and isDisabled is true`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <RadioButton
        label="test"
        isChecked={true}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    await userEvent.press(screen.getByTestId('DisabledRadioButton-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});

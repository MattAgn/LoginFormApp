import { screen, userEvent } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { CheckBox } from './CheckBox';

describe('CheckBox Component', () => {
  it('renders the label', () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <CheckBox
        label={'test'}
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByText('test')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders the Checked icon when isChecked is true`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('CheckBox-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`renders the Unchecked icon when isChecked is false`, () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <CheckBox
        label={'test'}
        isChecked={false}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    expect(screen.getByTestId('UnCheckBox-icon')).toBeOnTheScreen();
  });

  it('calls of onPress', async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={false}
        onPress={mockOnPress}
      />,
    );

    await userEvent.press(screen.getByTestId('CheckBox-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`does not call onPress when isDisabled is true`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <CheckBox
        label={'test'}
        isChecked={true}
        isDisabled={true}
        onPress={mockOnPress}
      />,
    );

    await userEvent.press(screen.getByTestId('CheckBox-icon'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });
});

import { act, screen, userEvent } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { CrossIcon } from '../../icons/Cross.icon';
import { Button } from './Button';

const isLoading = [true, false];
const isDisabled = [true, false];

const differentTestCases = isLoading.flatMap((loadingElement) =>
  isDisabled.map((disabledElement) => ({
    isLoading: loadingElement,
    isDisabled: disabledElement,
  })),
);

describe('Button Component', () => {
  it('renders the label', () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <Button.Primary label="Button primary" onPress={mockOnPress} />,
    );

    expect(screen.getByText('Button primary')).toBeOnTheScreen();
  });

  it('renders the icon', () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <Button.Primary
        label="Button primary"
        onPress={mockOnPress}
        StartIcon={CrossIcon}
      />,
    );

    expect(screen.getByTestId('cross-icon')).toBeOnTheScreen();
  });

  it('calls the onPress', async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(<Button.Primary label="test" onPress={mockOnPress} />);

    await userEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it(`does not call onPress when button is pressed and disabled is true`, async () => {
    const mockOnPress = jest.fn();

    renderWithProviders(
      <Button.Primary label="test" onPress={mockOnPress} isDisabled={true} />,
    );

    await userEvent.press(screen.getByText('test'));

    expect(mockOnPress).toHaveBeenCalledTimes(0);
  });

  it.each(differentTestCases)(
    'renders Primary Button with props %p',
    (props) => {
      renderWithProviders(
        <Button.Primary
          label="Primary button"
          onPress={jest.fn()}
          {...props}
        />,
      );

      expect(screen).toMatchComponentSnapshot();
    },
  );

  it.each(differentTestCases)(
    'renders Secondary Button with props %p',
    (props) => {
      renderWithProviders(
        <Button.Secondary
          label="Secondary button"
          onPress={jest.fn()}
          {...props}
        />,
      );

      expect(screen).toMatchComponentSnapshot();
    },
  );

  it.each(differentTestCases)(
    'renders Tertiary Button with props %p',
    (props) => {
      renderWithProviders(
        <Button.Tertiary
          label="Tertiary button"
          onPress={jest.fn()}
          {...props}
        />,
      );

      expect(screen).toMatchComponentSnapshot();
    },
  );

  test('primary button pressed matches snapshot', async () => {
    renderWithProviders(
      <Button.Primary label="Primary button" onPress={jest.fn()} />,
    );

    const button = screen.getByRole('button', { name: 'Primary button' });

    await act(async () => {
      button.props.onResponderGrant({
        persist: jest.fn(),
        currentTarget: { measure: jest.fn() },
        nativeEvent: {
          changedTouches: [],
          identifier: 0,
          locationX: 0,
          locationY: 0,
          pageX: 0,
          pageY: 0,
          target: 0,
          timestamp: Date.now(),
          touches: [],
        },
        dispatchConfig: { registrationName: 'onResponderGrant' },
      });
    });

    expect(screen).toMatchComponentSnapshot();
  });

  test('secondary button pressed matches snapshot', async () => {
    renderWithProviders(
      <Button.Secondary label="Secondary button" onPress={jest.fn()} />,
    );

    const button = screen.getByRole('button', { name: 'Secondary button' });

    await act(async () => {
      button.props.onResponderGrant({
        persist: jest.fn(),
        currentTarget: { measure: jest.fn() },
        nativeEvent: {
          changedTouches: [],
          identifier: 0,
          locationX: 0,
          locationY: 0,
          pageX: 0,
          pageY: 0,
          target: 0,
          timestamp: Date.now(),
          touches: [],
        },
        dispatchConfig: { registrationName: 'onResponderGrant' },
      });
    });

    expect(screen).toMatchComponentSnapshot();
  });

  test('tertiary button pressed matches snapshot', async () => {
    renderWithProviders(
      <Button.Tertiary label="Tertiary button" onPress={jest.fn()} />,
    );

    const button = screen.getByRole('button', { name: 'Tertiary button' });

    await act(async () => {
      button.props.onResponderGrant({
        persist: jest.fn(),
        currentTarget: { measure: jest.fn() },
        nativeEvent: {
          changedTouches: [],
          identifier: 0,
          locationX: 0,
          locationY: 0,
          pageX: 0,
          pageY: 0,
          target: 0,
          timestamp: Date.now(),
          touches: [],
        },
        dispatchConfig: { registrationName: 'onResponderGrant' },
      });
    });

    expect(screen).toMatchComponentSnapshot();
  });
});

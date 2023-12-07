import { screen, userEvent } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { TextInput } from './TextInput';

describe('Input Component', () => {
  it('renders the label and placeholder', () => {
    renderWithProviders(
      <TextInput label="mock label" placeholder="mock placeholder" />,
    );

    expect(screen.getByText('mock label')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('mock placeholder')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`does not render an error icon
    when there's no errorLabel`, () => {
    renderWithProviders(
      <TextInput label="mock label" placeholder="mock placeholder" />,
    );

    expect(screen.queryByTestId('error-icon')).toBeFalsy();
  });

  it(`renders the error label and error Icon
    when isError is true`, () => {
    renderWithProviders(
      <TextInput
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
      />,
    );

    expect(screen.getByText('mock error label')).toBeOnTheScreen();
    expect(screen.getByTestId('error-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`calls onChangeText 
    when text is typed in input`, async () => {
    const mockOnChange = jest.fn();

    renderWithProviders(
      <TextInput
        label="mock label"
        placeholder="mock placeholder"
        onChangeText={mockOnChange}
      />,
    );

    await userEvent.type(screen.getByPlaceholderText('mock placeholder'), 'ab');

    expect(mockOnChange).toHaveBeenCalledWith('ab');
  });

  it(`is disabled when isDisabled is true`, () => {
    renderWithProviders(
      <TextInput
        label="mock label"
        placeholder="mock placeholder"
        isDisabled={true}
      />,
    );

    expect(screen.getByPlaceholderText('mock placeholder')).toBeDisabled();
    expect(screen).toMatchComponentSnapshot();
  });

  it(`is disabled when isReadOnly is true`, () => {
    renderWithProviders(
      <TextInput
        label="mock label"
        placeholder="mock placeholder"
        isReadOnly={true}
      />,
    );

    expect(screen.getByPlaceholderText('mock placeholder')).toBeDisabled();
    expect(screen).toMatchComponentSnapshot();
  });
});

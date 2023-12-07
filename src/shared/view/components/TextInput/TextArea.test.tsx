import { screen, userEvent } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { TextArea } from './TextArea';

describe('Testing TextArea Component', () => {
  it('renders the label and placeholder', () => {
    renderWithProviders(
      <TextArea label="mock label" placeholder="mock placeholder" />,
    );

    expect(screen.getByText('mock label')).toBeOnTheScreen();
    expect(screen.getByPlaceholderText('mock placeholder')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it('does not render the error label and error icon', () => {
    renderWithProviders(
      <TextArea label="mock label" placeholder="mock placeholder" />,
    );

    expect(screen.queryByTestId('error-icon')).toBeFalsy();
  });

  it('renders the error label and error icon', () => {
    renderWithProviders(
      <TextArea
        label="mock label"
        placeholder="mock placeholder"
        errorLabel="mock error label"
      />,
    );

    expect(screen.getByText('mock error label')).toBeOnTheScreen();
    expect(screen.getByTestId('error-icon')).toBeOnTheScreen();
    expect(screen).toMatchComponentSnapshot();
  });

  it('calls onChangeText when text is typed in TextArea', async () => {
    const mockOnChange = jest.fn();

    renderWithProviders(
      <TextArea
        label="mock label"
        placeholder="mock placeholder"
        onChangeText={mockOnChange}
      />,
    );

    await userEvent.type(screen.getByPlaceholderText('mock placeholder'), 'ab');

    expect(mockOnChange).toHaveBeenCalledWith('ab');
  });

  it('is disabled when isDisabled is true', () => {
    renderWithProviders(
      <TextArea label="mock label" placeholder="mock placeholder" isDisabled />,
    );

    expect(screen.getByPlaceholderText('mock placeholder')).toBeDisabled();
    expect(screen).toMatchComponentSnapshot();
  });
});

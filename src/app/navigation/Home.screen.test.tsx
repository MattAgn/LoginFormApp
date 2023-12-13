import { Home } from '#app/navigation/Home.screen';
import { renderWithProviders } from '#testing/render';
import {
  fireEvent,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

test('[OLD WAY] form completion with error', async () => {
  renderWithProviders(<Home />);
  const EmailInput = screen.getByLabelText('Email address');
  const PasswordInput = screen.getByLabelText('Password');
  const LoginButton = screen.getByRole('button', { name: 'Login' });

  fireEvent.changeText(EmailInput, 'mat@gmailcom');
  fireEvent.changeText(PasswordInput, 'azerty');
  fireEvent(PasswordInput, 'submitEditing');

  expect(await screen.findByText('Invalid email address')).toBeOnTheScreen();

  fireEvent.changeText(EmailInput, 'mat@gmail.com');
  fireEvent(EmailInput, 'blur');

  await waitForElementToBeRemoved(() =>
    screen.getByText('Invalid email address'),
  );

  fireEvent.press(LoginButton);

  expect(await screen.findByText('Hello Matt!')).toBeOnTheScreen();
});

test('[NEW WAY/FAKE TIMERS] form completion with error', async () => {
  renderWithProviders(<Home />);
  const EmailInput = screen.getByLabelText('Email address');

  await userEvent.type(EmailInput, 'mat@gmailcom', {
    submitEditing: true,
  });
  await userEvent.type(screen.getByLabelText('Password'), 'azerty', {
    submitEditing: true,
  });

  expect(screen.getByText('Invalid email address')).toBeOnTheScreen();

  await userEvent.clear(EmailInput);
  await userEvent.type(EmailInput, 'mat@gmail.com');

  await userEvent.press(screen.getByRole('button', { name: 'Login' }));
  // await userEvent.longPress(screen.getByRole('button', { name: 'Login' }));

  expect(screen.getByText('Hello Matt!')).toBeOnTheScreen();
});

test('[NEW WAY/REAL TIMERS] form completion with error', async () => {
  jest.useRealTimers();
  renderWithProviders(<Home />);
  const EmailInput = screen.getByLabelText('Email address');

  await userEvent.type(EmailInput, 'mat@gmailcom', {
    submitEditing: true,
  });
  await userEvent.type(screen.getByLabelText('Password'), 'azerty', {
    submitEditing: true,
  });

  expect(screen.getByText('Invalid email address')).toBeOnTheScreen();

  await userEvent.clear(EmailInput);
  await userEvent.type(EmailInput, 'mat@gmail.com');

  await userEvent.press(screen.getByRole('button', { name: 'Login' }));
  // await userEvent.longPress(screen.getByRole('button', { name: 'Login' }));

  expect(screen.getByText('Hello Matt!')).toBeOnTheScreen();
});

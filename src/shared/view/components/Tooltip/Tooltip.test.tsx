import { screen } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { Tooltip } from './Tooltip';

describe('Tooltip Component', () => {
  it('renders the title and body', () => {
    renderWithProviders(
      <Tooltip type="info" title="titre" body="Corps de text" />,
    );

    expect(screen.getByText('titre')).toBeOnTheScreen();
    expect(screen.getByText('Corps de text')).toBeOnTheScreen();
  });

  test('info tooltip matches snapshot', () => {
    renderWithProviders(
      <Tooltip type="info" title="titre" body="Corps de text" />,
    );

    expect(screen).toMatchComponentSnapshot();
  });

  test('success tooltip matches snapshot', () => {
    renderWithProviders(
      <Tooltip type="success" title="titre" body="Corps de text" />,
    );

    expect(screen).toMatchComponentSnapshot();
  });

  test('warning tooltip matches snapshot', () => {
    renderWithProviders(
      <Tooltip type="warning" title="titre" body="Corps de text" />,
    );

    expect(screen).toMatchComponentSnapshot();
  });

  test('error tooltip matches snapshot', () => {
    renderWithProviders(
      <Tooltip type="error" title="titre" body="Corps de text" />,
    );

    expect(screen).toMatchComponentSnapshot();
  });
});

import { screen } from '@testing-library/react-native';

import { renderWithProviders } from '#testing/render';

import { Typography } from './Typography';

describe('Typography', () => {
  test('Title xxxlarge matches snapshot', () => {
    renderWithProviders(
      <Typography.TitleXXXLarge>hello</Typography.TitleXXXLarge>,
    );

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title xxlarge matches snapshot', () => {
    renderWithProviders(
      <Typography.TitleXXLarge>hello</Typography.TitleXXLarge>,
    );

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title xlarge matches snapshot', () => {
    renderWithProviders(<Typography.TitleXLarge>hello</Typography.TitleXLarge>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title large matches snapshot', () => {
    renderWithProviders(<Typography.TitleLarge>hello</Typography.TitleLarge>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title medium matches snapshot', () => {
    renderWithProviders(<Typography.TitleMedium>hello</Typography.TitleMedium>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title small matches snapshot', () => {
    renderWithProviders(<Typography.TitleSmall>hello</Typography.TitleSmall>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('Title xsmall matches snapshot', () => {
    renderWithProviders(<Typography.TitleXSmall>hello</Typography.TitleXSmall>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P1 regular matches snapshot', () => {
    renderWithProviders(<Typography.P1Regular>hello</Typography.P1Regular>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P1 bold matches snapshot', () => {
    renderWithProviders(<Typography.P1Bold>hello</Typography.P1Bold>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P1 italic matches snapshot', () => {
    renderWithProviders(<Typography.P1Italic>hello</Typography.P1Italic>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P2 regular matches snapshot', () => {
    renderWithProviders(<Typography.P2Regular>hello</Typography.P2Regular>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P2 bold matches snapshot', () => {
    renderWithProviders(<Typography.P2Bold>hello</Typography.P2Bold>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P2 italic matches snapshot', () => {
    renderWithProviders(<Typography.P2Italic>hello</Typography.P2Italic>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P3 regular matches snapshot', () => {
    renderWithProviders(<Typography.P3Regular>hello</Typography.P3Regular>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P3 bold matches snapshot', () => {
    renderWithProviders(<Typography.P3Bold>hello</Typography.P3Bold>);

    expect(screen).toMatchComponentSnapshot();
  });

  test('P3 italic matches snapshot', () => {
    renderWithProviders(<Typography.P3Italic>hello</Typography.P3Italic>);

    expect(screen).toMatchComponentSnapshot();
  });
});

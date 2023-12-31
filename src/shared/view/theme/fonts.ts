import { FontStyle, Fonts, ParagraphFontType } from './fonts.types';

const getTitleFont = (fontSize: number): FontStyle => ({
  fontSize,
  lineHeight: Math.round(fontSize * 1.3),
});

const getParagraphFonts = (
  fontSize: number,
): Record<ParagraphFontType, FontStyle> => {
  const base = { fontSize, lineHeight: Math.round(fontSize * 1.5) };
  return {
    regular: {
      ...base,
    },
    italic: {
      ...base,
    },
    bold: {
      ...base,
    },
  };
};

export const fonts: Fonts = {
  title: {
    xs: getTitleFont(18),
    s: getTitleFont(22),
    m: getTitleFont(26),
    l: getTitleFont(30),
    xl: getTitleFont(32),
    xxl: getTitleFont(36),
    xxxl: getTitleFont(46),
  },
  paragraph: {
    p1: getParagraphFonts(16),
    p2: getParagraphFonts(14),
    p3: getParagraphFonts(12),
  },
} as const;

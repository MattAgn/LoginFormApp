const paragraphFontTypes = ['regular', 'italic', 'bold'] as const;

export type ParagraphFontType = (typeof paragraphFontTypes)[number];

export type FontStyle = {
  fontSize: number;
  lineHeight: number;
};

const titleFontSizes = ['xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const;

type TitleFontSize = (typeof titleFontSizes)[number];

const paragraphFontSizes = ['p1', 'p2', 'p3'] as const;

type ParagraphFontSize = (typeof paragraphFontSizes)[number];

export type Fonts = {
  title: Record<TitleFontSize, FontStyle>;
  paragraph: Record<ParagraphFontSize, Record<ParagraphFontType, FontStyle>>;
};

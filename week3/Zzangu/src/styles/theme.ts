import { css, DefaultTheme } from 'styled-components';

const colors = {
  Zzangu_Red: '#E2202F',
  Zzangu_Yellow: '#ffe9ad',
  Zzangu_YellowBorder: '#ffd35a',
  Zzangu_SkyBlue: '#BCE4FC',
  Zzangu_Gray: '#777678',
  Zzangu_Black: '#000000',
  Zzangu_White: '#FFFFFF',
  Zzangu_LightPink: '#fff0f0',
  Zzangu_Pink: '#ffe9e9',
  Zzangu_DarkPink: '#f9c4d2',
  Zzangu_PinkBorder: '#b18597',
  Zzangu_PinkShadow: '#ffe3e2',
};

const fonts = {
  ZZangu_Pretendard_Bold_35: css`
    font-family: 'PretendardSemiBold';
    font-size: 3.5rem;
    font-weight: 700;
    font-style: normal;
    line-height: 4.177rem;
  `,
  ZZangu_Pretendard_Semibold_20: css`
    font-family: 'PretendardSemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  `,
  ZZangu_Pretendard_Medium_16: css`
    font-family: 'PretendardMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;

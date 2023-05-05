import { css, DefaultTheme } from 'styled-components';

const colors = {
  Zzangu_Red: '#f16f92',
  Zzangu_Yellow: '#ffe9ad',
  Zzangu_YellowBorder: '#f1a816',
  Zzangu_Blue: '#3b82f6',
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
  ZZangu_Title: css`
    font-family: 'UhBeeSe_hyun';
    font-size: 4.5rem;
    font-weight: 700;
    font-style: normal;
    line-height: 4.177rem;
  `,

  ZZangu_Score: css`
    font-family: 'UhBeeSe_hyun';
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 3rem;
  `,
  ZZangu_Pretendard_Semibold_20: css`
    font-family: 'SDSamliphopangche_Outline';
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;
  `,
  ZZangu_Pretendard_Medium_16: css`
    font-family: 'SDSamliphopangche_Outline';
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

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Zzangu_Red: string;
      Zzangu_Yellow: string;
      Zzangu_SkyBlue: string;
      Zzangu_Gray: string;
      Zzangu_Black: string;
      Zzangu_White: string;
      Zzangu_lightPink: string;
      Zzangu_pink: string;
      Zzangu_darkPink: string;
      Zzangu_pinkBorder: string;
      Zzangu_pinkShadow: string;
    };
    fonts: {
      ZZangu_Pretendard_Bold_35: SerializedStyles;
      ZZangu_Pretendard_Semibold_20: SerializedStyles;
      ZZangu_Pretendard_Medium_16: SerializedStyles;
    };
  }
}

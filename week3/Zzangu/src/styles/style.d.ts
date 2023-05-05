import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Zzangu_Red: string;
      Zzangu_Yellow: string;
      Zzangu_YellowBorder: string;
      Zzangu_Blue: string;
      Zzangu_SkyBlue: string;
      Zzangu_Gray: string;
      Zzangu_Black: string;
      Zzangu_White: string;
      Zzangu_LightPink: string;
      Zzangu_Pink: string;
      Zzangu_DarkPink: string;
      Zzangu_PinkBorder: string;
      Zzangu_PinkShadow: string;
    };
    fonts: {
      ZZangu_Title: SerializedStyles;
      ZZangu_Score: SerializedStyles;
      ZZangu_Button1: SerializedStyles;
      ZZangu_Button2: SerializedStyles;
    };
  }
}

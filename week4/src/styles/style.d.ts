import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Weather_Background: string;
      Weather_Main: string;
      Weather_Sky: string;
      Weather_Cloud: string;
      Weather_Rain: string;
    };
    fonts: {
      Pretendard_Title: SerializedStyles;
      Pretendard_SubTitle: SerializedStyles;
      Pretendard_Content1: SerializedStyles;
      Pretendard_Content2: SerializedStyles;
    };
  }
}

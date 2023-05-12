import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Weather_Background: string;
      Weather_Main: string;
      Weather_White: string;
      Weather_Sky: string;
      Weather_Cloud: string;
      Weather_Rain: string;
    };
    fonts: {
      Pretendard_Title: SerializedStyles;
      Pretendard_Search: SerializedStyles;
      Pretendard_Temperature: SerializedStyles;
      Pretendard_Content1: SerializedStyles;
      Pretendard_Content2: SerializedStyles;
    };
  }
}

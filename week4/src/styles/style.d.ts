import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      Weather_Background: string;
      Weather_Main: string;
      Weather_White: string;
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

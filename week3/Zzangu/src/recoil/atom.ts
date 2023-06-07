import { atom } from 'recoil';

import { EASY_MODE } from '../datas/mode';

export const ModeState = atom<number>({
  key: 'Mode',
  default: EASY_MODE,
});

export const ScoreState = atom<number>({
  key: 'Score',
  default: 0,
});

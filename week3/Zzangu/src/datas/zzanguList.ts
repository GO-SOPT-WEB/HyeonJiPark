import {
  ImgZzangu01,
  ImgZzangu02,
  ImgZzangu03,
  ImgZzangu04,
  ImgZzangu05,
  ImgZzangu06,
  ImgZzangu07,
  ImgZzangu08,
  ImgZzangu09,
} from '../assets/images';

export interface Zzangu {
  id: number;
  src: string;
  alt: string;
}

const ZZANGU_LIST: Zzangu[] = [
  {
    id: 1,
    src: ImgZzangu01,
    alt: '짱구1',
  },
  {
    id: 2,
    src: ImgZzangu02,
    alt: '짱구2',
  },
  {
    id: 3,
    src: ImgZzangu03,
    alt: '짱구3',
  },
  {
    id: 4,
    src: ImgZzangu04,
    alt: '짱구4',
  },
  {
    id: 5,
    src: ImgZzangu05,
    alt: '짱구5',
  },
  {
    id: 6,
    src: ImgZzangu06,
    alt: '짱구6',
  },
  {
    id: 7,
    src: ImgZzangu07,
    alt: '짱구7',
  },
  {
    id: 8,
    src: ImgZzangu08,
    alt: '짱구8',
  },
  {
    id: 9,
    src: ImgZzangu09,
    alt: '짱구9',
  },
];

export default ZZANGU_LIST;

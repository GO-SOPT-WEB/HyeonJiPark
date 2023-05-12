import {
  IcClear,
  IcCloud1,
  IcCloud2,
  IcCloud3,
  IcMist,
  IcRain1,
  IcRain2,
  IcSnow,
  IcThunder,
} from '../assets/icons';
import { weatherType } from '../types/weatherInfo';

export const WEATHER_TYPE: weatherType[] = [
  {
    description: 'clear sky',
    imgURL: IcClear,
  },
  {
    description: 'few clouds',
    imgURL: IcCloud3,
  },
  {
    description: 'scattered clouds',
    imgURL: IcCloud1,
  },
  {
    description: 'overcast clouds',
    imgURL: IcCloud1,
  },
  {
    description: 'light rain',
    imgURL: IcRain1,
  },
  {
    description: 'heavy intensity rain',
    imgURL: IcRain1,
  },
  {
    description: 'broken clouds',
    imgURL: IcCloud2,
  },
  {
    description: 'shower rain',
    imgURL: IcRain2,
  },
  {
    description: 'rain',
    imgURL: IcRain1,
  },
  {
    description: 'thunderstorm',
    imgURL: IcThunder,
  },
  {
    description: 'snow',
    imgURL: IcSnow,
  },
  {
    description: 'mist',
    imgURL: IcMist,
  },
  {
    description: 'moderate rain',
    imgURL: IcRain1,
  },
];
